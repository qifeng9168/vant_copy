import{V as u,b as a}from"./index-4151f0ce.js";import{c as d}from"./index-2630be1a.js";import{a as y}from"./use-translate-eec47ef5.js";import{s as S}from"./function-call-005388f5.js";import{A as x,r as C,o as _,a as p,e,w as t,C as l,g as i,F as c,b as v,d as f,t as m}from"./vue-libs-12a1683e.js";import"./with-install-99dfa70d.js";import"./use-touch-e98b6450.js";import"./use-expose-963cf204.js";import"./on-popup-reopen-eee79bbb.js";import"./mount-component-14ebcfe9.js";import"./index-4fa7f56f.js";import"./index-b297c6dc.js";import"./index-33946f24.js";import"./use-lazy-render-8625b066.js";import"./index-54de7487.js";import"./interceptor-a4a72906.js";import"./constant-a81ffd37.js";import"./index-ab1aa43b.js";const V=["src"],b={class:"custom-indicator"},O=x({__name:"index",setup(k){const o=y({"zh-CN":{title2:"懒加载",title3:"监听 change 事件",title4:"纵向滚动",title5:"自定义滑块大小",title6:"自定义指示器",message:"当前 Swipe 索引："},"en-US":{title2:"Lazy Render",title3:"Change Event",title4:"Vertical Scrolling",title5:"Set SwipeItem Size",title6:"Custom indicator",message:"Current Swipe index:"}}),g=[d("apple-1.jpeg"),d("apple-2.jpeg"),d("apple-3.jpeg"),d("apple-4.jpeg")],h=s=>S(o("message")+s);return(s,j)=>{const n=C("demo-block");return _(),p(c,null,[e(n,{title:l(o)("basicUsage")},{default:t(()=>[e(l(u),{autoplay:3e3,"indicator-color":"white"},{default:t(()=>[e(l(a),null,{default:t(()=>[i("1")]),_:1}),e(l(a),null,{default:t(()=>[i("2")]),_:1}),e(l(a),null,{default:t(()=>[i("3")]),_:1}),e(l(a),null,{default:t(()=>[i("4")]),_:1})]),_:1})]),_:1},8,["title"]),e(n,{title:l(o)("title2")},{default:t(()=>[e(l(u),{autoplay:3e3,"lazy-render":""},{default:t(()=>[(_(),p(c,null,v(g,r=>e(l(a),{key:r},{default:t(()=>[f("img",{src:r},null,8,V)]),_:2},1024)),64))]),_:1})]),_:1},8,["title"]),e(n,{title:l(o)("title3")},{default:t(()=>[e(l(u),{"indicator-color":"white",onChange:h},{default:t(()=>[e(l(a),null,{default:t(()=>[i("1")]),_:1}),e(l(a),null,{default:t(()=>[i("2")]),_:1}),e(l(a),null,{default:t(()=>[i("3")]),_:1}),e(l(a),null,{default:t(()=>[i("4")]),_:1})]),_:1})]),_:1},8,["title"]),e(n,{title:l(o)("title4")},{default:t(()=>[e(l(u),{vertical:"",autoplay:3e3,"indicator-color":"white",style:{height:"200px"},class:"demo-swipe--vertical"},{default:t(()=>[e(l(a),null,{default:t(()=>[i("1")]),_:1}),e(l(a),null,{default:t(()=>[i("2")]),_:1}),e(l(a),null,{default:t(()=>[i("3")]),_:1}),e(l(a),null,{default:t(()=>[i("4")]),_:1})]),_:1})]),_:1},8,["title"]),e(n,{title:l(o)("title5")},{default:t(()=>[e(l(u),{width:300,loop:!1,"indicator-color":"white"},{default:t(()=>[e(l(a),null,{default:t(()=>[i("1")]),_:1}),e(l(a),null,{default:t(()=>[i("2")]),_:1}),e(l(a),null,{default:t(()=>[i("3")]),_:1}),e(l(a),null,{default:t(()=>[i("4")]),_:1})]),_:1})]),_:1},8,["title"]),e(n,{title:l(o)("title6")},{default:t(()=>[e(l(u),null,{indicator:t(({active:r,total:w})=>[f("div",b,m(r+1)+"/"+m(w),1)]),default:t(()=>[e(l(a),null,{default:t(()=>[i("1")]),_:1}),e(l(a),null,{default:t(()=>[i("2")]),_:1}),e(l(a),null,{default:t(()=>[i("3")]),_:1}),e(l(a),null,{default:t(()=>[i("4")]),_:1})]),_:1})]),_:1},8,["title"])],64)}}});export{O as default};