import React from 'react';
import ReactTable from 'react-table';
import {
    Row
} from 'antd';
import {
    connect
} from 'react-redux';
import visionApi from './visionApi';
import { bindActionCreators } from 'redux';
import store from './store/store';
import * as visionAction from './store/visionActions';

class ManageCaseTable extends React.Component {
    constructor(props) {
        super(props);
    //store.subscribe=this.handleStoreChange;
    }
    // handleStoreChange=()=>{
    //     this.setState(store.getState());
    // }
   
    getState = () => {
        return {
            cases: [{
                    ID: "id3",
                    Description: "des",
                    Time: "3"
                },
                {
                    ID: "id3",
                    Description: "des",
                    Time: "3"
                },
                {
                    ID: "id3",
                    Description: "des",
                    Time: "3"
                },
                {
                    ID: "id3",
                    Description: "des",
                    Time: "3"
                },
                {
                    ID: "id3",
                    Description: "des",
                    Time: "3"
                },
            ]
        };
    }
     componentWillMount(){
        //store.dispatch({type:"loadTestCase",value:"a1pe mvt project_Deployment_Automated"});
        // should load case first, then dispatch action to reducer to update state !!!
        //this.props.actions.loadTestCase("a1pe mvt project_Deployment_Automated");
        this.props.actions.loadTestCase("MES MVT");
     }
    AddCase=()=>{
        // store.dispatch({type:"addcase",value:{ID:"New Case",Description:"description",Time:"0"}})
        this.props.actions.addCase(this.props.cases1);
    }
    render() {
        return ( 
            <div>
                <p>{this.props.case1.Id}</p>
            <button onClick={this.AddCase}> Add Case </button> 
            <table style = {
                {
                    border: 1
                },
                {
                    columnRuleStyle: Row
                }
            } >
            <thead>
            <tr>
            <th> ID </th> 
            <th> Description </th> 
            <th > Time saving(min) </th>
            </tr>
             </thead> 
             <tbody> {
                this.props.cases1.map(cases =>
                    <tr>
                    <td> {cases.id} </td>
                     <td> {cases.Description} </td> 
                     <td> {cases.time_saving_hour} </td> 
                     </tr>

                )
            }

            </tbody>  
            </table> 
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cases1:state.visionsReducer.cases,
        case1:state.visionsReducer.case2
    }

}

function mapDispatchToProps(dispatch) {
    return{
        actions:bindActionCreators(visionAction,dispatch)
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(ManageCaseTable);