import { Box, List, ListItemButton, ListItemText } from "@mui/material";
import mobx from "@mobx";
import { useNavigate } from "react-router-dom";
import type { ICategory } from "@types";

const CategoriesMap = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ width: "100%" }}>
            <List>
                { mobx.categories.getCategories() && mobx.categories.getCategories().map( ( item: ICategory ) => (
                    <ListItemButton onClick={() => navigate( `/categories/${item.name}` )} component="a" key={item?.name} sx={{ marginBottom: "20px", background: "#e3e3e3", borderRadius: 5 }}>
                        <ListItemText sx={{ textAlign: "center" }} primary={ item?.name } />
                    </ListItemButton>
                ) ) }
            </List>
        </Box>
    );
};

export default CategoriesMap;