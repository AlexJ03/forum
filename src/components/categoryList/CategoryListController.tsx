import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { database } from "../../helpers/database";
import { userToken } from "../../helpers/auth";

const CategoryListController = ( { name }: any ) => {
    const [discussion, setDiscussion] = useState( "" );

    return (
        <>
            <TextField value={discussion} onChange={e => setDiscussion( e.target.value )} type="text" placeholder="Сформулируйте вопрос" />
            <Button onClick={() => {
                database.createDiscussionInCategories( name, discussion );
                database.createDiscussion( name, discussion, userToken.getToken() );
            }}>Создать обсуждение</Button>
        </>
    );
};

export default CategoryListController;