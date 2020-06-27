import axios from "axios";

export const createUser = (dataForm) => {
  axios
    .post(process.env.REACT_APP_PORT_DEV + "/user/create", dataForm)
    .then((res) => {
      console.table(res);
    })
    .catch((err) => {
      console.error(err);
    });
};
