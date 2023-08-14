import { Box, List, ListItemButton, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import mobx from "@mobx";
import type { IDiscussion } from "@types";

const DiscussionsMap = ( { name }: Record<string, string> ) => {
    const questions = mobx.discussions.getDiscussions() && mobx.discussions.getDiscussions().filter( ( item: IDiscussion ) => item.category === name );
    const navigate = useNavigate();

    return (
        <Box sx={{ width: "100%" }}>
            <List>
                { questions && questions.map( ( item: IDiscussion ) => (
                    <ListItemButton onClick={() => navigate( `/discussions/${item.name}` )} component="a" key={item?.name} sx={{ marginBottom: "20px", background: "#e3e3e3", borderRadius: 5 }}>
                        <ListItemText sx={{ textAlign: "center" }} primary={ item?.name } />
                    </ListItemButton>
                ) ) }
            </List>
        </Box>
    );
};

export default DiscussionsMap;