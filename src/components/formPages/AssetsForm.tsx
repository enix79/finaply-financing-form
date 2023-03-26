import { Grid, NumberInput } from "@mantine/core";

export interface AssetsFormProps {}

const AssetsForm: React.FC<AssetsFormProps> = () => {
  return (
    <Grid>
      <Grid.Col span={3}>
        <NumberInput label="Immobilien-Verkehrswert" hideControls />
      </Grid.Col>
      <Grid.Col span={3}>
        <NumberInput label="Bankguthaben" hideControls />
      </Grid.Col>
      <Grid.Col span={3}>
        <NumberInput label="Wertpapiere" hideControls />
      </Grid.Col>
      <Grid.Col span={3}>
        <NumberInput label="Bausparguthaben" hideControls />
      </Grid.Col>
      <Grid.Col span={3}>
        <NumberInput label="Rückkaufswert LV" hideControls />
      </Grid.Col>
      <Grid.Col span={3}>
        <NumberInput
          label="Rückkaufswert Riester-Rentenversicherung"
          hideControls
        />
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

export default AssetsForm;
