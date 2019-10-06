
import visionApi from '../visionApi';
import { defaultCipherList } from 'constants';
const visions={
    lists:[
            {
                name:"APM_Chef",
                note:"Prepare daily APM image",
                status:"offline",
                blueprint:"APM MVT",
                vhd:"vm1",
                cases:[
                    {
                        id:"vsts123",
                        Description:"test case",
                        time_saving_hour:"6"
                    },
                    {
                        Id:"vsts124",
                        Description:"test case",
                        Time:"6"
                    },
                    {
                        Id:"vsts125",
                        Description:"test case",
                        time_saving_hour:"6"
                    },
                ]
            }

        ],
        vision:{
            Id:"12",
            name:"MTELL_Deployment",
            note:"ProMV Deployment for Bedford RD team and QE in Mvt2-pro-d1",
            status:"offline",
            media:"RC123"
          

        },
    cases:[
        {
            Id:"dddfssfsd",
            Description:"test case",
            Time:"635ddd4"
            
        }
    ],
    case2:{
        Id:"fff",
            Description:"test case",
            Time:"6354"

    }
};


export default (state=visions,action)=>{
    let newState = Object.assign({}, state);
    if(action.type==="get_visions"){
        const newState=Object.assign({},state);
        return newState;
    
    }
    else if(action.type==="load_selected_vision")
    {
        const newState=Object.assign({},state);
        const visionName=action.value;
        return visions.lists[2];

    }
    else if(action.type==="loadTestCase")
    {
        //const cases=visionApi.loadTestCases(action.value);
        const newState=Object.assign({},state);
         newState.cases=action.value;
         return newState;

    }
    else if(action.type==="addcase")
    {
        // const cases=state.visionsReducer.cases; // visionsReducer is undefined here, state is not the state in the store ?
        const newState=Object.assign({},state);
        newState.cases=[...action.value,
            {Id:"New Case",Description:"description",Time:"0"}];
        return newState;
    }
    


   
    return state;
    }