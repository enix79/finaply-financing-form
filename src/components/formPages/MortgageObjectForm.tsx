import {
  TextInput,
  NumberInput,
  Radio,
  Group,
  Select,
  Grid,
  MultiSelect,
  Title,
  Text,
} from "@mantine/core";
import { DateInput, YearPickerInput } from "@mantine/dates";
import { useForm } from "@mantine/form";

export interface MortgageObjectFormProps {}

const MortgageObjectForm: React.FC<MortgageObjectFormProps> = () => {
  const form = useForm({
    initialValues: {
      street: "",
      houseNumber: "",
      zipCode: "",
      city: "",
      yearOfConstruction: "",
      type: "",
      constructionType: "",
      equipment: "",
      basement: "",
      numberOfFloors: "",
      numberOfApartments: "",
      numberOfCommercialUnits: "",
      location: "",
      number: "",
      apartmentNumber: "",
      shareOfOwnership: "",
      areaSize: "",
      areaDescription: "",
      modernizations: "",
      lastModernizationYear: "",
      miscellaneous: "",
      buildingLease: "",
      groundRent: "",
      endOfGroundRentYear: "",
      livingSpaceOverall: "",
      livingSpaceRented: "",
      livingSpacePrice: "",
      commercialSpaceOverall: "",
      commercialSpaceRented: "",
      commercialSpacePrice: "",
      enclosedSpaceOverall: "",
      enclosedSpaceRented: "",
      numberOfGaragesOverall: "",
      numberOfGaragesRented: "",
      garagesPrice: "",
      numberOfPitchesOVerall: "",
      numberOfPitchesRented: "",
      pitchesPrice: "",
      isObjectRented: "",
      areSizeRented: "",
    },
  });
  console.log(form.values);
  return (
    <>
      <Grid>
        <Grid.Col span={4}>
          <TextInput label="Straße" {...form.getInputProps("street")} />
        </Grid.Col>
        <Grid.Col span={2}>
          <NumberInput
            label="Hausnummer"
            hideControls
            {...form.getInputProps("houseNumber")}
          />
        </Grid.Col>
        <Grid.Col span={2}>
          <TextInput label="PLZ" {...form.getInputProps("zipCode")} />
        </Grid.Col>
        <Grid.Col span={4}>
          <TextInput label="Ort" {...form.getInputProps("city")} />
        </Grid.Col>

        <Grid.Col span={2}>
          <YearPickerInput
            label="Baujahr"
            placeholder="YYYY"
            allowDeselect
            clearable
            {...form.getInputProps("yearOfConstruction")}
          />
        </Grid.Col>
        <Grid.Col span={3}>
          <Select
            label="Art"
            placeholder="Auswählen"
            data={[
              { value: "a", label: "Einfamilienhaus" },
              { value: "b", label: "Zweifamilienhaus" },
              { value: "c", label: "Doppelhaushälfte" },
              { value: "d", label: "Reihenhaus" },
              { value: "e", label: "Mehrfamilienhaus" },
              { value: "f", label: "Eigentumswohnung" },
              { value: "g", label: "Fachwerkhaus" },
              { value: "h", label: "Grundstück" },
              { value: "i", label: "mit Einliegerwohnung" },
            ]}
            {...form.getInputProps("type")}
          />
        </Grid.Col>
        <Grid.Col span={3}>
          <Select
            label="Bauweise"
            placeholder="Auswählen"
            data={[
              { value: "a", label: "massiv" },
              { value: "b", label: "Fertighaus massiv" },
              { value: "c", label: "Fertighaus" },
              { value: "d", label: "Holzhaus" },
            ]}
            {...form.getInputProps("constructionType")}
          />
        </Grid.Col>
        <Grid.Col span={4}></Grid.Col>

        <Grid.Col span={12}>
          <Radio.Group
            name="equipment"
            label="Ausstattung"
            {...form.getInputProps("equipment")}
          >
            <Group mt="xs">
              <Radio value="a" label="standard" />
              <Radio value="b" label="gehoben" />
              <Radio value="c" label="überdurchschnittlich" />
            </Group>
          </Radio.Group>
        </Grid.Col>
        <Grid.Col span={12}>
          <Radio.Group
            name="basement"
            label="Unterkellerung"
            {...form.getInputProps("basement")}
          >
            <Group mt="xs">
              <Radio value="a" label="vorhanden" />
              <Radio value="b" label="zu Wohnzwecken voll ausgebaut" />
              <Radio value="c" label="zu Wohnzwecken teilweise ausgebaut" />
            </Group>
          </Radio.Group>
        </Grid.Col>

        <Grid.Col span={4}>
          <NumberInput
            label="Anzahl der Vollgeschosse/Etagen"
            hideControls
            {...form.getInputProps("numberOfFloors")}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <NumberInput
            label="Anzahl der Wohneinheiten im Objekt"
            hideControls
            {...form.getInputProps("numberOfApartments")}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <NumberInput
            label="Anzahl der Gewerbeeinheiten im Objekt"
            hideControls
            {...form.getInputProps("numberOfCommercialUnits")}
          />
        </Grid.Col>

        <Grid.Col span={6}>
          <Radio.Group
            name="location"
            label="Lage"
            {...form.getInputProps("location")}
          >
            <Group mt="xs">
              <Radio value="a" label="Untergeschoss" />
              <Radio value="b" label="Erdgeschoss" />
              <Radio value="c" label="Obergeschoss" />
            </Group>
          </Radio.Group>
        </Grid.Col>
        <Grid.Col span={2}>
          {form.values.location === "c" && (
            <NumberInput
              label="Etagennummer"
              hideControls
              {...form.getInputProps("number")}
            />
          )}
        </Grid.Col>
        <Grid.Col span={4}></Grid.Col>

        <Grid.Col span={4}>
          <NumberInput
            label="Bezeichnung/Nr. der Wohneinheit"
            hideControls
            {...form.getInputProps("apartmentNumber")}
          />
        </Grid.Col>
        <Grid.Col span={5}>
          <NumberInput
            label="Mietigentumsanteil (falls vorliegend)"
            hideControls
            {...form.getInputProps("shareOfOwnership")}
          />
        </Grid.Col>
        <Grid.Col span={2}>
          <NumberInput
            label="Grundstücksgröße"
            rightSection={<Text fz="sm">m²</Text>}
            rightSectionWidth={30}
            {...form.getInputProps("areaSize")}
          />
        </Grid.Col>

        <Grid.Col span={6}>
          <Radio.Group
            name="areaDescription"
            label="Gebietsbeschreibung"
            {...form.getInputProps("areaDescription")}
          >
            <Group mt="xs">
              <Radio value="a" label="Wohngebiet" />
              <Radio value="b" label="Industrie-/Gewerbegebiet" />
              <Radio value="c" label="Mischgebiet" />
            </Group>
          </Radio.Group>
        </Grid.Col>
        <Grid.Col span={12}>
          <MultiSelect
            label="Modernisierungen"
            placeholder="Auswählen"
            data={[
              { value: "a", label: "Heizung (Brenner, ggf. Kessel)" },
              { value: "b", label: "Fenster (Rahmen und Isolierungen)" },
              { value: "c", label: "Dach (Eindeckung oder Wärmedämmung)" },
              { value: "d", label: "Wärmedämmung" },
              { value: "e", label: "Bäder, WCs, Fliesen oder Sanitärobjekte" },
              { value: "f", label: "Raumaufteilung (Grundriss, Zimmergrößen)" },
              {
                value: "g",
                label: "Strom, Abwasser, Heizungsleitungen oder Heizkörper",
              },
              {
                value: "h",
                label: "Bodenbeläge, Wandbekleidung oder Treppenhaus",
              },
            ]}
            {...form.getInputProps("modernisations")}
          />
        </Grid.Col>
        <Grid.Col span={3}>
          <YearPickerInput
            label="Letzte Modernisierung"
            placeholder="YYYY"
            clearable
            {...form.getInputProps("lastModernizationYear")}
          />
        </Grid.Col>
        <Grid.Col span={9}>
          <TextInput
            label="Sonstiges"
            placeholder="z.B. Aufzug"
            {...form.getInputProps("miscellaneous")}
          />
        </Grid.Col>

        <Grid.Col span={2}>
          <Radio.Group
            name="buildingLease"
            label="Erbbaurecht"
            {...form.getInputProps("buildingLease")}
          >
            <Group mt="xs">
              <Radio value="yes" label="ja" />
              <Radio value="no" label="nein" />
            </Group>
          </Radio.Group>
        </Grid.Col>
        {form.values.buildingLease === "yes" && (
          <Grid.Col span={2}>
            <NumberInput
              label="Erbbauzins (p.a.)"
              hideControls
              {...form.getInputProps("groundRent")}
            />
          </Grid.Col>
        )}
        {form.values.buildingLease === "yes" && (
          <Grid.Col span={2}>
            <YearPickerInput
              label="bis"
              placeholder="YYYY"
              clearable
              {...form.getInputProps("endOfGroundRentYear")}
            />
          </Grid.Col>
        )}
      </Grid>
      <Title order={3} my="xl">
        Objektnutzung
      </Title>
      <Grid>
        <Grid.Col span={2}>
          <NumberInput
            label="Wohnfläche"
            rightSection={<Text fz="sm">m²</Text>}
            rightSectionWidth={30}
            {...form.getInputProps("livingSpaceOverall")}
          />
        </Grid.Col>
        <Grid.Col span={2}>
          <NumberInput
            label="Gewerbefläche"
            rightSection={<Text fz="sm">m²</Text>}
            rightSectionWidth={30}
            {...form.getInputProps("commercialSpaceOverall")}
          />
        </Grid.Col>
        <Grid.Col span={2}>
          <NumberInput
            label="Umbauter Raum"
            rightSection={<Text fz="sm">m³</Text>}
            rightSectionWidth={30}
            {...form.getInputProps("enclosedSpaceOverall")}
          />
        </Grid.Col>
        <Grid.Col span={3}>
          <NumberInput
            label="Anzahl der Garagen"
            // description="inkl. Tiefgaragen"
            {...form.getInputProps("numberOfGaragesOverall")}
          />
        </Grid.Col>
        <Grid.Col span={3}>
          <NumberInput
            label="Anzahl der Stellplätze"
            // description="inkl. Carports"
            {...form.getInputProps("numberOfPitchesOVerall")}
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <Radio.Group
            name="usage"
            label="Wird das Objekt oder Teile des Objekts vermietet?"
            {...form.getInputProps("isObjectRented")}
          >
            <Group mt="xs">
              <Radio value="yes" label="ja" />
              <Radio value="no" label="nein" />
            </Group>
          </Radio.Group>
        </Grid.Col>
        {form.values.isObjectRented === "yes" && (
          <>
            <Grid.Col span={3}>
              <NumberInput
                label="Wohnfläche"
                rightSection={<Text fz="sm">m²</Text>}
                rightSectionWidth={30}
                {...form.getInputProps("livingSpaceRented")}
              />
            </Grid.Col>
            <Grid.Col span={3}>
              <NumberInput
                label="Nettokaltmiete"
                rightSection={<Text fz="sm">€/m² p.M.</Text>}
                rightSectionWidth={75}
                {...form.getInputProps("livingSpacePrice")}
              />
            </Grid.Col>

            <Grid.Col span={3}>
              <NumberInput
                label="Gewerbefläche"
                rightSection={<Text fz="sm">m²</Text>}
                rightSectionWidth={30}
                {...form.getInputProps("commercialSpaceRented")}
              />
            </Grid.Col>
            <Grid.Col span={3}>
              <NumberInput
                label="Nettokaltmiete"
                rightSection={<Text fz="sm">€/m² p.M.</Text>}
                rightSectionWidth={75}
                {...form.getInputProps("commercialSpacePrice")}
              />
            </Grid.Col>

            <Grid.Col span={3}>
              <NumberInput
                label="Anzahl der Garagen"
                // description="inkl. Tiefgaragen"
                {...form.getInputProps("numberOfGaragesRented")}
              />
            </Grid.Col>
            <Grid.Col span={3}>
              <NumberInput
                label="Nettokaltmiete"
                rightSection={<Text fz="sm">€ p.M.</Text>}
                rightSectionWidth={50}
                {...form.getInputProps("garagesPrice")}
              />
            </Grid.Col>
            <Grid.Col span={3}>
              <NumberInput
                label="Anzahl der Stellplätze"
                // description="inkl. Carports"
                {...form.getInputProps("numberOfPitchesRented")}
              />
            </Grid.Col>
            <Grid.Col span={3}>
              <NumberInput
                label="Nettokaltmiete"
                rightSection={<Text fz="sm">€ p.M.</Text>}
                rightSectionWidth={50}
                {...form.getInputProps("pitchesPrice")}
              />
            </Grid.Col>
            <Grid.Col span={3}>
              <NumberInput
                label="Umbauter Raum"
                rightSection={<Text fz="sm">m³</Text>}
                rightSectionWidth={30}
                {...form.getInputProps("enclosedSpaceRented")}
              />
            </Grid.Col>
            <Grid.Col span={3}>
              <NumberInput
                label="Grundstücksgröße"
                rightSection={<Text fz="sm">m²</Text>}
                rightSectionWidth={30}
              />
            </Grid.Col>
          </>
        )}
      </Grid>
    </>
  );
};

export default MortgageObjectForm;
