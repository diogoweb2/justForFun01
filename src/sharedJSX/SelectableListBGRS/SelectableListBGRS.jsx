import React from "react";
import PropTypes from "prop-types";

const SelectableListBGRS = props => {
  const handleItemClick = child => event => {
    if (props.onChange) {
      const id = child.props.id ? child.props.id : child.props.value;

      props.onChange(
        {
          ...event,
          target: {
            id,
            ...child.props
          }
        },
        child
      );
    }
  };

  const { value, children, ComponentToRender, disabled, button } = props;

  const items = React.Children.map(children, child => {
    const valChild = child.props.id ? child.props.id : child.props.value;
    const selected = child.props.value ? value === valChild : false;

    return React.cloneElement(child, {
      selected,
      onClick: handleItemClick(child),
      ComponentToRender,
      disabled,
      button
    });
  });

  return <div>{items}</div>;
};

SelectableListBGRS.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node.isRequired,
  ComponentToRender: PropTypes.func.isRequired,
  button: PropTypes.bool,
  disabled: PropTypes.bool
};

SelectableListBGRS.defaultProps = {
  button: false,
  disabled: false,
  value: null
};

export default SelectableListBGRS;
