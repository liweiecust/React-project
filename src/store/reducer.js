import {change_input_value,add_todo_item,delete_todo_item} from './actionTypes'

const defaultState={
    inputValue:"3",
    list:[1,2],
    showMsg:false
}


 export default (state=defaultState,action)=>{
    if(action.type===change_input_value){
        const newState=JSON.parse(JSON.stringify(state));
        newState.inputValue=action.value;
        return newState;
    }
    if(action.type===add_todo_item){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue='';
     
        return newState;
    }
    if(action.type===delete_todo_item){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
      
        return newState;
    }

    return state;
} 
