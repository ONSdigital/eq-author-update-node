import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "constants/theme";
import { Field, Input, Label } from "components/components-original/Forms";
import PropTypes from "prop-types";
import { withRouter, useParams } from "react-router-dom";

import { useMutation } from "@apollo/react-hooks";

import { getThemeSettingsErrorCount } from "./utils";
import { enableOn, disableOn } from "utils/featureFlags";

import updateQuestionnaireMutation from "graphql/updateQuestionnaire.graphql";
import updateQuestionnaireIntroductionMutation from "./graphql/updateQuestionnaireIntroduction.graphql";

import VerticalTabs from "components/components-original/VerticalTabs";
import tabItems from "./TabItems";

import { Grid, Column } from "components/components-original/Grid";
import Header from "components/components-original/EditorLayout/Header";
import ScrollPane from "components/components-original/ScrollPane";
import ToggleSwitch from "components/components-original/buttons/ToggleSwitch";
import { InformationPanel } from "components/components-original/Panel";

import { BUSINESS } from "constants/questionnaire-types";

const StyledPanel = styled.div`
  max-width: 97.5%;
  padding: 1.3em;
`;

const StyledInput = styled(Input)`
  width: 31em;
`;

const Caption = styled.p`
  margin-top: 0.2em;
  margin-bottom: 0.6em;
  font-size: 0.85em;
`;

const HorizontalSeparator = styled.hr`
  border: 0;
  border-top: 0.0625em solid ${colors.lightMediumGrey};
  margin: 1.5em 0;
`;

const EnableDisableWrapper = styled.div`
  opacity: ${(props) => (props.disabled ? "0.6" : "1")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;

const InlineField = styled(Field)`
  display: flex;
  align-items: center;
  margin-bottom: 0.4em;

  > * {
    margin-bottom: 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`;

const SettingsContainer = styled.div`
  padding: 0.8em;
  border-left: 1px solid ${colors.lightGrey};
`;

const PageMainCanvas = styled.div`
  display: flex;
  border: 1px solid ${colors.lightGrey};
  border-radius: 4px;
  background: ${colors.white};
`;

const PageContainer = styled.div`
  padding: 0.8em;
  border-left: 1px solid ${colors.lightGrey};
  &:focus {
    border: 3px solid #fdbd56;
    margin: 0;
    outline: none;
  }
  &:focus:not(:focus-visible) {
    border: none;
    margin: 0;
    outline: none;
  }
`;

const Pill = ({ children, testId }) => {
  const Container = styled.div`
    width: 4em;
    padding: 0.5em 1em;
    box-sizing: content-box;
    background-color: ${colors.lightMediumGrey};
    text-align: center;

    p {
      margin: 0;
      font-weight: bold;
    }
  `;
  return (
    <Container>
      <p data-test={testId}>{children}</p>
    </Container>
  );
};

Pill.propTypes = {
  children: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
};

const GeneralSettingsPage = ({ questionnaire }) => {
  const {
    title,
    shortTitle,
    type,
    id,
    qcodes,
    navigation,
    hub,
    summary,
    introduction,
  } = questionnaire;

  const showOnHub = introduction?.showOnHub;

  const handleTitleChange = ({ value }) => {
    value = value.trim();
    if (value !== "") {
      updateQuestionnaire({
        variables: { input: { id, title: value } },
      });
    }
  };

  const handleShortTitleChange = ({ value }) => {
    value = value.trim();
    updateQuestionnaire({
      variables: { input: { id, shortTitle: value } },
    });
  };

  const [updateQuestionnaire] = useMutation(updateQuestionnaireMutation);
  const [updateQuestionnaireIntroduction] = useMutation(
    updateQuestionnaireIntroductionMutation
  );
  const [questionnaireTitle, setQuestionnaireTitle] = useState(title);
  const [questionnaireShortTitle, setQuestionnaireShortTitle] =
    useState(shortTitle);

  const params = useParams();

  return (
    <Container>
      <ScrollPane>
        <Header title="Settings" />
        <PageContainer tabIndex="-1" className="keyNav">
          <PageMainCanvas>
            <Grid>
              <VerticalTabs
                title="Questionnaire settings"
                cols={2.5}
                tabItems={tabItems({
                  params,
                  type,
                  themeErrorCount: getThemeSettingsErrorCount(questionnaire),
                })}
              />
              <Column gutters={false} cols={9.5}>
                <SettingsContainer>
                  <StyledPanel>
                    <Field>
                      <Label htmlFor="questionnaireTitle">
                        Questionnaire title
                      </Label>
                      <Caption>Changes the questionnaire&apos;s title.</Caption>
                      <StyledInput
                        id="questionnaireTitle"
                        value={questionnaireTitle}
                        onChange={({ value }) => setQuestionnaireTitle(value)}
                        onBlur={(e) => handleTitleChange({ ...e.target })}
                        data-test="change-questionnaire-title"
                      />
                    </Field>
                    <Field>
                      <Label htmlFor="shortTitle">Short title (optional)</Label>
                      <Caption>
                        {shortTitle ? "Changes" : "Adds"} the
                        questionnaire&apos;s short title. This is only used
                        within Author. Respondents always see the full
                        questionnaire title.
                      </Caption>
                      <StyledInput
                        id="shortTitle"
                        value={questionnaireShortTitle}
                        onChange={({ value }) =>
                          setQuestionnaireShortTitle(value)
                        }
                        onBlur={(e) => handleShortTitleChange({ ...e.target })}
                        data-test="change-questionnaire-short-title"
                      />
                    </Field>
                    <HorizontalSeparator />
                    <Field>
                      <Label>Questionnaire type</Label>
                      <Pill testId="questionnaire-type">{type}</Pill>
                    </Field>
                    <HorizontalSeparator />
                    <InlineField>
                      <Label htmlFor="toggle-qcodes">QCodes</Label>
                      <ToggleSwitch
                        id="toggle-qcodes"
                        name="toggle-qcodes"
                        hideLabels={false}
                        onChange={({ value }) =>
                          updateQuestionnaire({
                            variables: {
                              input: { id, qcodes: value },
                            },
                          })
                        }
                        checked={qcodes}
                      />
                    </InlineField>
                    <Caption>
                      QCodes are a way to identify answers when they&apos;re
                      sent downstream.
                    </Caption>
                    <HorizontalSeparator />
                    {enableOn(["hub"]) && (
                      <>
                        {type === BUSINESS && (
                          <EnableDisableWrapper
                            data-test="toggle-hub-introduction-wrapper"
                            disabled={!hub}
                          >
                            <InlineField disabled={!hub}>
                              <Label htmlFor="toggle-hub-introduction">
                                Show introduction page on hub
                              </Label>
                              <ToggleSwitch
                                id="toggle-hub-introduction"
                                name="toggle-hub-introduction"
                                hideLabels={false}
                                onChange={({ value }) =>
                                  updateQuestionnaireIntroduction({
                                    variables: {
                                      input: { id, showOnHub: value },
                                    },
                                  })
                                }
                                checked={showOnHub}
                              />
                            </InlineField>
                          </EnableDisableWrapper>
                        )}
                      </>
                    )}
                    {disableOn(["hub"]) && (
                      <>
                        <InlineField>
                          <Label>Section navigation</Label>
                          <ToggleSwitch
                            id="toggle-section-navigation"
                            name="toggle-section-navigation"
                            hideLabels={false}
                            onChange={({ value }) =>
                              updateQuestionnaire({
                                variables: {
                                  input: { id, navigation: value, hub: false },
                                },
                              })
                            }
                            checked={navigation}
                          />
                        </InlineField>
                        <InformationPanel>
                          Let respondents move between sections while
                          they&apos;re completing the questionnaire.
                        </InformationPanel>
                      </>
                    )}
                    <HorizontalSeparator />
                    <Label>Summary page</Label>
                    <Caption>
                      Let respondents view and change their answers before
                      submitting them. You can set the list of sections to be
                      collapsible, so respondents can show and hide their
                      answers for individual sections.
                    </Caption>

                    <EnableDisableWrapper disabled={hub}>
                      <InlineField>
                        <Label htmlFor="toggle-answer-summary">
                          Answers summary
                        </Label>
                        <ToggleSwitch
                          id="toggle-answer-summary"
                          name="toggle-answer-summary"
                          hideLabels={false}
                          disabled={hub}
                          onChange={({ value }) =>
                            updateQuestionnaire({
                              variables: {
                                input: {
                                  id,
                                  summary: value,
                                  collapsibleSummary: false,
                                },
                              },
                            })
                          }
                          checked={summary}
                        />
                      </InlineField>
                    </EnableDisableWrapper>
                  </StyledPanel>
                </SettingsContainer>
              </Column>
            </Grid>
          </PageMainCanvas>
        </PageContainer>
      </ScrollPane>
    </Container>
  );
};

GeneralSettingsPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  questionnaire: PropTypes.object.isRequired,
};

export default withRouter(GeneralSettingsPage);
