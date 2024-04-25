import{_ as p}from"./app.3052dcfb.js";import{l as s,m as c,E as t,G as e,p as n,Y as o,C as a,K as l}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var r="/assets/WhatistheSpreadOperatorInReactJS_0.f2c5638f.png";const i={},d=a("img",{src:r},null,-1),u=a("p",null,"\uC774 \uBE14\uB85C\uADF8 \uD3EC\uC2A4\uD2B8\uC5D0\uC11C\uB294 React JS\uC5D0\uC11C Spread \uC5F0\uC0B0\uC790\uAC00 \uBB34\uC5C7\uC778\uC9C0 \uC54C\uC544\uBCF4\uACE0 React JS\uC640 \uD568\uAED8 \uC791\uC5C5\uD560 \uB54C \uC5B4\uB5A4 \uC911\uC694\uD55C \uC5ED\uD560\uC744 \uD558\uB294\uC9C0 \uBC30\uC6B8 \uAC83\uC785\uB2C8\uB2E4.",-1),m=a("h1",{id:"\u1106\u1169\u11A8\u1111\u116D",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u1106\u1169\u11A8\u1111\u116D","aria-hidden":"true"},"#"),n(" \uBAA9\uD45C")],-1),_=a("p",null,"\uC8FC\uC694 \uC791\uC5C5\uC740 \uBCF5\uC0AC, \uBCD1\uD569, props \uC804\uB2EC, \uD568\uC218 \uC778\uC218 \uBC0F \uD574\uCCB4\uC785\uB2C8\uB2E4. \uD558\uB098\uC529 \uC774\uD574\uD574 \uBCF4\uACA0\uC2B5\uB2C8\uB2E4.",-1),h=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),k=l(`<h1 id="\u1107\u1169\u11A8\u1109\u1161" tabindex="-1"><a class="header-anchor" href="#\u1107\u1169\u11A8\u1109\u1161" aria-hidden="true">#</a> \uBCF5\uC0AC</h1><p>\uAE30\uC874 \uBC30\uC5F4\uC744 \uC218\uC815\uD558\uC9C0 \uC54A\uACE0 \uBC30\uC5F4\uC758 \uBCF5\uC0AC\uBCF8\uC744 \uB9CC\uB4DC\uB294 \uAC83\uC774 \uC27D\uAC8C \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uC774 \uAC1C\uB150\uC740 \uC6D0\uBCF8 \uC18C\uC2A4\uB97C \uC601\uD5A5\uC744 \uC8FC\uC9C0 \uC54A\uACE0 \uB370\uC774\uD130\uB97C \uC870\uC791\uD560 \uB54C \uC720\uC6A9\uD569\uB2C8\uB2E4. \uAC1D\uCCB4\uC5D0 \uB300\uD574\uC11C\uB3C4 \uB3D9\uC77C\uD558\uAC8C \uC791\uB3D9\uD569\uB2C8\uB2E4.</p><p>\uBCF5\uC0AC \uACFC\uC815\uC5D0\uC11C \uC0C8\uB85C\uC6B4 \uBC30\uC5F4\uC774\uB098 \uAC1D\uCCB4\uC5D0 \uD6A8\uACFC\uC801\uC73C\uB85C \uD0A4-\uAC12 \uC30D\uC744 \uC0DD\uC131\uD558\uBA70, \uBC30\uC5F4 \uC694\uC18C\uAC00 \uAC12\uC774 \uB418\uACE0 \uADF8\uB4E4\uC758 \uC778\uB371\uC2A4(\uBC30\uC5F4\uC758 \uACBD\uC6B0) \uB610\uB294 \uAC1D\uCCB4 \uC18D\uC131\uC774 \uD0A4\uAC00 \uB429\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> oldArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> newArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>oldArray<span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newArray<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \uCD9C\uB825: [1, 2, 3]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),b=a("p",null,"\uB354 \uBCF4\uAE30: https://clubofprogrammers.com/spread-operator-in-react-js/",-1),f=a("p",null,"\uB610\uD55C \uD78C\uB514\uC5B4\uB85C \uB41C \uB9AC\uC561\uD2B8 \uAC15\uC88C\uB97C \uC2DC\uCCAD\uD574\uBCF4\uC138\uC694.",-1);function g(v,y){return s(),c("div",null,[d,u,m,_,h,(s(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),k,(s(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b,f])}var C=p(i,[["render",g],["__file","index.html.vue"]]);export{C as default};