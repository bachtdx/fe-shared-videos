import React from 'react';
import { shallow } from 'enzyme';
import Share from '../../components/share';
import Index from './index';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import Enzyme from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });
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

  it('should render without errors', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render the Share component with correct props', () => {
    const shareComponent = wrapper.find(Share);
    expect(shareComponent.exists()).toBe(true);
    expect(shareComponent.props().user).toEqual({
      token: 'abc123',
      email: 'john@example.com',
    });
    expect(shareComponent.props().setUser).toEqual(setUser);
  });

  // TODO: Write more test cases if needed
});
