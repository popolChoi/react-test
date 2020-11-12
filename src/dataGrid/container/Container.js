import React, { Component } from "react";
// import { inject, observer } from 'mobx-react';

import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import xlsx from 'xlsx';


import Form from '../../___TEST/Results.xlsx';

// @inject("layoutStore")
// @observer
class Container extends Component {

  state = {
    columnDefs: [],
    rowData: [],
    gridHeight: 400,
  }

  
  componentDidMount() {
    this.onUpdateGridHeight();
    window.addEventListener('resize', this.onUpdateGridHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onUpdateGridHeight);
  }

  onUpdateGridHeight = () =>{
    const wh = window.innerHeight;
    if ( this.dataGrid && wh ) {
      const gh = this.getTopPosition(this.dataGrid.gridRef);
      const resultHeight = wh - gh - 70;
      // 데이터그리드의 height update
      this.setState({
        gridHeight: resultHeight,
      });
    }
  }

   getTopPosition(el) {
    let yPos = 0;
    while (el) {
      if (el.tagName === 'BODY') {
        yPos += (el.offsetTop + el.clientTop);
      } else {
        yPos += (el.offsetTop + el.clientTop);
      }
      el = el.offsetParent;
    }
    return yPos;
  }

  on = (event) => {
    // const arr = [{age:10, gender:'Male', name:'홍길동'},
    //          {age:20, gender:'Female', name:'심청'},
    //          {age:30, gender:'Male', name:'곰돌이'}];
    // const ws = xlsx.utils.json_to_sheet(arr);
    // const wb = xlsx.utils.book_new();
    // xlsx.utils.book_append_sheet(wb, ws, "Sheet1");
    // xlsx.writeFile(wb, "Test.xlsx");
    const input = require('../../___TEST/Results.xlsx');

    var XLSX = require('xlsx');
    // var workbook = XLSX.readFile('../../___TEST/Results.xlsx');
    // var sheet_name_list = workbook.SheetNames;
    // var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    console.log(XLSX);

    // let reader = new FileReader();
    // reader.onload =  () => {
    //     let data = reader.result;
    //     let workBook = xlsx.read(data, { type: 'binary' });
    //     workBook.SheetNames.forEach( (sheetName) => {
    //         // console.log('SheetName: ' + sheetName);
    //         let rows = xlsx.utils.sheet_to_json(workBook.Sheets[sheetName]);
    //                     // console.log(JSON.stringify( rows, null, 2))

    //         const columnDefs = Object.keys(rows[0]).map((key)=>({
    //             colId: key,
    //             field: key,
    //             headerName: key,
    //         }))
    //         this.setState({
    //           rowData :rows,
    //           columnDefs,
    //         });
    //     })
    // };

    // reader.readAsBinaryString(input);
    
  }


  readExcel = (event) => {
    console.log(event.target.files);
    let input = event.target;
    let reader = new FileReader();
    reader.onload =  () => {
        let data = reader.result;
        let workBook = xlsx.read(data, { type: 'binary' });
        workBook.SheetNames.forEach( (sheetName) => {
            // console.log('SheetName: ' + sheetName);
            let rows = xlsx.utils.sheet_to_json(workBook.Sheets[sheetName]);
                        // console.log(JSON.stringify( rows, null, 2))

            const columnDefs = Object.keys(rows[0]).map((key)=>({
                colId: key,
                field: key,
                headerName: key,
            }))
            // this.setState({
            //   rowData :rows,
            //   columnDefs,
            // });
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
                      <div style={{ width: '100%', height: '100%' }}>
    <div className="ag-theme-alpine" style={ { height: this.state.gridHeight, width: '90%' } }>
              <AgGridReact
                        ref={node => this.dataGrid = node}

              onGridReady={()=>this.onUpdateGridHeight()}
              columnDefs={this.state.columnDefs}
              rowData={this.state.rowData}
                          debug={true}
                          defaultColDef={{
        sortable: true,
        resizable: true,
        filter: true,
      }}

                />
          </div>
                        </div>

      
      </React.Fragment>
     
    );
  }
}

export default Container;
