import React from "react";
import { shallow } from "enzyme";
import List from "../src/components/List";
import { Provider } from "react-redux";
import store from "../src/store"

test("Should render List component correctly..", () => {
  const wrapper = shallow(
    <Provider store={store}>
    <List gifts={[]} />
    </Provider>);
  expect(wrapper).toMatchSnapshot();
});
