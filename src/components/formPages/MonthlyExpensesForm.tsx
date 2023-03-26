import { Grid, NumberInput } from "@mantine/core";

export interface MonthlyExpensesFormProps {}

const MonthlyExpensesForm: React.FC<MonthlyExpensesFormProps> = () => {
  return (
    <Grid>
      <Grid.Col span={3}>
        <NumberInput label="Aktuelle Eigenmiete (warm)" hideControls />
      </Grid.Col>
      <Grid.Col span={3}>
        <NumberInput label="Bestehende Immobiliendarlehen" hideControls />
      </Grid.Col>
      <Grid.Col span={3}>
        <NumberInput label="Kredit 1" hideControls />
      </Grid.Col>
      <Grid.Col span={3}>
        <NumberInput label="Kredit 2" hideControls />
      </Grid.Col>
      <Grid.Col span={3}>
        <NumberInput label="Kredit 3" hideControls />
      </Grid.Col>
      <Grid.Col span={3}>
        <NumberInput label="Leasing" hideControls />
      </Grid.Col>
      <Grid.Col span={3}>
        <NumberInput label="Private Krankenversicherung" hideControls />
      </Grid.Col>
      <Grid.Col span={3}>
        <NumberInput label="Unterhalt" hideControls />
      </Grid.Col>
      <Grid.Col span={3}>
        <NumberInput label="Sonstiges" hideControls />
      </Grid.Col>
      <Grid.Col span={3}>
        <NumberInput label="Summe" hideControls />
      </Grid.Col>
    </Grid>
  );
};

export default MonthlyExpensesForm;
