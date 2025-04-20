import { Link } from "react-router-dom";
import "./../css/header.css";
function Header(){
    return(
        <>
            <div className="header">
                <div className="left">
                    <h1>Mini launcher</h1>
                </div>
                <div className="right">
                    <ul>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/jobs"}>Jobs</Link></li>
                        <li><a href="#works">Services</a></li>
                        <li><Link to={"/sign-in"}>Sign in</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Header;