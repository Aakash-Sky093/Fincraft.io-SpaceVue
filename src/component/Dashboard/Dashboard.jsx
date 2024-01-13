import React, { useMemo } from 'react'

import "./Dashboard.css";

import { useState , useEffect} from 'react';

import { AgGridReact } from 'ag-grid-react'; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { AgChartsReact } from 'ag-charts-react';

import 'ag-grid-enterprise';


 function Dashboard() {

  const [rowData, setRowData] = useState([]);

  
  useEffect(() => {
    // Fetch data from the external JSON file
    fetch('https://www.ag-grid.com/example-assets/space-mission-data.json')
      .then((response) => response.json())
      .then((data) => {
        // Update the rowData state with the fetched data
        setRowData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  
  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState([
    { field: "mission" , sortable:true , filter:true},
    { field: "company" ,sortable:true , filter:true},
    { field: "location" ,sortable:true , filter:true},
    { field: "date" ,sortable:true , filter:true},
    { field: "price" ,sortable:true , filter:true},
    { field: "successful" ,sortable:true , filter:true},
    { field: "rocket" ,sortable:true , filter:true}
  ]);


  const defaultColDef = useMemo( ()=>({
   resizable: true,
   width: 265     
  }),[]);

  const enableCharts = true;
const enableRangeSelection = true;

////////////////////////////////////////////////////////////////////////Sucessfull Graph/////////////////////////////////////////////////


const obj={}
 rowData.forEach(it=>{
  if(it.successful){
    obj["success"] = {...(obj["success"]||{}),total: (obj["success"]?.total||0)+1,key:"success"}
  }else{
    obj["failure"] = {...(obj["failure"]||{}),total: (obj["failure"]?.total||0)+1,key:"failure"}

  }
})
console.log(Object.values(obj)?.flat())
const chartData = {
  data: Object.values(obj)?.flat(),
  title: {
      text: 'Space Mission Composition',
  },
  series: [
      {
          type: 'pie',
          angleKey: 'total',
          legendItemKey: 'key',
      },
  ],
}


  return (
    <>

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
 All Missons Success Ratio
</button>
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <AgChartsReact options={chartData} /> 
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>


    <div className="ag-theme-quartz-dark" style={{height:1000}} >
  {/* The AG Grid component */}
  <AgGridReact rowData={rowData} columnDefs={colDefs}
  
    rowSelection='multiple' animateRows={true} defaultColDef={defaultColDef}
    enableCharts={enableCharts} enableRangeSelection={enableRangeSelection} />
</div>
</>
  )
}

export default Dashboard;
