import { observer } from "mobx-react-lite";
import { Box, Container } from "@mui/material";
import Nav from "../../components/nav/Nav";
import { useEffect } from "react";
import { userData } from "../../mobx/user/data";
import CategoryController from "../../components/categoryController/CategoryController";
import { categories } from "../../mobx/categories";
import CategoriesMap from "../../components/categoriesMap/CategoriesMap";
import { discussions } from "../../mobx/discussions";
import { answers } from "../../mobx/answers";
import database from "../../helpers/database";
import { token as UserToken } from "../../helpers/localStorage/token";

const Home = observer( () => {

    useEffect( () => {
        const token = UserToken.getToken();

        if ( token ) {
            database.users.getUserData( UserToken.getToken() ).then( data => userData.setUser( data ) );

            database.categories.getCategories().then( data => categories.setCategories( data ) );

            database.discussions.getDiscussions().then( data => discussions.setDiscussions( data ) );

            database.answers.getAnswers().then( data => answers.setAnswers( data ) );
        }
    }, [UserToken.getToken()] );

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