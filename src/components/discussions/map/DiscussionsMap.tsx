import { Box } from "@mui/material";
import mobx from "@mobx";
import type { IDiscussion } from "@types";
import { DiscussionCard } from "@components-discussions";
import { observer } from "mobx-react-lite";
import { filterDiscussions } from "../../../utils/filter";

const DiscussionsMap = observer( ( { name }: Record<string, string> ) => {
    const questions = name && mobx.discussions.getDiscussions() && filterDiscussions( mobx.discussions.getDiscussions(), name );

    return (
        <Box width="100%">
            { questions && questions.map( ( discussion : IDiscussion ) => <DiscussionCard key={discussion.name} date={discussion.date} fromUser={discussion.fromUser} name={discussion.name} /> ) }
        </Box>
    );
} );

export default DiscussionsMap;