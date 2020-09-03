import React from "react";
import { Form, Input, Switch, DatePicker, Button } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import "../../../styles/Subject/style.css";

const { RangePicker } = DatePicker;

const FormSubject = () => {
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };

  const onFinish = (values) => {
    console.log(values);
  };

  const rangeConfig = {
    rules: [{ type: "array", required: true, message: "Please select time!" }],
  };

  return (
    <div>
      <Form {...layout} name="nest-messages" onFinish={onFinish}>
        <Form.Item
          name={["user", "name"]}
          label="Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "subject id"]}
          label="Subject ID"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name={["user", "private"]}
          label="Private"
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>

        <Form.Item
          label="Password"
          name={["user", "password"]}
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name={["user", "time-class"]}
          label={"Time Class"}
          rules={[{ required: true, message: "Please input Time Class" }]}
        >
          <Form.List name="names">
            {(fields, { add, remove }) => {
              return (
                <div style={{ display: "flex-in", flexDirection: "column" }}>
                  {fields.map((field, index) => (
                    <Form.Item required={false} key={field.key}>
                      <Form.Item
                        {...field}
                        validateTrigger={["onChange", "onBlur"]}
                        rules={[
                          {
                            required: true,
                            whitespace: true,
                            message:
                              "Please input date time or delete this field.",
                          },
                        ]}
                        {...rangeConfig}
                        style={{ width: "90%", float: "left" }}
                      >
                        <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
                      </Form.Item>

                      <MinusCircleOutlined
                        className="dynamic-delete-button"
                        style={{
                          float: "right",
                        }}
                        onClick={() => {
                          remove(field.name);
                        }}
                      />
                    </Form.Item>
                  ))}

                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => {
                        add();
                      }}
                      style={{ width: "60%" }}
                    >
                      <PlusOutlined /> Add Time
                    </Button>
                  </Form.Item>
                </div>
              );
            }}
          </Form.List>
        </Form.Item>

        <Form.Item name={["user", "description"]} label="Description">
          <Input.TextArea />
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormSubject;
