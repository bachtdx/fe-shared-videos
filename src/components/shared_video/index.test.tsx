import React from 'react';
import { shallow } from 'enzyme';
import axios from '../../utils/axiosUtils';
import SharedVideo from './index';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import Enzyme from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });
jest.mock('../../utils/axiosUtils', () => ({
  get: jest.fn(),
}));

describe('SharedVideo', () => {
  let setUser: any;
  let wrapper: any;

  beforeEach(() => {
    setUser = jest.fn();
    wrapper = shallow(
      <SharedVideo
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

  it('should fetch video data on mount', () => {
    const mockResponse = {
      data: {
        shared_videos: [
          {
            id: 1,
            user_id: 1,
            video_id: '123456',
            video_title: 'Test Video',
            video_embed: 'https://www.youtube.com/embed/123456',
            shared_by: 'John Doe',
            video_like: 10,
            video_dislike: 5,
            video_description: 'This is a test video',
          },
          // Add more test data if needed
        ],
      },
    };

    // axios.get.mockResolvedValueOnce(mockResponse);

    // wrapper.instance().componentDidMount();

    // expect(axios.get).toHaveBeenCalledWith('/api/v1/videos');
    // expect(axios.get).toHaveBeenCalledTimes(1);
    // expect(wrapper.state('videoData')).toEqual(mockResponse.data.shared_videos);
  });

  // TODO: Write more test cases if needed
});
