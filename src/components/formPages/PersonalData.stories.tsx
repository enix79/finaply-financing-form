import { Meta, StoryFn } from "@storybook/react";
import PersonalData, { PersonalDataProps } from "./PersonalData";

export default {
  component: PersonalData,
} as Meta;

const Template: StoryFn<PersonalDataProps> = (args) => (
  <PersonalData {...args} />
);

export const Playground = Template.bind({});
