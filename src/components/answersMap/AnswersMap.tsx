import { Box, List, ListItem, ListItemButton, Typography } from "@mui/material";
import type { IAnswer } from "../../types/answers";
import type { FC } from "react";
import type { IAnswers } from "../../types/answers";
import { formatDate, parseDate } from "../../utils/date";

const AnswersMap: FC<IAnswers> = ( { answers } ) => {

    return (
        <Box sx={{ width: "100%" }}>
            <List>
                { answers && answers.map( ( item: IAnswer ) => (
                    <ListItemButton component="a" key={item?.name} sx={{ marginBottom: "20px", background: "#e3e3e3", borderRadius: 5 }}>
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

export default AnswersMap;
