import { TextInput } from "@mantine/core";

export interface PersonalDataProps {}

const PersonalData: React.FC<PersonalDataProps> = () => {
  return (
    <form>
      <TextInput label="Anrede" />
      <TextInput label="Titel" />
      <TextInput label="Vorname" />
      <TextInput label="Nachname" />

      <TextInput label="Geburtsname" />
      <TextInput label="Geburtsort" />
      <TextInput label="Geburtsdatum" />
      <TextInput label="Nationalität" />

      <TextInput label="Straße" />
      <TextInput label="Hausnummer" />
      <TextInput label="Postleitzahl" />
      <TextInput label="Ort" />
      <TextInput label="Wohnhaft seit" />

      <TextInput label="Telefon privat" />
      <TextInput label="Telefon beruflich" />
      <TextInput label="Mobiltelefon" />
      <TextInput label="Telefax" />
      <TextInput label="E-Mail-Adresse" />

      <TextInput label="Bankinstitut" />
      <TextInput label="Kontonummer" />
      <TextInput label="Bankleitzahl" />

      <TextInput label="Ausgeübter Beruf" />
      <TextInput label="seit" />
      <TextInput label="Arbeitgeber" />
      <TextInput label="Branche" />
      <TextInput label="Dauer des Beschäftigungsverhältnisses" />
      <TextInput label="Arbeitsverhältnis" />
      <TextInput label="Familienstand" />
      <TextInput label="Familienstand" />
      <TextInput label="Güterstand" />
      <TextInput label="Kinder ohne Einkommen" />
    </form>
  );
};

export default PersonalData;
