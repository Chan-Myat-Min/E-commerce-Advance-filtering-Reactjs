import React from "react";
import "./Category.css";
import "../../components/Input";
import Input from "../../components/Input";

const Category = ({ handleChange }) => {
  return (
    <div>
      <h2 className="side-bar">Category</h2>
      <div>
        <Input
          handleChange={handleChange}
          value="Nike"
          title="Black"
          name="test1"
          color="black"
        />

        <Input />
        <Input />
        <Input />
        <Input />
      </div>
    </div>
  );
};

export default Category;
