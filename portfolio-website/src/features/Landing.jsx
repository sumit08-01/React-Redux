import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import humanImg from "@/assets/images/human.png";
import { Badge } from "../components/Badge";
// import { useTranslation } from "react-i18next";
const SKILLS = [
  { lable: "React" },
  { lable: "Redux" },
  { lable: "java" },
  { lable: "springBoot" },
];

export const Landing = () => {
  // const { t } = useTranslation("home");
  const leftSection = (
    <Box>
      <Heading
        fontSize={{ base: "2xl", md: "4xl", xl: "7xl" }} // screen small fz=2xl, mid=4xl, large=7xl
        color="secondary"
        whiteSpace="pre-line"
      >
        {/* {t("greetings")} */}
        Hi, my name is <br />
        Sumit
        <Text as="span" color="primary.dark">
          .
        </Text>
      </Heading>
      <Text fontSize="lg" color="secondary">
        I am a{" "}
        <Text as="span" fontWeight="bold">
          {/*  if you add only Text it behave like a div, and when you add as="span" now it a span */}
          fullStack web developer
        </Text>
        <br /> located in Noida/India
      </Text>
      <Wrap mt={14}>
        {/* if you use 15, it's not a valid  */}{" "}
        {/* Wrap by default make the content in row  and responsev*/}
        {SKILLS.map((skill) => (
          <WrapItem key={skill.lable}>
            <Badge bg={skill.lable}>{skill.lable}</Badge>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
  const badgeExperience = (
    <Badge bg="primary.light" borderRadius={7} p={3} textAlign="center">
      <Text fontSize="xl">{new Date().getFullYear() - 2022}</Text>
      <Text>years of experience</Text>
    </Badge>
  );
  const rightSection = (
    <Box mt={{ base: 10, md: 0 }}>
      <Flex justify="flex-end">{badgeExperience}</Flex>
      <Image src={humanImg} width={400} />
    </Box>
  );
  return (
    <Flex
      direction={{ base: "column", md: "row" }} // when screen is small then the comonent in coloum and margind top is 50 when it is large the row and mt 150
      justify="space-evenly"
      mt={{ base: 50, md: 150 }}
    >
      {leftSection}
      {rightSection}
    </Flex>
  );
};
