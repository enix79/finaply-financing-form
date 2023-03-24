import { Meta, StoryFn } from "@storybook/react";
import FormPage from "./FormPage";

export default {
  component: FormPage,
} as Meta;

const Template: StoryFn = (args) => <FormPage {...args} />;

export const Playground = Template.bind({});
