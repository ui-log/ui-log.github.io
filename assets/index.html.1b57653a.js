import{_ as i}from"./app.a99075bb.js";import{l as n,m as d,E as e,G as t,p as s,Y as l,C as a,K as o}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var p="/assets/Flex-vs.-Grid:-Choosing-the-Right-CSS-Layout_0.d1eadbc1.png";const r={},c=a("p",null,[a("img",{src:p,alt:"Flex-vs.-Grid:-Choosing-the-Right-CSS-Layout"})],-1),u=a("p",null,"Flexbox\uC640 Grid\uB294 CSS\uC5D0\uC11C \uAC01\uAE30 \uB2E4\uB978 \uC885\uB958\uC758 \uB808\uC774\uC544\uC6C3 \uBB38\uC81C\uB97C \uD574\uACB0\uD558\uAE30 \uC704\uD574 \uC124\uACC4\uB41C \uAC15\uB825\uD55C \uB3C4\uAD6C\uC785\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uC5B4\uB5A4 \uC0C1\uD669\uC5D0\uC11C \uC5B4\uB5A4 \uAC83\uC744 \uC0AC\uC6A9\uD574\uC57C \uD560\uC9C0\uB97C \uC54C\uBA74 \uAC1C\uBC1C \uD504\uB85C\uC138\uC2A4\uB97C \uD06C\uAC8C \uAC04\uC18C\uD654\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uC74C \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C Flexbox\uC640 Grid \uC911 \uC5B4\uB5A4 \uAC83\uC744 \uC120\uD0DD\uD574\uC57C \uD560\uAE4C\uC694?",-1),h=a("h1",{id:"flexbox-\u110B\u1175\u1112\u1162\u1112\u1161\u1100\u1175",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#flexbox-\u110B\u1175\u1112\u1162\u1112\u1161\u1100\u1175","aria-hidden":"true"},"#"),s(" Flexbox \uC774\uD574\uD558\uAE30")],-1),b=a("p",null,"Flexbox\uB294 Flexible Box Module\uC758 \uC57D\uC790\uB85C, \uCEE8\uD14C\uC774\uB108 \uB0B4\uC5D0\uC11C \uD56D\uBAA9\uC744 \uC815\uB82C\uD558\uB294 1\uCC28\uC6D0 \uB808\uC774\uC544\uC6C3 \uBC29\uBC95\uC785\uB2C8\uB2E4. \uD589\uC774\uB098 \uC5F4 \uCD95 \uB808\uC774\uC544\uC6C3\uC744 \uB9CC\uB4E4\uAE30 \uC704\uD574 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574 \uC6B0\uB9AC\uB294 \uBC18\uC751\uD615 \uC6F9 \uD398\uC774\uC9C0\uB97C \uB514\uC790\uC778\uD558\uACE0 \uAD6C\uCD95\uD560 \uB54C CSS \uCF54\uB4DC \uB0B4\uC5D0 \uB9CE\uC740 float \uBC0F position \uC18D\uC131\uC744 \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uACE0\uB3C4 \uD2B8\uB9AD\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC5B4 \uAC1C\uBC1C\uC774 \uB354 \uC26C\uC6CC\uC9D1\uB2C8\uB2E4.",-1),x=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),_=o(`<h2 id="flexbox-example" tabindex="-1"><a class="header-anchor" href="#flexbox-example" aria-hidden="true">#</a> Flexbox Example</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">.</span>container <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  justify<span class="token operator">-</span>content<span class="token operator">:</span> space<span class="token operator">-</span>between<span class="token punctuation">;</span>
  align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774 \uC608\uC81C\uB294 \uC544\uC774\uD15C\uC744 \uCEE8\uD14C\uC774\uB108 \uB0B4\uC5D0\uC11C \uADE0\uC77C\uD558\uAC8C \uACF5\uAC04\uC744 \uBC30\uCE58\uD558\uACE0 \uC911\uC559 \uC815\uB82C\uD558\uB294 \uBC29\uBC95\uC744 \uBCF4\uC5EC\uC90D\uB2C8\uB2E4. Flexbox\uB294 \uC774\uB97C \uC27D\uAC8C \uCC98\uB9AC\uD558\uC5EC, \uCD5C\uC18C\uD55C\uC758 \uCF54\uB4DC\uB85C \uACF5\uAC04 \uBD84\uBC30\uC640 \uC815\uB82C\uC744 \uC81C\uC5B4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h1 id="\u1100\u1173\u1105\u1175\u1103\u1173-\u110B\u1175\u1112\u1162\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1100\u1173\u1105\u1175\u1103\u1173-\u110B\u1175\u1112\u1162\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uADF8\uB9AC\uB4DC \uC774\uD574\uD558\uAE30</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),g=o(`<p>CSS \uADF8\uB9AC\uB4DC \uB808\uC774\uC544\uC6C3\uC778 \uADF8\uB9AC\uB4DC\uB294 2\uCC28\uC6D0 \uB808\uC774\uC544\uC6C3 \uC2DC\uC2A4\uD15C\uC73C\uB85C \uC790\uC8FC \uC5B8\uAE09\uB429\uB2C8\uB2E4. CSS \uADF8\uB9AC\uB4DC\uB294 \uD589\uACFC \uC5F4\uC744 \uD568\uAED8 \uB2E4\uB8F0 \uC218 \uC788\uB294 2\uCC28\uC6D0 \uB808\uC774\uC544\uC6C3 \uC2DC\uC2A4\uD15C\uC73C\uB85C, \uC774\uB294 \uB354 \uBCF5\uC7A1\uD558\uACE0 \uC870\uC9C1\uD654\uB41C \uB514\uC790\uC778 \uC2DC\uC2A4\uD15C\uC744 \uAD6C\uCD95\uD558\uAE30 \uC704\uD55C \uB2E4\uC591\uD55C \uAC00\uB2A5\uC131\uC744 \uC5F4\uC5B4\uC90D\uB2C8\uB2E4. \uADF8\uB9AC\uB4DC\uB97C \uC0AC\uC6A9\uD558\uBA74 \uC608\uC804 CSS \uB3C4\uAD6C\uB85C\uB294 \uC5B4\uB824\uC6E0\uAC70\uB098 \uBD88\uAC00\uB2A5\uD588\uB358 \uBCF5\uC7A1\uD55C \uB808\uC774\uC544\uC6C3\uC744 \uB9CC\uB4E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="\u1100\u1173\u1105\u1175\u1103\u1173-\u110B\u1168\u1109\u1175" tabindex="-1"><a class="header-anchor" href="#\u1100\u1173\u1105\u1175\u1103\u1173-\u110B\u1168\u1109\u1175" aria-hidden="true">#</a> \uADF8\uB9AC\uB4DC \uC608\uC2DC</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">.</span>container <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> grid<span class="token punctuation">;</span>
  grid<span class="token operator">-</span>template<span class="token operator">-</span>columns<span class="token operator">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
  grid<span class="token operator">-</span>gap<span class="token operator">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774 \uCF54\uB4DC\uB294 \uC138 \uAC1C\uC758 \uB3D9\uC77C \uB108\uBE44 \uC5F4\uB85C \uAD6C\uC131\uB41C \uB808\uC774\uC544\uC6C3\uC744 \uC0DD\uC131\uD558\uBA70, \uADF8\uB9AC\uB4DC\uAC00 \uD589\uACFC \uC5F4\uC744 \uAC04\uACB0\uD558\uAC8C \uAD00\uB9AC\uD560 \uC218 \uC788\uB294 \uB2A5\uB825\uC744 \uBCF4\uC5EC\uC90D\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),m=a("h1",{id:"flexbox\u1105\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1162\u110B\u1163-\u1112\u1161\u1102\u1173\u11AB-\u1100\u1167\u11BC\u110B\u116E",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#flexbox\u1105\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1162\u110B\u1163-\u1112\u1161\u1102\u1173\u11AB-\u1100\u1167\u11BC\u110B\u116E","aria-hidden":"true"},"#"),s(" Flexbox\uB97C \uC0AC\uC6A9\uD574\uC57C \uD558\uB294 \uACBD\uC6B0")],-1),v=a("p",null,"Flexbox\uB294 \uC120\uD615 \uB808\uC774\uC544\uC6C3\uC744 \uB2E4\uB8F0 \uB54C \uC774\uC0C1\uC801\uC785\uB2C8\uB2E4. \uC5EC\uAE30\uC11C \uC8FC\uC694 \uAD00\uC2EC\uC0AC\uB294 \uD56D\uBAA9\uC744 \uB2E8\uC77C \uCD95\uC744 \uB530\uB77C \uC815\uB82C\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4. \uB2E4\uC74C\uACFC \uAC19\uC740 \uC0C1\uD669\uC5D0 \uC644\uBCBD\uD569\uB2C8\uB2E4:",-1),f=a("ul",null,[a("li",null,"\uB0B4\uBE44\uAC8C\uC774\uC158 \uBC14"),a("li",null,"\uC218\uD3C9 \uB610\uB294 \uC218\uC9C1 \uAC00\uC6B4\uB370 \uC815\uB82C"),a("li",null,"\uCEE8\uD14C\uC774\uB108 \uB0B4\uC5D0\uC11C \uD56D\uBAA9\uC744 \uADE0\uC77C\uD558\uAC8C \uAC04\uACA9 \uC9C0\uC815"),a("li",null,"\uAC10\uC2F8\uAC70\uB098 \uD06C\uAE30\uB97C \uC870\uC815\uD574\uC57C \uD558\uB294 \uB3D9\uC801 \uCF58\uD150\uCE20")],-1),k=a("p",null,"Flexbox\uC758 \uAC04\uACB0\uD568\uACFC \uC81C\uC5B4\uB825\uC740 \uC774\uB7EC\uD55C 1\uCC28\uC6D0 \uB808\uC774\uC544\uC6C3\uC5D0 \uC788\uC5B4\uC11C \uAC00\uC7A5 \uB6F0\uC5B4\uB0A9\uB2C8\uB2E4.",-1),y=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),w=a("h1",{id:"\u1100\u1173\u1105\u1175\u1103\u1173-\u1109\u1161\u110B\u116D\u11BC-\u1109\u1175\u1100\u1175",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u1100\u1173\u1105\u1175\u1103\u1173-\u1109\u1161\u110B\u116D\u11BC-\u1109\u1175\u1100\u1175","aria-hidden":"true"},"#"),s(" \uADF8\uB9AC\uB4DC \uC0AC\uC6A9 \uC2DC\uAE30")],-1),S=a("p",null,"\uADF8\uB9AC\uB4DC\uB294 \uD589\uACFC \uC5F4\uC744 \uBAA8\uB450 \uC81C\uC5B4\uD574\uC57C \uD558\uB294 2\uCC28\uC6D0 \uB808\uC774\uC544\uC6C3\uC774 \uD544\uC694\uD55C \uC0C1\uD669\uC5D0\uC11C \uBE5B\uC744 \uBC1C\uD569\uB2C8\uB2E4. \uB2E4\uC74C\uACFC \uAC19\uC740 \uACBD\uC6B0\uC5D0 \uADF8\uB9AC\uB4DC\uB97C \uC0AC\uC6A9\uD558\uC138\uC694:",-1),F=a("ul",null,[a("li",null,"\uBCF5\uC7A1\uD55C \uD398\uC774\uC9C0 \uB808\uC774\uC544\uC6C3"),a("li",null,"\uACB9\uCE58\uB294 \uCF58\uD150\uCE20\uB97C \uAC00\uC9C4 \uB808\uC774\uC544\uC6C3 \uB514\uC790\uC778"),a("li",null,"\uD06C\uAE30\uBFD0\uB9CC \uC544\uB2C8\uB77C \uB808\uC774\uC544\uC6C3 \uAD6C\uC870\uB3C4 \uC870\uC815\uD558\uB294 \uBC18\uC751\uD615 \uB514\uC790\uC778\uC744 \uC0DD\uC131"),a("li",null,"\uC815\uC758\uB41C \uADF8\uB9AC\uB4DC \uB0B4\uC5D0\uC11C \uCF58\uD150\uCE20\uB97C \uC815\uD655\uD558\uAC8C \uC815\uB82C\uD558\uB294 \uACBD\uC6B0")],-1),C=a("p",null,"\uADF8\uB9AC\uB4DC\uAC00 \uC27D\uAC8C \uB450 \uAC00\uC9C0 \uCC28\uC6D0\uC744 \uB2E4\uB8F0 \uC218 \uC788\uB294 \uB2A5\uB825 \uB54C\uBB38\uC5D0 \uBCF5\uC7A1\uD55C \uB808\uC774\uC544\uC6C3 \uC694\uAD6C\uC5D0 \uB300\uD55C \uC6B0\uC218\uD55C \uC120\uD0DD\uC9C0\uAC00 \uB429\uB2C8\uB2E4.",-1),j=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),G=a("h1",{id:"\u1100\u1167\u11AF\u1105\u1169\u11AB",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u1100\u1167\u11AF\u1105\u1169\u11AB","aria-hidden":"true"},"#"),s(" \uACB0\uB860")],-1),B=a("ul",null,[a("li",null,"\uCEF4\uD3EC\uB10C\uD2B8 \uB610\uB294 \uCF58\uD150\uCE20\uAC00 \uC120\uD615 \uB808\uC774\uC544\uC6C3(\uB2E8\uC77C \uD589 \uB610\uB294 \uC5F4\uACFC \uAC19\uC740)\uC744 \uD544\uC694\uB85C \uD560 \uB54C\uB294 Flexbox\uB97C \uC0AC\uC6A9\uD558\uC138\uC694."),a("li",null,"\uD398\uC774\uC9C0 \uC804\uCCB4 \uB808\uC774\uC544\uC6C3\uC744 \uB514\uC790\uC778\uD558\uAC70\uB098 \uD589\uACFC \uC5F4\uC5D0 \uB300\uD574 \uC815\uD655\uD55C \uC81C\uC5B4\uAC00 \uD544\uC694\uD560 \uB54C\uB294 Grid\uB97C \uC120\uD0DD\uD558\uC138\uC694."),a("li",null,"Grid\uB294 \uB808\uC774\uC544\uC6C3\uC6A9\uC774\uBA70, Flexbox\uB294 \uC815\uB82C\uC6A9\uC785\uB2C8\uB2E4.")],-1),E=a("p",null,"\uC6D0\uBB38\uC740 2024\uB144 3\uC6D4 16\uC77C\uC5D0 https://10xdev.codeparrot.ai\uC5D0\uC11C \uAC8C\uC2DC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.",-1);function N(V,L){return n(),d("div",null,[c,u,h,b,x,(n(),e(l("script"),null,{default:t(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),_,(n(),e(l("script"),null,{default:t(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),g,(n(),e(l("script"),null,{default:t(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),m,v,f,k,y,(n(),e(l("script"),null,{default:t(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),w,S,F,C,j,(n(),e(l("script"),null,{default:t(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),G,B,E])}var q=i(r,[["render",N],["__file","index.html.vue"]]);export{q as default};