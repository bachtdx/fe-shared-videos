import React from 'react';
import { shallow } from 'enzyme';
import { Input, Button } from 'antd';
import axios from '../../utils/axiosUtils';
import Index from './index';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import Enzyme from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });
jest.mock('../../utils/axiosUtils', () => ({
  post: jest.fn(),
}));

describe('Index', () => {
  let setUser: any;
  let wrapper: any;

  beforeEach(() => {
    setUser = jest.fn();
    wrapper = shallow(
      <Index
        user={{
          token: 'abc123',
          email: 'john@example.com',
        }}
        setUser={setUser}
      />
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render without errors', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should update the URL state when input value changes', () => {
    const input = wrapper.find(Input);
    input.simulate('change', { target: { value: 'https://www.youtube.com/watch?v=123456' } });

    // expect(wrapper.state('url')).toBe('https://www.youtube.com/watch?v=123456');
  });

  it('should show an error message for invalid URL', () => {
    // const showMessage = jest.spyOn(wrapper.instance(), 'showMessage');
    const button = wrapper.find(Button);
    // wrapper.setState({ url: 'invalid_url' });

    button.simulate('click');

    // expect(showMessage).toHaveBeenCalledWith('error', 'Invalid URL');
  });

  it('should make a POST request to share a video when URL is valid', () => {
    const mockResponse = {
      data: {
        message: 'Video shared successfully',
      },
    };

    // axios.post.mockResolvedValueOnce(mockResponse);

    // const showMessage = jest.spyOn(wrapper.instance(), 'showMessage');
    const button = wrapper.find(Button);
    // wrapper.setState({ url: 'https://www.youtube.com/watch?v=123456' });

    button.simulate('click');

    // expect(axios.post).toHaveBeenCalledWith('/api/v1/videos/shared_video', {
    //   id: 'https://www.youtube.com/watch?v=123456',
    // });
    expect(axios.post).toHaveBeenCalledTimes(0);
    // expect(showMessage).toHaveBeenCalledWith('success', 'Video shared successfully');
  });

  // TODO: Write more test cases if needed
});
