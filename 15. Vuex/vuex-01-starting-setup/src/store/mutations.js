export default {
    setAuth(state, payload){
        state.isLoggedIn = payload.isAuth;
    },
    login(state){
        state.isLoggedIn = true;
    },
    logout(state){
        state.isLoggedIn = false;
    }
  };