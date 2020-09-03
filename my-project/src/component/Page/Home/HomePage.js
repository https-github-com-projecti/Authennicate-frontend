import React, { useEffect, useState, lazy } from "react";
import { Navbar, Nav, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Result, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import Login from "../Login/Login";
import { dataUser } from "../../../tools/home-tool";
import "../../../styles/home/style.css";

const AvatarComponent = lazy(() => import("./Avatar"));
const SubjectComponent = lazy(() => import("../Subject/Subject"));

const HomePage = () => {
  const [modalShow, setModalShow] = useState(true);
  const [path, setPath] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("user_id") != null) {
      if (modalShow) {
        setModalShow(false);
      } else {
        dataUser(setPath, localStorage.getItem("user_id"));
      }
    }
  }, [modalShow]);

  return (
    <div>
      <Navbar
        bg="light"
        variant="light"
        style={{
          boxShadow: "0 7px 6px -6px black",
        }}
      >
        <Navbar.Brand href="/">
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
          <AvatarComponent propsSrc={path} />
        </Form>
      </Navbar>

      <Login show={modalShow} onHide={() => setModalShow(false)} />

      <header className="App-header">
        <Result
          status="404"
          title="Empty"
          subTitle="Sorry, the page you is not data."
          extra={
            <Button
              type="primary"
              onClick={() => {
                setVisible(true);
              }}
            >
              Create Class
            </Button>
          }
        />

        <Button
          type="primary"
          shape="circle"
          icon={<PlusCircleOutlined />}
          size={"large"}
          className={"button-create-class"}
          onClick={() => {
            setVisible(true);
          }}
        />
      </header>

      <div className={"container-class"}>
        <SubjectComponent
          visible={visible}
          setVisible={(data) => setVisible(data)}
        />
      </div>
    </div>
  );
};

export default HomePage;
