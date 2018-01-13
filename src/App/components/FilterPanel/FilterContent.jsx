import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Radio, { RadioGroup } from "material-ui/Radio";
import { FormLabel, FormControl, FormControlLabel } from "material-ui/Form";

const styles = () => ({
  wrap: {
    margin: "20px"
  }
});

const FilterContent = ({ classes, setFilterStatus, status }) => (
  <div className={classes.wrap}>
    <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend">Status</FormLabel>
      <RadioGroup
        aria-label="Status"
        name="Status"
        value={status}
        onChange={e => setFilterStatus(e.target.value)}
      >
        <FormControlLabel value="ALL" control={<Radio />} label="ALL" />
        <FormControlLabel value="READ" control={<Radio />} label="READ" />
        <FormControlLabel value="NEW" control={<Radio />} label="NEW" />
        <FormControlLabel value="HIDDEN" control={<Radio />} label="HIDDEN" />
      </RadioGroup>
    </FormControl>
  </div>
);

export default withStyles(styles)(FilterContent);

FilterContent.propTypes = {
  status: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  setFilterStatus: PropTypes.func.isRequired
};
