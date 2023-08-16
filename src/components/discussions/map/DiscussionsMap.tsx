import { Box } from "@mui/material";
import mobx from "@mobx";
import type { IDiscussion } from "@types";
import { DiscussionCard } from "@components-discussions";

const DiscussionsMap = ( { name }: Record<string, string> ) => {
    const questions = mobx.discussions.getDiscussions() && mobx.discussions.getDiscussions().filter( ( item: IDiscussion ) => item.category === name );

    return (
        <Box width="100%">
            { questions && questions.map( ( { name, category, date, fromUser, answers } : IDiscussion ) => <DiscussionCard key={name} category={category} date={date} fromUser={fromUser} name={name} answers={answers} /> ) }
        </Box>
    );
};

export default DiscussionsMap;