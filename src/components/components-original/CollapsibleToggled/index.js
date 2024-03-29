import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "constants/theme";
import ToggleSwitch from "components/components-original/buttons/ToggleSwitch";

const Wrapper = styled.div``;
const Header = styled.div`
  display: flex;
  align-items: center;

  h2 {
    font-size: 1em;
    color: ${colors.black};
    margin-right: 1em;
    min-width: 7.5em;
  }
`;
const Body = styled.div`
  margin-top: -1em;
  margin-left: 0.1em;
  padding: 0 0 0 0.5em;
  border-left: 3px solid ${colors.lightGrey};
`;

const CollapsibleToggled = ({
  title,
  isOpen = false,
  headerContent,
  ariaLabel,
  children,
  onChange,
}) => {
  return (
    <Wrapper data-test="CollapsibleToggled">
      <Header data-test="CollapsibleToggled__Header">
        <h2>{title}</h2>
        <ToggleSwitch
          id={`${title}`}
          name={`${title}-toggle-switch`}
          hideLabels={false}
          onChange={onChange}
          checked={isOpen}
          ariaLabel={ariaLabel}
        />
        {headerContent}
      </Header>
      {isOpen && <Body data-test="CollapsibleToggled__Body">{children}</Body>}
    </Wrapper>
  );
};

export default CollapsibleToggled;

CollapsibleToggled.propTypes = {
  /**
   * The title of the collapsible.
   */
  title: PropTypes.string.isRequired,
  /**
   * If true, the collapsible will be open.
   */
  isOpen: PropTypes.bool,
  /**
   * Aria label to be read by a screen reader
   */
  ariaLabel: PropTypes.string,
  /**
   * Content to append to the end of the header, if necessary.
   */
  headerContent: PropTypes.node,
  /**
   * The content to show when the collapsible is open.
   */
  children: PropTypes.node.isRequired,
  /**
   * Function called when toggle value is changed.
   */
  onChange: PropTypes.func.isRequired,
};
