import{_ as p}from"./app.3052dcfb.js";import{l as s,m as l,E as t,G as e,p as a,Y as o,C as n,K as c}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var i="/assets/DocumentingyourOwnComponent_0.2763c8cb.png",u="/assets/DocumentingyourOwnComponent_1.51de08f0.png";const r={},d=n("p",null,"\uC790\uC2E0\uB9CC\uC758 \uAD6C\uC131 \uC694\uC18C\uC5D0 \uB300\uD55C \uBB38\uC11C \uC791\uC131\uC740 \uD504\uB85C\uC81D\uD2B8 \uB0B4\uC5D0\uC11C \uBA85\uD655\uC131\uACFC \uC774\uD574\uB97C \uBCF4\uC7A5\uD558\uB294 \uB370 \uD544\uC218\uC801\uC785\uB2C8\uB2E4.",-1),k=n("p",null,"\uD568\uC218\uB098 \uAD6C\uC131 \uC694\uC18C \uC704\uB85C \uB9C8\uC6B0\uC2A4\uB97C \uC62C\uB9AC\uBA74 \uC720\uC6A9\uD55C \uC124\uBA85\uC774 \uD45C\uC2DC\uB418\uB294 \uAC83\uC744 \uC8FC\uBAA9\uD55C \uC801\uC774 \uC788\uB098\uC694? \uB9C8\uCE58 \uAC01 \uCF54\uB4DC \uC870\uAC01\uC774 \uBB34\uC5C7\uC744 \uD558\uB294\uC9C0\uC5D0 \uB300\uD55C \uC989\uAC01\uC801\uC778 \uD1B5\uCC30\uB825\uC744 \uC5BB\uB294 \uAC83\uACFC \uAC19\uC2B5\uB2C8\uB2E4, \uB9DE\uC8E0? \uC774\uB7EC\uD55C \uC124\uBA85\uC5D0\uB294 \uC804\uB2EC\uD560 \uC218 \uC788\uB294 \uB9E4\uAC1C\uBCC0\uC218 \uBC0F \uBC18\uD658 \uAC12\uC744 \uB098\uD0C0\uB0B4\uB294 \uC138\uBD80 \uC815\uBCF4\uAC00 \uC885\uC885 \uD3EC\uD568\uB429\uB2C8\uB2E4.",-1),m=n("p",null,[n("img",{src:i,alt:"image"})],-1),v=n("p",null,"\uAC8C\uB2E4\uAC00, \uD5A5\uD6C4 \uC5C5\uB370\uC774\uD2B8\uB098 \uC9C0\uC6D0\uC744 \uBC1B\uC9C0 \uBABB\uD560 \uAC83\uC73C\uB85C \uC2E0\uD638\uB97C \uC8FC\uB294 \uC0AC\uC6A9 \uC911\uC9C0\uB41C \uAE30\uB2A5\uC5D0 \uB300\uD55C \uACBD\uACE0\uB97C \uB9CC\uB0A0 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uADF8\uB807\uB2E4\uBA74, \uC790\uC2E0\uB9CC\uC758 \uD568\uC218\uB098 \uD328\uD0A4\uC9C0\uC5D0 \uB300\uD55C \uC774\uB7EC\uD55C \uC720\uC775\uD55C \uBB38\uC11C\uB97C \uC5B4\uB5BB\uAC8C \uC791\uC131\uD560 \uC218 \uC788\uC744\uAE4C\uC694? \uADF8\uAC83\uC774 JSDoc\uC774 \uB4F1\uC7A5\uD558\uC5EC \uB3C4\uC6C0\uC774 \uB418\uB294 \uBD80\uBD84\uC785\uB2C8\uB2E4.",-1),g=n("p",null,[n("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),b=n("p",null,[n("img",{src:u,alt:"DocumentingyourOwnComponent_1"})],-1),_=n("h1",{id:"\u110C\u1161\u11BC\u110C\u1165\u11B7",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u110C\u1161\u11BC\u110C\u1165\u11B7","aria-hidden":"true"},"#"),a(" \uC7A5\uC810")],-1),h=n("ul",null,[n("li",null,"\uC77C\uAD00\uC131: \uADE0\uC77C\uD55C \uBB38\uC11C\uD654\uB97C \uCD09\uC9C4\uD569\uB2C8\uB2E4."),n("li",null,"\uC720\uC9C0\uBCF4\uC218: \uCF54\uB4DC\uBCA0\uC774\uC2A4 \uC720\uC9C0\uBCF4\uC218\uB97C \uC6A9\uC774\uD558\uAC8C \uD569\uB2C8\uB2E4."),n("li",null,"\uD611\uC5C5: \uB354 \uBA85\uD655\uD55C \uCF54\uB4DC \uD1B5\uCC30\uB825\uC744 \uC81C\uACF5\uD558\uC5EC \uD611\uC5C5\uC744 \uAC15\uD654\uD569\uB2C8\uB2E4.")],-1),y=n("p",null,"\uC774\uC81C \uD2B9\uC815 \uC608\uC2DC\uC5D0 \uCD08\uC810\uC744 \uB9DE\uCDB0\uBCF4\uACA0\uC2B5\uB2C8\uB2E4: Button \uCEF4\uD3EC\uB10C\uD2B8. \uC0AC\uC6A9\uB41C JSDoc \uC8FC\uC11D\uACFC \uC0DD\uC131\uB41C \uBB38\uC11C\uC758 \uC138\uBD80 \uC0AC\uD56D\uC744 \uC0B4\uD3B4\uBD05\uC2DC\uB2E4.",-1),w=n("p",null,[n("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),f=c(`<h2 id="\u1107\u1165\u1110\u1173\u11AB-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173" tabindex="-1"><a class="header-anchor" href="#\u1107\u1165\u1110\u1173\u11AB-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173" aria-hidden="true">#</a> \uBC84\uD2BC \uCEF4\uD3EC\uB10C\uD2B8</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;./Button.css&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * \uAC04\uB2E8\uD55C \uBC84\uD2BC \uCEF4\uD3EC\uB10C\uD2B8\uC785\uB2C8\uB2E4.
 *
 * <span class="token keyword">@component</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">props</span> - \uCEF4\uD3EC\uB10C\uD2B8\uB294 text\uC640 onClick\uC744 props\uB85C \uBC1B\uC2B5\uB2C8\uB2E4.
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">props<span class="token punctuation">.</span>text</span> - \uBC84\uD2BC\uC5D0 \uD45C\uC2DC\uD560 \uD14D\uC2A4\uD2B8
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">function</span><span class="token punctuation">}</span></span> <span class="token parameter">props<span class="token punctuation">.</span>onClick</span> - \uD074\uB9AD \uC774\uBCA4\uD2B8 \uD578\uB4E4\uB7EC
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>JSX<span class="token punctuation">.</span>Element<span class="token punctuation">}</span></span> \uB80C\uB354\uB41C \uBC84\uD2BC \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uBC18\uD658\uD569\uB2C8\uB2E4.
 *
 * <span class="token keyword">@example</span>
 <span class="token example">* <span class="token code language-javascript"><span class="token comment">// &quot;Click Me&quot; \uD14D\uC2A4\uD2B8\uAC00 \uC788\uB294 \uBC84\uD2BC \uB80C\uB354\uB9C1</span></span>
 * <span class="token code language-javascript"><span class="token operator">&lt;</span>Button text<span class="token operator">=</span><span class="token string">&quot;Click Me&quot;</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Button clicked!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">Button</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> text<span class="token punctuation">,</span> onClick <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>button className<span class="token operator">=</span><span class="token string">&#39;myButton&#39;</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span><span class="token operator">&gt;</span>
      <span class="token punctuation">{</span>text<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> Button<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>@component: \uC774 \uD568\uC218\uAC00 React \uCEF4\uD3EC\uB10C\uD2B8\uC784\uC744 \uB098\uD0C0\uB0C5\uB2C8\uB2E4.</li><li>@param: \uD568\uC218\uAC00 \uBC1B\uB294 \uB9E4\uAC1C\uBCC0\uC218\uB97C \uC124\uBA85\uD569\uB2C8\uB2E4. \uC774 \uD0DC\uADF8\uB294 \uAC01 prop\uC744 \uB530\uB85C \uBB38\uC11C\uD654\uD558\uB294 \uB370 \uC5EC\uB7EC \uBC88 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.</li><li>@returns: \uD568\uC218\uC758 \uCD9C\uB825\uC744 \uC124\uBA85\uD558\uB294\uB370, \uC774 \uACBD\uC6B0 \uB80C\uB354\uB41C JSX \uC5D8\uB9AC\uBA3C\uD2B8\uAC00 \uB429\uB2C8\uB2E4.</li><li>@example: \uCF54\uB4DC\uC5D0\uC11C Button \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uAD6C\uD604\uD558\uB294 \uBC29\uBC95\uC744 \uBCF4\uC5EC\uC8FC\uB294 \uC0AC\uC6A9 \uC608\uC2DC\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4.</li></ul><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),x=n("p",null,"JSDoc\uC744 \uB3C4\uC785\uD558\uC5EC \uCF54\uB4DC \uAD6C\uC870\uB97C \uAC15\uD654\uD558\uACE0 \uCF54\uB4DC\uBCA0\uC774\uC2A4\uB97C \uB354 \uD6A8\uC728\uC801\uC73C\uB85C \uAD00\uB9AC\uD558\uC138\uC694. JSDoc\uC744 \uC0AC\uC6A9\uD558\uBA74 \uD504\uB85C\uC81D\uD2B8\uB97C \uC720\uC9C0\uD558\uACE0 \uD611\uC5C5\uD558\uB294 \uAC83\uC774 \uB354 \uC26C\uC6CC\uC9D1\uB2C8\uB2E4. \uB3D9\uC2DC\uC5D0 \uBA85\uD655\uD558\uACE0 \uAC04\uACB0\uD55C \uBB38\uC11C\uD654\uB97C \uBCF4\uC7A5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),C=n("p",null,"LinkedIn\uC5D0\uC11C \uACC4\uC18D\uD574\uC11C \uC18C\uC2DD\uC744 \uBC1B\uC544\uBCF4\uC138\uC694!",-1);function B(j,D){return s(),l("div",null,[d,k,m,v,g,(s(),t(o("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b,_,h,y,w,(s(),t(o("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),f,(s(),t(o("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),x,C])}var V=p(r,[["render",B],["__file","index.html.vue"]]);export{V as default};
