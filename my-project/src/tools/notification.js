import { notification } from "antd";
import { notiForm } from "./struct/notificationForm";

export const showNoty = (type, message, des, placement) => {
  let form = notiForm;
  form.type = type;
  form.message = message;
  form.description = des;
  form.placement = placement;
  openNotificationWithIcon(form);
};

const openNotificationWithIcon = (data) => {
  let placement = data.placement;
  try {
    notification[data.type]({
      message: data.message,
      description: data.description,
      placement,
    });
  } catch (err) {
    notification["error"]({
      message: "Notification Error",
      description: err,
    });
  }
};
