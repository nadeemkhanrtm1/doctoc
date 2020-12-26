export const updateMedData = (medData) =>{
    return(dispatch, getState)=>{
        // make async call to database        
        dispatch({type:'UPDATE_MEDDATA',medData});
    }
}