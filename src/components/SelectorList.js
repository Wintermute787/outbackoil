import React from "react";
import SelectorBox from "./SelectorBox";

const SelectorList = props => {
  if (props.items.length === 0) {
    return (
      <div>
        <h2>no items found</h2>
      </div>
    );
  }

  return (
    <ul>
      {props.items.map(item => (
        <SelectorBox
          key={item.id}
          id={item.id}
          value={item.value}
          bottles={item.bottles}
          price={item.price}
          description={item.description}
          description2={item.description2}
          footer={item.footer}
          image={item.image}
        />
      ))}
    </ul>
  );
};

export default SelectorList;
