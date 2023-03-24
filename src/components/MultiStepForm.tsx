import { useState } from "react";
import { Stepper, Button, Group } from "@mantine/core";
import PersonalData from "./PersonalData";

export interface MultiStepFormProps {}

const MultiStepForm: React.FC<MultiStepFormProps> = () => {
  const [active, setActive] = useState<number>(0);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step label="Persönliche Daten">
          <PersonalData />
        </Stepper.Step>
        <Stepper.Step
          label="Monatliche Einnahmen"
          description="ohne Beleihungsobjekt"
        >
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step label="Vermögen" description="ohne Beleihungsobjekt">
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Zurück
        </Button>
        <Button onClick={nextStep}>Weiter</Button>
      </Group>
    </>
  );
};

export default MultiStepForm;
