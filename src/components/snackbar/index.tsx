import { Alert, Snackbar as Snack } from "@mui/material";
import mobx from "@mobx";
import { observer } from "mobx-react-lite";

export const Snackbar = observer( () => {

    return (
        <Snack open={mobx.snackbar.data.show} autoHideDuration={3000} onClose={() => mobx.snackbar.close()}>
            <Alert onClose={() => mobx.snackbar.close()} severity={mobx.snackbar.data.status} sx={{ width: "100%" }}>
                { mobx.snackbar.data.message }
            </Alert>
        </Snack>
    );
} );
