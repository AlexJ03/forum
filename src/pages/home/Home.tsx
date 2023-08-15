import { observer } from "mobx-react-lite";
import { Box, Container } from "@mui/material";
import { Nav } from "@components-nav";
import { useEffect } from "react";
import mobx from "@mobx";
import { CategoriesMap } from "@components-categories";
import { database, token as UserToken } from "@helpers";
import type { IUserData } from "@types";
import { UsersMap } from "@components-users";

export const Home = observer( () => {

    useEffect( () => {
        const token = UserToken.getToken();

        if ( token ) {
            database.users.getUserData( UserToken.getToken() ).then( ( data: IUserData ) => mobx.userData.setUser( data ) );

            database.users.getUsers().then( ( data: IUserData[] ) => mobx.userData.setUsers( data ) );

            database.categories.getCategories().then( data => mobx.categories.setCategories( data ) );

            database.discussions.getDiscussions().then( data => mobx.discussions.setDiscussions( data ) );

            database.answers.getAnswers().then( data => mobx.answers.setAnswers( data ) );
        }
    }, [UserToken.getToken()] );

    return (
        <Container maxWidth="lg" sx={{ paddingTop: "30px" }}>
            <Nav />

            <Box>
                { mobx.toggle.value === "Категории"
                    ? mobx.categories.getCategories() && <CategoriesMap/>
                    : mobx.userData.getUsers() && <UsersMap users={mobx.userData.getUsers()} />
                }
            </Box>

        </Container>
    );
} );