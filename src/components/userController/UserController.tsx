import { IconButton, Menu, MenuItem } from "@mui/material";
import { PiUserCircle } from "react-icons/pi";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { userAuth } from "../../mobx/userAuth";
import { userProfileModal } from "../../mobx/userProfileModal";
import UserProfileModal from "../userProfileModal/UserProfileModal";

const UserController = observer( () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>( null );

    const open = Boolean( anchorEl );

    const handleClick = ( event: any ) => {
        setAnchorEl( event.currentTarget );
    };

    const handleClose = () => {
        setAnchorEl( null );
    };

    return (
        <>
            <IconButton aria-label="delete" onClick={handleClick}>
                <PiUserCircle size={40} />
            </IconButton>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                <MenuItem onClick={() => userProfileModal.open()}>Профиль</MenuItem>
                <MenuItem onClick={() => userAuth.signOut()}>Выйти</MenuItem>
            </Menu>

            <UserProfileModal />
        </>
    );
} );

export default UserController;