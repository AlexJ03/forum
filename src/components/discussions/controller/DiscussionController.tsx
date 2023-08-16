import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { database, token } from "@helpers";

const DiscussionController = ( { name }: Record<string, string> ) => {
    const [discussion, setDiscussion] = useState( "" );

    const createDiscussion = async () => {
        await database.discussions.createDiscussionInCategories( name, discussion );
        await database.discussions.createDiscussion( name, discussion, token.getToken() );

        setDiscussion( "" );
    };

    return (
        <Box display="flex" alignItems="center" columnGap={3} width="100%" px={5}>
            <TextField sx={{ width: "80%" }} variant="outlined" value={discussion} onChange={e => setDiscussion( e.target.value )} type="text" placeholder="Сформулируйте вопрос" />
            <Button variant="contained" size="large" onClick={createDiscussion}>Создать</Button>
        </Box>
    );
};

export default DiscussionController;