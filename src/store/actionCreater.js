import{change_input_value,add_todo_item,delete_todo_item} from './actionTypes';

export const getInputChangeAction=(value)=>{
    type:change_input_value
}
export const getAddItemAction=(value)=>{
    type:add_todo_item
}

export const getDeleteItemAction=(index)=>({      // parenthesis is necessary
    type:delete_todo_item,
    index:index
})