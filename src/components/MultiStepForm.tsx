import { useState } from "react";
import { Stepper, Button, Group } from "@mantine/core";
import {
  PersonalData,
  MonthlyEarnings,
  AssetsForm,
  MonthlyExpensesForm,
  MonthlyLiabilitiesForm,
  FutureLivingTypeForm,
  MortgageObjectForm,
  PurchasePlanForm,
  DebtRestructuringPlanForm,
  FinancingPlanForm,
} from "./formPages";
import FinancingTypeSelector from "./FinancingTypeSelector";

export interface MultiStepFormProps {}

const MultiStepForm: React.FC<MultiStepFormProps> = () => {
  const [active, setActive] = useState<number>(0);
  const isLastStep = active === 11;
  const nextStep = () =>
    setActive((current) => (current < 11 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step>
          <FinancingTypeSelector onSelect={nextStep} />
        </Stepper.Step>

        <Stepper.Step>
          <PersonalData />
        </Stepper.Step>

        <Stepper.Step>
          <MonthlyEarnings />
        </Stepper.Step>

        <Stepper.Step>
          <AssetsForm />
        </Stepper.Step>

        <Stepper.Step>
          <MonthlyExpensesForm />
        </Stepper.Step>

        <Stepper.Step>
          <MonthlyLiabilitiesForm />
        </Stepper.Step>

        <Stepper.Step>
          <FutureLivingTypeForm />
        </Stepper.Step>

        <Stepper.Step>
          <MortgageObjectForm />
        </Stepper.Step>

        <Stepper.Step>
          <PurchasePlanForm />
        </Stepper.Step>

        <Stepper.Step>
          <DebtRestructuringPlanForm />
        </Stepper.Step>

        <Stepper.Step>
          <FinancingPlanForm />
        </Stepper.Step>

        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      {active !== 0 && (
        <Group position="center" mt="xl">
          <Button variant="default" onClick={prevStep}>
            Zurück
          </Button>
          <Button onClick={nextStep} disabled={isLastStep}>
            Weiter
          </Button>
        </Group>
      )}
    </>
  );
};

export default MultiStepForm;
