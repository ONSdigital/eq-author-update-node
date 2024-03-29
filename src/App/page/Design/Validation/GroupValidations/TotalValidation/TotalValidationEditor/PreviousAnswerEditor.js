import React from "react";
import PropTypes from "prop-types";
import { get } from "lodash";

import { Field } from "components/components-original/Forms";
import ValidationError from "components/components-original/ValidationError";

import { usePage } from "components/components-original/QuestionnaireContext";

import {
  ERR_REFERENCE_DELETED,
  ERR_REFERENCE_MOVED,
} from "constants/validationMessages";

import PreviousAnswerContentPicker from "../../../PreviousAnswerContentPicker";

export const errorMessages = {
  ERR_NO_VALUE: "Answer required",
  ERR_REFERENCE_DELETED,
  ERR_REFERENCE_MOVED,
};

const PreviousAnswerEditor = ({ total, onChangeUpdate, errors }) => {
  const error = errors?.[0];

  const page = usePage();
  const allowedAnswerType = page?.answers?.[0]?.type;

  return (
    <Field>
      <PreviousAnswerContentPicker
        onSubmit={onChangeUpdate}
        selectedContentDisplayName={get(total.previousAnswer, "displayName")}
        data-test="content-picker-select"
        allowedAnswerTypes={[allowedAnswerType]}
        hasError={Boolean(error)}
      />
      {error && (
        <ValidationError>{errorMessages[error.errorCode]}</ValidationError>
      )}
    </Field>
  );
};

PreviousAnswerEditor.propTypes = {
  total: PropTypes.shape({
    previousAnswer: PropTypes.shape({
      displayName: PropTypes.string.isRequired,
    }),
  }).isRequired,
  onChangeUpdate: PropTypes.func.isRequired,
  errors: PropTypes.arrayOf(
    PropTypes.shape({
      errorCode: PropTypes.string,
      field: PropTypes.string,
      id: PropTypes.string,
      type: PropTypes.string,
    })
  ),
};

export default PreviousAnswerEditor;
