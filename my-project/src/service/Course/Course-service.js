import axios from "axios";
import { showNoty } from "../../tools/notification";

export const GetAuthenAll = async (id, callback) => {
  await axios
    .get(`${process.env.REACT_APP_PORT_DEV}/authen/subject-authen/${id}`)
    .then((res) => {
      if (res) {
        if (res.data) {
          if (res.data.code === 200) {
            // showNoty(
            //   res.data.status,
            //   res.data.message,
            //   res.data.description,
            //   "bottomRight"
            // );
            callback(res.data);
          } else {
            showNoty(
              res.data.status,
              res.data.message,
              res.data.description,
              "bottomRight"
            );
          }
        }
      }
    })
    .catch((error) => {
      showNoty("error", "Error", String(error), "bottomRight");
    });
};

export const CreateAuthen = async (form, callback) => {
  await axios
    .post(`${process.env.REACT_APP_PORT_DEV}/authen/create`, form)
    .then((res) => {
      if (res) {
        if (res.data) {
          if (res.data.code === 200) {
            showNoty(
              res.data.status,
              res.data.message,
              res.data.description,
              "bottomRight"
            );
            callback(true);
          } else {
            showNoty(
              res.data.status,
              res.data.message,
              res.data.description,
              "bottomRight"
            );
          }
        }
      }
    })
    .catch((error) => {
      showNoty("error", "Error", String(error), "bottomRight");
    });
};
