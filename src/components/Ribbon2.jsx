import React, { useRef, useEffect } from "react";
import { Avatar, Grid, Stack, Typography } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Ribbon = ({}) => {

  const img2 = {
    alignItems: 'center',
    marginTop:'.5rem',
    marginRight:'20rem',
    position:'relative'
  }
  const txt2 = {
    position: 'relative',
    whiteSpace: "nowrap",
    fontSize: "40px",
    marginRight: '1rem',
    color: "#000",
  };
  const slider2 = {
    position: "relative",
    overflow: "hidden",
    marginTop: '-4rem',
    height: "70px",
    width: "100vw",
    left: "-40px",
    backgroundColor: "#eafe9b",
    transform: "rotate(-2deg)",
  };
  const slideTrack2 = {
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent:'center',
    animation: "moveText2 40s linear infinite",
    width: "calc(200px * 20)",
    height: "70px",
  };
  const slide2 = {
    flexDirection:'row',
    width: "200px",
  };
  const rib2 = {
    "@keyframes moveText2": {
      'from': {
        transform: "translateX(calc(-170px * 10))",
      },
      'to': {
        transform: "translateX(0)",
      },
    },
  };
  return (
    <Stack sx={slider2}>
      <Stack sx={rib2}>
        <Stack sx={slideTrack2}>
          <Stack sx={slide2} pr={8}>
            <Typography sx={txt2}>JavaScript{''}</Typography>
            <Avatar
              sx={img2}
              width="35px"
              height="35px"
              src="https://img.icons8.com/color/48/javascript--v1.png"
              alt=""
              
            />
          </Stack>
          <Stack sx={slide2} pr={8}>
            <Typography sx={txt2}>React JS{''}</Typography>
            <Avatar
              sx={img2}
              width="35px"
              height="35px"
              src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
              alt=""
            />
          </Stack>
          <Stack sx={slide2} pr={8}>
            <Typography sx={txt2}>Redux{''}</Typography>
            <Avatar
              sx={img2}
              width="35px"
              height="35px"
              src="https://img.icons8.com/color/48/redux.png"
              alt=""
            />
          </Stack>
          <Stack sx={slide2} ml={-8} pr={8}>
            <Typography sx={txt2}>Node JS</Typography>
            <Avatar
              sx={img2}
              width="35px"
              height="35px"
              src="https://img.icons8.com/fluency/48/node-js.png"
              alt=""
            />
          </Stack>
          <Stack sx={slide2} ml={-3} pr={8}>
            <Typography sx={txt2}>Express{''}</Typography>
            <Avatar
              sx={img2}
              width="35px"
              height="35px"
              src="https://img.icons8.com/ios/50/express-js.png"
              alt=""
            />
          </Stack>
          <Stack sx={slide2} ml={-4} pr={8}>
            <Typography sx={txt2}>Postgress{''}</Typography>
            <Avatar
              sx={img2}
              width="35px"
              height="35px"
              src="https://img.icons8.com/color/48/postgreesql.png"
              alt=""
            />
          </Stack>
          <Stack sx={slide2} pr={8}>
            <Typography sx={txt2}>Sequelize{''}</Typography>
            <Avatar
              sx={img2}
              width="35px"
              height="35px"
              src="data:image/png;base64,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"
              alt=""
            />
          </Stack>
          <Stack sx={slide2} pr={8}>
            <Typography sx={txt2}>Git{''}</Typography>
            <Avatar
              sx={img2}
              width="35px"
              height="35px"
              src="https://img.icons8.com/color/48/git.png"
              alt=""
            />
          </Stack>
          <Stack sx={slide2} ml={-15} pr={8}>
            <Typography sx={txt2}>GitHub{''}</Typography>
            <Avatar
              sx={img2}
              width="35px"
              height="35px"
              src="https://img.icons8.com/windows/32/github.png"
              alt=""
            />
          </Stack>
          <Stack sx={slide2} ml={-6} pr={8}>
            <Typography sx={txt2}>Material UI{''}</Typography>
            <Avatar
              sx={img2}
              width="35px"
              height="35px"
              src="data:image/png;base64,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"
              alt=""
            />
          </Stack>
          <Stack sx={slide2} pr={8}>
            <Typography sx={txt2}>JavaScript{''}</Typography>
            <Avatar
              sx={img2}
              width="35px"
              height="35px"
              src="https://img.icons8.com/color/48/javascript--v1.png"
              alt=""
              
            />
          </Stack>
          <Stack sx={slide2} pr={8}>
            <Typography sx={txt2}>React JS{''}</Typography>
            <Avatar
              sx={img2}
              width="35px"
              height="35px"
              src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
              alt=""
            />
          </Stack>
          <Stack sx={slide2} pr={8}>
            <Typography sx={txt2}>Redux{''}</Typography>
            <Avatar
              sx={img2}
              width="35px"
              height="35px"
              src="https://img.icons8.com/color/48/redux.png"
              alt=""
            />
          </Stack>
          <Stack sx={slide2} ml={-8} pr={8}>
            <Typography sx={txt2}>Node JS</Typography>
            <Avatar
              sx={img2}
              width="35px"
              height="35px"
              src="https://img.icons8.com/fluency/48/node-js.png"
              alt=""
            />
          </Stack>
          <Stack sx={slide2} ml={-3} pr={8}>
            <Typography sx={txt2}>Express{''}</Typography>
            <Avatar
              sx={img2}
              width="35px"
              height="35px"
              src="https://img.icons8.com/ios/50/express-js.png"
              alt=""
            />
          </Stack>
          <Stack sx={slide2} ml={-4} pr={8}>
            <Typography sx={txt2}>Postgress{''}</Typography>
            <Avatar
              sx={img2}
              width="35px"
              height="35px"
              src="https://img.icons8.com/color/48/postgreesql.png"
              alt=""
            />
          </Stack>
          <Stack sx={slide2} pr={8}>
            <Typography sx={txt2}>Sequelize{''}</Typography>
            <Avatar
              sx={img2}
              width="35px"
              height="35px"
              src="data:image/png;base64,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"
              alt=""
            />
          </Stack>
          <Stack sx={slide2} pr={8}>
            <Typography sx={txt2}>Git{''}</Typography>
            <Avatar
              sx={img2}
              width="35px"
              height="35px"
              src="https://img.icons8.com/color/48/git.png"
              alt=""
            />
          </Stack>
          <Stack sx={slide2} ml={-15} pr={8}>
            <Typography sx={txt2}>GitHub{''}</Typography>
            <Avatar
              sx={img2}
              width="35px"
              height="35px"
              src="https://img.icons8.com/windows/32/github.png"
              alt=""
            />
          </Stack>
          <Stack sx={slide2} ml={-6} pr={8}>
            <Typography sx={txt2}>Material UI{''}</Typography>
            <Avatar
              sx={img2}
              width="35px"
              height="35px"
              src="data:image/png;base64,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"
              alt=""
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Ribbon;