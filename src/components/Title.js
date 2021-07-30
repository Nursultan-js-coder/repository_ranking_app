import "../styles/title.css";
import github from "../assets/images/github3.png"

function Title(){
    return(
        <div className="title">
            <img src={github} alt="github image" style={{margin:10}}/>
        </div>
    )
}

export default Title;