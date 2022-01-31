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
                        {"src":"mehed-naised_03.webp", "zoom": true, "bgPos":"0 0"},
                        {"src":"mehed-naised_02.webp", "zoom": true},
                    ],
                    "tags" : [ "rahvajutt" ],
                },
                {
                    "title": "Esimised undid",
                    "author": "rahvajutt",
                    "slug": "esimised-undid",
                    "images": [
                        {"src":"esimised-undid.webp", "zoom":true},
                    ],
                    "tags" : [ "essa", "kossa" ],
                },
                {
                    "title": "Hull meresõit",
                    "author": "rahvajutt",
                    "slug": "hull-meresoit",
                    "images": [
                        {"src":"hull-meresoit.webp", "height":"65vh"},
                    ],
                    "tags" : [ "rahvajutt", "meri", "laev", "murdekeel", "Kihelkonna" ],
                },
                {
                    "title": "Undiks käimine",
                    "author": "rahvajutt",
                    "slug": "undiks-kaimine",
                    "images": [
                        {"src":"undiks-kaimine.webp", "height":"65vh"},
                    ],
                    "tags" : [ "rahvajutt", "hunt", "libahunt", "murdekeel", "Pöide" ], 
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