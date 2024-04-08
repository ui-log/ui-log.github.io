import{_ as i}from"./app.a99075bb.js";import{l as a,m as p,E as t,G as e,p as n,Y as o,C as s,K as l}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const c={},r=s("h1",{id:"nextjs-14-devindicators\u1105\u1161\u11AB",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#nextjs-14-devindicators\u1105\u1161\u11AB","aria-hidden":"true"},"#"),n(" Nextjs 14 devIndicators\uB780?")],-1),d=s("p",null,"\uCF54\uB4DC\uB97C \uD3B8\uC9D1\uD558\uB294 \uB3D9\uC548 Next.js\uAC00 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uCEF4\uD30C\uC77C\uD558\uBA74 \uD398\uC774\uC9C0 \uC624\uB978\uCABD \uD558\uB2E8\uC5D0 \uCEF4\uD30C\uC77C \uC9C0\uC2DC\uAE30\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4.",-1),u=s("blockquote",null,[s("p",null,"\uC54C\uC544\uB450\uBA74 \uC88B\uC544\uC694: \uC774 \uC9C0\uC2DC\uAE30\uB294 \uAC1C\uBC1C \uBAA8\uB4DC\uC5D0\uB9CC \uC874\uC7AC\uD558\uBA70 \uD504\uB85C\uB355\uC158 \uBAA8\uB4DC\uC5D0\uC11C \uC571\uC744 \uBE4C\uB4DC\uD558\uACE0 \uC2E4\uD589\uD560 \uB54C \uB098\uD0C0\uB098\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")],-1),v=s("p",null,"\uC77C\uBD80 \uACBD\uC6B0\uC5D0\uB294 \uC774 \uC9C0\uC2DC\uAE30\uAC00 \uD398\uC774\uC9C0\uC5D0\uC11C \uC798\uBABB\uB41C \uC704\uCE58\uC5D0 \uC788\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4, \uCC44\uD305 \uB7F0\uCC98\uC640 \uCDA9\uB3CC\uD560 \uB54C\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uC704\uCE58\uB97C \uBCC0\uACBD\uD558\uB824\uBA74 next.config.js\uC744 \uC5F4\uACE0 devIndicators \uAC1D\uCCB4 \uB0B4\uC758 buildActivityPosition\uC744 bottom-right(\uAE30\uBCF8\uAC12), bottom-left, top-right \uB610\uB294 top-left\uB85C \uC124\uC815\uD558\uC138\uC694:",-1),m=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),b=l(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">devIndicators</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">buildActivityPosition</span><span class="token operator">:</span> <span class="token string">&quot;bottom-right&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uAC00\uB054 \uC774 \uD45C\uC2DC\uAE30\uAC00 \uC720\uC6A9\uD558\uC9C0 \uC54A\uC744 \uC218\uB3C4 \uC788\uC5B4\uC694. \uADF8\uB7F4 \uB54C\uC5D0\uB294 next.config.js \uD30C\uC77C\uC744 \uC5F4\uACE0 devIndicators \uAC1D\uCCB4 \uB0B4\uC758 buildActivity \uAD6C\uC131\uC744 \uBE44\uD65C\uC131\uD654\uD558\uBA74 \uB429\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">devIndicators</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">buildActivity</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,4);function k(g,_){return a(),p("div",null,[r,d,u,v,m,(a(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b,(a(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1}))])}var I=i(c,[["render",k],["__file","index.html.vue"]]);export{I as default};