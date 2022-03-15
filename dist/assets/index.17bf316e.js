import{r as p,o as r,c as l,a as t,b as I,d as T,e as k,f as v,g as h,F as f,u as y,h as g,i as j,t as x,j as w,k as H,w as N,l as A,n as O,m as q,p as Y,q as W,s as D,v as F,x as U,y as J,z as Z,A as G,B as Q,C,D as X,E as R,T as ee,G as te,H as ae}from"./vendor.13921781.js";const se=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const u of n)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function o(n){const u={};return n.integrity&&(u.integrity=n.integrity),n.referrerpolicy&&(u.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?u.credentials="include":n.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function i(n){if(n.ep)return;n.ep=!0;const u=o(n);fetch(n.href,u)}};se();const re={class:"bg-white shadow dark:bg-gray-800 z-100"},oe={class:"max-w-7xl mx-auto px-8"},ne={class:"flex items-center justify-between h-16"},ie={class:"w-full justify-between flex gap-4 items-center"},le=t("a",{class:"flex-shrink-0 font-saaremaa text-xl text-saarlus-700",href:"/"}," Saarlus ",-1),ue={class:"font-serif font-bold text-xs flex gap-1"},de=t("span",null,"Pooleliolev t\xF6\xF6versioon, mitte jagada ega levitada.",-1),ce=k('<div class="hidden"><div class="px-2 pt-2 pb-3 space-y-1 sm:px-3"><a class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#"> Home </a><a class="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#"> Mis see on? </a><a class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#"> Kontakt </a></div></div>',1),me={props:{msg:String},setup(e){return p(0),(a,o)=>(r(),l("div",null,[t("nav",re,[t("div",oe,[t("div",ne,[t("div",ie,[le,t("div",ue,[(r(),I(T("IconInfo"))),de])])])]),ce])]))}};const _e={setup(e){return(a,o)=>{const i=v("router-view");return r(),l(f,null,[h(me,{class:"sticky top-0 z-100"}),(r(),I(i,{key:a.$route.path}))],64)}}};var P=(e,a)=>{const o=e.__vccOpts||e;for(const[i,n]of a)o[i]=n;return o};const pe={class:"story-tooltip flex gap-5 py-3 px-5 bg-saarlus-700 text-saarlus-50 font-serif font-bold rounded-md"},he={props:{storyIdx:{type:Number,default:0}},setup(e){const a=y(),o=g(()=>a.state.stories);return(i,n)=>(r(),l("div",pe,[j(x(w(o)[e.storyIdx].title)+" ",1),t("button",{class:"font-bold bg-saarlus-300 text-saarlus-800 rounded-sm px-2",onClick:n[0]||(n[0]=u=>i.$router.push(`/lugu/${w(o)[e.storyIdx].slug}`))},"LOE")]))}};var ve=P(he,[["__scopeId","data-v-3a6a026e"]]);const z=e=>(Y("data-v-3feefb74"),e=e(),W(),e),ge={class:"home-page bg-saarlus-100 flex flex-col justify-around h-[90vh] px-[8vw] gap-0 md:flex-row md:gap-6"},ke=z(()=>t("div",{class:"flex flex-col justify-center order-2 grow text-center md:order-1 md:text-left"},[t("h1",{class:"font-saaremaa text-saarlus-700 text-5xl md:text-[6vw]"},[j(" Saarlus."),t("br"),j("Mis see veel on? ")]),t("p",{class:"font-serif"},"Siit leiad sa hulga materjale, mis aitavad sul saarlust paremini m\xF5ista. Alustuseks v\xF5id lihtsalt kompassil klikkida v\xF5i valida sobiv lugu nimekirjast")],-1)),fe={class:"relative flex grow-0 justify-center items-center order-1 md:order-2"},ye={viewBox:"0 0 100 100",class:"h-[70vmin] w-[70vmin] md:h-[70vmin] md:w-[70vmin]"},je={transform:"translate(50,50)"},be=["d","transform"],xe=z(()=>t("g",null,[t("circle",{cx:"50",cy:"50",r:"45","stroke-width":"2",fill:"none",stroke:"white"}),t("circle",{cx:"50",cy:"50",r:"10","stroke-width":"0.5",fill:"none",stroke:"black"})],-1)),we={transform:"translate(50,50)"},$e=k('<polyline points="0,-45 7,0 0,15 -7,0" data-v-3feefb74></polyline><polyline points="0,-35 5,0 -5,0" fill="white" data-v-3feefb74></polyline><circle r="9" stroke-width="0.25" fill="none" stroke="black" data-v-3feefb74></circle><circle r="8" fill="black" data-v-3feefb74></circle><circle r="6.5" fill="white" data-v-3feefb74></circle>',5),Ie=["d"],Ee=["d"],Me=["cx","cy","data-idx","onClick"],Ae={setup(e){const a=y(),o=g(()=>a.state.stories),i=360/o.value.length,n=p(0),u=p(0);let d=0,_=p(0),c=H.timeline({easing:"cubicBezier(0.645, 0.045, 0.355, 1.000)",direction:"normal",duration:2e3,autoplay:!1});const E=()=>i*_.value-u.value,M=()=>{_.value=Math.round(Math.random()*o.value.length)},b=()=>{n.value=E(),d=u.value,c.seek(0),c.pause(),c.remove(u),c.delay=0,c.duration=0,c.add({targets:u,value:[d,`+=${n.value+Math.floor(Math.random()*4)*360}`],duration:1400}),c.restart()},V=g(()=>`transform: rotate(${u.value}deg)`);return N(_,$=>{b()}),($,ba)=>(r(),l("section",ge,[ke,t("div",fe,[(r(),l("svg",ye,[t("g",je,[(r(),l(f,null,A(24,L=>t("path",{d:$.polygonpath([{x:0,y:10},{x:1,y:45},{x:-1,y:45},{x:0,y:10}]),fill:"hsla(0 0% 100% / 0.2)",transform:`rotate(${L*(360/24)})`},null,8,be)),64))]),xe,t("g",we,[t("g",{style:O(w(V))},[$e,t("path",{d:$.arcpath(0,272,3,4,0),fill:"black",stroke:"none"},null,8,Ie),t("path",{d:$.polygonpath([{x:0,y:0},{x:3,y:0},{x:1.5,y:-2}]),fill:"black",transform:"translate(-5,0)"},null,8,Ee)],4)]),t("g",{transform:"translate(50,50)"},[t("circle",{r:"20",onClick:M,style:{cursor:"pointer"},fill:"hsla(0,0%,100%,0)"})]),(r(!0),l(f,null,A($.polarpoints(w(o).length,47),(L,S)=>(r(),l("circle",{cx:L.x+50,cy:L.y+50,r:"1","data-idx":S,key:`point+${S}`,onClick:xa=>q(_)?_.value=S:_=S,class:"compass-story"},null,8,Me))),128))])),h(ve,{storyIdx:w(_)},null,8,["storyIdx"])])]))}};var Re=P(Ae,[["__scopeId","data-v-3feefb74"]]);const Le="modulepreload",K={},Se="/saarlus/",s=function(a,o){return!o||o.length===0?a():Promise.all(o.map(i=>{if(i=`${Se}${i}`,i in K)return;K[i]=!0;const n=i.endsWith(".css"),u=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${u}`))return;const d=document.createElement("link");if(d.rel=n?"stylesheet":Le,n||(d.as="script",d.crossOrigin=""),d.href=i,document.head.appendChild(d),n)return new Promise((_,c)=>{d.addEventListener("load",_),d.addEventListener("error",c)})})).then(()=>a())},Pe={class:"flex items-center justify-between gap-4 pb-12"},Ve=j("Eelmine"),Te=j("J\xE4rgmine"),Oe={props:{idx:{type:Number}},setup(e){const a=e,o=y(),i=p(g(()=>o.getters.stories)),n=p(a.idx===0?parseInt(i.value.length-1):parseInt(a.idx-1)),u=p(a.idx===parseInt(i.value.length-1)?0:parseInt(a.idx+1));return(d,_)=>{const c=v("IconArrowLeft"),E=v("router-link"),M=v("IconArrowRight");return r(),l("nav",Pe,[h(E,{to:`/lugu/${i.value[n.value].slug}`,class:"flex items-center bg-transparent py-2 px-4 rounded shadow-dark border border-gray-300 transition transition-shadow uppercase text-sm hover:border-gray-400"},{default:D(()=>[h(c,{class:"inline"}),Ve]),_:1},8,["to"]),h(E,{to:`/lugu/${i.value[u.value].slug}`,class:"flex items-center bg-transparent py-2 px-4 rounded shadow-dark border border-gray-300 transition transition-shadow uppercase text-sm hover:border-gray-400"},{default:D(()=>[Te,h(M,{class:"inline"})]),_:1},8,["to"])])}}},De={class:"py-4 sticky top-16 h-full"},Ce={class:"flex-grow w-5/6"},ze={setup(e){const a=y(),o=p(a.state.stories),i=p(g(()=>a.getters.activeStory));return(n,u)=>{const d=v("IconCaretRight"),_=v("router-link");return r(),l("nav",De,[t("ul",null,[(r(!0),l(f,null,A(o.value,c=>(r(),l("li",{key:c.slug,class:F(["pl-4",c.slug==i.value.slug?"bg-yellow-100":""])},[h(_,{to:`/lugu/${c.slug}`,class:"flex justify-between py-1 text-sm border-b border-transparent hover:border-gray-200 transition"},{default:D(()=>[t("span",Ce,x(c.title),1),h(d,{class:"flex-grow w-1/6"})]),_:2},1032,["to"])],2))),128))])])}}};function Ke(e){switch(e){case"../content/aira-kaal-keegi.md":return s(()=>import("./aira-kaal-keegi.8b8fbdcf.js"),["assets/aira-kaal-keegi.8b8fbdcf.js","assets/vendor.13921781.js"]);case"../content/aira-kaal-kidura-looduse-lopsakas-hing.md":return s(()=>import("./aira-kaal-kidura-looduse-lopsakas-hing.9596efdb.js"),["assets/aira-kaal-kidura-looduse-lopsakas-hing.9596efdb.js","assets/vendor.13921781.js"]);case"../content/aira-kaal-lahkumise-laul.md":return s(()=>import("./aira-kaal-lahkumise-laul.d9951ddf.js"),["assets/aira-kaal-lahkumise-laul.d9951ddf.js","assets/vendor.13921781.js"]);case"../content/aira-kaal-lootus.md":return s(()=>import("./aira-kaal-lootus.bd240666.js"),["assets/aira-kaal-lootus.bd240666.js","assets/vendor.13921781.js"]);case"../content/aira-kaal-need-kivid.md":return s(()=>import("./aira-kaal-need-kivid.0af6b2f2.js"),["assets/aira-kaal-need-kivid.0af6b2f2.js","assets/vendor.13921781.js"]);case"../content/aleksander-suuman-hyperborea.md":return s(()=>import("./aleksander-suuman-hyperborea.a26256be.js"),["assets/aleksander-suuman-hyperborea.a26256be.js","assets/vendor.13921781.js"]);case"../content/andres-ehin-aavik.md":return s(()=>import("./andres-ehin-aavik.2c8271df.js"),["assets/andres-ehin-aavik.2c8271df.js","assets/vendor.13921781.js"]);case"../content/betti-alver-kaks-saarlast.md":return s(()=>import("./betti-alver-kaks-saarlast.4dfe0360.js"),["assets/betti-alver-kaks-saarlast.4dfe0360.js","assets/vendor.13921781.js"]);case"../content/debora-vaarandi-bioloogiaopetajale.md":return s(()=>import("./debora-vaarandi-bioloogiaopetajale.1263a93b.js"),["assets/debora-vaarandi-bioloogiaopetajale.1263a93b.js","assets/vendor.13921781.js"]);case"../content/debora-vaarandi-ooviiul.md":return s(()=>import("./debora-vaarandi-ooviiul.232c8258.js"),["assets/debora-vaarandi-ooviiul.232c8258.js","assets/vendor.13921781.js"]);case"../content/debora-vaarandi-saar.md":return s(()=>import("./debora-vaarandi-saar.04bd40c5.js"),["assets/debora-vaarandi-saar.04bd40c5.js","assets/vendor.13921781.js"]);case"../content/debora-vaarandi-udus.md":return s(()=>import("./debora-vaarandi-udus.872c8561.js"),["assets/debora-vaarandi-udus.872c8561.js","assets/vendor.13921781.js"]);case"../content/esimised-undid.md":return s(()=>import("./esimised-undid.e1ce2abb.js"),["assets/esimised-undid.e1ce2abb.js","assets/vendor.13921781.js"]);case"../content/hull-meresoit.md":return s(()=>import("./hull-meresoit.e5c41c91.js"),["assets/hull-meresoit.e5c41c91.js","assets/vendor.13921781.js"]);case"../content/hylgelaul.md":return s(()=>import("./hylgelaul.6cb99397.js"),["assets/hylgelaul.6cb99397.js","assets/vendor.13921781.js"]);case"../content/index.md":return s(()=>import("./index.1032916f.js"),["assets/index.1032916f.js","assets/vendor.13921781.js"]);case"../content/jaan-kaplinski-sandla-majakas.md":return s(()=>import("./jaan-kaplinski-sandla-majakas.c25065a1.js"),["assets/jaan-kaplinski-sandla-majakas.c25065a1.js","assets/vendor.13921781.js"]);case"../content/janese-lohkine-mokk.md":return s(()=>import("./janese-lohkine-mokk.74cd993e.js"),["assets/janese-lohkine-mokk.74cd993e.js","assets/vendor.13921781.js"]);case"../content/jarved-ja-joed.md":return s(()=>import("./jarved-ja-joed.fca9deb4.js"),["assets/jarved-ja-joed.fca9deb4.js","assets/vendor.13921781.js"]);case"../content/julie-ederberg.md":return s(()=>import("./julie-ederberg.3658325f.js"),["assets/julie-ederberg.3658325f.js","assets/vendor.13921781.js"]);case"../content/kadripaev.md":return s(()=>import("./kadripaev.51ba6a6b.js"),["assets/kadripaev.51ba6a6b.js","assets/vendor.13921781.js"]);case"../content/kas-sa-saaremaa-toivot-tead.md":return s(()=>import("./kas-sa-saaremaa-toivot-tead.f83a8ae2.js"),["assets/kas-sa-saaremaa-toivot-tead.f83a8ae2.js","assets/vendor.13921781.js"]);case"../content/kirjanikud-suvel.md":return s(()=>import("./kirjanikud-suvel.cec80939.js"),["assets/kirjanikud-suvel.cec80939.js","assets/vendor.13921781.js"]);case"../content/korgel-masti-tipus.md":return s(()=>import("./korgel-masti-tipus.6cea18a5.js"),["assets/korgel-masti-tipus.6cea18a5.js","assets/vendor.13921781.js"]);case"../content/kylmking-ja-puuraiuja.md":return s(()=>import("./kylmking-ja-puuraiuja.9d7e52e3.js"),["assets/kylmking-ja-puuraiuja.9d7e52e3.js","assets/vendor.13921781.js"]);case"../content/laevahukk.md":return s(()=>import("./laevahukk.a8cca4f0.js"),["assets/laevahukk.a8cca4f0.js","assets/vendor.13921781.js"]);case"../content/laevameeste-eksimus.md":return s(()=>import("./laevameeste-eksimus.58cf8d4f.js"),["assets/laevameeste-eksimus.58cf8d4f.js","assets/vendor.13921781.js"]);case"../content/lesta-kiivas-suu.md":return s(()=>import("./lesta-kiivas-suu.90351e91.js"),["assets/lesta-kiivas-suu.90351e91.js","assets/vendor.13921781.js"]);case"../content/mardipaev.md":return s(()=>import("./mardipaev.531a0974.js"),["assets/mardipaev.531a0974.js","assets/vendor.13921781.js"]);case"../content/meeste-ja-naiste-loomine.md":return s(()=>import("./meeste-ja-naiste-loomine.f1f17ce3.js"),["assets/meeste-ja-naiste-loomine.f1f17ce3.js","assets/vendor.13921781.js"]);case"../content/mida-koike-mererannast-voib-leida.md":return s(()=>import("./mida-koike-mererannast-voib-leida.77a14025.js"),["assets/mida-koike-mererannast-voib-leida.77a14025.js","assets/vendor.13921781.js"]);case"../content/miks-kyla-avis.md":return s(()=>import("./miks-kyla-avis.f24d87a3.js"),["assets/miks-kyla-avis.f24d87a3.js","assets/vendor.13921781.js"]);case"../content/mis-on-kaali-jarve-pohjas.md":return s(()=>import("./mis-on-kaali-jarve-pohjas.b2231110.js"),["assets/mis-on-kaali-jarve-pohjas.b2231110.js","assets/vendor.13921781.js"]);case"../content/murelik-surnu.md":return s(()=>import("./murelik-surnu.fbe02bc3.js"),["assets/murelik-surnu.fbe02bc3.js","assets/vendor.13921781.js"]);case"../content/pahila-soo.md":return s(()=>import("./pahila-soo.d14720b0.js"),["assets/pahila-soo.d14720b0.js","assets/vendor.13921781.js"]);case"../content/pannileib.md":return s(()=>import("./pannileib.9d4d1121.js"),["assets/pannileib.9d4d1121.js","assets/vendor.13921781.js"]);case"../content/rehepapp.md":return s(()=>import("./rehepapp.c0ae63e2.js"),["assets/rehepapp.c0ae63e2.js","assets/vendor.13921781.js"]);case"../content/saaremaa-rahvariided.md":return s(()=>import("./saaremaa-rahvariided.52461f13.js"),["assets/saaremaa-rahvariided.52461f13.js","assets/vendor.13921781.js"]);case"../content/saaremaa-sokud.md":return s(()=>import("./saaremaa-sokud.afdda1a0.js"),["assets/saaremaa-sokud.afdda1a0.js","assets/vendor.13921781.js"]);case"../content/see-saaremaa-2.md":return s(()=>import("./see-saaremaa-2.65935563.js"),["assets/see-saaremaa-2.65935563.js","assets/vendor.13921781.js"]);case"../content/see-saaremaa.md":return s(()=>import("./see-saaremaa.0a0c3052.js"),["assets/see-saaremaa.0a0c3052.js","assets/vendor.13921781.js"]);case"../content/suur-toll.md":return s(()=>import("./suur-toll.d67a2156.js"),["assets/suur-toll.d67a2156.js","assets/vendor.13921781.js"]);case"../content/tatt-ja-amblik.md":return s(()=>import("./tatt-ja-amblik.2a3849bc.js"),["assets/tatt-ja-amblik.2a3849bc.js","assets/vendor.13921781.js"]);case"../content/undiks-kaimine.md":return s(()=>import("./undiks-kaimine.3e5a490e.js"),["assets/undiks-kaimine.3e5a490e.js","assets/vendor.13921781.js"]);case"../content/ussid-ning-angerjad.md":return s(()=>import("./ussid-ning-angerjad.85340c26.js"),["assets/ussid-ning-angerjad.85340c26.js","assets/vendor.13921781.js"]);default:return new Promise(function(a,o){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(o.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}const Be={class:"flex items-stretch shadow-md"},He={class:"flex"},Ne={class:"story-container"},qe={setup(e){const a=U(),o=y(),i=p(o.state.stories),n=g(()=>o.getters.activeStory),u=p(g(()=>a.params.slug)),d=p(i.value.findIndex(c=>c.slug===u.value)),_=J(()=>Ke(`../content/${u.value}.md`));return(c,E)=>{const M=v("image-wrapper");return r(),l(f,null,[t("section",Be,[(r(!0),l(f,null,A(w(n).images,(b,V)=>(r(),I(M,{key:`img${V}`,src:b.src,zoom:b.zoom,bgPos:b.bgPos,bgSize:b.bgSize,height:b.height},null,8,["src","zoom","bgPos","bgSize","height"]))),128))]),t("section",He,[h(ze,{class:"<md:hidden"}),t("div",Ne,[(r(),I(T(w(_)))),t("footer",null,[h(Oe,{idx:d.value,slug:u.value},null,8,["idx","slug"])])])])],64)}}},Ye=[{path:"/",name:"Home",component:Re},{path:"/lugu/:slug",name:"Lugu",component:qe}],B=Z({history:G("/saarlus/"),routes:Ye}),We=Q({state(){return{scan:!1,lang:"et",activeStory:{},modalOpen:!1,stories:[{title:"Kuidas saarlaste arvates mehed ja naised loodi?",slug:"meeste-ja-naiste-loomine",tags:["rahvajutt"]},{title:"Esimised undid",slug:"esimised-undid",tags:["rahvajutt","murdekeel","hunt","loodus","Karja"]},{title:"Hull meres\xF5it",slug:"hull-meresoit",tags:["rahvajutt","meri","laev","murdekeel","Kihelkonna"]},{title:"Undiks k\xE4imine",slug:"undiks-kaimine",tags:["rahvajutt","hunt","libahunt","murdekeel","P\xF6ide"]},{title:"Mis on Kaali j\xE4rve p\xF5hjas?",slug:"mis-on-kaali-jarve-pohjas",tags:["rahvajutt","murdekeel","Kaali j\xE4rv"]},{title:"J\xE4nese l\xF5hkine mokk",slug:"janese-lohkine-mokk",tags:["rahvajutt","murdekeel","j\xE4nes","loodus","Valjala","T-s\xE4rk","foto","muusika","lammas","kiviaed"]},{title:"Mis juhtub, kui saare naine palja p\xE4\xE4ga v\xE4lja l\xE4heb?",slug:"pahila-soo",tags:["rahvajutt","murdekeel","haldjad","soo","naine","tammik","Karja"]},{title:"K\xFClmking ja puuraiuja",slug:"kylmking-ja-puuraiuja",tags:["rahvajutt","murdekeel","r\xE4im","kala","K\xE4rla","k\xFClmking","mets","hunt","kartul","kalapahl"]},{title:"Laevameeste eksimus",slug:"laevameeste-eksimus",tags:["rahvajutt","murdekeel","meri","kala","kammeljas","laev","Mustjala"]},{title:"Lesta kiivas suu",slug:"lesta-kiivas-suu",tags:["rahvajutt","lest","murdekeel","Ansek\xFCla"]},{title:"Murelik surnu",slug:"murelik-surnu",tags:["rahvajutt","surm","Kaarma"]},{title:"Rehepapp",slug:"rehepapp",tags:["rahvajutt","murdekeel","rehepapp","Vanapagan","torupill","muusika","Muhu"]},{title:"Mida k\xF6ike mererannast v\xF6ib leida?",slug:"mida-koike-mererannast-voib-leida",tags:["rahvajutt","murdekeel","meri","laev","Kihelkonna","haakrik"]},{title:"Tatt ja \xE4mblik",slug:"tatt-ja-amblik",tags:["rahvajutt","murdekeel","loodus","P\xFCha","Nasva"]},{title:"Ussid ning annergad",slug:"ussid-ning-angerjad",tags:["rahvajutt","murdekeel","loodus","uss","angerjas","meri","P\xFCha"]},{title:"Miks k\xFCla \xE4vis?",slug:"miks-kyla-avis",tags:["rahvajutt","murdekeel","Kihelkonna","k\xFCla","soo"]},{title:"Kuda on j\xE4rved ja j\xF6ed tekkind?",slug:"jarved-ja-joed",tags:["rahvajutt","murdekeel","Vanapagan","j\xE4rv","j\xF5gi","meri","laht","loodus","Kaarma"]},{title:"Mardip\xE4ev",slug:"mardipaev",tags:["mardip\xE4ev","santimine"]},{title:"Kus on Saaremaa seljaroog ja kuidas sai Kuressaare oma nime?",slug:"suur-toll",tags:["Suur T\xF5ll","Kuressaare"]},{title:"Mida pidup\xE4eval selga panna?",slug:"saaremaa-rahvariided",tags:["rahvariided"]},{title:"Saaremaa sokud",slug:"saaremaa-sokud",tags:["sokud","santimine"]},{title:"Kes kala h\xFClgeks nimetab?",slug:"hylgelaul",tags:["muusika","h\xFCljes","kala","J\xE4maja"]},{title:"K\xF5rgel masti tipus",slug:"korgel-masti-tipus",tags:["muusika","Rotterdam","meri","laev","P\xFCha","Muhu"]},{title:"Mis saab meestest mere p\xF5hjas?",slug:"laevahukk",tags:["muusika","Valjala","P\xF6ide","meri","laev","laevahukk","kala"]},{title:"See Saaremaa",slug:"see-saaremaa",tags:["muusika","poiss","meri","maa","Valjala"]},{title:"Millest laulab saarlane?",slug:"see-saaremaa-2",tags:["muusika","Valjala","meri","kuu","kajakas","paat"]},{title:"Kas sa Saaremaa Toivot tead?",slug:"kas-sa-saaremaa-toivot-tead",tags:["meri","kala","kalap\xFC\xFCk","paat","Nasva"]},{title:"Kadrip\xE4ev",slug:"kadripaev",tags:["kadrip\xE4ev","santimine"]},{title:"Kidura looduse lopsakas hing",slug:"aira-kaal-kidura-looduse-lopsakas-hing",tags:["v\xE4in","raunjalg","maokeel","kuuv\xF5tmehein","pank","paekivi"]},{title:"Rannapargis / Udus",slug:"debora-vaarandi-udus",tags:["udu","park","kiivitaja","meri","kurbus","\xF5nn","tuul"]},{title:"Keegi?",slug:"aira-kaal-keegi",tags:[]},{title:"\xD6\xF6viiul",slug:"debora-vaarandi-ooviiul",tags:["\xF6\xF6viiul","suvi","\xF6\xF6","tuul","luule"]},{title:"Bioloogia\xF5petajale",slug:"debora-vaarandi-bioloogiaopetajale",tags:["vainur\xE4stas","\xF5petaja","bioloogia","meri","tamm"]},{title:"Saar",slug:"debora-vaarandi-saar",tags:["saar","j\xE4\xE4","lumi","meri","rand","tuul","s\xFCgis"]},{title:"Kaks saarlast",slug:"betti-alver-kaks-saarlast",tags:["s\xF5prus","saarlane","laul","Suur T\xF5ll","luule","tamm"]},{title:"Ma neiman m\xF5rvarile ta oma relvaga",slug:"andres-ehin-aavik",tags:[]},{title:"Kui rohu lillekesed kasvasivad...",slug:"julie-ederberg",tags:[]},{title:"Lootus",slug:"aira-kaal-lootus",tags:[]},{title:"Lahkumise laul",slug:"aira-kaal-lahkumise-laul",tags:[]},{title:"Need kivid",slug:"aira-kaal-need-kivid",tags:[]},{title:"Sandla majakas",slug:"jaan-kaplinski-sandla-majakas",tags:[]},{title:"Kirjanikud suvel",slug:"kirjanikud-suvel",tags:[]},{title:"H\xFCperborea",slug:"aleksander-suuman-hyperborea",tags:[]}]}},getters:{stories(e){return e.stories},activeStory(e){return e.activeStory},modalOpen(e){return e.modalOpen}},mutations:{setActiveStory(e,a){e.activeStory=a},toggleModal(e){e.modalOpen=!e.modalOpen}}});const Fe=["open"],Ue={class:"flex items-center gap-4 text-lg font-bold text-saarlus-700"},Je=t("button",{class:""},[t("svg",{class:"summary-arrow fill-current opacity-75 w-4 h-4 -mr-1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[t("path",{d:"M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"})])],-1),Ze={class:"pl-4 mt-4 leading-normal text-md border-l border-grey"},Ge={props:{summary:{default:"Summary",type:String},open:{default:!0,type:Boolean},icon:{type:String,default:"IconCommunication"}},setup(e){return(a,o)=>(r(),l("details",{class:"my-8 py-4",open:!!e.open},[t("summary",Ue,[(r(),I(T(e.icon),{class:"text-2xl"})),j(x(e.summary)+" ",1),Je]),t("div",Ze,[C(a.$slots,"default")])],8,Fe))}},Qe={props:{height:String},setup(e){return(a,o)=>(r(),l("div",{style:O({height:`${e.height}`})},null,4))}},Xe={props:["frontmatter"],setup(e){const a=e,o=y();return X(()=>{o.commit("setActiveStory",a.frontmatter)}),(i,n)=>(r(),l("div",null,[C(i.$slots,"default")]))}},et={key:0,class:"fixed h-screen w-screen z-110 inset-0 overflow-y-auto"},tt={class:"flex items-center justify-center min-h-screen py-4 px-4"},at={class:"relative overflow-hidden transform transition-all",role:"dialog","aria-modal":"true","aria-labelledby":"modal-headline"},st={class:"rounded-sm p-2 bg-white shadow"},rt=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"h-6 w-6 text-gray-700",viewBox:"0 0 1792 1792"},[t("path",{d:"M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"})],-1),ot=[rt],nt=["src"],it={props:{image:String},setup(e){const a=y(),o=p(g(()=>a.getters.modalOpen)),i=()=>{a.commit("toggleModal",o.value)};return(n,u)=>o.value?(r(),l("div",et,[t("div",{class:"absolute w-full h-full inset-0 bg-black opacity-75",onClick:i}),t("div",tt,[t("div",at,[t("div",st,[t("div",{class:"absolute right-4 top-4"},[t("button",{class:"bg-transparent border border-transparent",onClick:i},ot)]),t("img",{src:`${e.image}`,class:"max-w-full sm:max-h-[95vh]"},null,8,nt)])])])])):R("",!0)}};const lt={class:"icon flex justify-center items-center w-16 h-16 rounded-2xl bg-saarlus-800/80 opacity-0 transition"},ut={key:0},dt={props:{src:{type:String},height:{type:String,default:"75vh"},classes:{type:String,default:""},bgSize:{type:String,default:"cover"},bgRepeat:{type:String,default:"no-repeat"},bgPos:{type:String,default:"50% 50%"},zoom:{type:Boolean,default:!1}},setup(e){const a=y(),o=p(g(()=>a.getters.modalOpen)),i=()=>{a.commit("toggleModal",o.value)};return(n,u)=>{const d=v("icon-zoom-in"),_=v("image-modal");return r(),l(f,null,[t("div",{class:"flex justify-center items-center bg-gradient-to-b from-blue-800 via-green-600 to-blue-700 shadow",style:O({background:`url(../images/stories/${e.src})`,"background-size":e.bgSize,"background-repeat":e.bgRepeat,"background-position":e.bgPos,height:e.height,width:"100%","background-blend-mode":"overlay"})},[e.zoom?(r(),l("div",{key:0,class:"zoomable flex justify-center items-center w-full h-full cursor-pointer hover:bg-saarlus-700/40 transition",onClick:i},[t("div",lt,[h(d,{class:"svg text-white stroke-current scale-150",style:{transform:"scale(2)"}})])])):R("",!0)],4),(r(),I(ee,{to:"#teleport-modal"},[o.value?(r(),l("div",ut,[h(_,{image:`../images/stories/${e.src}`},null,8,["image"])])):R("",!0)]))],64)}}};var ct=P(dt,[["__scopeId","data-v-1416c3eb"]]);const mt={class:"flex gap-4 pt-4 my-8 border-t border-t-gray-200"},_t={key:0,class:"italic"},pt=t("span",{class:"font-bold"},"Autor:",-1),ht=t("br",null,null,-1),vt={key:0},gt={props:{author:{type:String},origin:{type:String}},setup(e){return(a,o)=>{const i=v("IconAuthors");return r(),l("div",mt,[h(i,{class:"text-2xl"}),t("div",null,[e.author?(r(),l("p",_t,[pt,j(" "+x(e.author),1),ht,e.origin?(r(),l("span",vt,x(e.origin),1)):R("",!0)])):R("",!0)])])}}},kt={class:"flex gap-4 my-8"},ft=t("h3",{class:"text-lg font-bold mb-4"},"S\xF5naseletused:",-1),yt={class:"list-disc list-inside"},jt={props:{terms:{type:Array}},setup(e){return(a,o)=>{const i=v("IconTextMessage");return r(),l("div",kt,[h(i,{class:"inline text-2xl"}),t("div",null,[ft,t("ul",yt,[(r(!0),l(f,null,A(e.terms,(n,u)=>(r(),l("li",{key:u},[t("strong",null,x(n[0]),1),j(" \u2013 "+x(n[1]),1)]))),128))])])])}}};const bt={class:"video-responsive"},xt=["src"],wt={props:{video:{type:String}},setup(e){return(a,o)=>(r(),l("div",bt,[t("iframe",{width:"560",height:"315",src:e.video,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,8,xt)]))}};var $t=P(wt,[["__scopeId","data-v-ecec8e0e"]]);const It={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 48 48"},Et=k('<g fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M19 20a7 7 0 1 0 0-14a7 7 0 0 0 0 14z"></path><path d="M32.608 7A6.996 6.996 0 0 1 36 13a6.996 6.996 0 0 1-3.392 6"></path><path d="M4 40.8V42h30v-1.2c0-4.48 0-6.72-.872-8.432a8 8 0 0 0-3.496-3.496C27.92 28 25.68 28 21.2 28h-4.4c-4.48 0-6.72 0-8.432.872a8 8 0 0 0-3.496 3.496C4 34.08 4 36.32 4 40.8z"></path><path d="M44 42v-1.2c0-4.48 0-6.72-.872-8.432a8 8 0 0 0-3.496-3.496"></path></g>',1),Mt=[Et];function At(e,a){return r(),l("svg",It,Mt)}var Rt={name:"icon-park-outline-peoples",render:At};const Lt={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 48 48"},St=t("g",{fill:"none",stroke:"currentColor","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"},[t("path",{d:"M12 23.992h24"}),t("path",{d:"M24 36L12 24l12-12"})],-1),Pt=[St];function Vt(e,a){return r(),l("svg",Lt,Pt)}var Tt={name:"icon-park-outline-left-small",render:Vt};const Ot={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 48 48"},Dt=t("g",{fill:"none",stroke:"currentColor","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"},[t("path",{d:"M36 24.008H12"}),t("path",{d:"M24 12l12 12l-12 12"})],-1),Ct=[Dt];function zt(e,a){return r(),l("svg",Ot,Ct)}var Kt={name:"icon-park-outline-right-small",render:zt};const Bt={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 48 48"},Ht=t("path",{d:"M31 36L19 24l12-12",stroke:"currentColor","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round",fill:"none"},null,-1),Nt=[Ht];function qt(e,a){return r(),l("svg",Bt,Nt)}var Yt={name:"icon-park-outline-left",render:qt};const Wt={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 48 48"},Ft=t("path",{d:"M19 12l12 12l-12 12",stroke:"currentColor","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round",fill:"none"},null,-1),Ut=[Ft];function Jt(e,a){return r(),l("svg",Wt,Ut)}var Zt={name:"icon-park-outline-right",render:Jt};const Gt={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 48 48"},Qt=k('<g fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><path d="M33 38H22v-8h14v-8h8v16h-5l-3 3l-3-3z" stroke-linejoin="round"></path><path d="M4 6h32v24H17l-4 4l-4-4H4V6z" stroke-linejoin="round"></path><path d="M19 18h1"></path><path d="M26 18h1"></path><path d="M12 18h1"></path></g>',1),Xt=[Qt];function ea(e,a){return r(),l("svg",Gt,Xt)}var ta={name:"icon-park-outline-communication",render:ea};const aa={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 48 48"},sa=k('<g fill="none"><path d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4A19.938 19.938 0 0 0 9.858 9.858A19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44z" stroke="currentColor" stroke-width="4" stroke-linejoin="round"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M24 11a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5z" fill="currentColor"></path><path d="M24.5 34V20h-2" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 34h7" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></g>',1),ra=[sa];function oa(e,a){return r(),l("svg",aa,ra)}var na={name:"icon-park-outline-info",render:oa};const ia={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 48 48"},la=k('<g fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"><path d="M32 6H22v36h10V6z"></path><path d="M42 6H32v36h10V6z"></path><path d="M10 6l8 1l-3.5 35L6 41l4-35z"></path><path d="M37 18v-3" stroke-linecap="round"></path><path d="M27 18v-3" stroke-linecap="round"></path></g>',1),ua=[la];function da(e,a){return r(),l("svg",ia,ua)}var ca={name:"icon-park-outline-document-folder",render:da};const ma={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 48 48"},_a=k('<g fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><path d="M44 7H4v30h15l5 5l5-5h15V7z" stroke-linejoin="round"></path><path d="M14 16h6"></path><path d="M14 24h2"></path><path d="M29 14l7 14"></path><path d="M29 14l-7 14"></path><path d="M24 24h10"></path></g>',1),pa=[_a];function ha(e,a){return r(),l("svg",ma,pa)}var va={name:"icon-park-outline-text-message",render:ha};const ga={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 48 48"},ka=k('<g fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"><path d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17z"></path><path d="M21 15v12" stroke-linecap="round"></path><path d="M15 21h12" stroke-linecap="round"></path><path d="M33.222 33.222l8.485 8.485" stroke-linecap="round"></path></g>',1),fa=[ka];function ya(e,a){return r(),l("svg",ga,fa)}var ja={name:"icon-park-outline-zoom-in",render:ya};const m=te(_e).use(B).use(We).use(ae);m.component("DummySpacer",Qe);m.component("DetailsWrapper",Ge);m.component("MarkdownWrapper",Xe);m.component("ImageModal",it);m.component("ImageWrapper",ct);m.component("StoryAuthor",gt);m.component("StoryDictionary",jt);m.component("YoutubeWrapper",$t);m.component("IconAuthors",Rt);m.component("IconArrowLeft",Tt);m.component("IconArrowRight",Kt);m.component("IconCaretLeft",Yt);m.component("IconCaretRight",Zt);m.component("IconCommunication",ta);m.component("IconInfo",na);m.component("IconSources",ca);m.component("IconTextMessage",va);m.component("IconZoomIn",ja);B.isReady().then(()=>{m.mount("#app")});
