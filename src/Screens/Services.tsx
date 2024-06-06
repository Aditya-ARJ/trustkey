import React from "react";
import CustomAppBar from "../Component/CustomAppBar";
import { Box, Divider, Typography } from "@mui/material";
import styled from "styled-components";
import BottomBar from "../Component/BottomBar";

// Define functional component
const Services: React.FC = () => {
  const bigHeading = { xs: "20px", lg: "2.2vw" };
  const mediumHeading = { xs: "15px", lg: "1.5vw" };
  const smallHeading = { xs: "9px", lg: "1.1vw" };
  const smallHeading1 = { xs: "7px", lg: "1vw" };

  const descriptionfont1 = { xs: "5px", lg: "0.8vw" };

  const descriptionFont = { xs: "10px", lg: "1vw" };
  const BusinessTeamInvestmentWorkiIcon = styled.img`
    border-radius: 15px;
    padding-left: 15%;
    padding-right: 5%;

    @media (min-width: 376px) {
      /* Adjust height for small devices (sm) */

      height: 120px;
    }

    @media (min-width: 768px) {
      /* Adjust height for medium devices (md) */

      height: 250px;
    }

    @media (min-width: 992px) {
      /* Adjust height for large devices (lg) */

      height: 350px;
    }
  `;
  return (
    <div>
      <CustomAppBar name="services" />
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
          Services
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
      {/* <Box
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
                        fontSize: bigHeading
                    }}
                >
                    Services we offer


                    <span style={{ color: "black", fontWeight: "600",fontSize:bigHeading }}>
                        <br /> at Trust Key Capital
                    </span>
                </Typography>
            </Box>
        </Box> */}
      <Box sx={{ marginTop: "5%" }}>
        <BusinessTeamInvestmentWorkiIcon loading="lazy" alt="" src="/ipo.png" />
        <Box sx={{ width: { xs: "80%", lg: "50%" }, paddingLeft: "10%" }}>
          <Typography
            sx={{
              fontSize: smallHeading
            }}
          >
            We provide end-to-end services regarding your public issues, helping
            you introduce your Initial Public Offering (IPO). We provide you
            with complete assistance to seamlessly navigate through the complex
            process involved in equity expansion through IPO. Our expert team is
            there to help you design the strategies for your public issue,
            define the right worth of your equity shares, raise capital,
            maintain compliance with all the regulatory norms, handle investor
            relations, and market your public issue effectively. We also help
            you with post-IPO assistance to ensure your stabilization in the
            market.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          marginLeft: "10%",
          marginRight: "10%",
          marginTop: "5%",
          backgroundColor: "black"
        }}
      >
        <Divider style={{ borderWidth: "3px" }} />
      </Box>
      <Box sx={{ marginTop: "5%" }}>
        <BusinessTeamInvestmentWorkiIcon
          loading="lazy"
          alt=""
          src="/merge.png"
        />
        <Box sx={{ width: { xs: "80%", lg: "50%" }, paddingLeft: "10%" }}>
          <Typography
            sx={{
              fontSize: smallHeading
            }}
          >
            Define potential targets, tackle complex negotiations with
            confidence, and manage regulatory approvals and compliances with
            confidence while undergoing any mergers or acquisitions. We provide
            complete assistance while helping you formulate the right strategies
            and define the suitable valuation for you and your target companies
            by deploying the right financial modeling methods, to execute your
            mergers and acquisitions with perfection.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          marginLeft: "10%",
          marginRight: "10%",
          marginTop: "5%",
          backgroundColor: "black"
        }}
      >
        <Divider style={{ borderWidth: "3px" }} />
      </Box>
      <Box sx={{ marginTop: "5%" }}>
        <BusinessTeamInvestmentWorkiIcon
          loading="lazy"
          alt=""
          src="/investment.png"
        />
        <Box sx={{ width: { xs: "80%", lg: "50%" }, paddingLeft: "10%" }}>
          <Typography
            sx={{
              fontSize: smallHeading
            }}
          >
            Get professional guidance and make your financial decisions with
            research-backed strategies regarding your investments. Effectively
            manage your wealth and grow your portfolio to extract the maximum
            returns.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          marginLeft: "10%",
          marginRight: "10%",
          marginTop: "5%",
          backgroundColor: "black"
        }}
      >
        <Divider style={{ borderWidth: "3px" }} />
      </Box>
      <Box sx={{ marginTop: "5%" }}>
        <BusinessTeamInvestmentWorkiIcon
          loading="lazy"
          alt=""
          src="/equity.png"
        />
        <Box sx={{ width: { xs: "80%", lg: "50%" }, paddingLeft: "10%" }}>
          <Typography
            sx={{
              fontSize: smallHeading
            }}
          >
            Raise capital and scale your organization with the help of our
            private equity solutions. Define the right investment strategy to be
            presented in front of investors to drive the maximum value out of
            your private equity offerings. Expertly tackle the legal,
            operational, and technical challenges with utmost seamlessness.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          marginLeft: "10%",
          marginRight: "10%",
          marginTop: "5%",
          backgroundColor: "black"
        }}
      >
        <Divider style={{ borderWidth: "3px" }} />
      </Box>
      <Box sx={{ marginTop: "5%" }}>
        <BusinessTeamInvestmentWorkiIcon loading="lazy" alt="" src="/fpo.png" />
        <Box
          sx={{
            width: { xs: "80%", lg: "50%" },
            paddingLeft: "10%",
            paddingBottom: "5%"
          }}
        >
          <Typography
            sx={{
              fontSize: smallHeading
            }}
          >
            Get expert services to issue your Follow-on Public Offerings (FPOs)
            and make your FPOs risk-proof with our services. Achieve your
            strategic goals with successful FPO strategies generated with an
            expert understanding of the market dynamics. We help you introduce
            your FPOs without hindering your stock prices or adversely affecting
            the market perception of your business We help you price your equity
            shares at the right amount so that you can clearly reflect on the
            current and future potential of your organization in the financial
            arena.
          </Typography>
        </Box>
      </Box>

      <BottomBar />
    </div>
  );
};

export default Services;
