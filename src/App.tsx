import { Home, Profile, Discussion, CategoryList, Auth, Preview } from "./pages";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { userAuth } from "@helpers";
import { Snackbar } from "./components/snackbar";

const App = () => {
    const navigate = useNavigate();

    useEffect( () => {
        userAuth.checkUser( navigate );
    }, [] );

  return (
      <>
        <Routes>
            <Route path="/" element={<Preview />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/homepage" element={<Home />} />
            <Route path="/profile/:token" element={<Profile />} />
            <Route path="/categories/:name" element={<CategoryList />} />
            <Route path="/discussions/:name" element={<Discussion />} />
        </Routes>
          <Snackbar />
      </>
  );
};

export default App;