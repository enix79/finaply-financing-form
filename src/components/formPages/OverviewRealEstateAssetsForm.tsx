import {
  Box,
  Button,
  Grid,
  NumberInput,
  TextInput,
  Title,
  Text,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { FC, Fragment } from "react";
import CurrencyInput from "../reusable/CurrencyInput";
import { randomId } from "@mantine/hooks";

export interface OverviewRealEstateAssetsFormProps {}
export interface OverviewRealEstateAssetsFormValues {
  realEstateAssets: Array<RealEstateAssetOverview>;
}
export interface RealEstateAssetOverview {
  objectType: string;
  address: Address;
  livingSpace: number | string;
  objectValue: number | string;
  rentalIncome: number | string;
  loanRate: number | string;
  remainingDebt: number | string;
  fixedInterestRateUntil: Date | null;
  key: string;
}
interface Address {
  street: string;
  houseNumber: string;
  zipCode: string;
  city: string;
}
const OverviewRealEstateAssetsForm: FC<
  OverviewRealEstateAssetsFormProps
> = () => {
  const form = useForm<OverviewRealEstateAssetsFormValues>({
    initialValues: {
      realEstateAssets: [],
    },
  });
  console.log(form.values);
  return (
    <>
      <Title order={2} mb={16}>
        Übersicht Immobilienvermögen
      </Title>
      {form.values.realEstateAssets.map((realEstateAsset, index) => (
        <Fragment key={realEstateAsset.key}>
          <Title order={3} mb={16}>
            {`Immobilie ${index + 1}`}
          </Title>
          <Grid pb={8}>
            <Grid.Col span={4}>
              <TextInput
                label="Objektart"
                {...form.getInputProps(`realEstateAssets.${index}.objectType`)}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <TextInput
                label="Straße"
                {...form.getInputProps(
                  `realEstateAssets.${index}.address.street`
                )}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <TextInput
                label="Hausnummer"
                {...form.getInputProps(
                  `realEstateAssets.${index}.address.houseNumber`
                )}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <TextInput
                label="PLZ"
                {...form.getInputProps(
                  `realEstateAssets.${index}.address.zipCode`
                )}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <TextInput
                label="Ort"
                {...form.getInputProps(
                  `realEstateAssets.${index}.address.city`
                )}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <NumberInput
                label="Wohnfläche"
                rightSection={<Text fz="sm">m²</Text>}
                rightSectionWidth={30}
                {...form.getInputProps(`realEstateAssets.${index}.livingSpace`)}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <CurrencyInput
                label="Objektwert"
                {...form.getInputProps(`realEstateAssets.${index}.objectValue`)}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <NumberInput
                label="Mieteinnahmen"
                decimalSeparator=","
                rightSection={<Text fz="sm">€ p.M.</Text>}
                rightSectionWidth={55}
                {...form.getInputProps(
                  `realEstateAssets.${index}.rentalIncome`
                )}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <NumberInput
                label="Darlehensrate"
                decimalSeparator=","
                rightSection={<Text fz="sm">€ p.M.</Text>}
                rightSectionWidth={55}
                {...form.getInputProps(`realEstateAssets.${index}.loanRate`)}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <CurrencyInput
                label="Restschuld"
                {...form.getInputProps(
                  `realEstateAssets.${index}.remainingDebt`
                )}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <DateInput
                label="Zinsbindung bis"
                placeholder="DD.MM.JJJJ"
                {...form.getInputProps(
                  `realEstateAssets.${index}.fixedInterestRateUntil`
                )}
              />
            </Grid.Col>
          </Grid>
        </Fragment>
      ))}
      <Box mt="md">
        <Button
          variant="outline"
          onClick={() =>
            form.insertListItem("realEstateAssets", {
              objectType: "",
              address: {
                street: "",
                houseNumber: "",
                zipCode: "",
                city: "",
              },
              livingSpace: "",
              objectValue: "",
              rentalIncome: "",
              loanRate: "",
              remainingDebt: "",
              fixedInterestRateUntil: null,
              key: randomId(),
            })
          }
        >
          Immobilie hinzufügen
        </Button>
      </Box>
    </>
  );
};

export default OverviewRealEstateAssetsForm;
