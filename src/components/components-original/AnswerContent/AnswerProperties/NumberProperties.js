import React from "react";
import PropTypes from "prop-types";
import Decimal from "components/components-original/AnswerContent/Decimal";
import Required from "components/components-original/AnswerContent/Required";
import MultiLineField from "components/components-original/AnswerContent/Format/MultiLineField";

const NumberProperties = ({
  answer,
  page,
  updateAnswer,
  updateAnswerOfType,
}) => {
  return (
    <>
      <MultiLineField id={`${answer.id}-decimals`} label="Decimal places">
        <Decimal
          id={`${answer.id}-decimals`}
          answer={answer}
          page={page}
          data-test="decimals"
          updateAnswerOfType={updateAnswerOfType}
          value={answer.properties.decimals}
        />
      </MultiLineField>
      <Required answer={answer} updateAnswer={updateAnswer} />
    </>
  );
};

NumberProperties.propTypes = {
  answer: PropTypes.object, //eslint-disable-line
  page: PropTypes.object, //eslint-disable-line
  updateAnswer: PropTypes.func,
  updateAnswerOfType: PropTypes.func,
};

export default NumberProperties;
