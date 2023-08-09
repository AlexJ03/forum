import { Route, Routes, useNavigate } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import Home from "./pages/home/home";
import { userAuth } from "./mobx/userAuth";
import { useEffect } from "react";

const App = () => {
    const navigate = useNavigate();

    useEffect( () => {
        userAuth.checkUser( navigate );
    }, [] );

  return (
    <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/homepage" element={<Home />} />
    </Routes>
  );
};

export default App;