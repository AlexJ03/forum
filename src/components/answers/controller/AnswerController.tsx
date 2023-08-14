import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { token, database, fireError } from "@helpers";

const AnswerController = ( { name }: Record<string, string> ) => {
    const [answer, setAnswer] = useState( "" );

    const createAnswer = async () => {
        // try {
            await database.answers.createAnswerInDiscussion( name, answer );
            await database.answers.createAnswer( answer, name, token.getToken() );
        // } catch ( error ) {
        //     fireError.setError( error.message );
        // }
    };

    return (
        <>
            <TextField value={answer} onChange={e => setAnswer( e.target.value )} type="text" placeholder="Введите свой ответ" />
            <Button onClick={createAnswer}>Ок</Button>
        </>
    );
};

export default AnswerController;