import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Label, Field } from "components/components-original/Forms";

import VisuallyHidden from "components/components-original/VisuallyHidden";
import ToggleSwitch from "components/components-original/buttons/ToggleSwitch";

const InlineField = styled(Field)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0.5em -0.8em;
`;

const FieldWithInclude = ({ children, id, name, onChange, ...otherProps }) => (
  <Fragment>
    <VisuallyHidden>
      <Label hidden>Value</Label>
    </VisuallyHidden>
    {children}
    <InlineField>
      <ToggleSwitch id={id} name={name} onChange={onChange} {...otherProps} />
      <Label inline htmlFor={id}>
        Include this number
      </Label>
    </InlineField>
  </Fragment>
);

FieldWithInclude.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FieldWithInclude;
