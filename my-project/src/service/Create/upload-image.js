import axios from "axios";
import { showNoty } from "../../tools/notification";

export const props_customRequest = (
  componentsData,
  props,
  setPath,
  setFileList
) => {
  let formData = new FormData();
  formData.append("file", componentsData.file);
  formData.append("domain", "POST");
  formData.append("filename", componentsData.file.name);

  axios
    .post(process.env.REACT_APP_PORT_UPLOAD_PROFILE, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((res) => {
      if (res) {
        if (res.data.code === 200) {
          props.valuePathImage(res.data.id);
          setPath(res.data.id);
          showNoty(res.data.status, res.data.message, res.data.description);
          componentsData.onSuccess();
        } else {
          showNoty(res.data.status, res.data.message, res.data.description);
          setFileList([]);
          componentsData.onError("Error uploading image");
        }
      }
    })
    .catch((error) => {
      setFileList([]);
      showNoty("error", "Error", error);
      componentsData.onError("Error uploading image");
    });
};

export const props_customDelete = (path, setFileList) => {
  axios
    .delete(process.env.REACT_APP_PORT_DEV + "/upload/delete/file/" + path)
    .then((res) => {
      if (res.data.code === 200)
        showNoty("success", res.data.status, res.data.description);
      else {
        setFileList([]);
        showNoty("error", res.data.status, res.data.description);
      }
    })
    .catch((error) => {
      showNoty("error", "Error", error);
    });
};
