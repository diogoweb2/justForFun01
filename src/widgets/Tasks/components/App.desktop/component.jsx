import React from "react";

import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import TaskCardList from "../TasksCardList";
import Search from "../Search";
import Sort from "../Sort";
import FilterPanel from "../FilterPanel/";
import FilterBtn from "../FilterBtn";

import styles from "./Messages.desktop.css";

const DesktopView = props => {
  const { classes } = props;

  return (
    <div className={classes.panelWrapper}>
      <Grid container>
        <Grid item xs={9}>
          <Search />
        </Grid>
        <Grid item xs={1}>
          <Sort />
        </Grid>
        <Grid item xs={1}>
          <Sort />
        </Grid>
        <Grid item xs={1}>
          <FilterBtn />
        </Grid>

        <Grid item xs={12}>
          <FilterPanel />
        </Grid>

        <Grid item xs={12}>
          <TaskCardList />
        </Grid>
      </Grid>
    </div>
  );
};

DesktopView.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DesktopView);
