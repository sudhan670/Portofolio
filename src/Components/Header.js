import React from "react";
import { Button } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Circle, Stack, Flex, Box, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";

const Header = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isMedia] = useMediaQuery("(min-width:600px)");
  const onButtonClick = () => {
    fetch("SUDHANED_20CSR211.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "SUDHANED_20CSR211.pdf";
        alink.click();
      });
    });
  };
  return (
    <Stack>
      {isMedia && (
        <Circle
          position={"absolute"}
          bg="blue.100"
          opacity={"0.1"}
          w="300px"
          h="300px"
          alignSelf={"flex-end"}
        />
      )}

      <Flex spacing="10" p={isMedia ? "32" : 0} alignSlef="flex-start">
        <Box mt={isMedia ? 0 : 12} alignSelf="flex-start">
          <Text fontSize={"4xl"} fontWeight={"semibold"}>
            Hi, I am
          </Text>
          <Text
            fontSize={"5xl"}
            fontWeight={"bold"}
            bgGradient="linear(to-r,cyan.400,blue.500,purple.600)"
            bgClip={"text"}
          >
            SUDHAN
          </Text>
          <Text color={isDark ? "gray.200" : "gray.900"} fontSize={"2xl"}>
            Aspiring Front-end React Developer with a
          </Text>
          <Text color={isDark ? "gray.200" : "gray.900"} fontSize={"2xl"}>
            position of developing different web applications.
          </Text>

          <Button mt="4" colorScheme="blue" onClick={onButtonClick}>
            Resume
          </Button>
        </Box>
        <Image
          mt={isMedia ? 0 : 12}
          alignSelf="center"
          borderRadius="full"
          backgroundColor={"transparent"}
          boxShadow={"md"}
          boxSize={"350px"}
          w="300px"
          h="300px"
          zIndex={1}
          src="https://res.cloudinary.com/dn7pg70et/image/upload/v1687680017/wh_gdqzr5.jpg"
        />
      </Flex>
    </Stack>
  );
};

export default Header;
