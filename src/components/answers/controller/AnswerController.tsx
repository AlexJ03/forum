import { Button, TextField } from "@mui/material";
import { useState } from "react";
import database from "../../../helpers/database";
import { token } from "../../../helpers/localStorage/token";

const AnswerController = ( { name }: any ) => {
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