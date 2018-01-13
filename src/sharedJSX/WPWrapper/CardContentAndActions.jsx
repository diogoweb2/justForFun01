import React from "react";
import { CardContent, CardActions } from "material-ui/Card";
import PropTypes from "prop-types";

import classNames from "classnames";
import Button from "material-ui/Button";
import CollapseBGRS from "../CollapseBGRS/CollapseBGRS";

const CardContentAndActions = props => (
  <div>
    <CollapseBGRS open={props.open}>
      <CardContent>{props.children}</CardContent>
      <CardActions
        disableActionSpacing
        className={classNames({
          [props.classes.hide]: !props.showActionBar
        })}
      >
        <div className={props.classes.flexGrow} />
        {props.btnTitlePrimary ? (
          <Button
            raised
            className={props.classes.button}
            color="primary"
            onClick={props.onClickPrimary}
          >
            {props.btnTitlePrimary}
          </Button>
        ) : (
          ""
        )}
      </CardActions>
    </CollapseBGRS>
  </div>
);

CardContentAndActions.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  onClickPrimary: PropTypes.func.isRequired,
  btnTitlePrimary: PropTypes.string.isRequired,
  showActionBar: PropTypes.bool.isRequired
};

export default CardContentAndActions;
