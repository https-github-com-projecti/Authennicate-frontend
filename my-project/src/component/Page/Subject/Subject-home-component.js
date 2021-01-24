import React, { useState, useEffect } from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Result, Button, Modal, Form } from "antd";
import { DeleteSubject } from "../../../service/Subject/Subject-subject-service";
import "../../../styles/Subject/style.css";
import SubjectModalComponent from "./Subject-modal-component";
import SubjectCardComponent from "./Subject-card-component";
import {
  GetSubject,
  CreateSubject,
} from "../../../service/Subject/Subject-subject-service";
import ButtonCreateComponent from "../Home/Home-button-create-component";

const { confirm } = Modal;

const SubjectComponent = () => {
  const [visible, setVisible] = useState(false);
  const [subject, setSubject] = useState();
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [fetch, setFetch] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    GetSubject(localStorage.getItem("user_id"), (res) => {
      if (res != null) setSubject(res.subject);
    });
  }, [confirmLoading]);

  const showPromiseConfirm = (id) => {
    confirm({
      title: "Do you want to delete these items?",
      icon: <ExclamationCircleOutlined />,
      content:
        "When clicked the OK button, this dialog will be delete for you.",
      onOk() {
        new Promise((resolve, reject) => {
          DeleteSubject(id, (res) => {
            if (res) {
              GetSubject(localStorage.getItem("user_id"), (res) => {
                if (res != null) setSubject(res.subject);
              });
              return resolve;
            } else {
              return reject;
            }
          });
        }).catch(() => console.log("Oops errors!"));
      },
      onCancel() {},
    });
  };

  const handleOk = () => {
    setConfirmLoading(true);
    form
      .validateFields()
      .then(async (values) => {
        form.resetFields();
        const valueValidate = onCreate(values);
        setFetch(true);
        await CreateSubject(valueValidate);
        setVisible(false);
        setFetch(false);
        setConfirmLoading(false);
      })
      .catch(() => {
        setConfirmLoading(false);
      });
  };

  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
    setVisible(false);
    setConfirmLoading(false);
  };

  const onCreate = (fieldsValue) => {
    const privates = fieldsValue["private"];
    const rangeValue = fieldsValue["timeClass"];
    const values = {
      ...fieldsValue,

      name: fieldsValue["name"],
      subjectId: fieldsValue["subjectId"],
      private: privates,
      password: privates === "private" ? fieldsValue["password"] : "",
      timeClass: rangeValue.map((item) => {
        let date = "";
        item.map((item, index) => {
          date += item.format("HH:mm:ss");
          if (index === 0) {
            date += " - ";
          }
          return null;
        });
        return date;
      }),
      description: fieldsValue["description"],
      User: localStorage.getItem("user_id"),
    };
    return values;
  };

  return (
    <div>
      {subject != null ? (
        <div className="subject-panel">
          {subject.map((item) => {
            return (
              <SubjectCardComponent
                key={item.ID}
                item={item}
                showPromiseConfirm={(id) => showPromiseConfirm(id)}
              />
            );
          })}
        </div>
      ) : (
        <div className="result-container">
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
        </div>
      )}
      <ButtonCreateComponent setVisible={(res) => setVisible(res)} />
      <SubjectModalComponent
        visible={visible}
        setVisible={(res) => setVisible(res)}
        confirmLoading={confirmLoading}
        fetch={fetch}
        form={form}
        handleCancel={() => handleCancel()}
        handleOk={() => handleOk()}
      />
    </div>
  );
};

export default SubjectComponent;
