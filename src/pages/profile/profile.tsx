import { Box, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { database } from "../../helpers/database";

const Profile = () => {
    const { token } = useParams();

    const [userData, setUserData] = useState<any>( null );

    useEffect( () => {
        if ( token ) {
            database.getFullUserData( token ).then( data => setUserData( data ) );
        }
    }, [token] );

    return (
        <Box>
            <Container maxWidth="lg">
                <h1>User Profile</h1>

                {userData && (
                    <>
                        <p>{ userData?.user?.name }</p>
                        <p>{ userData?.user.token }</p>
                        <p>{ JSON.stringify( userData?.discussions ) }</p>
                        <p>{ JSON.stringify( userData?.answers ) }</p>
                    </>
                )}
            </Container>
        </Box>
    );
};

export default Profile;