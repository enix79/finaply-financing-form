export interface PersonalData {
  person: PersonData;
  address: AddressData;
  contact: ContactData;
  account: AccountData;
  profession: ProfessionData;
  family: FamilyData;
}

export interface PersonData {
  salutation: Salutation | null;
  title: Title | null;
  firstName: string;
  lastName: string;
  birthname: string;
  birthplace: string;
  birthdate: Date | null;
  nationality: string;
}

export type Salutation = "mr" | "mrs";
export type Title = "dr" | "prof" | "prof-dr";

export interface AddressData {
  street: string;
  streetNumber: number | string;
  zipCode: string;
  city: string;
  residenceSince: Date | null;
}

export interface ContactData {
  phonePrivate: string;
  phoneBusiness: string;
  phoneMobile: string;
  fax: string;
  email: string;
}

export interface AccountData {
  bankName: string;
  iban: string;
  bic: string;
}

export interface ProfessionData {
  currentPosition: string;
  since: Date | null;
  employer: string;
  industry: string;
  employmentStatus: {
    status: EmploymentStatus;
    independentAs: string;
    otherStatusName: string;
  };
}

export type EmploymentType =
  | "employee"
  | "official"
  | "worker"
  | "soldier"
  | "housewife"
  | "retiree"
  | "pensioner"
  | "student"
  | "privateer"
  | "trainee"
  | "freelancer";

export type EmploymentStatus = "unlimited" | "trialPeriod" | "temporary";

export interface FamilyData {
  maritalStatus: MaritalStatus;
  propertyStatus: PropertyStatus;
  numberOfChildrenWithoutIncome: number | string;
  ageOfChildrenWithoutIncome?: Array<number>;
}

export type MaritalStatus =
  | "single"
  | "united"
  | "married"
  | "separated"
  | "divorced"
  | "widowed";

export type PropertyStatus =
  | "legal"
  | "separationOfProperty"
  | "communityOfProperty";
