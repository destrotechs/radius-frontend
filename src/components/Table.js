import React from "react";
import DataTable from 'react-data-table-component';


function TableData(props){   

    let {data} = props
    let t_headers = Object.keys(data[0])

    let cols = []

    t_headers.map(thead=>{
       let h = thead.split("_").join(" ").toUpperCase()
        cols.push({
            name:h,
            selector:row =>row[thead],
            sortable: true,
        })
    });

    return (
        <DataTable
            title="Packages -All packages"
            columns={cols}
            data={data.length===0?null:data}
            selectableRows
            pagination
        />
        
    )

}
export default TableData;