import {
    Box,
    Button,
    Card,
    Grid,
    InputLabel,
    MenuItem,
    TextField,
    Typography
} from "@mui/material";
import { useRef, useState } from "react";
import CustomAppBar from "../Component/CustomAppBar";
import BottomBar from "../Component/BottomBar";
import { styled } from "styled-components";
interface Props {
    // Define props interface here
}
const AddAritcle: React.FC<Props> = (props) => {
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
    const [category, setCategory] = useState<string>("news"); // Default category
    const [image, setImage] = useState<string>(""); // Image URL state
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCategory(event.target.value);
    };
    const [selectedImage, setSelectedImage] = useState("");

    // Function to handle image selection
    const handleImageChange = (e: any) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };
    // Function to trigger file input click

    return (
        <div style={{ width: "100%", }}>
            <CustomAppBar name="addArticle" />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
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
                            Add Article
                        </Typography>

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
                                    Title
                                </InputLabel>
                                <TextField
                                    fullWidth
                                    size="small"
                                    id="outlined-size-small"
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            color: "#000",
                                            fontFamily: "Arial",
                                            fontWeight: "bold",
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "white",
                                                borderWidth: "2px"
                                            }
                                        },
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
                                    Author
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
                                    Category
                                </InputLabel>
                                <TextField
                                    select
                                    fullWidth
                                    value={category}
                                    onChange={handleCategoryChange}
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
                                >
                                    <MenuItem value="news">News</MenuItem>
                                    <MenuItem value="article">Article</MenuItem>
                                </TextField>
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
                                    Description
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
                            </Grid>
                        </Grid>

                        <Box></Box>
                    </Card>
                </Box>
                <Box  component='button' onClick={handleImageChange} sx={{
                    width: "60vw", height: {xs:"40vh",lg:"70vh"},marginTop:"5%",marginBottom:"5%",
                    backgroundColor: "whitesmoke", display: "flex",flexDirection:"column",
                    alignItems: "center",justifyContent:"center"
                }}>
                    <input style={{fontSize:"0.8vw"}} type="file" accept="image/*" onChange={handleImageChange} />
                    {selectedImage && (
                        <div>
                            <h2>Preview:</h2>
                            <Box sx={{}}>
                            <img
                                src={selectedImage}
                                alt="Selected"
                                style={{ maxWidth: "100%", maxHeight: "300px" }}
                            />
                           </Box>
                        </div>
                    )}
                </Box>
             
            </Box>
            <BottomBar />
        </div>
    );
};

export default AddAritcle;
