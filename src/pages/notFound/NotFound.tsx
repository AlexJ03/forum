import { Box, Container, Typography } from "@mui/material";

export const NotFound = () => {

    return (
        <Container maxWidth="lg">
            <Box mt="30vh">
                <Typography textAlign="center" variant="h2" fontSize="30px">Страница не найдена ;(</Typography>
            </Box>
        </Container>
    );
};