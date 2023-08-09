import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { userProfileModal } from "../../mobx/userProfileModal";
import { observer } from "mobx-react-lite";
import { userToken } from "../../helpers/auth";
import { useState } from "react";
import { database } from "../../helpers/database";
import { userData } from "../../mobx/userData";

const UserProfileModal = observer( () => {
    const [name, setName] = useState( "" );

    const style = {
        position: "absolute" as const,
        top: "30%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 600,
        bgcolor: "background.paper",
        borderRadius: 5,
        boxShadow: 24,
        p: 4,
    };

    return (
        <Modal
            open={userProfileModal.show}
            onClose={() => userProfileModal.close()}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Профиль
                </Typography>

                <Box display="flex" flexDirection="column" rowGap={3}>
                    <TextField onChange={e => setName( e.target.value )} type="text" placeholder={ userData.user?.name || "Придумайте имя" }  />
                    <TextField type="text" label="ID" defaultValue={ userToken.getToken() } disabled />

                    <Button variant="contained" onClick={() => {
                        database.createUserName( userToken.getToken(), name ).then( () => location.reload() );
                    }}>Сохранить</Button>
                </Box>
            </Box>
        </Modal>
    );
} );

export default UserProfileModal;