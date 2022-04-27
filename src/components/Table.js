import React from "react";
import DataTable from 'react-data-table-component';


function TableData(props){   

    let {data,page_title} = props
    let t_headers = Object.keys(data[0])

    let cols = []
    let theads = []

    t_headers.map(thead=>{
       let h = thead.split("_").join(" ").toUpperCase()
       theads.push(h);
        cols.push({
            name:h,
            selector:row =>row[thead],
            sortable: true,
        })
    });

    function handleDeletePackage(e){
        console.log("========clicked=========",e.target.id);
        console.log("========clicked=========",e.target.id);

        let mid = e.target.id;
        alert("ID ",mid);
    };

    return (
    <div className="card">
        <div className="card-body">
        <h5 className="card-title">{page_title}</h5>
       <table className="table table-bordered table-sm table-striped">
           <thead>
               <tr>
                   <th>#</th>
                   {theads.map((h,index)=>{
                       return (
                           index===0?'':<th key={index}>{h}</th>
                       )
                   })}
                   <th>Actions</th>
               </tr>
           </thead>
           <tbody>
               {data.map((row,index)=>{
                   return(
                   <tr>
                        <td>{index+1}</td>
                       {Object.keys(row).map((key,index)=>{
                           return(
                               index===0?'':<td>{row[key]}</td>
                           
                           )
                       })}
                       <td>
                           <a href="#" className="btn btn-primary btn-sm"><i className="bi bi-pencil-fill"></i></a>
                           <button className="btn btn-danger btn-sm" id="2" onClick={handleDeletePackage}><i className="bi bi-trash-fill"></i></button>

                       </td>
                   </tr>
                   )
               })}
           </tbody>
       </table>
       </div>
    </div>
        
    )

}
export default TableData;