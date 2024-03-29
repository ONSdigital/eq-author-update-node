import React from "react";
import PropTypes from "prop-types";
import { propType } from "graphql-anywhere";
import gql from "graphql-tag";
import styled from "styled-components";
import { flowRight } from "lodash";

import answerFragment from "graphql/fragments/answer.graphql";
import { Field, Label } from "components/components-original/Forms";
import WrappingInput from "components/components-original/Forms/WrappingInput";
import withEntityEditor from "components/components-original/withEntityEditor";
import VisuallyHidden from "components/components-original/VisuallyHidden";

import { colors } from "constants/theme";
import { DATE_LABEL_REQUIRED } from "constants/validationMessages";

import DummyDate from "../dummy/Date";
import withValidationError from "enhancers/withValidationError";

const Format = styled.div`
  padding: 1em;
  width: 300px;
  border-radius: 3px;
  opacity: 0.5 !important;
  border: 1px solid ${colors.black};
`;

const Fieldset = styled.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`;

const Legend = VisuallyHidden.withComponent("legend");

export const UnwrappedDate = ({
  label,
  name,
  answer,
  onChange,
  onUpdate,
  placeholder,
  showDay,
  showMonth,
  showYear,
  errorLabel,
  getValidationError,
  showDummyDate,
}) => {
  return (
    <Fieldset>
      <Legend>Date options</Legend>
      <Field>
        <Label htmlFor={`${name}-${answer.id}`}>{label}</Label>
        <WrappingInput
          id={`${name}-${answer.id}`}
          name={name}
          size="medium"
          onChange={onChange}
          onBlur={onUpdate}
          value={answer[name]}
          placeholder={placeholder}
          data-test="date-answer-label"
          data-autofocus
          bold
          errorValidationMsg={getValidationError({
            field: name,
            label: errorLabel,
            requiredMsg: DATE_LABEL_REQUIRED,
          })}
        />
      </Field>
      {showDummyDate && (
        <Field>
          <Label>Date</Label>
          <Format>
            <DummyDate
              showDay={showDay}
              showMonth={showMonth}
              showYear={showYear}
            />
          </Format>
        </Field>
      )}
    </Fieldset>
  );
};

UnwrappedDate.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  answer: propType(answerFragment),
  onChange: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  errorLabel: PropTypes.string,
  showDay: PropTypes.bool,
  showMonth: PropTypes.bool,
  showYear: PropTypes.bool,
  showDummyDate: PropTypes.bool,
  getValidationError: PropTypes.func,
};

UnwrappedDate.defaultProps = {
  label: "Label",
  name: "label",
  showDummyDate: true,
};

UnwrappedDate.fragments = {
  Date: gql`
    fragment Date on Answer {
      id
      label
      properties
      ... on BasicAnswer {
        options {
          id
          mutuallyExclusive
          label
        }
      }
    }
  `,
};

export default flowRight(
  withEntityEditor("answer"),
  withValidationError("answer")
)(UnwrappedDate);
