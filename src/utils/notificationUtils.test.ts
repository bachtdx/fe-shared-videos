import openNotification from './notificationUtils';
import { notification } from 'antd';

jest.mock('antd', () => ({
  notification: {
    success: jest.fn(),
    info: jest.fn(),
    warning: jest.fn(),
    error: jest.fn(),
  },
}));

describe('openNotification', () => {
  it('should call the correct notification method', () => {
    openNotification('success', 'Success', 'This is a success message');
    expect(notification.success).toHaveBeenCalledWith({
      message: 'Success',
      description: 'This is a success message',
      duration: 5,
    });

    openNotification('info', 'Info', 'This is an info message');
    expect(notification.info).toHaveBeenCalledWith({
      message: 'Info',
      description: 'This is an info message',
      duration: 5,
    });

    openNotification('warning', 'Warning', 'This is a warning message');
    expect(notification.warning).toHaveBeenCalledWith({
      message: 'Warning',
      description: 'This is a warning message',
      duration: 5,
    });

    openNotification('error', 'Error', 'This is an error message');
    expect(notification.error).toHaveBeenCalledWith({
      message: 'Error',
      description: 'This is an error message',
      duration: 5,
    });
  });
});
