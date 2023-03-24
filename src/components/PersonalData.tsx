import { TextInput, Radio, Group, Select, Grid } from "@mantine/core";
import { DateInput } from "@mantine/dates";

export interface PersonalDataProps {}

const PersonalData: React.FC<PersonalDataProps> = () => {
  return (
    <Grid>
      <Grid.Col span={2}>
        <Radio.Group name="salutation" label="Anrede">
          <Group mt="xs">
            <Radio value="herr" label="Herr" />
            <Radio value="frau" label="Frau" />
          </Group>
        </Radio.Group>
      </Grid.Col>
      <Grid.Col span={2}>
        <Select
          label="Titel"
          placeholder="Auswählen"
          data={[
            { value: "a", label: "Dr." },
            { value: "b", label: "Prof." },
            { value: "c", label: "Prof. Dr." },
          ]}
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <TextInput label="Vorname" />
      </Grid.Col>
      <Grid.Col span={4}>
        <TextInput label="Nachname" />
      </Grid.Col>

      <Grid.Col span={3}>
        <TextInput label="Geburtsname" />
      </Grid.Col>
      <Grid.Col span={4}>
        <TextInput label="Geburtsort" />
      </Grid.Col>
      <Grid.Col span={2}>
        <DateInput label="Geburtstdatum" />
      </Grid.Col>
      <Grid.Col span={3}>
        <TextInput label="Nationalität" />
      </Grid.Col>

      <Grid.Col span={4}>
        <TextInput label="Straße" />
      </Grid.Col>
      <Grid.Col span={1}>
        <TextInput label="Nummer" />
      </Grid.Col>
      <Grid.Col span={1}>
        <TextInput label="PLZ" />
      </Grid.Col>
      <Grid.Col span={4}>
        <TextInput label="Ort" />
      </Grid.Col>
      <Grid.Col span={2}>
        <DateInput label="Wohnhaft seit" />
      </Grid.Col>

      <Grid.Col span={3}>
        <TextInput label="Telefon privat" />
      </Grid.Col>
      <Grid.Col span={3}>
        <TextInput label="Telefon beruflich" />
      </Grid.Col>
      <Grid.Col span={3}>
        <TextInput label="Mobiltelefon" />
      </Grid.Col>
      <Grid.Col span={3}>
        <TextInput label="Telefax" />
      </Grid.Col>

      <Grid.Col span={3}>
        <TextInput label="E-Mail-Adresse" />
      </Grid.Col>
      <Grid.Col span={3}>
        <TextInput label="Bankinstitut" />
      </Grid.Col>
      <Grid.Col span={3}>
        <TextInput label="Kontonummer" />
      </Grid.Col>
      <Grid.Col span={3}>
        <TextInput label="Bankleitzahl" />
      </Grid.Col>

      <Grid.Col span={4}>
        <TextInput label="Ausgeübter Beruf" />
      </Grid.Col>
      <Grid.Col span={2}>
        <DateInput label="seit" />
      </Grid.Col>
      <Grid.Col span={3}>
        <TextInput label="Arbeitgeber" />
      </Grid.Col>
      <Grid.Col span={3}>
        <TextInput label="Branche" />
      </Grid.Col>

      <Grid.Col span={6}>
        <Radio.Group
          name="employmentType"
          label="Dauer des Beschäftigungsverhältnisses"
        >
          <Group mt="xs">
            <Radio value="unlimited" label="unbefristet" />
            <Radio value="trialPeriod" label="in Probezeit" />
            <Radio value="temporary" label="befristet" />
          </Group>
        </Radio.Group>
      </Grid.Col>
      <Grid.Col span={6}>
        <Select
          label="Arbeitsverhältnis"
          placeholder="Auswählen"
          data={[
            { value: "a", label: "Angestellte/r" },
            { value: "b", label: "Beamter/Beamtin" },
            { value: "c", label: "Arbeiter/in" },
            { value: "d", label: "Soldat/in" },
            { value: "e", label: "Hausfrau/mann ohne Beschäftigung" },
            { value: "f", label: "Rentner/in" },
            { value: "g", label: "Pensionär/in" },
            { value: "h", label: "Student/in" },
            { value: "i", label: "Privatier" },
            { value: "j", label: "Auszubildender" },
            { value: "k", label: "Freiberufler/in" },
            { value: "l", label: "Selbstständig" },
            { value: "m", label: "Sonstiges" },
          ]}
        />
      </Grid.Col>

      <Grid.Col span={3}>
        <Select
          label="Familienstand"
          placeholder="Auswählen"
          data={[
            { value: "a", label: "ledig" },
            { value: "b", label: "zusammenlebend" },
            { value: "c", label: "verheiratet" },
            { value: "d", label: "getrennt lebend" },
            { value: "e", label: "geschieden" },
            { value: "f", label: "verwitwet" },
          ]}
        />
      </Grid.Col>

      <Grid.Col span={5}>
        <Radio.Group name="propertyStatus" label="Güterstand">
          <Group mt="xs">
            <Radio value="a" label="gesetztl." />
            <Radio value="b" label="Gütertrennung" />
            <Radio value="c" label="Gütergem." />
          </Group>
        </Radio.Group>
      </Grid.Col>

      <Grid.Col span={4}>
        <TextInput label="Kinder ohne Einkommen" />
      </Grid.Col>
    </Grid>
  );
};

export default PersonalData;
