import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

interface CardProps {
    image: any;
    description: any;
    label: any;
}

const MyCard: React.FC<CardProps> = ({ label,image,description }) => {
  const [isHovered1, setIsHovered1] = useState(false);

  return (
    <Card
      elevation={5}
      sx={{
    
        height: { xs: '25%', md: '25vh', lg: '35vh' },
        width: { xs: '80vw',md:"120vw" ,lg: '200vw' },
        border: '1px solid #8E8DFF',
          display: 'flex',
          
    
          padding: '1%',
      
        borderRadius: '30px',
        transition: 'background-color 0.3s ease', // Transition for background color change
        backgroundColor: isHovered1 ? '#dcdce8' : 'white', // Conditional background color
      }}
      onMouseEnter={() => setIsHovered1(true)} // Change state on hover
      onMouseLeave={() => setIsHovered1(false)} // Change state on mouse leave
    >
      <CardContent>
        <Avatar
          alt="Avatar"
          // Use imported image
          sx={{
            width: {xs:"50px",md:'50px',lg:"60px"},
            height: {xs:"50px",md:'50px',lg:"60px"},
            backgroundColor: '#E0E0FF',
           
          }}
        >
          <img alt="Avatar" src={image} style={{ width: '70%', height: '70%' }} />
        </Avatar>

              <Typography variant="h4" sx={{
                  fontWeight: "bold", marginTop: "3%", marginBottom: "3%",
                  fontSize: { xs: '3vw', lg: '1.5vw' },

         }}>
          {label}
        </Typography>
              <Typography variant="h5" sx={{
                  textAlign: "left", maxHeight: "5em", overflow: "hidden",
                  fontSize: { xs: '2vw', lg: '1vw' },

         }}>
        {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MyCard;
