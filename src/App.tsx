import { Route, Routes, useNavigate } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import Home from "./pages/home/home";
import { userAuth } from "./mobx/user/auth";
import { useEffect } from "react";
import CategoryList from "./pages/category/categoryList";
import Discussion from "./pages/discussion/Discussion";
import Profile from "./pages/profile/profile";

const App = () => {
    const navigate = useNavigate();

    useEffect( () => {
        userAuth.checkUser( navigate );
    }, [] );

  return (
    <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/homepage" element={<Home />} />
        <Route path="/profile/:token" element={<Profile />} />
        <Route path="/categories/:name" element={<CategoryList />} />
        <Route path="/discussions/:name" element={<Discussion />} />
    </Routes>
  );
};

export default App;