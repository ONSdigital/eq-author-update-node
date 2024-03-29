import React from "react";
import PropTypes from "prop-types";
import { flowRight } from "lodash";
import styled from "styled-components";

import CustomPropTypes from "custom-prop-types";

import Error from "components/components-original/Error";
import Loading from "components/components-original/Loading";

import ScrollPane from "components/components-original/ScrollPane";
import Header from "components/components-original/EditorLayout/Header";
import { Grid } from "components/components-original/Grid";
import { colors } from "constants/theme";
import MainCanvas from "components/components-original/MainCanvas";
import InfoIcon from "./icon-info.svg?inline";
import IconText from "components/components-original/IconText";

import MetadataTable from "./MetadataTable";
import NoMetadata from "./NoMetadata";

import withCreateMetadata from "./withCreateMetadata";
import withDeleteMetadata from "./withDeleteMetadata";
import withUpdateMetadata from "./withUpdateMetadata";
import GetMetadataQuery from "./GetMetadataQuery";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledGrid = styled(Grid)`
  overflow: hidden;
  &:focus-visible {
    border: 3px solid ${colors.focus};
    margin: 0;
    outline: none;
  }
`;

const Info = styled(IconText)`
  padding: 2em;
  justify-content: left;
`;

const StyledMainCanvas = styled(MainCanvas)`
  padding: 0 0.5em 0 1em;
  max-width: 80em;
`;

export const UnwrappedMetadataPageContent = ({
  loading,
  error,
  data,
  onAddMetadata,
  onDeleteMetadata,
  onUpdateMetadata,
}) => {
  if (loading && !data) {
    return <Loading height="100%">Questionnaire metadata loading…</Loading>;
  }

  if (error) {
    return <Error>Oops! Something went wrong</Error>;
  }

  const { questionnaire } = data;
  if (!questionnaire) {
    return <Error>Oops! Questionnaire could not be found</Error>;
  }

  const hasMetadata = questionnaire.metadata.length > 0;

  return (
    <Container>
      <Header title="Metadata" />
      {hasMetadata && (
        <Info icon={InfoIcon}>
          Metadata can be piped into questions within your questionnaire. When a
          survey is published, we connect the metadata to a sample file so
          respondents see actual values.
        </Info>
      )}
      {hasMetadata ? (
        <StyledGrid tabIndex="-1" className="keyNav">
          <ScrollPane data-test="metadata-modal-content">
            <StyledMainCanvas>
              <MetadataTable
                metadata={questionnaire.metadata}
                questionnaireId={questionnaire.id}
                onAdd={onAddMetadata}
                onDelete={onDeleteMetadata}
                onUpdate={onUpdateMetadata}
              />
            </StyledMainCanvas>
          </ScrollPane>
        </StyledGrid>
      ) : (
        <NoMetadata onAddMetadata={() => onAddMetadata(questionnaire.id)} />
      )}
    </Container>
  );
};

UnwrappedMetadataPageContent.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object, // eslint-disable-line
  data: PropTypes.shape({
    questionnaire: CustomPropTypes.questionnaire,
  }),
  onAddMetadata: PropTypes.func.isRequired,
  onDeleteMetadata: PropTypes.func.isRequired,
  onUpdateMetadata: PropTypes.func.isRequired,
};

const MetadataPageContent = flowRight(
  withCreateMetadata,
  withDeleteMetadata,
  withUpdateMetadata
)(UnwrappedMetadataPageContent);

const MetadataPage = ({
  match: {
    params: { questionnaireId },
  },
}) => (
  <GetMetadataQuery questionnaireId={questionnaireId}>
    {(props) => <MetadataPageContent {...props} />}
  </GetMetadataQuery>
);

MetadataPage.propTypes = {
  match: CustomPropTypes.match.isRequired,
};

export default MetadataPage;
