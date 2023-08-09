import { useState } from "react";
import type { IUserAuthData } from "../../types/users";
import { observer } from "mobx-react-lite";
import { userAuth } from "../../mobx/userAuth";

const Register = observer( () => {
    const [userData, setUserData] = useState<IUserAuthData>( {
        email: "",
        password: ""
    } );

    const createUser = async () => {
        const { email, password } = userData;

        if ( email && password ) {
            await userAuth.createUser( userData );
        }
    };

    return (
        <div>
            <input value={userData.email} onChange={( e ) => setUserData( { ...userData, email: e.target.value } )} type="text" placeholder="email"/>
            <input value={userData.password} onChange={( e ) => setUserData( { ...userData, password: e.target.value } )} type="text" placeholder="password"/>

            <button onClick={createUser}>Create user</button>
        </div>
    );
} );

export default Register;