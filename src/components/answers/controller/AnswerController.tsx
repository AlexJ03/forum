import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { token, database } from "@helpers";

const AnswerController = ( { name }: Record<string, string> ) => {
    const [answer, setAnswer] = useState( "" );

    const createAnswer = async () => {
        await database.answers.createAnswerInDiscussion( name, answer );
        await database.answers.createAnswer( answer, name, token.getToken() );

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