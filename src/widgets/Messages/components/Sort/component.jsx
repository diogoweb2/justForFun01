import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import { FormControl } from "material-ui/Form";
import { InputLabel } from "material-ui/Input";
import SelectBGRS from "__SHARED__/SelectBGRS/SelectBGRS";

const styles = theme => ({
  root: {
    // display: "flex"
  },
  formControl: {
    margin: 0
  },
  group: {
    margin: `${theme.spacing.unit}px 0`
  }
});

const Sort = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="sort">Sort</InputLabel>
        <SelectBGRS
          data={[
            { key: "MessageDate|desc", value: "Latest" },
            { key: "MessageDate|asc", value: "Oldest" }
          ]}
          value={props.sortBy}
          onChange={e => props.setSort(e.target.value)}
        />
      </FormControl>
    </div>
  );
};

Sort.propTypes = {
  classes: PropTypes.object.isRequired,

  setSort: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired
};

export default withStyles(styles)(Sort);
