import { Container } from "@mantine/core";
import { Meta, StoryFn } from "@storybook/react";
import MortgageObjectForm, {
  MortgageObjectFormProps,
} from "./MortgageObjectForm";

export default {
  component: MortgageObjectForm,
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
} as Meta;

const Template: StoryFn<MortgageObjectFormProps> = (args) => (
  <MortgageObjectForm {...args} />
);

export const Playground = Template.bind({});
