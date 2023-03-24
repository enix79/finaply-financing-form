import { StoryFn } from "@storybook/react";
import MultiStepForm, { MultiStepFormProps } from "./MultiStepForm";

export default {
  component: MultiStepForm,
};

const Template: StoryFn<MultiStepFormProps> = (args) => (
  <MultiStepForm {...args} />
);

export const Playground = Template.bind({});
