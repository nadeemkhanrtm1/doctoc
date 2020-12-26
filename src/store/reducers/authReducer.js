const initState = {
    authStatus : false
}
const authReducer = (state = initState, actions) =>{
    switch(actions.type){
        case "LOGIN":
            console.log("LOGIN");
            return {
                ...actions.authData,
                authStatus: true,
            };
        case "LOGOUT":
            console.log("LOGOUT");
            return {
                authStatus: false
            };
        default:
            //console.log("DEFAULT");
            return state;
    }
}

export default authReducer;