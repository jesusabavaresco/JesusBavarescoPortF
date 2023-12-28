import { useEffect } from "react";
import { Grid, Stack, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme.jsx";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const About = () => {
  const aboutRef = useRef(null);
  useEffect(() => {
    gsap.to(aboutRef.current, {
      scrollTrigger: {
        trigger: aboutRef.current,
        // markers: true,
        start: "-250 50%",
        end: "0 20%",
        scrub: 2,
      },
      duration: 2,
      text: {
        value:
          "I am a passionate full-stack developer with a focus on front-end. My approach extends beyond the code; I aim to design captivating digital experiences. With a mindset of continuous improvement, I am prepared to tackle challenges in innovative projects. My versatility with various technologies keeps me updated in the IT world. I am enthusiastic about opportunities that allow me to apply and expand my skills.",
        ease: "power3",
      },
    });
    const handleScroll = () => {
      if (aboutRef.current) {
        const scrollPosition = window.scrollY;
        const color = scrollPosition > 700 ? "#d1d5db" : "#3b3a3a";

        aboutRef.current.style.color = color;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Grid container p={5} pt={-10}>
      <Grid>
        <ThemeProvider theme={theme}>

        <Typography fontSize={30} color={"#d1d5db"} display={{
          xs:'block',
          sm:'block',
          md:'none',
          lg:'none',
          xl:'none'
        }}>
          About me
        </Typography>
            <Typography fontSize={50} color={"#d1d5db"} display={{
          xs:'none',
          sm:'none',
          md:'block',
          lg:'block',
          xl:'block'
        }}>
              About me
            </Typography>
        </ThemeProvider>

        <Typography
          ref={aboutRef}
          fontSize={20}
          color={"#d1d5db"}
          width={{
            xs:'100%',
            sm:'100%',
            md:'70%',
            lg:'70&',
            xl:'70%',
          }}
        ></Typography>
      </Grid>
    </Grid>
  );
};

export default About;
