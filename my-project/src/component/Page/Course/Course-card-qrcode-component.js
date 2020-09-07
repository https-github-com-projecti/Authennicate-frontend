import React, { useEffect, useState } from "react";
import QRCode from "qrcode.react";

const CardAuthenComponent = (props) => {
  const [value, setValue] = useState();
  useEffect(() => {
    setValue(props.value);
  }, [props]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column-reverse",
      }}
    >
      {/* <QRCode key={item.ID} value={res} level="H" size={320} /> */}
    </div>
  );
};

export default CardAuthenComponent;
