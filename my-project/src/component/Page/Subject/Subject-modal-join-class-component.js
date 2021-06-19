import React, { useState } from "react";
import { Modal, Input, Form, Spin, Typography } from "antd";
import { GetCheckSubjectKey } from "../../../service/Subject/Subject-subject-service";

const { Text } = Typography;

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 16,
  },
};

const JoinClass = ({
  visible,
  formJoin,
  onFinish,
  onCancelJoin,
  setCheckKey,
  setSubjectJoin,
  setCheckPrivate,
  checkPrivate,
}) => {
  const [checkresult, setResult] = useState(false);
  const [load, setLoad] = useState(false);

  return (
    <>
      <Modal
        title="Join Class"
        centered
        visible={visible}
        onOk={onFinish}
        onCancel={() => {
          onCancelJoin();
          setResult(false);
        }}
        okType={"danger"}
      >
        <Form {...layout} form={formJoin} name="join" onFinish={onFinish}>
          <Form.Item
            name="code"
            label="Class Code"
            rules={[{ required: true }]}
          >
            <Input
              type="number"
              onChange={async (e) => {
                if (e.target.value !== "") {
                  setLoad(true);
                  await GetCheckSubjectKey(
                    e.target.value,
                    (res) => {
                      console.log(res);
                      if (res.subject !== null) {
                        setSubjectJoin(res.subject);
                        if (res.subject.Private === "private") {
                          setCheckPrivate(true);
                          setCheckKey(false);
                        } else {
                          setCheckPrivate(false);
                          setCheckKey(true);
                        }
                        setResult(false);
                      }
                    },
                    setLoad,
                    setResult
                  );
                }
              }}
            />
          </Form.Item>
          {checkPrivate ? (
            <Form.Item
              label="Password Class"
              name="passwordClass"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                onChange={() => {
                  setCheckKey(true);
                }}
              />
            </Form.Item>
          ) : (
            ""
          )}

          {checkresult ? (
            <Text type="danger">
              *This code is note class.Please! input new code.
            </Text>
          ) : (
            ""
          )}

          {load ? (
            <span>
              Check... <Spin />
            </span>
          ) : (
            ""
          )}
          <p>Input your key for join to class study !</p>
        </Form>
      </Modal>
    </>
  );
};

export default JoinClass;
