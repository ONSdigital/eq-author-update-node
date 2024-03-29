import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import SavingIcon from "assets/icon-saving.svg";
import timer from "utils/timer";
import { connect } from "react-redux";
import { isSaving, hasError } from "redux/saving/reducer";
import FadeTransition from "components/components-original/transitions/FadeTransition";
import { TransitionGroup } from "react-transition-group";
import IconText from "components/components-original/IconText";

const Container = styled.div`
  --color-text: white;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0deg);
  }
`;

const Icon = styled(SavingIcon)`
  animation: ${rotate360} 3s linear infinite;
`;

export class UnconnectedSavingIndicator extends React.Component {
  static propTypes = {
    /**
     * If true the indicator will be be shown
     */
    isSaving: PropTypes.bool.isRequired,
    /**
     * If true the indicator will not be shown
     */
    hasError: PropTypes.bool.isRequired,
    /**
     * If true the indicator will not be shown
     */
    isUnauthorized: PropTypes.bool,
    /**
     * Default min duration in milliseconds
     */
    minDisplayTime: PropTypes.number,
  };

  static defaultProps = {
    minDisplayTime: 1000,
  };

  constructor(props) {
    super(props);
    this.state = {
      timerRunning: false,
    };
    this.timer = timer(this.handleClose, this.props.minDisplayTime);
  }

  handleClose = () => {
    this.setState({
      timerRunning: false,
    });
  };

  componentDidUpdate(prevProps) {
    if (!prevProps.isSaving && this.props.isSaving) {
      this.timer.start();
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        timerRunning: true,
      });
    }
  }

  componentWillUnmount() {
    this.timer.stop();
  }

  renderIndicator() {
    return (
      <FadeTransition>
        <Container>
          <IconText icon={Icon} data-test="saving-indicator">
            Saving
          </IconText>
        </Container>
      </FadeTransition>
    );
  }

  render() {
    const isVisible =
      !this.props.hasError &&
      !this.props.isUnauthorized &&
      (this.props.isSaving || this.state.timerRunning);
    return (
      <TransitionGroup>
        {isVisible ? this.renderIndicator() : null}
      </TransitionGroup>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSaving: isSaving(state),
    hasError: hasError(state),
  };
};

export default connect(mapStateToProps)(UnconnectedSavingIndicator);
