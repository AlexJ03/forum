import Register from "../../components/register/Register";
import Login from "../../components/login/Login";
import { useState } from "react";

const Auth = () => {
    const [isLogin, setIsLogin] = useState( false );

    return (
        <div>
            { isLogin ? <Login /> : <Register /> }

            <button onClick={() => setIsLogin( ( prev ) => !prev )}>
                {isLogin ? "Зарегистрироваться" : "Уже зарегистрирован?"}
            </button>
        </div>
    );
};

export default Auth;