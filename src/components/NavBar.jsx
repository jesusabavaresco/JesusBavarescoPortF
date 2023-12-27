import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { gsap } from "gsap";
import { Grid } from "@mui/material";
import { Stack } from "@mui/system";

function NavBar({ showMenu, setShowMenu }) {
  let move = useRef();
  // useLayoutEffect(() => {
  //   gsap.from(move.current, {
  //     duration: 1,
  //     y: "100%",
  //     ease: 'bounce',
  //   });
  // }, []);
  const [time, setTime] = useState(new Date());
  const menu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  let hours = time.getHours();
  let min = time.getMinutes();
  min = min < 10 ? `0${min}` : min;

  let pmAm = hours >= 12 ? "PM" : "AM";

  // Convertir a formato de 12 horas
  hours = hours % 12 || 12;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <AppBar
          ref={move}
          position="relative"
          sx={{ backgroundColor: "black" }}
        >
          <Toolbar>
            <Grid item xs={12} md={8} lg={8} xl={8}>
              <Stack display='flex' justifyContent='start' alignItems='start'>
              <Typography
                variant="h6"
                component="p"
                sx={{
                  flexGrow: 1,
                  display: {
                    xs: "block",
                    sm: "block",
                    md: "none",
                    lg: "none",
                    xl: "none",
                  },
                }}
              >
                JB
              </Typography>
              </Stack>
              <Typography
                variant="h6"
                component="p"
                sx={{
                  flexGrow: 1,
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "block",
                    lg: "block",
                    xl: "block",
                  },
                }}
                paddingLeft={3}
              >
                Jesus Bavaresco
              </Typography>
            </Grid>
            <Grid item xs={12} md={3} lg={3} xl={3}>
              <Stack display="flex" justifyContent="end" alignItems="end">
                <IconButton
                  size="large"
                  edge="start"
                  aria-label="menu"
                  sx={{ color: "#fff"}}
                  onClick={menu}
                >
                  <MenuIcon />
                </IconButton>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6} lg={1} xl={1}>
              <Stack display="flex" justifyContent="right" alignItems="end">
                <Typography
                  variant="h6"
                  component="p"
                  // sx={{
                  //   display: {
                  //     xs: "none",
                  //     sm: "none",
                  //     md: "block",
                  //     lg: "block",
                  //     xl: "block",
                  //   },
                  // }}
                >{`${hours}:${min} ${pmAm}`}</Typography>
              </Stack>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
    </Grid>
  );
}

export default NavBar;
