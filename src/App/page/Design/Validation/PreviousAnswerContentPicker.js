import React, { useMemo } from "react";

import ContentPickerSelect from "components/components-original/ContentPickerSelect/index";
import { ANSWER } from "components/components-original/ContentPickerSelect/content-types";

import { useQuestionnaire } from "components/components-original/QuestionnaireContext";
import { useCurrentPageId } from "components/components-original/RouterContext";
import getContentBeforePage from "utils/getContentBeforeEntity";
import PropTypes from "prop-types";

import allAnswerTypes from "constants/answer-types";

export const PreviousAnswerContentPicker = ({
  allowedAnswerTypes = allAnswerTypes,
  ...props
}) => {
  const { questionnaire } = useQuestionnaire();
  const id = useCurrentPageId();

  const sections = useMemo(
    () =>
      getContentBeforePage({
        questionnaire,
        id,
        preprocessAnswers: (answer) =>
          allowedAnswerTypes.includes(answer.type) ? answer : [],
      }),
    [questionnaire, id, allowedAnswerTypes]
  );

  return (
    <ContentPickerSelect
      name="previousAnswer"
      contentTypes={[ANSWER]}
      answerData={sections}
      {...props}
    />
  );
};

PreviousAnswerContentPicker.propTypes = {
  allowedAnswerTypes: PropTypes.arrayOf(PropTypes.string),
};

export default PreviousAnswerContentPicker;
