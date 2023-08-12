import { Box, Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { database } from "@helpers";
import { ProfileDiscussionsMap, ProfileAnswersMap } from "@components-profile";

export const Profile = () => {
    const { token } = useParams();

    const [userData, setUserData] = useState<any>( null );

    useEffect( () => {
        if ( token ) {
            database.users.getFullUserData( token ).then( data => setUserData( data ) );
        }
    }, [token] );

    return (
        <Box>
            <Container maxWidth="lg">
                {userData && (
                    <>
                        <Typography variant="h3">{ userData?.user?.name }</Typography>
                        <Typography mb={3} variant="subtitle1">{ userData?.user.token }</Typography>

                        <h1>Обсуждения:</h1>
                        { userData?.discussions && <ProfileDiscussionsMap answers={userData?.discussions} />}

                        <h1>Ответы:</h1>
                        { userData?.answers && <ProfileAnswersMap answers={userData?.answers} />}
                    </>
                )}
            </Container>
        </Box>
    );
};