import { ArrowForward } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Card,
  Toolbar,
  Typography,
  Grid,
  TextField,
  InputLabel,
  Button,
  IconButton
} from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import CustomAppBar from "../Component/CustomAppBar";
import BottomBar from "../Component/BottomBar";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
const Input = styled.div`
  position: absolute;

  border-radius: 10px;
  background-color: #ededff;
  border: 1px solid #ededff;
  box-sizing: border-box;
`;

// Define the props interface

// Define the functional component
const ContactUs: React.FC = () => {
  const bigHeading = { xs: "20px", lg: "2.2vw" };
  const mediumHeading = { xs: "15px", lg: "1.5vw" };
  const smallHeading = { xs: "12px", lg: "1.1vw" };
  const smallHeading1 = { xs: "7px", lg: "1vw" };

  const descriptionfont1 = { xs: "5px", lg: "0.8vw" };

  const descriptionFont = { xs: "10px", lg: "1vw" };
  const BusinessTeamInvestmentWorkiIcon = styled.img`
    border-radius: 15px;
    object-fit: contain;

    background-size: 100% 100%;

    @media (min-width: 300px) {
      /* Adjust height for small devices (sm) */
      height: 200px;
      width: 400px;
    }

    @media (min-width: 668px) {
      /* Adjust height for medium devices (md) */
      height: 400px;
    }

    @media (min-width: 992px) {
      /* Adjust height for large devices (lg) */
      height: 500px;
      width: 500px;
    }
  `;
  return (
    <>
    
      <CustomAppBar name="contact" />
      <Box
        sx={{
          flexGrow: 1,
          // height: "50%",
          backgroundImage: "url(./bg3.png)",
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
            fontSize: { xs: "1rem", lg: "1.5rem" }
          }}
        >
          Contact Us
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: { xs: "1rem", lg: "1.5rem" }
          }}
        >
          {" "}
          Get In Touch Today
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: ["column", null, "row"],

          paddingLeft: "10%",
          gap: "5%"
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Card
            elevation={0}
            sx={{
              // backgroundColor: "#7C7BF1",
              borderRadius: "30px",

              marginTop: "10px",
              marginBottom: "10px",
              gap: "1rem",
              width: { xs: "60vw", lg: "40vw" },
              padding: "2%",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <Typography
              sx={{
                color: "black",
                fontSize: bigHeading
              }}
            >
              Get In Touch
              <span
                style={{
                  paddingLeft: "5px",
                  color: "#6E6CEE",
                  fontWeight: "600"
                }}
              >
                Today
              </span>{" "}
              !
            </Typography>
            {/* <Typography variant="h5" sx={{ margin: "10px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                        <br />
                        tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </Typography> */}
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <InputLabel
                  sx={{
                    fontWeight: "600",
                    color: "black",
                    marginBottom: "10px",
                    fontSize: smallHeading
                  }}
                >
                  Name
                </InputLabel>
                <TextField
                  fullWidth
                  size="small"
                  id="outlined-size-small"
                  sx={{
                    // Root class for the input field
                    "& .MuiOutlinedInput-root": {
                      color: "#000",
                      fontFamily: "Arial",
                      fontWeight: "bold",
                      // Class for the border around the input field
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                        borderWidth: "2px"
                      }
                    },
                    // Class for the label of the input field
                    "& .MuiInputLabel-outlined": {
                      color: "#2e2e2e",
                      fontWeight: "bold"
                    }
                  }}
                  InputProps={{
                    style: {
                      borderRadius: "20px",
                      backgroundColor: "#EDEDFF",

                      border: "1px grey"
                    }
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <InputLabel
                  sx={{
                    fontWeight: "600",
                    color: "black",
                    marginBottom: "10px",
                    fontSize: smallHeading
                  }}
                >
                  Company
                </InputLabel>
                <TextField
                  size="small"
                  fullWidth
                  id="outlined-size-small"
                  sx={{
                    // Root class for the input field
                    "& .MuiOutlinedInput-root": {
                      color: "#000",
                      fontFamily: "Arial",
                      fontWeight: "bold",
                      // Class for the border around the input field
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                        borderWidth: "2px"
                      }
                    },
                    // Class for the label of the input field
                    "& .MuiInputLabel-outlined": {
                      color: "#2e2e2e",
                      fontWeight: "bold"
                    }
                  }}
                  InputProps={{
                    style: {
                      borderRadius: "20px",
                      backgroundColor: "#EDEDFF",

                      border: "1px grey"
                    }
                  }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <InputLabel
                  sx={{
                    fontWeight: "600",
                    color: "black",
                    marginBottom: "10px",
                    fontSize: smallHeading
                  }}
                >
                  Phone
                </InputLabel>
                <TextField
                  size="small"
                  fullWidth
                  id="outlined-size-small"
                  sx={{
                    // Root class for the input field
                    "& .MuiOutlinedInput-root": {
                      color: "#000",
                      fontFamily: "Arial",
                      fontWeight: "bold",
                      // Class for the border around the input field
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                        borderWidth: "2px"
                      }
                    },
                    // Class for the label of the input field
                    "& .MuiInputLabel-outlined": {
                      color: "#2e2e2e",
                      fontWeight: "bold"
                    }
                  }}
                  InputProps={{
                    style: {
                      borderRadius: "20px",
                      backgroundColor: "#EDEDFF",

                      border: "1px grey"
                    }
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <InputLabel
                  sx={{
                    fontWeight: "600",
                    color: "black",
                    marginBottom: "10px",
                    fontSize: smallHeading
                  }}
                >
                  Email
                </InputLabel>
                <TextField
                  size="small"
                  fullWidth
                  id="outlined-size-small"
                  sx={{
                    // Root class for the input field
                    "& .MuiOutlinedInput-root": {
                      color: "#000",
                      fontFamily: "Arial",
                      fontWeight: "bold",
                      // Class for the border around the input field
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                        borderWidth: "2px"
                      }
                    },
                    // Class for the label of the input field
                    "& .MuiInputLabel-outlined": {
                      color: "#2e2e2e",
                      fontWeight: "bold"
                    }
                  }}
                  InputProps={{
                    style: {
                      borderRadius: "20px",
                      backgroundColor: "#EDEDFF",

                      border: "1px grey"
                    }
                  }}
                />
              </Grid>
            </Grid>
            <Box>
              <InputLabel
                sx={{
                  fontWeight: "600",
                  color: "black",
                  marginBottom: "10px",
                  fontSize: smallHeading
                }}
              >
                Subject
              </InputLabel>

              <TextField
                size="small"
                fullWidth
                id="outlined-multiline-static"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: "#000",
                    fontFamily: "Arial",
                    fontWeight: "bold",
                    // Class for the border around the input field
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "white",
                      borderWidth: "2px"
                    }
                  },
                  // Class for the label of the input field
                  "& .MuiInputLabel-outlined": {
                    color: "#2e2e2e",
                    fontWeight: "bold"
                  }
                }}
                InputProps={{
                  style: {
                    borderRadius: "20px",
                    backgroundColor: "#EDEDFF",

                    border: "1px grey"
                  }
                }}
              />
            </Box>
            <Box>
              <InputLabel
                sx={{
                  fontWeight: "600",
                  color: "black",
                  marginBottom: "10px",
                  fontSize: smallHeading
                }}
              >
                Message
              </InputLabel>

              <TextField
                size="small"
                multiline
                rows={2}
                fullWidth
                id="outlined-multiline-static"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: "#000",
                    fontFamily: "Arial",
                    fontWeight: "bold",
                    // Class for the border around the input field
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "white",
                      borderWidth: "2px"
                    }
                  },
                  // Class for the label of the input field
                  "& .MuiInputLabel-outlined": {
                    color: "#2e2e2e",
                    fontWeight: "bold"
                  }
                }}
                InputProps={{
                  style: {
                    borderRadius: "20px",
                    backgroundColor: "#EDEDFF",

                    border: "1px grey"
                  }
                }}
              />
            </Box>
            <Box>
              <Button
                variant="outlined"
                sx={{
                  height: "30px",
                  borderRadius: "30px",
                  borderColor: "yellow",
                  color: "white",
                  fontSize: smallHeading,
                  backgroundColor: "#FFB800",
                  textTransform: "none" // To prevent text transformation
                }}
              >
                Send Message
              </Button>
            </Box>
          </Card>
        </Box>
        <BusinessTeamInvestmentWorkiIcon
          loading="lazy"
          alt=""
          src="/contact.png"
        />
      </Box>
      <BottomBar />
    </>
  );
};

export default ContactUs;
