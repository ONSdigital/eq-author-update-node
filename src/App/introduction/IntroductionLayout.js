import React from "react";
import PropTypes from "prop-types";

import EditorLayout from "components/components-original/EditorLayout";

import Panel from "components/components-original/Panel";

const IntroductionLayout = ({ renderPanel, comments, children }) => (
  <EditorLayout
    preview
    title="Introduction"
    renderPanel={renderPanel}
    comments={comments}
  >
    <Panel>{children}</Panel>
  </EditorLayout>
);

IntroductionLayout.propTypes = {
  children: PropTypes.node.isRequired,
  renderPanel: PropTypes.func,
  comments: PropTypes.array, //eslint-disable-line
};

export default IntroductionLayout;
