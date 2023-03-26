import {
  TextInput,
  NumberInput,
  Radio,
  Group,
  Select,
  Grid,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";

export interface MortgageObjectFormProps {}

const MortgageObjectForm: React.FC<MortgageObjectFormProps> = () => {
  return (
    <Grid>
      <Grid.Col span={4}>
        <TextInput label="Straße" />
      </Grid.Col>
      <Grid.Col span={2}>
        <TextInput label="Hausnummer" />
      </Grid.Col>
      <Grid.Col span={2}>
        <TextInput label="PLZ" />
      </Grid.Col>
      <Grid.Col span={4}>
        <TextInput label="Ort" />
      </Grid.Col>

      <Grid.Col span={4}>
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
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <Select
          label="Bauweise"
          placeholder="Auswählen"
          data={[
            { value: "a", label: "massiv" },
            { value: "b", label: "Fertighaus massiv" },
            { value: "c", label: "Fertighaus" },
            { value: "d", label: "Holzhaus" },
          ]}
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <Radio.Group name="equipment" label="Ausstattung">
          <Group mt="xs">
            <Radio value="a" label="standard" />
            <Radio value="b" label="gehoben" />
            <Radio value="c" label="überdurchschnittlich" />
          </Group>
        </Radio.Group>
      </Grid.Col>
      <Grid.Col span={4}>
        <Radio.Group name="basement" label="Unterkellerung">
          <Group mt="xs">
            <Radio value="a" label="vorhanden" />
            <Radio value="b" label="zu Wohnzwecken voll ausgebaut" />
            <Radio value="c" label="zu Wohnzwecken teilweise ausgebaut" />
          </Group>
        </Radio.Group>
      </Grid.Col>

      <Grid.Col span={3}>
        <NumberInput label="Anzahl der Vollgeschosse/Etagen" hideControls />
      </Grid.Col>
      <Grid.Col span={3}>
        <NumberInput label="Anzahl der Wohneinheiten im Objekt" hideControls />
      </Grid.Col>
      <Grid.Col span={3}>
        <NumberInput
          label="Anzahl der Gewerbeeinheiten im Objekt"
          hideControls
        />
      </Grid.Col>

      <Grid.Col span={3}>
        <Radio.Group name="location" label="Lage">
          <Group mt="xs">
            <Radio value="a" label="Untergeschoss" />
            <Radio value="b" label="Erdgeschoss" />
            <Radio value="c" label="Obergeschoss" />
          </Group>
        </Radio.Group>
      </Grid.Col>
      <Grid.Col span={2}>
        <NumberInput label="Nr." hideControls />
      </Grid.Col>
      <Grid.Col span={2}>
        <NumberInput label="Bezeichnung/Nr. der Wohneinheit" hideControls />
      </Grid.Col>
      <Grid.Col span={2}>
        <NumberInput
          label="Mieteigentumsanteil (falls vorliegend)"
          hideControls
        />
      </Grid.Col>
      <Grid.Col span={3}>
        <NumberInput label="Grundstücksgröße (m²)" hideControls />
      </Grid.Col>

      <Grid.Col span={3}>
        <Radio.Group name="areaDescription" label="Gebietsbeschreibung">
          <Group mt="xs">
            <Radio value="a" label="Wohngebiet" />
            <Radio value="b" label="Industrie-/Gewerbegebiet" />
            <Radio value="c" label="Mischgebiet" />
          </Group>
        </Radio.Group>
      </Grid.Col>

      <Grid.Col span={4}>
        <Select
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
        />
      </Grid.Col>
      <Grid.Col span={3}>
        <DateInput label="Letzte Modernisierung im Jahr" />
      </Grid.Col>
      <Grid.Col span={3}>
        <TextInput label="Sonstiges (z.B. Aufzug)" />
      </Grid.Col>

      <Grid.Col span={2}>
        <Radio.Group name="buildingLease" label="Erbbaurecht">
          <Group mt="xs">
            <Radio value="yes" label="ja" />
            <Radio value="no" label="nein" />
          </Group>
        </Radio.Group>
      </Grid.Col>
      <Grid.Col span={2}>
        <NumberInput label="Erbbauzins (p.a.)" hideControls />
      </Grid.Col>
      <Grid.Col span={3}>
        <DateInput label="bis" placeholder="YYYY" />
      </Grid.Col>
    </Grid>
  );
};

export default MortgageObjectForm;
