import React from 'react';
import store from './store/store';
import {Input,Button,List} from 'antd';

class Todo extends React.Component{

    constructor(props){
        super(props);
        this.state=store.getState();
        console.log("input value",this.state.inputValue);
        this.handleStoreChange=this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    render(){
        return (
        <div>
            <input type="text" value={this.state.inputValue} onChange={this.handleInput}></input>
            <Button type="primary" onClick={this.onClick}>submit</Button>
            <List
                dataSource={this.state.list}
                renderItem={(item,index)=>(<List.Item onClick={this.handleItemDelete}>{item}</List.Item>)}
                />
        </div>
        
        )
        
      
    }
    onClick=()=>{
        const action={
            type:'add_todo_item',
           
        };
        store.dispatch(action);
           
    }
    handleItemDelete=(index)=>{
        const action={
            type:'delete_todo_item',
            value:index
        }
        store.dispatch(action);
    }
    handleInput=(e)=>{
        const action={
            type:"change_input_value",
            value:e.target.value
        }
        store.dispatch(action);

    }
    handleStoreChange=()=>{
        this.setState(
            store.getState()
        );
    }
}
export default Todo;