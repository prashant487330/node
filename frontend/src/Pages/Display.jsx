import axios from "axios";
import { useState,useEffect } from "react";
const Display=()=>{
    const [mydata,setMydata]=useState([]);
    const loadData=async()=>{
        let api="http://localhost:8000/employees/display";
        const response=await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }
    useEffect(()=>{
        loadData();
    },[])

    const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.firstname}</td>
                <td>{key.lastname}</td>
                <td>{key.userid.username}</td>
                <td>{key.userid.email}</td>
            </tr>
            </>
        )
    })
    return(
        <>
        <h1>Welcome to Dispaly Page</h1>
        <hr />
        <table>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Email</th>
            </tr>
            {ans}
        </table>
        </>
    )
}
export default Display;