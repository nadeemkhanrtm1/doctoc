export const updateProfile = (profileData) =>{
    return(dispatch, getState)=>{
        // make async call to database
        dispatch({type:'UPDATE_PROFILE',profileData});
    }
}

export const updateProfilePic = (picUrl) =>{
    return(dispatch, getState)=>{     
        //UPD    
        dispatch({type:'UPDATE_PROFILEPIC',picUrl});
    }
}