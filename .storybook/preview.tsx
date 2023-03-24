import React from "react";
import { MantineProvider } from "@mantine/core";
import type { Preview } from "@storybook/react";
import { theme } from "../theme";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

const withMantineProvider = (Story: Function, context: any) => {
  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <Story {...context} />
    </MantineProvider>
  );
};

export const decorators = [withMantineProvider];
