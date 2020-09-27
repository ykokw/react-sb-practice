import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from "@storybook/react/types-6-0";

import { TextLink } from "./index";

export default {
  title: "Components/TextLink",
  component: TextLink,
} as Meta;

export const Primary = () => (
  <TextLink href="http://localhost:6006" color="blue">
    TextLink
  </TextLink>
);

export const Secondary = () => (
  <TextLink href="http://localhost:6006" color="gray">
    TextLink
  </TextLink>
);

export const PrimaryBold = () => (
  <TextLink href="http://localhost:6006" bold color="blue">
    TextLink
  </TextLink>
);

export const SecondaryBold = () => (
  <TextLink href="http://localhost:6006" bold color="gray">
    TextLink
  </TextLink>
);
