import{c as k,a as v}from"./use-translate.4764287f.js";import{w as z}from"./with-install.bb994bce.js";import{z as x,D as w,F as b,e,C as S,r as V,o as A,a as B,w as a,B as t,h as n,t as i,d as C}from"./vue-libs.7ad34eae.js";import{V as l}from"./index.72e98335.js";import{V as N,b as y}from"./index.342ce2db.js";import"./constant.80c6de18.js";import"./use-route.13c8c682.js";import"./index.de1d0b70.js";import"./index.eee57e92.js";import"./Checker.8ad6680d.js";const[g,$]=k("space"),R={align:String,direction:{type:String,default:"horizontal"},size:{type:[Number,String,Array],default:8},wrap:Boolean,fill:Boolean};function h(u=[]){const r=[];return u.forEach(o=>{Array.isArray(o)?r.push(...o):o.type===b?r.push(...h(o.children)):r.push(o)}),r.filter(o=>{var p;return!(o&&(typeof Comment<"u"&&o.type===Comment||o.type===b&&((p=o.children)==null?void 0:p.length)===0||o.type===Text&&o.children.trim()===""))})}const E=x({name:g,props:R,setup(u,{slots:r}){const o=w(()=>{var d;return(d=u.align)!=null?d:u.direction==="horizontal"?"center":""}),p=d=>typeof d=="number"?d+"px":d,f=d=>{const m={},_=`${p(Array.isArray(u.size)?u.size[0]:u.size)}`,c=`${p(Array.isArray(u.size)?u.size[1]:u.size)}`;return d?u.wrap?{marginBottom:c}:{}:(u.direction==="horizontal"&&(m.marginRight=_),(u.direction==="vertical"||u.wrap)&&(m.marginBottom=c),m)};return()=>{var m;const d=h((m=r.default)==null?void 0:m.call(r));return e("div",{class:[$({[u.direction]:u.direction,[`align-${o.value}`]:o.value,wrap:u.wrap,fill:u.fill})]},[d.map((_,c)=>e("div",{key:`item-${c}`,class:`${g}-item`,style:f(c===d.length-1)},[_]))])}}}),s=z(E);const T=n("start"),U=n("center"),D=n("end"),F=n("baseline"),M=C("div",{style:{padding:"40px 20px",background:"#fff"}},"Block",-1),O={__name:"index",setup(u){const r=v({"zh-CN":{vertical:"\u5782\u76F4\u6392\u5217",customSize:"\u81EA\u5B9A\u4E49\u95F4\u8DDD",align:"\u5BF9\u9F50\u65B9\u5F0F",wrap:"\u81EA\u52A8\u6362\u884C"},"en-US":{vertical:"Vertical",customSize:"Custom Size",align:"Alignment",wrap:"Auto Wrap"}}),o=S("center");return(p,f)=>{const d=V("demo-block");return A(),B(b,null,[e(d,{title:t(r)("basicUsage")},{default:a(()=>[e(t(s),null,{default:a(()=>[e(t(l),{type:"primary"},{default:a(()=>[n(i(t(r)("button")),1)]),_:1}),e(t(l),{type:"primary"},{default:a(()=>[n(i(t(r)("button")),1)]),_:1}),e(t(l),{type:"primary"},{default:a(()=>[n(i(t(r)("button")),1)]),_:1}),e(t(l),{type:"primary"},{default:a(()=>[n(i(t(r)("button")),1)]),_:1})]),_:1})]),_:1},8,["title"]),e(d,{title:t(r)("vertical")},{default:a(()=>[e(t(s),{direction:"vertical",fill:""},{default:a(()=>[e(t(l),{type:"primary",block:""},{default:a(()=>[n(i(t(r)("button")),1)]),_:1}),e(t(l),{type:"primary",block:""},{default:a(()=>[n(i(t(r)("button")),1)]),_:1}),e(t(l),{type:"primary",block:""},{default:a(()=>[n(i(t(r)("button")),1)]),_:1})]),_:1})]),_:1},8,["title"]),e(d,{title:t(r)("customSize")},{default:a(()=>[e(t(s),{size:20,style:{"margin-bottom":"16px"}},{default:a(()=>[e(t(l),{type:"primary"},{default:a(()=>[n(i(t(r)("button")),1)]),_:1}),e(t(l),{type:"primary"},{default:a(()=>[n(i(t(r)("button")),1)]),_:1}),e(t(l),{type:"primary"},{default:a(()=>[n(i(t(r)("button")),1)]),_:1})]),_:1}),e(t(s),{size:"3rem"},{default:a(()=>[e(t(l),{type:"primary"},{default:a(()=>[n(i(t(r)("button")),1)]),_:1}),e(t(l),{type:"primary"},{default:a(()=>[n(i(t(r)("button")),1)]),_:1}),e(t(l),{type:"primary"},{default:a(()=>[n(i(t(r)("button")),1)]),_:1})]),_:1})]),_:1},8,["title"]),e(d,{title:t(r)("align")},{default:a(()=>[e(t(N),{modelValue:o.value,"onUpdate:modelValue":f[0]||(f[0]=m=>o.value=m),direction:"horizontal",style:{"margin-bottom":"16px"}},{default:a(()=>[e(t(y),{name:"start"},{default:a(()=>[T]),_:1}),e(t(y),{name:"center"},{default:a(()=>[U]),_:1}),e(t(y),{name:"end"},{default:a(()=>[D]),_:1}),e(t(y),{name:"baseline"},{default:a(()=>[F]),_:1})]),_:1},8,["modelValue"]),e(t(s),{align:o.value,style:{padding:"16px",background:"#f3f2f5"}},{default:a(()=>[e(t(l),{type:"primary"},{default:a(()=>[n(i(o.value),1)]),_:1}),M]),_:1},8,["align"])]),_:1},8,["title"]),e(d,{title:t(r)("wrap")},{default:a(()=>[e(t(s),{wrap:""},{default:a(()=>[e(t(l),{type:"primary",block:""},{default:a(()=>[n(i(t(r)("button")),1)]),_:1}),e(t(l),{type:"primary",block:""},{default:a(()=>[n(i(t(r)("button")),1)]),_:1}),e(t(l),{type:"primary",block:""},{default:a(()=>[n(i(t(r)("button")),1)]),_:1}),e(t(l),{type:"primary",block:""},{default:a(()=>[n(i(t(r)("button")),1)]),_:1}),e(t(l),{type:"primary",block:""},{default:a(()=>[n(i(t(r)("button")),1)]),_:1}),e(t(l),{type:"primary",block:""},{default:a(()=>[n(i(t(r)("button")),1)]),_:1}),e(t(l),{type:"primary",block:""},{default:a(()=>[n(i(t(r)("button")),1)]),_:1}),e(t(l),{type:"primary",block:""},{default:a(()=>[n(i(t(r)("button")),1)]),_:1})]),_:1})]),_:1},8,["title"])],64)}}};export{O as default};