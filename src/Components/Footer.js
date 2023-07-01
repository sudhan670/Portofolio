import React from "react";
import { Text } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/layout";
const Footer = () => {
  return (
    <Stack>
      <Divider inlineSize={60} />
      <Text fontWeight={"semibold"} fontSize={"2xl"}>
        Copyrights@2023
      </Text>
      <Text fontStyle={"inherit"} justifySelf={25}>
        Designed by SUDHAN
      </Text>
    </Stack>
  );
};

export default Footer;
