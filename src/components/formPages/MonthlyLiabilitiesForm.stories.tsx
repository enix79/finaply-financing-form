import { Meta, StoryFn } from "@storybook/react";
import MonthlyLiabilitiesForm, {
  MonthlyLiabilitiesFormProps,
} from "./MonthlyLiabilitiesForm";

export default {
  component: MonthlyLiabilitiesForm,
} as Meta;

const Template: StoryFn<MonthlyLiabilitiesFormProps> = (args) => (
  <MonthlyLiabilitiesForm {...args} />
);

export const Playground = Template.bind({});
