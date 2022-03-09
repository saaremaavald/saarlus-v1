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
                    "tags" : [ "rahvajutt", "murdekeel", "hunt", "loodus", "Karja" ],
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
                {
                    "title": "Mis juhtub, kui saare naine palja pääga välja läheb?",
                    "slug": "pahila-soo",
                    "tags" : [ "rahvajutt", "murdekeel", "haldjad", "soo", "naine", "tammik", "Karja" ] 
                },
                {
                    "title": "Külmking ja puuraiuja",
                    "slug": "kylmking-ja-puuraiuja",
                    "tags" : [ "rahvajutt", "murdekeel", "räim", "kala", "Kärla", "külmking", "mets", "hunt", "kartul", "kalapahl" ] 
                },
                {
                    "title": "Laevameeste eksimus",
                    "slug": "laevameeste-eksimus",
                    "tags" : [ "rahvajutt", "murdekeel", "meri", "kala", "kammeljas", "laev", "Mustjala" ] 
                },
                {
                    "title": "Lesta kiivas suu",
                    "slug": "lesta-kiivas-suu",
                    "tags" : [ "rahvajutt", "lest", "murdekeel", "Anseküla" ] 
                },
                {
                    "title": "Murelik surnu",
                    "slug": "murelik-surnu",
                    "tags" : [ "rahvajutt", "surm", "Kaarma" ] 
                },
                {
                    "title": "Rehepapp",
                    "slug": "rehepapp",
                    "tags" : [ "rahvajutt", "murdekeel", "rehepapp", "Vanapagan", "torupill", "muusika", "Muhu" ] 
                },
                {
                    "title": "Mida köike mererannast vöib leida?",
                    "slug": "mida-koike-mererannast-voib-leida",
                    "tags" : [ "rahvajutt", "murdekeel", "meri", "laev", "Kihelkonna", "haakrik" ] 
                },
                {
                    "title": "Tatt ja ämblik",
                    "slug": "tatt-ja-amblik",
                    "tags" : [ "rahvajutt", "murdekeel", "loodus", "Püha", "Nasva" ] 
                },
                {
                    "title": "Ussid ning annergad",
                    "slug": "ussid-ning-angerjad",
                    "tags" : [ "rahvajutt", "murdekeel", "loodus", "uss", "angerjas", "meri", "Püha"] 
                },
                {
                    "title": "Miks küla ävis?",
                    "slug": "miks-kyla-avis",
                    "tags" : [ "rahvajutt", "murdekeel", "Kihelkonna", "küla", "soo"] 
                },
                {
                    "title": "Järved ja jõed",
                    "slug": "jarved-ja-joed",
                    "tags" : [ "rahvajutt", "murdekeel", "Vanapagan", "järv", "jõgi", "meri", "laht", "loodus", "Kaarma"] 
                },
                {
                    "title": "Mardipäev",
                    "slug": "mardipaev",
                    "tags" : [ "mardipäev", "santimine"] 
                },
                {
                    "title": "Saaremaa rahvariided",
                    "slug": "saaremaa-rahvariided",
                    "tags" : [ "rahvariided" ] 
                },
                {
                    "title": "Saaremaa sokud",
                    "slug": "saaremaa-sokud",
                    "tags" : [ "sokud", "santimine" ] 
                },
                {
                    "title": "Hülgelaul",
                    "slug": "hylgelaul",
                    "tags" : [ "muusika", "hüljes", "kala", "Jämaja" ] 
                },
                {
                    "title": "Kõrgel masti tipus",
                    "slug": "korgel-masti-tipus",
                    "tags" : [ "muusika", "Rotterdam", "meri", "laev", "Püha", "Muhu" ] 
                },
                {
                    "title": "Laevahukk",
                    "slug": "laevahukk",
                    "tags" : [ "muusika", "Valjala", "Pöide", "meri", "laev", "laevahukk", "kala" ] 
                },
                {
                    "title": "See Saaremaa",
                    "slug": "see-saaremaa",
                    "tags" : [ "muusika", "poiss", "meri", "maa", "Valjala" ] 
                },
                {
                    "title": "See Saaremaa 2",
                    "slug": "see-saaremaa-2",
                    "tags" : [ "muusika", "Valjala", "meri", "kuu", "kajakas", "paat" ] 
                },
                {
                    "title": "Kalamees Toivo",
                    "slug": "kalamees-toivo",
                    "tags" : [ "meri", "kala", "kalapüük", "paat", "Nasva" ] 
                },
                {
                    "title": "Kadripäev",
                    "slug": "kadripaev",
                    "tags" : [ "kadripäev", "santimine" ] 
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