import { NumberInput, Text } from "@mantine/core";
import { FC } from "react";

export interface CurrencyInputProps {
  label: string;
  hideLabel?: boolean;
  [prop: string]: any;
}

const CurrencyInput: FC<CurrencyInputProps> = ({
  label,
  hideLabel = false,
  ...props
}) => {
  return (
    <NumberInput
      hideControls
      aria-label={hideLabel ? label : undefined}
      label={hideLabel ? undefined : label}
      rightSection={<Text fz="sm">€</Text>}
      rightSectionWidth={30}
      precision={2}
      decimalSeparator=","
      {...props}
    />
  );
};

export default CurrencyInput;
