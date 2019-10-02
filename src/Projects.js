import React from 'react';
import {List} from 'antd';
import {Link} from 'react-router-dom';

class Projects extends React.Component{

    constructor(props){
        super(props);
        this.state=this.getInitialState;
    }
    getInitialState={
        list: [
            {
                id:"1",
                name:"APM_Chef",
                note:"Prepare daily APM image",
                status:"offline"
            },
            {
                id:"1",
                name:"APM Deployment for AFR QE in HQDEVBLADE28",
                note:"ProMV Deployment for Bedford RD team and QE in Mvt2-pro-d1",
                status:"offline"
            },
            {
                id:"1",
                name:"MTELL_Deployment",
                note:"ProMV Deployment for Bedford RD team and QE in Mvt2-pro-d1",
                status:"offline"
            }

        ]
    }
       
       
    
   render(){
       return(
          <div>
                {/* <List
                dataSource={this.state.list}
                renderItem={(item,index)=>(<List.Item onClick={this.handleItemDelete}>{item.name}</List.Item>)}
                /> */}
                <h2>MVT</h2>
                <table>
                    <thead>
                        <th>Name</th>
                        <th>Note</th>
                        <th>Status</th>
                    </thead>
                    <tbody style={{textalign:"left"}}>
                        {this.state.list.map(vision=>(<tr>
                        
                            <td>
                                <Link to={"/vision/"+vision.name}>{vision.name}</Link></td>
                            <td>{vision.note}</td>
                            <td>{vision.status}</td>
                            </tr>))}
                    </tbody>
                </table>
              
          </div>

       )
   }

   
}
export default Projects;