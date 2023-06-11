import React from 'react';
// import { shallow } from 'enzyme';
// import Adapter from '@cfaester/enzyme-adapter-react-18';
// import Header from './index';
// import Enzyme from 'enzyme';
// Enzyme.configure({ adapter: new Adapter() });

// describe('Header', () => {
//   it('renders without crashing', () => {
//     shallow(<Header user={{ token: '', email: '' }} setUser={jest.fn()} />);
//   });

//   it('displays welcome message and buttons when user is logged in', () => {
//     const user = { token: 'abc123', email: 'test@example.com' };
//     const setUser = jest.fn();
//     const wrapper = shallow(<Header user={user} setUser={setUser} />);

//     expect(wrapper.find('.shared-video-span-welcome').text()).toEqual(`Welcome ${user.email}`);
//     expect(wrapper.find('.shared-video-button-share-movie')).toHaveLength(1);
//     expect(wrapper.find('.shared-video-button-logout')).toHaveLength(1);
//   });

//   it('displays input fields and login/register button when user is not logged in', () => {
//     const user = { token: '', email: '' };
//     const setUser = jest.fn();
//     const wrapper = shallow(<Header user={user} setUser={setUser} />);

//     expect(wrapper.find('.shared-video-input')).toHaveLength(2);
//     expect(wrapper.find('.shared-video-button-login')).toHaveLength(1);
//   });

//   it('calls setUser and Cookies.set when login/register button is clicked', () => {
//     const setUser = jest.fn();
//     const cookiesSet = jest.spyOn(require('js-cookie'), 'set');
//     const wrapper = shallow(<Header user={{ token: '', email: '' }} setUser={setUser} />);

//     wrapper.find('.shared-video-button-login').simulate('click');
    
//     expect(setUser).toHaveBeenCalled();
//     expect(cookiesSet).toHaveBeenCalledWith('token', expect.any(String));
//   });

//   it('calls setUser and Cookies.set when logout button is clicked', () => {
//     const setUser = jest.fn();
//     const cookiesSet = jest.spyOn(require('js-cookie'), 'set');
//     const wrapper = shallow(<Header user={{ token: 'abc123', email: 'test@example.com' }} setUser={setUser} />);

//     wrapper.find('.shared-video-button-logout').simulate('click');
    
//     expect(setUser).toHaveBeenCalledWith({ token: '', email: '' });
//     expect(cookiesSet).toHaveBeenCalledWith('token', '');
//   });

//   // Add more test cases as needed
// });
