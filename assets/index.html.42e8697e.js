import{_ as d,o as s,c as i,a as e,w as t,d as l,b as n,g as o,e as a}from"./app.25d62129.js";const c={},p=o('<h1 id="\u1109\u1169\u1100\u1162" tabindex="-1"><a class="header-anchor" href="#\u1109\u1169\u1100\u1162" aria-hidden="true">#</a> \uC18C\uAC1C</h1><p>CSS \uC791\uC5C5\uC744 \uD55C \uB3D9\uC548 \uC9C4\uD589\uD588\uB2E4\uBA74, \uD50C\uB809\uC2A4\uBC15\uC2A4(Flexbox)\uC5D0 \uC775\uC219\uD560 \uAC83\uC785\uB2C8\uB2E4. \uC774\uAC83\uC740 \uC720\uC5F0\uD558\uACE0 \uBC18\uC751\uD615 \uC6F9 \uB514\uC790\uC778\uC744 \uB9CC\uB4DC\uB294 \uBC29\uBC95\uC744 \uD601\uC2E0\uC801\uC73C\uB85C \uBCC0\uD654\uC2DC\uD0A8 \uAC15\uB825\uD55C \uB808\uC774\uC544\uC6C3 \uBAA8\uB4C8\uC785\uB2C8\uB2E4. \uADF8\uB7EC\uB098 <code>display: flex</code>\uC640 <code>justify-content</code>\uC640 \uAC19\uC740 \uAE30\uBCF8\uC801\uC778 \uB0B4\uC6A9 \uC774\uC678\uC5D0\uB3C4 \uD50C\uB809\uC2A4\uBC15\uC2A4\uC5D0\uB294 \uB354 \uB9CE\uC740 \uAE30\uB2A5\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uBE14\uB85C\uADF8 \uD3EC\uC2A4\uD2B8\uC5D0\uC11C\uB294 \uC5EC\uB7EC \uACE0\uAE09 Flexbox \uAE30\uC220\uC5D0 \uB300\uD574 \uC0B4\uD3B4\uBCF4\uACE0 \uC6F9 \uB808\uC774\uC544\uC6C3 \uC2A4\uD0AC\uC744 \uD5A5\uC0C1\uC2DC\uD0A4\uB294 \uBC29\uBC95\uC744 \uC54C\uC544\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.</p><h2 id="_1-\u1100\u1161\u11B7\u110A\u1161\u1100\u1169-\u1107\u1161\u11AB\u110C\u1165\u11AB\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_1-\u1100\u1161\u11B7\u110A\u1161\u1100\u1169-\u1107\u1161\u11AB\u110C\u1165\u11AB\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 1. \uAC10\uC2F8\uACE0 \uBC18\uC804\uD558\uAE30</h2><p>\uD50C\uB809\uC2A4 \uC544\uC774\uD15C\uC774 \uCEE8\uD14C\uC774\uB108 \uB0B4\uC5D0\uC11C \uC5B4\uB5BB\uAC8C \uD758\uB7EC\uAC00\uB294\uC9C0 \uC81C\uC5B4\uD558\uB294 \uAC83\uC740 \uC911\uC694\uD569\uB2C8\uB2E4. \uC774\uB97C \uC5B4\uB5BB\uAC8C \uD558\uB294\uC9C0 \uC54C\uC544\uBCF4\uACA0\uC2B5\uB2C8\uB2E4:</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),u=a("p",null,"\uD14C\uC774\uBE14 \uD0DC\uADF8\uB97C Markdown \uD615\uC2DD\uC73C\uB85C \uBCC0\uACBD\uD558\uC138\uC694.",-1),r=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),b=o(`<p><code>justify-content</code>\uC740 \uC8FC\uCD95\uC744 \uB530\uB77C \uC218\uD3C9 \uC815\uB82C\uC744 \uB2E4\uB8E8\uC9C0\uB9CC, \uAD50\uCC28 \uCD95\uC740 \uC5B4\uB5A8\uAE4C\uC694?</p><p><code>align-items</code>:</p><ul><li>\uD50C\uB809\uC2A4 \uCEE8\uD14C\uC774\uB108 \uB0B4 \uD56D\uBAA9\uB4E4\uC758 \uC218\uC9C1 \uC815\uB82C\uC744 \uC81C\uC5B4\uD569\uB2C8\uB2E4.</li><li>\uC8FC\uB85C \uC0AC\uC6A9\uB418\uB294 \uAC12\uC73C\uB85C\uB294 <code>flex-start</code>, <code>flex-end</code>, <code>center</code>, <code>stretch</code> \uB4F1\uC774 \uC788\uC2B5\uB2C8\uB2E4.</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.flex-container</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span> <span class="token comment">/* \uD56D\uBAA9\uB4E4\uC744 \uC218\uC9C1 \uC911\uC559 \uC815\uB82C\uD569\uB2C8\uB2E4. */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),_=a("p",null,"align-content:",-1),h=a("ul",null,[a("li",null,"\uAD50\uCC28 \uCD95 (\uB2E4\uC911 \uB77C\uC778 \uB808\uC774\uC544\uC6C3)\uC758 \uD50C\uB809\uC2A4 \uC544\uC774\uD15C \uAC04\uC758 \uACF5\uAC04\uC744 \uBD84\uBC30\uD569\uB2C8\uB2E4."),a("li",null,"flex-wrap: wrap\uACFC \uD568\uAED8 \uC0AC\uC6A9\uD558\uAE30 \uC720\uC6A9\uD569\uB2C8\uB2E4.")],-1),g=a("ol",{start:"3"},[a("li",null,"\uAC1C\uBCC4 \uD56D\uBAA9 \uC81C\uC5B4")],-1),y=a("p",null,"\uD50C\uB809\uC2A4\uBC15\uC2A4\uB97C \uC0AC\uC6A9\uD558\uBA74 \uCEE8\uD14C\uC774\uB108 \uB0B4 \uAC1C\uBCC4 \uD56D\uBAA9\uC758 \uB3D9\uC791\uC744 \uC138\uBC00\uD558\uAC8C \uC870\uC808\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:",-1),f=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),m=a("p",null,"\uCCB4\uC721\uAD11\uC7A5:",-1),v=a("ul",null,[a("li",null,"\uC544\uC774\uD15C\uC774 \uCEE8\uD14C\uC774\uB108 \uB0B4\uC758 \uBAA8\uB4E0 \uC774\uC6A9 \uAC00\uB2A5\uD55C \uACF5\uAC04\uC744 \uCC44\uC6B0\uAE30 \uC704\uD574 \uC5B4\uB5BB\uAC8C \uC131\uC7A5\uD560\uC9C0\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.")],-1),k=a("p",null,"\uC720\uC5F0\uD55C \uCD95\uC18C:",-1),x=a("ul",null,[a("li",null,"\uC624\uBC84\uD50C\uB85C\uC6B0\uB97C \uBC29\uC9C0\uD558\uAE30 \uC704\uD574 \uC544\uC774\uD15C\uC774 \uC5B4\uB5BB\uAC8C \uCD95\uC18C\uB418\uB294\uC9C0\uB97C \uC81C\uC5B4\uD569\uB2C8\uB2E4.")],-1),w=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),F=o(`<p>flex-basis</p><ul><li>\uC544\uC774\uD15C\uC774 \uCEE4\uC9C0\uAC70\uB098 \uC791\uC544\uC9C0\uAE30 \uC804\uC5D0 \uCD08\uAE30 \uD06C\uAE30\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">.</span>item<span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">{</span>
    flex<span class="token operator">-</span>grow<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">/* \uB2E4\uB978 \uC544\uC774\uD15C\uBCF4\uB2E4 \uB450 \uBC30 \uACF5\uAC04\uC744 \uCC28\uC9C0\uD569\uB2C8\uB2E4 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>&#39;order&#39;\uC758 \uD798</li></ol><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),j=o('<p>\uD45C \uD0DC\uADF8\uB97C Markdown \uD615\uC2DD\uC73C\uB85C \uBCC0\uACBD\uD569\uB2C8\uB2E4.</p><table><thead><tr><th>Property</th><th>Description</th></tr></thead><tbody><tr><td>order</td><td>Arrange flex items visually</td></tr></tbody></table><ol start="5"><li>\uC911\uCCA9\uB41C \uD50C\uB809\uC2A4 \uCEE8\uD14C\uC774\uB108</li></ol><p>\uBCF5\uC7A1\uD55C \uAD6C\uC870\uB97C \uC704\uD574 \uC11C\uB85C \uB2E4\uB978 Flexbox \uB808\uC774\uC544\uC6C3\uC744 \uACB0\uD569\uD558\uC138\uC694. \uAE30\uC5B5\uD558\uC138\uC694, Flex \uD56D\uBAA9\uC740 \uC2A4\uC2A4\uB85C Flex \uCEE8\uD14C\uC774\uB108\uAC00 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4!</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),B=a("p",null,"\uACB0\uB860",-1),C=a("p",null,"\uC774\uB7EC\uD55C \uACE0\uAE09 Flexbox \uAE30\uC220\uB4E4\uC740 \uC6F9 \uB808\uC774\uC544\uC6C3\uC5D0 \uB300\uD55C \uC720\uC5F0\uC131\uACFC \uC81C\uC5B4\uB97C \uC0C8\uB85C\uC6B4 \uCC28\uC6D0\uC73C\uB85C \uC5F4\uC5B4\uC90D\uB2C8\uB2E4. \uAC10\uC2F8\uAE30, \uC591 \uCD95\uC5D0\uC11C\uC758 \uC815\uB82C, \uAC1C\uBCC4 \uD56D\uBAA9 \uC18D\uC131 \uBC0F \uC911\uCCA9\uC744 \uC774\uD574\uD568\uC73C\uB85C\uC368, \uBCF5\uC7A1\uD558\uACE0 \uBC18\uC751\uD615 \uB514\uC790\uC778\uC744 \uC27D\uAC8C \uB9CC\uB4E4 \uC218 \uC788\uC744 \uAC83\uC785\uB2C8\uB2E4.",-1),N=a("p",null,"\uB2E4\uB978 \uACE0\uAE09 Flexbox \uD2B8\uB9AD\uC744 \uC0AC\uC6A9\uD558\uACE0 \uACC4\uC2E0\uAC00\uC694? \uC544\uB798 \uB313\uAE00\uC5D0\uC11C \uC5EC\uB7EC\uBD84\uC774 \uC88B\uC544\uD558\uB294 \uAE30\uC220\uC744 \uACF5\uC720\uD574 \uC8FC\uC138\uC694!",-1),S=a("p",null,"\uD2B9\uC815 \uAE30\uC220\uC5D0 \uB300\uD574 \uC790\uC138\uD788 \uC124\uBA85\uD558\uAC70\uB098 \uCF54\uB4DC \uC608\uC81C\uB97C \uC81C\uACF5\uD574 \uC8FC\uAE38 \uC6D0\uD558\uC2E0\uB2E4\uBA74 \uB9D0\uC500\uD574\uC8FC\uC138\uC694. \uD3EC\uC2A4\uD2B8\uB97C \uB354 \uB9DE\uCDA4\uD654\uD558\uB294 \uB370 \uAE30\uAEBC\uC774 \uB3C4\uC640\uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4!",-1);function V(D,M){return s(),i("div",null,[p,(s(),e(n("script"),null,{default:t(()=>[l(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),u,r,(s(),e(n("script"),null,{default:t(()=>[l(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b,(s(),e(n("script"),null,{default:t(()=>[l(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),_,h,g,y,f,(s(),e(n("script"),null,{default:t(()=>[l(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),m,v,k,x,w,(s(),e(n("script"),null,{default:t(()=>[l(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),F,(s(),e(n("script"),null,{default:t(()=>[l(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),j,(s(),e(n("script"),null,{default:t(()=>[l(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),B,C,N,S])}var E=d(c,[["render",V],["__file","index.html.vue"]]);export{E as default};
