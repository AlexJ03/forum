import type { FC } from "react";
import type { IUserData, IUsers } from "@types";
import { List } from "@mui/material";
import { UserCard } from "@components-users";

export const UsersMap: FC<IUsers> = ( { users } ) => {

    return (
        <List>
            { users.map( ( { name, token }: IUserData ) => <UserCard key={token} token={token} name={name} /> ) }
        </List>
    );
};