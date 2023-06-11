import { notification as notificationApi } from "antd";

const openNotification = (
  type: "success" | "info" | "warning" | "error",
  title: string,
  desc: string
) => {
  notificationApi[type]({
    message: title,
    description: desc,
  });
};
export default openNotification;
