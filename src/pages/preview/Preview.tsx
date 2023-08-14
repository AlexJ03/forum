import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Preview = () => {
    const navigate = useNavigate();

    return (
        <Container maxWidth="lg" sx={{ margin: "0 auto" }}>
            <Box pt="200px">
                <Typography variant="h1" fontSize="30px" mb={3} textAlign="center">My Forum - это форум, в котором абсолютно каждый человек может может обсуждать с другими насущные его темы</Typography>
                <Box display="flex" justifyContent="center">
                    <Button variant="contained" onClick={() => navigate( "/auth" )}>Приступить</Button>
                </Box>
            </Box>
        </Container>
    );
};