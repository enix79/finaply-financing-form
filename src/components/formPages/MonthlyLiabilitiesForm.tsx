import { Grid, NumberInput } from "@mantine/core";
import { DateInput } from "@mantine/dates";

export interface MonthlyLiabilitiesFormProps {}

const MonthlyLiabilitiesForm: React.FC<MonthlyLiabilitiesFormProps> = () => {
  return (
    <Grid>
      <Grid.Col span={3}>
        <NumberInput label="Immobiliendarlehen Restschuld" hideControls />
      </Grid.Col>
      <Grid.Col span={3}>
        <NumberInput label="Kredit 1 Restschuld" hideControls />
      </Grid.Col>
      <Grid.Col span={3}>
        <DateInput label="Kredit 1 Laufzeit bis" />
      </Grid.Col>
      <Grid.Col span={3}>
        <NumberInput label="Kredit 2 Restschuld" hideControls />
      </Grid.Col>
      <Grid.Col span={3}>
        <DateInput label="Kredit 2 Laufzeit bis" />
      </Grid.Col>
      <Grid.Col span={3}>
        <NumberInput label="Kredit 3 Restschuld" hideControls />
      </Grid.Col>
      <Grid.Col span={3}>
        <DateInput label="Kredit 3 Laufzeit bis" />
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

export default MonthlyLiabilitiesForm;
