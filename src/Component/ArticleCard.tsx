import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from 'styled-components';
import { Box, CardActionArea, Divider } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

interface CustomCardProps {
    label?: any;
    description?: any;
    image?: any;
}

const ArticleCard: React.FC<CustomCardProps> = ({ label, description, image }) => {

    const ArticleImage = styled.img`
    @media (min-width: 576px) {
      /* Adjust height for small devices (sm) */
      height: 50px;
    }
  
    @media (min-width: 468px) {
      /* Adjust height for medium devices (md) */
      height: 150px;
    }
  
    @media (min-width: 992px) {
      /* Adjust height for large devices (lg) */
      height: 200px;
    }
  `;
  return (
    <Card 
      elevation={5}
      sx={{
        height: { xs: '20%',lg: '66vh' },
        width: { xs: '60vw', lg: '50vh' },
        borderRadius:"10px",
      
     // Box shadow equivalent to elevation
      }}
      
    >
     

      <CardActionArea component={Link}
        to={`/articleDetails`} state={{ label: label,description:description,image:image }} >
      <CardContent
        sx={{
          padding:0,
          display: 'flex',
          flexDirection: 'column',
          gap:{xs:"0.5rem",lg:"1rem"}
        
        }}
      >
        <ArticleImage loading="lazy" alt="" src={image} />

        <Typography
          sx={{
            fontSize: { xs: '2.5vw', lg: '1.2vw' },
            fontWeight: 'bold',
            textAlign: 'start',
            paddingInline:"10px"
          }}
        >
          {label}
        </Typography>
        <Box sx={{
          height: {xs:"6vh",lg:"12vh"},
          // backgroundColor:"red"

        }}>
        <Typography
          sx={{
            textAlign: 'start',
            fontSize: { xs: '2vw', lg: '0.8vw' },
              paddingInline: "10px",
             overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 5,
                WebkitBoxOrient: "vertical" 
            

          }}
        >
         {description}
        </Typography>
        </Box>
        <Divider />
        <Typography
          sx={{
            textAlign: 'start',
            fontSize: { xs: '2vw', lg: '0.8vw' },
            paddingInline: "20px",
            color: "lightgray",
            fontWeight: "400",
                     

          }}
        >
          Fab 12 2024 * No Commnent
        </Typography>
      </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ArticleCard;