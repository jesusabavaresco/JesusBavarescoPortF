import React, { useEffect } from "react";
import { Avatar, Button, Grid, Stack, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme.jsx";
import { useTheme } from './ThemeContext';
// import Typed from "typed.js";
import { useRef } from "react";
import chucho from "../assets/chucho.jpeg";
import Spinn from "./SpinnerText.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const FirstView = ({ showMenu }) => {
  const { themeChange, lightMode } = useTheme();
  const one = useRef(null);
  const two = useRef(null);
  const three = useRef(null);
  const freeLance = useRef(null);
  const iPhoto = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      iPhoto.current,
      {
        x: -550,
      },
      {
        delay: 2,
        duration: 2,
        x: '-20%',
      }
    );
    gsap.fromTo(
      three.current,
      {
        x: "-130%",
      },
      {
        delay: 2,
        duration: 2,
        x: '-20%',
      }
    );
    gsap.to(freeLance.current, {
      scrollTrigger: {
        trigger: freeLance.current,
        // markers: true,
        start: "-80 50%",
        end: "-20 50%",
        scrub: 2,
      },
      duration: 2,
      text: {
        revealDelay: 1,
        value: "Available For Freelance. Work From JAN' 24",
        ease: "power3",
      },
    });
    const firsTitle = one.current;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: firsTitle,
        // markers:true,
        start: "top",
        end: "+=900 100%",
        scrub: 2,
      },
    });
    tl.to(firsTitle, { x: "-30", duration: 2 });

    const secondTitle = two.current;
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: firsTitle,
        // markers:true,
        start: "top top",
        end: "900 100%",
        scrub: 2,
      },
    });
    tl2.to(secondTitle, { x: "200", duration: 1 });

    gsap.to(one.current, {
      delay: 3,
      text: {
        value: "Front",
        ease: "power3",
      },
    });
    gsap.to(two.current, {
      delay: 3.5,
      text: {
        value: "End",
        ease: "power3",
      },
    });

    // const typed = new Typed(one.current, {
    //   strings: ["Full", "Front"],
    //   typeSpeed: 50,
    //   showCursor: false,
    //   backSpeed: 50,
    //   backDelay: 1800,
    // });
    // const typeds = new Typed(two.current, {
    //   strings: ["Stack", "end"],
    //   typeSpeed: 50,
    //   showCursor: false,
    //   startDelay: 700,
    //   backSpeed: 50,
    //   backDelay: 700,
    // });

    // return () => {
    //   typed.destroy();
    //   typeds.destroy();
    // };
  }, []);

  const hoverStyles = {
    ":hover": {
      color: lightMode ? '#072E2D' : "#eafe9b",
      cursor: "pointer",
    },
  };

  return (
    <Grid container spacing={1} p={5}>
      <ThemeProvider theme={theme}>
        <Grid
          item
          xs={12}
          md={5}
          lg={5}
          xl={5}
          display={showMenu ? "none" : "flex"}
        >
          <Stack display='flex'>
          <Typography
            ref={one}
            color={themeChange.palette.text.primary}
            fontSize={85}
            textAlign={'end'}
            textTransform={"uppercase"}
            sx={{
              ...hoverStyles,
              display: {
                xs: "block",
                sm: "block",
                md: "none",
                lg: "none",
                xl: "none",
              },
            }}
            >
            Full
          </Typography>
          </Stack>
          <Typography
            ref={one}
            fontSize={135}
            textTransform={"uppercase"}
            sx={{
              ...hoverStyles,
              color: themeChange.palette.text.primary ,
              display: {
                xs: "none",
                sm: "none",
                md: "block",
                lg: "block",
                xl: "block",
              },
            }}
          >
            Full
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          lg={7}
          xl={7}
          display={showMenu ? "none" : "flex"}
        >
          <Typography
            ref={two}
            color={themeChange.palette.text.primary}
            fontSize={75}
            textTransform={"uppercase"}
            sx={{
              ...hoverStyles,
              display: {
                xs: "block",
                sm: "block",
                md: "none",
                lg: "none",
                xl: "none",
              },
            }}
          >
            Stack
          </Typography>
          <Typography
            ref={two}
            color={themeChange.palette.text.primary}
            fontSize={135}
            textTransform={"uppercase"}
            sx={{
              ...hoverStyles,
              display: {
                xs: "none",
                sm: "none",
                md: "block",
                lg: "block",
                xl: "block",
              },
            }}
          >
            Stack
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Stack direction="row" spacing={20}>
            <Typography
              ref={three}
              color={themeChange.palette.text.third}
              fontSize={50}
              textTransform={"uppercase"}
              margin={0}
              sx={{
                display: {
                  xs: "block",
                  sm: "block",
                  md: "none",
                  lg: "none",
                  xl: "none",
                  showMenu: "none",
                },
              }}
            >
              developer
            </Typography>
            <Typography
              ref={three}
              color={themeChange.palette.text.third}
              fontSize={125}
              textTransform={"uppercase"}
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: showMenu ? "none" : "block",
                  lg: showMenu ? "none" : "block",
                  xl: showMenu ? "none" : "block",
                },
              }}
            >
              developer
            </Typography>
            <Grid item xs={12}>
              <Avatar
                ref={iPhoto}
                variant="square"
                display={showMenu && "none"}
                sx={{
                  display: {
                    xs: "none",
                    sm: "none",
                    md: showMenu ? "none" : "block",
                    lg: showMenu ? "none" : "block",
                    xl: showMenu ? "none" : "block",
                  },
                  width: "230px",
                  height: "230px",
                  opacity: "0.5",
                  filter: "grayscale(80%)",
                }}
                alt="Jesus Bavaresco"
                src={chucho}
              />
            </Grid>
          </Stack>
        </Grid>
      </ThemeProvider>
      <Grid
        item
        xs={12}
        height={100}
        display="flex"
        alignItems="flex-start"
        flexDirection={"column"}
        mt={8}
        >
        {/* <Typography ref={freeLance} color={"#fff"}>101001100110011001101010101001100101011001</Typography> */}
        <Typography ref={freeLance} color={themeChange.palette.text.secondary}>
          I would love to work with you!
        </Typography>
        <a href="mailto:jesusbavaresco@gmail.com">
          <Button
            size="small"
            variant="text"
            sx={{
              color: themeChange.palette.text.secondary,
              marginLeft: "-7px",
              display: showMenu === true && "none",
            }}
            >
            Let's talk
          </Button>
        </a>
        <Grid item xs={12} display={showMenu && "none"}>
          <Spinn text={"Jesus Bavaresco. "} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FirstView;
