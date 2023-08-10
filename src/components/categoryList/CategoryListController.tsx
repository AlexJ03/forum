import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { database } from "../../helpers/database";

const CategoryListController = ( { name }: any ) => {
    const [discussion, setDiscussion] = useState( "" );

    return (
        <>
            <TextField value={discussion} onChange={e => setDiscussion( e.target.value )} type="text" placeholder="Сформулируйте вопрос" />
            <Button onClick={() => {
                database.createDiscussionInCategories( name, discussion );
                database.createDiscussion( name, discussion );
            }}>Создать обсуждение</Button>
        </>
    );
};

export default CategoryListController;