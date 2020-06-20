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
        style={{ borderBottom: "0.5px solid black" }}
      >
        <Navbar.Brand href="#home">Check Name</Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <Form inline>
          <Avatar
            size="large"
            icon={<UserOutlined />}
            src={
              "https://www.flexibleproduction.com/wp-content/uploads/2017/06/test-intelligenza-sociale.jpg"
            }
          />
        </Form>
      </Navbar>
      <Login show={modalShow} onHide={() => setModalShow(true)} />
    </div>
  );
};

export default HomePage;
