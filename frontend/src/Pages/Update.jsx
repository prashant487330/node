import axios from "axios";
import { useState,useEffect } from "react";
import {useNavigate} from "react-router-dom";
const Update=()=>{
    const [mydata, setMydata]=useState([]);
    const Navigate=useNavigate();
    const loadData=async()=>{
        let api="http://localhost:8000/employees/updatedisplay";
        const response=await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }
    useEffect(()=>{
        loadData();
    },[])
    return(
        <>
        <h1>Edit</h1>
        </>
    )
}
export default Update;