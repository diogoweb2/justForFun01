import React from "react";
import PropTypes from "prop-types";
import { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import InboxIcon from "material-ui-icons/Inbox";
import Collapse from "material-ui/transitions/Collapse";
import Utl from "__GLOBAL__/utils";

const MenuSubItems = props => {
  const classes = props.classes;
  if (props.data.subItem) {
    return (
      <Collapse
        in={props.MenuItemOpen[props.data.id]}
        transitionDuration="auto"
        unmountOnExit
      >
        {Object.keys(props.data.subItem).map(item => (
          <ListItem
            key={props.data.subItem[item].id}
            button
            className={classes.nested}
            onClick={() => Utl.href(props.data.subItem[item].url)}
          >
            <ListItemIcon>
              <InboxIcon className={classes.white} />
            </ListItemIcon>
            <ListItemText
              classes={{ text: classes.white }}
              inset
              primary={props.data.subItem[item].title}
            />
          </ListItem>
        ))}
      </Collapse>
    );
  }
  return null;
};

MenuSubItems.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  MenuItemOpen: PropTypes.array.isRequired
};

export default MenuSubItems;
