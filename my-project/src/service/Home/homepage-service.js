import axios from "axios";

var base64 = require("base-64");
var utf8 = require("utf8");

export const login = async (username, password, port, props) => {
  var bytes = utf8.encode(password);
  let pass_encrypt = base64.encode(bytes);
  console.log("pass_encrypt :: ", pass_encrypt);
  const data = {
    username: username,
    password: pass_encrypt,
  };
  await axios
    .post(`${port}/user/login`, data)
    .then((res) => {
      if (res.data) {
        if (res.data.message === "Success") {
          props.onHide();
          localStorage.setItem("user_id", res.data.user_id);
        }
      }
    })
    .catch((err) => {
      console.error(err);
    });
};
