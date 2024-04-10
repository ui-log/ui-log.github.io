import{_ as i}from"./app.63e06a35.js";import{l as n,m as p,E as t,G as e,p as a,Y as o,K as l,C as s}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const c={},d=l(`<h1 id="nextjs-14\u110B\u1166\u1109\u1165-user-agent-\u110B\u1161\u11AF\u110B\u1161\u1102\u1162\u1102\u1173\u11AB-\u1107\u1161\u11BC\u1107\u1165\u11B8" tabindex="-1"><a class="header-anchor" href="#nextjs-14\u110B\u1166\u1109\u1165-user-agent-\u110B\u1161\u11AF\u110B\u1161\u1102\u1162\u1102\u1173\u11AB-\u1107\u1161\u11BC\u1107\u1165\u11B8" aria-hidden="true">#</a> Nextjs 14\uC5D0\uC11C user agent \uC54C\uC544\uB0B4\uB294 \uBC29\uBC95</h1><p>\uC0AC\uC6A9\uC790 \uC5D0\uC774\uC804\uD2B8 \uB3C4\uC6B0\uBBF8\uB294 Web Request API\uB97C \uD655\uC7A5\uD558\uC5EC \uC694\uCCAD\uC758 \uC0AC\uC6A9\uC790 \uC5D0\uC774\uC804\uD2B8 \uAC1D\uCCB4\uC640 \uC0C1\uD638 \uC791\uC6A9\uD558\uAE30 \uC704\uD55C \uCD94\uAC00 \uC18D\uC131 \uBC0F \uBA54\uC11C\uB4DC\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextRequest<span class="token punctuation">,</span> NextResponse<span class="token punctuation">,</span> userAgent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;next/server&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">middleware</span><span class="token punctuation">(</span>request<span class="token operator">:</span> NextRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> url <span class="token operator">=</span> request<span class="token punctuation">.</span>nextUrl<span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> device <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">userAgent</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> viewport <span class="token operator">=</span> device<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&quot;mobile&quot;</span> <span class="token operator">?</span> <span class="token string">&quot;mobile&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;desktop&quot;</span><span class="token punctuation">;</span>
  url<span class="token punctuation">.</span>searchParams<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;viewport&quot;</span><span class="token punctuation">,</span> viewport<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">rewrite</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="isbot" tabindex="-1"><a class="header-anchor" href="#isbot" aria-hidden="true">#</a> isBot</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),u=s("p",null,"\uC54C\uB824\uC9C4 \uBD07\uC5D0\uC11C \uC694\uCCAD\uC774 \uC654\uB294\uC9C0\uB97C \uB098\uD0C0\uB0B4\uB294 \uBD80\uC6B8 \uAC12\uC785\uB2C8\uB2E4.",-1),r=s("h2",{id:"\u1107\u1173\u1105\u1161\u110B\u116E\u110C\u1165",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u1107\u1173\u1105\u1161\u110B\u116E\u110C\u1165","aria-hidden":"true"},"#"),a(" \uBE0C\uB77C\uC6B0\uC800")],-1),h=s("p",null,"\uC694\uCCAD\uC5D0 \uC0AC\uC6A9\uB41C \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uAD00\uD55C \uC815\uBCF4\uB97C \uD3EC\uD568\uD558\uB294 \uAC1D\uCCB4\uC785\uB2C8\uB2E4.",-1),k=s("ul",null,[s("li",null,"name: \uBE0C\uB77C\uC6B0\uC800\uC758 \uC774\uB984\uC744 \uB098\uD0C0\uB0B4\uB294 \uBB38\uC790\uC5F4 \uB610\uB294 \uC2DD\uBCC4\uD560 \uC218 \uC5C6\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC815\uC758\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."),s("li",null,"version: \uBE0C\uB77C\uC6B0\uC800\uC758 \uBC84\uC804\uC744 \uB098\uD0C0\uB0B4\uB294 \uBB38\uC790\uC5F4\uC774\uAC70\uB098 \uC815\uC758\uB418\uC9C0 \uC54A\uC740 \uACBD\uC6B0\uC785\uB2C8\uB2E4.")],-1),_=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),b=l('<h2 id="\u1103\u1175\u1107\u1161\u110B\u1175\u1109\u1173" tabindex="-1"><a class="header-anchor" href="#\u1103\u1175\u1107\u1161\u110B\u1175\u1109\u1173" aria-hidden="true">#</a> \uB514\uBC14\uC774\uC2A4</h2><p>\uC694\uCCAD\uC5D0 \uC0AC\uC6A9\uB41C \uAE30\uAE30\uC5D0 \uAD00\uD55C \uC815\uBCF4\uB97C \uD3EC\uD568\uD558\uB294 \uAC1D\uCCB4\uC785\uB2C8\uB2E4.</p><ul><li>model: \uAE30\uAE30 \uBAA8\uB378\uC744 \uB098\uD0C0\uB0B4\uB294 \uBB38\uC790\uC5F4 \uB610\uB294 \uC815\uC758\uB418\uC9C0 \uC54A\uC74C.</li><li>type: \uCF58\uC194, \uBAA8\uBC14\uC77C, \uD0DC\uBE14\uB9BF, \uC2A4\uB9C8\uD2B8 TV, \uC6E8\uC5B4\uB7EC\uBE14, \uC784\uBCA0\uB514\uB4DC \uB610\uB294 \uC815\uC758\uB418\uC9C0 \uC54A\uC740 \uAE30\uAE30 \uC720\uD615\uC744 \uB098\uD0C0\uB0B4\uB294 \uBB38\uC790\uC5F4.</li><li>vendor: \uAE30\uAE30\uC758 \uC81C\uC870\uC0AC\uB97C \uB098\uD0C0\uB0B4\uB294 \uBB38\uC790\uC5F4 \uB610\uB294 \uC815\uC758\uB418\uC9C0 \uC54A\uC74C.</li></ul><h2 id="\u110B\u1166\u11AB\u110C\u1175\u11AB" tabindex="-1"><a class="header-anchor" href="#\u110B\u1166\u11AB\u110C\u1175\u11AB" aria-hidden="true">#</a> \uC5D4\uC9C4</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),m=s("p",null,"\uBE0C\uB77C\uC6B0\uC800 \uC5D4\uC9C4\uC5D0 \uAD00\uD55C \uC815\uBCF4\uB97C \uB2F4\uACE0 \uC788\uB294 \uAC1D\uCCB4\uC785\uB2C8\uB2E4.",-1),g=s("ul",null,[s("li",null,"\uC774\uB984: \uC5D4\uC9C4\uC758 \uC774\uB984\uC744 \uB098\uD0C0\uB0B4\uB294 \uBB38\uC790\uC5F4\uC785\uB2C8\uB2E4. \uAC00\uB2A5\uD55C \uAC12\uC73C\uB85C\uB294 Amaya, Blink, EdgeHTML, Flow, Gecko, Goanna, iCab, KHTML, Links, Lynx, NetFront, NetSurf, Presto, Tasman, Trident, w3m, WebKit, \uB610\uB294 undefined\uAC00 \uC788\uC2B5\uB2C8\uB2E4."),s("li",null,"\uBC84\uC804: \uC5D4\uC9C4\uC758 \uBC84\uC804\uC744 \uB098\uD0C0\uB0B4\uB294 \uBB38\uC790\uC5F4\uC774\uAC70\uB098 undefined\uC785\uB2C8\uB2E4.")],-1),v=s("h2",{id:"\u110B\u116E\u11AB\u110B\u1167\u11BC-\u110E\u1166\u110C\u1166",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u110B\u116E\u11AB\u110B\u1167\u11BC-\u110E\u1166\u110C\u1166","aria-hidden":"true"},"#"),a(" \uC6B4\uC601 \uCCB4\uC81C")],-1),f=s("p",null,"\uC6B4\uC601 \uCCB4\uC81C\uC5D0 \uAD00\uD55C \uC815\uBCF4\uB97C \uB2F4\uACE0 \uC788\uB294 \uAC1D\uCCB4\uC785\uB2C8\uB2E4.",-1),y=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),w=s("ul",null,[s("li",null,"name: \uC6B4\uC601 \uCCB4\uC81C\uC758 \uC774\uB984\uC744 \uB098\uD0C0\uB0B4\uB294 \uBB38\uC790\uC5F4 \uB610\uB294 \uC815\uC758\uB418\uC9C0 \uC54A\uC740 \uAC12."),s("li",null,"version: \uC6B4\uC601 \uCCB4\uC81C\uC758 \uBC84\uC804\uC744 \uB098\uD0C0\uB0B4\uB294 \uBB38\uC790\uC5F4 \uB610\uB294 \uC815\uC758\uB418\uC9C0 \uC54A\uC740 \uAC12.")],-1),x=s("h2",{id:"cpu",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#cpu","aria-hidden":"true"},"#"),a(" cpu")],-1),q=s("p",null,"CPU \uC544\uD0A4\uD14D\uCC98\uC5D0 \uB300\uD55C \uC815\uBCF4\uB97C \uD3EC\uD568\uD558\uB294 \uAC1D\uCCB4\uC785\uB2C8\uB2E4.",-1),N=s("ul",null,[s("li",null,"architecture: CPU \uC544\uD0A4\uD14D\uCC98\uB97C \uB098\uD0C0\uB0B4\uB294 \uBB38\uC790\uC5F4. \uAC00\uB2A5\uD55C \uAC12\uC740 68k, amd64, arm, arm64, armhf, avr, ia32, ia64, irix, irix64, mips, mips64, pa-risc, ppc, sparc, sparc64 \uB610\uB294 \uC815\uC758\uB418\uC9C0 \uC54A\uC740 \uAC12\uC785\uB2C8\uB2E4.")],-1),B=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1);function C(T,P){return n(),p("div",null,[d,(n(),t(o("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),u,r,h,k,_,(n(),t(o("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b,(n(),t(o("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),m,g,v,f,y,(n(),t(o("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),w,x,q,N,B,(n(),t(o("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1}))])}var G=i(c,[["render",C],["__file","index.html.vue"]]);export{G as default};
