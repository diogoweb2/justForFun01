import React from "react";
import PropTypes from "prop-types";
import Drawer from "material-ui/Drawer";
import Typography from "material-ui/Typography";
import List from "material-ui/List";
import Divider from "material-ui/Divider";
import MenuItems from "./MenuItems";

const MenuMobile = props => (
  <div className={props.classes.root}>
    <div>
      <Drawer
        open={props.open}
        onRequestClose={props.onRequestClose}
        classes={{
          paper: props.classes.drawerPaperNonDesktop
        }}
      >
        <Typography type="headline" className={props.classes.mainTile}>
          ReloAccess
        </Typography>
        <Divider className={props.classes.divider} />

        <List disablePadding>
          <MenuItems
            data={props.data}
            classes={props.classes}
            MenuItemOpen={props.MenuItemOpen}
            toggleMenuItem={props.toggleMenuItem}
          />
        </List>
      </Drawer>
    </div>
  </div>
);

MenuMobile.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  open: PropTypes.bool,
  onRequestClose: PropTypes.func.isRequired,
  MenuItemOpen: PropTypes.array,
  toggleMenuItem: PropTypes.func.isRequired
};
MenuMobile.defaultProps = {
  open: false,
  MenuItemOpen: []
  //   data: [],
  //   MenuItemOpen: []
};
export default MenuMobile;
