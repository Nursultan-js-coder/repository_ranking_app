import {observer} from "mobx-react";
import Card from "./Card";

function Content({repositories}){

    return (
        <>
                <ul className="repos">
                {repositories.map(repo=>(
                    <li className="repo">
                        <Card repo={repo}/>
                    </li>
                ))}

            </ul>

        </>

    )

}
export default observer(Content)