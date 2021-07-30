import {inject, observer} from "mobx-react";
import {compose} from "recompose";
import {useEffect} from "react";
import Content from "../components/Content";
import "./client.css";

function Client({languageStore}){
    useEffect(()=>{
        languageStore.pullRepositories(languageStore.currentLang);
    },[])
    return (
        <div className="content">
            <h2>Top repositories for language : {languageStore.currentLang} </h2>
            {languageStore.loading ? <p>loading...</p>:languageStore.errors ? <p>{languageStore.errors}</p> : languageStore.repositories
                && <Content repositories={languageStore.repositories}/>}
        </div>
    )
}
export default  compose(inject("languageStore"))(observer(Client));