import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Collapse from "material-ui/transitions/Collapse";
import { ActionMenu } from "__GLOBAL__/constants";
import {
  Desktop,
  Mobile
} from "__SHARED__/Responsive-Devices/Responsive-Devices";
// import { setVisibilityFilterWithTimeout } from "../../actions/filterActions";
import FilterContent from "./FilterContent";

const styles = () => ({
  root: {
    display: "flex",
    background: "rgba(249, 249, 249, 1)"
  }
});

const FilterPanel = ({
  actionMenuOpen,
  setFilterStatus,
  status,
  // classes,
  // dispatch,
  filterOpen
}) => {
  const pFilterOpen = actionMenuOpen === ActionMenu.Filter && filterOpen;

  return (
    <div>
      <Desktop>
        <Collapse in={pFilterOpen} transitionDuration="auto" unmountOnExit>
          {/* todo: add mouse out <div
            className={classes.root}
            onMouseLeave={() => setVisibilityFilterWithTimeout(dispatch)}
          > </div> */}
          <FilterContent setFilterStatus={setFilterStatus} status={status} />
        </Collapse>
      </Desktop>
      <Mobile>
        <FilterContent setFilterStatus={setFilterStatus} status={status} />
      </Mobile>
    </div>
  );
};

FilterPanel.propTypes = {
  // classes: PropTypes.object.isRequired,
  status: PropTypes.string.isRequired,
  actionMenuOpen: PropTypes.string.isRequired,
  // dispatch: PropTypes.func.isRequired,
  setFilterStatus: PropTypes.func.isRequired,
  filterOpen: PropTypes.bool.isRequired
};

export default withStyles(styles)(FilterPanel);
