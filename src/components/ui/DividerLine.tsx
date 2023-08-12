import React from "react";

const DividerLine: React.FC = () => {
  return (
    <div
      style={{
        width: "1px",
        backgroundColor: "black",
        position: "fixed",
        top: 0,
        bottom: 0,
        right: "calc(36% - 48px)",
      }}
    ></div>
  );
};

export default DividerLine;
