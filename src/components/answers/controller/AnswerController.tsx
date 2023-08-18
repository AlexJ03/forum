import { Box, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { token, database, handleKeyDown } from "@helpers";
import type { IAnswer, IUserData } from "@types";
import mobx from "@mobx";
import { ButtonProgress } from "@components-progress";

const AnswerController = ( { name }: Record<string, string> ) => {
    const [answer, setAnswer] = useState( "" );
    const [userName, setUserName] = useState<string | undefined>( undefined );

    const [loading, setLoading] = useState( false );
    const [success, setSuccess] = useState( false );
    const [error, setError] = useState( false );

    useEffect( () => {
        database.users.getUserName( token.getToken() ).then( ( name: string ) => setUserName( name ) );
    }, [] );


    const createAnswer = async () => {
        setLoading( true );
        const userData: IUserData = {
            token: token.getToken(),
            name: userName
        };

        await database.answers.createAnswerInDiscussion( name, answer );
        await database.answers.createAnswer( answer, name, userData );

        database.answers.getAnswers().then( ( data: IAnswer[] ) => mobx.answers.setAnswers( data ) );

        setAnswer( "" );
        setLoading( false );

        if ( mobx.snackbar.data.status === "success" ) {
            setSuccess( true );
            setError( false );
        }

        if ( mobx.snackbar.data.status === "error" ) {
            setError( true );
            setSuccess( false );
        }
    };

    return (
        <Box display="flex" justifyContent="center" sx={{ flexDirection: { xs: "column", md: "row" } }} alignItems="center" columnGap={3} width="100%" px={5} mb={3}>
            <TextField onKeyDown={( e: any ) => handleKeyDown( e, createAnswer )} sx={{ width: "80%" }} variant="outlined" value={answer} onChange={e => setAnswer( e.target.value )} type="text" placeholder="Введите свой ответ" />
            <ButtonProgress success={success} loading={loading} fn={createAnswer} error={error} data={undefined} />
        </Box>
    );
};

export default AnswerController;