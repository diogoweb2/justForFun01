import React from "react";
import Collapse from "material-ui/transitions/Collapse";
import List, { ListItem, ListItemText } from "material-ui/List";
import ArrowUpDown from "__SHARED__/ArrowUpDown/ArrowUpDown";
import Utl from "__GLOBAL__/utils";

class CollapseItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleCollapse = this.handleCollapse.bind(this);
    this.handleGlobalCollape = this.handleGlobalCollape.bind(this);
    this.tokenEvent = "";
  }
  state = {
    open: false
  };

  componentWillMount() {
    this.tokenEvent = Utl.eventSubscribe(
      Utl.getEventName().COLLAPSE_WP_MOBILE,
      this.handleGlobalCollape
    );
  }

  componentWillUnmount() {
    Utl.eventUnsubscribe(this.tokenEvent);
  }

  handleGlobalCollape(id, val) {
    if (val !== this.props.onClick()) {
      this.setState({ open: false });
    }
  }

  handleCollapse() {
    this.setState({ open: !this.state.open });

    Utl.eventTrigger(
      Utl.getEventName().COLLAPSE_WP_MOBILE,
      this.props.parentName
    );
  }

  render() {
    return (
      <div>
        <List onClick={this.handleCollapse} className={this.props.className}>
          <ListItem button>
            <ListItemText primary={this.props.title} />

            {<ArrowUpDown isOpened={this.state.open} />}
          </ListItem>
        </List>

        <Collapse in={this.state.open} transitionDuration="auto" unmountOnExit>
          {this.props.children}
        </Collapse>
      </div>
    );
  }
}

export default CollapseItem;
