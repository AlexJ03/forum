import { Box, Modal, Typography } from "@mui/material";
import { userProfileModal } from "../../mobx/userProfileModal";
import { observer } from "mobx-react-lite";

const UserProfileModal = observer( () => {

    const style = {
        position: "absolute" as const,
        top: "30%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
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
            </Box>
        </Modal>
    );
} );

export default UserProfileModal;