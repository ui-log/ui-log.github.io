import{_ as l}from"./app.d68f74da.js";import{l as a,m as c,E as t,G as e,p as n,Y as o,C as s,K as p}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const i={},u=s("p",null,"React \uC571\uC744 \uAC1C\uBC1C\uD560 \uB54C API\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uAC00\uC838\uC640\uC57C \uD560 \uB54C\uAC00 \uC788\uC2B5\uB2C8\uB2E4.",-1),d=s("p",null,"\uC774\uB97C \uC218\uD589\uD558\uB294 \uB450 \uAC00\uC9C0 \uC8FC\uC694 \uBC29\uBC95\uC774 \uC788\uC2B5\uB2C8\uB2E4 \u2014 useEffect \uD6C5 \uB610\uB294 React Query\uB97C \uC0AC\uC6A9\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4.",-1),r=s("p",null,"\uD558\uC9C0\uB9CC \uAC01\uAC01 \uC5B8\uC81C \uC0AC\uC6A9\uD574\uC57C \uD560\uAE4C\uC694?",-1),k=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),v=s("p",null,"\uC774 \uD3EC\uC2A4\uD2B8\uC5D0\uC11C\uB294 \uB370\uC774\uD130 \uAC00\uC838\uC624\uAE30\uC5D0 \uB300\uD55C React Query\uC640 useEffect\uB97C \uBE44\uAD50\uD558\uACE0 \uAC01\uAC01 \uC5B8\uC81C \uC0AC\uC6A9\uD574\uC57C \uD558\uB294\uC9C0\uC5D0 \uB300\uD55C \uAD8C\uC7A5 \uC0AC\uD56D\uC744 \uC81C\uC2DC\uD558\uACA0\uC2B5\uB2C8\uB2E4.",-1),y=s("h2",{id:"\u1103\u1166\u110B\u1175\u1110\u1165-\u1100\u1161\u110C\u1167\u110B\u1169\u1100\u1175\u1105\u1173\u11AF-\u110B\u1171\u1112\u1161\u11AB-useeffect-hook",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u1103\u1166\u110B\u1175\u1110\u1165-\u1100\u1161\u110C\u1167\u110B\u1169\u1100\u1175\u1105\u1173\u11AF-\u110B\u1171\u1112\u1161\u11AB-useeffect-hook","aria-hidden":"true"},"#"),n(" \uB370\uC774\uD130 \uAC00\uC838\uC624\uAE30\uB97C \uC704\uD55C useEffect Hook")],-1),f=s("p",null,"\uC624\uB7AB\uB3D9\uC548 React\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uAC00\uC838\uC624\uB294 \uBC29\uBC95\uC73C\uB85C \uC0AC\uC6A9\uB41C \uAC83\uC774 \uBC14\uB85C useEffect \uD6C5\uC785\uB2C8\uB2E4.",-1),_=s("p",null,"\uB2E4\uC74C\uC740 \uAC04\uB2E8\uD55C \uC608\uC2DC\uC785\uB2C8\uB2E4:",-1),b=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),h=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>data<span class="token punctuation">,</span> setData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;/api/data&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> json <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">setData</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \uBE44\uC5B4 \uC788\uB294 \uBC30\uC5F4\uC740 \uD55C \uBC88\uB9CC \uC2E4\uD589</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uAE30\uBCF8\uC801\uC778 \uCF00\uC774\uC2A4\uC5D0 \uB300\uD574 \uC798 \uB3D9\uC791\uD569\uB2C8\uB2E4. \uB9C8\uC6B4\uD2B8 \uC2DC \uB370\uC774\uD130\uB97C \uAC00\uC838\uC640 \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C1\uD0DC\uC5D0 \uC800\uC7A5\uD569\uB2C8\uB2E4.</p><p>\uADF8\uB7EC\uB098 useEffect\uC5D0\uB294 \uBA87 \uAC00\uC9C0 \uB2E8\uC810\uC774 \uC788\uC2B5\uB2C8\uB2E4:</p><ul><li>\uCE90\uC2F1 X \u2014 \uBAA8\uB4E0 \uB80C\uB354\uB9C1\uB9C8\uB2E4 \uB2E4\uC2DC \uAC00\uC838\uC634</li><li>\uB0B4\uC7A5\uB41C \uC5D0\uB7EC \uCC98\uB9AC X</li><li>\uB85C\uB529 \uC0C1\uD0DC\uC640 \uC5D0\uB7EC \uC0C1\uD0DC\uB97C \uC218\uB3D9\uC73C\uB85C \uCD94\uC801\uD574\uC57C \uD568</li></ul><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),g=s("p",null,"\uC5EC\uAE30\uAC00 React Query\uAC00 \uB4F1\uC7A5\uD558\uB294 \uACF3\uC774\uC5D0\uC694\u2026",-1),m=s("h2",{id:"\u1109\u1173\u1106\u1161\u1110\u1173-\u1103\u1166\u110B\u1175\u1110\u1165-\u1100\u1161\u110C\u1167\u110B\u1169\u1100\u1175\u1105\u1173\u11AF-\u110B\u1171\u1112\u1161\u11AB-react-query",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u1109\u1173\u1106\u1161\u1110\u1173-\u1103\u1166\u110B\u1175\u1110\u1165-\u1100\u1161\u110C\u1167\u110B\u1169\u1100\u1175\u1105\u1173\u11AF-\u110B\u1171\u1112\u1161\u11AB-react-query","aria-hidden":"true"},"#"),n(" \uC2A4\uB9C8\uD2B8 \uB370\uC774\uD130 \uAC00\uC838\uC624\uAE30\uB97C \uC704\uD55C React Query")],-1),w=s("p",null,"React Query\uB294 \uB370\uC774\uD130 \uAC00\uC838\uC624\uAE30, \uCE90\uC2F1, \uB3D9\uAE30\uD654 \uBC0F \uC11C\uBC84 \uC0C1\uD0DC \uC5C5\uB370\uC774\uD2B8\uC640 \uAC19\uC740 \uAE4C\uB2E4\uB85C\uC6B4 \uBD80\uBD84\uC744 \uCC98\uB9AC\uD558\uB294 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC5D0\uC694.",-1),R=s("p",null,"\uADF8\uAC83\uC740 raw useEffect \uC811\uADFC \uBC29\uC2DD\uBCF4\uB2E4 \uC5EC\uB7EC \uAC00\uC9C0\uBA74\uC5D0\uC11C \uAC1C\uC120\uB418\uC5B4 \uC788\uC5B4\uC694:",-1),Q=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),x=p(`<ul><li>\uCE90\uC2F1 - \uCFFC\uB9AC \uACB0\uACFC\uAC00 \uBCC0\uACBD\uB418\uC9C0 \uC54A\uB294 \uD55C \uCE90\uC2DC\uB418\uACE0 \uC7AC\uC0AC\uC6A9\uB428</li><li>\uC911\uBCF5 \uC81C\uAC70 - \uC911\uBCF5\uB41C \uC694\uCCAD\uC774 \uC5C6\uC74C</li><li>\uC624\uB958 \uCC98\uB9AC - \uC624\uB958\uAC00 \uC7A1\uD788\uACE0 \uACF5\uC190\uD558\uAC8C \uCC98\uB9AC\uB428</li><li>\uB85C\uB529 \uC0C1\uD0DC - \uB370\uC774\uD130 \uAC00\uC838\uC62C \uB54C \uB0B4\uC7A5\uB41C \uB85C\uB529 \uC778\uB514\uCF00\uC774\uD130 \uD45C\uC2DC</li><li>\uB370\uC774\uD130\uAC00 \uBCC0\uACBD\uB420 \uB54C \uC790\uB3D9\uC73C\uB85C \uB2E4\uC2DC \uAC00\uC838\uC624\uAE30</li><li>SSR \uC9C0\uC6D0</li></ul><p>\uB2E4\uC74C\uC740 React Query \uC811\uADFC\uC758 \uC608\uC2DC\uC785\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useQuery <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-query&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> error<span class="token punctuation">,</span> isLoading <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useQuery</span><span class="token punctuation">(</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;/api/data&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isLoading<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&#39;\uB85C\uB529 \uC911...&#39;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&#39;\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4&#39;</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uD6E8\uC52C \uAE54\uB054\uD574 \uBCF4\uC774\uC8E0!</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),E=s("p",null,"React Query\uB294 \uCE90\uC2F1, \uB85C\uB529 \uC0C1\uD0DC, \uC5D0\uB7EC \uCC98\uB9AC \uB4F1\uC744 \uAE30\uBCF8\uC801\uC73C\uB85C \uCC98\uB9AC\uD574\uC918\uC694.",-1),j=s("h2",{id:"\u1100\u1161\u11A8\u1100\u1161\u11A8\u110B\u1173\u11AF-\u110B\u1165\u11AB\u110C\u1166-\u1109\u1161\u110B\u116D\u11BC\u1112\u1162\u110B\u1163-\u1112\u1161\u1102\u1161\u110B\u116D",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u1100\u1161\u11A8\u1100\u1161\u11A8\u110B\u1173\u11AF-\u110B\u1165\u11AB\u110C\u1166-\u1109\u1161\u110B\u116D\u11BC\u1112\u1162\u110B\u1163-\u1112\u1161\u1102\u1161\u110B\u116D","aria-hidden":"true"},"#"),n(" \uAC01\uAC01\uC744 \uC5B8\uC81C \uC0AC\uC6A9\uD574\uC57C \uD558\uB098\uC694?")],-1),C=s("p",null,"\uADF8\uB798\uC11C \uC5B8\uC81C \uAC01 \uBC29\uBC95\uC744 \uC0AC\uC6A9\uD574\uC57C \uD560\uAE4C\uC694?",-1),D=s("p",null,"\uC5EC\uAE30 \uC81C \uAC1C\uC778\uC801\uC778 \uC9C0\uCE68\uC774 \uC788\uC5B4\uC694:",-1),S=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),B=s("ul",null,[s("li",null,"\uD55C \uBC88\uB9CC \uB370\uC774\uD130\uAC00 \uD544\uC694\uD55C \uACBD\uC6B0\uB098 \uAC04\uB2E8\uD55C \uC791\uC5C5(\uC608: \uD3FC)\uC5D0\uB294 useEffect\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4."),s("li",null,"\uC5EC\uB7EC \uCEF4\uD3EC\uB10C\uD2B8 \uAC04\uC5D0 \uB370\uC774\uD130\uB97C \uC7AC\uC0AC\uC6A9\uD558\uAC70\uB098 \uC624\uB958 \uCC98\uB9AC\uAC00 \uBCF5\uC7A1\uD55C \uACBD\uC6B0\uC5D0\uB294 React Query\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4.")],-1),q=s("p",null,"React Query\uB97C \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uB294 \uC8FC\uB41C \uC774\uC720\uB294 \uAC04\uACB0\uD568\uACFC \uD575\uC2EC \uAE30\uB2A5 \uC9D1\uD569 \uC678\uC758 \uC0AC\uC6A9\uC790 \uC815\uC758 \uB3D9\uC791\uC774 \uD544\uC694\uD55C \uACBD\uC6B0\uC785\uB2C8\uB2E4.",-1),N=s("p",null,"\uD558\uC9C0\uB9CC \uB300\uBD80\uBD84\uC758 \uC2E4\uC81C \uC0C1\uD669\uC5D0\uC11C\uB294 \uD2B9\uD788 \uCEF4\uD3EC\uB10C\uD2B8 \uAC04 \uB370\uC774\uD130\uB97C \uACF5\uC720\uD558\uACE0 \uB2E4\uC2DC \uAC00\uC838\uC640\uC57C \uD560 \uB54C React Query\uB97C \uC0AC\uC6A9\uD558\uBA74 \uC2DC\uAC04\uACFC \uBA38\uB9AC \uC544\uD508 \uBB38\uC81C\uB97C \uD574\uACB0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),V=s("p",null,"\uB2E4\uC74C \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uD55C\uBC88 \uC2DC\uB3C4\uD574\uBCF4\uC138\uC694!",-1),L=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),M=s("p",null,"\uC774 \uAC1C\uC694\uAC00 React Query\uC640 useEffect\uAC00 \uAC00\uC7A5 \uC801\uD569\uD55C \uC2DC\uB098\uB9AC\uC624\uB97C \uC124\uBA85\uD558\uB294 \uB370 \uB3C4\uC6C0\uC774 \uB418\uAE30\uB97C \uBC14\uB78D\uB2C8\uB2E4.",-1),X=s("p",null,"\uB3C4\uC6C0\uC774 \uB418\uC5C8\uAE30\uB97C \uBC14\uB78D\uB2C8\uB2E4!",-1);function A(G,H){return a(),c("div",null,[u,d,r,k,(a(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),v,y,f,_,b,(a(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),h,(a(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),g,m,w,R,Q,(a(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),x,(a(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),E,j,C,D,S,(a(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),B,q,N,V,L,(a(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),M,X])}var F=l(i,[["render",A],["__file","index.html.vue"]]);export{F as default};
