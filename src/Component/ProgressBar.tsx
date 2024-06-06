import React, { useEffect, useState } from "react";
import { Box, Typography, colors } from "@mui/material";

// Define styles using makeStyles


interface VisualPart {
    percentage: string;
    color: string;
}

interface ProgressLineProps {
    label: string;
    backgroundColor?: string;
    data: any;
    visualParts?: VisualPart[];
}

const ProgressLine: React.FC<ProgressLineProps> = ({
    label,
    backgroundColor = "#e5e5e5",
data,
    visualParts = [
        {
            percentage: "0%",
            color: "white",
        },
    ],
}) => {
    // const classes = useStyles();

    const [widths, setWidths] = useState<string[]>(
        visualParts.map(() => "0%")
    );

    useEffect(() => {
        requestAnimationFrame(() => {
            setWidths(visualParts.map((item) => item.percentage));
        });
    }, [visualParts]);

    return (
        <>
            <Box sx={{
                marginTop: "15px",
                width: "100%"
            }}>
                <Box sx={{
              display: "flex",
                    flexDirection: "row", justifyContent:"space-between",
                }}>
                    <Typography  sx={{ fontWeight: "bold", fontSize:{xs:"2vw",lg:"1vw"}}}>
                        {label}
                    </Typography>
                    <Typography variant="h6" sx={{fontWeight:"bold",fontSize:{xs:"2vw",lg:"1vw"}}}>{data }</Typography>
                </Box>
                <div
                    style={{
                        backgroundColor, display: "flex",
                        alignItems: "center",
                        height: 10,
                        borderRadius: 10,
                        overflow: "hidden",
                    }}
                >
                    {visualParts.map((item, index) => (
                        <Box
                            key={index}
                            style={{
                                width: widths[index],
                                backgroundColor: item.color,
                                height: "80%",
                                transition: "width 2s",
                            }}
                        />
                    ))}
                </div>
            </Box>
        </>
    );
};

export default ProgressLine;
