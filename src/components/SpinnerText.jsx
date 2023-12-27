import { Stack, Typography } from "@mui/material";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(ScrollTrigger)

const Spinn = ({ text }) => {
  const spinn = useRef(null);
  useEffect(() => {
    const spinnTxt = spinn.current;
      const tl = gsap.timeline({
        scrollTrigger:{
          trigger: spinnTxt,
          // markers:true,
          start: '-350 50',
          end: '+=900 100%',
          scrub: 2
        },
      });
      tl.fromTo(spinnTxt, {rotation:0}, {rotation:360, duration: 3})
  }, []);

  const length = text.length;
  const deg = 360 / length;

  const spinningWrap = {
    position: 'relative',
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    display: 'grid',
    placeItems: 'center',
    fontSize: '2rem',
    fontWeight: 'bold',
    left:'1150px',
    top:'-40px'
}

const spinningText = {
    position: 'absolute',
    width: '150%',
    height: '150%',
    margin: '0',
    animation: 'spin 5s linear infinite',
  }

  const SpiSpan = {
    position: 'absolute',
    top: '0',
    left: '50%',
    transformOrigin:'0 75px'
  }

  // const spinn = {
  //   '@keyframes spin': {
  //     '0%': {
  //       transform: 'rotate(0deg)'
  //     },
  //     '100%': {
  //       transform: 'rotate(360deg)'
  //     }
  //   }
  // };

  return (
    // <Stack alignItems={'self-end'} sx={{ ...spinningWrap, ...spinn }}>
    <Stack alignItems={'self-end'} sx={{ ...spinningWrap }}>
      <Stack ref={spinn} sx={spinningText}>
        <Typography  color={'white'}>{text.split('').map((letter, i) => (
          <Typography
            sx={SpiSpan}
            key={i}
            style={{
              transform: `rotate(${deg * i}deg)`
            }}
          >
            {letter}
          </Typography>
        ))}</Typography>
      </Stack>
    </Stack>
  );
}

export default Spinn;
