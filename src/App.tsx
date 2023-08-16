import { Home, Profile, Discussion, CategoryList, Auth, Preview } from "./pages";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { database, token as UserToken, userAuth } from "@helpers";
import { Snackbar } from "./components/snackbar";
import type { IUserData } from "@types";
import mobx from "@mobx";
import { observer } from "mobx-react-lite";
import type { IUserFullData } from "@types";

const App = observer( () => {
    const navigate = useNavigate();

    useEffect( () => {
        const token = UserToken.getToken();

        if ( token ) {
            userAuth.checkUser( navigate );

            database.users.getUserData( UserToken.getToken() ).then( ( data: IUserData ) => mobx.userData.setUser( data ) );

            database.users.getUsers().then( ( data: IUserData[] ) => mobx.userData.setUsers( data ) );

            database.categories.getCategories().then( data => mobx.categories.setCategories( data ) );

            database.discussions.getDiscussions().then( data => mobx.discussions.setDiscussions( data ) );

            database.answers.getAnswers().then( data => mobx.answers.setAnswers( data ) );


        }
    }, [UserToken.getToken()] );

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
} );

export default App;