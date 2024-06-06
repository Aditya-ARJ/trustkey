import React from 'react';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box } from '@mui/material';

interface Props {

    lable: string;
    description: string;
    image: any;
    lable1: string;

}

const MyCard: React.FC<Props> = ({ image, lable, lable1, description }) => {
    const bigHeading = { xs: "20px", lg: "2.2vw" };
    const mediumHeading = { xs: "15px", lg: "1.5vw" };
    const smallHeading = { xs: "12px", lg: "1.1vw" };
    const smallHeading1 = { xs: "8px", lg: "1vw" };

    const descriptionfont1 = { xs: "7px", lg: "0.8vw" };



    const descriptionFont = { xs: "10px", lg: "1vw" };
    return (
        <Card elevation={5}
            sx={{
                borderRadius: "20px",
                height: { xs: "15vh", lg: "37vh" },
                width: { xs: "30vw", lg: "12vw" },
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap:{xs:"0.5rem",lg:"0.5rem"},
                paddingTop: { xs: "2%", lg: "5%" },
                paddingBottom: { xs: "2%", lg: "5%" }

            }}>
            <Avatar sx={{
                paddingTop: "5%", height: { xs: "5vh", lg: "15vh" },
                width: { xs: "10vw", lg: "15vh" }, border: { xs: "2px solid #6D6CEE", lg: "5px solid #6D6CEE" }
            }}
               ></Avatar>

            <Box sx={{
                height: { xs: "30px", lg: "130px" }, display: "flex",
                flexDirection: "column", alignItems: "center"
            }}>
            <Typography sx={{ fontWeight: 600, fontSize: smallHeading1, }}>
                {lable}</Typography>
            <Typography sx={{
                fontSize: descriptionfont1,
                textAlign: "center",
                // overflow: "hidden",
                // textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical"
            }}>
                {description}
            </Typography>
           </Box>
            <Typography sx={{ fontWeight: 900, fontSize: smallHeading1 }}>
                {lable1}</Typography>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
                <InstagramIcon sx={{ fontSize: "2vw", }} />
                <TwitterIcon sx={{ fontSize: "2vw", }} />
                <LinkedInIcon sx={{ fontSize: "2vw", }} />
            </Box>
        </Card>
    );
}

export default MyCard;