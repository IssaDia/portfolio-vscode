import React from "react";
import Button from "../button";

const Buttons = () => {
  return (
    <div className="">
      <Button type="primary" label="View work" path="/projects" />
      <Button type="secondary" label="Contact me" path="/contact" />
    </div>
  );
};

export default Buttons;
