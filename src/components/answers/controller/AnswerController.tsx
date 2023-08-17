import { Box, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { token, database } from "@helpers";
import type { IAnswer, IUserData } from "@types";
import mobx from "@mobx";

const AnswerController = ( { name }: Record<string, string> ) => {
    const [answer, setAnswer] = useState( "" );
    const [userName, setUserName] = useState<string | undefined>( undefined );

    useEffect( () => {
        database.users.getUserName( token.getToken() ).then( ( name: string ) => setUserName( name ) );
    }, [] );

    const createAnswer = async () => {
        const userData: IUserData = {
            token: token.getToken(),
            name: userName
        };

        await database.answers.createAnswerInDiscussion( name, answer );
        await database.answers.createAnswer( answer, name, userData );

        database.answers.getAnswers().then( ( data: IAnswer[] ) => mobx.answers.setAnswers( data ) );

        setAnswer( "" );
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" columnGap={3} width="100%" px={5} mb={3}>
            <TextField sx={{ width: "80%" }} variant="outlined" value={answer} onChange={e => setAnswer( e.target.value )} type="text" placeholder="Введите свой ответ" />
            <Button variant="contained" size="large" onClick={createAnswer}>Ок</Button>
        </Box>
    );
};

export default AnswerController;