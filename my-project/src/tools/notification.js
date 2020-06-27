import { notification } from "antd";
import { notiForm } from "./struct/notificationForm";

export const showNoty = (type, message, des) => {
  let form = notiForm;
  form.type = type;
  form.message = message;
  form.description = des;
  openNotificationWithIcon(form);
};

const openNotificationWithIcon = (data) => {
  try {
    notification[data.type]({
      message: data.message,
      description: data.description,
    });
  } catch (err) {
    notification["error"]({
      message: "Notification Error",
      description: err,
    });
  }
};
