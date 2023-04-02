import React from "react";
import { MantineProvider } from "@mantine/core";
import type { Preview } from "@storybook/react";
import { theme } from "../theme";
import "dayjs/locale/de";
import { DatesProvider } from "@mantine/dates";

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

const withMantineDatesProvider = (Story: Function) => {
  return (
    <DatesProvider settings={{ locale: "de" }}>
      <Story />;
    </DatesProvider>
  );
};

export const decorators = [withMantineProvider, withMantineDatesProvider];
