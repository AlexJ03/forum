import { Box, Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { database } from "@helpers";
import { ProfileDiscussionsMap, ProfileAnswersMap } from "@components-profile";
import type { IUserFullData } from "@types";
import { Toggle } from "@components-toggle";
import mobx from "@mobx";
import { observer } from "mobx-react-lite";

export const Profile = observer( () => {
    const { token } = useParams();

    const [userData, setUserData] = useState<IUserFullData | null>( null );

    useEffect( () => {
        if ( token ) {
            database.users.getFullUserData( token ).then( ( data: IUserFullData ) => setUserData( data ) );
        }
    }, [token] );

    return (
        <Box pt={5}>
            <Container maxWidth="lg">
                {userData && (
                    <>
                        {userData.user?.name &&
                            <Typography variant="h2" fontSize="30px" textAlign="center" mb={2}>Никнейм: {userData.user.name}</Typography>
                        }

                        <Typography textAlign="center" mb={5} variant="h3" fontSize="25px">ID: { userData.user.token }</Typography>

                        <Box display="flex" justifyContent="center" mb={3}>
                            <Toggle currentToggle={mobx.toggleProfile} data={["Вопросы", "Ответы"]} />
                        </Box>

                        { mobx.toggleProfile.value === "Вопросы"
                            ? <ProfileDiscussionsMap discussions={userData?.discussions} />
                            : <ProfileAnswersMap answers={userData?.answers} />
                        }
                    </>
                )}
            </Container>
        </Box>
    );
} );