import{c as C,v as A,a as I}from"./use-translate.adc2ccf9.js";import{n as S,t as F,w as E}from"./with-install.007edd36.js";import{H as d,f as R}from"./constant.80c6de18.js";import{u as N}from"./use-placeholder.76391f23.js";import{I as D,a as P}from"./index.55cbeda9.js";import{z as g,C as z,e as r,r as L,o as y,a as O,w as s,B as e,F as U}from"./vue-libs.a65f1bfc.js";import{T as x}from"./function-call.668cd34a.js";import"./use-height.8a1840fd.js";import"./on-popup-reopen.76ccb88c.js";import"./mount-component.1ad90cc4.js";import"./use-expose.9b1749d6.js";import"./index.6376440d.js";import"./interceptor.e2b79e43.js";import"./use-touch.ffb74f5c.js";import"./use-lazy-render.965a094b.js";import"./index.8af07ca5.js";import"./index.49155860.js";const[V,n]=C("nav-bar"),H={title:String,fixed:Boolean,zIndex:S,border:F,leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean},K=g({name:V,props:H,emits:["click-left","click-right"],setup(a,{emit:t,slots:l}){const i=z(),u=N(i,n),m=c=>t("click-left",c),o=c=>t("click-right",c),B=()=>l.left?l.left():[a.leftArrow&&r(D,{class:n("arrow"),name:"arrow-left"},null),a.leftText&&r("span",{class:n("text")},[a.leftText])],k=()=>l.right?l.right():r("span",{class:n("text")},[a.rightText]),h=()=>{const{title:c,fixed:p,border:_,zIndex:v}=a,w=A(v),T=a.leftArrow||a.leftText||l.left,b=a.rightText||l.right;return r("div",{ref:i,style:w,class:[n({fixed:p}),{[R]:_,"van-safe-area-top":a.safeAreaInsetTop}]},[r("div",{class:n("content")},[T&&r("div",{class:[n("left"),d],onClick:m},[B()]),r("div",{class:[n("title"),"van-ellipsis"]},[l.title?l.title():c]),b&&r("div",{class:[n("right"),d],onClick:o},[k()])])])};return()=>a.fixed&&a.placeholder?u(h):h()}}),M=E(K),f=M,it=g({__name:"index",setup(a){const t=I({"zh-CN":{useSlot:"\u4F7F\u7528\u63D2\u69FD",showBack:"\u8FD4\u56DE\u4E0A\u7EA7",rightButton:"\u53F3\u4FA7\u6309\u94AE"},"en-US":{useSlot:"Use Slot",showBack:"Back",rightButton:"Right Button"}}),l=()=>x(t("back")),i=()=>x(t("button"));return(u,m)=>{const o=L("demo-block");return y(),O(U,null,[r(o,{title:e(t)("basicUsage")},{default:s(()=>[r(e(f),{title:e(t)("title")},null,8,["title"])]),_:1},8,["title"]),r(o,{title:e(t)("showBack")},{default:s(()=>[r(e(f),{title:e(t)("title"),"left-text":e(t)("back"),"left-arrow":"",onClickRight:i},null,8,["title","left-text"])]),_:1},8,["title"]),r(o,{title:e(t)("rightButton")},{default:s(()=>[r(e(f),{title:e(t)("title"),"left-text":e(t)("back"),"right-text":e(t)("button"),"left-arrow":"",onClickLeft:l,onClickRight:i},null,8,["title","left-text","right-text"])]),_:1},8,["title"]),r(o,{title:e(t)("useSlot")},{default:s(()=>[r(e(f),{title:e(t)("title"),"left-text":e(t)("back"),"left-arrow":""},{right:s(()=>[r(e(P),{name:"search",size:"18"})]),_:1},8,["title","left-text"])]),_:1},8,["title"])],64)}}});export{it as default};