import{_ as v,h as D,k as T,l as j,m as F,o,c as p,n as w,p as h,q as R,r as I,f as m,w as f,e as n,j as r,T as H,d as x,t as N,F as B,s as U,v as V,a as y,b,x as O,P as S,y as q}from"./app.879fbdb8.js";const rt={},W=D({__name:"Comment",setup(l){const _=w(),s=T();function i(){s.value.innerHTML="";const a=document.createElement("script");a.setAttribute("issue-term","pathname"),a.setAttribute("theme","github-light"),a.setAttribute("repo","ui-log/blog-comment"),a.type="text/javascript",a.async=!0,a.crossOrigin="anonymous",a.src="https://utteranc.es/client.js",s.value.appendChild(a)}return j(i),F(()=>_.value.path,i),(a,d)=>(o(),p("div",{ref_key:"$root",ref:s},null,512))}});var Y=v(W,[["__file","Comment.vue"]]);const z=["src"],G={class:"text_area"},J=["innerHTML"],K=D({__name:"RelationPostItem",props:{item:null},emits:["select-tag"],setup(l,{emit:_}){const s=l,i=h(()=>{const{thumbnail:t}=s.item;if(!t){const e=[1,2,3].sort(()=>Math.random()-.5).pop();return R(`/assets/no-image-${e}.jpg`)}return t.startsWith("~")?new URL(t.replace("~","."),rt.url.replace(".vuepress/theme/components/PostItem.vue","")).href:t});h(()=>{var t;return(t=s.item.tag)==null?void 0:t.split(",").map(e=>e.trim())});const a=h(()=>s.item.title.replace(/\"/gi,""));h(()=>{const t=s.item.description;return t==null?void 0:t.replace(/\"/gi,"")});function d(t){const e=Date.now()-t,u=1e3,g=u*60,c=g*60,$=c*24,M=$*7;if(e<g)return Math.ceil(e/u)+"\uCD08 \uC804";if(e<c)return Math.ceil(e/g)+"\uBD84 \uC804";if(e<$)return Math.ceil(e/c)+"\uC2DC\uAC04 \uC804";if(e<M)return Math.ceil(e/$)+"\uC77C \uC804";const C=new Date(t),P=C.getFullYear(),L=`0${C.getMonth()+1}`.substr(-2),k=`0${C.getDate()}`.substr(-2),A=`0${C.getHours()}`.substr(-2),E=`0${C.getMinutes()}`.substr(-2);return`${P}-${L}-${k} ${A}:${E}`}return(t,e)=>{const u=I("router-link");return o(),p("article",null,[m(u,{to:l.item.path,class:"figure"},{default:f(()=>[n("img",{src:r(i),alt:"no-image"},null,8,z)]),_:1},8,["to"]),n("div",G,[m(u,{to:l.item.path,class:"info"},{default:f(()=>[n("h4",{class:"post_title",innerHTML:r(a)},null,8,J)]),_:1},8,["to"]),n("time",null,[m(r(H)),x(" "+N(d(l.item.createdAt)),1)])])])}}});var Q=v(K,[["__scopeId","data-v-4329ef6e"],["__file","RelationPostItem.vue"]]);const X=D({__name:"RelationPosts",props:{items:null},emits:["select-tag"],setup(l,{emit:_}){function s(i){_("select-tag",i)}return(i,a)=>(o(),p("ul",null,[(o(!0),p(B,null,U(l.items,(d,t)=>(o(),p("li",{key:t},[m(Q,{item:d,onSelectTag:s},null,8,["item"])]))),128))]))}});var Z=v(X,[["__scopeId","data-v-2c2673e6"],["__file","RelationPosts.vue"]]);const tt={class:"hit"},et=["src"],st=n("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"},null,-1),at={key:0,class:"relations"},ot=n("h2",null,"\uAD00\uB828\uAE00",-1),nt={class:"ad"},it=n("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-format":"autorelaxed","data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"2985948964"},null,-1),ct=D({__name:"Layout",setup(l){const _=V(),s=w(),i="https://ui-log.github.io",a=h(()=>`https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=${i}${s.value.path}&count_bg=%230099FF&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=%EC%A1%B0%ED%9A%8C%EC%88%98&edge_flat=true`),d=h(()=>{const{tag:t}=s.value.frontmatter;if(!t)return[];const e=_.value.filter(c=>c.tag.includes(t)),u=e.find(c=>c.path===s.value.path),g=e.indexOf(u);return e.slice(Math.max(g-5,0),g+5).filter(c=>c!==u)});return(t,e)=>(o(),p(B,null,[m(S,null,{"page-content-top":f(()=>[n("div",tt,[n("img",{src:r(a),alt:"Hits bn"},null,8,et)]),(o(),y(b("script"),{src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4877378276818686",crossorigin:"anonymous",async:""})),st,(o(),y(b("script"),null,{default:f(()=>[x(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1}))]),"page-bottom":f(()=>[m(r(Y)),r(d).length>0?(o(),p("section",at,[ot,n("div",nt,[(o(),y(b("script"),{src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4877378276818686",crossorigin:"anonymous",async:""})),it,(o(),y(b("script"),null,{default:f(()=>[x(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1}))]),m(r(Z),{items:r(d)},null,8,["items"])])):O("",!0)]),_:1}),m(r(q))],64))}});var ut=v(ct,[["__file","Layout.vue"]]);export{ut as default};
