import { Grid, NumberInput } from "@mantine/core";

export interface MonthlyEarningsProps {}

const MonthlyEarnings: React.FC<MonthlyEarningsProps> = () => {
  return (
    <Grid>
      <Grid.Col span={3}>
        <NumberInput label="Netto-Gehalt" max={12} />
      </Grid.Col>
      <Grid.Col span={3}>
        <NumberInput label="Netto-Gehalt monatlich" />
      </Grid.Col>
      <Grid.Col span={3}>
        <NumberInput label="Rente/Pension" />
      </Grid.Col>
      <Grid.Col span={3}>
        <NumberInput label="Mieteinnahmen" />
      </Grid.Col>
      <Grid.Col span={3}>
        <NumberInput label="Kindergeld" />
      </Grid.Col>
      <Grid.Col span={3}>
        <NumberInput label="Unterhalt" />
      </Grid.Col>
      <Grid.Col span={3}>
        <NumberInput label="Sonstiges" />
      </Grid.Col>
      <Grid.Col span={3}>
        <NumberInput label="Summe" />
      </Grid.Col>
    </Grid>
  );
};

export default MonthlyEarnings;
