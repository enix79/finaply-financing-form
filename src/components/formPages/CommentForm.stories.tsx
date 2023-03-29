import { Container } from "@mantine/core";
import { Meta, StoryFn } from "@storybook/react";
import CommentForm, { CommentFormProps } from "./CommentForm";

export default {
  component: CommentForm,
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
} as Meta;

const Template: StoryFn<CommentFormProps> = (args) => <CommentForm {...args} />;

export const Playground = Template.bind({});
