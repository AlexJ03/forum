import { useParams } from "react-router-dom";
import { DiscussionController, DiscussionsMap } from "@components-discussions";
import { Box, Container, Typography } from "@mui/material";

export const CategoryList = () => {
    const { name } = useParams();

    return (
        <Box pt={5}>
            <Container maxWidth="lg">
                <Typography mb={5} variant="h3" fontSize="20px">Секция: {name.toLowerCase()}</Typography>
                <Box display="flex" justifyContent="center" mb={7} width="100%">
                    <DiscussionController name={name} />
                </Box>
                <DiscussionsMap name={name} />
            </Container>
        </Box>
    );
};