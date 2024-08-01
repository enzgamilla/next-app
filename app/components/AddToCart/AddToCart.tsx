"use client"; //use this to so this file can include in js bundle

import React from "react";

const AddToCart = () => {
  return (
    <div>
      <button onClick={() => console.log("added")}>Add</button>
    </div>
  );
};

export default AddToCart;
