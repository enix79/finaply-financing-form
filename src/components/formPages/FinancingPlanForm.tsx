import CurrencyInput from "../reusable/CurrencyInput";
import { Grid, NumberInput, Text, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { YearPickerInput } from "@mantine/dates";

export interface FinancingPlanFormProps {}
export interface FinancingPlanFormValues {
  firstLoan: Loan;
  secondLoan: Loan;
  kfwLoan: Loan;
  homeLoan: Loan;
  otherLoan: Loan;
  equityCapital: number | string;
}

export interface LoanStructureOne {
  amount: number | string;
  interestRateCommitment: number | string;
  repaymentRate: number | string;
  rate: number | string;
  specialRepaymentOption: number | string;
}

export interface LoanStructureTwo {
  amount: number | string;
  interestRateCommitmentUntil: Date | null;
  monthlyRepaymentAmount: number | string;
  lender: string;
}

export type Loan = LoanStructureOne | LoanStructureTwo;

const FinancingPlanForm = () => {
  const form = useForm<FinancingPlanFormValues>({
    initialValues: {
      firstLoan: {
        amount: "",
        interestRateCommitment: "",
        repaymentRate: "",
        rate: "",
        specialRepaymentOption: "",
      },
      secondLoan: {
        amount: "",
        interestRateCommitment: "",
        repaymentRate: "",
        rate: "",
        specialRepaymentOption: "",
      },
      kfwLoan: {
        amount: "",
        interestRateCommitment: "",
        repaymentRate: "",
        rate: "",
        specialRepaymentOption: "",
      },
      homeLoan: {
        amount: "",
        interestRateCommitmentUntil: null,
        monthlyRepaymentAmount: "",
        lender: "",
      },
      otherLoan: {
        amount: "",
        interestRateCommitmentUntil: null,
        monthlyRepaymentAmount: "",
        lender: "",
      },
      equityCapital: "",
    },
  });
  return (
    <>
      <Title order={2} py={16}>
        Ihr Finanzierungsplan
      </Title>

      <Grid pb={16}>
        <Grid.Col span={2}>
          <CurrencyInput
            label="Eigenkapital"
            {...form.getInputProps("equityCapital")}
          />
        </Grid.Col>
      </Grid>

      <Title order={3} pb={8}>
        Darlehen
      </Title>
      <Grid pb={16}>
        <Grid.Col span={2}>
          <CurrencyInput
            label="Betrag"
            {...form.getInputProps("firstLoan.amount")}
          />
        </Grid.Col>
        <Grid.Col span={3}>
          <NumberInput
            label="Sollzinsbindung"
            rightSection={<Text fz="sm">Jahre</Text>}
            rightSectionWidth={50}
            {...form.getInputProps("firstLoan.interestRateCommitment")}
          />
        </Grid.Col>
        <Grid.Col span={2}>
          <NumberInput
            label="Tilgung"
            rightSection={<Text fz="sm">%</Text>}
            rightSectionWidth={30}
            {...form.getInputProps("firstLoan.repaymentRate")}
          />
        </Grid.Col>
        <Grid.Col span={2}>
          <CurrencyInput
            label="Rate"
            {...form.getInputProps("firstLoan.rate")}
          />
        </Grid.Col>
        <Grid.Col span={3}>
          <NumberInput
            label="Sondertilgungsoption"
            rightSection={<Text fz="sm">% p.a.</Text>}
            rightSectionWidth={50}
            {...form.getInputProps("firstLoan.specialRepaymentOption")}
          />
        </Grid.Col>
      </Grid>

      <Title order={3} pb={8}>
        Ggbf. 2. Darlehen
      </Title>
      <Grid pb={16}>
        <Grid.Col span={2}>
          <CurrencyInput
            label="Betrag"
            {...form.getInputProps("secondLoan.amount")}
          />
        </Grid.Col>
        <Grid.Col span={3}>
          <NumberInput
            label="Sollzinsbindung"
            rightSection={<Text fz="sm">Jahre</Text>}
            rightSectionWidth={50}
            {...form.getInputProps("secondLoan.interestRateCommitment")}
          />
        </Grid.Col>
        <Grid.Col span={2}>
          <NumberInput
            label="Tilgung"
            rightSection={<Text fz="sm">%</Text>}
            rightSectionWidth={30}
            {...form.getInputProps("secondLoan.repaymentRate")}
          />
        </Grid.Col>
        <Grid.Col span={2}>
          <CurrencyInput
            label="Rate"
            {...form.getInputProps("secondLoan.rate")}
          />
        </Grid.Col>
        <Grid.Col span={3}>
          <NumberInput
            label="Sondertilgungsoption"
            rightSection={<Text fz="sm">% p.a.</Text>}
            rightSectionWidth={50}
            {...form.getInputProps("secondLoan.specialRepaymentOption")}
          />
        </Grid.Col>
      </Grid>

      <Title order={3} pb={8}>
        KfW-Darlehen
      </Title>
      <Grid pb={16}>
        <Grid.Col span={2}>
          <CurrencyInput
            label="Betrag"
            {...form.getInputProps("kfwLoan.amount")}
          />
        </Grid.Col>
        <Grid.Col span={3}>
          <NumberInput
            label="Sollzinsbindung"
            rightSection={<Text fz="sm">Jahre</Text>}
            rightSectionWidth={50}
            {...form.getInputProps("kfwLoan.interestRateCommitment")}
          />
        </Grid.Col>
        <Grid.Col span={2}>
          <NumberInput
            label="Tilgung"
            rightSection={<Text fz="sm">%</Text>}
            rightSectionWidth={30}
            {...form.getInputProps("kfwLoan.repaymentRate")}
          />
        </Grid.Col>
        <Grid.Col span={2}>
          <CurrencyInput label="Rate" {...form.getInputProps("kfwLoan.rate")} />
        </Grid.Col>
        <Grid.Col span={3}>
          <NumberInput
            label="Sondertilgungsoption"
            rightSection={<Text fz="sm">% p.a.</Text>}
            rightSectionWidth={50}
            {...form.getInputProps("kfwLoan.specialRepaymentOption")}
          />
        </Grid.Col>
      </Grid>

      <Title order={3} pb={8}>
        Bauspardarlehen
      </Title>
      <Grid pb={16}>
        <Grid.Col span={2}>
          <CurrencyInput
            label="Betrag"
            {...form.getInputProps("homeLoan.amount")}
          />
        </Grid.Col>
        <Grid.Col span={3}>
          <YearPickerInput
            label="Sollzinsbindung fest bis"
            placeholder="JJJJ"
            {...form.getInputProps("homeLoan.interestRateCommitmentUntil")}
          />
        </Grid.Col>
        <Grid.Col span={2}>
          <NumberInput
            label="Tilgung"
            rightSection={<Text fz="sm">€ p.M.</Text>}
            rightSectionWidth={55}
            {...form.getInputProps("homeLoan.monthlyRepaymentAmount")}
          />
        </Grid.Col>
        <Grid.Col span={5}>
          <TextInput
            label="Darlehensgeber"
            {...form.getInputProps("homeLoan.lender")}
          />
        </Grid.Col>
      </Grid>

      <Title order={3} pb={8}>
        Sonstige Darlehen
      </Title>
      <Grid pb={16}>
        <Grid.Col span={2}>
          <CurrencyInput
            label="Betrag"
            {...form.getInputProps("otherLoan.amount")}
          />
        </Grid.Col>
        <Grid.Col span={3}>
          <YearPickerInput
            label="Sollzinsbindung fest bis"
            placeholder="JJJJ"
            {...form.getInputProps("otherLoan.interestRateCommitmentUntil")}
          />
        </Grid.Col>
        <Grid.Col span={2}>
          <NumberInput
            label="Tilgung"
            rightSection={<Text fz="sm">€ p.M.</Text>}
            rightSectionWidth={55}
            {...form.getInputProps("otherLoan.monthlyRepaymentAmount")}
          />
        </Grid.Col>
        <Grid.Col span={5}>
          <TextInput
            label="Darlehensgeber"
            {...form.getInputProps("otherLoan.lender")}
          />
        </Grid.Col>
      </Grid>
    </>
  );
};

export default FinancingPlanForm;

// homeLoan: {
//   amount: "",
//   interestRateCommitmentUntil: null,
//   monthlyRepaymentAmount: "",
//   lender: "",
// },
