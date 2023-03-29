import { Box, Button, Checkbox, Grid, TextInput, Title } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { randomId } from "@mantine/hooks";
import CurrencyInput from "../reusable/CurrencyInput";

export interface DebtRestucturingPlanFormProps {}

export interface DebtRestucture {
  originalLoanAmount: string | number;
  currentDebt: string | number;
  restructuringAmount: string | number;
  fixedInterestRateUntil: Date | null;
  currentInterestRate: string | number;
  originalLender: string;
  shouldBeRestructured: boolean;
  key: string;
}

export interface DebtRestucturingPlanFormValues {
  originalObjectPrice: string | number;
  propertyPrice: string | number;
  currentEstimatedMartketValue: string | number;
  debtRestructures: Array<DebtRestucture>;
}

const DebtRestucturingPlanForm: React.FC<
  DebtRestucturingPlanFormProps
> = () => {
  const form = useForm<DebtRestucturingPlanFormValues>({
    initialValues: {
      originalObjectPrice: "",
      propertyPrice: "",
      currentEstimatedMartketValue: "",
      debtRestructures: [],
    },
  });
  const priceSum =
    +form.values.originalObjectPrice + +form.values.propertyPrice;
  return (
    <>
      <Title order={2} mb={16}>
        Umschuldungsvorhaben
      </Title>
      <Title order={3} mb={16}>
        Ursprüngliche Kosten
      </Title>
      <Grid>
        <Grid.Col span={4}>
          <CurrencyInput
            label="Ursprünglicher Kaufpreis/Herstellungskosten"
            {...form.getInputProps("originalObjectPrice")}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <CurrencyInput
            label="Grundstück"
            {...form.getInputProps("propertyPrice")}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <CurrencyInput label="Summe" value={priceSum} />
        </Grid.Col>
        <Grid.Col span={4}>
          <CurrencyInput
            label="Aktueller geschätzter Verkehrswert der Immobilie"
            {...form.getInputProps("currentEstimatedMartketValue")}
          />
        </Grid.Col>
      </Grid>
      <Title order={3} py={16}>
        Kostenzusammenstellung
      </Title>
      {form.values.debtRestructures.map((debtRestructure, index) => (
        <>
          <Title order={4} pb={8}>
            {`Umschuldungsvorhaben #${index + 1}`}
          </Title>
          <Grid pb={8}>
            <Grid.Col span={4}>
              <CurrencyInput
                label="Höhe des Ursprungsdarlehens"
                {...form.getInputProps(
                  `debtStructures.${index}.originalLoanAmount`
                )}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <CurrencyInput
                label="Aktuelle Restschuld"
                {...form.getInputProps(`debtStructures.${index}.currentDebt`)}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <CurrencyInput
                label="Umschuldungsbetrag"
                {...form.getInputProps(
                  `debtStructures.${index}.restructuringAmount`
                )}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <DateInput
                label="Zinsbindung bis"
                placeholder="TT.MM.JJJJ"
                {...form.getInputProps(
                  `debtStructures.${index}.fixedInterestRateUntil`
                )}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <CurrencyInput
                label="Aktuelle monatliche Rate"
                {...form.getInputProps(
                  `debtStructures.${index}.currentInterestRate`
                )}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <TextInput
                label="Ursprünglicher Darlehensgeber"
                {...form.getInputProps(
                  `debtStructures.${index}.originalLender`
                )}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <Checkbox
                label="Umzuschulden?"
                {...form.getInputProps(
                  `debtStructures.${index}.shouldBeRestructured`
                )}
              />
            </Grid.Col>
          </Grid>
        </>
      ))}

      <Box mt="md">
        <Button
          variant="outline"
          onClick={() =>
            form.insertListItem("debtRestructures", {
              originalLoanAmount: "",
              currentDebt: "",
              restructuringAmount: "",
              fixedInterestRateUntil: null,
              currentInterestRate: "",
              originalLender: "",
              shouldBeRestructured: false,
              key: randomId(),
            })
          }
        >
          Umschuldungsvorhaben hinzufügen
        </Button>
      </Box>
    </>
  );
};

export default DebtRestucturingPlanForm;
