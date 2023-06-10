import { message as messageApi } from "antd";

const showMessage = (type: 'info' | 'success' | 'error' | 'warning' | 'loading', content: string) => {
  messageApi.open({
    type: type,
    content: content,
  });
};

export default showMessage;
