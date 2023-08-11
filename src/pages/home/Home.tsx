import { observer } from "mobx-react-lite";
import { Box, Container } from "@mui/material";
import Nav from "../../components/nav/Nav";
import { useEffect } from "react";
import mobx from "../../mobx";
import CategoryController from "../../components/categories/controller/CategoryController";
import CategoriesMap from "../../components/categories/map/CategoriesMap";
import database from "../../helpers/database";
import { token as UserToken } from "../../helpers/localStorage/token";

export const Home = observer( () => {

    useEffect( () => {
        const token = UserToken.getToken();

        if ( token ) {
            database.users.getUserData( UserToken.getToken() ).then( data => mobx.userData.setUser( data ) );

            database.categories.getCategories().then( data => mobx.categories.setCategories( data ) );

            database.discussions.getDiscussions().then( data => mobx.discussions.setDiscussions( data ) );

            database.answers.getAnswers().then( data => mobx.answers.setAnswers( data ) );
        }
    }, [UserToken.getToken()] );

    return (
        <Container maxWidth="xl" sx={{ paddingTop: "30px" }}>
            <Nav />

            <Box display="flex" justifyContent="center" mt="100px" mb="50px">
                <CategoryController />
            </Box>

            <Box display="flex" justifyContent="center">
                { mobx.categories.getCategories() && <CategoriesMap/> }
            </Box>
        </Container>
    );
} );