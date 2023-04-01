import { DateInput } from "@mantine/dates";
import { FC } from "react";
import { useFormContext } from "../../form-context";
import { Grid } from "@mantine/core";

export interface GermanDateInputProps {
  label: string;
  name: string;
  span?: number;
  [prop: string]: unknown;
}

const GermanDateInput: FC<GermanDateInputProps> = ({
  label,
  name,
  span,
  ...props
}) => {
  const form = useFormContext();
  const dateParser = (value: string) => {
    const [day, month, year] = value.split(".");
    return new Date(Number(year), Number(month) - 1, Number(day));
  };
  const input = (
    <DateInput
      label={label}
      placeholder="TT.MM.JJJJ"
      valueFormat="DD.MM.YYYY"
      dateParser={dateParser}
      allowDeselect
      clearable
      {...props}
      {...form.getInputProps(name)}
    />
  );
  const wrappedInput = <Grid.Col span={span}>{input}</Grid.Col>;
  return span ? wrappedInput : input;
};

export default GermanDateInput;
