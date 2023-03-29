import { Textarea, Title } from "@mantine/core";
import { FC } from "react";

export interface CommentFormProps {}
const CommentForm: FC<CommentFormProps> = () => {
  return (
    <>
      <Title order={2} mb={16}>
        Freies Eingabe- und Bemerkungsfeld
      </Title>
      <Textarea
        aria-label="Freies Eingabe- und Bemerkungsfeld"
        placeholder="Bitte hier Ihre Anmerkungen ggbf. dokumentieren"
        minRows={10}
      />
    </>
  );
};

export default CommentForm;
