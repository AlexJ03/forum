import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Cursor, useTypewriter } from "react-simple-typewriter";

export const Preview = () => {
    const navigate = useNavigate();

    const [text] = useTypewriter( {
        words: ["обсуждать важные для вас темы.", "получать ответы на важные для вас вопросы.", "помогать другим, отвечая на вопросы."],
        loop: 10,
        typeSpeed: 50,
        deleteSpeed: 50,
    } );

    return (
        <Box sx={{ width: "100%", height: "100vh", backgroundColor: "background.default" }}>
            <Container maxWidth="lg" sx={{ margin: "0 auto" }}>
                <Box pt={30}>
                    <Typography variant="h1" fontSize="40px" color="#fff" mb={3} textAlign="center">RuForum</Typography>
                    <Typography variant="h2" fontSize="30px" color="#fff" mb={5} textAlign="center">
                        Здесь вы можете { text }
                        <Cursor cursorColor='red' />
                    </Typography>
                    <Box display="flex" justifyContent="center">
                        <Button variant="contained" color="primary" size="large" onClick={() => navigate( "/auth" )}>Приступить</Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};