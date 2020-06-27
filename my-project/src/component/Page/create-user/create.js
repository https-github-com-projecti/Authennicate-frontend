import React from "react";
import "../../../styles/create-user/style.css";
import FormRegistor from "./form-registor";

const Createuser = () => {
  return (
    <div>
      <div
        style={{
          padding: "20px",
        }}
      >
        <h3
          style={{
            fontFamily: "Serif",
            fontStyle: "oblique",
            fontWeight: "bold",
            color: "white",
            textShadow: "2px 2px 4px #000000",
            position: "absolute",
            top: "10px",
          }}
        >
          Check Name
        </h3>
      </div>
      <div className={"container"}>
        <div className={"container-form-edit"}>
          <FormRegistor />
        </div>
      </div>
    </div>
  );
};

export default Createuser;
