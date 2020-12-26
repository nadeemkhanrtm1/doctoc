export const loginAct = (authData) =>{
    console.log("loginAct");
    return(dispatch, getState)=>{
        // make async call to database        
        dispatch({type:'LOGIN',authData});
    }
}

export const logoutAct = () =>{
    return(dispatch, getState)=>{
        // make async call to database        
        dispatch({type:'LOGOUT'});
    }
}