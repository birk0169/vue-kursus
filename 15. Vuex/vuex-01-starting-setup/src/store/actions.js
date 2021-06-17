export default {
    //Async code is allowed
    login(context){
        context.commit('setAuth', {isAuth: true});
    },
    logout(context){
        context.commit('setAuth', {isAuth: false});
    }
}