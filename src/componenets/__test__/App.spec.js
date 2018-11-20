import React from "react";
import { shallow } from "enzyme";
import App from "../../App";
import Projects from "../projects/index";

describe('<App /> test' , ()=>{
  it("it should renders the <Projects /> Component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Projects)).toHaveLength(1);
  });  
  it('renders an `.App` className', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App')).toHaveLength(1);
  });
});
