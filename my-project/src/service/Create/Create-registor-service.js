import axios from "axios";
import { showNoty } from "../../tools/notification";

export const createUser = (dataForm, setSuccess) => {
  axios
    .post(process.env.REACT_APP_PORT_DEV + "/user/create", dataForm)
    .then((res) => {
      if (res)
        if (res.data) {
          if (res.data.code === 200) {
            showNoty(
              res.data.status,
              res.data.message,
              res.data.description,
              "bottomRight"
            );
            setSuccess(true);
          } else {
            showNoty(
              res.data.status,
              res.data.message,
              res.data.description,
              "bottomRight"
            );
            window.location.href = "/create";
          }
        }
    })
    .catch((error) => {
      showNoty("error", "Error", String(error), "bottomRight");
    });
};
