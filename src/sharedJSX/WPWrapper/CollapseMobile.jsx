import React from "react";
import CollapseItem from "__SHARED__/CollapseItem/CollapseItem";

const CollapseMobile = props => (
  <CollapseItem
    onClick={() => props.onClickMobile}
    parentName={props.parentNameMobile}
    title={props.title}
    classes={{ title: props.classes.title }}
    className={props.classes.header}
  >
    {props.children}
  </CollapseItem>
);

export default CollapseMobile;
