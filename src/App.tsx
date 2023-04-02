import { MantineProvider } from "@mantine/core";
import FormPage from "./components/FormPage";
import { theme } from "../theme";
import { DatesProvider } from "@mantine/dates";

const App = () => {
  return (
    <MantineProvider theme={theme}>
      <DatesProvider settings={{ locale: "de" }}>
        <FormPage />
      </DatesProvider>
    </MantineProvider>
  );
};

export default App;
