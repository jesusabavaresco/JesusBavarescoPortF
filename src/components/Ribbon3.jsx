import React, { useRef, useEffect } from "react";
import { Avatar, Grid, Stack, Typography } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Ribbon = ({}) => {

  const txt3 = {
    position: 'relative',
    whiteSpace: "nowrap",
    fontSize: "40px",
    color: "#fff",
  };
  const slider3 = {
    position: "relative",
    overflow: "hidden",
    height: "70px",
    width: "100vw",
    top: '-80px',
    borderTop: '3px solid #fff',
    borderBottom: '3px solid #fff'
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
    <Stack sx={slider3}>
      <Stack sx={rib3}>
        <Stack sx={slideTrack3}>
          <Stack>
            <Typography sx={txt3}>I'm current studing in U Creativa from CR relatest fild from Software development</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Ribbon;