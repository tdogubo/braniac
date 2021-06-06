import React from "react";

const Rank = ({name, entries}) => {
  return (
    <div className="fix abs-center" style={{ top: "200px" }}>
      <div className="navy b f3">{`${name}, your current entry count is... `}</div>
      <div className="purple f1">{`#${entries}`}</div>
    </div>
  );
};

export default Rank;
