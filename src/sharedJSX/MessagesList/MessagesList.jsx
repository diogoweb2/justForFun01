import React from "react";
import { ListItem } from "material-ui/List";
import { withStyles } from "material-ui/styles";
import classNames from "classnames";
import PropTypes from "prop-types";
import PriorityHigh from "material-ui-icons/PriorityHigh";
import SelectableListBGRS from "__SHARED__/SelectableListBGRS/SelectableListBGRS";
import SelectableItemBGRS from "__SHARED__/SelectableListBGRS/SelectableItemBGRS";
import { DateHelper } from "__GLOBAL__/utils";
import Text from "__SHARED__/Text/Text";
import styles from "./MessagesList.css";

const MessagesList = ({
  classes,
  className,
  data,
  onItemSelected,
  messageId,
  variant
}) => {
  const { root } = className;

  if (!data || data.length === 0) {
    return "todo: No result";
  }

  return (
    <div
      className={classNames(
        classes.wrap,
        root,
        { [classes.purpleVariant]: variant === "purple" },
        { [classes.blueVariant]: variant === "blue" }
      )}
    >
      <SelectableListBGRS
        ComponentToRender={ListItem}
        button
        value={messageId}
        onChange={e => onItemSelected(e.target.id)}
      >
        {data.map(item => {
          let date;
          if (item.MessageDate) {
            date = DateHelper.parse(item.MessageDate, "YYYY-MM-DD");
            date = DateHelper.format(date, "YYYY-MM-DD");
          }

          return (
            <SelectableItemBGRS
              disableGutters
              key={item.MessageId}
              value={item.MessageId}
              className={classNames({
                [classes.new]: item.ActionStatus === "NEW"
              })}
            >
              <div className={classes.wrapContent}>
                {item.MessagePriority === "High" ? (
                  <div>
                    <PriorityHigh className={classes.highImportance} />
                  </div>
                ) : (
                  <div className={classes.normalImportance} />
                )}
                <div className={classes.wrapLines}>
                  <div className={classes.line1}>
                    <Text className={classes.sender} noWrap>
                      {item.Sender}
                    </Text>
                    <Text className={classes.date} noWrap>
                      {date}
                    </Text>
                  </div>
                  <div className={classes.line2}>
                    <Text noWrap className={classes.title}>
                      {item.MessageTitle}
                    </Text>
                  </div>
                  <div className={classes.line3}>
                    <Text
                      className={classes.status}
                      noWrap
                      actionStatus={item.ActionStatus}
                    >
                      {item.ActionStatus}
                    </Text>
                  </div>
                </div>
              </div>
            </SelectableItemBGRS>
          );
        })}
      </SelectableListBGRS>
    </div>
  );
};
MessagesList.propTypes = {
  classes: PropTypes.object.isRequired,
  onItemSelected: PropTypes.func.isRequired,
  messageId: PropTypes.number,
  data: PropTypes.array.isRequired,
  className: PropTypes.object,
  variant: PropTypes.string
};
MessagesList.defaultProps = {
  messageId: 0,
  className: {
    root: ""
  },
  variant: ""
};
export default withStyles(styles)(MessagesList);
