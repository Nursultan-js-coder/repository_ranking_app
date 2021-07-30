import {makeObservable, observable,action} from "mobx";
import {main} from "../api/apiClient"


class LanguageStore {
    languages = undefined;
    repositories = undefined;
    loading = undefined;
    currentLang = undefined;

    constructor() {
        makeObservable(this, {
            languages: observable,
            repositories: observable,
            pullRepositories: action,
            loading: observable,
            setCurrentLang:action,
            currentLang:observable
        })
    }

    pullRepositories(currentLang = "c#") {
        this.loading = true;
        main.repositories(currentLang).then(action((response) => {
            this.repositories = response.data.items;

        }))
            .catch(action((err) => {
                this.errors = err.message;
            }))
            .finally(action(() => {
                this.laoding = false;
            }))
    }

    pullLanguages() {
        this.loading = true;
        main.languages().then(action((response) => {
            this.languages = response.data;
            console.log("languages: ", response.data);
        })).catch(action(err => this.errors = err.message
        )).finally(action(() => this.loading = false))
    }

    setCurrentLang(lang) {
        this.currentLang = lang;

    }
}

export default new LanguageStore();