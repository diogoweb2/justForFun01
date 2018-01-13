import React from "react";
import PropTypes from "prop-types";
import withStyles from "material-ui/styles/withStyles";
import classNames from "classnames";

const styles = () => ({
  noWrap: {
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden"
  }
});

const Text = props => {
  const { classes, className, children, noWrap } = props;

  return (
    <div className={classNames({ [classes.noWrap]: noWrap }, className)}>
      {children}
    </div>
  );
};

Text.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  noWrap: PropTypes.bool
};
Text.defaultProps = {
  className: null,
  noWrap: false
};
export default withStyles(styles)(Text);
