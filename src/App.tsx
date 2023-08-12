import mobx from "@mobx";
import { Home, Profile, Discussion, CategoryList, Auth } from "./pages";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const App = () => {
    const navigate = useNavigate();

    useEffect( () => {
        mobx.userAuth.checkUser( navigate );
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