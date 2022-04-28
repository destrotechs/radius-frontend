import React from "react";


function Form(props){
    let {data,form_title} = props
    return (
        <div classNameName="card">
            <div classNameName="card-body">
                <h5 classNameName="card-title">{form_title}</h5>
                <div className="dropdown-divider"></div>
                    {data.map((key,index)=>{
                        return (
                            index===0?'':(key=='created_at' || key==='updated_at' || key==='email_verified_at' || key==='remember_token')?'':
                            <div className="form-floating mb-3 text-start">
                            <input type="email" className="form-control" id={key} placeholder={key.split("_").join(" ")}/>
                            <label for="exampleFormControlInput1" className="form-label text-start">{key.split("_").join(" ").toUpperCase()}</label>

                            </div>                            
                        )
                    })}
            </div>
            <div classNameName="card-footer text-start d-flex justify-content-start">
                <button type="button" className="btn btn-success text-start">Save</button>
            </div>
        </div>
    )

}
export default Form;