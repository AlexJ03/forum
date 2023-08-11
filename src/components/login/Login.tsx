import { useState } from "react";
import type { IUserAuthData } from "../../types/users";
import { observer } from "mobx-react-lite";
import { userAuth } from "../../mobx/user/auth";
import { Box, Button, TextField } from "@mui/material";

const Login = observer( () => {
    const [userData, setUserData] = useState<IUserAuthData>( {
        email: "",
        password: ""
    } );

    const login = async () => {
        const { email, password } = userData;

        if ( email && password ) {
            await userAuth.loginUser( userData );
        }
    };

    return (
        <Box display="flex" flexDirection="column" rowGap={2}>
            <TextField label="Введите email" multiline value={userData.email} onChange={e => setUserData( { ...userData, email: e.target.value } )} type="text"/>
            <TextField label="Введите пароль" multiline value={userData.password} onChange={e => setUserData( { ...userData, password: e.target.value } )} type="text"/>

            <Button variant="contained" onClick={login}>Войти</Button>
        </Box>
    );
} );

export default Login;