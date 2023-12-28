import React, {useEffect, useRef} from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Stack, Typography } from '@mui/material';
import { gsap } from "gsap";
import { Link } from 'react-router-dom';
// import { TextPlugin } from "gsap/TextPlugin";
// gsap.registerPlugin(TextPlugin)

function Menu({setShowMenu}) {
  const menuRef = useRef(null)
  const closeRef = useRef(null)
  const links = useRef(null)

  useEffect(() => {
    gsap.from(links.current,{
      duration:1,
      opacity:0,
      delay:1.2,
    })
    gsap.fromTo(menuRef.current,{
      y:'-100%',
    }, {
      y:'0',
      duration: 1,
      ease: 'bounce.out'
    })
        document.body.style.overflow = 'hidden';

        return () => {
          document.body.style.overflow = 'auto';
        };
  }, [])
  
  const closeMenu = () => {
    gsap.to(menuRef.current, {
      y: '-100%',
      duration: 0.7,
      onComplete: () => {
        setShowMenu(false);
      }
    });
    gsap.to(closeRef.current, {
      y: '0', 
      duration: 0.7,
    });
    document.body.style.overflow = 'auto';
  };

  return (
    <Stack ref={menuRef} display='flex' sx={{backgroundColor:'#eafe9b'}} height='100vh'>
      <Stack alignItems='end'>
        <IconButton sx={{color:'black', padding:'2rem'}} onClick={closeMenu}><CloseIcon/></IconButton>
      </Stack>
      <Stack alignItems='center' spacing={5}>
        <Link to='/about' style={{textDecoration:'none'}}>
          <Typography display={{xs:'block', sm:'block', md:'none', lg:'none', xl:'none'}} variant='h3' color={'black'} sx={{fontSize:'2rem', fontWeight:'bold', textTransform:'uppercase'}}>about</Typography>
        </Link>
        <Typography display={{xs:'block', sm:'block', md:'none', lg:'none', xl:'none'}} variant='h3' color={'black'} sx={{fontSize:'2rem', fontWeight:'bold', textTransform:'uppercase'}}>tecnologies</Typography>
        <Typography display={{xs:'block', sm:'block', md:'none', lg:'none', xl:'none'}} variant='h3' color={'black'} sx={{fontSize:'2rem', fontWeight:'bold', textTransform:'uppercase'}}>projects</Typography>




        <Typography display={{xs:'none', sm:'none', md:'block', lg:'block', xl:'block'}} variant='h3' color={'black'} sx={{fontSize:'4rem', fontWeight:'bold', textTransform:'uppercase'}}>home</Typography>
        <Link to='/about' style={{textDecoration:'none'}}>
          <Typography display={{xs:'none', sm:'none', md:'block', lg:'block', xl:'block'}} variant='h3' color={'black'} sx={{fontSize:'4rem', fontWeight:'bold', textTransform:'uppercase'}}>about</Typography>
        </Link>
        {/* <Typography display={{xs:'none', sm:'none', md:'block', lg:'block', xl:'block'}} variant='h3' color={'black'} sx={{fontSize:'4rem', fontWeight:'bold', textTransform:'uppercase'}}>projects</Typography> */}
        <Stack alignItems='center' direction='row' spacing={4}>
          <a href="https://www.linkedin.com/in/jesusbavaresco" style={{textDecoration:'none'}}>
          <Typography color={'black'} >LinkedIn</Typography>
          </a>
          <a href="https://github.com/jesusabavaresco" style={{textDecoration:'none'}}>
          <Typography color={'black'} >GitHub</Typography>
          </a>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Menu