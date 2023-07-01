import React from "react";
import { Icon } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/layout";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Social = () => {
  return (
    <HStack spacing={24}>
      <Icon as={FaFacebook} boxSize={50} />
      <Icon as={FaInstagram} boxSize={50} />
      <Icon as={FaTwitter} boxSize={50} />
    </HStack>
  );
};
export default Social;
