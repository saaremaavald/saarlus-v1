import{C as s}from"./PDFButton.09203f06.js";import{s as n}from"./index.2deddb72.js";import{K as f,N as m,O as d,s as i}from"./vendor.518a3394.js";const h=f({props:m(["path","transform"],{transform:""}),setup(r){const t=d("context");return i(t.pdf,()=>{if(t.page.value&&r.path){let a=r.path,e=t.transforms;r.transform&&(e=[...t.transforms,r.transform]),e.forEach(o=>{a=n(a).transform(o).toString()}),t.page.value.drawSvgPath(a,{x:0,y:t.height,borderColor:{red:0,green:0,blue:0,type:s.RGB},opacity:.5}),t.update()}},{immediate:!0}),(a,e)=>null}});export{h as default};
