import { ListItemButton, ListItemText } from "@mui/material";
import type { FC } from "react";
import type { IUserData } from "@types";
import { useNavigate } from "react-router-dom";

export const UserCard: FC<IUserData> = ( { name, token } ) => {
    const navigate = useNavigate();

    return (
        <ListItemButton sx={{ background: "#e7e7e7", height: "60px", mb: 3, borderRadius: 5, transition: "300ms", ":hover": { background: "#d3d3d3", transform: "translate(0, -10px)" } }} onClick={() => navigate( `/profile/${token}` )} component="a">
            <ListItemText sx={{ textAlign: "center" }} primary={ name || token } />
        </ListItemButton>
    );
};

