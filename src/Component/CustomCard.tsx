import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from 'styled-components';

interface CustomCardProps {
    label: any;
    description: any;
    image: any;
}

const CustomCard: React.FC<CustomCardProps> = ({ label,description,image}) => {
    const FrameInner = styled.img`
  
    
  
    @media (min-width: 576px) {
      /* Adjust height for small devices (sm) */
      height: 50px;
    }
  
    @media (min-width: 768px) {
      /* Adjust height for medium devices (md) */
      height: 60px;
    }
  
    @media (min-width: 992px) {
      /* Adjust height for large devices (lg) */
      height: 70px;
    }
  `;
  return (
    <Card
      elevation={5}
      sx={{
        height: { xs: '30%', md: '25vh', lg: '30vh' },
        width: { xs: '70vw', lg: '220vh' },
        borderRadius: '30px',
     // Box shadow equivalent to elevation
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          // gap: '0.5rem',
        }}
      >
        <FrameInner loading="lazy" alt="" src={image} />

        <Typography
          sx={{
            fontSize: { xs: '3vw', lg: '1vw' },
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          {label}
        </Typography>
        <Typography
          sx={{
            textAlign: 'center',
            fontSize: { xs: '2vw', lg: '0.7vw' },
          }}
        >
       {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;