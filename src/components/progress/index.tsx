import { Box, CircularProgress } from "@mui/material";

export const Progress = ( { pt }: Record<string, string | undefined> ) => {

    return (
        <Box display="flex" justifyContent="center" pt={pt ? pt : "40vh"}>
            <CircularProgress />
        </Box>
    );
};