import { Container } from "@mantine/core";
import { Meta, StoryFn } from "@storybook/react";
import FinancingPlanForm, { FinancingPlanFormProps } from "./FinancingPlanForm";

export default {
  component: FinancingPlanForm,
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
} as Meta;

const Template: StoryFn<FinancingPlanFormProps> = (args) => (
  <FinancingPlanForm {...args} />
);

export const Playground = Template.bind({});
