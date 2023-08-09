import { Box } from "@mui/material";
import UserController from "../userController/UserController";
import { observer } from "mobx-react-lite";

const Nav = observer( () => {

    return (
        <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
            <h1>My Forum</h1>

            <Box display="flex">
                <UserController />
            </Box>
        </Box>
    );
} );

export default Nav;