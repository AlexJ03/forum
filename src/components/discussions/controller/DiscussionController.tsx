import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { database, token } from "@helpers";

const DiscussionController = ( { name }: any ) => {
    const [discussion, setDiscussion] = useState( "" );

    return (
        <>
            <TextField value={discussion} onChange={e => setDiscussion( e.target.value )} type="text" placeholder="Сформулируйте вопрос" />
            <Button onClick={() => {
                database.discussions.createDiscussionInCategories( name, discussion );
                database.discussions.createDiscussion( name, discussion, token.getToken() );
            }}>Создать обсуждение</Button>
        </>
    );
};

export default DiscussionController;