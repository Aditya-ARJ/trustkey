import React, { useEffect, useState } from "react";
import CustomAppBar from "../Component/CustomAppBar";
import AppBarImage from "../Component/AppBarImage";
import { Box, Button, Modal, Slide, Switch, Typography } from "@mui/material";
import ArticleCard from "../Component/ArticleCard";
import BottomBar from "../Component/BottomBar";
import { useNavigate } from "react-router-dom";

const ArticlePage: React.FC = () => {

  const [currentDate, setCurrentDate] = useState(new Date());
 
  // Function to update the date
  const updateDate = () => {
    setCurrentDate(new Date());
  };
  
  useEffect(() => {
    updateDate();
  }, []);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "80vh",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column",  }}
    >
      <CustomAppBar name="Article" />

      <Box
        sx={{
          width: "100%",
          backgroundImage: "url(./articlebackground.png)",
          backgroundSize: "100% 100%",
          borderBottomLeftRadius: { xs: 50, lg: 200 },
          borderBottomRightRadius: { xs: 50, lg: 200 },
          height: { xs: "150px", md: "400px", lg: "55vh" },
          display: "flex",
          // alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          alignItems:"center"
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

      <Box
        sx={{
          display: "flex",
          flexDirection: ["column", null, "row"],
          padding: "8%",
          // justifyContent:"flex-start",
          gap: "2rem",
          paddingTop: "5%"
        }}
      >
        {/* <ArticleCard
          label="Building Financial Freedom: Wealth Managment Stratgies"
          description="1"
          image="./articleblog1.jpeg"
        />

        <ArticleCard
          label="Building Financial Freedom: Wealth Managment Stratgies"
          description="1"
          image="./articleblog1.jpeg"
        /> */}

        <ArticleCard
          label="Street Signs: Navigating market rapids, IPO Street set to sparkle, and more"
          description="On two occasions in the past week, the benchmark National Stock Exchange Nifty fell sharply after registering new record highs. Market players expect this trend to continue as the 50-share blue-chip index faces tough resistance at around 22,700. On Friday, the index, after hitting a record high of 22,795, ended at 22,476 as Vix (volatility index) spiked 9 per cent to hit a two-month 
          high of 14.62. “The sharp increase in the India Vix suggests caution among traders."
          image="./articleblog1.jpeg"
        />
          </Box>
          <BottomBar/>
    </div>
  );
};

export default ArticlePage;
