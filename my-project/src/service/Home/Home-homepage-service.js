import axios from "axios";
import { showNoty } from "../../tools/notification";

var base64 = require("base-64");
var utf8 = require("utf8");

export const loginUser = async (username, password, port) => {
  let callback = false;
  var bytes = utf8.encode(password);
  let pass_encrypt = base64.encode(bytes);
  const data = {
    username: username,
    password: pass_encrypt,
  };
  await axios
    .post(`${port}/user/login`, data)
    .then((res) => {
      if (res) {
        if (res.data) {
          if (res.data.code === 200) {
            localStorage.setItem("user_id", res.data.id);
            showNoty(
              res.data.status,
              res.data.message,
              res.data.description,
              "bottomRight"
            );
            callback = true;
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
  return callback;
};

export const getPathIamge = async (id) => {
  let path = "";
  await axios
    .get(`${process.env.REACT_APP_PORT_DEV}/user/image/${id}`)
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
            // console.log("data :: ", res.data);
            path = res.data.path;
          } else {
            showNoty(
              res.data.status,
              res.data.message,
              res.data.description,
              "bottomRight"
            );
            localStorage.clear();
            window.location.href = "/";
          }
        }
      }
    })
    .catch((error) => {
      showNoty("error", "Error", String(error), "bottomRight");
      localStorage.clear();
      window.location.href = "/";
    });
  return path;
};
