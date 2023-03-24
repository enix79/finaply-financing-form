import { Meta, StoryFn } from "@storybook/react";
import MonthlyEarnings, { MonthlyEarningsProps } from "./MonthlyEarnings";

export default {
  component: MonthlyEarnings,
} as Meta;

const Template: StoryFn<MonthlyEarningsProps> = (args) => (
  <MonthlyEarnings {...args} />
);

export const Playground = Template.bind({});
