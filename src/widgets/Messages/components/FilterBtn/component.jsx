import React from "react";
import PropTypes from "prop-types";
import Button from "material-ui/Button";
import { withStyles } from "material-ui/styles";

import { ActionMenu } from "__GLOBAL__/constants";
import {
  Desktop,
  Mobile
} from "__SHARED__/Responsive-Devices/Responsive-Devices";

const styles = () => ({
  root: {}
});
const FilterBtn = ({
  classes,
  // actionMenuOpen,
  setVisibilityFilter,
  dataLoaded,
  activatedFilterNumber,
  toggleFilterMobile,
  isFilterOpened
}) => {
  // const isFilterOpen = actionMenuOpen === ActionMenu.Filter;
  const filterColor = isFilterOpened ? "primary" : "default";

  return (
    <div className={classes.root}>
      <Desktop>
        <Button
          onClick={() => setVisibilityFilter(ActionMenu.Filter, isFilterOpened)}
          disabled={!dataLoaded}
          color={filterColor}
        >
          Filter ({activatedFilterNumber})
        </Button>
      </Desktop>
      <Mobile>
        <Button
          onClick={toggleFilterMobile}
          disabled={!dataLoaded}
          color={filterColor}
        >
          Filter ({activatedFilterNumber})
        </Button>
      </Mobile>
    </div>
  );
};

FilterBtn.propTypes = {
  // actionMenuOpen: PropTypes.string.isRequired,
  activatedFilterNumber: PropTypes.number.isRequired,
  setVisibilityFilter: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  dataLoaded: PropTypes.bool.isRequired,
  toggleFilterMobile: PropTypes.func.isRequired,
  isFilterOpened: PropTypes.bool.isRequired
};

export default withStyles(styles)(FilterBtn);
