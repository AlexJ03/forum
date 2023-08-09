import { observer } from "mobx-react-lite";
import { userAuth } from "../../mobx/userAuth";
import { userToken } from "../../helpers/auth";
import { Button } from "@mui/material";

const Home = observer( () => {

    return (
        <div>
            <h1>Home</h1>
            <p>{ userToken.getToken() }</p>

            <Button onClick={() => userAuth.signOut()}>logout</Button>
        </div>
    );
} );

export default Home;