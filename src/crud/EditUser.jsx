import { useNavigate, useParams } from "react-router-dom"
import style from "./crud.module.css"
import { useEffect, useState } from "react"
import axios from "axios"

const EditUser=()=>{
    let newData
    let navigate=useNavigate()
    let obj=useParams()
    const [name ,setName] =useState("")
    const [salary ,setSalary] =useState("")
    const [company ,setCompany] =useState("")
    useEffect(()=>{
        axios.get(`http://localhost:5004/employees/${obj.abc}`)
        .then((there)=>{
           setName(there.data.empName)
           setSalary(there.data.empSalary)
           setCompany(there.data.empCompany)
        })
        .catch(()=>{console.log("error");})
    },[])
    let edit=(e)=>{
        // e.preventDefault()
            axios.put(`http://localhost:5004/employees/${obj.abc}`,newData)
            .then(()=>{
               alert("DATA HAS BEEN UPDATED")
               navigate("/user")
            })
            .catch(()=>{console.log("error");})
      
    }

    return(
      
        <div id={style.EditUser}>

            <div id={style.formDiv}>

            <form onSubmit={(e)=>{
                newData={
                    empName:name,
                    empSalary:salary,
                    empCompany:company
                }
                e.preventDefault()
                edit()
            }}>
                <h1>Edit-User</h1>
                <label>NAME</label>
                
                <br/><br/>

                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>

                <br/><br/>
                <label>SALARY</label>
                
                <br/><br/>

                <input type="text" value={salary} onChange={(e)=>{setSalary(e.target.value)}}/>

                <br/><br/>
                <label>COMPANY</label>
                
                <br/><br/>

                <input type="text" value={company} onChange={(e)=>{setCompany(e.target.value)}}/>
                
                <br/><br/>
                <button type="submit">Submit</button>

            </form>
           </div>
        </div>
    )
}
export default EditUser