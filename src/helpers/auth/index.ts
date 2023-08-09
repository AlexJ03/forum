class UserToken {
    setToken( token: string ) {
        localStorage.setItem( "token", token );
    }

    getToken() {
        return localStorage.getItem( "token" );
    }

    removeToken() {
        localStorage.removeItem( "token" );
    }
}

export const userToken = new UserToken();