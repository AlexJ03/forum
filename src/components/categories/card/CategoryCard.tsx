import type { FC } from "react";
import type { ICategories } from "@types";
import { Avatar, Grid, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { categoriesImages } from "@data";

const CategoryCard: FC<ICategories> = ( { category } ) => {
    const navigate = useNavigate();

    return (
        <Grid item xs={12} md={6} lg={4}>
            <ListItemButton sx={{ background: "#e7e7e7", borderRadius: 5, transition: "300ms", ":hover": { background: "#d3d3d3", transform: "translate(0, -10px)" } }} onClick={() => navigate( `/categories/${category.name}` )} component="a" key={ category.name }>
                <ListItemAvatar>
                    <Avatar sx={{ width: "50px", height: "50px" }} alt={categoriesImages[category.name]} src={categoriesImages[category.name]} />
                </ListItemAvatar>
                <ListItemText sx={{ textAlign: "center" }} primary={ category.name } />
            </ListItemButton>
        </Grid>
    );
};

export default CategoryCard;