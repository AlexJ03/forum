import { Box } from "@mui/material";
import NavController from "./controller/NavController";
import { observer } from "mobx-react-lite";

const Nav = observer( () => {

    return (
        <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
            <h1>My Forum</h1>

            <Box display="flex">
                <NavController />
            </Box>
        </Box>
    );
} );

export default Nav;