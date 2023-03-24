import { Container, Title, Space } from "@mantine/core";
import MultiStepForm from "./MultiStepForm";

export interface FormPageProps {}

const FormPage: React.FC<FormPageProps> = () => {
  return (
    <Container>
      <Title order={1}>Finanzierungsantrag / Selbstauskunft</Title>
      <Space h="xl" />
      <MultiStepForm />
    </Container>
  );
};

export default FormPage;
