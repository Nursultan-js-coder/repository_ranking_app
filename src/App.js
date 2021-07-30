import {BrowserRouter,Switch,Route} from "react-router-dom";
import Client from "./pages/Client";
import Layout from "./components/Layout"
import {observer, Provider} from "mobx-react";
import {LanguageStore as  languageStore} from "./store";
import "./styles/index.css";
import Title from "./components/Title";

function App() {
  return (
      <Provider languageStore={languageStore} >
          <>
       <div className="App">
      <BrowserRouter>
        <Switch>
          <Layout>
           <Route exact path="/" >
               <>
                   <Title/>
                   <Client />

               </>

          </Route>
          </Layout>
        </Switch>
      </BrowserRouter>

       </div>
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
          <div className="wave wave4"></div>
          </>
      </Provider>
  );
}

export default observer(App);
