import { Button, TextField } from "@mui/material";
import { FC, useState } from "react";
import { token, database } from "@helpers";

const AnswerController = ( { name }: Record<string, string> ) => {
    const [answer, setAnswer] = useState( "" );

    return (
        <>
            <TextField value={answer} onChange={e => setAnswer( e.target.value )} type="text" placeholder="Введите свой ответ" />
            <Button onClick={() => {
                database.answers.createAnswerInDiscussion( name, answer );
                database.answers.createAnswer( answer, name, token.getToken() );
            }}>Ок</Button>
        </>
    );
};

export default AnswerController;