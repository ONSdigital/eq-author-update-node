/*  eslint-disable react/no-danger */
import React from "react";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";

import PropTypes from "prop-types";
import CustomPropTypes from "custom-prop-types";

import { colors } from "constants/theme";
import Loading from "components/components-original/Loading";
import PageTitle from "components/components-original/preview/elements/PageTitle";
import CommentsPanel from "App/Comments";
import IntroductionLayout from "../../IntroductionLayout";
import { LEGAL_BASIS_OPTIONS } from "App/settings/LegalBasisSelect";
import iconChevron from "../icon-chevron.svg";

import GET_THEME_SETTINGS_QUERY from "graphql/getThemeSettings.graphql";

const Container = styled.div`
  padding: 2em;
  word-break: break-word;
  font-size: 1.1em;
  p {
    margin: 0 0 1em;
  }
  p:last-of-type {
    margin-bottom: 0;
  }
  em {
    background-color: ${colors.highlightGreen};
    padding: 0 0.125em;
    font-style: normal;
  }
  span[data-piped] {
    background-color: #e0e0e0;
    padding: 0 0.125em;
    border-radius: 4px;
    white-space: pre;
  }
`;

const Description = styled.div`
  margin-bottom: 1rem;

  li {
    margin-bottom: 0.3em;
  }
`;

const Button = styled.div`
  color: white;
  background-color: ${colors.green};
  border: 2px solid ${colors.green};
  padding: 0.75rem 1rem;
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 3px;
  display: inline-block;
  text-rendering: optimizeLegibility;
  margin-bottom: 2em;
`;

const GuidancePanel = styled.div`
  margin-top: 1em;
  margin-bottom: 1em;
  border-left: solid 0.6em ${colors.darkerBlue};
  padding: 1em;
  background-color: ${colors.paleBlue};
  h2 {
    padding-top: 0;
    margin-top: 0;
  }
`;

export const Collapsibles = styled.div`
  margin-bottom: 1em;
`;

const CollapsiblesTitle = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.primary};
  margin-bottom: 0.5em;
  &::before {
    width: 32px;
    height: 32px;
    display: inline-block;
    margin-left: -10px;
    content: url(${iconChevron});
    transform: rotate(90deg);
  }
`;

const CollapsiblesContent = styled.div`
  border-left: 2px solid ${colors.grey};
  margin-left: 6px;
  padding: 0.2em 0 0.2em 1em;
`;

const BlueUnderlined = styled.text`
  color: ${colors.blue};
  text-decoration: underline;
`;

const MissingText = styled.text`
  font-weight: bold;
  background-color: ${colors.errorSecondary};
  text-align: center;
  padding: 0.02em 0.1em;
`;

const IntroductionPreview = ({ loading, data, match }) => {
  const { questionnaireId } = match.params;
  const { data: questionnaireData } = useQuery(GET_THEME_SETTINGS_QUERY, {
    variables: {
      input: { questionnaireId },
    },
  });

  const questionnaire = questionnaireData?.questionnaire;
  const themes = questionnaire?.themeSettings?.themes;
  const previewTheme = questionnaire?.themeSettings?.previewTheme;

  const legalBasisCode = themes?.find(
    (theme) => theme.id === previewTheme
  ).legalBasisCode;

  const legalBasis = LEGAL_BASIS_OPTIONS.find(
    (legalBasisOption) => legalBasisOption.value === legalBasisCode
  );

  if (loading) {
    return <Loading height="38rem">Preview loading…</Loading>;
  }

  const {
    questionnaireIntroduction: {
      id,
      title,
      contactDetailsPhoneNumber,
      contactDetailsEmailAddress,
      additionalGuidancePanel,
      additionalGuidancePanelSwitch,
      description,
      secondaryTitle,
      secondaryDescription,
      collapsibles,
      tertiaryTitle,
      tertiaryDescription,
      comments,
    },
  } = data;

  return (
    <IntroductionLayout
      renderPanel={() => <CommentsPanel comments={comments} componentId={id} />}
      comments={comments}
    >
      <Container>
        <PageTitle missingText="Missing introduction title" title={title} />
        If the company details or structure have changed contact us on{" "}
        {contactDetailsPhoneNumber !== "" ? (
          <BlueUnderlined>{contactDetailsPhoneNumber}</BlueUnderlined>
        ) : (
          <MissingText>Phone number missing</MissingText>
        )}{" "}
        or email{" "}
        {contactDetailsEmailAddress !== "" ? (
          <BlueUnderlined>{contactDetailsEmailAddress}</BlueUnderlined>
        ) : (
          <MissingText>Email address missing </MissingText>
        )}
        {additionalGuidancePanelSwitch && (
          <GuidancePanel
            data-test="additionalGuidancePanel"
            dangerouslySetInnerHTML={{ __html: additionalGuidancePanel }}
          />
        )}
        <Description
          data-test="description"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        {legalBasisCode !== "VOLUNTARY" && (
          <>
            <PageTitle title="Your response is legally required" />
            <Description
              dangerouslySetInnerHTML={{ __html: legalBasis?.description }}
            />
          </>
        )}
        <Button>Start survey</Button>
        <PageTitle
          missingText="Missing secondary title"
          title={secondaryTitle}
        />
        <Description
          dangerouslySetInnerHTML={{ __html: secondaryDescription }}
        />
        {collapsibles
          .filter((collapsible) => collapsible.title && collapsible.description)
          .map((collapsible, index) => (
            <Collapsibles key={index}>
              <CollapsiblesTitle
                dangerouslySetInnerHTML={{
                  __html: collapsible.title,
                }}
              />
              <CollapsiblesContent>
                <span
                  dangerouslySetInnerHTML={{
                    __html: collapsible.description,
                  }}
                />
              </CollapsiblesContent>
            </Collapsibles>
          ))}
        <PageTitle missingText="Missing tertiary title" title={tertiaryTitle} />
        <Description
          dangerouslySetInnerHTML={{ __html: tertiaryDescription }}
        />
      </Container>
    </IntroductionLayout>
  );
};

IntroductionPreview.propTypes = {
  data: PropTypes.shape({
    questionnaireIntroduction: CustomPropTypes.introduction,
  }),
  loading: PropTypes.bool.isRequired,
  match: CustomPropTypes.match.isRequired,
};

export default IntroductionPreview;
