import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { database } from "../../helpers/database";

const CategoryController = () => {
    const [category, setCategory] = useState( "" );

    return (
        <>
            <TextField value={category} onChange={e => setCategory( e.target.value )} type="text" placeholder="Навзвание категории" />
            <Button onClick={() => database.createCategory( category )}>Создать</Button>
        </>
    );
};

export default CategoryController;