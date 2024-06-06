import { Avatar, Box, Divider, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";

import FacebookIcon from "@mui/icons-material/Facebook";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

// Define the functional component
const BottomBar: React.FC = () => {
    const bigHeading = { xs: "20px", lg: "2.2vw" };
    const mediumHeading = { xs: "15px", lg: "1.5vw" };
    const smallHeading = { xs: "12px", lg: "1.1vw" };
    const smallHeading1 = { xs: "7px", lg: "1vw" };

    const descriptionfont1 = { xs: "5px", lg: "0.8vw" };

    const descriptionFont = { xs: "10px", lg: "1vw" };
    return (
        <Box
            sx={{
                backgroundPosition: "center",
                backgroundSize: "100% 100%",

                backgroundImage: "url(./bg1.png)",
                width: {xs:"100%",lg:"100%"},
                height:{xs:"45vh",lg:"60vh"},
                display: "flex",
                paddingTop: "5%",
                flexDirection: "column",
                alignItems: "center",
                paddingLeft: "2%",
                paddingRight: "2%",

                gap: {xs:"0.5rem",lg:"1rem"},

            }}
        >
            <Box>
                <Typography
                    variant="h4"
                    sx={{
                        color: "white",
                        fontWeight: "400",
                        fontSize: mediumHeading,
                        textAlign: "center"
                    }}
                >
                    Explore the world of sustainable
                    <br /> financial growth with TrustKey Capital
                </Typography>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: ["column", null, "row"],
                width: "100%",
                alignItems: "",
                justifyContent:"flex-start",

                paddingLeft: "10%",
                paddingRight: "10%",
                paddingTop: { xs: "2%", md: "3%", lg: "2%" },


            }}>
                <Box sx={{ display: "flex", flexDirection: "row", width: {xs:"90vw",lg:"60vw"}, justifyContent: "space-around" }}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                          
                            alignItems: "start",
                            // backgroundColor: "red",
                            gap: "1rem",

                            paddingLeft: "1%"
                        }}
                    >
                        <Typography
                            sx={{ color: "white", fontSize: smallHeading, fontWeight: "bold" }}
                        >
                            Company Address
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "row",
                                gap: { xs: "0.2rem", lg: "1rem" }
                            }}
                        >
                            <Avatar
                                sx={{
                                    width: { xs: "10px", lg: "30px" },
                                    height: { xs: "20px", lg: "30px" }
                                }}
                            >
                                <MailOutlineIcon sx={{ fontSize: "1vw", color: "white" }} />
                            </Avatar>
                            <Typography sx={{ fontSize: descriptionfont1, color: "white" }}>
                                Trustkeycapital01@gmail.com
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "row",
                                gap: { xs: "0.2rem", lg: "1rem" }
                            }}
                        >
                            <Avatar
                                sx={{
                                    width: { xs: "10px", lg: "30px" },
                                    height: { xs: "20px", lg: "30px" }
                                }}
                            >
                                <PhoneIcon sx={{ fontSize: "1vw", color: "white" }} />
                            </Avatar>
                            <Typography sx={{ fontSize: descriptionfont1, color: "white" }}>
                                9617193193,0731-4968410
                            </Typography>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            gap: "1rem",
                            flexDirection: "column"
                         
                        }}
                    >
                        <Typography
                            sx={{ color: "white", fontSize: smallHeading, fontWeight: "bold" }}
                        >
                            Company
                        </Typography>
                        <Link to='/about' style={{ textDecoration: 'none' }}>  <Typography sx={{ fontSize: descriptionfont1, color: "white" }}>
                            About Us
                        </Typography></Link>
                        <Divider sx={{ borderColor: "white" }} />{" "}
                        {/* Use borderColor instead of color */}
                        <Link to='/services' style={{ textDecoration: 'none' }}>
                            <Typography sx={{ fontSize: descriptionfont1, color: "white" }}>
                                Services
                            </Typography></Link>
                        <Divider sx={{ borderColor: "lightgrey" }} />
                        <Link to='/article' style={{ textDecoration: 'none' }}>
                            <Typography sx={{ fontSize: descriptionfont1, color: "white" }}>
                                News & Aritcle
                            </Typography></Link>
                        <Divider sx={{ borderColor: "white" }} />
                        <Link to='/ourclient' style={{ textDecoration: 'none' }}>

                            <Typography sx={{ fontSize: descriptionfont1, color: "white" }}>
                                Out Clients
                            </Typography></Link>
                        <Divider sx={{ borderColor: "white" }} />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            gap: "1rem",
                            flexDirection: "column"
                            
                        }}
                    >
                        <Typography
                            sx={{ color: "white", fontSize: smallHeading, fontWeight: "bold" }}
                        >
                            Support
                        </Typography>
                        <Link to='/contact' style={{ textDecoration: 'none' }}>      <Typography sx={{ fontSize: descriptionfont1, color: "white" }}>
                            Contact Us
                        </Typography></Link>
                        <Divider sx={{ borderColor: "white" }} />{" "}
                        {/* Use borderColor instead of color */}
                        <Typography sx={{ fontSize: descriptionfont1, color: "white" }}>
                            FAQ
                        </Typography>
                        <Divider sx={{ borderColor: "lightgrey" }} />
                    </Box>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", width: {xs:"80vw",lg:"40vw"}, }}>
                    
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            marginLeft: "50px"
                        }}
                    >
                        <Box>
                            <Typography
                                sx={{ color: "white", fontSize: smallHeading, fontWeight: "bold" }}
                            >
                                Get In Touch
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                width: "20%",
                                display: "flex",
                                flexDirection: "row"
                            }}
                        >
                            <YouTubeIcon sx={{ fontSize: "2vw", color: "white" }} />
                            <InstagramIcon
                                sx={{ fontSize: "2vw", color: "white", marginLeft: "20px" }}
                            />
                            <LinkedInIcon
                                sx={{ fontSize: "2vw", color: "white", marginLeft: "20px" }}
                            />
                            <TwitterIcon
                                sx={{ fontSize: "2vw", color: "white", marginLeft: "20px" }}
                            />
                            <FacebookIcon
                                sx={{ fontSize: "2vw", color: "white", marginLeft: "20px" }}
                            />
                        </Box>
                        <Box
                            sx={{
                                width: "30%",
                                paddingTop: "20px",
                                display: "flex",
                                flexDirection: "row"
                            }}
                        >
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                style={{
                                    padding: "10px",
                                    fontSize: "12px",
                                    // border: '2px solid #ccc',
                                    borderTopLeftRadius: "20px",
                                    borderBottomLeftRadius: "20px",

                                    width: "300px",
                                    height: "10px"
                                }}
                            />
                            <Link to="/contact">
                                {" "}
                                <button
                                    style={{
                                        height: "30px",
                                        width: "100px",
                                        borderTopRightRadius: "20px",
                                        borderBottomRightRadius: "20px",
                                        // fontSize: '16px',
                                        backgroundColor: "#8E8DFF",
                                        color: "#fff"
                                    }}
                                >
                                    Contact Us
                                </button>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default BottomBar;
