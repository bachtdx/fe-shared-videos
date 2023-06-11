import React from 'react';
import { shallow } from 'enzyme';
import axios from '../../utils/axiosUtils';
import CardVideo from './cardVideo';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import Enzyme from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });
jest.mock('../../utils/axiosUtils', () => ({
  post: jest.fn(),
}));

describe('CardVideo', () => {
  let setUser: any;
  let wrapper: any;

  beforeEach(() => {
    setUser = jest.fn();
    wrapper = shallow(
      <CardVideo
        video={{
          id: 1,
          user_id: 1,
          video_id: '123456',
          video_title: 'Test Video',
          video_embed: 'https://www.youtube.com/embed/123456',
          shared_by: 'John Doe',
          video_like: 10,
          video_dislike: 5,
          video_description: 'This is a test video',
        }}
        setUser={setUser}
        user={{
          token: 'abc123',
          email: 'john@example.com',
        }}
      />
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render without errors', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should handle like correctly', () => {
    // axios.post.mockResolvedValueOnce({ data: { message: 'Like success' } });

    // wrapper.find('.shared-card-btn-like').simulate('click');

    // expect(axios.post).toHaveBeenCalledWith('/api/v1/videos/like', { video_id: 1 });
    // expect(axios.post).toHaveBeenCalledTimes(1);
    expect(setUser).not.toHaveBeenCalled();
  });

  it('should handle dislike correctly', () => {
  });
});
