import { Flex, Heading } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
export const Badge = ({ bg, children }) => {
  return (
    <Flex justify={"center"} alignItems={"center"}>
      <Heading
        w={130}
        textAlign="center"
        size={"sm"}
        bg={bg}
        color="white"
        borderRadius={3}
        px={3}
        py={3}
      >
        {children}
      </Heading>
    </Flex>
  );
};
