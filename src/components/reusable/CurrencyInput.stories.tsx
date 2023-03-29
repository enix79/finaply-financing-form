import { Meta, StoryFn } from "@storybook/react";
import CurrencyInput, { CurrencyInputProps } from "./CurrencyInput";

export default {
  component: CurrencyInput,
} as Meta;

const Template: StoryFn<CurrencyInputProps> = (args) => (
  <CurrencyInput {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  label: "Test Currency Input",
  value: 100,
  w: 200,
};

export const HiddenLabel = Template.bind({});
HiddenLabel.args = {
  hideLabel: true,
  ...Playground.args,
};
