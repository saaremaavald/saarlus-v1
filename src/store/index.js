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
                    "tags" : [ "rahvajutt", "mees", "naine", "jumal", "murdekeel", "Kaarma" ],
                },
                {
                    "title": "Kes esimised undid lõi?",
                    "slug": "esimised-undid",
                    "tags" : [ "rahvajutt", "murdekeel", "hunt", "loodus", "Karja" ],
                },
                {
                    "title": "So kõige ullem meresõit?",
                    "slug": "hull-meresoit",
                    "tags" : [ "rahvajutt", "meri", "laev", "murdekeel", "Kihelkonna" ],
                },
                {
                    "title": "Mis oleks, kui käiksid korra undiks?",
                    "slug": "undiks-kaimine",
                    "tags" : [ "rahvajutt", "hunt", "libahunt", "murdekeel", "Pöide" ], 
                },
                {
                    "title": "Mis on Kaali järve põhjas?",
                    "slug": "mis-on-kaali-jarve-pohjas",
                    "tags" : [ "rahvajutt", "murdekeel", "Kaali järv" ], 
                },
                {
                    "title": "Miks veiksel valgel jänesel mokk löhki on?",
                    "slug": "janese-lohkine-mokk",
                    "tags" : [ "rahvajutt", "murdekeel", "jänes", "loodus", "Valjala", "T-särk", "foto", "muusika", "lammas", "kiviaed" ], 
                },
                {
                    "title": "Mis juhtub, kui saare naine palja pääga välja läheb?",
                    "slug": "pahila-soo",
                    "tags" : [ "rahvajutt", "murdekeel", "haldjad", "soo", "naine", "tammik", "Karja" ] 
                },
                {
                    "title": "Mis külmking vanamehest tahtis?",
                    "slug": "kylmking-ja-puuraiuja",
                    "tags" : [ "rahvajutt", "murdekeel", "räim", "kala", "Kärla", "külmking", "mets", "hunt", "kartul", "kalapahl" ] 
                },
                {
                    "title": "Mille otsa Inglis tiimer kinni joos?",
                    "slug": "laevameeste-eksimus",
                    "tags" : [ "rahvajutt", "murdekeel", "meri", "kala", "kammeljas", "laev", "Mustjala" ] 
                },
                {
                    "title": "Miks lesta suu kiivas on?",
                    "slug": "lesta-kiivas-suu",
                    "tags" : [ "rahvajutt", "lest", "murdekeel", "Anseküla" ] 
                },
                {
                    "title": "Kes kolistas öösel teises toas?",
                    "slug": "murelik-surnu",
                    "tags" : [ "rahvajutt", "surm", "Kaarma" ] 
                },
                {
                    "title": "Mis abi saab sellest, kui pill üüab? Napsu pealt?",
                    "slug": "rehepapp",
                    "tags" : [ "rahvajutt", "murdekeel", "rehepapp", "Vanapagan", "torupill", "muusika", "Muhu" ] 
                },
                {
                    "title": "Mida köike mererannast vöib leida?",
                    "slug": "mida-koike-mererannast-voib-leida",
                    "tags" : [ "rahvajutt", "murdekeel", "meri", "laev", "Kihelkonna", "haakrik" ] 
                },
                {
                    "title": "Kas tahaksid elada linnas või maal?",
                    "slug": "tatt-ja-amblik",
                    "tags" : [ "rahvajutt", "murdekeel", "loodus", "Püha", "Nasva", "linn", "maa" ] 
                },
                {
                    "title": "Kuda need ussid ja annergad siia ilma sigisid?",
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
                    "title": "Kuidas Saaremaal sokku teha?",
                    "slug": "saaremaa-sokud",
                    "tags" : [ "sokud", "santimine", "uusaasta" ] 
                },
                {
                    "title": "Kes kala hülgeks nimetab?",
                    "slug": "hylgelaul",
                    "tags" : [ "laul", "hüljes", "kala", "Jämaja", "valge" ] 
                },
                {
                    "title": "Jää jumalaga, Mann, Nublu ja Rotterdam?",
                    "slug": "korgel-masti-tipus",
                    "tags" : [ "laul", "Rotterdam", "meri", "laev", "Püha", "Muhu", "Nublu", "sadam", "viin", "naine" ] 
                },
                {
                    "title": "Mis saab meestest mere põhjas?",
                    "slug": "laevahukk",
                    "tags" : [ "laul", "Valjala", "Pöide", "meri", "laev", "laevahukk", "kala", "sool" ] 
                },
                {
                    "title": "Kas tede poisid saavad mede poiste vasta?",
                    "slug": "see-saaremaa",
                    "tags" : [ "laul", "poiss", "meri", "maa", "Valjala" ] 
                },
                {
                    "title": "Millest laulab saarlane?",
                    "slug": "see-saaremaa-2",
                    "tags" : [ "laul", "Valjala", "meri", "kuu", "kajakas", "paat" ] 
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
                    "tags" : [ "Aira Kaal", "hing", "väin", "raunjalg", "maokeel", "kuuvõtmehein", "pank", "paekivi", "sinine" ] 
                },
                {
                    "title": "Rannapargis / Udus",
                    "slug": "debora-vaarandi-udus",
                    "tags" : [ "udu", "park", "kiivitaja", "meri", "kurbus", "õnn", "tuul", "Debora Vaarandi", "luule", "hall", "must" ] 
                },
                {
                    "title": "Keegi?",
                    "slug": "aira-kaal-keegi",
                    "tags" : [ "Aira Kaal", "kodanik", "kirjanik", "naine", "kena", "luule" ] 
                },
                {
                    "title": "Ööviiul",
                    "slug": "debora-vaarandi-ooviiul",
                    "tags" : ["ööviiul", "suvi", "öö", "tuul", "luule", "armastus", "Debora Vaarandi", "valge" ] 
                },
                {
                    "title": "Bioloogiaõpetajale",
                    "slug": "debora-vaarandi-bioloogiaopetajale",
                    "tags" : [ "vainurästas", "õpetaja", "bioloogia", "meri", "tamm", "Debora Vaarandi", "must" ] 
                },
                {
                    "title": "Saar",
                    "slug": "debora-vaarandi-saar",
                    "tags" : ["saar", "jää", "lumi", "meri", "rand", "tuul", "sügis", "Debora Vaarandi", "hall", "ruske" ] 
                },
                {
                    "title": "Kaks saarlast",
                    "slug": "betti-alver-kaks-saarlast",
                    "tags" : [ "Betti Alver", "sõprus", "saarlane", "laul", "Suur Tõll", "luule", "tamm", "valge", "must" ] 
                },
                {
                    "title": "Ma neiman mõrvarile ta oma relvaga",
                    "slug": "andres-ehin-aavik",
                    "tags" : [ "Johannes Aavik", "keeleuuendus", "Andres Ehin", "luule"] 
                },
                {
                    "title": "Kui rohu lillekesed kasvasivad...",
                    "slug": "julie-ederberg",
                    "tags" : [ "Julie Ederberg", "luule", "emakeel", "isamaa", "võim", "armastus", "taevas" ] 
                },
                {
                    "title": "Lootus",
                    "slug": "aira-kaal-lootus",
                    "tags" : [ "saarlane", "Aira Kaal", "luule"] 
                },
                {
                    "title": "Lahkumise laul",
                    "slug": "aira-kaal-lahkumise-laul",
                    "tags" : [ "Aira Kaal", "murdekeel", "Orissaare", "süda", "Väikese väina tamm", "meri", "Virtsu", "koduigatsus", "luule", "sinine", "roheline", "valge", "hall" ] 
                },
                {
                    "title": "Need kivid",
                    "slug": "aira-kaal-need-kivid",
                    "tags" : [ "Aira Kaal", "kivi", "paas", "laul", "luule", "valge"] 
                },
                {
                    "title": "Sandla majakas",
                    "slug": "jaan-kaplinski-sandla-majakas",
                    "tags" : [ "Jaan Kaplinski", "Sandla", "majakas", "Püha", "meri", "põld", "tee", "luule", "rõõm" ] 
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
