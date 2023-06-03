import { Box } from "@chakra-ui/react";
import { Badge } from "./components/Badge";
import { Header } from "./features/Header";
import { Landing } from "./features/Landing";
import { LatestProjects } from "./features/LatestProjects";
import { Footer } from "./features/Footer";

export const App = () => {
  return (
    <>
      <Box p={20}>
        <Header />
        <Landing />
        <Badge />
        <LatestProjects />
      </Box>
      <Footer />
    </>
  );
};
