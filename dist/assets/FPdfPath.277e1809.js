import{C as s}from"./PDFButton.09203f06.js";import{s as n}from"./index.2deddb72.js";import{H as f,K as m,L as d,M as i}from"./vendor.f3834dc7.js";const h=f({props:m(["path","transform"],{transform:""}),setup(r){const t=d("context");return i(t.pdf,()=>{if(t.page.value&&r.path){let e=r.path,a=t.transforms;r.transform&&(a=[...t.transforms,r.transform]),a.forEach(o=>{e=n(e).transform(o).toString()}),t.page.value.drawSvgPath(e,{x:0,y:t.height,borderColor:{red:0,green:0,blue:0,type:s.RGB},opacity:.5}),t.update()}},{immediate:!0}),(e,a)=>null}});export{h as default};