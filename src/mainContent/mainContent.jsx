import React from "react";

const mainContent = ({data}) => {
    if (!data) {
        return <div>Enter pokemon to get the data</div>;
      }
  return (
    <div>
      <h1>{data.abilities[0].ability.name}</h1>
    </div>
  );
};

export default mainContent;
