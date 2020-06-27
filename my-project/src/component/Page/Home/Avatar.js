import React, { useEffect, useState } from "react";
import { Avatar, Menu, Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "../../../styles/home/style.css";

const AvatarComponent = (props) => {
  const [path, setPath] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setPath(props.propsSrc);
  }, [props]);

  const handleMenuClick = (e) => {
    if (e.key === "3") {
      setVisible(false);
    }
  };

  const handleVisibleChange = (flag) => {
    setVisible(flag);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item
        key="1"
        onClick={() => {
          localStorage.clear();
          window.location.href = "/";   
        }}
      >
        Log Out
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Dropdown
        overlay={menu}
        onVisibleChange={handleVisibleChange}
        visible={visible}
        id="dropdown"
      >
        <Avatar
          src={path != "" ? `${process.env.REACT_APP_PORT_DEV}${path}` : ""}
          size="large"
          icon={<UserOutlined />}
          className={"avatar-hover"}
        />
      </Dropdown>
    </div>
  );
};

export default AvatarComponent;
