import type { FC } from "react";
import { Box, List } from "@mui/material";
import type { IAnswer, IAnswers } from "@types";
import { AnswerCard } from "@components-answers";
import { decrypt } from "../../../utils/hash";

const AnswersMap: FC<IAnswers> = ( { answers } ) => {

    return (
        <Box sx={{ width: "100%" }}>
            <List>
                { answers && answers.map( ( { name, date, fromUser, discussion } : IAnswer ) => <AnswerCard key={name} date={date} fromUser={fromUser} name={name} discussion={discussion} /> ) }
            </List>
        </Box>
    );
};

export default AnswersMap;
