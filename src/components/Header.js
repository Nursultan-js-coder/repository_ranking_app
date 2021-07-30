import "./header.css";
import {compose} from "recompose";
import {inject, observer} from "mobx-react";
import {useEffect, useState} from "react";
import {main} from "../api/apiClient";
import {LanguageStore} from "../store";


function Header({languageStore,handleClick}){
    const [languages,setLanguages] = useState(undefined);
    useEffect(() => {
        languageStore.pullLanguages();
        languageStore.pullRepositories();
        // getLanguages()
    }, [LanguageStore.currentLang]);

    const getLanguages = async()=>{
        await main.languages().then((res)=>{
            setLanguages(res.data.languages);

        })
    }

    return (
        <header>
            {languages && <p>{languages.toString()}</p>}
            <ul className="languages">
                { languageStore.loading ? <p>loading... </p> : languageStore.errors ? <p>{languageStore.errors}</p> :
                    languageStore.languages &&  languageStore.languages.map((language,index)=> {
                        return <li key={index} onClick={handleClick}><a href="#"><p id="language-name" >{language.name}</p></a> </li>
                    }
                    )}
                <li>{languageStore.currentLang}</li>
            </ul>
        </header>
    )
}

export default compose(inject("languageStore"))(observer(Header));