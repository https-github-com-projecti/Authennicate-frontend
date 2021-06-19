import React, { useState } from "react";
import {
  Form,
  Input,
  Tooltip,
  Checkbox,
  Button,
  DatePicker,
  Select,
} from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Link, Redirect } from "react-router-dom";
import UploadProfile from "./Create-Users-upload-profile-component";
import { userForm } from "../../../tools/struct/createUserForm";
import {
  createUser,
  GetRole,
} from "../../../service/Create/Create-registor-service";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 5,
    },
  },
};

const FormRegistorComponent = () => {
  const [path, setPath] = useState("");
  const [success, setSuccess] = useState(false);
  const [role, setRole] = useState(null);

  const [form] = Form.useForm();
  let user = userForm;

  const onFinish = (values) => {
    user.username = values.username;
    user.password = values.password;
    user.phoneNumber = values.phone;
    user.Upload = path;
    user.Role = values.role;
    createUser(user, setSuccess);
  };

  const valueProfile = (event) => {
    setPath(event);
  };

  const selectRole = () => {
    if (role !== null) {
      let result = [];
      let data = role.role;
      result = data.map((item) => {
        return (
          <Option key={item.Name} value={item.ID}>
            {item.Name}
          </Option>
        );
      });
      return result;
    }
  };

  return (
    <div>
      {success === true ? <Redirect push to="/" /> : ""}
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ["zhejiang", "hangzhou", "xihu"],
          prefix: "86",
        }}
        scrollToFirstError
      >
        <Form.Item
          name="profileImg"
          label="Profile"
          hasFeedback
          rules={[
            {
              required: false,
              message: "Please input your profile",
            },
          ]}
        >
          <UploadProfile valuePathImage={valueProfile} />
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="username"
          label={
            <span>
              Username&nbsp;
              <Tooltip title="What do you want others to call you?">
                <QuestionCircleOutlined />
              </Tooltip>
            </span>
          }
          rules={[
            {
              required: true,
              message: "Please input your username!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  "The two passwords that you entered do not match!"
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="role" label="role" rules={[{ required: true }]}>
          <Select
            placeholder="Select a option and change input text above"
            allowClear
            onClick={() => {
              GetRole(setRole);
            }}
          >
            {selectRole()}
          </Select>
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          name="DatePicker"
          label="DatePicker"
          rules={[{ required: true, message: "Please input your birth day!" }]}
        >
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject("Should accept agreement"),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            I have read the{" "}
            <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md">
              agreement
            </a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
          <Link style={{ marginLeft: "10px" }} to="/">
            Login
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormRegistorComponent;
