import React, { useState } from "react";
import { Form, Input, Radio } from "antd";
import "../../../styles/Subject/style.css";
import TimeClassTimePickComponent from "./Subject-time-class-TimePick-coponent";

const FormSubjectComponent = (props) => {
  const [value, setValue] = useState("public");

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <Form
        form={props.form}
        {...layout}
        name="nest-messages"
        initialValues={{
          name: "",
          subjectId: "",
          private: "public",
          password: "",
          timeClass: [],
          description: "",
        }}
      >
        <Form.Item name={"name"} label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name={"subjectId"}
          label="Subject ID"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name={"private"} label="Private">
          <Radio.Group onChange={onChange}>
            <Radio value={"public"}>Public</Radio>
            <Radio value={"private"}>Private</Radio>
          </Radio.Group>
        </Form.Item>

        {value === "private" ? (
          <Form.Item
            label="Password"
            name={"password"}
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
        ) : null}

        <Form.Item
          label={"Time Class"}
          rules={[{ required: true, message: "Please input Time Class" }]}
        >
          <TimeClassTimePickComponent />
        </Form.Item>

        <Form.Item name={"description"} label="Description">
          <Input.TextArea />
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormSubjectComponent;
