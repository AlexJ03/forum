import { Box } from "@mui/material";
import mobx from "@mobx";
import type { IDiscussion } from "@types";
import { DiscussionCard } from "@components-discussions";
import { observer } from "mobx-react-lite";
import { filterDiscussions } from "../../../utils/filter";
import { Progress } from "../../progress";

const DiscussionsMap = observer( ( { name }: Record<string, string> ) => {
    const questions = name && mobx.discussions.getDiscussions() && filterDiscussions( mobx.discussions.getDiscussions(), name );

    return (
        <>
            {
                questions ? (
                    <Box width="100%">
                        { questions && questions.map( ( discussion : IDiscussion ) => <DiscussionCard key={discussion.name} date={discussion.date} fromUser={discussion.fromUser} name={discussion.name} /> ) }
                    </Box>
                ) : <Progress pt={"20vh"} />
            }
        </>
    );
} );

export default DiscussionsMap;