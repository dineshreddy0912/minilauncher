import { useState } from "react";
import CreateJob from "../components/Createjob";
import Search from "./../components/Search";
function Jobs(){
    const [post,setPost] = useState(true);
    return(
        <>
            <div className="jobs-main" style={{
                display:'flex',
                justifyContent:"center",
                alignItems:"center",
                gap:30,
                marginTop:'20px',
                marginBottom:'20px'
            }}>
                <p style={{textDecoration: post ? "underline" : "none",cursor:"pointer"}} onClick={()=> setPost(true)}>Post</p>
                <p style={{textDecoration: !post ? "underline" : "none",cursor:"pointer"}} onClick={()=> setPost(false)}>Search</p>
            </div>
            <hr />
            {post && <CreateJob/>}
            {!post && <Search/>}
        </>
    )
}
export default Jobs;