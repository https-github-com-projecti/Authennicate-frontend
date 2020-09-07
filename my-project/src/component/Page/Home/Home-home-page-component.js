import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeRouter from "./Home-router-router";
import { Layout } from "antd";
import { dataUser } from "../../../tools/get-path-image";
import "../../../styles/home/style.css";
import NavbarComponent from "./Home-navbar-component";

const { Content } = Layout;

const HomePageComponent = () => {
  const [path, setPath] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user_id") != null) {
      dataUser(setPath, localStorage.getItem("user_id"));
    }
  }, []);

  return (
    <div>
      <NavbarComponent path={path} />
      <Layout className="App-header" theme="light">
        <Content className="site-layout">
          <HomeRouter />
        </Content>
      </Layout>
    </div>
  );
};

export default HomePageComponent;
