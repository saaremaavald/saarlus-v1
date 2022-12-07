import { createStore } from 'vuex';

const store = createStore({
    state(){
        return {
            scan: false,
            lang : "et",
            activeStory : {},
            modalOpen: false,
            menuOpen: false,
            tagsOpen: false,
            stories : [
                {
                    "title": "Vanasti polla inimesed poolist söuksed olnd kut paes.",
                    "slug": "meeste-ja-naiste-loomine",
                    "tags" : [ "rahvajutt", "mees", "naine", "jumal", "murdekeel", "Kaarma" ],
                },
                {
                    "title": "Unt töuse maast üles, murra kurat ää.",
                    "slug": "esimised-undid",
                    "tags" : [ "rahvajutt", "murdekeel", "hunt", "loodus", "Karja" ],
                },
                {
                    "title": "Ühekorra üks saksa kapten olnd laivaga New Yorgi sadamas. Kapten olnd mures, et kuidas saaks tütre sünnipäevale.",
                    "slug": "hull-meresoit",
                    "tags" : [ "rahvajutt", "meri", "laev", "murdekeel", "Kihelkonna" ],
                },
                {
                    "title": "Enne käind inimesed ikka undiks. Jeesuse sündimisest saadik ei ole seda enam nii sagedasti.",
                    "slug": "undiks-kaimine",
                    "tags" : [ "rahvajutt", "hunt", "libahunt", "murdekeel", "Pöide" ], 
                },
                {
                    "title": "Kord tahtnud külarahvas mööta Kaali järve sügavust.",
                    "slug": "mis-on-kaali-jarve-pohjas",
                    "tags" : [ "rahvajutt", "murdekeel", "Kaali järv" ], 
                },
                {
                    "title": "Üpagem köik ühekorraga aja pääle, et kui kedagi vaenlast teispool aeda oleks olevad, siis meil julgem vastu akata.",
                    "slug": "janese-lohkine-mokk",
                    "tags" : [ "rahvajutt", "murdekeel", "jänes", "loodus", "Valjala", "T-särk", "foto", "muusika", "lammas", "kiviaed" ], 
                },
                {
                    "title": "Vanasti ei tohtind ükski naisterahvas palja pääga välja minna.",
                    "slug": "pahila-soo",
                    "tags" : [ "rahvajutt", "murdekeel", "haldjad", "soo", "naine", "tammik", "Karja" ] 
                },
                {
                    "title": "Raiu mulle ka üks kalapahl, ma tahan omale ka ühe kala küpsetada.",
                    "slug": "kylmking-ja-puuraiuja",
                    "tags" : [ "rahvajutt", "murdekeel", "räim", "kala", "Kärla", "külmking", "mets", "hunt", "kartul", "kalapahl" ] 
                },
                {
                    "title": "Üks Inglis tiimer tuln ükskord Köpu otsa kuhal. Äkist näin – maa ees.",
                    "slug": "laevameeste-eksimus",
                    "tags" : [ "rahvajutt", "murdekeel", "meri", "kala", "kammeljas", "laev", "Mustjala" ] 
                },
                {
                    "title": "Lest lititsegu liiva peel!",
                    "slug": "lesta-kiivas-suu",
                    "tags" : [ "rahvajutt", "lest", "murdekeel", "Anseküla" ] 
                },
                {
                    "title": "Kord oli üks tüdruk Irase külas üksinda koju jäänud. Võõrasema oli kodust tol õhtul ära läinud.",
                    "slug": "murelik-surnu",
                    "tags" : [ "rahvajutt", "surm", "Kaarma" ] 
                },
                {
                    "title": "Kui nad väga mürgeldavad, panen pilli üüdma, siis kaduvad napsu pealt köik!",
                    "slug": "rehepapp",
                    "tags" : [ "rahvajutt", "murdekeel", "rehepapp", "Vanapagan", "torupill", "muusika", "Muhu" ] 
                },
                {
                    "title": "Ommikul tulnd keegi naine ja tahtnud enda laeva kätte saada. Mehed teind suured silmad.",
                    "slug": "mida-koike-mererannast-voib-leida",
                    "tags" : [ "rahvajutt", "murdekeel", "meri", "laev", "Kihelkonna", "haakrik" ] 
                },
                {
                    "title": "Tatt ja ämblik saand Nasva jöe silla pääl kokku.",
                    "slug": "tatt-ja-amblik",
                    "tags" : [ "rahvajutt", "murdekeel", "loodus", "Püha", "Nasva", "linn", "maa" ] 
                },
                {
                    "title": "Kui Vanajumal ilma loos, siis ta viskand ülalt taevast pailajupi maha.",
                    "slug": "ussid-ning-angerjad",
                    "tags" : [ "rahvajutt", "murdekeel", "loodus", "uss", "angerjas", "meri", "Püha" ] 
                },
                {
                    "title": "Äkki süttind küla pölema. Kust tuli alguse saand, ei teadnud keegi.",
                    "slug": "miks-kyla-avis",
                    "tags" : [ "rahvajutt", "murdekeel", "Kihelkonna", "küla", "soo" ] 
                },
                {
                    "title": "Mönda kohta puhund ta nii palju vett, et see ei vaibund enam tagasi merre, vaid jäi maale peatuma.",
                    "slug": "jarved-ja-joed",
                    "tags" : [ "rahvajutt", "murdekeel", "Vanapagan", "järv", "jõgi", "meri", "laht", "loodus", "Kaarma" ] 
                },
                {
                    "title": "Mis perenaine kostab, kui kari poriseid kaltsakaid toas pilli jöristab ning tantsu vihub?",
                    "slug": "mardipaev",
                    "tags" : [ "mardipäev", "santimine" ] 
                },
                {
                    "title": "See mägi olla rahvajutu järele Saaremaa seljaroog.",
                    "slug": "suur-toll",
                    "tags" : [ "Suur Tõll", "Kuressaare" ] 
                },
                {
                    "title": "Mida pidupäeval selga panna?",
                    "slug": "saaremaa-rahvariided",
                    "tags" : [ "rahvariided" ] 
                },
                {
                    "title": "Vahest oli selg veel mütu aega tagant järge aige, ole kõveras, look jalge vahel.",
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
                    "title": "Paekivi pankadel põlvini maas, rüha ja sammaldund rahnude seas.",
                    "slug": "aira-kaal-kidura-looduse-lopsakas-hing",
                    "tags" : [ "Aira Kaal", "hing", "väin", "raunjalg", "maokeel", "kuuvõtmehein", "pank", "luule", "paekivi", "sinine" ] 
                },
                {
                    "title": "Kruus tasa krigisemas kanna all, nii hulgun kuluhallis rannapargis, suud silmi uhub niiske uduvall.",
                    "slug": "debora-vaarandi-udus",
                    "tags" : [ "udu", "park", "kiivitaja", "meri", "kurbus", "õnn", "tuul", "Debora Vaarandi", "luule", "hall", "must" ] 
                },
                {
                    "title": "Pean lõpuks mõistma, et ma olen keegi.",
                    "slug": "aira-kaal-keegi",
                    "tags" : [ "Aira Kaal", "kodanik", "kirjanik", "naine", "kena", "luule" ] 
                },
                {
                    "title": "Ühel üürikesel viivul hämaram on valge öö.",
                    "slug": "debora-vaarandi-ooviiul",
                    "tags" : ["ööviiul", "suvi", "öö", "tuul", "luule", "armastus", "Debora Vaarandi", "valge" ] 
                },
                {
                    "title": "Ma tundsin loodust kui looma, kelle liha aurab kausis, koos tapaeelse kisaga mu kõrvus.",
                    "slug": "debora-vaarandi-bioloogiaopetajale",
                    "tags" : [ "vainurästas", "õpetaja", "bioloogia", "meri", "tamm", "Debora Vaarandi", "luule", "must" ] 
                },
                {
                    "title": "Vaba hingamise vapustavad sõõmud! Joosta ennast kirkaks nagu õhk!",
                    "slug": "debora-vaarandi-saar",
                    "tags" : ["saar", "jää", "lumi", "meri", "rand", "tuul", "sügis", "Debora Vaarandi", "hall", "luule", "ruske" ] 
                },
                {
                    "title": "Kaks saarlast muiste ühte lõid, koos laulsid, riisusid ja jõid.",
                    "slug": "betti-alver-kaks-saarlast",
                    "tags" : [ "Betti Alver", "sõprus", "saarlane", "laul", "Suur Tõll", "luule", "tamm", "valge", "must" ] 
                },
                {
                    "title": "Ma neiman mõrvarile ta oma relvaga",
                    "slug": "andres-ehin-aavik",
                    "tags" : [ "Johannes Aavik", "keeleuuendus", "Andres Ehin", "luule"] 
                },
                {
                    "title": "Kui rohu lillekesed kasvasivad mu laulud vaiksel viisil ülesse.",
                    "slug": "julie-ederberg",
                    "tags" : [ "Julie Ederberg", "luule", "emakeel", "isamaa", "võim", "armastus", "taevas" ] 
                },
                {
                    "title": "On inglastes ja saarlastes küll miskit ühist.",
                    "slug": "aira-kaal-lootus",
                    "tags" : [ "saarlane", "Aira Kaal", "luule"] 
                },
                {
                    "title": "Mo süda tilgub verd, kui lahku Orisaarest.",
                    "slug": "aira-kaal-lahkumise-laul",
                    "tags" : [ "Aira Kaal", "murdekeel", "Orissaare", "süda", "Väikese väina tamm", "meri", "Virtsu", "koduigatsus", "luule", "sinine", "roheline", "valge", "hall" ] 
                },
                {
                    "title": "Need kivid mind ajavad hulluks, kui palju vorme on neil!",
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
                    "tags" : ["Aleksander Suuman"] 
                },
                // proosa
                {
                    "title": "Kõrvus helises veel saarlaste kõne ja korraga kukkus loo lõpp mulle nagu iseenesest sülle.",
                    "slug": "betti-alver-kaks-saarlast-saamislugu",
                    "tags" : ["Betti Alver", "saarlane", "proosa"] 
                },
                {
                    "title": "Kas on kuskil see kadakaaru?",
                    "slug": "debora-vaarandi-kadakaaru",
                    "tags" : ["Debora Vaarandi","proosa", "maailmavalu"] 
                },
                {
                    "title": "Reis Saaremaale on aeganõudev: esimesel päeval jõudsin ainult Kingisseppa.",
                    "slug": "oskar-kruus-mandmets",
                    "tags" : ["Oskar Kruus","Jakob Mändmets", "proosa"] 
                },
                {
                    "title": "Meie laeva meeskond oli kolmemehelise paadi meeskonnast sada korda suurem.",
                    "slug": "aadu-hint-montreal-vancouver",
                    "tags" : ["Aadu Hint","Kanda", "proosa"] 
                },
                {
                    "title": "Jääräim, hallakala, rohuräim, leheräim, õunapuuõieräim, koerputkeräim.",
                    "slug": "jyri-tuulik-raim",
                    "tags" : ["Jüri Tuulik","räim", "proosa", "kala", "kalapüük", "toit"] 
                },
                {
                    "title": "Oma saar. Roheline rätik. Sooria-Mooriamaa!",
                    "slug": "aira-kaal-oma-saar",
                    "tags" : ["Aira Kaal", "proosa"] 
                },
                {
                    "title": "Siit sa oled, siia sa jääd mereveerele",
                    "slug": "kaplinski-siit-sa-oled",
                    "tags" : ["Jaan Kaplinski", "proosa"] 
                },
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
        menuOpen(state){
            return state.menuOpen;
        },
        tagsOpen(state){
            return state.tagsOpen;
        },
    },
    mutations : {
        setActiveStory(state, frontmatter) {
            state.activeStory = frontmatter;
        },
        toggleModal(state) {
            state.modalOpen = !state.modalOpen;
            // console.log("Active changed:" + state.activeStory.origin);
        },
        toggleMenu(state) {
            state.menuOpen = !state.menuOpen;
        },
        toggleTags(state) {
            state.tagsOpen = !state.tagsOpen;
        },
    }
});

export default store;
