import { Meta, StoryFn } from "@storybook/react";
import FutureLivingTypeForm, {
  FutureLivingTypeFormProps,
} from "./FutureLivingTypeForm";

export default {
  component: FutureLivingTypeForm,
} as Meta;

const Template: StoryFn<FutureLivingTypeFormProps> = (args) => (
  <FutureLivingTypeForm {...args} />
);

export const Playground = Template.bind({});
