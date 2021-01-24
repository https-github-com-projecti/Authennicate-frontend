import React from "react";
import { Form, TimePicker, Button } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const { RangePicker } = TimePicker;

const TimeClassTimePickComponent = () => {
  return (
    <div>
      <Form.List name={"timeClass"}>
        {(fields, { add, remove }) => {
          return (
            <div style={{ display: "flex-in", flexDirection: "column" }}>
              {fields.map((field) => (
                <Form.Item required={false} key={field.key}>
                  <Form.Item
                    {...field}
                    validateTrigger={["onChange", "onBlur"]}
                    rules={[
                      {
                        type: "array",
                        required: true,
                        whitespace: true,
                        message: "Please input date time or delete this field.",
                      },
                    ]}
                    style={{ width: "90%", float: "left" }}
                  >
                    <RangePicker format="HH:mm:ss" bordered={false} />
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
    </div>
  );
};

export default TimeClassTimePickComponent;
