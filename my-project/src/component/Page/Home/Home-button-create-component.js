import React from "react";
import { PlusCircleOutlined } from "@ant-design/icons";

const ButtonCreateComponent = (props) => {
  const handleCleck = () => {
    props.setVisible(true);
  };

  return (
    <PlusCircleOutlined
      className={"button-create-class"}
      style={{ fontSize: "50px" }}
      onClick={handleCleck}
    />
  );
};

export default ButtonCreateComponent;
