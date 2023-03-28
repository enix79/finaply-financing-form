import { Grid, NumberInput, Text } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";

export interface NewConstructionFormProps {}

const NewConstructionForm: React.FC<NewConstructionFormProps> = () => {
  const form = useForm({
    initialValues: {
      property: {
        totalCost: "",
        alreadyPaid: "",
      },
      additionalCosts: {
        totalCost: "",
        alreadyPaid: "",
      },
      selfContribution: {
        totalCost: "",
        alreadyPaid: "",
      },
      externalFacilities: {
        totalCost: "",
        alreadyPaid: "",
      },
      notaryAndCourtCosts: {
        totalCost: "",
        alreadyPaid: "",
      },
      transferTax: {
        totalCost: "",
        alreadyPaid: "",
      },
      brokerCommission: {
        totalCost: "",
        alreadyPaid: "",
      },
    },
  });
  const totalCosts =
    +form.values.property.totalCost +
    +form.values.additionalCosts.totalCost +
    +form.values.selfContribution.totalCost +
    +form.values.externalFacilities.totalCost +
    +form.values.notaryAndCourtCosts.totalCost +
    +form.values.transferTax.totalCost +
    +form.values.brokerCommission.totalCost;
  const totalAlreadyPaid =
    +form.values.property.alreadyPaid +
    +form.values.additionalCosts.alreadyPaid +
    +form.values.selfContribution.alreadyPaid +
    +form.values.externalFacilities.alreadyPaid +
    +form.values.notaryAndCourtCosts.alreadyPaid +
    +form.values.transferTax.alreadyPaid +
    +form.values.brokerCommission.alreadyPaid;

  return (
    <Grid>
      <Grid.Col offset={4} span={4}>
        <Text>Betrag</Text>
      </Grid.Col>
      <Grid.Col span={4}>
        <Text>bereits gezahlt</Text>
      </Grid.Col>

      <Grid.Col span={4}>
        <Text>Kaufpreis Grundstück</Text>
      </Grid.Col>
      <Grid.Col span={4}>
        <NumberInput
          aria-label="Kaufpreis Grundstück Betrag"
          hideControls
          rightSection={<Text fz="sm">€</Text>}
          rightSectionWidth={30}
          precision={2}
          decimalSeparator=","
          {...form.getInputProps("property.totalCost")}
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <NumberInput
          aria-label="Kaufpreis Grundstück bereits gezahlt"
          hideControls
          rightSection={<Text fz="sm">€</Text>}
          rightSectionWidth={30}
          {...form.getInputProps("property.alreadyPaid")}
        />
      </Grid.Col>

      <Grid.Col span={4}>
        <Text>Baunebenkosten</Text>
      </Grid.Col>
      <Grid.Col span={4}>
        <NumberInput
          aria-label="Baunebenkosten Betrag"
          hideControls
          rightSection={<Text fz="sm">€</Text>}
          rightSectionWidth={30}
          {...form.getInputProps("additionalCosts.totalCost")}
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <NumberInput
          aria-label="Baunebenkosten bereits gezahlt"
          hideControls
          rightSection={<Text fz="sm">€</Text>}
          rightSectionWidth={30}
          {...form.getInputProps("additionalCosts.alreadyPaid")}
        />
      </Grid.Col>

      <Grid.Col span={4}>
        <Text>Eigenleistung</Text>
      </Grid.Col>
      <Grid.Col span={4}>
        <NumberInput
          aria-label="Eigenleistung Betrag"
          hideControls
          rightSection={<Text fz="sm">€</Text>}
          rightSectionWidth={30}
          {...form.getInputProps("selfContribution.totalCost")}
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <NumberInput
          aria-label="Eigenleistung bereits gezahlt"
          hideControls
          rightSection={<Text fz="sm">€</Text>}
          rightSectionWidth={30}
          {...form.getInputProps("selfContribution.alreadyPaid")}
        />
      </Grid.Col>

      <Grid.Col span={4}>
        <Text>Außenanlagen</Text>
      </Grid.Col>
      <Grid.Col span={4}>
        <NumberInput
          aria-label="Außenanlagen Betrag"
          hideControls
          rightSection={<Text fz="sm">€</Text>}
          rightSectionWidth={30}
          {...form.getInputProps("selfContribution.totalCost")}
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <NumberInput
          aria-label="Außenanlagen bereits gezahlt"
          hideControls
          rightSection={<Text fz="sm">€</Text>}
          rightSectionWidth={30}
          {...form.getInputProps("selfContribution.alreadyPaid")}
        />
      </Grid.Col>

      <Grid.Col span={4}>
        <Text>Notar- und Gerichtskosten</Text>
      </Grid.Col>
      <Grid.Col span={4}>
        <NumberInput
          aria-label="Notar- und Gerichtskosten Betrag"
          hideControls
          rightSection={<Text fz="sm">€</Text>}
          rightSectionWidth={30}
          {...form.getInputProps("notaryAndCourtCosts.totalCost")}
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <NumberInput
          aria-label="Notar- und Gerichtskosten bereits gezahlt"
          hideControls
          rightSection={<Text fz="sm">€</Text>}
          rightSectionWidth={30}
          {...form.getInputProps("notaryAndCourtCosts.alreadyPaid")}
        />
      </Grid.Col>

      <Grid.Col span={4}>
        <Text>Grunderwerbsteuer</Text>
      </Grid.Col>
      <Grid.Col span={4}>
        <NumberInput
          aria-label="Grunderwerbsteuer Betrag"
          hideControls
          rightSection={<Text fz="sm">€</Text>}
          rightSectionWidth={30}
          {...form.getInputProps("transferTax.totalCost")}
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <NumberInput
          aria-label="Grunderwerbsteuer bereits gezahlt"
          hideControls
          rightSection={<Text fz="sm">€</Text>}
          rightSectionWidth={30}
          {...form.getInputProps("transferTax.alreadyPaid")}
        />
      </Grid.Col>

      <Grid.Col span={4}>
        <Text>Maklercourtage</Text>
      </Grid.Col>
      <Grid.Col span={4}>
        <NumberInput
          aria-label="Maklercourtage Betrag"
          hideControls
          rightSection={<Text fz="sm">€</Text>}
          rightSectionWidth={30}
          {...form.getInputProps("brokerCommission.totalCost")}
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <NumberInput
          aria-label="Maklercourtage bereits gezahlt"
          hideControls
          rightSection={<Text fz="sm">€</Text>}
          rightSectionWidth={30}
          {...form.getInputProps("brokerCommission.alreadyPaid")}
        />
      </Grid.Col>

      <Grid.Col span={4}>
        <Text>Summe</Text>
      </Grid.Col>
      <Grid.Col span={4}>
        <NumberInput
          aria-label="Summe Betrag"
          hideControls
          readOnly
          value={totalCosts}
          rightSection={<Text fz="sm">€</Text>}
          rightSectionWidth={30}
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <NumberInput
          aria-label="Summe bereits gezahlt"
          hideControls
          readOnly
          value={totalAlreadyPaid}
          rightSection={<Text fz="sm">€</Text>}
          rightSectionWidth={30}
        />
      </Grid.Col>

      <Grid.Col span={4} offset={2}>
        <DateInput label="Baubeginn am:" />
      </Grid.Col>
      <Grid.Col span={4}>
        <DateInput label="Fertigstellung geplant am:" />
      </Grid.Col>
    </Grid>
  );
};

export default NewConstructionForm;
