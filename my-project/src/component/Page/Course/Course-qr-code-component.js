import React, { useEffect, useState } from "react";
import ScanComponent from "./Course-modal-scan-component";
import {
  GetAuthenAll,
  CreateAuthen,
} from "../../../service/Course/Course-service";
import { userForm } from "../../../tools/struct/courseForm";
import base64 from "base-64";
import utf8 from "utf8";
import CardAuthenComponent from "./Course-card-qrcode-component";

const QrCodeComponent = (props) => {
  const [create, setCreate] = useState();
  const [subject, setSubject] = useState();
  const [authen, setAuthen] = useState();

  const handleCancle = (res) => {
    props.setVisible(res);
    setCreate(res);
  };

  const base64Encode = (form) => {
    let bytes = utf8.encode(JSON.stringify(form));
    let encoded = base64.encode(bytes);
    return encoded;
  };

  useEffect(() => {
    console.log(props);
    if (props.create) {
      let form = userForm;
      form.Subject = props.subject.ID;
      form.status = true;
      CreateAuthen(form, (res) => {
        if (res) {
          setCreate(res);
        }
      });
    }
    setSubject(props.subject);
    const _s = props.subject;
    if (_s != null) {
      GetAuthenAll(_s.ID, (res) => {
        setAuthen(res.authen);
      });
    }
  }, [props]);

  return (
    <div>
      {create ? (
        <ScanComponent
          visible={create}
          setCreate={(res) => handleCancle(res)}
        />
      ) : null}
      {authen != null
        ? authen.map((item) => {
            let res = base64Encode(item);
            return <CardAuthenComponent key={item.ID} value={res} />;
          })
        : null}
    </div>
  );
};

export default QrCodeComponent;
