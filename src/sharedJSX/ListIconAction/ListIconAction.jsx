import React, { cloneElement, Component } from "react";
import PropTypes from "prop-types";
import { withStyles, createStyleSheet } from "material-ui/styles";
import List, {
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText
} from "material-ui/List";
import Avatar from "material-ui/Avatar";
import IconButton from "material-ui/IconButton";

import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import FolderIcon from "material-ui-icons/Folder";
import DeleteIcon from "material-ui-icons/Delete";
import { Desktop, Mobile } from "__SHARED__/Responsive-Devices/Responsive-Devices";
import LongMenu from "../LongMenu/LongMenu";

const styleSheet = createStyleSheet(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752
  },
  demo: {
    background: theme.palette.background.paper
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`
  }
}));

function generate(element) {
  return [0, 1, 2].map(value =>
    cloneElement(element, {
      key: value
    })
  );
}

class ListIconAction extends Component {
  state = {
    dense: false,
    secondary: false
  };

  render() {
    const classes = this.props.classes;
    const { dense } = this.state;

    return (
      <div className={classes.root}>
        <Grid container />
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography type="title" className={classes.title}>
              List Demo
            </Typography>
            <div className={classes.demo}>
              <List dense={dense}>
                {generate(
                  <ListItem button>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Single-line item"
                      secondary="Secondary"
                    />
                    <Desktop>
                      <ListItemSecondaryAction>
                        <IconButton aria-label="Delete">
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </Desktop>
                    <Mobile>
                      <LongMenu />
                    </Mobile>
                  </ListItem>
                )}
              </List>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

ListIconAction.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(ListIconAction);
