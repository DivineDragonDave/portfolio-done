import DrawerAppBar from "./DrawerAppBar";
import Hero from "./Hero";
import "./App.css";
import { Box, Container } from "@mui/material";
import Experience from "./Experiens";
import Projects from "./projects/Projects";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <Box>
      <DrawerAppBar />
      <Container>
        <Hero />
        <Experience />
        <Projects />
        <About />
      </Container>
      <Contact />
    </Box>
  );
}

export default App;
