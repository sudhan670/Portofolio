import React from "react";
//import { Link } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
const Profile = () => {
  const [isMedia] = useMediaQuery("(min-width:300px)");
  return (
    <Stack>
      <Text
        fontSize={"3xl"}
        fontWeight={"semibold"}
        bgGradient="linear(to-r,cyan.400,blue.500,purple.600)"
        bgClip={"text"}
      >
        PROJECTS
      </Text>
      <Flex
        direction={isMedia ? "row" : "column"}
        w="100%"
        maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
      >
        <Flex
          direction={isMedia ? "row" : "column"}
          w="100%"
          maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
        >
          <Card maxW="sm" ml={isMedia ? 6 : 0}>
            <Image
              src="https://static.toiimg.com/photo/89078867.cms"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
              w="350px"
              h="35vh"
            />
            <CardHeader>
              <Heading size="md"> Coffee Bar App</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                I Created front-end for the coffee shop app using Javascript.
              </Text>
            </CardBody>
            <CardFooter>
              <Stack spacing={isMedia ? 10 : 20} direction={"row"}>
                <Button
                  colorScheme="blue"
                  onClick={() =>
                    window.open("https://musical-genie-de36db.netlify.app/")
                  }
                >
                  Site
                </Button>
                <Button
                  colorScheme="blue"
                  onClick={() =>
                    window.open("https://github.com/sudhan670/CoffeeApp")
                  }
                >
                  Github
                </Button>
              </Stack>
            </CardFooter>
          </Card>
          <Card maxW="sm" ml={isMedia ? 6 : 0}>
            <Image
              src="https://res.cloudinary.com/dn7pg70et/image/upload/v1690129247/fashion_p48bu3.jpg"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
              w="350px"
              h="35vh"
            />
            <CardHeader>
              <Heading size="md">VGD fashions</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                The VGD fashions was the clothing brand created using ReactJs.
              </Text>
            </CardBody>
            <CardFooter>
              <Stack spacing={isMedia ? 10 : 20} direction={"row"}>
                <Button
                  colorScheme="blue"
                  onClick={() => window.open("https://proj-lac.vercel.app")}
                >
                  Site
                </Button>
                <Button
                  colorScheme="blue"
                  onClick={() =>
                    window.open("https://github.com/sudhan670/proj")
                  }
                >
                  Github
                </Button>
              </Stack>
            </CardFooter>
          </Card>
        </Flex>
      </Flex>
    </Stack>
  );
};

export default Profile;
