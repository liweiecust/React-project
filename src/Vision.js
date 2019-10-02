import React from 'react';
import {Tabs} from 'antd';


 import DeployTemplate from './DeployImage';
 import ManageTestCaseTab from './ManageCaseTab';

 const  {TabPane}  = Tabs;

class Vision extends React.Component{
    constructor(props){
        super(props);
        this.state={visionName:''};
        this.state.visionName=this.props.match.params.visionName; // get the vision name
        this.state.activeKey=1;
    }

    
    callback=function callback(key){
      
        console.log(key);
        this.setState({
            activeKey:key
        })
       
      }
    render(){
        return(
           <div>
               <h1>Manage MVT</h1>
               <h3>{this.state.visionName}</h3>
               <p>media:</p>
               <p>status:</p>
               <p>vm:win2016-en-lv3</p>
               <button>Refresh</button>
               <div className="tab-header">
                    <ul>
                            <li className="tab" style={{float:'left'}} onClick={this.callback.bind(this,1)}>
                             DeployImage
                            </li>
                            <li  className="tab"  style={{float:'left'}} onClick={this.callback.bind(this,2)}>
                        MVT Switch
                            </li>
                            <li  className="tab" style={{float:'left'}} onClick={this.callback.bind(this,3)}>
                        Configure Task Setting
                            </li>
                            <li  className="tab" style={{float:'left'}} onClick={this.callback.bind(this,4)}>
                        Edit Case
                            </li>
                        </ul>

               </div>


              
               
                <div class="tab-content">
                    <div className={"tab-content"+(this.state.activeKey===1?'-active':'-inactive')}>
                    <DeployTemplate/>
                         </div>
                    <div className={"tab-content"+(this.state.activeKey===2?'-active':'-inactive')}> Content of Tab 2</div>
                    <div className={"tab-content"+(this.state.activeKey===3?'-active':'-inactive')}> Content of Tab 3</div>
                    <div className={"tab-content"+(this.state.activeKey===4?'-active':'-inactive')}>
                        <ManageTestCaseTab/>
                    </div>
                </div>
              
           </div>
           
        
        )
        }
}
export default Vision;