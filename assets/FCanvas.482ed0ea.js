import{M as r,r as s,g as d,N as f,J as p,o as v,c as i,H as x}from"./vendor.624f1f50.js";const g=r({setup(_,{expose:c}){const t=s(null),a=s(null),l=s(!1),n=300,o=300,e={width:n,height:o,ctx:a,updated:l,update:()=>{a.value&&a.value.clearRect(0,0,n,o)}};return d(()=>{t.value&&(e.ctx.value=t.value.getContext("2d"))}),f(()=>{e.update(),e.updated.value=!e.updated.value}),p("context",e),c(e),(u,m)=>(v(),i("canvas",{ref_key:"canvasEl",ref:t,width:n,height:o},[x(u.$slots,"default")],512))}});export{g as default};