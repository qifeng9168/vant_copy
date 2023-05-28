import{A as j,e as r,y as S,I as Q,j as L,v as D,B as W,H as Y}from"./vue-libs-6a67f9c6.js";import{c as Z,D as N,B as $,q as E,i as ee,e as C,G as ae,v as le,p as k}from"./use-translate-982dff2e.js";import{u as ne}from"./use-expose-1bc17a0b.js";import{I as U}from"./index-e4434a2e.js";import{I as te}from"./index-4d11b537.js";import{L as re}from"./index-265efaae.js";import{n as ie,d as oe,c as B,m as F,t as R,b as se,w as ce}from"./with-install-3eab31d5.js";import{c as ue}from"./interceptor-5aa62d1f.js";import{s as de}from"./function-call-7fbfedc5.js";const[fe,i,ve]=Z("uploader");function O(e,n){return new Promise(o=>{if(n==="file"){o();return}const c=new FileReader;c.onload=v=>{o(v.target.result)},n==="dataUrl"?c.readAsDataURL(e):n==="text"&&c.readAsText(e)})}function M(e,n){return N(e).some(o=>o.file?$(n)?n(o.file):o.file.size>+n:!1)}function me(e,n){const o=[],c=[];return e.forEach(v=>{M(v,n)?c.push(v):o.push(v)}),{valid:o,invalid:c}}const ge=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg|avif)/i,pe=e=>ge.test(e);function T(e){return e.isImage?!0:e.file&&e.file.type?e.file.type.indexOf("image")===0:e.url?pe(e.url):typeof e.content=="string"?e.content.indexOf("data:image")===0:!1}const we=j({props:{name:ie,item:oe(Object),index:Number,imageFit:String,lazyLoad:Boolean,deletable:Boolean,reupload:Boolean,previewSize:[Number,String,Array],beforeDelete:Function},emits:["delete","preview","reupload"],setup(e,{emit:n,slots:o}){const c=()=>{const{status:t,message:u}=e.item;if(t==="uploading"||t==="failed"){const w=t==="failed"?r(U,{name:"close",class:i("mask-icon")},null):r(re,{class:i("loading")},null),f=ee(u)&&u!=="";return r("div",{class:i("mask")},[w,f&&r("div",{class:i("mask-message")},[u])])}},v=t=>{const{name:u,item:w,index:f,beforeDelete:P}=e;t.stopPropagation(),ue(P,{args:[w,{name:u,index:f}],done:()=>n("delete")})},p=()=>n("preview"),m=()=>n("reupload"),b=()=>{if(e.deletable&&e.item.status!=="uploading"){const t=o["preview-delete"];return r("div",{role:"button",class:i("preview-delete",{shadow:!t}),tabindex:0,"aria-label":ve("delete"),onClick:v},[t?t():r(U,{name:"cross",class:i("preview-delete-icon")},null)])}},y=()=>{if(o["preview-cover"]){const{index:t,item:u}=e;return r("div",{class:i("preview-cover")},[o["preview-cover"](C({index:t},u))])}},I=()=>{const{item:t,lazyLoad:u,imageFit:w,previewSize:f,reupload:P}=e;return T(t)?r(te,{fit:w,src:t.content||t.url,class:i("preview-image"),width:Array.isArray(f)?f[0]:f,height:Array.isArray(f)?f[1]:f,lazyLoad:u,onClick:P?m:p},{default:y}):r("div",{class:i("file"),style:E(e.previewSize)},[r(U,{class:i("file-icon"),name:"description"},null),r("div",{class:[i("file-name"),"van-ellipsis"]},[t.file?t.file.name:t.url]),y()])};return()=>r("div",{class:i("preview")},[I(),c(),b()])}}),he={name:B(""),accept:F("image/*"),capture:String,multiple:Boolean,disabled:Boolean,readonly:Boolean,lazyLoad:Boolean,maxCount:B(1/0),imageFit:F("cover"),resultType:F("dataUrl"),uploadIcon:F("photograph"),uploadText:String,deletable:R,reupload:Boolean,afterRead:Function,showUpload:R,modelValue:se(),beforeRead:Function,beforeDelete:Function,previewSize:[Number,String,Array],previewImage:R,previewOptions:Object,previewFullImage:R,maxSize:{type:[Number,String,Function],default:1/0}},be=j({name:fe,props:he,emits:["delete","oversize","clickUpload","closePreview","clickPreview","clickReupload","update:modelValue"],setup(e,{emit:n,slots:o}){const c=S(),v=[],p=S(-1),m=(a=e.modelValue.length)=>({name:e.name,index:a}),b=()=>{c.value&&(c.value.value="")},y=a=>{if(b(),M(a,e.maxSize))if(Array.isArray(a)){const l=me(a,e.maxSize);if(a=l.valid,n("oversize",l.invalid,m()),!a.length)return}else{n("oversize",a,m());return}if(a=Y(a),p.value>-1){const l=[...e.modelValue];l.splice(p.value,1,a),n("update:modelValue",l),p.value=-1}else n("update:modelValue",[...e.modelValue,...N(a)]);e.afterRead&&e.afterRead(a,m())},I=a=>{const{maxCount:l,modelValue:d,resultType:s}=e;if(Array.isArray(a)){const g=+l-d.length;a.length>g&&(a=a.slice(0,g)),Promise.all(a.map(h=>O(h,s))).then(h=>{const J=a.map((K,z)=>{const A={file:K,status:"",message:""};return h[z]&&(A.content=h[z]),A});y(J)})}else O(a,s).then(g=>{const h={file:a,status:"",message:""};g&&(h.content=g),y(h)})},t=a=>{const{files:l}=a.target;if(e.disabled||!l||!l.length)return;const d=l.length===1?l[0]:[].slice.call(l);if(e.beforeRead){const s=e.beforeRead(d,m());if(!s){b();return}if(le(s)){s.then(g=>{I(g||d)}).catch(b);return}}I(d)};let u;const w=()=>n("closePreview"),f=a=>{if(e.previewFullImage){const l=e.modelValue.filter(T),d=l.map(s=>(s.file&&!s.url&&s.status!=="failed"&&(s.url=URL.createObjectURL(s.file),v.push(s.url)),s.url)).filter(Boolean);u=de(C({images:d,startPosition:l.indexOf(a),onClose:w},e.previewOptions))}},P=()=>{u&&u.close()},G=(a,l)=>{const d=e.modelValue.slice(0);d.splice(l,1),n("update:modelValue",d),n("delete",a,m(l))},q=a=>{x(),p.value=a},_=(a,l)=>{const d=["imageFit","deletable","reupload","previewSize","beforeDelete"],s=C(k(e,d),k(a,d,!0));return r(we,W({item:a,index:l,onClick:()=>n(e.reupload?"clickReupload":"clickPreview",a,m(l)),onDelete:()=>G(a,l),onPreview:()=>f(a),onReupload:()=>q(l)},k(e,["name","lazyLoad"]),s),k(o,["preview-cover","preview-delete"]))},H=()=>{if(e.previewImage)return e.modelValue.map(_)},V=a=>n("clickUpload",a),X=()=>{if(e.modelValue.length>=+e.maxCount&&!e.reupload)return;const a=e.modelValue.length>=+e.maxCount&&e.reupload,l=e.readonly?null:r("input",{ref:c,type:"file",class:i("input"),accept:e.accept,capture:e.capture,multiple:e.multiple&&p.value===-1,disabled:e.disabled,onChange:t},null);return o.default?L(r("div",{class:i("input-wrapper"),onClick:V},[o.default(),l]),[[D,!a]]):L(r("div",{class:i("upload",{readonly:e.readonly}),style:E(e.previewSize),onClick:V},[r(U,{name:e.uploadIcon,class:i("upload-icon")},null),e.uploadText&&r("span",{class:i("upload-text")},[e.uploadText]),l]),[[D,e.showUpload&&!a]])},x=()=>{c.value&&!e.disabled&&c.value.click()};return Q(()=>{v.forEach(a=>URL.revokeObjectURL(a))}),ne({chooseFile:x,closeImagePreview:P}),ae(()=>e.modelValue),()=>r("div",{class:i()},[r("div",{class:i("wrapper",{disabled:e.disabled})},[H(),X()])])}}),ye=ce(be),ze=ye;export{ze as V};