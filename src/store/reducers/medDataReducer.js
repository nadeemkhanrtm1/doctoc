const initState = {
    diabetes : "no",
    hypertension : "no",

}
const medDataReducer = (state = initState, action) =>{
    switch(action.type){
        case 'UPDATE_MEDDATA':
            console.log("CREATED PROJECT",action.medData);
            return action.medData;
        default:
            //console.log("Default");
            return state;
    }
}

export default medDataReducer;