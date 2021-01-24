import React, { useEffect, useState } from "react";
import { Card } from "antd";
import QrcodePicture from "../../../tools/qrcode";
import Moment from "react-moment";

const { Meta } = Card;

const CardAuthenComponent = (props) => {
  const [value, setValue] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    setValue(props.value);
    setData(props.data);
  }, [props]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column-reverse",
        alignItems: "center",
      }}
    >
      {value != null ? (
        <Card
          hoverable
          style={{ width: 320, margin: "1%" }}
          cover={
            <QrcodePicture
              style={{ padding: "10px" }}
              value={value}
              size={320}
            />
          }
        >
          <Meta
            style={{ borderTop: "1px solid black" }}
            title="Qrcode"
            description={
              <Moment format="YYYY/MM/DD HH:mm">{data.CreateEnd}</Moment>
            }
          />
        </Card>
      ) : null}
    </div>
  );
};

export default CardAuthenComponent;
