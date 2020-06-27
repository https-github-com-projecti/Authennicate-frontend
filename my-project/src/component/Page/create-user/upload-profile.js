import React, { useState } from "react";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
import {
  props_customRequest,
  props_customDelete,
} from "../../../service/Create/upload-image";

const UploadProfile = (props) => {
  const [fileList, setFileList] = useState([]);
  const [path, setPath] = useState([]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  return (
    <ImgCrop rotate>
      <Upload
        customRequest={async (componentsData) => {
          await props_customRequest(
            componentsData,
            props,
            setPath,
            setFileList
          );
        }}
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
        onRemove={async () => {
          await props_customDelete(path, setFileList);
        }}
      >
        {fileList.length < 1 && "Upload"}
      </Upload>
    </ImgCrop>
  );
};

export default UploadProfile;
