import React, { useState, useEffect } from "react";
import { Drawer, Button } from "antd";
import FormSubjectComponent from "./Subject-form-subject-component";
import "../../../styles/Subject/style.css";

const SubjectModalComponent = (props) => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [fetch, setFetch] = useState(false);

  useEffect(() => {
    setVisible(props.visible);
    setConfirmLoading(props.confirmLoading);
    setFetch(props.fetch);
  }, [props]);

  return (
    <div className="site-drawer-render-in-current-wrapper">
      <Drawer
        title="Create Subject"
        placement={"right"}
        closable={fetch}
        onClose={props.handleCancel}
        visible={visible}
        key={"right"}
        width={500}
        footer={
          <div
            style={{
              textAlign: "right",
            }}
          >
            <Button
              onClick={props.handleCancel}
              style={{ marginRight: 8 }}
              disabled={fetch}
            >
              Cancel
            </Button>
            <Button
              onClick={props.handleOk}
              type="primary"
              loading={confirmLoading}
            >
              Submit
            </Button>
          </div>
        }
      >
        <FormSubjectComponent form={props.form} />
      </Drawer>
    </div>
  );
};

export default SubjectModalComponent;
