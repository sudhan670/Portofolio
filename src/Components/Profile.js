import React from "react";
import { useMediaQuery } from "@chakra-ui/react";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/icon";
import { DiReact, DiNodejs, DiJava, DiPython } from "react-icons/di";
const Profile = () => {
  const [isMedia] = useMediaQuery("(min-width:300px)");
  return (
    <Flex
      direction={isMedia ? "row" : "column"}
      w="100%"
      maxWidth={{ base: "90vh", md: "90vh", lg: "90vh", xl: "90vh" }}
      spacing={24}
    >
      <Box alignSelf="center" px="6" py="15" spacing={6}>
        <Text fontWeight="semibold" fontSize={"2xl"}>
          As A Fresher,I learned the Basics of Data structures,Computer
          Fundamentals, OOPS as of My Knowledge to be an
        </Text>
        <Text fontWeight="semibold" color="cyan.400" fontSize={"2xl"}>
          Computer Science Engineer and an Web Developer
        </Text>
        <Flex direction={isMedia ? "row" : "column"} mt={4} justify={"center"}>
          <Flex
            rounded="xl"
            direction="column"
            mt="4"
            bg="blue.400"
            h="30vh"
            w="30vh"
            justify={"flex-end"}
          >
            <Icon color="white" p="4" w="24" h="24" as={DiReact} />
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
              React
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt="4"
            bg="green.400"
            h="30vh"
            w="30vh"
            justify={"flex-end"}
            ml={isMedia ? 4 : 0}
          >
            <Icon color="white" p="4" w="24" h="24" as={DiNodejs} />
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
              Node.js
            </Text>
          </Flex>
        </Flex>
        <Flex direction={isMedia ? "row" : "column"} mt={8} justify={"center"}>
          <Flex
            rounded="xl"
            direction="column"
            mt="4"
            bg="gray.400"
            h="30vh"
            w="30vh"
            justify={"flex-end"}
          >
            <Icon color="white" p="4" w="24" h="24" as={DiJava} />
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
              Java
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt="4"
            bg="yellow.400"
            h="30vh"
            w="30vh"
            justify={"flex-end"}
            ml={isMedia ? 4 : 0}
          >
            <Icon color="white" p="4" w="24" h="24" as={DiPython} />
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
              Python
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
    /* <Box alignSelf={"center"} px="12" py="16">
        <Heading fontWeight={"semibold"} color="cyan.500" size="4xl">
          Fresher
        </Heading>
        <Text fontSize="2xl" color="gray.400">
          Tech Stacks
        </Text>
      </Box> */
  );
};

export default Profile;
