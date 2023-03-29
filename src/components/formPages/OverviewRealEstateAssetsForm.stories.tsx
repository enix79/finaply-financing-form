import { Container } from "@mantine/core";
import { Meta, StoryFn } from "@storybook/react";
import OverviewRealEstateAssetsForm, {
  OverviewRealEstateAssetsFormProps,
} from "./OverviewRealEstateAssetsForm";

export default {
  component: OverviewRealEstateAssetsForm,
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
} as Meta;

const Template: StoryFn<OverviewRealEstateAssetsFormProps> = (args) => (
  <OverviewRealEstateAssetsForm {...args} />
);

export const Playground = Template.bind({});
