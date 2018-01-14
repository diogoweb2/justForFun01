import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

import * as CONST from "__GLOBAL__/constants";
import {
  MobileSizeMenu,
  DesktopSizeMenu
} from "__SHARED__/Responsive-Devices/Responsive-Devices";
import Utl from "__GLOBAL__/utils";

import MenuMobile from "../Menu.mobile";
import MenuDesktop from "../Menu.desktop";

import styleSheet from "../Menu.css";

let props = [];
const propsImmutable = {
  MenuItemOpen: [],
  open: false,
  data: []
};

class State extends React.Component {
  constructor() {
    super();

    this.methods = Utl.getAllMethods(this);

    // set initial state
    this.state = propsImmutable;

    // create a completely new object to avoid mutate state.
    // now, when we do something like props.id = 1, it won't change the this.state.id until we call setState
    props = { ...propsImmutable };
  }
  componentWillMount() {
    props.data = JSON.parse(document.querySelector("#MenuJson").value);
    this.setState(props);
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  onRequestClose = () => this.toggleDrawer(false);
  toggleMenuItem = id => {
    const a = this.state.MenuItemOpen.slice(); // creates the clone of the state
    a[id] = !a[id];

    props.MenuItemOpen = a;
    this.setState(props);
  };
  addEvent2(item) {
    this.toggleMenuItem(item);
  }
  toggleDrawer = (id, value) => {
    props.open = value;
    this.setState(props);
  };
  updateDimensions() {
    // if desktop mode, close tablet/mobile menu
    if (window.innerWidth >= CONST.TabletMaxWidth) {
      if (this.state.open) {
        this.onRequestClose();
      }
    }
  }
  render() {
    return (
      <div>
        <MobileSizeMenu>
          <MenuMobile {...this.props} {...this.state} {...this.methods} />
        </MobileSizeMenu>
        <DesktopSizeMenu>
          <MenuDesktop {...this.props} {...this.state} {...this.methods} />
        </DesktopSizeMenu>
      </div>
    );
  }
}

State.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(State);
