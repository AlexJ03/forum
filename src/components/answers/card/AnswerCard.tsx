import { Box, Typography } from "@mui/material";
import { formatDate, parseDate } from "@utils";
import type { FC } from "react";
import type { IAnswer } from "@types";
import { useNavigate } from "react-router-dom";
import { encrypt } from "../../../utils/hash";
import type { IWithRelocate } from "@types";

const AnswerCard: FC<IAnswer & IWithRelocate> = ( { name, fromUser, date, discussion: d, relocate } ) => {
    const navigate = useNavigate();

    const discussion = encrypt( d );

    return (
        <Box onClick={relocate ? () => navigate( `/discussions/${discussion}` ) : null} sx={{ marginBottom: "30px", background: "#e3e3e3", borderRadius: 5, width: "100%", minHeight: "200px", px: 5, py: 3, transition: "300ms", ":hover": { background: "#d3d3d3" } }} key={name}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="subtitle1" fontSize="15px" onClick={() => navigate( `/profile/${fromUser.token}` )} sx={{ textDecoration: "underline", cursor: "pointer" }}>{fromUser?.name || fromUser.token}</Typography>
                <Typography variant="subtitle1" fontSize="15px">{formatDate( parseDate( date ) )}</Typography>
            </Box>
            <Typography variant="h2" fontSize="20px">{name}</Typography>
        </Box>
    );
};

export default AnswerCard;