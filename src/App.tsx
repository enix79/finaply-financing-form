import { MantineProvider } from "@mantine/core";
import FormPage from "./components/FormPage";
import { theme } from "../theme";

const App = () => {
  return (
    <MantineProvider theme={theme}>
      <FormPage />
    </MantineProvider>
  );
};

export default App;
