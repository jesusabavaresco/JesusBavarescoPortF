import { Grid, Stack, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme.jsx";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contact = () => {
  return (
    <Grid p={2}>
      <Grid container p={5} pt={0}>
        <ThemeProvider theme={theme}>
          <Grid item xs={12}>
            <Typography
              fontSize={30}
              color={"#d1d5db"}
              display={{
                xs: "block",
                sm: "block",
                md: "none",
                lg: "none",
                xl: "none",
              }}
            >
              Contact me
            </Typography>
            <Typography
              fontSize={50}
              color={"#d1d5db"}
              display={{
                xs: "none",
                sm: "none",
                md: "block",
                lg: "block",
                xl: "block",
              }}
            >
              Contact me
            </Typography>
          </Grid>
        </ThemeProvider>
        <Grid container spacing={3} ml={10} pt={2}>
          <Grid items xs={2} sm={2} md={3} lg={3} xl={3} mt={6}>
            <Stack
              display={{
                xs: "none",
                sm: "none",
                md: "block",
                lg: "block",
                xl: "block",
              }}
            >
              <a href="https://www.linkedin.com/in/jesusbavaresco">
                <LinkedInIcon sx={{ color: "#9ca3af" }} />
              </a>
            </Stack>
          </Grid>
          <Grid items xs={8} sm={8}>
            <ThemeProvider theme={theme}>
              <Stack position='relative' left='-75px' pt={4}>
                <a
                  style={{ textDecoration: "none" }}
                  href="mailto:jesusbavaresco@gmail.com"
                >
                  <Typography
                    fontSize={15}
                    color={"#d1d5db"}
                    display={{
                      xs: "block",
                      sm: "block",
                      md: "none",
                      lg: "none",
                      xl: "none",
                    }}
                  >
                    jesusbavaresco@gmail.com
                  </Typography>
                </a>
              </Stack>
            </ThemeProvider>
            <ThemeProvider theme={theme}>
              <a
                style={{ textDecoration: "none" }}
                href="mailto:jesusbavaresco@gmail.com"
              >
                <Typography
                  onClick
                  sx={{ color: "#d1d5db" }}
                  fontSize={35}
                  display={{
                    xs: "none",
                    sm: "none",
                    md: "block",
                    lg: "block",
                    xl: "block",
                  }}
                >
                  jesusbavaresco@gmail.com
                </Typography>
              </a>
            </ThemeProvider>
          </Grid>
          <Grid items xs={2} sm={2} md={3} lg={1} xl={1} mt={6}>
            <Stack
              display={{
                xs: "none",
                sm: "none",
                md: "block",
                lg: "block",
                xl: "block",
              }}
            >
              <a href="https://github.com/jesusabavaresco">
                <GitHubIcon sx={{ color: "#9ca3af" }} />
              </a>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid items xs={6} md={6} lg={6} xl={6}>
          <Stack display="flex" textAlign="left">
            <Typography sx={{ color: "#9ca3af", textTransform: "uppercase" }}>
              San Jose, CR
            </Typography>
          </Stack>
        </Grid>
        <Grid items xs={6} md={6} lg={6} xl={6}>
          <Stack display="flex" textAlign="end">
            <Typography sx={{ color: "#9ca3af" }}>JB</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Contact;
