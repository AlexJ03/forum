import { Box, List } from "@mui/material";
import type { FC } from "react";
import type { IDiscussion, IDiscussions } from "@types";
import { DiscussionCard } from "@components-discussions";

const ProfileDiscussionsMap: FC<IDiscussions> = ( { discussions } ) => {

    return (
        <Box width="100%">
            <List>
                { discussions && discussions.map( ( item: IDiscussion ) => <DiscussionCard key={item.name} name={item.name} date={item.date} fromUser={item.fromUser} /> ) }
            </List>
        </Box>
    );
};

export default ProfileDiscussionsMap;