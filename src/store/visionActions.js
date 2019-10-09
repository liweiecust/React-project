
import visionApi from '../visionApi';
const visions=[
    {
        name:"APM_Chef",
        note:"Prepare daily APM image",
        status:"offline",
        blueprint:"APM MVT",
        vhd:"vm1",
        cases:[
            {
                Id:"vsts123",
                Description:"test case",
                Time:"6"
            },
            {
                Id:"vsts124",
                Description:"test case",
                Time:"6"
            },
            {
                Id:"vsts125",
                Description:"test case",
                Time:"6"
            },
        ]
    },


];
export function loadVisions(){
    return {type:"load_visions",visions:visions}
}
export function loadSelectedVision(vision){
    return {type:"load_selected_vision",vision}
}
export function loadTestcaseForVision(blueprint){
    return {type:"loadTestCase",value:blueprint}
}

export function addCase(testcase){
    return {type:"addcase",value:testcase};
}
export function loadTestCase(blueprint){

    return function(dispatch){
        return  visionApi.loadTestCases(blueprint)
        .then(testcases=>{
            dispatch({type:"loadTestCase",value:testcases}) // use middleware for asynchrous request
        })
        .catch(err=>{
            throw err;
        }); 

    } 
}

export function loadVision(visionName){
    return function(dispatch){
        return visionApi.loadVision(visionName)
        .then(vision=>{
            dispatch({type:"loadvision",value:vision})
        })
    }
}