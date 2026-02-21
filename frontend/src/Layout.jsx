import {Link,Outlet} from "react-router-dom"
const Layout=()=>{
    return(
        <>
        <Link to="home">Home</Link>||
        <Link to="display">Display</Link>||
        <Link to="search">Search</Link>||
        <Link to="update">Update</Link>
        <hr size="4" color="green"/>
        <Outlet/>
        <hr size="4" color="green"/>
        www.myRelation.com
        </>
    )
}
export default Layout;