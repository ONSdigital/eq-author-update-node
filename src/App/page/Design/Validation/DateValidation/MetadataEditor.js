import React from "react";
import PropTypes from "prop-types";
import { get } from "lodash";

import { METADATA_REQUIRED } from "constants/validationMessages";

import ValidationError from "components/components-original/ValidationError";
import MetadataContentPicker from "../MetadataContentPicker.js";

const MetadataEditor = ({ onChangeUpdate, answer, validation }) => {
  const hasError = validation.validationErrorInfo.errors.some(
    (error) => error.errorCode === "ERR_NO_VALUE"
  );

  return (
    <>
      <MetadataContentPicker
        answerId={answer.id}
        onSubmit={onChangeUpdate}
        selectedContentDisplayName={get(
          validation.previousAnswer,
          "displayName"
        )}
        selectedMetadataDisplayName={get(validation.metadata, "displayName")}
        selectedId={get(validation.previousAnswer, "id")}
        data-test="metadata-date-editor"
        hasError={hasError}
      />
      {hasError && (
        <ValidationError data-test="metadata-required-error">
          {METADATA_REQUIRED}
        </ValidationError>
      )}
    </>
  );
};

MetadataEditor.propTypes = {
  validation: PropTypes.shape({
    id: PropTypes.string.isRequired,
    previousAnswer: PropTypes.shape({
      displayName: PropTypes.string.isRequired,
    }),
  }).isRequired,
  answer: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  onChangeUpdate: PropTypes.func.isRequired,
};

export default MetadataEditor;
