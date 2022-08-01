import React from "react";

const ColorfullMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color, // jsではプロパティ名と値が同じ名前なら省略できる
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfullMessage;
