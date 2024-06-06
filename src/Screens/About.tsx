import {
    AppBar,
    Avatar,
    Box,
    Button,
    CardContent,
    TextField,
    Toolbar,
    Typography,
    Card
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

import React from "react";
import styled from "styled-components";
import BottomBar from "../Component/BottomBar";
import CustomAppBar from "../Component/CustomAppBar";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MyCard from "../Component/ProfileCard";
import { Link } from "react-router-dom";

const About: React.FC = () => {
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
      width: 250px;
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
    const FrameInner = styled.img`
    margin-top: 8px;
    height: 30px; /* Default height */
    width: {
      lg: "108px";
    }

    @media (min-width: 376px) {
      /* Adjust height for small devices (sm) */
      height: 80px;
    }

    @media (min-width: 768px) {
      /* Adjust height for medium devices (md) */
      height: 100px;
    }

    @media (min-width: 992px) {
      /* Adjust height for large devices (lg) */
      height: 140px;
    }
  `;
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
            }}
        >
            <CustomAppBar name="about" />
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
                    About Us
                </Typography>
                <Typography
                    sx={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: { xs: "1rem", lg: "1.5rem" }
                    }}
                >
                    What we are, Who we are, What we do
                </Typography>
            </Box>
            <Box
                sx={{
                    width: {
                        xs: "80%",
                        lg: "50%",
                        alignSelf: "center",
                        paddingTop: "3%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", paddingBottom: "5%",
                        gap: "0.5rem"
                    }
                }}
            >
                <Typography
                    sx={{
                        color: "#6E6CEE",
                        fontSize: bigHeading,
                        fontWeight: "700"
                    }}
                >
                    TrustKey
                    <span
                        style={{ paddingLeft: "5px", color: "black", fontWeight: "700" }}
                    >
                        Capital
                    </span>
                </Typography>
                <Typography sx={{ fontSize: descriptionFont, textAlign: "center" }}>
                    We are an equity expansion advisory helping organizations embark upon
                    a journey to successful equity issues and financial growth since 2019.
                    We are a team of finance enthusiasts and experts who know the
                    financial markets inside out.{" "}
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: ["column", null, "row"],
                    justifyContent: "center", // Center horizontally
                    alignItems: "center", // Center vertically
                    marginTop: "2%",

                    gap: "2rem",
                    paddingInline: "10%"
                }}
            >
                <Box
                    sx={{
                        width: 1,
                        height: ["50%", null, 1],
                        display: "flex",
                        justifyContent: "flex-start",
                        flexDirection: "column",
                        gap: "0.5rem"
                    }}
                >
                    <Typography
                        sx={{ fontWeight: "bold", fontSize: bigHeading, color: "#6E6CEE" }}
                    >
                        Mission
                    </Typography>
                    <Typography sx={{ fontSize: descriptionFont }}>
                        Our mission is to empower the business community with valuable
                        knowledge and guidance to help them make complex financial decisions
                        with ease. We constantly hustle to provide our clients with the
                        honest support they need to achieve financial stability and
                        sustainable growth.
                        <Typography
                            sx={{
                                fontSize: smallHeading1,
                                fontWeight: "bold",
                                marginTop: "2%",
                                marginBottom: "1%"
                            }}
                        >
                            Values that guide us through our mission:
                        </Typography>
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: smallHeading,
                            color: "#6E6CEE",
                            fontWeight: "bold"
                        }}
                    >
                        Efficiency{" "}
                    </Typography>
                    <Typography sx={{ fontSize: descriptionFont }}>
                        We always try to extract more value out of the resources with our
                        sincere efforts. Our aim is to provide value for clients’
                        hard-earned money.
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: smallHeading,
                            color: "#6E6CEE",
                            fontWeight: "bold"
                        }}
                    >
                        Efficiency
                    </Typography>
                    <Typography sx={{ fontSize: descriptionFont }}>
                        We always try to extract more value out of the resources with our
                        sincere efforts. Our aim is to provide value for clients’
                        hard-earned money.
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: smallHeading,
                            color: "#6E6CEE",
                            fontWeight: "bold"
                        }}
                    >
                        Collaboration
                    </Typography>
                    <Typography sx={{ fontSize: descriptionFont }}>
                        We believe in creating win-win situations with effective
                        collaborations. We always look for synergized functioning,
                        performing as an extended family for our clients.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        width: 1,
                        height: ["50%", null, 1],
                        display: "flex",
                        justifyContent: "flex-start",
                        flexDirection: "column"
                    }}
                >
                    <BusinessTeamInvestmentWorkiIcon
                        loading="lazy"
                        alt=""
                        src="/mision.png"
                    />
                </Box>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: ["column", null, "row"],
                    justifyContent: "center", // Center horizontally
                    alignItems: "center", // Center vertically
                    gap: "  2rem",
                    paddingInline: "10%",
                    paddingBottom: "8%"
                }}
            >
                <Box
                    sx={{
                        width: 1,
                        height: ["50%", null, 1],
                        display: "flex",
                        justifyContent: "flex-start",
                        flexDirection: "column"
                    }}
                >
                    <BusinessTeamInvestmentWorkiIcon
                        loading="lazy"
                        alt=""
                        src="/vision.png"
                    />
                </Box>
                <Box
                    sx={{
                        width: 1,
                        height: ["50%", null, 1],
                        display: "flex",
                        justifyContent: "flex-start",
                        flexDirection: "column",
                        gap: "0.5rem"
                    }}
                >
                    <Typography
                        sx={{ fontWeight: "bold", fontSize: bigHeading, color: "#6E6CEE" }}
                    >
                        Vision
                    </Typography>
                    <Typography sx={{ fontSize: descriptionFont }}>
                        To establish ourselves as the trusted partner when it comes to
                        strategic equity expansion and financial advisory services by
                        developing robust tactics backed by a deep understanding of the
                        financial landscape.
                        <Typography
                            sx={{
                                fontSize: smallHeading1,
                                fontWeight: "bold",
                                marginTop: "2%",
                                marginBottom: "1%"
                            }}
                        >
                            Principles that bring us close to turning our vision into reality:
                        </Typography>
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: smallHeading,
                            color: "#6E6CEE",
                            fontWeight: "bold"
                        }}
                    >
                        Innovation
                    </Typography>
                    <Typography sx={{ fontSize: descriptionFont }}>
                        The urge to create something that has the power to change lives for
                        the better.
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: smallHeading,
                            color: "#6E6CEE",
                            fontWeight: "bold"
                        }}
                    >
                        Trust
                    </Typography>
                    <Typography sx={{ fontSize: descriptionFont }}>
                        Maintaining unbreakable trust with our people and working with
                        complete transparency.
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: smallHeading,
                            color: "#6E6CEE",
                            fontWeight: "bold"
                        }}
                    >
                        Diversity
                    </Typography>
                    <Typography sx={{ fontSize: descriptionFont }}>
                        Expanding the horizons of our knowledge to be able to accommodate
                        the diverse needs of our clients.
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ backgroundColor: "#F2F2F2" }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: ["column", null, "row"],
                        justifyContent: "center", // Center horizontally
                        alignItems: "center", // Center vertically

                        gap: "  1rem",
                        paddingInline: "10%"
                    }}
                >
                    <Box sx={{ width: "100%", padding: "5%" }}>
                        <Typography
                            sx={{
                                color: "#6E6CEE",
                                fontSize: bigHeading,
                                fontWeight: "700"

                            }}
                        >
                            Milestone
                            <span
                                style={{
                                    paddingLeft: "5px",
                                    color: "black",
                                    fontWeight: "700"
                                }}
                            >
                                we Achieved
                                <br /> in our journey
                            </span>
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: ["column", null, "row"],
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "20px",
                        paddingLeft: "20%"
                    }}
                >
                    <Box sx={{ width: "100%", paddingLeft: "10%" }}>
                        <img src="/aboutus5.png" alt="My Image" style={{ width: "90%" }} />
                    </Box>
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            height: "50vh"
                        }}
                    >
                        <Typography sx={{ fontSize: smallHeading }}>
                            Year
                            <br />
                            <Typography
                                variant="h3"
                                sx={{
                                    color: "#6E6CEE",
                                    fontWeight: "bold",
                                    fontSize: mediumHeading
                                }}
                            >
                                2019
                            </Typography>
                        </Typography>
                        <Box sx={{ paddingLeft: "10%", paddingRight: "10%" }}>
                            <Typography sx={{ fontWeight: "bold", fontSize: bigHeading }}>
                                Inception
                            </Typography>
                            <Typography sx={{ fontSize: descriptionFont }}>
                                Trust Key Capital was born in 2019 with a vision to become a
                                trusted partner in navigating the complexities of equity
                                investment. Founded by visionary leaders with deep expertise in
                                finance, Trust Key Capital set out to provide bespoke investment
                                solutions tailored to the unique needs of each client.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: ["column", null, "row"],
                        justifyContent: "flex-start",
                        alignItems: "start",
                        paddingInline: "10%"
                    }}
                >
                    <Box sx={{ width: "70vh", paddingLeft: "10%" }}>
                        <Typography sx={{ fontSize: smallHeading }}>
                            Year
                            <br />
                            <Typography
                                sx={{
                                    color: "#6E6CEE",
                                    fontWeight: "bold",
                                    fontSize: mediumHeading
                                }}
                            >
                                2020 -2021
                            </Typography>
                        </Typography>
                        <Box sx={{ paddingLeft: "10%", paddingRight: "10%" }}>
                            <Typography
                                variant="h2"
                                sx={{ fontWeight: "bold", fontSize: bigHeading }}
                            >
                                Building
                                <br /> Foundations
                            </Typography>
                            <Typography sx={{ fontSize: descriptionFont }}>
                                In its early years, Trust Key Capital focused on building strong
                                foundations grounded in principles of integrity, transparency,
                                and client-centricity. The team diligently researched market
                                trends, developed robust investment strategies, and cultivated
                                relationships with a growing clientele.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: ["column", null, "row"],
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "20px",
                        paddingInline: "10%"
                    }}
                >
                    <Box sx={{ width: "70vh", paddingLeft: "10%" }}>
                        <img src="/aboutus6.png" alt="My Image" style={{ width: "90%" }} />
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: ["column", null, "row"],
                        justifyContent: "flex-end",
                        // alignItems: "end",
                        padding: "20px",
                        paddingLeft: "20%"
                    }}
                >
                    <Box sx={{ width: "70vh" }}>
                        <Typography sx={{ fontSize: smallHeading }}>
                            Year
                            <br />
                            <Typography
                                sx={{
                                    color: "#6E6CEE",
                                    fontWeight: "bold",
                                    fontSize: mediumHeading
                                }}
                            >
                                2022
                            </Typography>
                        </Typography>
                        <Box sx={{ paddingLeft: "10%", paddingRight: "10%" }}>
                            <Typography sx={{ fontWeight: "bold", fontSize: bigHeading }}>
                                Market <br />
                                Penetration
                            </Typography>
                            <Typography sx={{ fontSize: descriptionFont }}>
                                As Trust Key Capital's reputation for excellence spread, so did
                                its client base. The company gained traction in the market as a
                                go-to destination for investors seeking superior returns and
                                personalized investment advice. With a proven track record of
                                success, Trust Key Capital solidified its position as a trusted
                                advisor in the competitive landscape of equity investments.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: ["column", null, "row"],
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "20px",
                        paddingInline: "10%"
                    }}
                >
                    <Box sx={{ width: "70vh", paddingLeft: "10%" }}>
                        <img src="/aboutus5.png" alt="My Image" style={{ width: "90%" }} />
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: ["column", null, "row"],
                        justifyContent: "flex-start",
                        alignItems: "start",
                        paddingInline: "10%"
                    }}
                >
                    <Box sx={{ width: "70vh", paddingLeft: "10%" }}>
                        <Typography sx={{ fontSize: smallHeading }}>
                            Year
                            <br />
                            <Typography
                                sx={{
                                    color: "#6E6CEE",
                                    fontWeight: "bold",
                                    fontSize: mediumHeading
                                }}
                            >
                                2023
                            </Typography>
                        </Typography>
                        <Box sx={{ paddingLeft: "10%", paddingRight: "10%" }}>
                            <Typography
                                variant="h2"
                                sx={{ fontWeight: "bold", fontSize: bigHeading }}
                            >
                                Expansion and <br /> Innovation
                            </Typography>
                            <Typography sx={{ fontSize: descriptionFont }}>
                                Beyond by its success, Trust Key Capital embarked on a journey
                                of expansion and innovation. The company augmented its team with
                                top talent from the industry, enhancing its expertise in
                                research, analysis, and portfolio management. Leveraging
                                cutting-edge technology and data-driven insights, Trust Key
                                Capital continued to refine its investment strategies to deliver
                                optimal results for its clients.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: ["column", null, "row"],
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "20px",
                        paddingInline: "10%"
                    }}
                >
                    <Box sx={{ width: "70vh", paddingLeft: "10%" }}>
                        <img src="/aboutus6.png" alt="My Image" style={{ width: "90%" }} />
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: ["column", null, "row"],
                        justifyContent: "flex-end",
                        // alignItems: "end",
                        padding: "20px",
                        paddingLeft: "20%"
                    }}
                >
                    <Box sx={{ width: "70vh" }}>
                        <Typography sx={{ fontSize: smallHeading }}>
                            Year
                            <br />
                            <Typography
                                variant="h3"
                                sx={{
                                    color: "#6E6CEE",
                                    fontWeight: "bold",
                                    fontSize: mediumHeading
                                }}
                            >
                                2024
                            </Typography>
                        </Typography>
                        <Box sx={{ paddingLeft: "10%", paddingRight: "10%" }}>
                            <Typography
                                variant="h2"
                                sx={{ fontWeight: "bold", fontSize: bigHeading }}
                            >
                                Capital Market
                                <br />
                                Triumph
                            </Typography>
                            <Typography sx={{ fontSize: descriptionFont }}>
                                In a landmark achievement, Trust Key Capital raised over 800
                                crores in the capital market, marking a significant milestone in
                                its journey of growth and success. The substantial capital
                                infusion empowered Trust Key Capital to further expand its
                                operations, broaden its service offerings, and explore new
                                avenues for investment opportunities.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    width: "100%",
                    marginTop: "5%",
                    marginBottom: "5%",

                    display: "flex",
                    flexDirection: "column",
                    height: "40vh",
                    gap: "1rem"
                }}
            >
                <Typography
                    sx={{
                        color: "#6E6CEE",
                        fontSize: mediumHeading,
                        textAlign: "center",
                        fontWeight: "bold",
                        lineHeight: "2rem"
                    }}
                >
                    Future
                    <br />
                    <span style={{
                        color: "black",
                        fontWeight: "600",
                        fontSize: "2vw"

                    }}>
                        Outlook
                    </span>


                </Typography>
                <Typography
                    sx={{
                        fontSize: descriptionFont,
                        textAlign: "center"
                    }}
                >
                    With a solid foundation, a stellar track record, and significant
                    capital backing, Trust Key Capital is poised for
                    <br /> continued success and leadership in the realm of equity
                    investment advisory services. Armed with a <br />
                    relentless commitment to excellence and a client-first approach, Trust
                    Key Capital is primed to shape the <br />
                    future of investment advisory, setting new benchmarks for innovation
                    and value creation in the financial <br />
                    industry.
                </Typography>
            </Box>
            <Box
                sx={{
                    width: "100%",
                    backgroundColor: "#F5F5FF",
                    display: "flex",
                    height: { xs: "80vh", lg: "80vh" },
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: "3rem"
                }}
            >
                <Typography
                    sx={{ fontWeight: "bold", color: "#6E6CEE", fontSize: mediumHeading }}
                >
                    We talk a lot about hope <br />
                    helping and teamwork.
                </Typography>
                <Box
                    sx={{
                        gap: "2rem",
                        display: "flex",
                        flexDirection: ["column", null, "row"]
                    }}
                >
                    <Box sx={{ gap: "2rem", display: "flex", flexDirection: "row" }}>
                        <MyCard
                            lable="CA Motilal Laxkar"
                            lable1=" Founder"
                            image="/profile.jpeg"
                            description="Equity Growth Advisor with more than 3 decades of experience."
                        />
                        <MyCard
                            lable="CA Mahesh Khandelwal "
                            lable1=""
                            image="/profile.jpeg"
                            description="Equity Growth Advisor for the last 15 years."
                        />
                        <MyCard
                            lable="CA Bharat Kabra "
                            lable1=""
                            image="/profile.jpeg"
                            description="Corporate financial advisor with 2 decades of experience."
                        />

                    </Box>
                    <Box sx={{ gap: "2rem", display: "flex", flexDirection: "row" }}>




                    </Box>

                    <Box sx={{ gap: "2rem", display: "flex", flexDirection: "row" }}>
                        <MyCard
                            lable="MBA Anshul Laxkar"
                            lable1=""
                            image="/profile.jpeg"
                            description="A young entrepreneur with Master’s in finance from one
                            of the top universities in India and an
                            Investment banker at heart."
                        />

                        <MyCard
                            lable="CS Srashti Jain"
                            lable1=""
                            image="/profile.jpeg"
                            description="Legal advisor and M&A expert."
                        />
                        <MyCard
                            lable="CA Arun Sharma"
                            lable1=""
                            image="/profile.jpeg"
                            description="Chief Financial Advisor with more than 
                            3 decades of experience in the industry."
                        />
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    paddingTop: "5%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                    backgroundColor: "#E8F0EF",
                    gap: "0.5rem",
                    paddingBottom: "5%",
                    marginTop: "5%",
                    marginBottom: "5%"
                }}
            >
                <Typography
                    sx={{
                        color: "#6D6CEE",
                        fontWeight: "bold",
                        fontSize: { xs: "3vw", lg: "2vw" }
                    }}
                >
                    TrustKey Capital
                </Typography>

                <Typography
                    sx={{
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: { xs: "3vw", lg: "2vw" }
                    }}
                    variant="h4"
                >
                    is trusted by 50+ business
                    <br /> across India
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "60%"
                    }}
                >
                    <Box
                        sx={{
                            height: { xs: "30px", lg: "50px" },
                            width: { xs: "110px", lg: "120px" },
                            backgroundSize: "100% 100%", // Cover the entire box with the background image
                            backgroundPosition: "center",
                            backgroundImage: "url(./icon11.png)"
                        }}
                    ></Box>
                    <Box
                        sx={{
                            height: { xs: "30px", lg: "50px" },
                            width: { xs: "110px", lg: "120px" },
                            backgroundSize: "100% 100%", // Cover the entire box with the background image
                            backgroundPosition: "center",
                            backgroundImage: "url(./icon12.png)"
                        }}
                    ></Box>
                    <Box
                        sx={{
                            height: { xs: "30px", lg: "50px" },
                            width: { xs: "110px", lg: "120px" },
                            backgroundSize: "100% 100%", // Cover the entire box with the background image
                            // backgroundPosition: "center",
                            backgroundImage: "url(./icon13.png)"
                        }}
                    ></Box>
                    <Box
                        sx={{
                            height: { xs: "30px", lg: "50px" },
                            width: { xs: "110px", lg: "120px" },
                            backgroundSize: "100% 100%", // Cover the entire box with the background image
                            backgroundPosition: "center",
                            backgroundImage: "url(./icon14.png)"
                        }}
                    ></Box>
                </Box>
            </Box>

          
            <BottomBar />
        </div>
    );
};

export default About;
