import { Box, Typography } from "@mui/material";
import { NavController } from "@components-nav";
import { Toggle } from "@components-toggle";
import mobx from "@mobx";

const Nav = () => {

    return (
        <Box width="100%" mb={15}>
            <Typography mb={3} variant="h2" fontSize="30px">RuForum</Typography>

            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Toggle currentToggle={mobx.toggleHome} data={["Категории", "Пользователи"]} />
                <NavController />
            </Box>

        </Box>
    );
};

export default Nav;