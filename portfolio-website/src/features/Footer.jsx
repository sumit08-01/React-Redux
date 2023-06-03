import { HStack, Link } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";

export const Footer = () => {
  return (
    <HStack justify={"center"} h={130} bg={"secondary"}>
      <Link href="https://twitter.com/home" isExternal>
        <Icon as={BsTwitter} w={8} h={8} color="#03A9F4" />
      </Link>
      <Link href="https://www.linkedin.com/in/sumit08/" isExternal>
        <Icon
          as={BsLinkedin}
          w={8}
          h={8}
          color="#0D73C6"
          bg="white"
          borderRadius={5}
        />
      </Link>
      <Link href="https://github.com/sumit08-01?tab=repositories" isExternal>
        <Icon as={BsGithub} w={8} h={8} color="white" />
      </Link>
    </HStack>
  );
};
