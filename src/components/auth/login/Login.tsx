import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import type { IUserAuthData } from "@types";
import { userAuth } from "@helpers";

const Login = () => {
    const [userData, setUserData] = useState<IUserAuthData>( {
        email: "",
        password: ""
    } );

    const login = async () => {
        await userAuth.loginUser( userData );
    };

    return (
        <Box display="flex" flexDirection="column" rowGap={2}>
            <TextField label="Введите email" value={userData.email} onChange={e => setUserData( { ...userData, email: e.target.value } )} type="email"/>
            <TextField label="Введите пароль" value={userData.password} onChange={e => setUserData( { ...userData, password: e.target.value } )} type="password"/>

            <Button variant="contained" onClick={login}>Войти</Button>
        </Box>
    );
};

export default Login;