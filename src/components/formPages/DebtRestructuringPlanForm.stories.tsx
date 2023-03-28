import { Container } from "@mantine/core";
import { Meta, StoryFn } from "@storybook/react";
import DebtRestucturingPlanForm, {
  DebtRestucturingPlanFormProps,
} from "./DebtRestructuringPlanForm";

export default {
  component: DebtRestucturingPlanForm,
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
} as Meta;

const Template: StoryFn<DebtRestucturingPlanFormProps> = (args) => (
  <DebtRestucturingPlanForm {...args} />
);

export const Playground = Template.bind({});
