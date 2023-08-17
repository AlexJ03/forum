import { Register, Login } from "@components-auth";
import { useEffect, useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { token as userToken } from "@helpers";
import { Progress } from "@components-progress";

export const Auth = () => {
    const [isLogin, setIsLogin] = useState( false );
    const [token, setToken] = useState<boolean>( false );

    useEffect( () => {
        if ( userToken.getToken() ) {
            setToken( true );
        }
    }, [userToken.getToken()] );

    return (
        <>
            {
                !token ? (
                    <Box height="100vh" width="100%" pt={30}>
                        <Container>
                            { isLogin ? <Typography variant="h2" fontSize="20px" mb={3} textAlign="center">Вход</Typography> : <Typography variant="h2" fontSize="20px" mb={3} textAlign="center">Регистрация</Typography> }

                            <Box display="flex" justifyContent="center">

                                <Box width="500px">

                                    { isLogin ? <Login /> : <Register /> }

                                    <Button sx={{ marginTop: "20px" }} variant="text" color="warning" onClick={() => setIsLogin( ( prev ) => !prev )}>
                                        {isLogin ? "У меня нет аккаунта" : "Уже есть аккаунт?"}
                                    </Button>

                                </Box>
                            </Box>
                        </Container>
                    </Box>
                ) : <Progress />
            }

        </>
    );
};