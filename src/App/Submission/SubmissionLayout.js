import React from "react";
import PropTypes from "prop-types";

import EditorLayout from "components/components-original/EditorLayout";

import Panel from "components/components-original/Panel";

const SubmissionLayout = ({ renderPanel, comments, children }) => (
  <EditorLayout
    preview
    comments={comments}
    title="Submission page"
    renderPanel={renderPanel}
  >
    <Panel>{children}</Panel>
  </EditorLayout>
);

SubmissionLayout.propTypes = {
  children: PropTypes.node.isRequired,
  comments: PropTypes.array, //eslint-disable-line
  renderPanel: PropTypes.func,
};

export default SubmissionLayout;
