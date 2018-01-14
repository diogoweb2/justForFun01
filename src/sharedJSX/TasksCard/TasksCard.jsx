import React from "react";
import { withStyles } from "material-ui/styles";
import classNames from "classnames";
import PropTypes from "prop-types";
import PriorityHigh from "material-ui-icons/PriorityHigh";
import Card, { CardContent } from "material-ui/Card";
import { DateHelper } from "__GLOBAL__/utils";
import Text from "__SHARED__/Text/Text";
import styles from "./TasksCard.css";

const MessagesList = ({ classes, data }) => {
  if (!data || data.length === 0) {
    return "todo: No result";
  }

  return (
    <div>
      {data.map(item => {
        let date;
        if (item.MessageDate) {
          date = DateHelper.parse(item.MessageDate, "YYYY-MM-DD");
          date = DateHelper.format(date, "YYYY-MM-DD");
        }

        return (
          <Card className={classes.card}>
            <CardContent
              key={item.MessageId}
              className={classNames({
                [classes.new]: item.ActionStatus === "NEW"
              })}
            >
              <div>
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
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
MessagesList.propTypes = {
  classes: PropTypes.object.isRequired,

  data: PropTypes.array.isRequired
};

export default withStyles(styles)(MessagesList);
