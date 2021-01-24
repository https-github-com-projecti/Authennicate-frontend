import React, { useEffect, useState } from "react";
import { Card, Avatar } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { dataUser } from "../../../tools/get-path-image";
import { GetUploadPath } from "../../../service/Subject/Subject-subject-service";
const { Meta } = Card;

const SubjectCardComponent = (props) => {
  const [item, setItem] = useState();
  const [path, setPath] = useState("");
  const [pathWall, setPathWall] = useState("");

  useEffect(() => {
    setItem(props.item);
    if (props.item.User != null) {
      dataUser(setPath, props.item.User);
      GetUploadPath(props.item.Upload, (res) => {
        setPathWall(res.upload.Path);
      });
    }
  }, [props]);

  const description = (id, desc) => {
    return (
      <div
        style={{ float: "right", marginTop: "-12px", marginBottom: "-10px" }}
      >
        <label style={{ float: "right" }}>{id}</label>
        <br />
        <label
          style={{
            float: "right",
            marginTop: "-5px",
            width: "200px",
            textAlign: "right",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {desc}
        </label>
      </div>
    );
  };

  const title = (title) => {
    return (
      <div style={{ float: "right", fontFamily: "Times New Roman" }}>
        <h5>{title}</h5>
      </div>
    );
  };

  const routering = () => {
    window.location.href = `/home/course/${item.ID}`;
  };

  return (
    <div>
      {item != null ? (
        <Card
          hoverable
          key={item != null ? item.ID : null}
          style={{
            width: "300px",
            margin: "10px",
            cursor: "pointer",
            height: "350px",
            overflow: "hidden",
          }}
          cover={
            <img
              alt="example"
              src={
                pathWall !== ""
                  ? `${process.env.REACT_APP_PORT_DEV}/${pathWall}`
                  : "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              }
              style={{ height: "190px" }}
              onClick={() => {
                routering();
              }}
            />
          }
          actions={[
            <DeleteOutlined
              key="delete"
              onClick={() => {
                props.showPromiseConfirm(item.ID);
              }}
            />,
            <EditOutlined key="edit" />,
          ]}
        >
          <Meta
            avatar={
              <Avatar
                src={
                  path !== ""
                    ? `${process.env.REACT_APP_PORT_DEV}/upload/profile/${path}`
                    : ""
                }
              />
            }
            title={title(item.Name)}
            description={description(item.SubjectID, item.Description)}
            onClick={() => {
              routering();
            }}
          />
        </Card>
      ) : null}
    </div>
  );
};

export default SubjectCardComponent;
