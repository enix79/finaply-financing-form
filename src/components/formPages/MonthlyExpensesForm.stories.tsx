import { Meta, StoryFn } from "@storybook/react";
import MonthlyExpensesForm, {
  MonthlyExpensesFormProps,
} from "./MonthlyExpensesForm";

export default {
  component: MonthlyExpensesForm,
} as Meta;

const Template: StoryFn<MonthlyExpensesFormProps> = (args) => (
  <MonthlyExpensesForm {...args} />
);

export const Playground = Template.bind({});
