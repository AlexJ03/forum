import { Box, Typography } from "@mui/material";
import type { IQuestion } from "../../types/questions";
import type { FC } from "react";
import { formatDate, parseDate } from "../../utils/date";

const QuestionCard: FC<IQuestion> = ( { name, date, fromUser, category } ) => {

    return (
        <Box bgcolor="#ccc" px={10} py={5} borderRadius={5}>
            <Typography mb={3} variant="body1">Секция: { category }</Typography>
            <Typography mb={3} variant="h2" fontSize="30px">{ name }</Typography>
            <Typography mb={1} variant="subtitle1">Вопрос задал пользователь: <Typography variant="subtitle1" sx={{ textDecoration: "underline", cursor: "pointer" }}>{ fromUser }</Typography></Typography>
            <Typography mb={1} variant="subtitle2">Дата публикации - { formatDate( parseDate( date ) ) }</Typography>
        </Box>
    );
};

export default QuestionCard;