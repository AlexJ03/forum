import { Box, TextField } from "@mui/material";
import type { KeyboardEvent } from "react";
import { useEffect, useState } from "react";
import { database, handleKeyDown, token as userToken } from "@helpers";
import type { IDiscussion, IUserData } from "@types";
import mobx from "@mobx";
import { ButtonProgress } from "@components-progress";

const DiscussionController = ( { name }: Record<string, string> ) => {
    const [discussion, setDiscussion] = useState( "" );
    const [userName, setUserName] = useState<string | undefined>( undefined );

    const [loading, setLoading] = useState( false );
    const [success, setSuccess] = useState( false );
    const [error, setError] = useState( false );

    useEffect( () => {
        database.users.getUserName( userToken.getToken() ).then( ( name: string ) => setUserName( name ) );
    }, [] );

    const createDiscussion = async () => {
        setLoading( true );
        const userData: IUserData = {
            token: userToken.getToken(),
            name: userName
        };

        await database.discussions.createDiscussionInCategories( name, discussion );
        await database.discussions.createDiscussion( name, discussion, userData );

        database.discussions.getDiscussions().then( ( data: IDiscussion[] ) => mobx.discussions.setDiscussions( data ) );

        setDiscussion( "" );

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
        <Box display="flex" alignItems="center" columnGap={3} sx={{ flexDirection: { xs: "column", md: "row" } }} width="100%" px={5}>
            <TextField onKeyDown={( e: KeyboardEvent<HTMLInputElement> ) => handleKeyDown( e, createDiscussion )} sx={{ width: "80%" }} variant="outlined" value={discussion} onChange={e => setDiscussion( e.target.value )} type="text" placeholder="Сформулируйте вопрос" />
            <ButtonProgress success={success} loading={loading} fn={createDiscussion} error={error} data={undefined} />
        </Box>
    );
};

export default DiscussionController;