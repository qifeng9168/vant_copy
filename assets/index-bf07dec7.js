import{V as n}from"./index-08bd86e2.js";import{a as F}from"./use-translate-7ec0e456.js";import{A as h,u as a,r as x,o as g,a as C,e as l,w as u,C as t,F as U}from"./vue-libs-a0ef9506.js";import"./utils-f60f6003.js";import"./Picker-0f14769f.js";import"./use-expose-8d780f8a.js";import"./index-31a73367.js";import"./with-install-5cd181dc.js";import"./use-touch-2d22ae5a.js";import"./constant-a81ffd37.js";import"./index-4cc1a83f.js";import"./use-id-97e5b872.js";import"./use-route-ed093b71.js";import"./index-01a9a624.js";import"./on-popup-reopen-a0d16524.js";import"./use-refs-81a99117.js";import"./index-5969013a.js";import"./index-f26f74fc.js";import"./interceptor-cab67930.js";import"./index-e514b8f2.js";const K=h({__name:"index",setup(_){const o=F({"zh-CN":{hour:"时",minute:"分",timeRange:"时间范围",chooseTime:"选择时间",columnsType:"选项类型",optionsFilter:"过滤选项",optionsFormatter:"格式化选项"},"en-US":{hour:"h",minute:"m",timeRange:"Time Range",chooseTime:"Choose Time",columnsType:"Columns Type",optionsFilter:"Options Filter",optionsFormatter:"Options Formatter"}}),s=a(["12","00"]),p=a(["12","00","00"]),d=a(["12","35"]),c=a(["12"," 00"]),f=a(["12","00"]),T=["hour","minute","second"],V=(r,e)=>r==="minute"?e.filter(i=>Number(i.value)%10===0):e,v=(r,e)=>(r==="hour"&&(e.text+=o("hour")),r==="minute"&&(e.text+=o("minute")),e);return(r,e)=>{const i=x("demo-block");return g(),C(U,null,[l(i,{card:"",title:t(o)("basicUsage")},{default:u(()=>[l(t(n),{modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=m=>s.value=m),title:t(o)("chooseTime")},null,8,["modelValue","title"])]),_:1},8,["title"]),l(i,{card:"",title:t(o)("columnsType")},{default:u(()=>[l(t(n),{modelValue:p.value,"onUpdate:modelValue":e[1]||(e[1]=m=>p.value=m),title:t(o)("chooseTime"),"columns-type":T},null,8,["modelValue","title"])]),_:1},8,["title"]),l(i,{card:"",title:t(o)("timeRange")},{default:u(()=>[l(t(n),{modelValue:d.value,"onUpdate:modelValue":e[2]||(e[2]=m=>d.value=m),title:t(o)("chooseTime"),"min-hour":10,"max-hour":20,"min-minute":30,"max-minute":40},null,8,["modelValue","title"])]),_:1},8,["title"]),l(i,{card:"",title:t(o)("optionsFormatter")},{default:u(()=>[l(t(n),{modelValue:f.value,"onUpdate:modelValue":e[3]||(e[3]=m=>f.value=m),title:t(o)("chooseTime"),formatter:v},null,8,["modelValue","title"])]),_:1},8,["title"]),l(i,{card:"",title:t(o)("optionsFilter")},{default:u(()=>[l(t(n),{modelValue:c.value,"onUpdate:modelValue":e[4]||(e[4]=m=>c.value=m),title:t(o)("chooseTime"),filter:V},null,8,["modelValue","title"])]),_:1},8,["title"])],64)}}});export{K as default};