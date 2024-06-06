import React, { useEffect, useState } from "react";
import CustomAppBar from "../Component/CustomAppBar";
import { Box, Card, CardContent, Divider, Typography } from "@mui/material";

import BottomBar from "../Component/BottomBar";
import { useLocation, useParams } from "react-router-dom";
import { styled } from "styled-components";

const ArticleDetals: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const location = useLocation();
  const {label,description,image } = location.state || { label:"1",description:"1",image:"1" };

  // Function to update the date
  const updateDate = () => {
    setCurrentDate(new Date());
  };
  useEffect(() => {
    updateDate();
  }, []);
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




  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <CustomAppBar name="Article" />

      <Box
        sx={{
          width: "100%",
          backgroundImage:"url(/articlebackground.png)",
          backgroundSize: "100% 100%",
          borderBottomLeftRadius: { xs: 50, lg: 200 },
          borderBottomRightRadius: { xs: 50, lg: 200 },
          height: { xs: "150px", md: "400px", lg: "55vh" },
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <Typography
          sx={{
            color: "#FDF802",
            fontWeight: "bold",
            fontSize: { xs: "1rem", lg: "1.5rem" },
            textAlign: "center"
          }}
        >
          Building Financial Freedom Wealth
          <br /> Management Strategies
        </Typography>
        <Typography
          sx={{
            color: "black",
            fontWeight: "400",
            fontSize: { xs: "1rem", lg: "1.5rem" }
          }}
        >
          {currentDate.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric"
          })}
              </Typography>
            
      </Box>
      <Card
      elevation={0}
      sx={{
        height: { xs: '30%',lg: '100vh' },
        width: { xs: '70vw', lg: '120vh' },
        borderRadius:"30px",
        margin: "50px",
       
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap:"1rem",
          alignItems: 'center',
        }}
      >
        <ArticleImage loading="lazy" alt="" src={image} />
      
        <Typography
          sx={{
            fontSize: { xs: '3vw', lg: '1.8vw' },
            fontWeight: 'bold',
            textAlign: 'start',
            paddingInline:"10px"
          }}
        >
          {label}
        </Typography>
        <Box sx={{
          height: "12vh",
        }}>
          <Typography
            sx={{
              textAlign: 'start',
              fontSize: { xs: '2vw', lg: '1vw' },
              paddingInline: "10px",
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
            fontWeight:"400"
          }}
        >
          Fab 12 2024 * No Commnent
        </Typography>
      </CardContent>
    </Card>
   
          <BottomBar/>
    </div>
  );
};

export default ArticleDetals;
