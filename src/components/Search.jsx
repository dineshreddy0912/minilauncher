import images from "../files/images";
import jobs from "../files/jobs";
import "./../css/search.css";
function Search(){
    return(
        <>
            <div className="search-jobs">
                {jobs.map((item,index)=>(
                    <div className="image" id={index} style={{
                        
                    }}>
                        <div className="s-image" style={{
                            width:"200px",
                            height:"200px",
                            backgroundImage:`url(${images[item.type]})`,
                            backgroundSize:"cover",
                            backgroundPosition:"center",
                        }}></div>
                        <div className="s-name" style={{
                            marginTop:"15px"
                        }}>
                            <h1 style={{
                                textAlign:"center"
                            }}>{item.name}</h1>
                            <p style={{
                                marginLeft:"5px",
                                marginBottom:'10px',
                                marginTop:"10px"
                            }}>{item.dist}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Search