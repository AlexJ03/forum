import { Box, List, ListItem, ListItemButton, Typography } from "@mui/material";
import { formatDate, parseDate } from "@utils";
import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import type { IAnswer, IAnswers } from "../../../types/database/entities/answers";

const ProfileAnswersMap: FC<IAnswers> = ( { answers } ) => {
    const navigate = useNavigate();

    return (
        <Box sx={{ width: "100%" }}>
            <List>
                { answers && answers.map( ( item: IAnswer ) => (
                    <ListItemButton onClick={() => navigate( `/discussions/${item.discussion}` )} component="a" key={item?.name} sx={{ marginBottom: "20px", background: "#e3e3e3", borderRadius: 5 }}>
                        <ListItem sx={{ columnGap: 5 }}>
                            <Typography variant="h3" fontSize="20px">{ item?.name }</Typography>
                            <Typography variant="subtitle1">{ item?.fromUser }</Typography>
                            <Typography variant="subtitle2">Дата публикации: { formatDate( parseDate( item?.date ) ) }</Typography>
                        </ListItem>
                    </ListItemButton>
                ) ) }
            </List>
        </Box>
    );
};

export default ProfileAnswersMap;