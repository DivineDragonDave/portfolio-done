import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Modal,
  Button,
} from "@mui/material";
import { color, styled } from "@mui/system";
import { getImageUrl } from "./utils";

const StyledContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  borderRadius: "15px",
  padding: "75px",
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: "45px",
  fontWeight: 700,
  letterSpacing: "1.75px",
  textTransform: "uppercase",
}));

const AboutImage = styled("img")(({ theme }) => ({
  display: "block",
  cursor: "pointer",
}));

const StyledItem = styled(ListItem)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  borderRadius: "20px",
  listStyle: "none",
  padding: "20px",
  backgroundImage: "linear-gradient(90deg, #d1adb8 0%, #ad6c7f 100%)",
  backgroundSize: "0 100%",
  backgroundRepeat: "no-repeat",
  transition: "0.4s",
  "&:hover": {
    backgroundSize: "100% 100%",
  },
}));

const ReadMoreText = ({ text, maxLines = 3 }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <Typography
        sx={{
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          WebkitLineClamp: expanded ? "none" : maxLines,
          color: "black",
        }}
      >
        {text}
      </Typography>
      <Button
        onClick={() => setExpanded((prev) => !prev)}
        sx={{ fontSize: "16px", marginTop: "4px", textTransform: "none" }}
      >
        {expanded ? "show less" : "show more"}
      </Button>
    </div>
  );
};

const About = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <StyledContainer id="about" sx={{ mb: 20 }}>
      <StyledTitle
        sx={{
          textAlign: "center",
          mb: { xs: 3, md: "0" },
        }}
        variant="h2"
      >
        About
      </StyledTitle>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
        }}
      >
        <AboutImage
          src={getImageUrl("about/cert.png")}
          alt="a certification"
          onClick={handleOpen}
          sx={{
            mr: { xs: 0, md: "25px", lg: "35px" },
            display: "block",
            cursor: "pointer",
            width: { xs: "280px", md: "60%" },
          }}
        />

        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginTop: { xs: "29px", md: "0" },
            width: { xs: "290px", md: "380px" },
          }}
        >
          <StyledItem>
            <ListItemText
              primary={<Typography variant="h5">My story</Typography>}
              secondary={
                <ReadMoreText
                  text="I'm a 33-year-old programmer who recently completed an intensive year-long course in programming. This journey has sparked a deep passion for technology in all its forms, and I'm eager to step into a programming role where I can grow my skills and contribute to innovative projects.

                As a lifelong gamer, I have developed a strong appreciation for technology and its potential. While I'm not a fan of first-person shooters, I enjoy exploring a wide variety of game genres, which fuels my curiosity and creativity. 
                I have been happily married for five years, and we've been together for a total of twelve. We share our home with a beloved 5-year-old Keeshond, who is truly a part of our family.
                
                My personal experiences and dedication to continuous learning give me a unique perspective that I am excited to bring to my future role in the tech industry."
                />
              }
            />
          </StyledItem>

          <StyledItem>
            <ListItemText
              primary={<Typography variant="h5">Frontend Developer</Typography>}
              secondary={
                <ReadMoreText
                  text="Hi, I'm a frontend developer who enjoys building user-friendly and functional interfaces. My primary tool is React, which I use to create responsive and interactive web applications. I also have experience working with modern CSS frameworks like Tailwind CSS and libraries like Material-UI to design clean and accessible layouts.

                  I enjoy the challenge of turning ideas into visually appealing and practical solutions, focusing on clarity and usability. While I'm continuously learning and improving, my goal is always to write clean, maintainable code and to create interfaces that deliver a seamless experience for users. Exploring new tools and techniques is a part of my journey, and I'm excited to keep growing as a developer."
                />
              }
            />
          </StyledItem>
          <StyledItem>
            <ListItemText
              primary={<Typography variant="h5">Backend Developer</Typography>}
              secondary={
                <ReadMoreText text="Hi, I'm a backend developer with a foundational understanding of server-side technologies. I've been learning to work with Node.js and MongoDB to create simple APIs and manage data efficiently. I'm particularly interested in understanding how to structure databases, handle server logic, and ensure smooth communication between systems. While I'm still at the beginning of my backend journey, I'm eager to grow my skills and take on more challenging projects as I learn." />
              }
            />
          </StyledItem>
        </List>
      </Box>

      <Modal open={open} onClose={handleClose} aria-labelledby="image-modal">
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            outline: "none",
          }}
        >
          <img
            src={getImageUrl("about/cert.png")}
            alt="a certification enlarged"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </Box>
      </Modal>
    </StyledContainer>
  );
};

export default About;
