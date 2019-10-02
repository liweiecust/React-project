import React from 'react';
import {DropDown,Menu, Dropdown} from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';

const menu=(
    <Menu mode="vertical">
       
      
        <Menu.Item index="1">1</Menu.Item>
        <Menu.Item index="2">2</Menu.Item>
        <Menu.Item index="3">3</Menu.Item>

       
      
        
    </Menu>
);

class MU extends React.Component{
    constructor(props){
        super(props);
        
    }

    render(){
        return(
            <Dropdown overlay={menu} trigger={['click']}>
                <button>A</button>
            </Dropdown>
        )
    }
}
export default MU;