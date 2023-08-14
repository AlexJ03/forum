import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import type { IUserAuthData } from "@types";
import { userAuth } from "@helpers";

const Register = () => {
    const [userData, setUserData] = useState<IUserAuthData>( {
        email: "",
        password: ""
    } );

    const createUser = async () => {
        await userAuth.createUser( userData );
    };

    return (
            <Box display="flex" flexDirection="column" rowGap={2}>
                <TextField type="email" label="Введите email" placeholder="example@mail.ru" value={userData.email} onChange={( e ) => setUserData( { ...userData, email: e.target.value } )} />
                <TextField type="password" label="Введите пароль" placeholder="qwerty123456" value={userData.password} onChange={( e ) => setUserData( { ...userData, password: e.target.value } )} />

                <Button onClick={createUser} variant="contained">Зарегистрироваться</Button>
            </Box>
    );
};

export default Register;