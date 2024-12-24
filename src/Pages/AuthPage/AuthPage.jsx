import { Container, Flex, VStack, Box, Image } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm";

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          {/* Lado Izquierdo */}
          <Box display={{ base: "none", md: "block" }}>
            <Image src="/auth.png" h={530} alt="Pet img" />
          </Box>

          {/*lado derecho */}
          <VStack spacing={4} align={"stretch"}>
            <AuthForm />
            <Flex gap={5} justifyContent={"center"}></Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
