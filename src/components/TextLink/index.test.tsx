import React from "react";
import Renderer from "react-test-renderer";

import {
  Primary,
  Secondary,
  PrimaryBold,
  SecondaryBold,
} from "./index.stories";

test("Primary", () => {
  const component = Renderer.create(<Primary />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Secondary", () => {
  const component = Renderer.create(<Secondary />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("PrimaryBold", () => {
  const component = Renderer.create(<PrimaryBold />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("SecondaryBold", () => {
  const component = Renderer.create(<SecondaryBold />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
