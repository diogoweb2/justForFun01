import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";
import PropTypes from "prop-types";
import Grid from "material-ui/Grid";
import { Mobile } from "__SHARED__/Responsive-Devices/Responsive-Devices";
import LabelData from "__SHARED__/LabelData/LabelData";

const styles = () => ({
  wrap: {
    padding: "2em"
  }
});

class DetailPanel extends Component {
  componentDidMount() {
    this.scrollToTop();

    this.props.getDataDetail(this.props.messageId);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedItem.MessageId !== this.props.messageId) {
      this.props.getDataDetail(this.props.messageId);
    }

    this.scrollToTop();
  }

  scrollToTop() {
    if (this.props.mobileIndexPage === 1) {
      this.componentWrapper.scrollIntoView();
      // this.scrollToTop();
    }
  }

  render() {
    const { classes, dataDetailLoaded } = this.props;

    const {
      MessageTitle,
      Sender,
      ActionStatus,
      MessageDate,
      MessagePriority
    } = this.props.selectedItem;

    const { MessagePreview } = this.props.dataDetail;

    const isImportant = MessagePriority.trim().toLowerCase() === "high";

    return (
      <div className={classes.wrap}>
        <div
          ref={back => {
            this.componentWrapper = back;
          }}
        />
        <Mobile>
          <Button onClick={this.props.onBackBtn}>Back</Button>
        </Mobile>

        <Grid container>
          <Grid item xs={12}>
            <LabelData label="Subject" data={MessageTitle} />
          </Grid>
          <Grid item xs={6}>
            <LabelData label="Sender" data={Sender} />
          </Grid>
          <Grid item xs={6}>
            <LabelData label="Status" data={ActionStatus} />
          </Grid>

          <Grid item xs={6}>
            <LabelData label="Created" data={MessageDate} />
          </Grid>

          <Grid item xs={6}>
            <LabelData
              label="Priority"
              data={MessagePriority}
              isImportant={isImportant}
            />
          </Grid>

          <Grid item xs={12}>
            <LabelData
              label="Message"
              data={MessagePreview}
              dataLoaded={dataDetailLoaded}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

DetailPanel.propTypes = {
  classes: PropTypes.object.isRequired,
  selectedItem: PropTypes.object.isRequired,

  mobileIndexPage: PropTypes.number,
  onBackBtn: PropTypes.func,
  messageId: PropTypes.number,
  dataDetailLoaded: PropTypes.bool.isRequired,
  getDataDetail: PropTypes.func.isRequired,
  dataDetail: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};
DetailPanel.defaultProps = {
  mobileIndexPage: 0,
  messageId: null,
  onBackBtn: null,
  dataDetail: null
};
export default withStyles(styles)(DetailPanel);
