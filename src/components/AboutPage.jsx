import React, { useRef, useEffect } from "react";
import { Avatar, Grid, IconButton, Stack, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme.jsx";
import chch from "../assets/chucho.jpeg";
import cv from "../assets/Curriculum Jesus Bavaresco 2023.pdf";
import referenceCv from "../assets/cvImg.png";
import referenceHenry from "../assets/henryCert.png";
import referenceDevWebFull from "../assets/Certificado desarrollo web completo Udemy.png";
import referenceJavaScript from "../assets/Certificado JavaScript shurman.jpg";
import referenceReact from "../assets/Certificado react Udemy.jpg";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link, useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import Ribbon3 from "./Ribbon3.jsx";
import { useTheme } from "./ThemeContext.jsx";

const AboutPage = () => {
  const { themeChange } = useTheme();
  const navigate = useNavigate();
  const movePage = useRef(null);
  const vemoPage = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      movePage.current,
      {
        x: "100%",
      },
      {
        delay: 0.2,
        duration: 1,
        x: "0%",
        ease: "elastic",
      }
    );
  }, []);

  const hoverImg = {
    opacity: "0.5",
    filter: "grayscale(100%)",
    ":hover": {
      opacity: "1",
      filter: "grayscale(0)",
    },
  };
  const noShowAb = () => {
    gsap.to(movePage.current, {
      x: "-100%",
      duration: 0.8,
      ease: "elastic.inOut",
      onComplete: () => {
        navigate("/");
      },
    });
    gsap.to(vemoPage.current, {
      x: "0",
      duration: 0.5,
    });
  };

  return (
    <Grid ref={movePage} container spacing={2} m={0}>
      <Grid
        p={{
          xs: 6,
          sm: 6,
          md: 10,
          lg: 15,
          xl: 15,
        }}
      >
        <IconButton
          onClick={noShowAb}
          sx={{ position: "relative", marginTop:{
            xs:'-2rem',
            sm:'-2rem',
            md:'-3rem',
            lg:'-5rem',
            xl:'-5rem',
          }}}
        >
          <KeyboardBackspaceIcon
            sx={{ color: themeChange.palette.text.secondary, paddingBottom: "1rem" }}
          />
        </IconButton>
        <Avatar
          variant="square"
          sx={{...hoverImg,
            width: "230px",
            height: "230px",
            opacity: "0.5",
            filter: "grayscale(80%)",
          }}
          src={chch}
        />
        <ThemeProvider theme={theme}>
          <Typography fontSize={40} sx={{ color: themeChange.palette.text.primary }}>
            Hi,
          </Typography>
        </ThemeProvider>
        <Typography sx={{ color: themeChange.palette.text.four }}>
          I am Jesus Bavaresco, a full-stack developer with a focus on front-end
          development. I am highly competitive, constantly striving to learn
          something new each day, both in life and in programming. I possess
          skills that enable me to create functional, intuitive, and
          aesthetically pleasing websites and/or web applications.
        </Typography>

        <ThemeProvider theme={theme}>
          <Typography fontSize={40} sx={{ color: themeChange.palette.text.primary }}>
            Tools
          </Typography>
        </ThemeProvider>
        <Typography sx={{ color: themeChange.palette.text.four }} pb={2}>
          Here I show you some of the tools that I have learned and used in real
          projects. I am learning new ones and reinforcing the old ones, but I'm
          not sure if that can be included, right?
        </Typography>
        <Grid container spacing={3}>
          <Grid sx={hoverImg} item xs={6} md={6} lg={3} xl={3}>
            <Stack direction="row" justifyContent="start">
              <Avatar
                sx={{ width: "20px", height: "20px", marginRight: "1.5rem" }}
                src="https://img.icons8.com/color/48/javascript--v1.png"
                alt=""
              />
              <Typography sx={{ color:themeChange.palette.text.four }}>JavaScript</Typography>
            </Stack>
          </Grid>
          <Grid sx={hoverImg} item xs={6} md={6} lg={3} xl={3}>
            <Stack direction="row" justifyContent="start">
              <Avatar
                sx={{ width: "20px", height: "20px", marginRight: "1.5rem" }}
                src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
                alt=""
              />
              <Typography sx={{ color:themeChange.palette.text.four }}>React JS</Typography>
            </Stack>
          </Grid>
          <Grid sx={hoverImg} item xs={6} md={6} lg={3} xl={3}>
            <Stack direction="row" justifyContent="start">
              <Avatar
                sx={{ width: "20px", height: "20px", marginRight: "1.5rem" }}
                src="https://img.icons8.com/color/48/redux.png"
                alt=""
              />
              <Typography sx={{ color:themeChange.palette.text.four }}>Redux</Typography>
            </Stack>
          </Grid>
          <Grid sx={hoverImg} item xs={6} md={6} lg={3} xl={3}>
            <Stack direction="row" justifyContent="start">
              <Avatar
                sx={{ width: "20px", height: "20px", marginRight: "1.5rem" }}
                src="https://img.icons8.com/fluency/48/node-js.png"
                alt=""
              />
              <Typography sx={{ color:themeChange.palette.text.four }}>Node JS</Typography>
            </Stack>
          </Grid>
          <Grid sx={hoverImg} item xs={6} md={6} lg={3} xl={3}>
            <Stack direction="row" justifyContent="start">
              <Stack
                sx={{
                  backgroundColor: "#1e1e1e",
                  width: "8%",
                  marginRight: "20px",
                  borderRadius: "50%",
                }}
              >
                <Avatar
                  sx={{
                    width: "20px",
                    height: "20px",
                    marginRight: "1.5rem",
                  }}
                  src="https://img.icons8.com/ios/50/express-js.png"
                  alt=""
                />
              </Stack>
              <Typography sx={{ color:themeChange.palette.text.four }}>Express</Typography>
            </Stack>
          </Grid>
          <Grid sx={hoverImg} item xs={6} md={6} lg={3} xl={3}>
            <Stack direction="row" justifyContent="start">
              <Avatar
                sx={{ width: "20px", height: "20px", marginRight: "1.5rem" }}
                src="https://img.icons8.com/color/48/postgreesql.png"
                alt=""
              />
              <Typography sx={{ color:themeChange.palette.text.four }}>Postgress</Typography>
            </Stack>
          </Grid>
          <Grid sx={hoverImg} item xs={6} md={6} lg={3} xl={3}>
            <Stack direction="row" justifyContent="start">
              <Avatar
                sx={{ width: "20px", height: "20px", marginRight: "1.5rem" }}
                src="data:image/png;base64,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"
                alt=""
              />
              <Typography sx={{ color:themeChange.palette.text.four }}>Sequelize</Typography>
            </Stack>
          </Grid>
          <Grid sx={hoverImg} item xs={6} md={6} lg={3} xl={3}>
            <Stack direction="row" justifyContent="start">
              <Avatar
                sx={{ width: "20px", height: "20px", marginRight: "1.5rem" }}
                src="https://img.icons8.com/color/48/git.png"
                alt=""
              />
              <Typography sx={{ color:themeChange.palette.text.four }}>Git</Typography>
            </Stack>
          </Grid>
          <Grid sx={hoverImg} item xs={6} md={6} lg={3} xl={3}>
            <Stack direction="row" justifyContent="start">
              <Stack
                sx={{
                  backgroundColor: "#1e1e1e",
                  width: "8%",
                  marginRight: "20px",
                  borderRadius: "50%",
                }}
              >
                <Avatar
                  sx={{
                    width: "20px",
                    height: "20px",
                    marginRight: "1.5rem",
                  }}
                  src="https://img.icons8.com/windows/32/github.png"
                  alt=""
                />
              </Stack>
              <Typography sx={{ color:themeChange.palette.text.four }}>GitHub</Typography>
            </Stack>
          </Grid>
          <Grid sx={hoverImg} item xs={6} md={6} lg={3} xl={3}>
            <Stack direction="row" justifyContent="start">
              <Avatar
                sx={{ width: "20px", height: "20px", marginRight: "1.5rem" }}
                src="data:image/png;base64,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"
                alt=""
              />
              <Typography sx={{ color:themeChange.palette.text.four }}>Material UI</Typography>
            </Stack>
          </Grid>
        </Grid>
        <ThemeProvider theme={theme}>
          <Typography fontSize={40} sx={{ color: themeChange.palette.text.primary }}>
            Certificates & CV
          </Typography>
        </ThemeProvider>
        <Typography sx={{ color: themeChange.palette.text.four }}>
          Since 2020, I have been self-training and developing as a Full Stack
          professional. I have completed approximately 8 independent courses, a
          bootcamp, and engaged in numerous practice projects. I consistently
          pursue learning opportunities to discover valuable tools and establish
          a strong foundation in the IT field. Here are some of the
          certificates:
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4} xl={3}>
            <Stack p={3} alignItems="center">
              <a href={cv} style={{ textDecoration: "none" }}>
                <img width="150px" height="150px" src={referenceCv} alt="" />
                <Typography sx={{ color: themeChange.palette.text.four }}>Spanish CV</Typography>
              </a>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6} lg={4} xl={3}>
            <Stack p={3} alignItems="center">
              <a
                href="https://certificates.soyhenry.com/new-cert?id=9a2398792a4643c2792ee94d830cddafe5d54ee3c42d588825611738db15977e"
                style={{ textDecoration: "none" }}
              >
                <img width="250px" height="150px" src={referenceHenry} alt="" />
                <Typography sx={{ color: themeChange.palette.text.four }}>Henry BootCamp</Typography>
              </a>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6} lg={4} xl={3}>
            <Stack p={3} alignItems="center">
              <a
                href="https://www.ude.my/UC-cda5e139-6b1e-4ddb-9376-34a41d10edb1"
                style={{ textDecoration: "none" }}
              >
                <img width="250px" height="150px" src={referenceReact} alt="" />
                <Typography sx={{ color: themeChange.palette.text.four }}>React</Typography>
              </a>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={6}>
            <Stack p={3} alignItems="center">
              <a
                href="https://ude.my/UC-518684bf-62e1-4d15-88c9-accf70157f1f"
                style={{ textDecoration: "none" }}
              >
                <img
                  width="250px"
                  height="150px"
                  src={referenceJavaScript}
                  alt=""
                />
                <Typography sx={{ color: themeChange.palette.text.four }}>JavaScript</Typography>
              </a>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={6}>
            <Stack p={3} alignItems="center">
              <a
                href="https://ude.my/UC-22f4f127-ff1c-4be9-8624-19e4d761f716"
                style={{ textDecoration: "none" }}
              >
                <img
                  width="250px"
                  height="150px"
                  src={referenceDevWebFull}
                  alt=""
                />
                <Typography sx={{ color: themeChange.palette.text.four }}>Desarrollo web</Typography>
              </a>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      <Ribbon3 />
      <Stack
        display="flex"
        justifyContent="center"
        textAlign="center"
        width="100%"
        pb={5}
        pt={-5}
        pr={2}
        pl={1}
      >
        <Typography sx={{ color: themeChange.palette.text.four }}>
          If you're here, it's because something about this has caught your
          attention. Thank you in advance for your interest.
        </Typography>
        <Typography sx={{ color: themeChange.palette.text.four }}>
          I really hope to see u soon
        </Typography>
      </Stack>
    </Grid>
  );
};

export default AboutPage;
