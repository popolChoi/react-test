import React, { Component } from "react";
// import { inject, observer } from 'mobx-react';

import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import xlsx from 'xlsx';


import Form from '../../___TEST/Results.xlsx';

// @inject("layoutStore")
// @observer
class Container extends Component {
  on = (event) => {
    const arr = [{age:10, gender:'Male', name:'홍길동'},
             {age:20, gender:'Female', name:'심청'},
             {age:30, gender:'Male', name:'곰돌이'}];
    const ws = xlsx.utils.json_to_sheet(arr);
    const wb = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, "Sheet1");
    xlsx.writeFile(wb, "Test.xlsx");
  }


  readExcel = (event) => {
    let input = event.target;
    let reader = new FileReader();
    reader.onload =  () => {
        let data = reader.result;
        let workBook = xlsx.read(data, { type: 'binary' });
        workBook.SheetNames.forEach( (sheetName) => {
            console.log('SheetName: ' + sheetName);
            let rows = xlsx.utils.sheet_to_json(workBook.Sheets[sheetName]);
            console.log(JSON.stringify( rows, null, 2))
        })
    };

    console.log(input.files[0]);

    reader.readAsBinaryString(input.files[0]);
}

  render() {
    return (
      <React.Fragment>
        <button onClick={this.on}>on</button>
        <input type="file" onChange={this.readExcel} />
 {/* <a
                  onClick={(e) =>{
                    e.target.href = Form
                     console.log(e.target.href);
                    }}
                  //download={Form}
                >Import Application
                </a> */}
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
      </React.Fragment>
     
    );
  }
}

export default Container;
