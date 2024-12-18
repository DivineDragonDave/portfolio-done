import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { getImageUrl } from "./utils";

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        alignItems: "center",
        textAlign: "center",
        height: { xs: "calc(100%)", md: "100vh" },
        width: "100%",
        marginTop: "64px",
        padding: 1,
        overflowX: "hidden",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            mb: 2,
            fontSize: { xs: "25px", sm: "35px", md: "40px" },
          }}
        >
          I'm a web developer
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mb: 4,
            width: { xs: "280px", md: "440px" },
            fontSize: { xs: "16px", sm: "18px", md: "22px" },
          }}
        >
          Hello, my name is David. I have recently completed my training as a
          Web Developer. I hope that my portfolio, showcasing the projects I
          have created, demonstrates my skills and potential as a valuable
          addition to your team. I look forward to the possibility of working
          with you.
        </Typography>
        <Button
          sx={{ width: "180px", height: "60px", mb: 8 }}
          href="#projects"
          variant="contained"
        >
          projects
        </Button>
      </Box>

      <Box
        component="img"
        src={getImageUrl("hero/hero1.png")}
        alt="Hero"
        sx={{
          maxWidth: { xs: "700px", lg: "1000px" },
          width: "100%",
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: { xs: "40vw", md: "500px" },
          height: { xs: "40vw", md: "500px" },
          minWidth: "350px",
          minHeight: "350px",
          top: "-128px",
          left: "-10vw",
          borderRadius: "100%",
          backgroundColor: "rgba(191, 141, 155, 0.8)",
          filter: "blur(100px)",
          zIndex: -1,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: { xs: "50vw", md: "550px" },
          height: { xs: "50vw", md: "550px" },
          minWidth: "350px",
          minHeight: "350px",
          top: "388px",
          right: { xs: 0, md: "-12vw" },
          borderRadius: "100%",
          backgroundColor: "rgba(191, 141, 155, 0.8)",
          filter: "blur(100px)",
          zIndex: -1,
          overflowX: "hidden",
        }}
      />
    </Box>
  );
};

export default Hero;
