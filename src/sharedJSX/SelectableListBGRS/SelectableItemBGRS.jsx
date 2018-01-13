import React from "react";

import classNames from "classnames";
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";
import PropTypes from "prop-types";

export const styles = theme => ({
  selected: {
    backgroundColor: theme.palette.text.divider
  }
});

const SelectableItemBGRS = props => {
  const {
    classes,
    children,
    selected,
    onClick,
    ComponentToRender,
    className: classNameProp,
    disabled,
    button,
    disableGutters
  } = props;

  const className = classNames(
    classes.root,
    {
      [classes.selected]: selected
    },
    classNameProp
  );

  return (
    <ComponentToRender
      button={button}
      onClick={onClick}
      className={className}
      disabled={disabled}
      disableGutters={disableGutters}
    >
      {children}
    </ComponentToRender>
  );
};

SelectableItemBGRS.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  ComponentToRender: PropTypes.func,
  selected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  button: PropTypes.bool,
  disableGutters: PropTypes.bool
};
SelectableItemBGRS.defaultProps = {
  ComponentToRender: Button,
  button: false,
  selected: false,
  disabled: false,
  disableGutters: false
};

export default withStyles(styles)(SelectableItemBGRS);
