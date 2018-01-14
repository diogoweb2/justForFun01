import React from "react";
// import IconButton from "material-ui/IconButton";
// import FilterList from "material-ui-icons/FilterList";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
// import PropTypes from "prop-types";
import TextField from "material-ui/TextField";
// import { TextField } from 'material-ui';

const styles = theme => ({
  textField: {
    margin: theme.spacing.unit,
    width: "90%"
  },
  textLabel: {
    color: theme.BGRS.color.grey2,
    zIndex: 1
  },
  input: {
    background: "white"
  }
});

const Search = props => {
  const { classes, disabled, search, setSearch, ...other } = props;

  return (
    <TextField
      id="search"
      label="Search"
      type="search"
      className={classes.textField}
      margin="normal"
      disabled={disabled}
      labelClassName={classes.textLabel}
      inputClassName={classes.input}
      value={search}
      onChange={e => setSearch(e.target.value)}
      {...other}
    />
  );
};

Search.propTypes = {
  classes: PropTypes.object.isRequired,
  disabled: PropTypes.bool.isRequired,
  search: PropTypes.string,
  setSearch: PropTypes.func.isRequired
};
Search.defaultProps = {
  search: ""
};
export default withStyles(styles)(Search);
