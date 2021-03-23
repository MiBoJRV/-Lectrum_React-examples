import React from 'react';
import { Header } from './index';

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

it('Header loads with text Hello World!', () => {
    const wrapper = shallow(<Header />);
    const text = wrapper.find("h1").text();
    expect(text).toEqual("Hello World!");
});

