import{_ as o}from"./app.d68f74da.js";import{l as s,m as i,E as a,G as t,p,Y as e,C as n,K as l}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var c="/assets/WeCanFinallyTransitionDisplayNone_0.34027c04.png";const u={},d=n("p",null,[n("img",{src:c,alt:"img"})],-1),r=n("p",null,"\uD32C\uD398\uC5B4\uAC00 \uC5B4\uB514\uC5D0 \uC788\uC5C8\uB098\uC694!? \u{1F92F}\u{1F92F}",-1),v=n("p",null,"\uC800\uB294 w3cplus\uC758 \uB9E4\uC6B0 \uAE34, \uADF8\uB7EC\uB098 \uB9E4\uC6B0 \uD765\uBBF8\uB85C\uC6B4 2023/2024 CSS\uC5D0 \uAD00\uD55C \uAE30\uC0AC\uB97C \uC77D\uACE0 transition-behavior\uB97C \uBC1C\uACAC\uD588\uC2B5\uB2C8\uB2E4. CanIUse\uC5D0\uC11C\uB294 \uC774\uB97C 65%\uB9CC \uC9C0\uC6D0\uD558\uC9C0\uB9CC, \uC9C0\uC9C0 \uC54A\uB294 \uACF3\uC740 Safari\uC640 FireFox\uC640 \uAC19\uC740 \uBCF4\uD3B8\uC801\uC778 \uAC00\uB2F4\uC790\uB4E4\uC785\uB2C8\uB2E4. \uADF8\uB7EC\uB098 \uC774\uAC83\uC740 \uB300\uCCB4 \uC218\uB2E8\uC744 \uAD6C\uCD95\uD558\uAE30\uAC00 \uAF64 \uC26C\uC6B0\uBBC0\uB85C \uC800\uB294 \uC810\uC9C4\uC801 \uD5A5\uC0C1\uC744 \uC704\uD574 \uC774\uB97C \uC0AC\uC6A9\uD558\uB294 \uAC83\uC5D0 \uB9CC\uC871\uD569\uB2C8\uB2E4.",-1),k=n("p",null,"\uB2E4\uC74C CSS\uB97C \uACE0\uB824\uD574 \uC8FC\uC138\uC694:",-1),m=n("p",null,[n("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),b=l(`<div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 20%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">aspect-ratio</span><span class="token punctuation">:</span> 1/1<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.25s<span class="token punctuation">;</span>
  <span class="token property">transition-behavior</span><span class="token punctuation">:</span> allow-discrete<span class="token punctuation">;</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">scale</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box.closed</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">scale</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uD55C\uBC88 .box\uC5D0 .closed \uD074\uB798\uC2A4\uAC00 \uCD94\uAC00\uB418\uBA74 \uC77C\uBC18\uC801\uC73C\uB85C \uC21C\uAC04\uC801\uC73C\uB85C \uC0AC\uB77C\uC9D1\uB2C8\uB2E4. \uB9CC\uC57D transition\uACFC \uD568\uAED8 display: none\uC744 \uC0AC\uC6A9\uD558\uB824 \uD558\uBA74, \uC989\uC2DC \uBCC0\uACBD\uB418\uC5B4 \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uB2E4\uB978 \uC804\uD658\uD6A8\uACFC\uAC00 \uBCF4\uC774\uC9C0 \uC54A\uC744 \uAC83\uC785\uB2C8\uB2E4.</p><p>\uADF8\uB7EC\uB098 transition-behavior: allow-discrete;\uB97C \uCD94\uAC00\uD568\uC73C\uB85C\uC368, display: none\uC740 opacity, scale, width\uC758 \uC804\uD658 \uB05D\uAE4C\uC9C0 \uC9C0\uC5F0\uB429\uB2C8\uB2E4.</p><p>\uC2A4\uC2A4\uB85C \uD655\uC778\uD574\uBCF4\uC138\uC694:</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),_=n("p",null,"\uAC00\uC2DC\uC131: \uC228\uAE40\uC5D0\uC11C\uB3C4 \uC791\uB3D9\uD574\uC694. \uD558\uC9C0\uB9CC \uAC70\uC758 \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uC544\uC694.",-1),y=n("p",null,"\uC694\uC18C\uB97C \uC228\uAE30\uAE30 \uC704\uD574 JavaScript \uC804\uD658 \uC774\uBCA4\uD2B8 \uB9AC\uC2A4\uB108\uB97C \uB354 \uC774\uC0C1 \uC0AC\uC6A9\uD560 \uD544\uC694\uAC00 \uC5C6\uB2E4\uB2C8 \uC815\uB9D0 \uAE30\uC058\uB124\uC694. \uC774\uAC83\uC740 \uBE0C\uB77C\uC6B0\uC800 \uC9C0\uC6D0\uB9CC\uD07C\uC774\uB098 \uC5C4\uCCAD\uB09C \uBCC0\uD654\uC785\uB2C8\uB2E4.",-1),h=n("p",null,"w3cplus\uC5D0 \uAC10\uC0AC\uC758 \uC778\uC0AC\uB97C \uC804\uD569\uB2C8\uB2E4. \uADF8\uB4E4\uC758 \uBA4B\uC9C4 \uAE30\uC0AC\uB97C \uD655\uC778\uD574\uBCF4\uC138\uC694!",-1);function g(f,w){return s(),i("div",null,[d,r,v,k,m,(s(),a(e("script"),null,{default:t(()=>[p(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b,(s(),a(e("script"),null,{default:t(()=>[p(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),_,y,h])}var V=o(u,[["render",g],["__file","index.html.vue"]]);export{V as default};
