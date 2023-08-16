import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import type { FC } from "react";
import type { IDiscussion } from "@types";
import { formatDate, parseDate } from "@utils";
import { useEffect, useState } from "react";
import { database } from "@helpers";

const DiscussionCard: FC<Omit<IDiscussion, "answers" | "category">> = ( { name, date, fromUser } ) => {
    const navigate = useNavigate();

    const [userName, setUserName] = useState<string | undefined>( undefined );

    useEffect( () => {
        database.users.getUserName( fromUser ).then( ( data: string ) => setUserName( data ) );
    } );

    return (
        <Box sx={{ marginBottom: "30px", cursor: "pointer", background: "#e3e3e3", borderRadius: 5, width: "100%", minHeight: "200px", px: 5, py: 3, transition: "300ms", ":hover": { background: "#d3d3d3", transform: "translate(0, -10px)" } }} onClick={() => navigate( `/discussions/${name}` )} key={name}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="subtitle1" fontSize="15px">{ userName || fromUser }</Typography>
                <Typography variant="subtitle1" fontSize="15px">{formatDate( parseDate( date ) )}</Typography>
            </Box>
            <Typography variant="h2" fontSize="20px">{name}</Typography>
        </Box>
    );
};

export default DiscussionCard;