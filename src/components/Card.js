import star from "../assets/images/star.svg"
import "../styles/card.css";
import {get100letter} from "../utils";

function Card({repo}){
    console.log(repo.owner);
    return(
        <div className="mask">
            <div className="card">
                <img className="logo" src={repo.owner.avatar_url} alt={`${repo.name}'s avatar `}  />
                <h2 className="card__info">
                    <img src={star} alt="star"/>
                    <span>{repo.stargazers_count}</span>
                    <p>{repo.name}</p>
                </h2>
                <p className="card__description">{get100letter(repo.description)}
                </p>
                <div className="card__actions">
                    <button><a href={repo.homepage} style={{color:"#fff",textDecoration:"none"}}>visit website</a></button>
                </div>
            </div>
        </div>
    )
}
export default Card;