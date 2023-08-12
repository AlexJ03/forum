import { Register, Login } from "@components-auth";
import { useState } from "react";
import { Box, Button, Container } from "@mui/material";

export const Auth = () => {
    const [isLogin, setIsLogin] = useState( false );

    return (
        <Box height="100vh" pt="30vh">
            <Container>
                <Box display="flex" justifyContent="center">
                    <Box width="500px">

                        { isLogin ? <Login /> : <Register /> }

                        <Button sx={{ marginTop: "20px" }} onClick={() => setIsLogin( ( prev ) => !prev )}>
                            {isLogin ? "У меня нет аккаунта" : "Уже есть аккаунт?"}
                        </Button>

                    </Box>
                </Box>
            </Container>
        </Box>
    );
};