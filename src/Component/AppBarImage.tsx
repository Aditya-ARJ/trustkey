import { Box } from '@mui/material';
import React from 'react';
interface Image{
    image: string;
    children:[]
}
const AppBarImage: React.FC<Image> = ({image,children}) => {
  return (
      <Box
          component='img'
      sx={{
        flexGrow: 1,
          // height: "50%",
          width:"100%",
        borderBottomLeftRadius: { xs: 50, lg: 200 },
        borderBottomRightRadius: { xs: 50, lg: 200 },
        height: { xs: "150px", md: "400px", lg: "55vh" },
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center"
          }}
          src={image}
          alt='appbarimage'
      
      >{children }</Box>
  );
};

export default AppBarImage;