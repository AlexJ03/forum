import { Box, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { database, token as userToken } from "@helpers";
import type { IDiscussion, IUserData } from "@types";
import mobx from "@mobx";
import { WithFieldValue } from "@firebase/firestore";

const DiscussionController = ( { name }: Record<string, string> ) => {
    const [discussion, setDiscussion] = useState( "" );
    const [userName, setUserName] = useState<string | undefined>( undefined );

    useEffect( () => {
        database.users.getUserName( userToken.getToken() ).then( ( name: string ) => setUserName( name ) );
    }, [] );

    const createDiscussion = async () => {
        const userData: IUserData = {
            token: userToken.getToken(),
            name: userName
        };

        await database.discussions.createDiscussionInCategories( name, discussion );
        await database.discussions.createDiscussion( name, discussion, userData );

        database.discussions.getDiscussions().then( ( data: IDiscussion[] ) => mobx.discussions.setDiscussions( data ) );

        setDiscussion( "" );
    };

    return (
        <Box display="flex" alignItems="center" columnGap={3} width="100%" px={5}>
            <TextField sx={{ width: "80%" }} variant="outlined" value={discussion} onChange={e => setDiscussion( e.target.value )} type="text" placeholder="Сформулируйте вопрос" />
            <Button variant="contained" size="large" onClick={createDiscussion}>Создать</Button>
        </Box>
    );
};

export default DiscussionController;