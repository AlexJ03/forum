import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { database } from "@helpers";

const CategoryController = () => {
    const [category, setCategory] = useState( "" );

    return (
        <>
            <TextField value={category} onChange={e => setCategory( e.target.value )} type="text" placeholder="Название категории" />
            <Button onClick={() => database.categories.createCategory( category )}>Создать</Button>
        </>
    );
};

export default CategoryController;