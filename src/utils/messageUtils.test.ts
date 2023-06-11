import { shallow } from 'enzyme';
import { message as messageApi } from 'antd';
import showMessage from './messageUtils';

describe('showMessage', () => {
  beforeEach(() => {
    // Mock messageApi.open method
    messageApi.open = jest.fn();
  });

  it('should call messageApi.open with correct arguments', () => {
    const type = 'success';
    const content = 'This is a success message';
    
    showMessage(type, content);
    
    expect(messageApi.open).toHaveBeenCalledWith({
      type: type,
      content: content,
    });
  });
});
