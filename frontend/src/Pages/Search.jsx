import axios from "axios";
import { useState } from "react";
const Search=()=>{
    const[empno, setEmpno]=useState("");
    const[mydata, setMydata]=useState([]);
    const handleSubmit=async()=>{
        let api=`http://localhost:8000/employee/search/?empno=${empno}`;
        const response=await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }
    const ans=mydata.map((key)=>{
        return(
            <>
            </>
        )
    })
    return(
        <>
        <h1>Search</h1>
        </>
    )
}
export default Search;