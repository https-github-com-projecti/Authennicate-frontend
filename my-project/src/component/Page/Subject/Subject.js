import React, { useState, useEffect, lazy } from "react";
import { Modal } from "antd";

const FormSubjectComponent = lazy(() => import("./FormSubject"));

const Subject = (props) => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  useEffect(() => {
    showModal(props.visible);
  }, [props]);

  const showModal = (data) => {
    setVisible(data);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      props.setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
    props.setVisible(false);
  };

  return (
    <div>
      <Modal
        title="Subject"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <FormSubjectComponent />
      </Modal>
    </div>
  );
};

export default Subject;
