import React from "react";
import skills from "./data/skills.json";
import { getImageUrl } from "./utils";
import { Box, Typography, Grid, Avatar } from "@mui/material";

const Experience = () => {
  return (
    <Box
      id="experience"
      sx={{
        mb: 20,
        background: "#855ca4",
        padding: { xs: 2, md: 10 },
        borderRadius: 4,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: 25, sm: 38, md: 60 },
          fontWeight: 700,
          textTransform: "uppercase",
          textAlign: "center",
          letterSpacing: 1.75,
        }}
      >
        Experience
      </Typography>
      <Grid justifyContent="center" container spacing={4} mt={4}>
        {skills.map((skill, id) => (
          <Grid
            item
            key={id}
            sx={{
              textAlign: "center",
            }}
          >
            <Avatar
              src={getImageUrl(skill.imageSrc)}
              alt={skill.title}
              sx={{
                width: { xs: 80, md: 150 },
                height: { xs: 80, md: 150 },
                bgcolor: "#cda5bc",
                "& img": {
                  width: "70%",
                  height: "70%",
                  objectFit: "contain",
                },
              }}
            />
            <Typography
              variant="body1"
              sx={{ mt: 1, fontSize: { xs: 15, md: 25 }, fontWeight: 500 }}
            >
              {skill.title}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Experience;
