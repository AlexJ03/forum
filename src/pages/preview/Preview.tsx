import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";
import { token as userToken } from "@helpers";
import { Progress } from "@components-progress";

export const Preview = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState<boolean>( false );

    useEffect( () => {
        if ( userToken.getToken() ) {
            setToken( true );
        }
    }, [userToken.getToken()] );

    const [text] = useTypewriter( {
        words: ["обсуждать важные для вас темы.", "получать ответы на важные для вас вопросы.", "помогать другим, отвечая на вопросы."],
        loop: 10,
        typeSpeed: 50,
        deleteSpeed: 50,
    } );

    return (
        <>
            {
                !token ? (
                    <Box sx={{ width: "100%", height: "100vh", backgroundColor: "background.default" }}>
                        <Container maxWidth="lg" sx={{ margin: "0 auto" }}>
                            <Box pt={30}>
                                <Typography variant="h1" sx={{ fontSize: { xs: "25px", sm: "30px", lg: "40px" } }} color="#fff" mb={3} textAlign="center">RuForum</Typography>
                                <Typography variant="h2" sx={{ fontSize: { xs: "20px", sm: "25px", lg: "30px" } }} color="#fff" mb={5} textAlign="center">
                                    Здесь вы можете { text }
                                    <Cursor cursorColor='red' />
                                </Typography>
                                <Box display="flex" justifyContent="center">
                                    <Button size="small" variant="contained" color="primary" onClick={() => navigate( "/auth" )}>Приступить</Button>
                                </Box>
                            </Box>
                        </Container>
                    </Box>
                ) : <Progress />
            }

        </>
    );
};