import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useMutation } from "@apollo/react-hooks";
import { colors } from "constants/theme.js";

import RichTextEditor from "components/components-original/RichTextEditor";
import ToggleSwitch from "components/components-original/buttons/ToggleSwitch";
import { Label, Field } from "components/components-original/Forms";

import updateSubmissionMutation from "../../graphql/updateSubmission.graphql";

const Wrapper = styled.div`
  padding: 2em;
`;

const Section = styled.section`
  &:not(:last-of-type) {
    border-bottom: 1px solid ${colors.lightMediumGrey};
    margin-bottom: 1em;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.1em;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 1em;
`;

const SectionDescription = styled.p`
  margin: 0.1em 0 1em;
  color: ${({ theme }) => theme.colors.textLight};
`;

const InlineField = styled(Field)`
  display: flex;
  align-items: center;
  margin-bottom: 0.4em;

  > * {
    margin-bottom: 0;
  }
`;

const contentControls = {
  heading: true,
  bold: true,
  emphasis: true,
  list: true,
  link: true,
};

const countLinks = (furtherContent) => {
  // https://stackoverflow.com/questions/4009756/how-to-count-string-occurrence-in-string
  const linkCount = (furtherContent.match(/<a href/g) || []).length;

  return linkCount;
};

const SubmissionEditor = ({ submission }) => {
  const { furtherContent, viewPrintAnswers, emailConfirmation, feedback } =
    submission;

  const [updateSubmission] = useMutation(updateSubmissionMutation);

  return (
    <Wrapper data-test="submission-editor">
      <Section>
        <SectionTitle style={{ marginBottom: "0" }}>Page content</SectionTitle>
        <SectionDescription>
          Uneditable content is not listed in the design view of this page. To
          view all content, including uneditable content, use preview.
        </SectionDescription>
        <RichTextEditor
          id="submission-further-content"
          name="submissionFurtherContent"
          label="Further content"
          value={furtherContent}
          controls={contentControls}
          onUpdate={({ value }) =>
            updateSubmission({
              variables: {
                input: { furtherContent: value },
              },
            })
          }
          testSelector="txt-submission-further-content"
          multiline
          linkCount={countLinks(furtherContent)}
          linkLimit={2}
        />
      </Section>
      <Section>
        <SectionTitle style={{ marginBottom: "0" }}>
          Submission content
        </SectionTitle>
        <SectionDescription>
          The content that informs users how to view or print their answers, get
          a confirmation email or how they can give feedback are displayed on
          the submission page by default. You can choose not to display these
          elements
        </SectionDescription>
        <InlineField>
          <Label htmlFor="viewPrintAnswers">View/print answers</Label>
          <ToggleSwitch
            name="view-print-answers"
            id="viewPrintAnswers"
            onChange={({ value }) =>
              updateSubmission({
                variables: {
                  input: { viewPrintAnswers: value },
                },
              })
            }
            checked={viewPrintAnswers}
            hideLabels={false}
            value="viewPrintAnswers"
          />
        </InlineField>
        <InlineField>
          <Label htmlFor="emailConfirmation">Email confirmation</Label>
          <ToggleSwitch
            name="email-confirmation"
            id="emailConfirmation"
            onChange={({ value }) =>
              updateSubmission({
                variables: {
                  input: { emailConfirmation: value },
                },
              })
            }
            checked={emailConfirmation}
            hideLabels={false}
            value="emailConfirmation"
          />
        </InlineField>
        <InlineField>
          <Label htmlFor="feedback">Feedback</Label>
          <ToggleSwitch
            name="feedback"
            id="feedback"
            onChange={({ value }) =>
              updateSubmission({
                variables: {
                  input: { feedback: value },
                },
              })
            }
            checked={feedback}
            hideLabels={false}
            value="feedback"
          />
        </InlineField>
      </Section>
    </Wrapper>
  );
};

SubmissionEditor.propTypes = {
  submission: PropTypes.shape({
    id: PropTypes.string.isRequired,
    furtherContent: PropTypes.string,
    viewPrintAnswers: PropTypes.bool,
    emailConfirmation: PropTypes.bool,
    feedback: PropTypes.bool,
  }),
  renderPanel: PropTypes.func,
};

export default SubmissionEditor;
