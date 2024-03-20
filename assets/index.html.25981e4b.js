import{_ as c,o as n,c as o,a,r as e,w as p,b as t,e as s,d as i}from"./app.49a348e1.js";var u="/assets/1.8429f073.png";const l={},d=s("h1",{id:"react-hook-useeffect-has-missing-dependencies-\u1112\u1162\u1100\u1167\u11AF-\u1107\u1161\u11BC\u1107\u1165\u11B8",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#react-hook-useeffect-has-missing-dependencies-\u1112\u1162\u1100\u1167\u11AF-\u1107\u1161\u11BC\u1107\u1165\u11B8","aria-hidden":"true"},"#"),t(" React Hook useEffect has missing dependencies \uD574\uACB0 \uBC29\uBC95")],-1),r=s("div",{class:"custom-container tip"},[s("p",{class:"custom-container-title"},"\uBAA9\uD45C"),s("p",null,"React \uC0AC\uC6A9\uC2DC \uBB34\uC870\uAC74 \uB9CC\uB098\uAC8C \uB418\uB294 Warning\uC778 react-hooks/exhaustive-deps warning \uD574\uACB0 \uBC29\uBC95\uC5D0 \uB300\uD574\uC11C \uC815\uB9AC\uD569\uB2C8\uB2E4.")],-1),k=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),g=i('<p><img src="'+u+`" alt=""></p><p>react-hooks/exhaustive-deps\uB294 React \uD6C5\uC744 \uC0AC\uC6A9\uD560 \uB54C \uADF8 \uC911\uC5D0\uC11C\uB3C4 useEffect\uB97C \uC0AC\uC6A9\uD560 \uB54C \uC8FC\uB85C \uBC1C\uC0DD\uD558\uB294\uB370\uC694.</p><p>\uBCF4\uD1B5 \uC774\uB7F0 \uC2DD\uC73C\uB85C \uACBD\uACE0 \uBA54\uC138\uC9C0\uB97C \uB744\uC6CC\uC90D\uB2C8\uB2E4.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>React Hook useEffect has missing dependencies: <span class="token string">&#39;&#39;</span> and <span class="token string">&#39;&#39;</span><span class="token builtin class-name">.</span> Either include them or remove the dependency array.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u1112\u1162\u1100\u1167\u11AF-\u1107\u1161\u11BC\u1107\u1165\u11B8" tabindex="-1"><a class="header-anchor" href="#\u1112\u1162\u1100\u1167\u11AF-\u1107\u1161\u11BC\u1107\u1165\u11B8" aria-hidden="true">#</a> \uD574\uACB0 \uBC29\uBC95</h2><p>react-hooks/exhaustive-deps \uD574\uACB0 \uBC29\uBC95\uC740 useEffect\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 state\uB97C useEffect\uC758 \uBC30\uC5F4 []\uC5D0 \uB123\uC5B4\uC8FC\uBA74 \uB429\uB2C8\uB2E4.</p><p>\uC608\uB97C \uB4E4\uC5B4 \uC544\uB798\uC640 \uAC19\uC774 \uC791\uC5C5\uC774 \uB418\uC5B4\uC788\uC744 \uB54C\uB294 \uACBD\uACE0\uBA54\uC138\uC9C0\uAC00 \uB728\uB294\uB370\uC694.</p><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">getThumbnailBg</span><span class="token punctuation">(</span>backgroundKeyword<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>useEffect\uC5D0\uC11C \uC0AC\uC6A9\uC911\uC778 State\uC778 <code>backgroundKeyword</code> \uB97C <code>[]</code>\uC5D0 \uB123\uC5B4\uC8FC\uAC8C \uB418\uBA74 \uACBD\uACE0\uB97C \uBC1C\uC0DD\uC2DC\uD0A4\uC9C0 \uC54A\uB294 \uAC83\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">getThumbnailBg</span><span class="token punctuation">(</span>backgroundKeyword<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>backgroundKeyword<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC815\uB9AC\uD574\uBCF4\uBA74, useEffect\uB97C \uC0AC\uC6A9\uD560 \uB54C\uB294 useEffect\uB0B4\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 State\uB97C []\uC5D0 \uB123\uC5B4\uC8FC\uBA74 \uB429\uB2C8\uB2E4. \uC774\uB7F0 \uACBD\uACE0\uAC00 \uBC1C\uC0DD\uD558\uB294 \uC774\uC720\uB294 useEffect\uB0B4\uBD80\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 State\uC758 \uBCC0\uACBD\uC774 \uAC10\uC9C0\uB418\uC5C8\uC744 \uB54C\uB97C \uB300\uBE44\uD558\uAE30 \uC704\uD568\uC774\uB77C\uACE0 \uC0DD\uAC01\uD558\uC2DC\uBA74 \uB420 \uAC83 \uAC19\uC2B5\uB2C8\uB2E4.</p>`,11);function h(f,m){return n(),o("div",null,[d,r,(n(),a(e("script"),{src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4877378276818686",crossorigin:"anonymous",async:""})),k,(n(),a(e("script"),null,{default:p(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),g])}var b=c(l,[["render",h],["__file","index.html.vue"]]);export{b as default};