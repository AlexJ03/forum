import { Box, Grid } from "@mui/material";
import mobx from "@mobx";
import type { ICategory } from "@types";
import { CategoryCard } from "@components-categories";

const CategoriesMap = () => {

    return (
        <Box sx={{ width: "100%" }}>
            <Grid container spacing={8}>
                { mobx.categories.getCategories() && mobx.categories.getCategories().map( ( category: ICategory ) => <CategoryCard key={category.name} category={category} /> ) }
            </Grid>
        </Box>
    );
};

export default CategoriesMap;