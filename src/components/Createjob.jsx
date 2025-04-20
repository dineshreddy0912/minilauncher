import services from "../files/services";
import "./../css/create.css";
function CreateJob(){
    return(
        <>
            <div className="create-main" style={{
                width:"100%",
                height:"95vh",
                display:"flex",
                flexDirection:'column',
                alignItems:"center",
            }}>
                <div className="input" style={{
                    display:"flex",
                    flexDirection:'column',
                    width:"500px"
                }}>
                    <input type="text" name="project" id="" placeholder="Project name"/>
                    <input type="number" name="price" id="" placeholder="Budget of project"/>
                    <textarea name="dist" id="" cols="30" rows="10"></textarea>
                    <select name="type" id="">
                        <option value="">-- select project type --</option>
                        {services.map((item,index)=>(
                            <option value={index}>{item.name}</option>
                        ))}
                    </select>
                    <button>Submit</button>
                </div>
            </div>
        </>
    )
}
export default CreateJob;