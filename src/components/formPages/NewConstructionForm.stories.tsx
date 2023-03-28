import { Container } from "@mantine/core";
import { Meta, StoryFn } from "@storybook/react";
import NewConstructionForm, {
  NewConstructionFormProps,
} from "./NewConstructionForm";

export default {
  component: NewConstructionForm,
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
} as Meta;

const Template: StoryFn<NewConstructionFormProps> = (args) => (
  <NewConstructionForm {...args} />
);

export const Playground = Template.bind({});
