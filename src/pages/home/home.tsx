import { observer } from "mobx-react-lite";
import { Box, Container } from "@mui/material";
import Nav from "../../components/nav/Nav";
import { useEffect } from "react";
import { database } from "../../helpers/database";
import { userToken } from "../../helpers/auth";
import { userData } from "../../mobx/userData";

const Home = observer( () => {

    useEffect( () => {
        const token = userToken.getToken();

        if ( token ) {
            database.getUserData( userToken.getToken() ).then( data => userData.setUser( data ) );
        }
    }, [userToken.getToken()] );

    return (
        <Container maxWidth="xl" sx={{ paddingTop: "30px" }}>
            <Nav />
            <Box>
                <p>{ JSON.stringify( userData.user ) }</p>
            </Box>
        </Container>
    );
} );

export default Home;