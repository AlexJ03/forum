import { Button, Menu, MenuItem, Typography } from "@mui/material";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import mobx from "@mobx";
import { ModalProfile } from "@components-modals";
import { useNavigate } from "react-router-dom";
import { token, userAuth } from "@helpers";

const NavController = observer( () => {
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
                <Typography fontSize="20px" marginX={2}>{ mobx.userData.getUser()?.name || token.getToken()}</Typography>
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
                <MenuItem onClick={() => navigate( `/profile/${token.getToken()}` )}>Профиль</MenuItem>
                <MenuItem onClick={() => mobx.userProfileModal.open()}>Изменить данные</MenuItem>
                <MenuItem onClick={() => userAuth.signOut()}>Выйти</MenuItem>
            </Menu>

            <ModalProfile />
        </>
    );
} );

export default NavController;