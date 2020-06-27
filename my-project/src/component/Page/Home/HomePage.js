import React from "react";
import { Navbar, Nav, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Login from "../Login/Login";

const HomePage = () => {
  const [modalShow, setModalShow] = React.useState(true);

  return (
    <div>
      <Navbar
        bg="light"
        variant="light"
        style={{
          boxShadow: "0 7px 6px -6px black",
        }}
      >
        <Navbar.Brand href="#home">
          <h3
            style={{
              fontFamily: "Serif",
              fontStyle: "oblique",
              fontWeight: "bold",
              color: "white",
              textShadow: "2px 2px 4px #000000",
            }}
          >
            Check Name
          </h3>
        </Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <Form inline>
          <Avatar size="large" icon={<UserOutlined />} />
        </Form>
      </Navbar>
      <Login show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default HomePage;
