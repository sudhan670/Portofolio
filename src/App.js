import React from "react";
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { VStack, Flex, Heading, Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaLinkedinIn, FaGithub } from "react-icons/fa";
import Header from "./Components/Header";
import Social from "./Components/Social";
import Profile from "./Components/Profile";
import Projects from "./Components/Projects";
import Contact from "./Components/Message";
import Footer from "./Components/Footer";
const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const isDark = colorMode === "dark";
  return (
    <VStack p="7" spacing={24}>
      <Flex w="100%">
        <Heading
          ml="8"
          size="md"
          fontWeight="semibold"
          color="cyan.400"
          fontSize={30}
        >
          Portfolio.....
        </Heading>
        <Spacer />
        <IconButton
          ml={"2"}
          icon={<FaLinkedinIn />}
          isRound="true"
          onClick={() => window.open("https://www.linkedin.com/in/sudhaned06/")}
        />
        <IconButton
          ml={"2"}
          icon={<FaGithub />}
          isRound="true"
          onClick={() => window.open("https://github.com/sudhan670")}
        />
        <IconButton
          ml={"8"}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        />
      </Flex>
      <Header />
      <Social />
      <Profile />
      <Projects />
      <Contact />
      <Footer />
    </VStack>
  );
};

export default App;
