import React from "react";
import ContentPickerSelect from "components/components-original/ContentPickerSelect";
import { METADATA } from "components/components-original/ContentPickerSelect/content-types";
import { useQuestionnaire } from "components/components-original/QuestionnaireContext";

import { DATE } from "constants/metadata-types";

export const MetadataContentPicker = ({ ...otherProps }) => {
  const { questionnaire } = useQuestionnaire();

  return (
    <ContentPickerSelect
      name="metadata"
      contentTypes={[METADATA]}
      metadataData={
        questionnaire?.metadata?.filter(({ type }) => type === DATE.value) || []
      }
      {...otherProps}
    />
  );
};

export default MetadataContentPicker;
