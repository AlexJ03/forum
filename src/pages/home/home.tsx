import { observer } from "mobx-react-lite";
import { Box, Container } from "@mui/material";
import Nav from "../../components/nav/Nav";
import { useEffect } from "react";
import { database } from "../../helpers/database";
import { userToken } from "../../helpers/auth";
import { userData } from "../../mobx/userData";
import CategoryController from "../../components/categoryController/CategoryController";
import { categories } from "../../mobx/categories";
import CategoriesMap from "../../components/categoriesMap/CategoriesMap";

const Home = observer( () => {

    useEffect( () => {
        const token = userToken.getToken();

        if ( token ) {
            database.getUserData( userToken.getToken() ).then( data => userData.setUser( data ) );

            database.getCategories().then( data => categories.setCategories( data ) );
        }
    }, [userToken.getToken()] );

    return (
        <Container maxWidth="xl" sx={{ paddingTop: "30px" }}>
            <Nav />

            <Box display="flex" justifyContent="center" mt="100px" mb="50px">
                <CategoryController />
            </Box>

            <Box display="flex" justifyContent="center">
                { categories.getCategories() && <CategoriesMap/> }
            </Box>
        </Container>
    );
} );

export default Home;