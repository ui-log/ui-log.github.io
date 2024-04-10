import{_ as i}from"./app.63e06a35.js";import{j as c,l as a,m as r,E as t,G as e,p as n,Y as o,C as s,z as l,K as u}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const d={},k=u(`<h1 id="getinitialprops" tabindex="-1"><a class="header-anchor" href="#getinitialprops" aria-hidden="true">#</a> getInitialProps</h1><blockquote><p>\uC88B\uC740 \uC815\uBCF4: getInitialProps\uB294 \uB808\uAC70\uC2DC API\uC785\uB2C8\uB2E4. \uB300\uC2E0 getStaticProps \uB610\uB294 getServerSideProps\uB97C \uC0AC\uC6A9\uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4.</p></blockquote><p>getInitialProps\uB294 \uD398\uC774\uC9C0\uC758 \uAE30\uBCF8 \uB0B4\uBCF4\uB0B8 React \uCEF4\uD3EC\uB10C\uD2B8\uC5D0 \uCD94\uAC00\uD560 \uC218 \uC788\uB294 \uBE44\uB3D9\uAE30 \uD568\uC218\uC785\uB2C8\uB2E4. \uC774 \uD568\uC218\uB294 \uC11C\uBC84 \uCE21\uC5D0\uC11C \uC2E4\uD589\uB418\uACE0 \uD398\uC774\uC9C0 \uC804\uD658\uC774 \uBC1C\uC0DD\uD560 \uB54C \uD074\uB77C\uC774\uC5B8\uD2B8 \uCE21\uC5D0\uC11C\uB3C4 \uB2E4\uC2DC \uC2E4\uD589\uB429\uB2C8\uB2E4. \uD568\uC218\uC758 \uACB0\uACFC\uB294 React \uCEF4\uD3EC\uB10C\uD2B8\uB85C props\uB85C \uC804\uB2EC\uB429\uB2C8\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextPageContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;next&quot;</span><span class="token punctuation">;</span>

Page<span class="token punctuation">.</span><span class="token function-variable function">getInitialProps</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token operator">:</span> NextPageContext<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&quot;https://api.github.com/repos/vercel/next.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> json <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> stars<span class="token operator">:</span> json<span class="token punctuation">.</span>stargazers_count <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span> stars <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> stars<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> stars<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),h=s("blockquote",null,[s("p",null,"\uC88B\uC544 \uC54C\uC544\uB46C\uC57C \uD560 \uC0AC\uD56D: getInitialProps\uC5D0\uC11C \uBC18\uD658\uB41C \uB370\uC774\uD130\uB294 \uC11C\uBC84 \uB80C\uB354\uB9C1 \uC2DC \uC9C1\uB82C\uD654\uB429\uB2C8\uB2E4. getInitialProps\uC5D0\uC11C \uBC18\uD658\uB41C \uAC1D\uCCB4\uAC00 \uC21C\uC218\uD55C \uAC1D\uCCB4\uC774\uACE0 Date, Map \uB610\uB294 Set\uC744 \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uB3C4\uB85D \uC8FC\uC758\uD558\uC138\uC694. \uCD08\uAE30 \uD398\uC774\uC9C0 \uB85C\uB4DC\uC5D0\uC11C\uB294 getInitialProps\uAC00 \uC11C\uBC84\uC5D0\uC11C\uB9CC \uC2E4\uD589\uB429\uB2C8\uB2E4. \uADF8\uB9AC\uACE0 \uB2E4\uB978 \uB77C\uC6B0\uD2B8\uB85C \uC774\uB3D9\uD560 \uB54C next/link \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC0AC\uC6A9\uD558\uAC70\uB098 next/router\uB97C \uC0AC\uC6A9\uD560 \uACBD\uC6B0 \uD074\uB77C\uC774\uC5B8\uD2B8\uC5D0\uC11C\uB3C4 getInitialProps\uAC00 \uC2E4\uD589\uB429\uB2C8\uB2E4. \uB9CC\uC57D getInitialProps\uAC00 \uC0AC\uC6A9\uB41C \uC0AC\uC6A9\uC790 \uC815\uC758 _app.js\uC5D0\uC11C getServerSideProps\uB97C \uC0AC\uC6A9\uD558\uB294 \uD398\uC774\uC9C0\uB85C \uC774\uB3D9\uD55C\uB2E4\uBA74 getInitialProps\uB3C4 \uC11C\uBC84\uC5D0\uC11C \uC2E4\uD589\uB429\uB2C8\uB2E4.")],-1),_=s("h2",{id:"\u110F\u1165\u11AB\u1110\u1166\u11A8\u1109\u1173\u1110\u1173-\u1100\u1162\u11A8\u110E\u1166",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u110F\u1165\u11AB\u1110\u1166\u11A8\u1109\u1173\u1110\u1173-\u1100\u1162\u11A8\u110E\u1166","aria-hidden":"true"},"#"),n(" \uCEE8\uD14D\uC2A4\uD2B8 \uAC1D\uCCB4")],-1),g=s("p",null,"getInitialProps\uB294 context\uB77C\uB294 \uD558\uB098\uC758 \uC778\uC218\uB97C \uBC1B\uC73C\uBA70 \uD574\uB2F9 \uAC1D\uCCB4\uB294 \uB2E4\uC74C \uC18D\uC131\uC744 \uAC00\uC9C0\uACE0 \uC788\uC2B5\uB2C8\uB2E4:",-1),m=s("li",null,"Name: Description",-1),b=s("li",null,"pathname: '/pages'\uC5D0\uC11C \uD398\uC774\uC9C0 \uACBD\uB85C\uC778 \uD604\uC7AC \uB8E8\uD2B8",-1),v=s("li",null,"query: URL\uC758 \uCFFC\uB9AC \uBB38\uC790\uC5F4\uC744 \uAC1D\uCCB4\uB85C \uAD6C\uBB38 \uBD84\uC11D\uD55C \uAC83",-1),f=s("li",null,"asPath: \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uD45C\uC2DC\uB418\uB294 \uC2E4\uC81C \uACBD\uB85C(\uCFFC\uB9AC \uD3EC\uD568)\uC758 \uBB38\uC790\uC5F4",-1),y={href:"https://nodejs.org/api/http.html#http_class_http_incomingmessage",target:"_blank",rel:"noopener noreferrer"},P={href:"https://nodejs.org/api/http.html#http_class_http_serverresponse",target:"_blank",rel:"noopener noreferrer"},w=s("li",null,"err: \uB80C\uB354\uB9C1 \uC911\uC5D0 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0 \uC624\uB958 \uAC1D\uCCB4",-1),x=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),I=s("h2",{id:"\u110C\u116E\u110B\u1174-\u1109\u1161\u1112\u1161\u11BC",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u110C\u116E\u110B\u1174-\u1109\u1161\u1112\u1161\u11BC","aria-hidden":"true"},"#"),n(" \uC8FC\uC758 \uC0AC\uD56D")],-1),T=s("ul",null,[s("li",null,"getInitialProps\uB294 \uD398\uC774\uC9C0 \uB610\uB294 \uCD5C\uC0C1\uC704 \uD30C\uC77C\uC5D0\uC11C\uB9CC \uC0AC\uC6A9\uD560 \uC218 \uC788\uC73C\uBA70 \uC911\uCCA9\uB41C \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C\uB294 \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uCEF4\uD3EC\uB10C\uD2B8 \uC218\uC900\uC5D0\uC11C \uC911\uCCA9\uB41C \uB370\uC774\uD130\uB97C \uAC00\uC838\uC624\uB824\uBA74 App Router\uB97C \uD0D0\uC0C9\uD574\uBCF4\uC138\uC694."),s("li",null,"\uB77C\uC6B0\uD2B8\uAC00 \uC815\uC801\uC778\uC9C0 \uB3D9\uC801\uC778\uC9C0\uC5D0 \uAD00\uACC4\uC5C6\uC774 getInitialProps\uC5D0\uC11C \uBC18\uD658\uB41C \uB370\uC774\uD130\uB294 \uD074\uB77C\uC774\uC5B8\uD2B8 \uCE21\uC5D0\uC11C \uCD08\uAE30 HTML\uC5D0\uC11C \uAC80\uC0AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB294 \uD398\uC774\uC9C0\uAC00 \uC62C\uBC14\uB974\uAC8C \uC801\uC6A9\uB418\uB3C4\uB85D \uD558\uB294 \uAC83\uC785\uB2C8\uB2E4. props\uC5D0 \uD074\uB77C\uC774\uC5B8\uD2B8\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC5B4\uC57C \uD558\uB294 \uBBFC\uAC10\uD55C \uC815\uBCF4\uB97C \uC804\uB2EC\uD558\uC9C0 \uC54A\uB3C4\uB85D \uC8FC\uC758\uD558\uC2ED\uC2DC\uC624.")],-1),q=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1);function j(N,S){const p=c("ExternalLinkIcon");return a(),r("div",null,[k,(a(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),h,_,g,s("ul",null,[m,b,v,f,s("li",null,[n("req: HTTP \uC694\uCCAD \uAC1D\uCCB4(\uC11C\uBC84 \uC804\uC6A9)"),s("a",y,[n("HTTP \uC694\uCCAD \uAC1D\uCCB4"),l(p)])]),s("li",null,[n("res: HTTP \uC751\uB2F5 \uAC1D\uCCB4(\uC11C\uBC84 \uC804\uC6A9)"),s("a",P,[n("HTTP \uC751\uB2F5 \uAC1D\uCCB4"),l(p)])]),w]),x,(a(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),I,T,q,(a(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1}))])}var V=i(d,[["render",j],["__file","index.html.vue"]]);export{V as default};
