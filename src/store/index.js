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
                    "title": "Kuidas saarlaste arvates mehed ja naised loodi?",
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
                    "tags" : [ "rahvajutt", "murdekeel", "loodus", "uss", "angerjas", "meri", "Püha" ] 
                },
                {
                    "title": "Miks küla ävis?",
                    "slug": "miks-kyla-avis",
                    "tags" : [ "rahvajutt", "murdekeel", "Kihelkonna", "küla", "soo" ] 
                },
                {
                    "title": "Kuda on järved ja jöed tekkind?",
                    "slug": "jarved-ja-joed",
                    "tags" : [ "rahvajutt", "murdekeel", "Vanapagan", "järv", "jõgi", "meri", "laht", "loodus", "Kaarma" ] 
                },
                {
                    "title": "Mardipäev",
                    "slug": "mardipaev",
                    "tags" : [ "mardipäev", "santimine" ] 
                },
                {
                    "title": "Kus on Saaremaa seljaroog ja kuidas sai Kuressaare oma nime?",
                    "slug": "suur-toll",
                    "tags" : [ "Suur Tõll", "Kuressaare" ] 
                },
                {
                    "title": "Mida pidupäeval selga panna?",
                    "slug": "saaremaa-rahvariided",
                    "tags" : [ "rahvariided" ] 
                },
                {
                    "title": "Saaremaa sokud",
                    "slug": "saaremaa-sokud",
                    "tags" : [ "sokud", "santimine" ] 
                },
                {
                    "title": "Kes kala hülgeks nimetab?",
                    "slug": "hylgelaul",
                    "tags" : [ "muusika", "hüljes", "kala", "Jämaja" ] 
                },
                {
                    "title": "Kõrgel masti tipus",
                    "slug": "korgel-masti-tipus",
                    "tags" : [ "muusika", "Rotterdam", "meri", "laev", "Püha", "Muhu" ] 
                },
                {
                    "title": "Mis saab meestest mere põhjas?",
                    "slug": "laevahukk",
                    "tags" : [ "muusika", "Valjala", "Pöide", "meri", "laev", "laevahukk", "kala" ] 
                },
                {
                    "title": "See Saaremaa",
                    "slug": "see-saaremaa",
                    "tags" : [ "muusika", "poiss", "meri", "maa", "Valjala" ] 
                },
                {
                    "title": "Millest laulab saarlane?",
                    "slug": "see-saaremaa-2",
                    "tags" : [ "muusika", "Valjala", "meri", "kuu", "kajakas", "paat" ] 
                },
                {
                    "title": "Kas sa Saaremaa Toivot tead?",
                    "slug": "kas-sa-saaremaa-toivot-tead",
                    "tags" : [ "meri", "kala", "kalapüük", "paat", "Nasva" ] 
                },
                {
                    "title": "Kadripäev",
                    "slug": "kadripaev",
                    "tags" : [ "kadripäev", "santimine" ] 
                },

                // luule
                {
                    "title": "Kidura looduse lopsakas hing",
                    "slug": "aira-kaal-kidura-looduse-lopsakas-hing",
                    "tags" : [ "väin", "raunjalg", "maokeel", "kuuvõtmehein", "pank", "paekivi" ] 
                },
                {
                    "title": "Rannapargis / Udus",
                    "slug": "debora-vaarandi-udus",
                    "tags" : [ "udu", "park", "kiivitaja", "meri", "kurbus", "õnn", "tuul" ] 
                },
                {
                    "title": "Keegi?",
                    "slug": "aira-kaal-keegi",
                    "tags" : [ ] 
                },
                {
                    "title": "Ööviiul",
                    "slug": "debora-vaarandi-ooviiul",
                    "tags" : ["ööviiul", "suvi", "öö", "tuul", "luule"] 
                },
                {
                    "title": "Bioloogiaõpetajale",
                    "slug": "debora-vaarandi-bioloogiaopetajale",
                    "tags" : ["vainurästas", "õpetaja", "bioloogia", "meri", "tamm"] 
                },
                {
                    "title": "Saar",
                    "slug": "debora-vaarandi-saar",
                    "tags" : ["saar", "jää", "lumi", "meri", "rand", "tuul", "sügis"] 
                },
                {
                    "title": "Kaks saarlast",
                    "slug": "betti-alver-kaks-saarlast",
                    "tags" : ["sõprus", "saarlane", "laul", "Suur Tõll", "luule", "tamm"] 
                },
                {
                    "title": "Ma neiman mõrvarile ta oma relvaga",
                    "slug": "andres-ehin-aavik",
                    "tags" : [] 
                },
                {
                    "title": "Kui rohu lillekesed kasvasivad...",
                    "slug": "julie-ederberg",
                    "tags" : [] 
                },
                {
                    "title": "Lootus",
                    "slug": "aira-kaal-lootus",
                    "tags" : [] 
                },
                {
                    "title": "Lahkumise laul",
                    "slug": "aira-kaal-lahkumise-laul",
                    "tags" : [] 
                },
                {
                    "title": "Need kivid",
                    "slug": "aira-kaal-need-kivid",
                    "tags" : [] 
                },
                {
                    "title": "Sandla majakas",
                    "slug": "jaan-kaplinski-sandla-majakas",
                    "tags" : [] 
                },
                {
                    "title": "Kirjanikud suvel",
                    "slug": "kirjanikud-suvel",
                    "tags" : [] 
                },
                {
                    "title": "Hüperborea",
                    "slug": "aleksander-suuman-hyperborea",
                    "tags" : [] 
                },
                // proosa

                // muusika

                // ühiskond
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