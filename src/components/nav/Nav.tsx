import { Box, Typography } from "@mui/material";
import { NavController } from "@components-nav";
import { Toggle } from "@components-toggle";

const Nav = () => {

    return (
        <Box width="100%" mb={15}>
            <Typography mb={3} variant="h2" fontSize="30px">RuForum</Typography>

            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Toggle />
                <NavController />
            </Box>

        </Box>
    );
};

export default Nav;