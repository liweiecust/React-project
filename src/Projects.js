import React from 'react';
import {List} from 'antd';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {loadVisions} from './store/visionActions';
import store from './store/store';

class Projects extends React.Component{

    constructor(props){
        super(props);
        // this.state=this.getInitialState;
        //this.state=(store.getState()).visionsReducer;
        store.subscribe(this.handleStoreChange);
       
    }
     
    handleStoreChange=()=>{
        this.setState(store.getState());
    }
       
      /*  componentWillMount(){
        this.setState(store.getState());
       }
     */
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
                         {this.props.lists.map(vision=>(<tr>
                        
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
function mapStateToProps(state,ownProps) {
    return{
        lists:state.visionsReducer.lists

    }
     
}
function mapDispatchToProps(dispatch){
    return{
        type:"load_visions"
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Projects);