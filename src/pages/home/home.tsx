import { observer } from "mobx-react-lite";
import { userAuth } from "../../mobx/userAuth";
import { userToken } from "../../helpers/auth";

const Home = observer( () => {

    return (
        <div>
            <h1>Home</h1>
            <p>{ userToken.getToken() }</p>

            <button onClick={() => userAuth.signOut()}>logout</button>
        </div>
    );
} );

export default Home;