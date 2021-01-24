import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  GetUploadPath,
  GetSubjectByID,
} from "../../../service/Subject/Subject-subject-service";
import "../../../styles/Course/style.css";
import ButtonCreateComponent from "../Home/Home-button-create-component";
import QrCodeComponent from "./Course-qr-code-component";
import { Typography } from "antd";

const { Paragraph } = Typography;

const CourseHomeComponent = () => {
  const [pathWall, setPathWall] = useState("");
  const [subject, setSubject] = useState();
  const [create, setCreate] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    GetSubjectByID(id, (res) => {
      setSubject(res.subject);
      GetUploadPath(res.subject.Upload, (res) => {
        setPathWall(res.upload.Path);
      });
    });
  }, [id]);

  return (
    <div>
      <div
        className="card bg-dark text-white"
        style={{
          height: "220px",
          width: "70%",
          minWidth: "40%",
          backgroundColor: "red",
          margin: "2%",
          overflow: "hidden",
          position: "relative",
          backgroundImage: `url(${
            pathWall !== ""
              ? `${process.env.REACT_APP_PORT_DEV}/${pathWall}`
              : "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          })`,
          backgroundPosition: "center",
          backgroundPositionX: "center",
          backgroundPositionY: "center",
          backgroundSize: "100%",
          marginLeft: "15%",
          textAlign: "left",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="card-img-overlay">
          <h2 className="card-title" style={{ color: "white" }}>
            {subject != null ? subject.Name : null}
          </h2>
          {subject != null ? (
            <Paragraph
              style={{
                color: "rgb(153, 153, 153)",
                fontSize: "17px",
                fontWeight: 600,
              }}
              copyable={{ text: `${subject.Key}`, tooltips: false }}
            >
              CODE FOR JOIN | {subject.Key}
            </Paragraph>
          ) : null}
          <p className="card-text">
            {subject != null ? subject.SubjectID : null}
          </p>
          <Paragraph
            ellipsis
            className="card-text"
            style={{ fontSize: "12px", color: "rgb(153, 153, 153)" }}
          >
            {subject != null ? subject.Description : null}
          </Paragraph>
        </div>
      </div>
      <hr />
      <ButtonCreateComponent setVisible={(res) => setCreate(res)} />
      <QrCodeComponent
        create={create}
        subject={subject}
        setVisible={(res) => setCreate(res)}
      />
    </div>
  );
};

export default CourseHomeComponent;
