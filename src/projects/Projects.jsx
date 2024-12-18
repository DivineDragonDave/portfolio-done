import React, { useRef } from "react";
import { Typography, Box, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import projects from "../data/projects.json";
import ProjectCard from "./ProjectsCard";

const Projects = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({
        left: -960,
        behavior: "smooth",
      });

      if (container.scrollLeft === 0) {
        container.scrollLeft = container.scrollWidth;
      }
    }
  };

  const scrollRight = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({
        left: 960,
        behavior: "smooth",
      });

      if (
        container.scrollLeft + container.offsetWidth >=
        container.scrollWidth
      ) {
        container.scrollLeft = 0;
      }
    }
  };

  return (
    <Box id="projects" sx={{ mb: 20, color: "text.primary" }}>
      <Typography
        variant="h4"
        fontWeight="700"
        sx={{
          textAlign: "center",
          letterSpacing: "1.75px",
          textTransform: "uppercase",
          marginBottom: 2,
        }}
      >
        Projects
      </Typography>
      <Box
        sx={{
          position: "relative",
        }}
      >
        <IconButton
          onClick={scrollLeft}
          sx={{
            position: "absolute",
            top: "50%",
            left: "-30px",
            transform: "translateY(-50%)",
            backgroundColor: "#855ca4",
            display: { xs: "none", lg: "flex" },
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            zIndex: "1",
          }}
        >
          <ArrowBack />
        </IconButton>

        <Box
          ref={scrollContainerRef}
          sx={{
            display: "flex",
            overflowX: { xs: "auto", lg: "hidden" },
            gap: 3,
            padding: 2,
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {projects.map((project, id) => (
            <Box
              key={id}
              sx={{
                flex: "0 0 auto",
                maxWidth: 300,
              }}
            >
              <ProjectCard project={project} />
            </Box>
          ))}
        </Box>

        <IconButton
          onClick={scrollRight}
          sx={{
            position: "absolute",
            top: "50%",
            right: "-40px",
            transform: "translateY(-50%)",
            backgroundColor: "#855ca4",
            display: { xs: "none", lg: "flex" },
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            zIndex: "1",
          }}
        >
          <ArrowForward />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Projects;
