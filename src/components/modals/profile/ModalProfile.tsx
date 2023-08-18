import { Box, Modal, TextField, Typography } from "@mui/material";
import mobx from "@mobx";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { database, handleKeyDown, token } from "@helpers";
import type { IUserData } from "@types";
import { modalProfileStyles } from "@utils";
import { ButtonProgress } from "@components-progress";

const ModalProfile = observer( () => {
    const [name, setName] = useState( "" );

    const [loading, setLoading] = useState( false );
    const [success, setSuccess] = useState( false );
    const [error, setError] = useState( false );

    const saveUserData = async () => {
        setLoading( true );
        await database.users.createUserName( token.getToken(), name );
        await database.users.getUserData( token.getToken() ).then( ( data: IUserData ) => mobx.userData.setUser( data ) );

        setLoading( false );

        if ( mobx.snackbar.data.status === "info" ) {
            setSuccess( true );
            setError( false );
            
            setTimeout( () => {
                mobx.userProfileModal.close();
            }, 1000 );
        }

        if ( mobx.snackbar.data.status === "error" ) {
            setError( true );
            setSuccess( false );
        }

        setName( "" );
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
                    <TextField onKeyDown={( e: any ) => handleKeyDown( e, saveUserData )} onChange={e => setName( e.target.value )} type="text" placeholder={ mobx.userData.data?.name || "Придумайте имя" }  />
                    <TextField type="text" label="ID" defaultValue={ token.getToken() } disabled />

                    <ButtonProgress success={success} loading={loading} fn={saveUserData} error={error} data={{ default: "Сохранить", error: "Не получилось сохранить", success: "Вы обновили данные!" }} />
                </Box>
            </Box>
        </Modal>
    );
} );

export default ModalProfile;