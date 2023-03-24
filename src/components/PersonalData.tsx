import { TextInput, Radio, Group, Select } from "@mantine/core";
import { DateInput } from "@mantine/dates";

export interface PersonalDataProps {}

const PersonalData: React.FC<PersonalDataProps> = () => {
  return (
    <form>
      <Radio.Group name="salutation" label="Anrede">
        <Group mt="xs">
          <Radio value="herr" label="Herr" />
          <Radio value="frau" label="Frau" />
        </Group>
      </Radio.Group>
      <Select
        label="Titel"
        placeholder="Auswählen"
        data={[
          { value: "a", label: "Dr." },
          { value: "b", label: "Prof." },
          { value: "c", label: "Prof. Dr." },
        ]}
      />

      <TextInput label="Vorname" />
      <TextInput label="Nachname" />
      <TextInput label="Geburtsname" />
      <TextInput label="Geburtsort" />
      <DateInput label="Geburtstdatum" />

      <TextInput label="Nationalität" />
      <TextInput label="Straße" />
      <TextInput label="Hausnummer" />
      <TextInput label="Postleitzahl" />
      <TextInput label="Ort" />
      <DateInput label="Wohnhaft seit" />
      <TextInput label="Telefon privat" />
      <TextInput label="Telefon beruflich" />
      <TextInput label="Mobiltelefon" />
      <TextInput label="Telefax" />
      <TextInput label="E-Mail-Adresse" />
      <TextInput label="Bankinstitut" />
      <TextInput label="Kontonummer" />
      <TextInput label="Bankleitzahl" />
      <TextInput label="Ausgeübter Beruf" />
      <DateInput label="seit" />
      <TextInput label="Arbeitgeber" />
      <TextInput label="Branche" />
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

      <Radio.Group name="propertyStatus" label="Güterstand">
        <Group mt="xs">
          <Radio value="a" label="gesetztl." />
          <Radio value="b" label="Gütertrennung" />
          <Radio value="c" label="Gütergem." />
        </Group>
      </Radio.Group>

      <TextInput label="Kinder ohne Einkommen" />
    </form>
  );
};

export default PersonalData;
