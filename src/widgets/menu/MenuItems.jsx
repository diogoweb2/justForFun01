import React from "react";
import PropTypes from "prop-types";
import { ListItem, ListItemText } from "material-ui/List";
import Utl from "__GLOBAL__/utils";

import MenuSubItems from "./MenuSubItems";
import MenuArrow from "./MenuArrow";

const MenuItems = props => {
  const classes = props.classes;

  if (props.data) {
    return Object.keys(props.data).map(node => (
      <div key={props.data[node].id}>
        <ListItem
          button
          onClick={() =>
            props.data[node].subItem
              ? props.toggleMenuItem(props.data[node].id)
              : Utl.href(props.data[node].url)}
        >
          <img
            alt={props.data[node].iconAlt}
            title={props.data[node].iconAlt}
            className={props.classes.menuIcon}
            src={props.data[node].iconURL}
          />

          <ListItemText
            classes={{ text: classes.white }}
            primary={props.data[node].title}
          />

          <MenuArrow
            classes={classes}
            data={props.data[node].subItem}
            isOpened={props.MenuItemOpen[props.data[node].id]}
          />
        </ListItem>

        <MenuSubItems
          data={props.data[node]}
          classes={classes}
          MenuItemOpen={props.MenuItemOpen}
        />
      </div>
    ));
  }
  return null;
};

MenuItems.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  MenuItemOpen: PropTypes.array.isRequired,
  toggleMenuItem: PropTypes.func.isRequired
};
MenuItems.defaultProps = {
  //   data: [],
  //   MenuItemOpen: []
};

export default MenuItems;
