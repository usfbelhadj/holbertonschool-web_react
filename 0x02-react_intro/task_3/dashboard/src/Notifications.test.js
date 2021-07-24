import React from 'react';
import { shallow } from "enzyme";

import Notifications from "./Notifications.js"



describe(< Notifications />, () => {
    it("Notifications renders without crashing",() => {
        const wrapper = shallow(< Notifications/>)
        expect(wrapper.exists()).toEqual(true)
    })
    it("Notifications renders three list items", () => {
        const wrapper = shallow(<Notifications/>)
        expect(wrapper.find('.list').children()).toHaveLength(3)
    })
    it(" Notifications renders the text", () => {
        const wrapper = shallow(<Notifications/>)
        const text = wrapper.find('.text')
        expect (text.text() === "Here is the list of notifications");
    })

})