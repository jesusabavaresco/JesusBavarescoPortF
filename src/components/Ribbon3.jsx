import React from "react";
import { Stack, Typography } from "@mui/material";
import { useTheme } from "./ThemeContext.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Ribbon = ({}) => {
  const { themeChange, lightMode } = useTheme();
  const txt3 = {
    position: 'relative',
    whiteSpace: "nowrap",
    fontSize: "40px",
  };
  const slider3 = {
    position: "relative",
    overflow: "hidden",
    height: "70px",
    width: "100vw",
    borderTop: lightMode ? '3px solid #000' : '3px solid #fff',
    borderBottom: lightMode ? '3px solid #000' : '3px solid #fff'
  };
  const slideTrack3 = {
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent:'center',
    animation: "moveText3 15s linear infinite",
    height: "70px",
  };
  const rib3 = {
    "@keyframes moveText3": {
      '0%': {
        transform: "translateX(100%)",
    },'100%': {
        transform: "translateX(-100%)",
      },
    },
  };
  return (
    <Stack sx={{...slider3, top:{
      xs:'-40px',
      sm:'-40px',
      md:'-60px',
      lg:'-80px',
      xl:'-80px',
    }}}>
      <Stack sx={rib3}>
        <Stack sx={slideTrack3}>
          <Stack>
            <Typography sx={{...txt3, color:themeChange.palette.text.secondary}}>I'm current studing in U Creativa from CR relatest fild from Software development</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Ribbon;