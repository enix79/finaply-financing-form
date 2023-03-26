import { Meta, StoryFn } from "@storybook/react";
import AssetsForm, { AssetsFormProps } from "./AssetsForm";

export default {
  component: AssetsForm,
} as Meta;

const Template: StoryFn<AssetsFormProps> = (args) => <AssetsForm {...args} />;

export const Playground = Template.bind({});
