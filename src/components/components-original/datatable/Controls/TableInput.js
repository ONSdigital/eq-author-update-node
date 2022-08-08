import styled from "styled-components";

import { Input } from "components/components-original/Forms";

import { colors } from "constants/theme";

const TableInput = styled(Input)`
  border-radius: 0;
  border-color: transparent;
  &:focus,
  &:focus-within {
    outline: 3px solid ${colors.tertiary};
    box-shadow: none;
  }
`;

export default TableInput;
