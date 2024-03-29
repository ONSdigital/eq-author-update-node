import React from "react";
import CustomPropTypes from "custom-prop-types";

import Header from "components/components-original/EditorLayout/Header";
import ScrollPane from "components/components-original/ScrollPane";

import Panel from "components/components-original/Panel";
import ShareContent from "./SharePageContent";

import { Container, StyledGrid, StyledMainCanvas } from "./styles/SharePage";

const propTypes = {
  SharePage: {
    match: CustomPropTypes.match.isRequired,
  },
};

const SharePage = (props) => {
  const { questionnaireId } = props.match.params;
  return (
    <Container>
      <Header title="Sharing" />
      <StyledGrid tabIndex="-1" className="keyNav">
        <ScrollPane data-test="sharing-page-content">
          <StyledMainCanvas>
            <Panel>
              <ShareContent questionnaireId={questionnaireId} />
            </Panel>
          </StyledMainCanvas>
        </ScrollPane>
      </StyledGrid>
    </Container>
  );
};

SharePage.propTypes = propTypes.SharePage;

export default SharePage;
