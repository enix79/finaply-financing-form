import { Grid, NumberInput, Text } from "@mantine/core";
import { useForm } from "@mantine/form";

export interface DebtRestucturingPlanFormProps {}

export interface DebtRestucture {
  originalLoanAmount: string | number;
  currentDebt: string | number;
  restructuringAmount: string | number;
  fixedInterestRateUntil: Date;
  currentInterestRate: string | number;
  originalLender: string;
  restructure: boolean;
}

export interface DebtRestucturingPlanFormValues {
  originalObjectPrice: string | number;
  propertyPrice: string | number;
  currentEstimatedMartketValue: string | number;
}

const DebtRestucturingPlanForm: React.FC<
  DebtRestucturingPlanFormProps
> = () => {
  const form = useForm<DebtRestucturingPlanFormValues>({
    initialValues: {
      originalObjectPrice: "",
      propertyPrice: "",
      currentEstimatedMartketValue: "",
    },
  });
  const priceSum =
    +form.values.originalObjectPrice + +form.values.propertyPrice;
  return (
    <Grid>
      <Grid.Col span={4}>
        <NumberInput
          label="Ursprünglicher Kaufpreis/Herstellungskosten"
          hideControls
          rightSection={<Text fz="sm">€</Text>}
          rightSectionWidth={30}
          precision={2}
          decimalSeparator=","
          {...form.getInputProps("originalObjectPrice")}
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <NumberInput
          label="Grundstück"
          hideControls
          rightSection={<Text fz="sm">€</Text>}
          rightSectionWidth={30}
          precision={2}
          decimalSeparator=","
          {...form.getInputProps("propertyPrice")}
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <NumberInput
          label="Ursprünglicher Kaufpreis/Herstellungskosten"
          hideControls
          readOnly
          rightSection={<Text fz="sm">€</Text>}
          rightSectionWidth={30}
          precision={2}
          decimalSeparator=","
          value={priceSum}
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <NumberInput
          label="Aktueller geschätzter Verkehrswert der Immobilie"
          hideControls
          rightSection={<Text fz="sm">€</Text>}
          rightSectionWidth={30}
          precision={2}
          decimalSeparator=","
          {...form.getInputProps("currentEstimatedMartketValue")}
        />
      </Grid.Col>
    </Grid>
  );
};

export default DebtRestucturingPlanForm;
