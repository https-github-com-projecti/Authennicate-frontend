import React from "react";
import QRCode from "qrcode.react";

const QrcodePicture = ({ value, size, style }) => {
  return <QRCode style={style} value={value} level="H" size={size} />;
};

export default QrcodePicture;
