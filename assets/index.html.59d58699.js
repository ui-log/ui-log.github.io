import{_ as l}from"./app.d68f74da.js";import{l as a,m as c,E as t,G as p,p as s,Y as e,C as n,K as o}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var i="/assets/DownloadingReactComponentsasPDFFiles_0.e6b1be51.png",r="/assets/DownloadingReactComponentsasPDFFiles_3.a62bd573.png",d="/assets/DownloadingReactComponentsasPDFFiles_4.e30c14db.png";const u={},k=n("img",{src:i},null,-1),v=n("p",null,"\uC0AC\uC6A9\uC790\uB4E4\uC740 UI\uC758 \uD2B9\uC815 \uBD80\uBD84\uC744 PDF \uD30C\uC77C\uB85C \uB2E4\uC6B4\uB85C\uB4DC\uD558\uB294 \uBC29\uBC95\uC774 \uD544\uC694\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD2F0\uCF13, \uC601\uC218\uC99D \uB610\uB294 \uC1FC\uD551 \uBAA9\uB85D\uC774 \uD3EC\uD568\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB294 \uADF8\uB4E4\uC774 \uC774\uB7EC\uD55C \uBB38\uC11C\uB97C \uC778\uC1C4\uD558\uACE0 \uC2F6\uC744 \uB54C \uD3B8\uB9AC\uD55C \uBC29\uBC95\uC785\uB2C8\uB2E4.",-1),m=n("p",null,"\uCD5C\uADFC, \uC0AC\uC6A9\uC790\uAC00 \uC790\uCCB4\uC801\uC73C\uB85C \uC124\uC815\uD55C \uD56D\uBAA9\uBCC4 \uAD6C\uC131 \uBAA9\uB85D\uC744 \uB2E4\uC6B4\uB85C\uB4DC\uD560 \uC218 \uC788\uB294 \uBC84\uD2BC\uC744 \uB9CC\uB4E4\uC5B4\uC57C \uD588\uC2B5\uB2C8\uB2E4. \uC131\uB2A5 \uBB38\uC81C\uB85C \uC778\uD574 \uAC00\uB2A5\uD55C \uAC00\uC7A5 \uACBD\uC81C\uC801\uC778 \uBC29\uBC95\uC73C\uB85C \uC774\uB97C \uC218\uD589\uD574\uC57C \uD588\uC2B5\uB2C8\uB2E4. \uC774 \uC5EC\uC815\uC5D0\uC11C \uC800\uB97C \uB3D5\uAE30 \uC704\uD55C React \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uCC3E\uAE30 \uC2DC\uC791\uD588\uC2B5\uB2C8\uB2E4. \uB2E4\uC591\uD55C \uC635\uC158\uC774 \uC788\uC5C8\uC9C0\uB9CC, \uBAA8\uB450\uAC00 \uC81C \uC0AC\uC6A9 \uC0AC\uB840\uC5D0 \uBE44\uD574 \uBD88\uD544\uC694\uD558\uAC8C \uBC29\uB300\uD588\uC2B5\uB2C8\uB2E4.",-1),b=n("p",null,"\uAC04\uB2E8\uD558\uAC8C \uB9D0\uD558\uC790\uBA74, \uC544\uB9C8\uB3C4 html2canvas\uC640 jsPDF\uC758 \uC870\uD569\uC744 \uAD8C\uC7A5\uD558\uB294 \uAE30\uC0AC\uB4E4\uC744 \uB9CC\uB09C \uC801\uC774 \uC788\uC744 \uAC83\uC785\uB2C8\uB2E4. \uC774\uB4E4\uC740 \uB9E4\uC6B0 \uC88B\uC740 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC9C0\uB9CC \uC774\uB7F0 \uD55C\uC815\uB41C \uC0AC\uC6A9 \uC0AC\uB840\uC5D0\uB294 \uD544\uC694\uD558\uC9C0 \uC54A\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uAE00\uC5D0\uC11C\uB294 React \uCEF4\uD3EC\uB10C\uD2B8\uB97C PDF \uD30C\uC77C\uB85C \uB2E4\uC6B4\uB85C\uB4DC\uD560 \uC218 \uC788\uB294 \uAC04\uACB0\uD55C \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC778 react-to-pdf (\uBC84\uC804 1.0.1)\uC5D0 \uB300\uD574 \uC774\uC57C\uAE30\uD558\uACA0\uC2B5\uB2C8\uB2E4. PDF\uB294 \uCEF4\uD3EC\uB10C\uD2B8 \uC2A4\uD06C\uB9B0\uC0F7\uC5D0\uC11C \uC0DD\uC131\uB418\uBA70 \uC11C\uBC84 \uCE21 \uB80C\uB354\uB9C1(SSR)\uC740 \uC9C0\uC6D0\uB418\uC9C0 \uC54A\uC74C\uC744 \uC54C\uC544\uB450\uC138\uC694.",-1),g=n("p",null,[n("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),y=n("h1",{id:"\u1105\u1161\u110B\u1175\u1107\u1173\u1105\u1165\u1105\u1175-\u1100\u1165\u11B7\u1109\u1162\u11A8",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u1105\u1161\u110B\u1175\u1107\u1173\u1105\u1165\u1105\u1175-\u1100\u1165\u11B7\u1109\u1162\u11A8","aria-hidden":"true"},"#"),s(" \uB77C\uC774\uBE0C\uB7EC\uB9AC \uAC80\uC0C9")],-1),h=n("p",null,"\uB098\uB294 \uBA87 \uAC00\uC9C0 \uAE30\uC0AC\uC640 \uD568\uAED8 ChatGPT\uC5D0\uAC8C React \uCEF4\uD3EC\uB10C\uD2B8\uB97C PDF \uD30C\uC77C\uB85C \uB2E4\uC6B4\uB85C\uB4DC\uD558\uB294 \uBC29\uBC95\uC744 \uBB3C\uC5C8\uC744 \uB54C html2canvas\uC640 jsPDF\uB97C \uC0AC\uC6A9\uD574\uC57C \uD55C\uB2E4\uB294 \uACB0\uB860\uC744 \uC5BB\uC5C8\uB2E4.",-1),f=n("p",null,"\uC774 2\uAC1C\uC758 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uC0AC\uC6A9\uD558\uB294 \uC804\uCCB4\uC801\uC778 \uB85C\uC9C1\uC740 \uB80C\uB354\uB9C1\uB41C \uCEF4\uD3EC\uB10C\uD2B8\uB97C HTML \uCE94\uBC84\uC2A4\uB85C \uBCC0\uD658\uD558\uACE0 PDF \uD30C\uC77C\uC5D0 \uC0BD\uC785\uD558\uC5EC \uB2E4\uC6B4\uB85C\uB4DC\uD558\uB294 \uAC83\uC774\uB2E4.",-1),_=n("p",null,"\uC774\uC804\uC5D0 \uC5B8\uAE09\uD55C \uB300\uB85C \uACBD\uC81C\uC801\uC778 \uACB0\uC815\uC744 \uB0B4\uB838\uC5B4\uC57C \uD588\uB2E4. jsPDF\uB294 8\uAC1C\uC758 \uC885\uC18D\uC131\uC744 \uAC00\uC9C0\uACE0 \uC788\uC9C0\uB9CC(\uD558\uB098\uB294 html2canvas), \uC555\uCD95 \uD574\uC81C\uB41C \uD06C\uAE30\uB294 2.5.1 \uBC84\uC804 \uAE30\uC900\uC73C\uB85C 14.7MB\uC774\uB2E4.",-1),w=n("p",null,[n("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),D=n("p",null,"\uC774\uB807\uAC8C \uD574\uC11C html2canvas\uAC00 \uC758\uC874\uD558\uB294 \uD56D\uBAA9 \uC911 \uD558\uB098\uC774\uBBC0\uB85C \uBCC4\uB3C4\uB85C \uC124\uCE58\uD560 \uD544\uC694\uAC00 \uC5C6\uB2E4\uACE0 \uC0DD\uAC01\uD55C \uC6B0\uB9AC \uD300\uC758 \uD310\uB2E8\uC73C\uB85C \uC778\uD574 jsPDF\uC5D0 \uB300\uD55C \uCD08\uB85D\uBE5B \uBE5B\uC774 \uBCFC \uC218 \uC788\uC5C8\uC2B5\uB2C8\uB2E4.",-1),F=n("h1",{id:"\u1100\u1175\u11AF\u110B\u1173\u11AF-\u1104\u1161\u1105\u1161-\u1107\u1161\u11AF\u1109\u1162\u11BC\u1112\u1161\u11AB-\u1106\u116E\u11AB\u110C\u1166\u1103\u1173\u11AF",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u1100\u1175\u11AF\u110B\u1173\u11AF-\u1104\u1161\u1105\u1161-\u1107\u1161\u11AF\u1109\u1162\u11BC\u1112\u1161\u11AB-\u1106\u116E\u11AB\u110C\u1166\u1103\u1173\u11AF","aria-hidden":"true"},"#"),s(" \uAE38\uC744 \uB530\uB77C \uBC1C\uC0DD\uD55C \uBB38\uC81C\uB4E4")],-1),P=n("p",null,[n("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),j=o(`<p>jsPDF\uC5D0\uB294 \uC0C1\uC138\uD55C \uBB38\uC11C\uAC00 \uC788\uC5B4\uC11C \uBCC4\uB2E4\uB978 \uBB38\uC81C\uAC00 \uC5C6\uC5C8\uC5B4\uC694. \uD2B9\uC815 \uCEF4\uD3EC\uB10C\uD2B8\uB97C PDF \uD30C\uC77C\uB85C \uB2E4\uC6B4\uB85C\uB4DC\uD558\uB294 \uAC83\uC774 \uC81C \uC5C5\uBB34\uC600\uAE30 \uB54C\uBB38\uC5D0 html \uBA54\uC11C\uB4DC\uB97C \uC0AC\uC6A9\uD588\uC5B4\uC694 (\uB610\uB294 \uADF8\uB807\uAC8C \uC0DD\uAC01\uD588\uB358 \uAC70\uC8E0).</p><p>\uC544\uB798\uB294 \uBB38\uC11C\uC5D0\uC11C html \uBA54\uC11C\uB4DC \uC0AC\uC6A9 \uC608\uC2DC\uC785\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> doc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">jsPDF</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

doc<span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>body<span class="token punctuation">,</span> <span class="token punctuation">{</span>
   <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">doc</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     doc<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
   <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uCC98\uC74C\uC5D0\uB294 PDF \uD30C\uC77C\uC5D0\uC11C \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2A4\uCF00\uC77C\uB9C1\uACFC \uC704\uCE58 \uC870\uC815\uC744 \uC57D\uAC04 \uC870\uC815\uD558\uBA74 \uC798 \uC791\uB3D9\uD588\uC5B4\uC694. \uD558\uC9C0\uB9CC \uC800\uD76C \uD504\uB85C\uC81D\uD2B8\uC5D0 \uC0AC\uC6A9\uC790 \uC815\uC758 \uAE00\uAF34\uC774 \uC788\uC5B4\uC11C \uC774\uB97C PDF\uB85C \uC774\uAD00\uD558\uB294 \uAC83\uC774 \uCD94\uAC00 \uB178\uB825\uC774 \uD544\uC694\uD588\uB358 \uBB38\uC81C\uAC00 \uC788\uC5C8\uC5B4\uC694.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),x=n("p",null,"\uC774 \uBC29\uBC95\uC740 \uC0DD\uC131\uB41C HTML \uCF58\uD150\uCE20\uC758 \uC2A4\uD0C0\uC77C(\uAE00\uAF34 \uC81C\uC678)\uC744 PDF \uAD6C\uC870\uC5D0 \uC0AC\uC6A9\uD560 \uC218 \uC788\uAC8C \uD588\uC2B5\uB2C8\uB2E4. \uD558\uC9C0\uB9CC PDF \uD30C\uC77C \uC548\uC5D0 \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2A4\uD06C\uB9B0\uC0F7\uC744 \uB9CC\uB4E4\uC5B4 \uB123\uC744 \uAC83\uC73C\uB85C \uAE30\uB300\uD588\uB358 \uC81C \uC608\uC0C1\uACFC\uB294 \uC870\uAE08 \uB2EC\uB790\uC5B4\uC694.",-1),R=n("p",null,"\uC774 \uC2DC\uC810\uC5D0\uC11C, \uC81C \uC881\uC740 \uC0AC\uC6A9 \uC0AC\uB840\uB97C \uC704\uD574 \uB2E4\uB978 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uCC3E\uC544\uC57C \uD588\uC5B4\uC694.",-1),C=n("h1",{id:"react-to-pdf-\u110E\u1161\u11BD\u1100\u1175",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#react-to-pdf-\u110E\u1161\u11BD\u1100\u1175","aria-hidden":"true"},"#"),s(" react-to-pdf \uCC3E\uAE30")],-1),M=n("p",null,"\uC870\uC0AC\uB97C \uD55C \uACB0\uACFC, react-to-pdf\uB97C \uBC1C\uACAC\uD588\uC5B4\uC694. \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC758 \uC555\uCD95 \uD574\uC81C \uD06C\uAE30\uC640 \uC758\uC874\uC131 \uC591 \uB4F1\uC744 \uD655\uC778\uD558\uBA74\uC11C, \uC774\uAC83\uC744 \uC2DC\uB3C4\uD574\uBD10\uC57C\uACA0\uB2E4\uB294 \uC0DD\uAC01\uC774 \uB4E4\uC5C8\uC5B4\uC694.",-1),S=n("p",null,[n("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),B=n("p",null,[n("img",{src:r,alt:"\uC774\uBBF8\uC9C0"})],-1),E=n("p",null,"\uAD6C\uD604\uC5D0 \uB4E4\uC5B4\uAC00\uAE30 \uC804\uC5D0, react-to-pdf\uAC00 2\uAC1C\uC758 \uC885\uC18D\uC131\uB9CC \uC788\uB2E4\uB294 \uC0AC\uC2E4\uC744 \uC54C\uAC8C\uB3FC \uB180\uB77C\uC6E0\uC2B5\uB2C8\uB2E4. \uBC84\uC804 1.0.1\uC5D0\uC11C\uC758 \uC555\uCD95 \uD574\uC81C\uB41C \uD06C\uAE30\uB294 82.7 kB\uC785\uB2C8\uB2E4.",-1),N=n("p",null,[n("img",{src:d,alt:"\uC774\uBBF8\uC9C0"})],-1),T=n("p",null,"html2canvas\uC640 jsPDF\uB97C \uC0AC\uC6A9\uD558\uB294 \uB2E4\uC591\uD55C \uBC29\uBC95\uC744 \uC2DC\uB3C4\uD55C \uD6C4, \uC774 \uB450 \uAC00\uC9C0\uAC00 \uC81C\uAC00 \uCC3E\uB358 \uB2E8\uC21C\uD55C \uC885\uC18D\uC131\uC774\uB77C\uB294 \uAC83\uC744 \uAE68\uB2EC\uC558\uC2B5\uB2C8\uB2E4.",-1),H=n("p",null,[n("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),G=o(`<h1 id="react-to-pdf-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#react-to-pdf-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> react-to-pdf \uC0AC\uC6A9\uD558\uAE30</h1><p>react-to-pdf\uB97C yarn \uB610\uB294 npm\uC73C\uB85C \uC124\uCE58\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code># Yarn
yarn add react<span class="token operator">-</span>to<span class="token operator">-</span>pdf

# <span class="token constant">NPM</span>
npm install <span class="token operator">--</span>save react<span class="token operator">-</span>to<span class="token operator">-</span>pdf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PDF\uB294 \uCEF4\uD3EC\uB10C\uD2B8 \uC2A4\uD06C\uB9B0\uC0F7\uC5D0\uC11C \uC0DD\uC131\uB429\uB2C8\uB2E4. \uB610\uD55C, \uC11C\uBC84 \uCE21 \uB80C\uB354\uB9C1(SSR)\uC740 \uC9C0\uC6D0\uB418\uC9C0 \uC54A\uB294 \uC810\uC744 \uC720\uC758\uD574 \uC8FC\uC138\uC694. Next.js\uC640 \uAC19\uC740 \uD504\uB808\uC784\uC6CC\uD06C\uB85C \uAC1C\uBC1C \uC911\uC774\uB77C\uBA74 \uD074\uB77C\uC774\uC5B8\uD2B8 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C react-to-pdf\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),I=o(`<p>\uC0AC\uC6A9 \uBC29\uBC95\uC5D0\uB294 PDF\uB97C \uC0DD\uC131\uD558\uB294 \uB450 \uAC00\uC9C0 \uBC29\uBC95\uC774 \uC788\uC2B5\uB2C8\uB2E4: usePDF \uD6C5\uACFC react-to-pdf\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 \uAE30\uBCF8 \uD568\uC218\uB97C \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95\uC774 \uC788\uC2B5\uB2C8\uB2E4.</p><p>usePDF \uD6C5\uC744 \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> usePDF <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-to-pdf&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Component</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
   <span class="token keyword">const</span> <span class="token punctuation">{</span> toPDF<span class="token punctuation">,</span> targetRef <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">usePDF</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;page.pdf&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
         <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">toPDF</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>Download <span class="token constant">PDF</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
         <span class="token operator">&lt;</span>div ref<span class="token operator">=</span><span class="token punctuation">{</span>targetRef<span class="token punctuation">}</span><span class="token operator">&gt;</span>
            <span class="token constant">PDF</span>\uB85C \uC0DD\uC131\uD560 \uCEE8\uD150\uCE20
         <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
   <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uAE30\uBCF8 \uD568\uC218\uB97C \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4:</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),L=o(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> generatePDF <span class="token keyword">from</span> <span class="token string">&#39;react-to-pdf&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Component</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
   <span class="token keyword">const</span> targetRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
         <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">generatePDF</span><span class="token punctuation">(</span>targetRef<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;page.pdf&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
            <span class="token constant">PDF</span> \uB2E4\uC6B4\uB85C\uB4DC
         <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
         <span class="token operator">&lt;</span>div ref<span class="token operator">=</span><span class="token punctuation">{</span>targetRef<span class="token punctuation">}</span><span class="token operator">&gt;</span>
            <span class="token constant">PDF</span>\uC5D0 \uD3EC\uD568\uB420 \uB0B4\uC6A9
         <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
   <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uB354 \uB098\uC544\uAC00\uB824\uBA74 \uBA87 \uAC00\uC9C0 \uC635\uC158\uC744 \uC804\uB2EC\uD560 \uC218\uB3C4 \uC788\uC5B4\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> generatePDF<span class="token punctuation">,</span> <span class="token punctuation">{</span> Resolution<span class="token punctuation">,</span> Margin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-to-pdf&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token comment">// \uAE30\uBCF8\uC740 \`save\`</span>
   <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;open&#39;</span><span class="token punctuation">,</span>
   <span class="token comment">// \uAE30\uBCF8\uC740 Resolution.MEDIUM = 3\uC774\uACE0, \uB300\uBD80\uBD84 \uCDA9\uBD84\uD569\uB2C8\uB2E4. \uB354 \uB192\uC740 \uAC12\uC740 \uC774\uBBF8\uC9C0 \uD488\uC9C8\uC744 \uB192\uC774\uC9C0\uB9CC PDF \uD06C\uAE30\uB3C4 \uB298\uC5B4\uB098\uBBC0\uB85C \uC8FC\uC758\uD558\uC138\uC694.</span>
   <span class="token comment">// \uC5EC\uB7EC \uD398\uC774\uC9C0\uAC00 \uC0DD\uC131\uB420 \uB54C 10 \uC774\uC0C1\uC758 \uAC12\uC740 \uD398\uC774\uC9C0\uB97C \uB2E4\uC6B4\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</span>
   <span class="token literal-property property">resolution</span><span class="token operator">:</span> Resolution<span class="token punctuation">.</span><span class="token constant">HIGH</span><span class="token punctuation">,</span>
   <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// \uB9C8\uC9C4\uC740 MM \uAE30\uC900\uC774\uACE0, \uAE30\uBCF8\uAC12\uC740 Margin.NONE = 0</span>
      <span class="token literal-property property">margin</span><span class="token operator">:</span> Margin<span class="token punctuation">.</span><span class="token constant">SMALL</span><span class="token punctuation">,</span>
      <span class="token comment">// \uAE30\uBCF8\uC740 &#39;A4&#39;</span>
      <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;letter&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// \uAE30\uBCF8\uC740 &#39;portrait&#39;</span>
      <span class="token literal-property property">orientation</span><span class="token operator">:</span> <span class="token string">&#39;landscape&#39;</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token literal-property property">canvas</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// \uD06C\uAE30 \uC131\uB2A5\uC744 \uC704\uD574 \uAE30\uBCF8\uC740 &#39;image/jpeg&#39;</span>
      <span class="token literal-property property">mimeType</span><span class="token operator">:</span> <span class="token string">&#39;image/png&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">qualityRatio</span><span class="token operator">:</span> <span class="token number">1</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token comment">// jsPDF \uC778\uC2A4\uD134\uC2A4 \uBC0F html2canvas \uD568\uC218\uC5D0 \uC804\uB2EC\uB41C \uAC12\uC744 \uC0AC\uC6A9\uC790 \uC815\uC758\uD569\uB2C8\uB2E4.</span>
   <span class="token comment">// \uC694\uAC83\uC744 \uC0AC\uC6A9\uD574\uC57C \uD558\uB294 \uACBD\uC6B0\uB294 \uB4DC\uBB3C\uACE0 \uBB38\uC81C\uB97C \uC720\uBC1C\uD560 \uC218 \uC788\uC73C\uB2C8 \uC870\uC2EC\uD558\uC138\uC694.</span>
   <span class="token literal-property property">overrides</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// \uB354 \uB9CE\uC740 \uC635\uC158\uC740 https://artskydj.github.io/jsPDF/docs/jsPDF.html\uC744 \uCC38\uC870\uD558\uC138\uC694.</span>
      <span class="token literal-property property">pdf</span><span class="token operator">:</span> <span class="token punctuation">{</span>
         <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// \uB354 \uB9CE\uC740 \uC635\uC158\uC740 https://html2canvas.hertzen.com/configuration\uC744 \uCC38\uC870\uD558\uC138\uC694.</span>
      <span class="token literal-property property">canvas</span><span class="token operator">:</span> <span class="token punctuation">{</span>
         <span class="token literal-property property">useCORS</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// React refs \uB300\uC2E0\uC5D0 \uD0C0\uAE43 \uC694\uC18C\uB97C \uBC18\uD658\uD558\uB294 \uD568\uC218\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</span>
<span class="token keyword">const</span> <span class="token function-variable function">getTargetElement</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;content-id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Component</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
         <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">generatePDF</span><span class="token punctuation">(</span>getTargetElement<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
            <span class="token constant">PDF</span> \uC0DD\uC131
         <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
         <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;content-id&quot;</span><span class="token operator">&gt;</span>
            <span class="token constant">PDF</span>\uB85C \uC0DD\uC131\uB420 \uB0B4\uC6A9
         <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
   <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774\uAC83\uC740 Code Sandbox\uB97C \uD1B5\uD574 react-to-pdf \uBB38\uC11C\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 \uB370\uBAA8\uC785\uB2C8\uB2E4. \uC704\uC758 \uCF54\uB4DC \uBE14\uB85D\uB4E4\uB3C4 \uBB38\uC11C\uC5D0\uC11C \uAC00\uC838\uC654\uC74C\uC744 \uC5B8\uAE09\uD558\uACE0 \uC2F6\uAD70\uC694.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),q=o('<h1 id="\u1100\u1167\u11AF\u1105\u1169\u11AB" tabindex="-1"><a class="header-anchor" href="#\u1100\u1167\u11AF\u1105\u1169\u11AB" aria-hidden="true">#</a> \uACB0\uB860</h1><p>\uB2F9\uC2E0\uCC98\uB7FC, \uC0AC\uC6A9\uC790\uAC00 \uAD6C\uC131 \uC694\uC18C\uC5D0\uC11C \uC0DD\uC131\uB41C PDF \uD30C\uC77C\uC744 \uB2E4\uC6B4\uB85C\uB4DC\uD560 \uC218 \uC788\uC5B4\uC57C \uD560 \uB54C\uAC00 \uC788\uC744 \uAC83\uC785\uB2C8\uB2E4. \uB2E4\uB978 \uB9AC\uC18C\uC2A4\uB97C \uD655\uC778\uD560 \uB54C \uC774\uB97C \uC218\uD589\uD558\uB294 \uBA87 \uAC00\uC9C0 \uBC29\uBC95\uC774 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uC774 \uAE00\uC5D0\uC11C\uB294 \uAC00\uBCBC\uC6B4 \uAD6C\uC870\uC640 \uAC04\uD3B8\uD55C \uC0AC\uC6A9\uBC95\uC744 \uC120\uD638\uD558\uB294 react-to-pdf\uC5D0 \uCD08\uC810\uC744 \uB9DE\uCDC4\uC2B5\uB2C8\uB2E4. \uC774 \uAE00\uC774 \uC720\uC0AC\uD55C \uC791\uC5C5\uC744 \uC218\uD589\uD558\uB294 \uB370 \uB3C4\uC6C0\uC774 \uB418\uAE30\uB97C \uBC14\uB78D\uB2C8\uB2E4.</p><h1 id="\u1105\u1175\u1109\u1169\u1109\u1173" tabindex="-1"><a class="header-anchor" href="#\u1105\u1175\u1109\u1169\u1109\u1173" aria-hidden="true">#</a> \uB9AC\uC18C\uC2A4</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),V=n("ul",null,[n("li",null,"jsPDF \uBB38\uC11C"),n("li",null,"html2canvas \uBB38\uC11C"),n("li",null,"react-to-pdf GitHub \uD398\uC774\uC9C0")],-1);function A(O,U){return a(),c("div",null,[k,v,m,b,g,(a(),t(e("script"),null,{default:p(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),y,h,f,_,w,(a(),t(e("script"),null,{default:p(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),D,F,P,(a(),t(e("script"),null,{default:p(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),j,(a(),t(e("script"),null,{default:p(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),x,R,C,M,S,(a(),t(e("script"),null,{default:p(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),B,E,N,T,H,(a(),t(e("script"),null,{default:p(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),G,(a(),t(e("script"),null,{default:p(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),I,(a(),t(e("script"),null,{default:p(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),L,(a(),t(e("script"),null,{default:p(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),q,(a(),t(e("script"),null,{default:p(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),V])}var X=l(u,[["render",A],["__file","index.html.vue"]]);export{X as default};
