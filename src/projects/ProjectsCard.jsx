import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Box,
  Button,
} from "@mui/material";

const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <Card
      sx={{
        mb: "10px",
        height: "560px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px",
        background: "linear-gradient(180deg, #f6eff3 0%, #d1adc2 100%)",
        boxShadow: "0 16px 14px 0 #04152d",
        maxWidth: 300,
        padding: 2,
        position: "relative",
      }}
    >
      <CardMedia
        component="img"
        image={imageSrc}
        alt={title}
        sx={{ borderRadius: "15px", marginBottom: 2 }}
      />
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5" fontWeight="700" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 1, fontSize: 18 }}>
          {description}
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 120px)",
            gap: 1,
            marginTop: 2,
          }}
        >
          {skills.map((skill, id) => (
            <Chip
              label={skill}
              key={id}
              sx={{
                fontSize: 14,
                backgroundColor: "#333",
                color: "#fff",
                borderRadius: "20px",
                paddingX: 0,
                textAlign: "center",
              }}
            />
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "auto",
            position: "absolute",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            width: "90%",
          }}
        >
          <Button
            variant="contained"
            href={demo}
            target="_blank"
            sx={{
              textDecoration: "none",
              fontWeight: 600,
              borderRadius: "20px",
            }}
          >
            Demo
          </Button>
          <Button
            variant="contained"
            href={source}
            target="_blank"
            sx={{
              textDecoration: "none",
              fontWeight: 600,
              borderRadius: "20px",
            }}
          >
            Source
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
