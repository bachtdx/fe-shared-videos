import React from 'react';
import { shallow } from 'enzyme';
import SharedVideo from '../../components/shared_video';
import Home from './index';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import Enzyme from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });
describe('Home', () => {
  let setUser: any;
  let wrapper: any;

  beforeEach(() => {
    setUser = jest.fn();
    wrapper = shallow(
      <Home
        user={{
          token: 'abc123',
          email: 'john@example.com',
        }}
        setUser={setUser}
      />
    );
  });

  it('should render without errors', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render the SharedVideo component with correct props', () => {
    const sharedVideoComponent = wrapper.find(SharedVideo);
    expect(sharedVideoComponent.exists()).toBe(true);
    expect(sharedVideoComponent.props().user).toEqual({
      token: 'abc123',
      email: 'john@example.com',
    });
    expect(sharedVideoComponent.props().setUser).toEqual(setUser);
  });

  // TODO: Write more test cases if needed
});
