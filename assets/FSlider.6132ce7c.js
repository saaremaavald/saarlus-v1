import{d as s,h as d,j as n,v as r,k as m,b as p,c as i,l as c}from"./index.e91f46c8.js";const V=s({props:{modelValue:{default:0}},emits:["update:modelValue"],setup(l,{emit:t}){const e=d({get:()=>l.modelValue,set:a=>{t("update:modelValue",a)}});return t("update:modelValue",l.modelValue),(a,u)=>n((p(),i("input",{type:"range","onUpdate:modelValue":u[0]||(u[0]=o=>c(e)?e.value=o:null)},null,512)),[[r,m(e),void 0,{number:!0}]])}});export{V as default};
