import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import CustomPropTypes from "custom-prop-types";
import { AddRowButton } from "components/components-original/datatable/Controls";
import IconText from "components/components-original/IconText";
import Icon from "components/components-original/datatable/icon-plus.svg?inline";
import { Label } from "components/components-original/Forms";
import { colors } from "constants/theme";

import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableFoot,
  TableColumn,
  TableHeadColumn,
} from "components/components-original/datatable/Elements";

import Row from "./Row";

const StyledLabel = styled(Label)`
  line-height: normal;
  vertical-align: baseline;
  margin-bottom: 0;
  color: ${colors.darkGrey};
`;

const MetadataTable = ({
  questionnaireId,
  metadata,
  onDelete,
  onUpdate,
  onAdd,
}) => {
  const keyData = metadata.filter(({ key }) => key);
  const usedKeys = keyData.map(({ key }) => key);

  return (
    <Table data-test="metadata-table">
      <TableHead>
        <TableRow>
          <TableHeadColumn width="15%">Key</TableHeadColumn>
          <TableHeadColumn width="15%">
            <StyledLabel htmlFor={"metadata-alias-column"}>Alias</StyledLabel>
          </TableHeadColumn>
          <TableHeadColumn width="15%">Type</TableHeadColumn>
          <TableHeadColumn width="40%">
            <StyledLabel htmlFor={"metadata-value-column"}>Value</StyledLabel>
          </TableHeadColumn>
          <TableHeadColumn width="15%">Fallback</TableHeadColumn>
          <TableHeadColumn width="34px" />
        </TableRow>
      </TableHead>
      <TableBody>
        {metadata.map((row) => (
          <Row
            key={row.id}
            metadata={row}
            onDelete={onDelete}
            onUpdate={onUpdate}
            questionnaireId={questionnaireId}
            usedKeys={usedKeys}
            keyData={keyData}
          />
        ))}
      </TableBody>
      <TableFoot>
        <TableRow>
          <TableColumn colSpan="6">
            <AddRowButton
              data-test="metadata-add-row"
              onClick={() => onAdd(questionnaireId)}
              variant="tertiary"
              small
            >
              <IconText icon={Icon} dark>
                Add metadata
              </IconText>
            </AddRowButton>
          </TableColumn>
        </TableRow>
      </TableFoot>
    </Table>
  );
};

MetadataTable.propTypes = {
  metadata: PropTypes.arrayOf(CustomPropTypes.metadata).isRequired,
  questionnaireId: PropTypes.string.isRequired,
  onAdd: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default MetadataTable;
