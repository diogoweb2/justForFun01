import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

import Card, { CardHeader } from "material-ui/Card";
import ArrowUpDown from "__SHARED__/ArrowUpDown/ArrowUpDown";

// import CollapseMobile from "./CollapseMobile";
import CardContentAndActions from "./CardContentAndActions";

const styles = theme => ({
  header: {
    background: theme.BGRS.color.lightBlue2,
    color: theme.BGRS.color.grey2
  },
  title: {
    color: theme.BGRS.color.grey2
  },
  hide: {
    display: "none"
  },
  button: {
    float: "right"
  },
  flexGrow: {
    flex: "1 1 auto"
  },
  right: {
    float: "right"
  },
  left: {
    float: "left"
  }
});

const Title = props => (
  <div>
    <span className={props.classes.left}>{props.title}</span>
    <ArrowUpDown className={props.classes.right} isOpened={false} />
  </div>
);
class WPWrapper extends React.Component {
  constructor() {
    super();

    this.handleCollapse = this.handleCollapse.bind(this);
  }
  state = {
    open: false
  };

  componentWillMount() {
    this.setState({ open: !this.props.mobile });
  }
  handleCollapse() {
    if (this.props.mobile) {
      this.setState({ open: !this.state.open });
    }
  }
  render() {
    const classes = this.props.classes;

    return (
      <div>
        <Card>
          <CardHeader
            className={classes.header}
            title={
              this.props.mobile ? <Title {...this.props} /> : this.props.title
            }
            classes={{ title: classes.title }}
            subheader={this.props.subheader}
            onClick={this.handleCollapse}
          />
          <CardContentAndActions {...this.props} open={this.state.open} />
        </Card>
      </div>
    );
  }
}

Title.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
};
WPWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  mobile: PropTypes.bool.isRequired,
  subheader: PropTypes.string.isRequired
};
export default withStyles(styles)(WPWrapper);
