import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { TextLink, TextLinkProps } from "./index";

export default {
  title: "Components/TextLink",
  component: TextLink,
} as Meta;

const Template: Story<TextLinkProps> = (args) => <TextLink href='http://localhost:6006' {...args}>TextLink</TextLink>;

export const Primary = Template.bind({});
Primary.args = {
  bold: false,
  color: 'blue',
};

export const Secondary = Template.bind({});
Secondary.args = {
  bold: false,
  color: 'gray',
};

export const PrimaryBold = Template.bind({});
PrimaryBold.args = {
  bold: true,
  color: 'blue',
};

export const SecondaryBold = Template.bind({});
SecondaryBold.args = {
  bold: true,
  color: 'gray',
};
