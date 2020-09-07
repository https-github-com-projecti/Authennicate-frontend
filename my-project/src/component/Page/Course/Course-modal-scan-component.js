import React, { useState, useEffect } from "react";
import { Modal } from "antd";

const ScanComponent = (props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(props.visible);
  }, [props]);

  return (
    <div>
      <Modal
        title="Modal 1000px width"
        centered
        visible={visible}
        onOk={() => {
          setVisible(false);
          props.setCreate(false);
        }}
        onCancel={() => {
          setVisible(false);
          props.setCreate(false);
        }}
        width={1000}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </div>
  );
};

export default ScanComponent;
