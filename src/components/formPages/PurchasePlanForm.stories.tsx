import { Container } from "@mantine/core";
import { Meta, StoryFn } from "@storybook/react";
import PurchasePlanForm, { PurchasePlanFormProps } from "./PurchasePlanForm";

export default {
  component: PurchasePlanForm,
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
} as Meta;

const Template: StoryFn<PurchasePlanFormProps> = (args) => (
  <PurchasePlanForm {...args} />
);

export const Playground = Template.bind({});
