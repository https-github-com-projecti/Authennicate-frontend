import React from "react";
import { Modal } from "react-bootstrap";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { login } from "../../../service/Home/homepage-service";
import { portDev, portAssets } from "../../../configs";
import "../../../styles/home/style.css";
import { Link } from "react-router-dom";
import { showNoty } from "../../../tools/notification";

const Login = (props) => {
  const onFinish = (values) => {
    login(values.username, values.password, portDev, props);
  };

  const onFinishFailed = (errorInfo) => {
    showNoty("error", "Failed Login", "Error is now login " + errorInfo);
  };

  return (
    <div>
      <Modal
        show={props.show}
        onHide={() => {}}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body
          style={{
            width: "100%",
            backgroundImage: `url(${portAssets}selective-focus-photo-of-brown-grass-1776268.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          <div style={{ width: "100%", height: "200px" }} />
          <div className={"form-container"}>
            <h3
              style={{
                fontFamily: "Serif",
                fontStyle: "oblique",
                fontWeight: "bold",
                color: "white",
                textShadow: "2px 2px 4px #000000",
                padding: "5%",
              }}
            >
              Check Name
            </h3>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your Username!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                  Forgot password
                </a>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
                </Button>
                Or <Link to="/create">register now!</Link>
              </Form.Item>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Login;
