import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from 'styled-components';
import { Box, Divider } from '@mui/material';
import { useLocation } from 'react-router-dom';

const ArticlePageDetailsCard: React.FC = () => {
  const ArticleImage = styled.img`
    width: 80%;
    @media (min-width: 576px) {
      /* Adjust height for small devices (sm) */
      height: 50px;
    }
  
    @media (min-width: 568px) {
      /* Adjust height for medium devices (md) */
      height: 150px;
    }
  
    @media (min-width: 992px) {
      /* Adjust height for large devices (lg) */
      height: 300px;
    }
  `;
  let { state } = useLocation();

  return (
    <Card
      elevation={5}
      sx={{

        height: { xs: '30%', lg: '100vh' },
        width: { xs: '70vw', lg: '120vh' },
        borderRadius: "30px",
        margin: "100px",
        position: "absolute",
        top: "10%",

        // Box shadow equivalent to elevation
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: "1rem", alignItems: 'center',

        }}
      >

        {/* <ArticleImage loading="lazy" alt="" src={image} /> */}

        <Typography
          sx={{
            fontSize: { xs: '3vw', lg: '1.8vw' },
            fontWeight: 'bold',
            textAlign: 'start',
            paddingInline: "10px"
          }}
        >
          {state}
        </Typography>
        <Box sx={{
          height: "12vh",
          // backgroundColor:"red"

        }}>
          <Typography
            sx={{
              textAlign: 'start',
              fontSize: { xs: '2vw', lg: '1vw' },
              paddingInline: "10px",


            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quos vel repellat suscipit animi officia, eum iusto,
            nihil aliquid cumque quod temporibus, ipsa quas? Soluta aspernatur maiores dignissimos culpa dolore!
          </Typography>
        </Box>
        <Divider />
        <Typography
          sx={{
            textAlign: 'start',
            fontSize: { xs: '2vw', lg: '0.8vw' },
            paddingInline: "20px",
            color: "lightgray",
            fontWeight: "400"


          }}
        >
          Fab 12 2024 * No Commnent
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ArticlePageDetailsCard;