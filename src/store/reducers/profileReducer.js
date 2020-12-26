const initState = {
    
}
const authReducer = (state = initState, action) =>{
    switch(action.type){
        case "UPDATE_PROFILE":
            console.log("UPDATE_PROFILE");
            return action.profileData;
        case "UPDATE_PROFILEPIC":
            console.log("UPDATE_PROFILEPIC");
            return {
                ... state,
                profilePic: action.picUrl
            };
        default:
            //console.log("DEFAULT");
            return state;
    }
}

export default authReducer;