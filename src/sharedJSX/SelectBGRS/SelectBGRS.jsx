import React from "react";
import PropTypes from "prop-types";

import Select from "material-ui/Select";
import Input from "material-ui/Input";
import { MenuItem } from "material-ui/Menu";
import { Desktop, Mobile } from "__SHARED__/Responsive-Devices/Responsive-Devices";

const SelectBGRS = props => {
  const { value, onChange, input } = props;
  if (!props.data) {
    return "";
  }
  const Component = MenuItem;
  return [
    <Mobile key="mobile">
      <Select value={value} onChange={onChange} input={input}>
        {props.firstValue ? (
          <Component value={props.firstValue}>
            <em>{props.firstItem}</em>
          </Component>
        ) : (
          ""
        )}
        {typeof props.data[0] === "string"
          ? props.data.map(val => (
            <Component key={val} value={val}>
              {val}
            </Component>
            ))
          : props.data.map(val => (
            <Component key={val.key} value={val.key}>
              {val.value}
            </Component>
            ))}
      </Select>
    </Mobile>,
    <Desktop key="desktop">
      <Select value={value} onChange={onChange} input={<Input />} native>
        {props.firstValue ? (
          <option value={props.firstValue}>{props.firstItem}</option>
        ) : (
          ""
        )}
        {typeof props.data[0] === "string"
          ? props.data.map(val => (
            <option key={val} value={val}>
              {val}
            </option>
            ))
          : props.data.map(val => (
            <option key={val.key} value={val.key}>
              {val.value}
            </option>
            ))}
      </Select>
    </Desktop>
  ];
};

SelectBGRS.propTypes = {
  data: PropTypes.array.isRequired
};
export default SelectBGRS;
