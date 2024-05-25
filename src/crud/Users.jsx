import style  from "./crud.module.css"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
const Users=()=>{
    let [user,setUser]=useState([])
    let [bool,setBool]= useState(false)
    useEffect(()=>{
        axios.get("http://localhost:5004/employees")
        .then((response)=>{setUser(response.data)})
        .catch(()=>{console.log("error");})
        
        setBool(false)
    },[bool])



    let handelDelete=(id)=>{
        axios.delete(`http://localhost:5004/employees/${id}`)
        .then((e)=>{
            e.preventDfault()
            alert("DELETED THE DATA")
            setBool(true)
        })
        .catch(()=>{console.log("error");})
    }
    return(
       
        <div id={style.user}>
          <table>
            <thead>
                <tr >
                    <th>NAME</th>
                    <th>SALARY</th>
                    <th>COMPANY</th>
                </tr>
            </thead>
             
            <tbody>
            {user.map((detail)=>{
               return(
          
                <tr>
                    <td >{detail.empName}</td>
                    <td >{detail.empSalary}</td>
                    <td >{detail.empCompany}</td>
                    <td><button><Link to={`/edit/${detail.id}`}>Edit</Link></button></td>
                    <td><button id={style.delbtn} onClick={()=>{
                        handelDelete(detail.id)
                    }}>Delete</button></td>
               </tr>
            )
            })}
           </tbody>
           </table>

        </div>
    )
}
export default Users