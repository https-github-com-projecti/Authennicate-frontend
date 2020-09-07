import React from "react";
import "../../../styles/create-user/style.css";
import FormRegistor from "./Create-Users-form-registor-component";
import { portAssets } from "../../../configs";

const CreateUserComponent = () => {
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
        <div
          className={"container-form-edit"}
          style={{
            // width: "100%",
            backgroundImage: `url(${portAssets}selective-focus-photo-of-brown-grass-1776268.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            backgroundBlendMode: "overlay",
          }}
        >
          <FormRegistor />
        </div>
      </div>
    </div>
  );
};

export default CreateUserComponent;
