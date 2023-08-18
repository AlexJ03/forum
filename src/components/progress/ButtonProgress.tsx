import type { FC } from "react";
import { Box, Button, CircularProgress } from "@mui/material";
import { green, red } from "@mui/material/colors";
import { BsCheckLg } from "react-icons/bs";
import { BiErrorAlt } from "react-icons/bi";
import type { IProgress } from "@types";

export const ButtonProgress: FC<IProgress> = ( { loading, success, error, fn, data } ) => {
    const buttonSx = {
        ...( success && {
            bgcolor: green[500],
            "&:hover": {
                bgcolor: green[700],
            },
        } ),
        ...( error && {
            bgcolor: red[500],
            "&:hover": {
                bgcolor: red[700],
            },
        } ),
    };

    return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ m: 1, position: "relative" }}>
                <Button
                    variant="contained"
                    sx={buttonSx}
                    disabled={loading}
                    onClick={fn}
                    endIcon={ success && <BsCheckLg /> || error && <BiErrorAlt /> }
                >
                    { data ? ( success && data.success || error && data.error || data.default ) : ( success && "Успешно" || error && "Ошибка..." || "Создать" ) }
                </Button>
                {loading && (
                    <CircularProgress
                        size={24}
                        sx={{
                            color: green[500],
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            marginTop: "-12px",
                            marginLeft: "-12px",
                        }}
                    />
                )}
            </Box>
        </Box>
    );
};