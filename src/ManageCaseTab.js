import React from 'react';
import ReactTable from 'react-table'

class ManageCaseTable extends React.Component{

    render(){
       const columns=[
            {
                Header:"ID",
            accessor: "Description",
            },
            {Header:"Description",
            accessor: "Description",
       

            },
            {
                Header:"Time Saving",
                accessor: "Description",
              
            }
        ];
        return(
            <div>
                <button>Add Case</button>
                <ReactTable 
                data={[{Header:"df",accessor:"df"},{Header:"df",accessor:"df"}]}
                columns={columns}
                    className="-striped -highlight">

                </ReactTable>
            </div>
        )
    }
}
export default ManageCaseTable;