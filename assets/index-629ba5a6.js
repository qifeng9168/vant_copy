import{V as u}from"./index-bfb06ab0.js";import{a as c}from"./use-translate-eec47ef5.js";import{s as C}from"./function-call-005388f5.js";import{A as b,y as i,r as B,o as S,a as k,e as l,w as n,C as o,d as y,t as w,F as D}from"./vue-libs-12a1683e.js";import"./use-touch-e98b6450.js";import"./with-install-99dfa70d.js";import"./mount-component-14ebcfe9.js";import"./use-expose-963cf204.js";import"./index-4fa7f56f.js";import"./index-b297c6dc.js";import"./index-33946f24.js";import"./use-lazy-render-8625b066.js";import"./on-popup-reopen-eee79bbb.js";import"./index-54de7487.js";import"./interceptor-a4a72906.js";import"./constant-a81ffd37.js";import"./index-ab1aa43b.js";const N={class:"custom-button"},z={style:{height:"150px",paddingLeft:"30px"}},X=b({__name:"index",setup(F){const a=c({"zh-CN":{text:"当前值：",title1:"基础用法",title2:"双滑块",title3:"指定选择范围",title4:"禁用",title5:"指定步长",vertical:"垂直方向",customStyle:"自定义样式",customButton:"自定义按钮"},"en-US":{text:"Current value: ",title1:"Basic Usage",title2:"Dual thumb mode",title3:"Range",title4:"Disabled",title5:"Step size",vertical:"Vertical",customStyle:"Custom Style",customButton:"Custom Button"}}),r=i(50),p=i([20,60]),v=i(0),V=i(50),f=i(50),x=i(50),s=i(50),_=i(50),g=i([20,60]),d=U=>C(a("text")+U);return(U,e)=>{const m=B("demo-block");return S(),k(D,null,[l(m,{title:o(a)("title1")},{default:n(()=>[l(o(u),{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=t=>r.value=t),onChange:d},null,8,["modelValue"])]),_:1},8,["title"]),l(m,{title:o(a)("title2")},{default:n(()=>[l(o(u),{range:"",modelValue:p.value,"onUpdate:modelValue":e[1]||(e[1]=t=>p.value=t),onChange:d},null,8,["modelValue"])]),_:1},8,["title"]),l(m,{title:o(a)("title3")},{default:n(()=>[l(o(u),{modelValue:v.value,"onUpdate:modelValue":e[2]||(e[2]=t=>v.value=t),min:-50,max:50,onChange:d},null,8,["modelValue"])]),_:1},8,["title"]),l(m,{title:o(a)("title4")},{default:n(()=>[l(o(u),{modelValue:V.value,"onUpdate:modelValue":e[3]||(e[3]=t=>V.value=t),disabled:""},null,8,["modelValue"])]),_:1},8,["title"]),l(m,{title:o(a)("title5")},{default:n(()=>[l(o(u),{modelValue:f.value,"onUpdate:modelValue":e[4]||(e[4]=t=>f.value=t),step:10,onChange:d},null,8,["modelValue"])]),_:1},8,["title"]),l(m,{title:o(a)("customStyle")},{default:n(()=>[l(o(u),{modelValue:x.value,"onUpdate:modelValue":e[5]||(e[5]=t=>x.value=t),"bar-height":"4px","active-color":"#ee0a24",onChange:d},null,8,["modelValue"])]),_:1},8,["title"]),l(m,{title:o(a)("customButton")},{default:n(()=>[l(o(u),{modelValue:s.value,"onUpdate:modelValue":e[6]||(e[6]=t=>s.value=t)},{button:n(()=>[y("div",N,w(s.value),1)]),_:1},8,["modelValue"])]),_:1},8,["title"]),l(m,{title:o(a)("vertical")},{default:n(()=>[y("div",z,[l(o(u),{modelValue:_.value,"onUpdate:modelValue":e[7]||(e[7]=t=>_.value=t),vertical:"",onChange:d},null,8,["modelValue"]),l(o(u),{modelValue:g.value,"onUpdate:modelValue":e[8]||(e[8]=t=>g.value=t),range:"",vertical:"",style:{"margin-left":"100px"},onChange:d},null,8,["modelValue"])])]),_:1},8,["title"])],64)}}});export{X as default};