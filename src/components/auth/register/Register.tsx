import { useState } from "react";
import { observer } from "mobx-react-lite";
import mobx from "@mobx";
import { Box, Button, TextField } from "@mui/material";
import type { IUserAuthData } from "../../../types/user";

const Register = observer( () => {
    const [userData, setUserData] = useState<IUserAuthData>( {
        email: "",
        password: ""
    } );

    const createUser = async () => {
        const { email, password } = userData;

        if ( email && password ) {
            await mobx.userAuth.createUser( userData );
        }
    };

    return (
            <Box display="flex" flexDirection="column" rowGap={2}>
                <TextField label="Введите email" placeholder="example@mail.ru" multiline value={userData.email} onChange={( e ) => setUserData( { ...userData, email: e.target.value } )} type="text"/>
                <TextField label="Введите пароль" placeholder="qwerty123456" multiline value={userData.password} onChange={( e ) => setUserData( { ...userData, password: e.target.value } )} type="password"/>

                <Button onClick={createUser} variant="contained">Зарегистрироваться</Button>
            </Box>
    );
} );

export default Register;