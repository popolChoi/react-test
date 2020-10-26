import React, { Component } from "react";
// import { inject, observer } from 'mobx-react';

import { AgGridColumn, AgGridReact } from 'ag-grid-react';


// @inject("layoutStore")
// @observer
class Container extends Component {
  render() {
 
    return (
      <div className="ag-theme-alpine" style={ { height: 400, width: 600 } }>
            <AgGridReact
//             columnDefs={[
// {
//       colId: 'make',
//       field: 'make',
//       headerName: 'make',
//       width: 70,
    
//       }
//             ]}
            rowData={[
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000}
    ]}
                >
                <AgGridColumn field="make"></AgGridColumn>
                <AgGridColumn field="model"></AgGridColumn>
                <AgGridColumn field="price"></AgGridColumn>
            </AgGridReact>
        </div>
    );
  }
}

export default Container;
