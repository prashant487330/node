import { useState } from "react";
import axios from "axios";
const Home=()=>{
    const [input,setInput]=useState({});
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}));
        console.log(input)
    }
    const handleSubmit= async()=>{
        let api="http://localhost:8000/employees/insert";
        const response= await axios.post(api, input);
        console.log(response.data)
    }
    return(
        <>
        <h1>Welcome to Home Page</h1>
        User Name:<input type="text" name="username" onChange={handleInput}/>
        <br />
        User Email:<input type="text" name="email" onChange={handleInput}/>
        <br />
        First Name:<input type="text" name="fname" onChange={handleInput}/>
        <br />
        Last Name:<input type="text" name="lname" onChange={handleInput}/>
        <br />
        <button onClick={handleSubmit}>Save</button>
        </>
    )
}
export default Home;