import React from 'react';
import Notifications from "./Notifications.js"
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});



    it("Notifications renders without crashing",() => {
        const wrapper = shallow(< Notifications/>)
        expect(wrapper.exists()).toEqual(true)
    })
    test('checking li rendering', () => {
        const wrapper = shallow(<Notifications displayDrawer/>);
        expect(wrapper.find('ul').children()).toHaveLength(0);
      });

      test('checking ul rendering', () => {
        const wrapper = shallow(<Notifications displayDrawer/>);
        expect(wrapper.find('ul')).toHaveLength(0);
      });
    