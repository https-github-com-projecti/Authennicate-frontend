import React from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import "bootstrap/dist/css/bootstrap.css";
import * as legoData from "./JSON/410-lego-loader.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: legoData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default class Loading extends React.Component {
  render() {
    return (
      <div>
        <FadeIn>
          <div className="d-flex justify-content-center align-items-center">
            <h1 style={{ color: "white" }}>Loading...</h1>
            <Lottie options={defaultOptions} height={120} width={120} />
          </div>
        </FadeIn>
      </div>
    );
  }
}
