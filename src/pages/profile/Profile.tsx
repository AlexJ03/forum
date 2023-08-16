import { Box, Container, Typography } from "@mui/material";
import { ProfileDiscussionsMap, ProfileAnswersMap } from "@components-profile";
import type { IUserFullData } from "@types";
import { Toggle } from "@components-toggle";
import mobx from "@mobx";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { database } from "@helpers";
import { Progress } from "../../components/progress";

export const Profile = observer( () => {
    const { token } = useParams();

    useEffect( () => {
        database.users.getFullUserData( token ).then( ( data: IUserFullData ) => mobx.userData.setFullUserData( data ) );
    }, [token] );

    const userData: IUserFullData = mobx.userData.getFullUserData() && mobx.userData.getFullUserData();

    return (
        <>
            {
                userData ? (
                    <Box pt={5}>
                        <Container maxWidth="lg">
                            {userData?.user?.token && (
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
                )
                    : <Progress />
            }

        </>
    );
} );