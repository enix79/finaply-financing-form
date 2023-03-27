import { Card, Center, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { FC } from "react";
import { CoinsIcon, HomeDollarIcon, HomeEditIcon, HomeIcon } from "./icons";

export interface FinancingTypeSelectorProps {
  onSelect: () => void;
}

const FinancingTypeSelector: FC<FinancingTypeSelectorProps> = ({
  onSelect,
}) => {
  return (
    <>
      <Title order={2} my="lg">
        Bitte wählen Sie einen Finanzierungstyp
      </Title>

      <SimpleGrid cols={4}>
        <Card
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
          sx={(theme) => ({
            "&:hover": {
              borderColor: theme.colors.dark[2],
              cursor: "pointer",
            },
          })}
          onClick={onSelect}
        >
          <Stack justify="space-around" align="center">
            <HomeDollarIcon />
            <Text>Kauf</Text>
          </Stack>
        </Card>
        <Card
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
          sx={(theme) => ({
            "&:hover": {
              borderColor: theme.colors.dark[2],
              cursor: "pointer",
            },
          })}
          onClick={onSelect}
        >
          <Stack justify="space-around" align="center">
            <HomeIcon />
            <Text>Neubau</Text>
          </Stack>
        </Card>
        <Card
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
          sx={(theme) => ({
            "&:hover": {
              borderColor: theme.colors.dark[2],
              cursor: "pointer",
            },
          })}
          onClick={onSelect}
        >
          <Stack justify="space-around" align="center">
            <CoinsIcon />
            <Text>Umschuldung</Text>
          </Stack>
        </Card>
        <Card
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
          sx={(theme) => ({
            "&:hover": {
              borderColor: theme.colors.dark[2],
              cursor: "pointer",
            },
          })}
          onClick={onSelect}
        >
          <Stack justify="space-around" align="center">
            <HomeEditIcon />
            <Text>An-/Umbau</Text>
          </Stack>
        </Card>
      </SimpleGrid>
    </>
  );
};

export default FinancingTypeSelector;
