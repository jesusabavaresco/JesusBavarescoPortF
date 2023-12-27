import { Grid, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme.jsx";
import AW1 from "../assets/ArcadeWorld1.jpeg";
import ATH1 from "../assets/ATH1.jpeg";
import Swal from "sweetalert2";
import { Stack } from "@mui/system";

const Proyects = () => {
  const hoverSA = {
    ':hover':{
      cursor: 'pointer'
    }
  }
  const showAlert = () => {
    Swal.fire({
      title: "I'm sorry, the client requested not to display this.",
      icon: "error"
    });
  }
  return (
    <Grid container p={5} pt={0}>
      <ThemeProvider theme={theme}>
        <Typography fontSize={30} color={"#d1d5db"} display={{
          xs:'block',
          sm:'block',
          md:'none',
          lg:'none',
          xl:'none'
        }}>
          Recent Projects
        </Typography>
        <Typography fontSize={50} color={"#d1d5db"} display={{
          xs:'none',
          sm:'none',
          md:'block',
          lg:'block',
          xl:'block'
        }}>
          Recent Projects
        </Typography>
      </ThemeProvider>
      <Grid container spacing={10}>
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <Grid>
            <a href="https://main--monumental-dragon-891db4.netlify.app/" style={{textDecoration:'none'}}>
              <Stack sx={{display:{
                xs:'block',
                sm:'block',
                md:'none',
                lg:'none',
                xl:'none'
              }}}>
            <img width='300px'  height='150px' src={AW1} alt="" />
              </Stack>
              <Stack sx={{display:{
                xs:'none',
                sm:'none',
                md:'block',
                lg:'block',
                xl:'block'
              }}}>
            <img width='650px' height='350px' src={AW1} alt="" />
              </Stack>
            <ThemeProvider theme={theme}>
              <Typography pt={2} color={"#d1d5db"}>
                ARCADE WORLD
              </Typography>
            </ThemeProvider>
            <Typography pb={2} color={"#9ca3af"}>
              This was the final project of the SoyHenry bootcamp, carried out
              by a team of 8 members with unique skills. Developed entirely from
              scratch, including the database, back end, and front end, it
              features a significant number of functionalities such as filters,
              local and third-party login with Google, shopping cart, payment
              gateway, admin dashboard, and more. Take a look!
            </Typography>
            </a>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <Grid onClick={showAlert} sx={hoverSA}>
            <Stack sx={{display:{
                xs:'block',
                sm:'block',
                md:'none',
                lg:'none',
                xl:'none'
              }}}>
            <img width='300px'  height='150px' src={ATH1} alt="" />
            </Stack>
            <Stack sx={{display:{
                xs:'none',
                sm:'none',
                md:'block',
                lg:'block',
                xl:'block'
              }}}>
            <img width='650px' height='350px' src={ATH1} alt="" />
            </Stack>
            <ThemeProvider theme={theme}>
              <Typography pt={2} color={"#d1d5db"}>
                ATH
              </Typography>
            </ThemeProvider>
            <Typography pb={2} color={"#9ca3af"}>
              This is a project I carried out together with a colleague for a
              client in Spain, lasting 2 weeks. We implemented the entire front
              end of the project with a Windows 95-based design using Bootstrap.
              Additionally, we integrated a system with multiple alerts, sounds,
              videos, and a chatbot. The project deployment is private at the
              client's request.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Proyects;
