import { Box, List, ListItemButton, ListItemText } from "@mui/material";
import { categories } from "../../mobx/categories";
import { useNavigate } from "react-router-dom";

const CategoriesMap = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ width: "100%" }}>
            <List>
                { categories.getCategories() && categories.getCategories().map( ( item: any ) => (
                    <ListItemButton onClick={() => navigate( `/categories/${item.name}` )} component="a" key={item?.name} sx={{ marginBottom: "20px", background: "#e3e3e3", borderRadius: 5 }}>
                        <ListItemText sx={{ textAlign: "center" }} primary={ item?.name } />
                    </ListItemButton>
                ) ) }
            </List>
        </Box>
    );
};

export default CategoriesMap;