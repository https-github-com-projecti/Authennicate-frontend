import axios from "axios";
import { showNoty } from "../../tools/notification";

var base64 = require("base-64");
var utf8 = require("utf8");

export const login = async (username, password, port, props) => {
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
            props.onHide();
            showNoty(res.data.status, res.data.message, res.data.description);
          } else {
            showNoty(res.data.status, res.data.message, res.data.description);
          }
        }
      }
    })
    .catch((error) => {
      showNoty("error", "Error", String(error));
    });
};

export const getPathIamge = async (id) => {
  let path = "";
  await axios
    .get(`${process.env.REACT_APP_PORT_DEV}/user/image/${id}`)
    .then((res) => {
      if (res) {
        if (res.data) {
          if (res.data.code === 200) {
            showNoty(res.data.status, res.data.message, res.data.description);
            path = res.data.path;
          } else {
            showNoty(res.data.status, res.data.message, res.data.description);
            localStorage.clear();
            window.location.href = "/";
          }
        }
      }
    })
    .catch((error) => {
      showNoty("error", "Error", String(error));
      localStorage.clear();
      window.location.href = "/";
    });
  return path;
};
