import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import mobx from "@mobx";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { database, token } from "@helpers";
import type { IUserData } from "@types";
import { modalProfileStyles } from "../../../utils/styles";

const ModalProfile = observer( () => {
    const [name, setName] = useState( "" );

    const saveUserData = async () => {
        await database.users.createUserName( token.getToken(), name );
        await database.users.getUserData( token.getToken() ).then( ( data: IUserData ) => mobx.userData.setUser( data ) );

        mobx.userProfileModal.close();
    };

    return (
        <Modal
            open={mobx.userProfileModal.show}
            onClose={() => mobx.userProfileModal.close()}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalProfileStyles}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Профиль
                </Typography>

                <Box display="flex" flexDirection="column" rowGap={3}>
                    <TextField onChange={e => setName( e.target.value )} type="text" placeholder={ mobx.userData.data?.name || "Придумайте имя" }  />
                    <TextField type="text" label="ID" defaultValue={ token.getToken() } disabled />

                    <Button variant="contained" onClick={saveUserData}>Сохранить</Button>
                </Box>
            </Box>
        </Modal>
    );
} );

export default ModalProfile;