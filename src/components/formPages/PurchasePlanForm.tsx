import {
  Button,
  Grid,
  Group,
  NumberInput,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { randomId } from "@mantine/hooks";
import { Fragment } from "react";

export interface PurchasePlanFormProps {}

const isAlreadyPaidSmallerThanTotalCost = (
  alreadyPaid: number,
  totalCost: number
) => {
  return alreadyPaid > totalCost;
};

interface OtherCostsRow extends TotalAndAlreadyPaid {
  key: string;
  name: string;
}

interface TotalAndAlreadyPaid {
  totalCost: string | number;
  alreadyPaid: string | number;
}

interface PurchasePlanFormValues {
  purchasePrice: TotalAndAlreadyPaid;
  modernization: TotalAndAlreadyPaid;
  selfContribution: TotalAndAlreadyPaid;
  notaryAndCourtCosts: TotalAndAlreadyPaid;
  transferTax: TotalAndAlreadyPaid;
  brokerCommission: TotalAndAlreadyPaid;
  otherCosts: OtherCostsRow[];
}

const PurchasePlanForm: React.FC<PurchasePlanFormProps> = () => {
  const form = useForm<PurchasePlanFormValues>({
    initialValues: {
      purchasePrice: {
        totalCost: "",
        alreadyPaid: "",
      },
      modernization: {
        totalCost: "",
        alreadyPaid: "",
      },
      selfContribution: {
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
      otherCosts: [],
    },
    validateInputOnChange: true,
    validate: {
      purchasePrice: {
        alreadyPaid: (value, values) => {
          const isTotalCostTouched = form.isDirty("purchasePrice.totalCost");
          if (isTotalCostTouched) {
            return value > values.purchasePrice.totalCost
              ? "Darf den Gesamtbetrag nicht übersteigen"
              : null;
          }
        },
      },
    },
  });
  console.log(form.values);

  const totalCosts =
    +form.values.purchasePrice.totalCost +
    +form.values.modernization.totalCost +
    +form.values.selfContribution.totalCost +
    +form.values.notaryAndCourtCosts.totalCost +
    +form.values.transferTax.totalCost +
    +form.values.brokerCommission.totalCost;
  const totalAlreadyPaid =
    +form.values.purchasePrice.alreadyPaid +
    +form.values.modernization.alreadyPaid +
    +form.values.selfContribution.alreadyPaid +
    +form.values.notaryAndCourtCosts.alreadyPaid +
    +form.values.transferTax.alreadyPaid +
    +form.values.brokerCommission.alreadyPaid;

  return (
    <>
      <Grid>
        <Grid.Col offset={4} span={4}>
          <Text>Betrag</Text>
        </Grid.Col>
        <Grid.Col span={4}>
          <Text>bereits gezahlt</Text>
        </Grid.Col>

        <Grid.Col span={4}>
          <Text>Kaufpreis</Text>
        </Grid.Col>
        <Grid.Col span={4}>
          <NumberInput
            aria-label="Kaufpreis Betrag"
            hideControls
            rightSection={<Text fz="sm">€</Text>}
            rightSectionWidth={30}
            precision={2}
            decimalSeparator=","
            {...form.getInputProps("purchasePrice.totalCost")}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <NumberInput
            aria-label="Kaufpreis bereits gezahlt"
            hideControls
            rightSection={<Text fz="sm">€</Text>}
            rightSectionWidth={30}
            {...form.getInputProps("purchasePrice.alreadyPaid")}
          />
        </Grid.Col>

        <Grid.Col span={4}>
          <Text>Modernisierung</Text>
        </Grid.Col>
        <Grid.Col span={4}>
          <NumberInput
            aria-label="Modernisierung Betrag"
            hideControls
            rightSection={<Text fz="sm">€</Text>}
            rightSectionWidth={30}
            {...form.getInputProps("modernization.totalCost")}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <NumberInput
            aria-label="Modernisierung bereits gezahlt"
            hideControls
            rightSection={<Text fz="sm">€</Text>}
            rightSectionWidth={30}
            {...form.getInputProps("modernization.alreadyPaid")}
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

        {form.values.otherCosts.map((otherCost, index) => {
          return (
            <Fragment key={otherCost.key}>
              <Grid.Col span={4}>
                <TextInput
                  aria-label={`${otherCost.name} Bezeichnung`}
                  {...form.getInputProps(`otherCosts.${index}.name`)}
                />
              </Grid.Col>
              <Grid.Col span={4}>
                <NumberInput
                  aria-label={`${otherCost.name} Betrag`}
                  hideControls
                  rightSection={<Text fz="sm">€</Text>}
                  rightSectionWidth={30}
                  {...form.getInputProps(`otherCosts.${index}.totalCost`)}
                />
              </Grid.Col>
              <Grid.Col span={4}>
                <NumberInput
                  aria-label={`${name} bereits gezahlt`}
                  hideControls
                  rightSection={<Text fz="sm">€</Text>}
                  rightSectionWidth={30}
                  {...form.getInputProps(`otherCosts.${index}.alreadyPaid`)}
                />
              </Grid.Col>
            </Fragment>
          );
        })}

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
      </Grid>

      <Group mt="md">
        <Button
          variant="outline"
          onClick={() =>
            form.insertListItem("otherCosts", {
              key: randomId(),
              name: "",
              totalCost: "",
              alreadyPaid: "",
            })
          }
        >
          Sonstige Kosten hinzufügen
        </Button>
      </Group>
    </>
  );
};

export default PurchasePlanForm;
