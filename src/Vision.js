import React from 'react';
import {Tabs} from 'antd';


 import DeployTemplate from './DeployImage';
 import ManageTestCaseTab from './ManageCaseTab';
 import {Provider,Connect} from 'react-redux';
 import * as visionActions from './store/visionActions';
 import {connect} from 'react-redux';
 import { bindActionCreators } from "redux";

 const  {TabPane}  = Tabs;

class Vision extends React.Component{
    constructor(props){
        super(props);
    //   this.state={visionName:''};
     //this.state.visionName=this.props.match.params.visionName; // get the vision name
     this.state={activeKeyd:133333333333};    //this.state is the state of component itself
    }
  
componentWillMount=()=>{
    this.reloadVision();
}
reloadVision=()=>{
    const visionName=this.props.match.params.visionName;
    this.props.visionActions.loadVision(visionName);
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
               <p>{this.state.activeKeyd}</p>
               <h1>Manage MVT</h1>
               <h3>{this.props.vision.name}</h3>
               <p>Note:{this.props.vision.note}</p>
               <p>media:{this.props.vision.media}</p>
               <p>status:{this.props.vision.status}</p>
               {/* <p>vm:{(this.props.vision.project_schedule)[0].machine_demand.dorm.name}</p> */}
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
                        <ManageTestCaseTab />
                    </div>
                </div>
              
           </div>
           
        
        )
        }
}
//  Vision.defaultProps={
//      activeKey:1
//  }
function mapStateToProps(state,ownProps){ //state in function mapStateToProps is the state in store, shared by all child components
    return {
        
        vision:state.visionsReducer.vision,
        activeKey:state.reducer.showMsg

    }

}
function mapDispatchToProps(dispatch){
    return{
        visionActions:bindActionCreators(visionActions, dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Vision);