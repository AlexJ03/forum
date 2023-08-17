import { Box, Typography } from "@mui/material";
import { formatDate, parseDate } from "@utils";
import type { FC } from "react";
import type { IAnswer } from "@types";
import { useNavigate } from "react-router-dom";

const AnswerCard: FC<Omit<IAnswer, "discussion">> = ( { name, fromUser, date } ) => {
    const navigate = useNavigate();

    return (
        <Box sx={{ marginBottom: "30px", background: "#e3e3e3", borderRadius: 5, width: "100%", minHeight: "200px", px: 5, py: 3, transition: "300ms", ":hover": { background: "#d3d3d3" } }} key={name}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="subtitle1" fontSize="15px" onClick={() => navigate( `/profile/${fromUser.token}` )} sx={{ textDecoration: "underline", cursor: "pointer" }}>{fromUser?.name || fromUser.token}</Typography>
                <Typography variant="subtitle1" fontSize="15px">{formatDate( parseDate( date ) )}</Typography>
            </Box>
            <Typography variant="h2" fontSize="20px">{name}</Typography>
        </Box>
    );
};

export default AnswerCard;