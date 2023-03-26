import { Grid, Group, NumberInput, Radio } from "@mantine/core";

export interface FutureLivingTypeFormProps {}

const FutureLivingTypeForm: React.FC<FutureLivingTypeFormProps> = () => {
  return (
    <Grid>
      <Radio.Group name="futuryLivingType" label="Zukünftige Wohnart">
        <Group mt="xs">
          <Radio value="a" label="zur Miete" />
          <Radio value="b" label="im Eigentum" />
          <Radio value="c" label="mietfrei (kein Eigentum, z.B. bei Eltern)" />
        </Group>
      </Radio.Group>
    </Grid>
  );
};

export default FutureLivingTypeForm;
