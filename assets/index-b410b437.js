import{T as g}from"./index-8a81564f.js";import{I as C}from"./index-e4434a2e.js";import{C as T}from"./index-85bc3cbb.js";import{a as _,R as x}from"./index-a054d054.js";import{B as k}from"./index-eeca961e.js";import{A as f,e as o,y as V,r as y,o as h,c as v,w as S,C as c}from"./vue-libs-6a67f9c6.js";import{c as b,a as w}from"./use-translate-982dff2e.js";import{u as I,w as L}from"./with-install-3eab31d5.js";import{s as p}from"./function-call-99741f00.js";import"./constant-00b7fd44.js";import"./index-65b13139.js";import"./use-route-ea8124d0.js";import"./Checker-9bd41115.js";import"./index-265efaae.js";import"./mount-component-5de093da.js";import"./use-expose-1bc17a0b.js";import"./index-b2934b31.js";import"./use-touch-87b155f0.js";import"./use-lazy-render-7199096a.js";import"./on-popup-reopen-2b57f4ff.js";import"./index-bef8ed4f.js";import"./interceptor-5aa62d1f.js";const[A,a,B]=b("contact-list"),N={list:Array,addText:String,modelValue:I,defaultTagText:String},R=f({name:A,props:N,emits:["add","edit","select","update:modelValue"],setup(n,{emit:t}){const i=(e,d)=>{const u=()=>{t("update:modelValue",e.id),t("select",e,d)},s=()=>o(x,{class:a("radio"),name:e.id,iconSize:18},null),r=()=>o(C,{name:"edit",class:a("edit"),onClick:l=>{l.stopPropagation(),t("edit",e,d)}},null),m=()=>{const l=[`${e.name}，${e.tel}`];return e.isDefault&&n.defaultTagText&&l.push(o(g,{type:"primary",round:!0,class:a("item-tag")},{default:()=>[n.defaultTagText]})),l};return o(T,{key:e.id,isLink:!0,center:!0,class:a("item"),titleClass:a("item-title"),onClick:u},{icon:r,title:m,"right-icon":s})};return()=>o("div",{class:a()},[o(_,{modelValue:n.modelValue,class:a("group")},{default:()=>[n.list&&n.list.map(i)]}),o("div",{class:[a("bottom"),"van-safe-area-bottom"]},[o(k,{round:!0,block:!0,type:"primary",class:a("add"),text:n.addText||B("addContact"),onClick:()=>t("add")},null)])])}}),D=L(R),E=D,nt=f({__name:"index",setup(n){const t=w({"zh-CN":{add:"新增",edit:"编辑",list:[{id:"1",name:"张三",tel:"13000000000",isDefault:!0},{id:"2",name:"李四",tel:"1310000000"}],select:"选择",defaultTagText:"默认"},"en-US":{add:"Add",edit:"Edit",list:[{id:"1",name:"John Snow",tel:"13000000000",isDefault:!0},{id:"2",name:"Ned Stark",tel:"1310000000"}],select:"Select",defaultTagText:"default"}}),i=V("1"),e=()=>{p(t("add"))},d=s=>{p(t("edit")+s.id)},u=s=>{p(t("select")+s.id)};return(s,r)=>{const m=y("demo-block");return h(),v(m,{title:c(t)("basicUsage")},{default:S(()=>[o(c(E),{modelValue:i.value,"onUpdate:modelValue":r[0]||(r[0]=l=>i.value=l),list:c(t)("list"),"default-tag-text":c(t)("defaultTagText"),onAdd:e,onEdit:d,onSelect:u},null,8,["modelValue","list","default-tag-text"])]),_:1},8,["title"])}}});export{nt as default};