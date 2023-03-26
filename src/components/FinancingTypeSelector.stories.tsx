import { Container } from "@mantine/core";
import { Meta, StoryFn } from "@storybook/react";
import FinancingTypeSelector, {
  FinancingTypeSelectorProps,
} from "./FinancingTypeSelector";

export default {
  component: FinancingTypeSelector,
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
} as Meta;

const Template: StoryFn<FinancingTypeSelectorProps> = (args) => (
  <FinancingTypeSelector {...args} />
);

export const Playground = Template.bind({});
