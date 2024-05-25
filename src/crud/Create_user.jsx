import style  from "./crud.module.css"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const Create_user=()=>{
    let [name, setName]= useState("")
    let [sal, setSal]= useState()
    let [comp, setComp]= useState("")


    let navigate=useNavigate();

    const getName=(e)=>{
        setName(e.target.value)
    }
    const getSal=(b)=>{ 
        setSal(b.target.value)
    }
    const getComp=(c)=>{
        setComp(c.target.value)
    }
    let payLoad={
        empName : name,
        empSalary : sal,
        empCompany : comp
    }
    const submit=(e)=>{
        
        axios.post('http://localhost:5004/employees',payLoad)
        .then(()=>{
            alert("DATA SENT");
            navigate("/user")
        
        })
        .catch(()=>{console.log("shit");})

        console.log(name);
        console.log(sal);
        console.log(comp);
    }
    return(
        <div id={style.createUser}>
           <div id={style.formDiv}>
            <form onSubmit={(e)=>{
                e.preventDefault()
                submit()
                }}>
                <h1>Create-User</h1>
                <label>NAME</label>
                <br/><br/>

                <input type="name"  Value={name} onChange={getName} required/>

                <br/><br/>
                <label>SALARY</label>
                <br/><br/>

                <input type="number" Value={sal} onChange={getSal} required/>

                <br/><br/>
                <label>COMPANY</label>
                <br/><br/>

                <input type="name" Value={comp} onChange={getComp} required/>
                
                <br/><br/>
                <button type="submit">Submit</button>

            </form>
           </div>
        </div>
    )
}
export default Create_user