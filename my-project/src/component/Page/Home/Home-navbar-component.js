import React, { useState, useEffect } from "react";
import { Navbar, Nav, Form } from "react-bootstrap";
import AvatarComponent from "./Home-avatar-component";

const NavbarComponent = (props) => {
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(props.path);
  }, [props]);

  return (
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
  );
};

export default NavbarComponent;
