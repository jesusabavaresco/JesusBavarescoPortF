import React from 'react'
import Menu from './Menu';
import { Stack, Typography } from '@mui/material';

function Main({showMenu, setShowMenu, movePage}) {
  
  return (
    <div style={{position:'absolute', top: '0', right:'0', left:'0' }}>
      <Stack 
      sx={{margin:'0px' }}>
      {showMenu && <Menu setShowMenu={setShowMenu} showMenu={showMenu}/>}
      </Stack>
    </div>
  )
}

export default Main