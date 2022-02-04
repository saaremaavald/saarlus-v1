import { createStore } from 'vuex';

const store = createStore({
    state(){
        return {
            scan: false,
            lang : "et",
            activeStory : {},
            modalOpen: false,
            stories : [
                {
                    "title": "Meeste ja naiste loomine",
                    "slug": "meeste-ja-naiste-loomine",
                    "tags" : [ "rahvajutt" ],
                },
                {
                    "title": "Esimised undid",
                    "slug": "esimised-undid",
                    "tags" : [ "essa", "kossa" ],
                },
                {
                    "title": "Hull meresõit",
                    "slug": "hull-meresoit",
                    "tags" : [ "rahvajutt", "meri", "laev", "murdekeel", "Kihelkonna" ],
                },
                {
                    "title": "Undiks käimine",
                    "slug": "undiks-kaimine",
                    "tags" : [ "rahvajutt", "hunt", "libahunt", "murdekeel", "Pöide" ], 
                },
                {
                    "title": "Mis on Kaali järve põhjas?",
                    "slug": "mis-on-kaali-jarve-pohjas",
                    "tags" : [ "rahvajutt", "murdekeel", "Kaali järv" ], 
                },
                {
                    "title": "Jänese lõhkine mokk",
                    "slug": "janese-lohkine-mokk",
                    "tags" : [ "rahvajutt", "murdekeel", "jänes", "loodus", "Valjala", "T-särk", "foto", "muusika", "lammas", "kiviaed" ], 
                },
            ] 
        };
    },
    getters : {
        stories(state){
            return state.stories;
        },
        activeStory(state){
            return state.activeStory;
        },
        modalOpen(state){
            return state.modalOpen;
        },
    },
    mutations : {
        setActiveStory(state, frontmatter) {
            state.activeStory = frontmatter;
            // console.log("Active changed:" + state.activeStory.origin);
        },
        toggleModal(state) {
            state.modalOpen = !state.modalOpen;
            // console.log("Active changed:" + state.activeStory.origin);
        },
    }
});

export default store;