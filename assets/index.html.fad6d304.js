import{_ as i}from"./app.3052dcfb.js";import{l as t,m as p,E as n,G as e,p as s,Y as o,K as l,C as a}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var d="/assets/FixDataTablesbugdatainconsistentlyalignedright_0.76a1fbec.png",c="/assets/FixDataTablesbugdatainconsistentlyalignedright_1.0a38a03c.png",r="/assets/FixDataTablesbugdatainconsistentlyalignedright_2.e4589c58.png",u="/assets/FixDataTablesbugdatainconsistentlyalignedright_3.f7527987.png",b="/assets/FixDataTablesbugdatainconsistentlyalignedright_4.7320460c.png";const _={},g=l('<img src="'+d+`"><h1 id="tldr" tabindex="-1"><a class="header-anchor" href="#tldr" aria-hidden="true">#</a> TLDR</h1><p>CSS\uC5D0\uC11C \uC544\uB798 \uCF54\uB4DC\uB97C \uCD94\uAC00\uD558\uC138\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>table<span class="token punctuation">.</span>dataTable th<span class="token punctuation">.</span>dt<span class="token operator">-</span>type<span class="token operator">-</span>numeric<span class="token punctuation">,</span> table<span class="token punctuation">.</span>dataTable th<span class="token punctuation">.</span>dt<span class="token operator">-</span>type<span class="token operator">-</span>date<span class="token punctuation">,</span> table<span class="token punctuation">.</span>dataTable td<span class="token punctuation">.</span>dt<span class="token operator">-</span>type<span class="token operator">-</span>numeric<span class="token punctuation">,</span> table<span class="token punctuation">.</span>dataTable td<span class="token punctuation">.</span>dt<span class="token operator">-</span>type<span class="token operator">-</span>date <span class="token punctuation">{</span>
    text<span class="token operator">-</span>align<span class="token operator">:</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),h=a("h1",{id:"\u1106\u116E\u11AB\u110C\u1166",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u1106\u116E\u11AB\u110C\u1166","aria-hidden":"true"},"#"),s(" \uBB38\uC81C")],-1),m=a("p",null,"DataTables \uD14C\uC774\uBE14\uC774 \uB54C\uB85C\uB294 \uAE30\uBCF8\uC801\uC73C\uB85C \uC67C\uCABD\uC774\uC5B4\uC57C \uD558\uB294 \uB370\uC774\uD130\uB97C \uC624\uB978\uCABD\uC73C\uB85C \uC815\uB82C\uD569\uB2C8\uB2E4.",-1),k=a("p",null,"\uC6B0\uB9AC\uAC00 \uD14C\uC774\uBE14\uC774 \uC774\uB807\uAC8C \uBCF4\uC774\uAE30\uB97C \uAE30\uB300\uD569\uB2C8\uB2E4:",-1),v=a("p",null,[a("img",{src:c,alt:"\uC608\uC2DC \uD14C\uC774\uBE14"})],-1),y=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),f=a("p",null,"\uD589 \uC694\uC18C\uC758 CSS\uB97C \uC870\uC0AC\uD574 \uBCF4\uBA74 \uD14D\uC2A4\uD2B8 \uC815\uB82C\uC774 \uC758\uB3C4\uD55C \uB300\uB85C \uC67C\uCABD\uC73C\uB85C \uC0C1\uC18D\uB418\uB294 \uAC83\uC744 \uBCF4\uC5EC\uC90D\uB2C8\uB2E4.",-1),x=a("p",null,[a("img",{src:r,alt:"\uC774\uBBF8\uC9C0"})],-1),T=a("p",null,"\uD558\uC9C0\uB9CC \uB54C\uB85C\uB294 \uD45C\uAC00 \uC774\uB807\uAC8C \uBCF4\uC77C \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4:",-1),w=a("p",null,[a("img",{src:u,alt:"\uC774\uBBF8\uC9C0"})],-1),D=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),S=a("p",null,"\uC774\uB7EC\uD55C \uC6D0\uCE58 \uC54A\uB294 \uB3D9\uC791\uC774 \uBC1C\uC0DD\uD558\uB294 \uC774\uC720\uB294 DataTables\uAC00 \uC5F4\uC758 \uBAA8\uB4E0 \uB370\uC774\uD130\uB97C \uC22B\uC790 \uAC12\uC73C\uB85C \uD574\uC11D\uD560 \uC218 \uC788\uAE30 \uB54C\uBB38\uC774\uBA70, \uC22B\uC790 \uAC12\uC740 \uAE30\uBCF8\uC801\uC73C\uB85C \uC624\uB978\uCABD\uC73C\uB85C \uC815\uB82C\uB429\uB2C8\uB2E4. CSS\uB97C \uC870\uC0AC\uD558\uBA74 \uD589\uC774 \uB2E4\uC74C CSS\uB97C \uC0C1\uC18D\uD558\uACE0 \uC788\uC74C\uC744 \uC54C \uC218 \uC788\uC2B5\uB2C8\uB2E4:",-1),C=a("p",null,[a("img",{src:b,alt:"FixDataTablesbugdatainconsistentlyalignedright_4"})],-1),j=a("h1",{id:"\u1112\u1162\u1100\u1167\u11AF-\u1107\u1161\u11BC\u1107\u1165\u11B8",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u1112\u1162\u1100\u1167\u11AF-\u1107\u1161\u11BC\u1107\u1165\u11B8","aria-hidden":"true"},"#"),s(" \uD574\uACB0 \uBC29\uBC95")],-1),q=a("p",null,"DataTables\uAC00 \uC22B\uC790\uB85C \uAC04\uC8FC\uD558\uB294 \uC5F4\uC5D0 \uB300\uD574 \uC67C\uCABD \uD14D\uC2A4\uD2B8 \uC815\uB82C\uC744 \uC801\uC6A9\uD558\uB824\uBA74, \uC790\uCCB4 \uC2A4\uD0C0\uC77C\uC2DC\uD2B8\uC5D0\uC11C CSS\uB97C \uBC18\uC804\uC2DC\uD0A4\uBA74 \uB429\uB2C8\uB2E4. DataTables \uC2A4\uD0C0\uC77C\uC2DC\uD2B8 \uC774\uD6C4\uC5D0 \uC774 \uC2A4\uD0C0\uC77C\uC2DC\uD2B8\uAC00 \uB85C\uB4DC\uB418\uB3C4\uB85D \uD574\uC57C \uD569\uB2C8\uB2E4.",-1),F=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),B=l(`<div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;table.dataTable th.dt-type-numeric,table.dataTable th.dt-type-date,table.dataTable td.dt-type-numeric,table.dataTable td.dt-type-date&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;text-align&quot;</span><span class="token operator">:</span> <span class="token string">&quot;left&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function N(V,E){return t(),p("div",null,[g,(t(),n(o("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),h,m,k,v,y,(t(),n(o("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),f,x,T,w,D,(t(),n(o("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),S,C,j,q,F,(t(),n(o("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),B])}var A=i(_,[["render",N],["__file","index.html.vue"]]);export{A as default};
