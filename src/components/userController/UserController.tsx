import { Button, Menu, MenuItem, Typography } from "@mui/material";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { userAuth } from "../../mobx/userAuth";
import { userProfileModal } from "../../mobx/userProfileModal";
import UserProfileModal from "../userProfileModal/UserProfileModal";
import { userToken } from "../../helpers/auth";
import { userData } from "../../mobx/userData";
import { useNavigate } from "react-router-dom";

const UserController = observer( () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>( null );
    const navigate = useNavigate();

    const open = Boolean( anchorEl );

    const handleClick = ( event: any ) => {
        setAnchorEl( event.currentTarget );
    };

    const handleClose = () => {
        setAnchorEl( null );
    };

    return (
        <>
            <Button onClick={handleClick}>
                <Typography fontSize="20px" marginX={2}>{ userData.user?.name || userToken.getToken()}</Typography>
                { open ? <BiUpArrowAlt size={28} /> : <BiDownArrowAlt size={28} />}
            </Button>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                <MenuItem onClick={() => navigate( `/profile/${userToken.getToken()}` )}>Профиль</MenuItem>
                <MenuItem onClick={() => userProfileModal.open()}>Изменить данные</MenuItem>
                <MenuItem onClick={() => userAuth.signOut()}>Выйти</MenuItem>
            </Menu>

            <UserProfileModal />
        </>
    );
} );

export default UserController;