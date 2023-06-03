import { Box, Flex, Heading, Wrap, WrapItem, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ImageSlider } from "../components/ImageSlider/ImageSlider";
import { Badge } from "../components/Badge";
import { ProjectsAPI } from "../api/projects";
// import { useTranslation } from "react-i18next";

export const LatestProjects = () => {
  const [projects, setProjects] = useState();

  useEffect(() => {
    (async () => {
      const projectsResponse = await ProjectsAPI.fetchAll();
      setProjects(projectsResponse);
    })();
  }, []);

  // const { t, i18n } = useTranslation("home");

  const renderProject = ({ images, title, id, description, technologies }) => {
    return (
      <WrapItem key={id} flexDirection="column">
        <ImageSlider imageList={images.map((img) => img.downloadURL)} />
        <Heading size="md" mt={3} color="secondary">
          <Box
            display={"inline-block"}
            bg="primary.dark"
            w={25}
            h={1}
            mr={3}
            verticalAlign="middle"
          />
          {title}
        </Heading>
        <Text>{description}</Text>
        <Wrap mt={2} maxW={350}>
          {technologies.map((tech) => (
            <WrapItem key={tech}>
              <Badge bg={tech}>{tech}</Badge>
            </WrapItem>
          ))}
        </Wrap>
      </WrapItem>
    );
  };
  return (
    <Flex direction="column" w="100%">
      {/* <Heading>{t("latestProjects")}</Heading> */}
      <Heading>Latest Projects</Heading>
      <Wrap mt={10} spacing={16}>
        {projects?.map(renderProject)}
      </Wrap>
    </Flex>
  );
};

// const FAKE_PROJECTS = [
//   {
//     id: 1,
//     title: "Project 1",
//     description: "A project about this",
//     technologies: ["React", "ES6", "HTML", "CSS"],
//     images: [
//       "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
//       "https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
//     ],
//   },
//   {
//     id: 2,
//     title: "Project 2",
//     description: "A project about that",
//     technologies: ["React", "Redux", "HTML", "CSS", "ES6"],
//     images: [
//       "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
//       "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
//     ],
//   },
//   {
//     id: 3,
//     title: "Project 3",
//     description: "A project about things",
//     technologies: [
//       "React",
//       "Redux",
//       "HTML",
//       "CSS",
//       "ES6",
//       "Vercel",
//       "Bootstrap",
//     ],
//     images: [
//       "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
//     ],
//   },
// ];
