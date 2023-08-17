import { Box, List } from "@mui/material";
import type { FC } from "react";
import type { IAnswer, IAnswers } from "@types";
import { AnswerCard } from "@components-answers";

const ProfileAnswersMap: FC<IAnswers> = ( { answers } ) => {

    return (
        <Box width="100%">
            <List>
                { answers && answers.map( ( item: IAnswer ) => <AnswerCard key={item.name} name={item.name} date={item.date} fromUser={item.fromUser} discussion={item.discussion} relocate={true} /> ) }
            </List>
        </Box>
    );
};

export default ProfileAnswersMap;