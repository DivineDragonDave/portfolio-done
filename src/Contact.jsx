import React from "react";
import { Box, Typography, List, ListItem, Link, Avatar } from "@mui/material";
import { getImageUrl } from "./utils";

const Contact = () => {
  return (
    <Box
      component="footer"
      id="contact"
      sx={{
        width: "100%",
        position: "relative",
        left: 0,
        backgroundColor: "secondary.main",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-around",
        alignItems: "center",
        padding: "58px",
        gap: { xs: "23px", md: "10px" },
        color: "text.primary",
        height: { xs: "500px", md: "280px" },
        boxSizing: "border-box",
        marginTop: "auto",
      }}
    >
      <Box
        sx={{
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "50px", md: "80px" },
            fontWeight: 700,
            letterSpacing: "4px",
          }}
        >
          Contact
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "18px", md: "40px" },
            fontWeight: 400,
            letterSpacing: "2px",
          }}
        >
          Feel free to reach out!
        </Typography>
      </Box>

      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
          gap: "26px",
          listStyle: "none",
          maxWidth: { xs: "300px" },
          padding: 0,
        }}
      >
        <ListItem
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "25px",
            padding: 0,
          }}
        >
          <Avatar src={getImageUrl("contact/emailIcon.png")} alt="email icon" />
          <Link
            href="mailto:david.ribbfors@gmail.com"
            target="_blank"
            underline="hover"
            sx={{
              fontSize: { xs: "18px", md: "25px" },
              fontWeight: 400,
              letterSpacing: "1.5px",
              color: "inherit",
            }}
          >
            david.ribbfors@gmail.com
          </Link>
        </ListItem>
        <ListItem
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "25px",
            padding: 0,
          }}
        >
          <Avatar
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="linkedin icon"
          />
          <Link
            href="https://www.linkedin.com/in/david-ribbfors/"
            target="_blank"
            underline="hover"
            sx={{
              fontSize: { xs: "18px", md: "25px" },
              fontWeight: 400,
              letterSpacing: "1.5px",
              color: "inherit",
            }}
          >
            Linkedin
          </Link>
        </ListItem>
        <ListItem
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "25px",
            padding: 0,
          }}
        >
          <Avatar
            src={getImageUrl("contact/githubIcon.png")}
            alt="github icon"
          />
          <Link
            href="https://github.com/DivineDragonDave"
            target="_blank"
            underline="hover"
            sx={{
              fontSize: { xs: "18px", md: "25px" },
              fontWeight: 400,
              letterSpacing: "1.5px",
              color: "inherit",
            }}
          >
            Github
          </Link>
        </ListItem>
      </List>
    </Box>
  );
};

export default Contact;
