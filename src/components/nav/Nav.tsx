import { Box, Typography } from "@mui/material";
import { NavController } from "@components-nav";
import { Toggle } from "@components-toggle";
import mobx from "@mobx";

const Nav = () => {

    return (
        <Box width="100%" sx={{ marginBottom: { xs: 5, md: 15 } }}>
            <Typography mb={3} variant="h2" fontSize="30px" sx={{ textAlign: { xs: "center", md: "left" } }}>RuForum</Typography>

            <Box display="flex" alignItems="center" sx={{ flexDirection: { xs: "column", md: "row" }, justifyContent: { md: "space-between" }, gap: { xs: "15px", md: "0" } }}>
                <Toggle currentToggle={mobx.toggleHome} data={["Категории", "Пользователи"]} />
                <NavController />
            </Box>

        </Box>
    );
};

export default Nav;