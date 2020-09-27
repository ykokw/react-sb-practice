import React from "react";
import Renderer from "react-test-renderer";

import {
  Primary,
  Secondary,
  PrimaryBold,
  SecondaryBold,
} from "./index.stories";

test("Primary", () => {
  const component = Renderer.create(<Primary {...Primary.args} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Secondary", () => {
  const component = Renderer.create(<Secondary {...Secondary.args} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("PrimaryBold", () => {
  const component = Renderer.create(<PrimaryBold { ...PrimaryBold.args} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("SecondaryBold", () => {
  const component = Renderer.create(<SecondaryBold {...SecondaryBold.args} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
