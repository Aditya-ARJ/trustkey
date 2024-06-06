import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import CustomAppBar from "../Component/CustomAppBar";
import { styled } from "styled-components";
import BottomBar from "../Component/BottomBar";

const OurClient: React.FC = () => {
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
      height: 100px;
      width: 100px;
    }

    @media (min-width: 668px) {
      /* Adjust height for medium devices (md) */
      height: 150px;
    }

    @media (min-width: 992px) {
      /* Adjust height for large devices (lg) */
      height: 250px;
      width: 300px;
    }
  `;
  return (
    <Box>
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
          Our Clients
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: { xs: "1rem", lg: "1.5rem" }
          }}
        >
          Service Beyond Measure.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Center vertically
          marginTop: "2%",

          gap: "1rem",
          paddingInline: "10%"
        }}
      >
        <BusinessTeamInvestmentWorkiIcon
          loading="lazy"
          alt=""
          src="/surenet.png"
        />
        <Typography sx={{ fontSize: descriptionFont }}>
          <span style={{ fontWeight: "600" }}>SUNREST LIFESCIENCE LIMITED</span>{" "}
          being leading pharmaceutical company based in Ahmedabad, Gujarat in
          India, serving Healthcare needs for more than 5 years and keep
          enhancing and raising our standards by measuring our business,
          operations and work ethics alongside the challenges of the healthcare
          industry. Also provide excellent marketing support to our business
          associates across the country. Our team is dedicated and works
          flexibly to deliver the finest services for the cause of life. With
          our excellence in services, high-quality standards and diverse
          marketing strategies, we assure you that be a great business leader in
          your territory. At SUNREST LIFESCIENCE LIMITED, we focus exclusively
          on all healthcare segments including Anti-Bacterials, Antibiotics,
          Anti-Amoeibics, Anti- Fungals, Analgesic, Neuropathy,
          Anti-Hypertension, Anti-Inflammatory, Anti-Ulcerants, Anti-Cold,
          Anti-Cough, Anti-Allergics, Nutritionals, Ayurvedic and Cosmetics.
        </Typography>
        <Divider
          sx={{ width: "100%", backgroundColor: "black", marginTop: "5px" }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Center vertically
          marginTop: "2%",

          gap: "1rem",
          paddingInline: "10%"
        }}
      >
        <BusinessTeamInvestmentWorkiIcon
          loading="lazy"
          alt=""
          src="/vardha.png"
        />
        <Typography sx={{ fontSize: descriptionFont }}>
          <span style={{ fontWeight: "600" }}>Vardaan Biotech Ltd.</span>
          is among the top ten ‘Seed Processing Unit’ in Madhya Pradesh with a
          turnover of over Rs. 130 Crore. The Quality seed of the unit has
          formed as a brand image and gained popularity among the famers and has
          became a symbol of profitable farming business.
        </Typography>
        <Divider
          sx={{ width: "100%", backgroundColor: "black", marginTop: "5px" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Center vertically
          marginTop: "2%",

          gap: "1rem",
          paddingInline: "10%"
        }}
      >
        <BusinessTeamInvestmentWorkiIcon
          loading="lazy"
          alt=""
          src="/balaji.png"
        />
        <Typography sx={{ fontSize: descriptionFont }}>
          <span style={{ fontWeight: "600" }}>
            {" "}
            Shree Tirupati Balajee FIBC Ltd
          </span>{" "}
          is one of the strongest manufacturers and suppliers of FIBC in the
          Indian domestic market and one of the fastest growing exporters and
          product range includes various types of PP woven Products namely: PP
          woven sacks (Laminated and Un-laminated, BOPP coated, etc.) PP Fabric
          (Tubular/ Flat) FIBCs (Tubular, Tubular-coated, U-panel and 4-panel) –
          Builder Bags, etc. Webbing Narrow Woven Belts Tarpaulins Established
          in 2009, Shree Tirupati Balajee FIBC Ltd. uses state of the art Plant
          and Machineries for top rated finished products. Its production
          facilities are ISO 9001:2000 and ISO 22000:2005 certified. The company
          has made brisk growth in recent months and today we have strong
          presence in markets of Europe, Australia and Africa. Our product
          quality is at par with the international standards and we try to excel
          in all the fields. Naturally, the advantage is passed on to our
          customers. A better design, better attitude towards production
          process, timely dispatch, good packing and a responsive approach.
        </Typography>
        <Divider
          sx={{ width: "100%", backgroundColor: "black", marginTop: "5px" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Center vertically
          marginTop: "2%",

          gap: "1rem",
          paddingInline: "10%"
        }}
      >
        <BusinessTeamInvestmentWorkiIcon
          loading="lazy"
          alt=""
          src="/sadhav.png"
        />
        <Typography sx={{ fontSize: descriptionFont }}>
          <span style={{ fontWeight: "600" }}> Sadhav Shipping Limited</span>{" "}
          was incorporated in 1996 with the objective of
          owning & operating quality marine assets to service our clients. Today
          Sadhav owns and operates more than 25 vessels in various sectors of
          the maritime trade in India. With modern DP Offshore Fleet and a
          dedicated onboard and shore crew we provide one of the best services
          to our clients. We are the first company to set up and operate India’s
          1st Port Based Tier 1 Oil Spill Response Centre in Mumbai and are now
          operating in most of the Major Ports in India. Our barges plying in
          Coastal & Inland Waterways operate for transportation or lighterage of
          cargo. We operate & manage Port crafts and also provide high speed
          security boats for patrolling services, which constitute our Port
          Services operations. With professionals at the helm of affairs in the
          company having more than 150 years of sea time between them, the core
          strength of operations comes from diligence and unwavering quest for
          quality services
        </Typography>
        <Divider
          sx={{
            width: "100%",
            backgroundColor: "black",
            marginTop: "5px",
            marginBottom: "5px"
          }}
        />
      </Box>
      <BottomBar />
    </Box>
  );
};

export default OurClient;
