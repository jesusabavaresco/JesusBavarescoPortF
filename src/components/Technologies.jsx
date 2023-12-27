import { useRef, useEffect } from "react";
import { Avatar, Card, CardContent, CardMedia, Grid, Stack, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Ribbon from "./Ribbon.jsx";
import Ribbon2 from "./Ribbon2.jsx";
// import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(ScrollTrigger)


const Tech = () => {
  const techRef = useRef(null)
  useEffect(() => {
    const moveTech = techRef.current
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger: moveTech,
        // markers:true,
        start: '-300 200',
        end: 'bottom 30%',
        scrub: 2
      },
    });
    tl.fromTo(moveTech, {y:150}, {y:0, duration: 3})
}, []);
  
    const hoverS = {
      ":hover": {
        opacity: "0",
        cursor: "pointer",
      },
    };
  
  return (
    <Stack padding={5}>
    <ThemeProvider theme={theme}>
        <Typography fontSize={30} color={"#d1d5db"} display={{
          xs:'block',
          sm:'block',
          md:'none',
          lg:'none',
          xl:'none'
        }}>
          Technologies i use
        </Typography>
      <Typography fontSize={50} color={"#d1d5db"} display={{
          xs:'none',
          sm:'none',
          md:'block',
          lg:'block',
          xl:'block'
        }}>Technologies i use</Typography>
    </ThemeProvider>
    <Stack ref={techRef}>
    <Ribbon />
    <Ribbon2 />
    </Stack>
    {/* <Grid ref={techRef} container spacing={2} width={'100%'} justifyContent={"center"} sx={{backgroundColor:'grey'}}>
    {tecnologies?.map((tech, index) => (
                <Grid item xs={12} sm={6} md={3} lg={1} key={index} width={'100%'} >
                  <Card  sx={{ display: 'flex', justifyContent:'center', flexDirection:'column', alignItems:'center', backgroundColor:'transparent', height:'100px' }}>
                  <CardMedia
                  component="img"
                  sx={{ height: 25, width: 25, paddingTop:'5px'}}
                  image={tech.logo}
                  />
                  <CardContent sx={{width:'100%', textAlign:'center'}}>
                    <Typography textTransform={'uppercase'} variant="inherit" color={'#000'}>{tech.name}</Typography>
                  </CardContent>
                  </Card>
                </Grid>
              ))}
    </Grid> */}
    </Stack>
  );
};

export default Tech;
