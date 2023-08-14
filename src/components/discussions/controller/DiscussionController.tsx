import { Button, TextField } from "@mui/material";
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
        <>
            <TextField value={discussion} onChange={e => setDiscussion( e.target.value )} type="text" placeholder="Сформулируйте вопрос" />
            <Button onClick={createDiscussion}>Создать обсуждение</Button>
        </>
    );
};

export default DiscussionController;