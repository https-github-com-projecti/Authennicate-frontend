import axios from "axios";
import { showNoty } from "../../tools/notification";

export const CreateSubject = async (data) => {
  await axios
    .post(`${process.env.REACT_APP_PORT_DEV}/subject/create`, data)
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

export const GetSubject = async (id, callback) => {
  await axios
    .get(`${process.env.REACT_APP_PORT_DEV}/subject/subject-all/${id}`)
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

export const DeleteSubject = async (id, callback) => {
  await axios
    .delete(`${process.env.REACT_APP_PORT_DEV}/subject/delete/${id}`)
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
            callback(false);
          }
        }
      }
    })
    .catch((error) => {
      showNoty("error", "Error", String(error), "bottomRight");
      callback = false;
    });
};

export const GetUploadPath = async (id, callback) => {
  await axios
    .get(`${process.env.REACT_APP_PORT_DEV}/upload/data-upload/${id}`)
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
          }
        }
      }
    })
    .catch((error) => {
      showNoty("error", "Error", String(error), "bottomRight");
    });
};

export const GetSubjectByID = async (id, callback) => {
  await axios
    .get(`${process.env.REACT_APP_PORT_DEV}/subject/subject/${id}`)
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
