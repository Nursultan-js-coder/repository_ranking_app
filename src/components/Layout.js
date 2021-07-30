import Header from "./Header";
import Footer from "./Footer";
import {inject, observer} from "mobx-react";
import {compose} from "recompose";

function Layout({children,languageStore}){
    const handleClick = (e)=>{
        languageStore.setCurrentLang(e.target.textContent.toLowerCase());
        console.log(languageStore.currentLang);
        languageStore.pullRepositories(languageStore.currentLang);
    }
    return (
        <div className="container">
        <Header handleClick={handleClick}/>
            {children}
            <Footer/>
        </div>
    )
}

export default compose(inject("languageStore"))(observer(Layout));