import React from "react";
import styled from "styled-components";
import { useMutation } from "@apollo/react-hooks";

import { TransitionGroup } from "react-transition-group";
import CustomPropTypes from "custom-prop-types";

import CREATE_DISPLAY_MUTATION from "graphql/createDisplayCondition.graphql";

import DisplayEditor from "./DisplayEditor";
import NoDisplayLogic from "App/shared/Logic/Display/NoDisplayLogic";

import Panel from "components/components-original/Panel";
import Transition from "components/components-original/transitions/BounceTransition";

const messages = {
  NO_LOGIC_EXISTS: "No display logic exists for this section",
  HUB_INACTIVE:
    "You can only add display logic when hub navigation is turned on. You can turn on hub navigation in Settings.",
  DEFAULT_DISPLAY:
    "All respondents will see this section unless display logic is added. When you add display logic rules,  the section will only show to respondents if the conditions of any of the rules are met.",
  FIRST_SECTION:
    "You can't add display logic to the first section in a questionnaire",
};

const Title = styled.h2`
  font-size: 1.8em;
  font-weight: 600;
  margin-bottom: 0.5em;
`;

const Paragraph = styled.p`
  margin: 0;
`;

export const DisplayPageContent = ({ section }) => {
  const { id, questionnaire, position } = section;

  const [createDisplayCondition] = useMutation(CREATE_DISPLAY_MUTATION, {
    variables: { input: { sectionId: id } },
  });

  const isFirstSection = position === 0;

  return (
    <div data-test="display-page-content">
      <TransitionGroup>
        <Transition
          key={
            section.displayConditions
              ? "display-rule-set"
              : "display-rule-set-empty"
          }
        >
          {section.displayConditions && questionnaire.hub ? (
            <DisplayEditor
              onAddDisplay={createDisplayCondition}
              displayConditions={section.displayConditions}
              sectionId={id}
            />
          ) : (
            <Panel>
              <NoDisplayLogic
                onAddDisplay={createDisplayCondition}
                data-test="display-conditions-empty"
                disabled={!questionnaire.hub || isFirstSection}
              >
                <Title>{messages.NO_LOGIC_EXISTS}</Title>
                {questionnaire.hub && !isFirstSection ? (
                  <Paragraph>{messages.DEFAULT_DISPLAY}</Paragraph>
                ) : !questionnaire.hub ? (
                  <Paragraph>{messages.HUB_INACTIVE}</Paragraph>
                ) : (
                  questionnaire.hub &&
                  isFirstSection && (
                    <Paragraph>{messages.FIRST_SECTION}</Paragraph>
                  )
                )}
              </NoDisplayLogic>
            </Panel>
          )}
        </Transition>
      </TransitionGroup>
    </div>
  );
};

DisplayPageContent.propTypes = {
  section: CustomPropTypes.section,
};

export default DisplayPageContent;
