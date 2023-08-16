import { Box, Typography } from "@mui/material";
import type { FC } from "react";
import type { IDiscussion } from "@types";
import { formatDate, parseDate } from "@utils";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { database } from "@helpers";

const QuestionCard: FC<IDiscussion> = ( { name, date, fromUser, category } ) => {
    const navigate = useNavigate();

    const [userName, setUserName] = useState<string | undefined>( undefined );

    useEffect( () => {
        database.users.getUserName( fromUser ).then( ( data: string ) => setUserName( data ) );
    }, [fromUser] );

    return (
        <Box bgcolor="#ccc" px={7} py={3} borderRadius={5} width="100%" minHeight="300px" mb={7}>
            <Box mb={1}>
                <Typography variant="subtitle2">Секция: { category.toLowerCase() }</Typography>
            </Box>

            <Box mb={2} display="flex" justifyContent="space-between" alignItems="center">
                <Typography onClick={() => navigate( `/profile/${fromUser}` )} variant="subtitle1" sx={{ textDecoration: "underline", cursor: "pointer" }}>{ userName || fromUser }</Typography>
                <Typography variant="subtitle1">{ formatDate( parseDate( date ) ) }</Typography>
            </Box>

            <Typography variant="h2" fontSize="23px">{ name }</Typography>
        </Box>
    );
};

export default QuestionCard;