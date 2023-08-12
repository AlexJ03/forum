import { Box, Typography } from "@mui/material";
import type { FC } from "react";
import { formatDate, parseDate } from "@utils";
import { useNavigate } from "react-router-dom";
import type { IDiscussion } from "../../../types/entities/discussions";

const QuestionCard: FC<IDiscussion> = ( { name, date, fromUser, category } ) => {
    const navigate = useNavigate();

    return (
        <Box bgcolor="#ccc" px={10} py={5} borderRadius={5}>
            <Typography mb={3} variant="body1">Секция: { category }</Typography>
            <Typography mb={3} variant="h2" fontSize="30px">{ name }</Typography>
            <Typography mb={1} variant="subtitle1">Вопрос задал пользователь: <Typography onClick={() => navigate( `/profile/${fromUser}` )} variant="subtitle1" sx={{ textDecoration: "underline", cursor: "pointer" }}>{ fromUser }</Typography></Typography>
            <Typography mb={1} variant="subtitle2">Дата публикации - { formatDate( parseDate( date ) ) }</Typography>
        </Box>
    );
};

export default QuestionCard;