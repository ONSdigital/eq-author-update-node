import React from "react";
import styled from "styled-components";
import PropType from "prop-types";
import  Grid from "../../components/Grid/Grid.js"//"../../components/Grid/index.js";
import Column  from "../../components/Grid/Column.js"//"../../components/Grid/index.js";

import logo from "../../assets/ons-logo.svg";

const DefaultFooter = styled.div`
  background-color: ${({ theme }) => theme.colors.textBannerLink};
  padding: ${({ centerCols }) =>
    centerCols === 9 ? "1.5rem 0 3rem 1rem" : "1.5rem 0 3rem 0"};
  height: 95px;
`;

const Footer = ({ centerCols }) => {
  return (
    <DefaultFooter data-test="footer">
      <Grid horizontalAlign="center">
        <Column cols={centerCols}>
          <img src={logo} alt="Office for National Statistics logo" />
        </Column>
      </Grid>
    </DefaultFooter>
  );
};

Footer.propTypes = {
  centerCols: PropType.number,
};

Footer.defaultProps = {
  centerCols: 12,
};

export default Footer;
