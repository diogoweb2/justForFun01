import React from "react";
import PropTypes from "prop-types";
import withStyles from "material-ui/styles/withStyles";
import classNames from "classnames";
import Loading from "../Loading/Loading";

const styles = theme => ({
  wrap: {
    display: "flex",
    flexDirection: "column"
  },
  label: {
    fontWeight: "bold"
  },
  data: {
    color: theme.BGRS.color.grey
  },
  important: {
    color: theme.BGRS.color.red,
    fontWeight: "bold"
  }
});

const LabelData = props => {
  const { classes, className, dataLoaded, isImportant } = props;

  if (!dataLoaded) {
    return <Loading />;
  }
  return (
    <div className={classNames(classes.wrap, className)}>
      <span className={classes.label}>{props.label}</span>
      <span
        className={classNames(
          { [classes.important]: isImportant },
          classes.data
        )}
      >
        {props.data}
      </span>
    </div>
  );
};

LabelData.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  data: PropTypes.string,
  dataLoaded: PropTypes.bool,
  isImportant: PropTypes.bool
};
LabelData.defaultProps = {
  className: null,
  label: "",
  data: "",
  dataLoaded: true,
  isImportant: false
};
export default withStyles(styles)(LabelData);
