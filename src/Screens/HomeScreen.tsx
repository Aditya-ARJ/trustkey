import React, { useState } from "react";
import CustomAppBar from "../Component/CustomAppBar";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  TextField,
  Typography
} from "@mui/material";
import styled from "styled-components";
import ProgressLine from "../Component/ProgressBar";
import Carousel from "react-bootstrap/Carousel";
import MyCarousel from "../Component/Carousel";
import BottomBar from "../Component/BottomBar";
import { Link } from "react-router-dom";
import CustomCard from "../Component/CustomCard";
import SqureCard from "../Component/SqureCard";

const HomeScreen: React.FC = () => {
  const bigHeading = { xs: "20px", lg: "2.2vw" };
  const bigHeading1 = { xs: "15px", lg: "2.2vw" };

  const mediumHeading = { xs: "15px", lg: "1.5vw" };
  const smallHeading = { xs: "12px", lg: "1.1vw" };
  const smallHeading1 = { xs: "7px", lg: "1vw" };
  const smallHeading2 = { xs: "5px", lg: "0.9vw" };


  const descriptionfont1 = { xs: "3px", lg: "0.8vw" };

  const descriptionFont = { xs: "10px", lg: "1vw" };

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
  const BusinessTeamInvestmentWorkiIcon = styled.img`
    border-radius: 15px;
    object-fit: cover;

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
  return (
    <div>
      <CustomAppBar name="home" />
      <Box
        sx={{
          // height: "30%",
          background: "linear-gradient(180deg, #6d6cee 18.07%, #6867ee)",
          height: { xs: "100px", md: "400px", lg: "40vh" },

          borderBottomLeftRadius: {xs:50,lg:200},
          borderBottomRightRadius: {xs:50,lg:200},
          paddingTop: "5%",
          paddingLeft: "8%",
          display: "flex",
          flexDirection: " row",
          justifyContent: "space-between",
          paddingRight: "8%"
        }}
      >
        <Box>
          <Box sx={{ display:"flex",flexDirection:"column",gap: {xs:"0.5rem" ,lg:"1.5rem"}}}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: bigHeading1,
              lineHeight: "1.2",
              color: "white"
            }}
          >
            Your trusted partner  for <br />strategic
             equity expansion
          </Typography>
          <Typography sx={{ fontSize: smallHeading2 }} color="white">
            Start your journey toward rapid equity expansion with our
            <br />
            expert guidance and support. Drive value with tailored
            <br />
            financial growth strategies backed by extensive research of the
            market.
          </Typography>

          <Link to="/services">
            <Button
              disableElevation={true}
              variant="contained"
                sx={{
                fontSize:descriptionfont1,
                color: "#fff",

                background: "linear-gradient(104.44deg, #4542fa, #0400ff)",
                borderRadius: "30px",
                "&:hover": {
                  background: "linear-gradient(104.44deg, #4542fa, #0400ff)"
                },
                width: { xs: "60px", lg: "150px" },
                height: { xs: "20px", lg: "35px" }
              }}
            >
              Explore More
            </Button>
          </Link>
          </Box>
          
          <GroupIcon alt="" src="/group@2x.png" />
        </Box>
        <BusinesswomanLeadingAPresenIcon
          alt=""
          src="/businesswomanleadingapresentationinloftofficejpg@2x.png"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: ["column", null, "row"],

          marginTop: "10%",
          paddingLeft: "20%",
          paddingRight: "10%",
          gap: "5%"
        }}
      >
        <BusinessTeamInvestmentWorkiIcon
          loading="lazy"
          alt=""
          src="/businessteaminvestmentworkingwithcomputerjpg@2x.png"
        />
        <Box
          sx={{
            width: 1,
            height: ["50%", null, 1],
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            paddingTop: "2%",
            gap:"0.4rem"
          }}
        >
          <Typography
            sx={{
              color: "#6D6CEE",
              fontWeight: "600",
              fontSize: { xs: "1.5vw", lg: "1vw" }
            }}
          >
            Smart Public Offering
          </Typography>
          <Typography
            sx={{
              color: "black",
              fontWeight: "bold",
              fontSize: { xs: "20px", lg: "2.2vw" }
            }}
          >
            Delivering Expert Growth <br />
            Advisory Services
          </Typography>
          <Typography
            sx={{ color: "black", fontSize: { xs: "2vw", lg: "1vw" } }}
          >
            We have empowered many organizations to boost their
            <br /> market position with innovative and effective strategies.
            <br /> Our numbers speak for us.
          </Typography>
          <ProgressLine
            data="800 Cr+"
            label="Fund Raising"
            backgroundColor="#e5e5e5"
            visualParts={[
              {
                percentage: "100%",
                color: "#100DFE"
              }
            ]}
          />

          <ProgressLine
            data="50+ IPOs"
            label="Expert Advisors"
            backgroundColor="lightgrey"
            visualParts={[
              {
                percentage: "100%",
                color: "#100DFE"
              }
            ]}
          />
          <ProgressLine
            data="10+ IPOs"
            label="Strategic Advisor"
            backgroundColor="lightgrey"
            visualParts={[
              {
                percentage: "100%",
                color: "#100DFE"
              }
            ]}
          />
          <Link to="/about">
            <Button
              disableElevation={true}
              variant="contained"
              sx={{
                marginTop: "20px",
                color: "#fff",
                fontSize: { xs: "1.5vw", lg: "1vw" }, // Added 'px' to fontSize
                background: "linear-gradient(104.44deg, #4542fa, #0400ff)",
                borderRadius: "30px",
                "&:hover": {
                  background: "linear-gradient(104.44deg, #4542fa, #0400ff)"
                },
                width: "30%", // Changed width to 100%
                height: "43px" // Added 'px' to height
              }}
            >
              Learn More
            </Button>
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: ["column", null, "row"],
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
          height: "40%",
          marginTop: "8%",
          paddingTop: "5%",
          paddingBottom: "5%",

          backgroundColor: "#E9E9FF",
          gap: "2rem",
          paddingLeft: "10%",
          paddingRight: "10%"
        }}
      >
        <CustomCard
          label="Expanded Investor Network"
          description="  Expose yourself to an extended network of investors and capitalists with our
        equity growth services. Explore a
        wide array of growth opportunities and raise capital through enhanced investor relations."
          image="./icon3.png"
        />
        <CustomCard
          label="Sustainable Strategic Growth"
          description="We help you grow sustainably with robust strategic planning to outlive
        any market adversary and give you consistent growth. We provide you with personalized guidance
        to help you align with the expectations of investors and attract fruitful collaborations."
          image="./icon2.png"
        />
        <CustomCard
          label="Valuation Services"
          description="Our valuation services are there to help you get the right value for your equity
        offerings and develop the right models. Reflect your real potential
        and value in front of investors and attract capital at favorable terms with our services."
          image="./icon5.png"
        />
      </Box>
      <Box
        sx={{
          paddingTop:"2%",
          backgroundColor: "#080E06",
          display: "flex",
          flexDirection: "column",
       
        }}
      >
         <Typography
            variant="h5"
            sx={{
              color: "#8E8DFF",
              fontWeight: "400",
              textAlign: "center",
              fontSize: { xs: "1.5vw", lg: "1.2vw" }
            }}
          >
            Our Value
          </Typography>
          <Typography
            variant="h3"
          sx={{
            paddingTop: "1%",

              color: "white",
              textAlign: "center",
            fontSize: { xs: "2.5vw", lg: "2vw" },
              fontWeight:"bold"
            }}
          >
            Integrity, Innovation, Equity: <br />
            <span style={{ color: "#8E8DFF" }}>Through Collaboration </span>
            and Trust.
          </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: ["column", null, "row"],
            justifyContent: "center", // Center horizontally
            alignItems: "center", // Center vertically
            height: "40%",
            paddingBottom: "2%",
            paddingTop: "2%",

            gap: "2rem",
            paddingLeft: "10%",
            paddingRight: "10%"
          }}
        >
          <CustomCard
            label="Expert Team"
            description=" We have a team of finance enthusiasts who are experts in
        their field. Our members put consistent efforts in equipping
   themselves with the latest knowledge and trends to provide relevant
        services and facilitate your growth."
            image="./icon36.png"
          />
          <CustomCard
            label="Market Knowledge"
            description="We firmly believe in our robust research and analysis process that gains us insights
        into prevalent market conditions and forecasts any potential shifts. This empowers us to create
        highly tailored equity expansion strategies that can help you easily adapt to the market."
            image="./icon2.png"
          />
          <CustomCard
            label="Dedicated Support"
            description="Our members back you with constant support while you walk on your path
        toward growth. We are there to hold you while you navigate through challenges
        in your journey. We provide a
        personalized one-on-one consultation to make communication free from any clutter."
            image="./icon37.png"
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: "5%",
          gap: "0.5rem"
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "2.5vw", lg: "1.5vw" },
            fontWeight: "bold",
            color: "#8E8DFF"
          }}
        >
          What we offer
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            fontSize: { xs: "3vw", lg: "2vw" }
          }}
        >
          Unlock financial freedom with
          <br />
          smart choices
        </Typography>
      </Box>
      <Box
        sx={{
          paddingLeft: "8%",
          paddingRight: "8%",
          paddingTop: "5%",
          paddingBottom: "5%"
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: ["column", null, "row"],
            justifyContent: "center", // Center horizontally

            gap: "2rem",

            height: "50%"
          }}
        >
          <SqureCard
            label="IPO"
            image="./icon35.png"
            description="Initial public offering or stock launch is a public offering in which shares
          of a company are sold to institutional investors and usually also to retail investors."
          />
          <SqureCard
            label="FPO"
            image="./icon34.png"
            description=" FPO (Follow on Public Offer) is a process by which a company, which is already listed
          on an exchange,
          issues new shares to the investors or the existing shareholders, usually the promoters."
          />
          <SqureCard
            label="Private Equity"
            image="./icon33.png"
            description="In the field of finance, private equity (PE) is capital stock
            in a private company that does not offer stock to the general public"
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: ["column", null, "row"],
            justifyContent: "center", // Center horizontally
            marginLeft: { xs: "1%", md: "10%", lg: "15%" },
            marginRight: { xs: "1%", md: "10%", lg: "20%" },
            paddingTop: { xs: "8%", md: "3%", lg: "2%" },
            gap: "2rem",

            height: "50%"
          }}
        >
          <SqureCard
            label="Mergers & Acquistion"
            image="./icon32.png"
            description="Mergers and acquisitions are business transactions in which the ownership
            of companies, business organizations, or their operating units
            are transferred to or consolidated with another company or business organization."
          />
          <SqureCard
            label="Investment Advisory"
            image="./icon31.png"
            description="An investment advisor is an individual or a
            firm that specializes in advising clients on
            the buying and selling of securities,
            in exchange for a fee."
          />
        </Box>
      </Box>
      {/* <Box
        sx={{
          width: "100%",
          height: "50%",
          backgroundImage: 'url("/image64.png")',
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <Box
          sx={{
            width: "50%",
            height: "80vh",
            backgroundImage: 'url("/image63.png")',
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <Button
            disableElevation={true}
            variant="contained"
            sx={{
              marginTop: "50vh",
              marginLeft: "20vh",
              color: "#fff",
              fontSize: "13",
              background: "linear-gradient(104.44deg, #4542fa, #0400ff)",
              borderRadius: "30px",
              "&:hover": {
                background: "linear-gradient(104.44deg, #4542fa, #0400ff)"
              },
              width: 167,
              height: 43
            }}
          >
            Discover More
          </Button>
        </Box>
      </Box> */}

      <Box
        sx={{
          display: "flex",
          flexDirection: ["column", null, "row"],

          paddingLeft: "10%",
          paddingRight: "10%",
          paddingTop: { xs: "8%", md: "3%", lg: "2%" },

          gap: "8%"
        }}
      >
        <BusinessTeamInvestmentWorkiIcon
          loading="lazy"
          alt=""
          src="/businessteaminvestmentworkingwithcomputerjpg@2x.png"
        />
        <Box
          sx={{
            width: 1,
            height: ["50%", null, 1],
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            gap: "1.7rem",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "2.5vw", lg: "1.5vw" },
              fontWeight: "bold",
              color: "#8E8DFF"
            }}
          >
            Why choose us
          </Typography>

          {/* <Typography
            sx={{
              fontWeight: "bold",
              color: "#6E6CEE",
              fontSize: { xs: "3vw", lg: "1vw" }
            }}
          >
            Informing stakeholders with knowledge <br />
            for informed investment decisions.
          </Typography> */}
          <Typography sx={{ fontSize: { xs: "2vw", lg: "1vw" } }}>
            We at TrustKey believe in empowering our clients with the correct
            knowledge and information to help them make the most profit out of
            their efforts. curae libero quisque.
          </Typography>
          <Divider />
          <Typography
            sx={{
              color: "black",
              fontWeight: "bold",
              fontSize: { xs: "20px", lg: "1.5vw" }
            }}
          >
            What keeps us true to our mission:
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem"
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: { xs: "3vw", lg: "1.2vw" }
                }}
              >
                Honesty
              </Typography>
              <Typography sx={{ fontSize: { xs: "3vw", lg: "1vw" } }}>
                Always presenting honest information and providing the best
                guidance with complete transparency to help them make the right
                decision and put their efforts in the right direction.
              </Typography>
            </Box>
            <Box sx={{ width: "40px" }}></Box>
            <Box>
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: { xs: "3vw", lg: "1.2vw" }
                }}
              >
                Dedication
              </Typography>

              <Typography sx={{ fontSize: { xs: "3vw", lg: "1vw" } }}>
                We love our work and we are committed to providing the best
                services to our clients. We always look for ways to enhance the
                experiences of our customers and provide the best possible
                resources to them.
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: { xs: "3vw", lg: "1.2vw" }
                }}
              >
                Collaboration
              </Typography>
              <Box sx={{ width: "40px" }}></Box>
              <Typography sx={{ fontSize: { xs: "3vw", lg: "1vw" } }}>
                Collaboration can create wonders and we are a firm believer of
                this fact. We always look for fruitful collaboration, working as
                an extended team of the client and staying close to them
                throughout the journey.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <MyCarousel />
      </Box> */}
      {/* <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Typography variant="h6" sx={{ color: "#6D6CEE" }}>
          Article
        </Typography>

        <Typography
          sx={{ color: "#6D6CEE", fontWeight: "bold", marginTop: "20px" }}
          variant="h3"
        >
          News & Blogs{" "}
        </Typography>
        <Box
          sx={{
            width: "85%",
            height: "70vh",
            backgroundImage: 'url("/image81.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            marginTop: "40px"
          }}
        ></Box>
      </Box> */}
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

export default HomeScreen;
