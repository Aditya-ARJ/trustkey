import {
  AppBar,
  Box,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography
} from "@mui/material";
import React, { useEffect, useState } from "react";
import FrameComponent6 from "./1";
import styled from "styled-components";

import { Link } from "react-router-dom";
import TemporaryDrawer from "./CustomDrawer";
interface Page {
  name: any;
}
const CustomAppBar: React.FC<Page> = ({ name }) => {
  const bigHeading = { xs: "20px", lg: "2.2vw" };

  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);
  const [showDropdown4, setShowDropdown4] = useState(false);
  const [showDropdown5, setShowDropdown5] = useState(false);

  const GroupIcon = styled.img`
    width: 100vh;
    /* background-color: black; */
    height: 100%;
    position: absolute;
    margin: 0 !important;
    top: 23%;
    bottom: 0px;
    left: -20%;
    max-height: 100%;
    object-fit: contain;
    /* z-index: 8; */
    @media (min-width: 576px) {
      /* Adjust height for small devices (sm) */
      height: 250px;
    }

    @media (min-width: 768px) {
      /* Adjust height for medium devices (md) */
      height: 450px;
    }

    @media (min-width: 992px) {
      /* Adjust height for large devices (lg) */
      height: 500px;
    }
  `;
  const FrameInner = styled.img`
   padding-right: 15px;
    height: 30px; /* Default height */
    width: {
      lg: "108px";
    }

    @media (min-width: 576px) {
      /* Adjust height for small devices (sm) */
      height: 40px;
    }

    @media (min-width: 768px) {
      /* Adjust height for medium devices (md) */
      height: 50px;
    }

    @media (min-width: 992px) {
      /* Adjust height for large devices (lg) */
      height: 60px;
    }
  `;

  const BusinesswomanLeadingAPresenIcon = styled.img`
    border-radius: 320px 0px 320px 320px;

    @media (min-width: 376px) {
      /* Adjust height for small devices (sm) */
      height: 100px;
    }

    @media (min-width: 568px) {
      /* Adjust height for medium devices (md) */
      height: 200px;
    }

    @media (min-width: 992px) {
      /* Adjust height for large devices (lg) */
      height: 450px;
    }
  `;

  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1000);
  };

  useEffect(() => {
    handleResize(); // Call it once to set the initial state
    window.addEventListener("resize", handleResize); // Add event listener
    return () => {
      window.removeEventListener("resize", handleResize); // Clean up on unmount
    };
  }, []);
  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          paddingLeft: { lg: "6%" },

          backgroundColor: "#6D6CEE",
          height: { xs: "50px", md: "60px", lg: "80px" }
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between",alignItems:"center" }}>
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <Box sx={{ paddingTop: { lg: "10px", xs: "2px" } }}>
            <FrameInner loading="lazy" alt="" src="/group-522.svg" />

            </Box>

            <Typography
              sx={{
                fontWeight: { xs: "bold", md: "bold", lg: "bold" }, // Adjust as needed
                fontSize: { xs: "0.8rem", md: "1.2rem", lg: "1.6rem" } // Adjust as needed
              }}
            >
              Trustkeycapital
            </Typography>
          </Box>

          {isMobile ? (
            <TemporaryDrawer />
          ) : (
            <Box sx={{ display: "flex", flexDirection: "row",paddingRight:{lg:"4%"} }}>
              <Link to="/">
                <button
                  style={{
                    fontSize: "1rem", // Adjust size as needed
                    backgroundColor: "transparent", // Set background color to transparent
                    borderColor: "transparent",
                    color: showDropdown1 ? "#b2b2f8" : "white",
                    fontWeight: "400",
                    marginRight: "30px"
                  }}
                  onMouseEnter={() => setShowDropdown1(true)} // Show dropdown on mouse enter
                  onMouseLeave={() => setShowDropdown1(false)}
                  color="inherit"
                >
                  Home
                </button>
              </Link>
              <Link to="/about">
                <button
                  style={{
                    fontSize: "1rem", // Adjust size as needed
                    backgroundColor: "transparent", // Set background color to transparent
                    borderColor: "transparent",
                    color: showDropdown2 ? "#b2b2f8" : "white",
                    fontWeight: "400",
                    marginRight: "30px"
                  }}
                  onMouseEnter={() => setShowDropdown2(true)} // Show dropdown on mouse enter
                  onMouseLeave={() => setShowDropdown2(false)}
                  color="inherit"
                >
                  About Us
                </button>
              </Link>
              <Link
                to="/services" // Specify the path you want to navigate to
                style={{
                  textDecoration: "none", // Remove default link underline
                  color: showDropdown3 ? "#b2b2f8" : "white",
                  marginRight: "30px"
                }}
                onMouseEnter={() => setShowDropdown3(true)}
                onMouseLeave={() => setShowDropdown3(false)}
              >
                <button
                  style={{
                    fontSize: "1rem",
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                    color: showDropdown3 ? "#b2b2f8" : "white",
                    fontWeight: "400"
                  }}
                >
                  Services
                </button>
                </Link>
                <Link to="/ourclient">
                <button
                  style={{
                    fontSize: "1rem", // Adjust size as needed
                    backgroundColor: "transparent", // Set background color to transparent
                    borderColor: "transparent",
                    color: showDropdown2 ? "#b2b2f8" : "white",
                    fontWeight: "400",
                    marginRight: "30px"
                  }}
                  onMouseEnter={() => setShowDropdown2(true)} // Show dropdown on mouse enter
                  onMouseLeave={() => setShowDropdown2(false)}
                  color="inherit"
                >
                Our Clients
                </button>
              </Link>
              <Link
                to="/contact" // Specify the path you want to navigate to
                style={{
                  textDecoration: "none", // Remove default link underline
                  color: showDropdown3 ? "#b2b2f8" : "white",
                  marginRight: "30px"
                }}
                onMouseEnter={() => setShowDropdown4(true)}
                onMouseLeave={() => setShowDropdown4(false)}
              >
                <button
                  style={{
                      fontSize: "1rem",
                    
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                    color: showDropdown4 ? "#b2b2f8" : "white",
                    fontWeight: "400"
                  }}
                >
                  Contact Us
                </button>
              </Link>

                <Link to="/article">
                        <button
                style={{
                  fontSize: "1rem", // Adjust size as needed
                  backgroundColor: "transparent", // Set background color to transparent
                  borderColor: "transparent",
                  color: showDropdown5 ? "#b2b2f8" : "white",
                  fontWeight: "400",
                  marginRight: "30px"
                }}
                onMouseEnter={() => setShowDropdown5(true)} // Show dropdown on mouse enter
                onMouseLeave={() => setShowDropdown5(false)}
                color="inherit"
              >
                    News  & Article
              </button>
        </Link>
            </Box>
          )}
        </Toolbar>
      </AppBar>

     

     

    
     
    </>
  );
};

export default CustomAppBar;
