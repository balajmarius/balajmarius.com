import React from "react";

export default (props) => (
  <a {...props} target="_blank" rel="noreferrer" title={props.children} className="border-b border-white" />
);
