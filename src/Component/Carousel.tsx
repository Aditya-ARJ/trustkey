import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const MyCarousel: React.FC = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: any) => {
        setIndex(selectedIndex);
    };

    const navigatePrevious = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
    };

    const navigateNext = () => {
        setIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    };

    return (
        <div>
            <div className="position-relative">
                <Carousel variant="dark"
                    style={{ display: "flex", justifyContent: "center" }}
                    activeIndex={index}
                    onSelect={handleSelect}
                    controls={false}
                >
                    <Carousel.Item>
                        <Box
                            sx={{
                                width: "1400px",
                                height: "800px",
                                // backgroundColor: "green",
                                justifyContent: "center",
                                display: "flex",
                                alignItems: "center"
                            }}
                        >
                            <Box
                                sx={{
                                    width: "450px",
                                    height: "475px",
                                    backgroundImage: "url(./c1.png)",
                                    backgroundSize: "cover", // Cover the entire box with the background image
                                    backgroundPosition: "center",
                                    display: "flex",
                                    // backgroundColor: "green",
                                    flexDirection: "column",
                                    alignItems: "center"
                                }}
                            >
                                <Avatar
                                    alt="Icon"
                                    src="/c4.png"
                                    sx={{ width: 94, height: 94 }}
                                />
                                <Typography
                                    variant="body1"
                                    sx={{ margin: "10px", color: "#525252", fontWeight: "bold" }}
                                >
                                    Hannah Schmitt
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: "#525252", }}
                                >
                                    Lead designer
                                </Typography>
                                <Typography
                                    variant="h4"
                                    sx={{ color: "#6D6CEE", fontWeight: "bold", }}
                                >‘‘


                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: "#525252", marginTop: "20px", marginLeft: "70px", marginRight: "70px", textAlign: "center" }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus
                                    venenatis felis id augue sit cursus pellentesque enim
                                </Typography>

                            </Box>

                            <Box
                                sx={{
                                    width: "450px",
                                    height: "550px",
                                    marginRight: "10px",
                                    marginLeft: "10px",
                                    backgroundImage: "url(./c2.png)",
                                    backgroundSize: "cover", // Cover the entire box with the background image
                                    backgroundPosition: "center",
                                    // backgroundColor: "red",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center"
                                }}
                            >
                                <Avatar
                                    alt="Icon"
                                    src="/c5.png"
                                    sx={{ width: 104, height: 104 }}
                                />
                                <Typography
                                    variant="h6"
                                    sx={{ margin: "10px", color: "#525252", fontWeight: "bold" }}
                                >
                                    Hannah Schmitt
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: "#525252", }}
                                >
                                    Lead designer
                                </Typography>
                                <Typography
                                    variant="h2"
                                    sx={{ color: "#6D6CEE", fontWeight: "bold", }}
                                >‘‘


                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{ color: "#525252", marginTop: "20px", textAlign: "center" }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus
                                    venenatis felis id augue sit cursus pellentesque enim
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    width: "450px",
                                    height: "500px",
                                    backgroundImage: "url(./c3.png)",
                                    backgroundSize: "cover", // Cover the entire box with the background image
                                    backgroundPosition: "center",

                                    display: "flex",
                                    // backgroundColor: "green",
                                    flexDirection: "column",
                                    alignItems: "center"
                                }}
                            >
                                <Avatar
                                    alt="Icon"
                                    src="/c4.png"
                                    sx={{ width: 94, height: 94 }}
                                />
                                <Typography
                                    variant="body1"
                                    sx={{ margin: "10px", color: "#525252", fontWeight: "bold" }}
                                >
                                    Hannah Schmitt
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: "#525252", }}
                                >
                                    Lead designer
                                </Typography>
                                <Typography
                                    variant="h4"
                                    sx={{ color: "#6D6CEE", fontWeight: "bold", }}
                                >‘‘


                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: "#525252", marginTop: "20px", marginLeft: "70px", marginRight: "70px", textAlign: "center" }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus
                                    venenatis felis id augue sit cursus pellentesque enim
                                </Typography>
                            </Box>
                        </Box>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Box
                            sx={{
                                width: "1400px",
                                height: "800px",
                                // backgroundColor: "green",
                                justifyContent: "center",
                                display: "flex",
                                alignItems: "center"
                            }}
                        >
                            <Box
                                sx={{
                                    width: "450px",
                                    height: "475px",
                                    backgroundImage: "url(./c1.png)",
                                    backgroundSize: "cover", // Cover the entire box with the background image
                                    backgroundPosition: "center",
                                    display: "flex",
                                    // backgroundColor: "green",
                                    flexDirection: "column",
                                    alignItems: "center"
                                }}
                            >
                                <Avatar
                                    alt="Icon"
                                    src="/c4.png"
                                    sx={{ width: 94, height: 94 }}
                                />
                                <Typography
                                    variant="body1"
                                    sx={{ margin: "10px", color: "#525252", fontWeight: "bold" }}
                                >
                                    Hannah Schmitt
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: "#525252", }}
                                >
                                    Lead designer
                                </Typography>
                                <Typography
                                    variant="h4"
                                    sx={{ color: "#6D6CEE", fontWeight: "bold", }}
                                >‘‘


                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: "#525252", marginTop: "20px", marginLeft: "70px", marginRight: "70px", textAlign: "center" }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus
                                    venenatis felis id augue sit cursus pellentesque enim
                                </Typography>

                            </Box>

                            <Box
                                sx={{
                                    width: "450px",
                                    height: "550px",
                                    marginRight: "10px",
                                    marginLeft: "10px",
                                    backgroundImage: "url(./c2.png)",
                                    backgroundSize: "cover", // Cover the entire box with the background image
                                    backgroundPosition: "center",
                                    // backgroundColor: "red",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center"
                                }}
                            >
                                <Avatar
                                    alt="Icon"
                                    src="/c5.png"
                                    sx={{ width: 104, height: 104 }}
                                />
                                <Typography
                                    variant="h6"
                                    sx={{ margin: "10px", color: "#525252", fontWeight: "bold" }}
                                >
                                    Hannah Schmitt
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: "#525252", }}
                                >
                                    Lead designer
                                </Typography>
                                <Typography
                                    variant="h2"
                                    sx={{ color: "#6D6CEE", fontWeight: "bold", }}
                                >‘‘


                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{ color: "#525252", marginTop: "20px", textAlign: "center" }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus
                                    venenatis felis id augue sit cursus pellentesque enim
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    width: "450px",
                                    height: "500px",
                                    backgroundImage: "url(./c3.png)",
                                    backgroundSize: "cover", // Cover the entire box with the background image
                                    backgroundPosition: "center",

                                    display: "flex",
                                    // backgroundColor: "green",
                                    flexDirection: "column",
                                    alignItems: "center"
                                }}
                            >
                                <Avatar
                                    alt="Icon"
                                    src="/c4.png"
                                    sx={{ width: 94, height: 94 }}
                                />
                                <Typography
                                    variant="body1"
                                    sx={{ margin: "10px", color: "#525252", fontWeight: "bold" }}
                                >
                                    Hannah Schmitt
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: "#525252", }}
                                >
                                    Lead designer
                                </Typography>
                                <Typography
                                    variant="h4"
                                    sx={{ color: "#6D6CEE", fontWeight: "bold", }}
                                >‘‘


                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: "#525252", marginTop: "20px", marginLeft: "70px", marginRight: "70px", textAlign: "center" }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus
                                    venenatis felis id augue sit cursus pellentesque enim
                                </Typography>
                            </Box>
                        </Box>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Box
                            sx={{
                                width: "1400px",
                                height: "800px",
                                // backgroundColor: "green",
                                justifyContent: "center",
                                display: "flex",
                                alignItems: "center"
                            }}
                        >
                            <Box
                                sx={{
                                    width: "450px",
                                    height: "475px",
                                    backgroundImage: "url(./c1.png)",
                                    backgroundSize: "cover", // Cover the entire box with the background image
                                    backgroundPosition: "center",
                                    display: "flex",
                                    // backgroundColor: "green",
                                    flexDirection: "column",
                                    alignItems: "center"
                                }}
                            >
                                <Avatar
                                    alt="Icon"
                                    src="/c4.png"
                                    sx={{ width: 94, height: 94 }}
                                />
                                <Typography
                                    variant="body1"
                                    sx={{ margin: "10px", color: "#525252", fontWeight: "bold" }}
                                >
                                    Hannah Schmitt
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: "#525252", }}
                                >
                                    Lead designer
                                </Typography>
                                <Typography
                                    variant="h4"
                                    sx={{ color: "#6D6CEE", fontWeight: "bold", }}
                                >‘‘


                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: "#525252", marginTop: "20px", marginLeft: "70px", marginRight: "70px", textAlign: "center" }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus
                                    venenatis felis id augue sit cursus pellentesque enim
                                </Typography>

                            </Box>

                            <Box
                                sx={{
                                    width: "450px",
                                    height: "550px",
                                    marginRight: "10px",
                                    marginLeft: "10px",
                                    backgroundImage: "url(./c2.png)",
                                    backgroundSize: "cover", // Cover the entire box with the background image
                                    backgroundPosition: "center",
                                    // backgroundColor: "red",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center"
                                }}
                            >
                                <Avatar
                                    alt="Icon"
                                    src="/c5.png"
                                    sx={{ width: 104, height: 104 }}
                                />
                                <Typography
                                    variant="h6"
                                    sx={{ margin: "10px", color: "#525252", fontWeight: "bold" }}
                                >
                                    Hannah Schmitt
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: "#525252", }}
                                >
                                    Lead designer
                                </Typography>
                                <Typography
                                    variant="h2"
                                    sx={{ color: "#6D6CEE", fontWeight: "bold", }}
                                >‘‘


                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{ color: "#525252", marginTop: "20px", textAlign: "center" }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus
                                    venenatis felis id augue sit cursus pellentesque enim
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    width: "450px",
                                    height: "500px",
                                    backgroundImage: "url(./c3.png)",
                                    backgroundSize: "cover", // Cover the entire box with the background image
                                    backgroundPosition: "center",

                                    display: "flex",
                                    // backgroundColor: "green",
                                    flexDirection: "column",
                                    alignItems: "center"
                                }}
                            >
                                <Avatar
                                    alt="Icon"
                                    src="/c4.png"
                                    sx={{ width: 94, height: 94 }}
                                />
                                <Typography
                                    variant="body1"
                                    sx={{ margin: "10px", color: "#525252", fontWeight: "bold" }}
                                >
                                    Hannah Schmitt
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: "#525252", }}
                                >
                                    Lead designer
                                </Typography>
                                <Typography
                                    variant="h4"
                                    sx={{ color: "#6D6CEE", fontWeight: "bold", }}
                                >‘‘


                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: "#525252", marginTop: "20px", marginLeft: "70px", marginRight: "70px", textAlign: "center" }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus
                                    venenatis felis id augue sit cursus pellentesque enim
                                </Typography>
                            </Box>
                        </Box>
                    </Carousel.Item>
                </Carousel>
                <Box
                    className="position-absolute top-0 start-50 translate-middle-x "
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100%",
                        justifyContent: "center"

                    }}
                >
                    <IconButton
                        size="large"
                        sx={{ color: "black" }}
                        onClick={navigatePrevious}
                    >
                        <ArrowBackIosNewIcon sx={{ fontSize: 32 }} />
                    </IconButton>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: "700",
                            color: "#6D6CEE",
                            marginLeft: "10%",
                            marginRight: "10%"
                        }}
                    >
                        What Our Clients Say About Us
                    </Typography>
                    <IconButton
                        size="large"
                        sx={{ color: "black" }}
                        onClick={navigateNext}
                    >
                        <ArrowForwardIosIcon sx={{ fontSize: 32 }} />
                    </IconButton>
                </Box>
            </div>
        </div>
    );
};

export default MyCarousel;
