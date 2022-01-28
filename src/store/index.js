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
                    "title": "Meeste ja naiste loomine",
                    "author": "rahvalooming",
                    "slug": "meeste-ja-naiste-loomine",
                    "images": [
                        {"src":"mehed-naised_01.webp", "zoom": true},
                        {"src":"mehed-naised_02.webp", "zoom": true},
                        {"src":"mehed-naised_03.webp", "zoom": true},
                    ],
                    "tags" : [ "rahvajutt" ],
                },
                {
                    "title": "Teine lugu",
                    "author": "Päädu Pint",
                    "slug": "test",
                    "images": [
                        {"src":"mehed-naised_03.webp"},
                    ],
                    "tags" : [ "essa", "kossa" ],
                },
                {
                    "title": "Kolmas lugu",
                    "author": "Munaläti Pets",
                    "slug": "about",
                    "images": [
                        {"src":"mehed-naised_02.webp"},
                        {"src":"mehed-naised_03.webp"},
                    ],
                    "tags" : [ "essa", ],
                },
                {
                    "title": "Neljas lugu",
                    "author": "Soovel Mürkmadu",
                    "slug": "test-zoop",
                    "images": [
                        {"src":"mehed-naised_01.webp"},
                        {"src":"mehed-naised_02.webp"},
                        {"src":"mehed-naised_03.webp"},
                    ],
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