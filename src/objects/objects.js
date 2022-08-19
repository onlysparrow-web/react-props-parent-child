import React from "react";

function Objects(props) {
  console.log(props.obj.name);
  return (
    <div>
      <h1>BikeName:{props.obj.name}</h1>
      <h2>Year:{props.obj.year}</h2>
      <h1>Price:{props.obj.price}</h1>
    </div>
  );
}

export default Objects;
