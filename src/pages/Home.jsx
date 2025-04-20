import { FaFacebook, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import client from "../files/client";
import launcer from "../files/launcer";
import services from "../files/services";
import "./../components/Header";
import Header from "./../components/Header";
import "./../css/home.css";
function Home(){
    return(
        <>
            <Header/>
            <div className="home-m">
                <div className="names">
                    <h1>Mini Freelancer</h1>
                    <p>Looking for skilled experts to turn your ideas into reality?</p>
                </div>
            </div>
            <h1 id="works">Provided Services</h1>
            <div className="services">
            {services.map((item, index) => (
                    <div className="image" id={index} style={{
                        height:"auto",
                        border: "1px solid #fff",
                        backgroundSize:'cover',
                        padding:"20px",
                        display:"flex",
                        flexDirection:"column",
                        alignItems:"center",
                        justifyContent:"center",
                        borderWidth:"1px",
                        borderStyle:'solid',
                        borderColor:"#000",
                        borderRadius:"10px"
                    }}>
                        <div className="s-image" style={{
                            width:"200px",
                            height:"200px",
                            backgroundImage:`url(${item.image})`,
                            backgroundSize:"cover",
                            backgroundPosition:"center",
                            borderWidth:"1px",
                            borderStyle:"solid",
                            borderColor:"#000"
                        }}></div>
                        <div className="s-name" style={{
                            marginTop:"15px"
                        }}>
                            <h1>{item.name}</h1>
                        </div>
                    </div>
            ))}
            </div>
            <h1 id="process">Work process</h1>
            <div className="process">
            <h1 style={{marginLeft:"80px"}}>Client</h1>
                <div className="client">
                    {client.map((item,index)=>(
                        <div className="client-process" id={index}style={{
                            width:"200px",
                            height:"auto",
                            borderWidth:"1px",
                            borderStyle:"solid",
                            borderColor:"#000",
                            display:"flex",
                            flexDirection:"column",
                            alignItems:"center",
                            borderRadius:"10px"
                        }}>
                            <div className="client-image" key={index} style={{
                                width:"180px",
                                height:"180px",
                                backgroundImage:`url(${item.image})`,
                                backgroundSize:"cover",
                                backgroundPosition:"center",
                                backgroundRepeat:"no-repeat",
                                marginTop:"10px",
                                marginBottom:"10px"
                            }}>
                            </div>
                            <div className="client-text">
                                <h2 style={{
                                    textAlign:"center"
                                }}>{item.step}</h2>
                                <p style={{
                                    marginTop:"5px",
                                    marginLeft:"3px",
                                    marginBottom:"5px",
                                    fontSize:'1rem'
                                }}>{item.dist}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <h1 style={{marginLeft:"80px"}}>Free launcer</h1>
                <div className="client">
                    {launcer.map((item,index)=>(
                        <div className="client-process" id={index}style={{
                            width:"200px",
                            height:"auto",
                            borderWidth:"1px",
                            borderStyle:"solid",
                            borderColor:"#000",
                            display:"flex",
                            flexDirection:"column",
                            alignItems:"center",
                            borderRadius:"10px"
                        }}>
                            <div className="client-image" key={index} style={{
                                width:"180px",
                                height:"180px",
                                backgroundImage:`url(${item.image})`,
                                backgroundSize:"cover",
                                backgroundPosition:"center",
                                backgroundRepeat:"no-repeat",
                                marginTop:"10px",
                                marginBottom:"10px"
                            }}>
                            </div>
                            <div className="client-text">
                                <h2>{item.step}</h2>
                                <p></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <h1 style={{textAlign:"center",marginTop:"20px",marginBottom:"20px"}}>Contact</h1>
            <div className="contact" style={{
                display:"flex",
                flexDirection:"row",
                justifyContent:"space-around"
            }}>
                <div className="details">
                <p style={{fontSize:"1.4rem",display:"flex",flexDirection:"row",alignItems:"center",gap:20,marginBottom:"20px"}}><FaLocationDot size={40}/> Amaravathi</p>
                <p style={{fontSize:"1.4rem",display:"flex",flexDirection:"row",alignItems:"center",gap:20,marginBottom:"20px"}}><IoIosMail size={40}/> freelance@mini.com</p>
                <p style={{fontSize:"1.4rem",display:"flex",flexDirection:"row",alignItems:"center",gap:20,marginBottom:"20px"}}><FaPhone size={40}/> +91 0000000000</p>
                </div>
                <div className="join">
                    <h1 style={{textAlign:"center",marginBottom:"20px"}}>Join us</h1>
                    <div style={{
                        display:"flex",
                        flexDirection:"row",
                        gap:20
                    }}>
                        <a href="https://www.instagram.com/_afzal_45" target="_blank"><FaInstagram size={34} color="#000"/></a>
                        <a href="https://www.facebook.com/share/1bf8gpo1GC/" target="_blank"><FaFacebook size={34} color="#000"/></a>
                        <a href="https://github.com/dineshreddy0912" target="_blank"><FaGithubSquare size={34} color="#000"/></a>
                        <a href="https://www.linkedin.com/in/sodum-dineshreddy/" target="_blank"><FaLinkedin size={34} color="#000"/></a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;