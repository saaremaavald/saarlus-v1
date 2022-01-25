import { createStore } from 'vuex';

const store = createStore({
    state(){
        return {
            scan: false,
            lang : "en",
            strings : {
                "et" : {
                    "welcome" : "Tere tulemast Kuressaare Piiskopilinnusesse!",
                },
                "en" : {
                    "welcome" : "Welcome to the Kuressaare Episcopal Castle!",
                }
            },
            stories : [
                {
                    "title": "Esimene lugu",
                    "author": "Aadu Hint",
                    "route": "about",
                    "file": "About.md",
                    "tags" : [ "essa", "tessa", "kossa" ],
                },
                {
                    "title": "Teine lugu",
                    "author": "Päädu Pint",
                    "route": "teine-lugu",
                    "file": "Teine.md",
                    "tags" : [ "essa", "kossa" ],
                },
                {
                    "title": "Kolmas lugu",
                    "author": "Munaläti Pets",
                    "route": "kolmas-lugu",
                    "file": "Kolmas.md",
                    "tags" : [ "essa", ],
                },
                {
                    "title": "Neljas lugu",
                    "author": "Soovel Mürkmadu",
                    "route": "neljas-lugu",
                    "file": "Neljas.md",
                    "tags" : [ "tessa", "kossa" ],
                },
            ] 
        };
    },
    getters : {
        stories(state){
            return state.stories;
        },
        lang(state){
            return state.lang;
        },
    },
    mutations : {
        setLang(state, lang) {
            state.lang = lang;
        },
    }
});

export default store;