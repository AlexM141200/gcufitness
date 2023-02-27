import { Text, Spacer } from "@nextui-org/react";
import { Box } from "./Box.js";

export const Content = () => (
  <Box css={{ px: "$12", mt: "$8", "@xsMax": { px: "$10" } }}>
    <Text size="$lg" color="white">
      Code explaining why to get into fitness
    </Text>
    <Spacer y={1} />
  </Box>
);
