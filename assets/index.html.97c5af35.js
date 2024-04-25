import{_ as p}from"./app.3052dcfb.js";import{l as n,m as c,E as a,G as s,p as t,Y as e,K as o,C as l}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var i="/assets/LoadUnloadandBeforeUnloadEventListenersinReactSignificanceUseCasesBestPracticesandPitfalls_0.072e5a89.png";const u={},d=o('<h2 id="\u1105\u1169\u1103\u1173-\u110B\u1165\u11AB\u1105\u1169\u1103\u1173-\u1106\u1175\u11BE-beforeunload-\u110B\u1175\u1107\u1166\u11AB\u1110\u1173-\u1105\u1175\u1109\u1173\u1102\u1165\u1105\u1173\u11AF-\u1100\u116E\u1112\u1167\u11AB\u1112\u1161\u110B\u1167-\u1103\u1169\u11BC\u110C\u1165\u11A8\u110B\u1175\u1100\u1169-\u110B\u1175\u11AB\u1110\u1165\u1105\u1162\u11A8\u1110\u1175\u1107\u1173\u1112\u1161\u11AB-\u110B\u1170\u11B8-\u110B\u1162\u1111\u1173\u11AF\u1105\u1175\u110F\u1166\u110B\u1175\u1109\u1167\u11AB\u110B\u1173\u11AF-\u1106\u1161\u11AB\u1103\u1173\u11AF\u110B\u1165\u1107\u1169\u11B8\u1109\u1175\u1103\u1161-\u1111\u1166\u110B\u1175\u110C\u1175-\u1105\u1169\u1103\u1175\u11BC-\u110B\u1165\u11AB\u1105\u1169\u1103\u1175\u11BC-\u1106\u1175\u11BE-\u1103\u1166\u110B\u1175\u1110\u1165-\u1107\u1169\u1112\u1169\u1105\u1173\u11AF-\u1103\u1161\u1105\u116E\u1102\u1173\u11AB-\u1100\u1175\u1109\u116E\u11AF\u110B\u1173\u11AF-\u1106\u1161\u1109\u1173\u1110\u1165\u1112\u1162\u1107\u1169\u1109\u1166\u110B\u116D" tabindex="-1"><a class="header-anchor" href="#\u1105\u1169\u1103\u1173-\u110B\u1165\u11AB\u1105\u1169\u1103\u1173-\u1106\u1175\u11BE-beforeunload-\u110B\u1175\u1107\u1166\u11AB\u1110\u1173-\u1105\u1175\u1109\u1173\u1102\u1165\u1105\u1173\u11AF-\u1100\u116E\u1112\u1167\u11AB\u1112\u1161\u110B\u1167-\u1103\u1169\u11BC\u110C\u1165\u11A8\u110B\u1175\u1100\u1169-\u110B\u1175\u11AB\u1110\u1165\u1105\u1162\u11A8\u1110\u1175\u1107\u1173\u1112\u1161\u11AB-\u110B\u1170\u11B8-\u110B\u1162\u1111\u1173\u11AF\u1105\u1175\u110F\u1166\u110B\u1175\u1109\u1167\u11AB\u110B\u1173\u11AF-\u1106\u1161\u11AB\u1103\u1173\u11AF\u110B\u1165\u1107\u1169\u11B8\u1109\u1175\u1103\u1161-\u1111\u1166\u110B\u1175\u110C\u1175-\u1105\u1169\u1103\u1175\u11BC-\u110B\u1165\u11AB\u1105\u1169\u1103\u1175\u11BC-\u1106\u1175\u11BE-\u1103\u1166\u110B\u1175\u1110\u1165-\u1107\u1169\u1112\u1169\u1105\u1173\u11AF-\u1103\u1161\u1105\u116E\u1102\u1173\u11AB-\u1100\u1175\u1109\u116E\u11AF\u110B\u1173\u11AF-\u1106\u1161\u1109\u1173\u1110\u1165\u1112\u1162\u1107\u1169\u1109\u1166\u110B\u116D" aria-hidden="true">#</a> \uB85C\uB4DC, \uC5B8\uB85C\uB4DC \uBC0F beforeunload \uC774\uBCA4\uD2B8 \uB9AC\uC2A4\uB108\uB97C \uAD6C\uD604\uD558\uC5EC \uB3D9\uC801\uC774\uACE0 \uC778\uD130\uB799\uD2F0\uBE0C\uD55C \uC6F9 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uB9CC\uB4E4\uC5B4\uBD05\uC2DC\uB2E4. \uD398\uC774\uC9C0 \uB85C\uB529, \uC5B8\uB85C\uB529 \uBC0F \uB370\uC774\uD130 \uBCF4\uD638\uB97C \uB2E4\uB8E8\uB294 \uAE30\uC220\uC744 \uB9C8\uC2A4\uD130\uD574\uBCF4\uC138\uC694.</h2><p>\uB9AC\uC561\uD2B8 \uAC1C\uBC1C\uC758 \uC138\uACC4\uC5D0\uC11C \uC774\uBCA4\uD2B8 \uB9AC\uC2A4\uB108\uB294 \uB3D9\uC801\uC774\uACE0 \uC778\uD130\uB799\uD2F0\uBE0C\uD55C \uC6F9 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uB9CC\uB4DC\uB294 \uB370 \uC911\uC694\uD55C \uC5ED\uD560\uC744 \uD569\uB2C8\uB2E4. \uC5EC\uB7EC \uC774\uBCA4\uD2B8 \uB9AC\uC2A4\uB108 \uAC00\uC6B4\uB370 &quot;\uB85C\uB4DC(load)&quot;, &quot;\uC5B8\uB85C\uB4DC(unload)&quot;, &quot;beforeunload&quot; \uC774\uBCA4\uD2B8\uAC00 \uD2B9\uD788 \uC911\uC694\uD569\uB2C8\uB2E4. \uC774 \uAE00\uC5D0\uC11C\uB294 \uB9AC\uC561\uD2B8\uC5D0\uC11C \uC774\uB7EC\uD55C \uC774\uBCA4\uD2B8 \uB9AC\uC2A4\uB108\uC758 \uC911\uC694\uC131\uC744 \uD0D0\uAD6C\uD558\uACE0, \uCD5C\uC801\uC758 \uC0AC\uC6A9 \uC2DC\uB098\uB9AC\uC624\uB97C \uB17C\uC758\uD558\uBA70, \uAD6C\uD604\uC744 \uC704\uD55C \uCF54\uB4DC \uC2A4\uB2C8\uD3AB\uC744 \uC81C\uACF5\uD558\uACE0, \uC0AC\uC6A9 \uC2DC\uC758 \uBAA8\uBCA0\uC2A4\uD2B8 \uD504\uB799\uD2F0\uC2A4\uB97C \uAC15\uC870\uD560 \uAC83\uC785\uB2C8\uB2E4. \uAC8C\uB2E4\uAC00, \uC774\uBCA4\uD2B8 \uB9AC\uC2A4\uB108\uC640 useEffect \uD6C5 \uC0AC\uC774\uC758 \uC8FC\uC694 \uCC28\uC774\uC810\uC744 \uC0B4\uD3B4\uBCFC \uAC83\uC785\uB2C8\uB2E4. \uD568\uAED8 \uC774\uBCA4\uD2B8 \uB9AC\uC2A4\uB108\uC758 \uC7A0\uC7AC\uB825\uC744 \uBC1C\uACAC\uD574\uBCF4\uC138\uC694.</p><p><img src="'+i+'" alt="\uB85C\uB4DC, \uC5B8\uB85C\uB4DC \uBC0F beforeunload \uC774\uBCA4\uD2B8 \uB9AC\uC2A4\uB108\uC758 \uC911\uC694\uC131, \uC0AC\uC6A9 \uC0AC\uB840, \uBAA8\uBCA0\uC2A4\uD2B8 \uD504\uB799\uD2F0\uC2A4 \uBC0F \uD568\uC815"></p><h2 id="\u1105\u1169\u1103\u1173-\u110B\u1175\u1107\u1166\u11AB\u1110\u1173-\u1105\u1175\u1109\u1173\u1102\u1165" tabindex="-1"><a class="header-anchor" href="#\u1105\u1169\u1103\u1173-\u110B\u1175\u1107\u1166\u11AB\u1110\u1173-\u1105\u1175\u1109\u1173\u1102\u1165" aria-hidden="true">#</a> \uB85C\uB4DC \uC774\uBCA4\uD2B8 \uB9AC\uC2A4\uB108:</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),r=o(`<p>\u201C\uB85C\uB4DC\u201D \uC774\uBCA4\uD2B8 \uB9AC\uC2A4\uB108\uB294 \uC774\uBBF8\uC9C0, \uC2A4\uD06C\uB9BD\uD2B8 \uB610\uB294 \uC804\uCCB4 \uBB38\uC11C\uC640 \uAC19\uC740 \uC694\uC18C\uAC00 \uB85C\uB4DC\uB97C \uC644\uB8CC\uD588\uC744 \uB54C \uD2B8\uB9AC\uAC70\uB429\uB2C8\uB2E4. \uC774\uB294 \uD398\uC774\uC9C0\uC758 \uBAA8\uB4E0 \uC790\uC0B0\uC774 \uC644\uC804\uD788 \uB85C\uB4DC\uB41C \uD6C4\uC5D0 \uB3D9\uC791\uC744 \uC218\uD589\uD558\uB294 \uB370 \uC77C\uBC18\uC801\uC73C\uB85C \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uC77C\uBD80 \uC911\uC694\uD55C \uC0AC\uC6A9 \uC0AC\uB840\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4:</p><ul><li>\uBAA8\uB4E0 \uC774\uBBF8\uC9C0\uAC00\uB85C\uB4DC \uB420 \uB54C\uAE4C\uC9C0 \uB85C\uB529 \uC2A4\uD53C\uB108\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.</li><li>API\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uAC00\uC838 \uC640 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uB9C8\uC6B4\uD2B8\uB41C \uD6C4 \uCEF4\uD3EC\uB10C\uD2B8 \uC0C1\uD0DC\uB97C \uC5C5\uB370\uC774\uD2B8\uD569\uB2C8\uB2E4.</li><li>\uC804\uCCB4 \uBB38\uC11C \uC900\uBE44\uAC00 \uD544\uC694\uD55C \uC678\uBD80 \uB77C\uC774\uBE0C\uB7EC\uB9AC \uB610\uB294 \uB9AC\uC18C\uC2A4 \uCD08\uAE30\uD654\uC785\uB2C8\uB2E4.</li></ul><h2 id="\u1105\u1169\u1103\u1173-\u110B\u1175\u1107\u1166\u11AB\u1110\u1173\u1105\u1173\u11AF-\u110B\u1171\u1112\u1161\u11AB-react-\u110F\u1169\u1103\u1173-\u1109\u1173\u1102\u1175\u1111\u1166\u11BA" tabindex="-1"><a class="header-anchor" href="#\u1105\u1169\u1103\u1173-\u110B\u1175\u1107\u1166\u11AB\u1110\u1173\u1105\u1173\u11AF-\u110B\u1171\u1112\u1161\u11AB-react-\u110F\u1169\u1103\u1173-\u1109\u1173\u1102\u1175\u1111\u1166\u11BA" aria-hidden="true">#</a> \uB85C\uB4DC \uC774\uBCA4\uD2B8\uB97C \uC704\uD55C React \uCF54\uB4DC \uC2A4\uB2C8\uD3AB:</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">MyComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">handleLoad</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uC644\uC804\uD788\uB85C\uB4DC\uB41C \uD6C4 \uB3D9\uC791 \uC218\uD589</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;load&#39;</span><span class="token punctuation">,</span> handleLoad<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;load&#39;</span><span class="token punctuation">,</span> handleLoad<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>\uB0B4 \uCEF4\uD3EC\uB10C\uD2B8<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),k=o('<h2 id="\u1111\u1166\u110B\u1175\u110C\u1175-\u110B\u1165\u11AB\u1105\u1169\u1103\u1173-\u110B\u1175\u1107\u1166\u11AB\u1110\u1173-\u1105\u1175\u1109\u1173\u1102\u1165" tabindex="-1"><a class="header-anchor" href="#\u1111\u1166\u110B\u1175\u110C\u1175-\u110B\u1165\u11AB\u1105\u1169\u1103\u1173-\u110B\u1175\u1107\u1166\u11AB\u1110\u1173-\u1105\u1175\u1109\u1173\u1102\u1165" aria-hidden="true">#</a> \uD398\uC774\uC9C0 \uC5B8\uB85C\uB4DC \uC774\uBCA4\uD2B8 \uB9AC\uC2A4\uB108:</h2><p>\uC0AC\uC6A9\uC790\uAC00 \uD398\uC774\uC9C0\uB97C \uBC97\uC5B4\uB098\uAC70\uB098 \uCC3D\uC744 \uB2EB\uC744 \uB54C &quot;unload&quot; \uC774\uBCA4\uD2B8 \uB9AC\uC2A4\uB108\uAC00 \uD2B8\uB9AC\uAC70\uB429\uB2C8\uB2E4. \uC774 \uC774\uBCA4\uD2B8\uB294 \uBCF4\uD1B5 \uB9AC\uC18C\uC2A4 \uC815\uB9AC, \uC0AC\uC6A9\uC790 \uB370\uC774\uD130 \uC800\uC7A5 \uB610\uB294 \uD398\uC774\uC9C0\uAC00 \uC5B8\uB85C\uB4DC\uB418\uAE30 \uC804\uC5D0 \uCD5C\uC885 \uC791\uC5C5\uC744 \uC218\uD589\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uBA87 \uAC00\uC9C0 \uC8FC\uC694 \uC0AC\uC6A9 \uC0AC\uB840\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4:</p><ul><li>\uC0AC\uC6A9\uC790 \uC785\uB825 \uB610\uB294 \uD3FC \uB370\uC774\uD130\uB97C \uBC31\uC5D4\uB4DC \uC11C\uBC84\uC5D0 \uC800\uC7A5\uD569\uB2C8\uB2E4.</li><li>\uBA54\uBAA8\uB9AC \uB204\uC218\uB97C \uBC29\uC9C0\uD558\uAE30 \uC704\uD574 \uC774\uBCA4\uD2B8 \uB9AC\uC2A4\uB108\uB098 \uD0C0\uC774\uBA38\uB97C \uC815\uB9AC\uD569\uB2C8\uB2E4.</li><li>\uD398\uC774\uC9C0 \uC885\uB8CC \uC2DC \uC0AC\uC6A9\uC790 \uD589\uB3D9\uC744 \uCD94\uC801\uD558\uAC70\uB098 \uBD84\uC11D \uC774\uBCA4\uD2B8\uB97C \uD2B8\uB9AC\uAC70\uD569\uB2C8\uB2E4.</li></ul><h2 id="\u110B\u1165\u11AB\u1105\u1169\u1103\u1173-\u110B\u1175\u1107\u1166\u11AB\u1110\u1173\u110B\u1166-\u1103\u1162\u1112\u1161\u11AB-react-\u110F\u1169\u1103\u1173-\u1109\u1173\u1102\u1175\u1111\u1166\u11BA" tabindex="-1"><a class="header-anchor" href="#\u110B\u1165\u11AB\u1105\u1169\u1103\u1173-\u110B\u1175\u1107\u1166\u11AB\u1110\u1173\u110B\u1166-\u1103\u1162\u1112\u1161\u11AB-react-\u110F\u1169\u1103\u1173-\u1109\u1173\u1102\u1175\u1111\u1166\u11BA" aria-hidden="true">#</a> \uC5B8\uB85C\uB4DC \uC774\uBCA4\uD2B8\uC5D0 \uB300\uD55C React \uCF54\uB4DC \uC2A4\uB2C8\uD3AB:</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),v=o(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">MyComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">handleUnload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uC5B8\uB85C\uB4DC\uB418\uAE30 \uC804\uC5D0 \uC791\uC5C5\uC744 \uC218\uD589\uD569\uB2C8\uB2E4.</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;unload&#39;</span><span class="token punctuation">,</span> handleUnload<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;unload&#39;</span><span class="token punctuation">,</span> handleUnload<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>\uB0B4 \uCEF4\uD3EC\uB10C\uD2B8<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="the-beforeunload-\u110B\u1175\u1107\u1166\u11AB\u1110\u1173-\u1105\u1175\u1109\u1173\u1102\u1165" tabindex="-1"><a class="header-anchor" href="#the-beforeunload-\u110B\u1175\u1107\u1166\u11AB\u1110\u1173-\u1105\u1175\u1109\u1173\u1102\u1165" aria-hidden="true">#</a> The BeforeUnload \uC774\uBCA4\uD2B8 \uB9AC\uC2A4\uB108:</h2><p>\u201Cbeforeunload\u201D \uC774\uBCA4\uD2B8 \uB9AC\uC2A4\uB108\uB294 \uC0AC\uC6A9\uC790\uAC00 \uD398\uC774\uC9C0\uB97C \uB5A0\uB098\uB824\uACE0 \uD558\uAC70\uB098, \uCC3D\uC744 \uB2EB\uAC70\uB098, \uD398\uC774\uC9C0\uB97C \uC0C8\uB85C \uACE0\uCE60 \uB54C \uD2B8\uB9AC\uAC70\uB429\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574 \uAC1C\uBC1C\uC790\uB294 \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uB370\uC774\uD130\uC758 \uC2E4\uC218\uC801 \uC190\uC2E4\uC744 \uBC29\uC9C0\uD558\uAE30 \uC704\uD574 \uD655\uC778 \uB300\uD654\uC0C1\uC790\uB97C \uC81C\uACF5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC77C\uBD80 \uC911\uC694\uD55C \uC0AC\uC6A9 \uC0AC\uB840\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4:</p><ul><li>\uC0AC\uC6A9\uC790\uAC00 \uD398\uC774\uC9C0\uB97C \uB5A0\uB098\uAE30 \uC804\uC5D0 \uD655\uC778 \uBA54\uC2DC\uC9C0\uB97C \uD45C\uC2DC\uD558\uAE30.</li><li>\uC800\uC7A5\uB418\uC9C0 \uC54A\uC740 \uBCC0\uACBD \uC0AC\uD56D\uC744 \uC800\uC7A5\uD558\uAC70\uB098 \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uC591\uC2DD \uC81C\uCD9C\uC744 \uC694\uCCAD\uD558\uAE30.</li><li>\uC0AC\uC6A9\uC790 \uC785\uB825\uC774\uB098 \uB370\uC774\uD130\uC758 \uC2E4\uC218\uC801 \uC190\uC2E4 \uBC29\uC9C0\uD558\uAE30.</li></ul><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),f=o(`<h2 id="beforeunload-\u110B\u1175\u1107\u1166\u11AB\u1110\u1173\u110B\u116D\u11BC-\u1105\u1175\u110B\u1162\u11A8\u1110\u1173-\u110F\u1169\u1103\u1173-\u1109\u1173\u1102\u1175\u1111\u1166\u11BA" tabindex="-1"><a class="header-anchor" href="#beforeunload-\u110B\u1175\u1107\u1166\u11AB\u1110\u1173\u110B\u116D\u11BC-\u1105\u1175\u110B\u1162\u11A8\u1110\u1173-\u110F\u1169\u1103\u1173-\u1109\u1173\u1102\u1175\u1111\u1166\u11BA" aria-hidden="true">#</a> BeforeUnload \uC774\uBCA4\uD2B8\uC6A9 \uB9AC\uC561\uD2B8 \uCF54\uB4DC \uC2A4\uB2C8\uD3AB:</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">MyComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">handleBeforeUnload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uC5B8\uB85C\uB4DC\uB418\uAE30 \uC804\uC5D0 \uC791\uC5C5 \uC218\uD589</span>
      event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      event<span class="token punctuation">.</span>returnValue <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;beforeunload&#39;</span><span class="token punctuation">,</span> handleBeforeUnload<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;beforeunload&#39;</span><span class="token punctuation">,</span> handleBeforeUnload<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>\uB0B4 \uCEF4\uD3EC\uB10C\uD2B8<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1100\u116F\u11AB\u110C\u1161\u11BC-\u1109\u1161\u1112\u1161\u11BC-\u1106\u1175\u11BE-\u1111\u1175\u1112\u1162\u110B\u1163-\u1112\u1161\u11AF-\u1100\u1165\u11BA\u1103\u1173\u11AF" tabindex="-1"><a class="header-anchor" href="#\u1100\u116F\u11AB\u110C\u1161\u11BC-\u1109\u1161\u1112\u1161\u11BC-\u1106\u1175\u11BE-\u1111\u1175\u1112\u1162\u110B\u1163-\u1112\u1161\u11AF-\u1100\u1165\u11BA\u1103\u1173\u11AF" aria-hidden="true">#</a> \uAD8C\uC7A5 \uC0AC\uD56D \uBC0F \uD53C\uD574\uC57C \uD560 \uAC83\uB4E4:</h2><ul><li>\uC5B4\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uCD94\uAC00 \uBCF5\uC7A1\uC131\uC744 \uCD08\uB798\uD560 \uC218 \uC788\uC73C\uBBC0\uB85C \uAC00\uB2A5\uD55C \uACBD\uC6B0\uC5D0\uB9CC \uC774\uBCA4\uD2B8 \uB9AC\uC2A4\uB108\uB97C \uC0AC\uC6A9\uD558\uC138\uC694.</li><li>\uBA54\uBAA8\uB9AC \uB204\uCD9C\uC744 \uBC29\uC9C0\uD558\uAE30 \uC704\uD574 useEffect \uD6C5\uC758 \uC815\uB9AC \uD568\uC218\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC774\uBCA4\uD2B8 \uB9AC\uC2A4\uB108\uB97C \uC815\uB9AC\uD558\uC138\uC694.</li><li>\uC774\uBCA4\uD2B8 \uB9AC\uC2A4\uB108 \uCF5C\uBC31 \uB0B4\uC5D0\uC11C \uBB34\uAC70\uC6B4 \uACC4\uC0B0 \uB610\uB294 \uB124\uD2B8\uC6CC\uD06C \uC694\uCCAD\uC744 \uC218\uD589\uD558\uB294 \uAC83\uC744 \uD53C\uD558\uC138\uC694. \uC774\uB294 \uC131\uB2A5\uACFC \uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC5D0 \uC601\uD5A5\uC744 \uC904 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</li><li>&quot;beforeunload&quot; \uC774\uBCA4\uD2B8\uB97C \uC0AC\uC6A9\uD560 \uB54C \uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC774 \uBA85\uD655\uD558\uACE0 \uAC04\uACB0\uD55C\uC9C0 \uD655\uC778\uD558\uC138\uC694. \uC9C0\uB098\uCE58\uAC70\uB098 \uC624\uD574\uB97C \uC77C\uC73C\uD0AC \uC218 \uC788\uB294 \uD504\uB86C\uD504\uD2B8\uB294 \uC0AC\uC6A9\uC790\uB97C \uB2F5\uB2F5\uD558\uAC8C \uB9CC\uB4E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</li><li>\uD638\uD658\uC131\uACFC \uC77C\uAD00\uB41C \uB3D9\uC791\uC744 \uBCF4\uC7A5\uD558\uAE30 \uC704\uD574 \uB2E4\uC591\uD55C \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uC774\uBCA4\uD2B8 \uB9AC\uC2A4\uB108\uB97C \uD14C\uC2A4\uD2B8\uD558\uC138\uC694.</li></ul><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),b=o('<h2 id="useeffect\u110B\u116A\u110B\u1174-\u110E\u1161\u110B\u1175\u110C\u1165\u11B7" tabindex="-1"><a class="header-anchor" href="#useeffect\u110B\u116A\u110B\u1174-\u110E\u1161\u110B\u1175\u110C\u1165\u11B7" aria-hidden="true">#</a> useEffect\uC640\uC758 \uCC28\uC774\uC810:</h2><p>\u201Cload,\u201D \u201Cunload,\u201D \uBC0F \u201Cbeforeunload\u201D \uC774\uBCA4\uD2B8 \uB9AC\uC2A4\uB108\uB294 \uD398\uC774\uC9C0 \uB85C\uB529 \uBC0F \uC5B8\uB85C\uB529\uACFC \uAD00\uB828\uB41C \uD2B9\uC815 \uAE30\uB2A5\uC744 \uC81C\uACF5\uD558\uC9C0\uB9CC, React\uC758 useEffect \uD6C5\uC740 \uB354 \uB2E4\uC591\uD55C \uC811\uADFC \uBC29\uC2DD\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. useEffect\uB97C \uC0AC\uC6A9\uD558\uBA74 \uCEF4\uD3EC\uB10C\uD2B8 \uB9C8\uC6B4\uD2B8, \uC5C5\uB370\uC774\uD2B8 \uBC0F \uC5B8\uB9C8\uC6B4\uD2B8 \uC2DC \uCF54\uB4DC \uC2E4\uD589\uC744 \uD3EC\uD568\uD55C \uC5EC\uB7EC \uC0AC\uC774\uB4DC \uC774\uD399\uD2B8\uB97C \uCC98\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB294 \uCEF4\uD3EC\uB10C\uD2B8 \uB0B4\uC5D0\uC11C \uC5EC\uB7EC \uC774\uBCA4\uD2B8 \uB9AC\uC2A4\uB108 \uBC0F \uB2E4\uB978 \uC0AC\uC774\uB4DC \uC774\uD399\uD2B8\uB97C \uAD00\uB9AC\uD558\uB294 \uD1B5\uD569 \uC194\uB8E8\uC158\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.</p><h2 id="\u110B\u116D\u110B\u1163\u11A8" tabindex="-1"><a class="header-anchor" href="#\u110B\u116D\u110B\u1163\u11A8" aria-hidden="true">#</a> \uC694\uC57D:</h2><p>React \uAC1C\uBC1C\uC5D0\uC11C \uC911\uC694\uD55C \uB3C4\uAD6C\uC778 \uB85C\uB4DC, \uC5B8\uB85C\uB4DC, \uADF8\uB9AC\uACE0 beforeunload \uC774\uBCA4\uD2B8 \uB9AC\uC2A4\uB108\uB294 \uC0AC\uC6A9\uC790 \uC0C1\uD638\uC791\uC6A9\uC744 \uD5A5\uC0C1\uC2DC\uD0A4\uACE0, \uC790\uC6D0 \uAD00\uB9AC\uB97C \uCC98\uB9AC\uD558\uBA70, \uB370\uC774\uD130\uC758 \uC2E4\uC218 \uC190\uC2E4\uC744 \uBC29\uC9C0\uD558\uB294 \uB370 \uC720\uC6A9\uD569\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uC774\uBCA4\uD2B8 \uB9AC\uC2A4\uB108\uC758 \uC911\uC694\uC131, \uCD5C\uC120\uC758 \uC2E4\uCC9C \uBC29\uBC95 \uBC0F \uC0AC\uC6A9 \uC0AC\uB840\uB97C \uC774\uD574\uD558\uBA74 React \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uC774 \uC774\uBCA4\uD2B8 \uB9AC\uC2A4\uB108\uB97C \uD6A8\uACFC\uC801\uC73C\uB85C \uD65C\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. useEffect \uD6C5\uC758 \uC801\uC808\uD55C \uC0AC\uC6A9\uC744 \uACE0\uB824\uD558\uC5EC \uC0AC\uC6A9\uC790 \uACBD\uD5D8, \uC131\uB2A5 \uC601\uD5A5 \uBC0F \uC801\uC808\uD55C \uC0AC\uC6A9\uC744 \uACE0\uB824\uD560 \uB54C \uC870\uC2EC\uC2A4\uB7FD\uAC8C \uC0AC\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4. \uC990\uAC70\uC6B4 \uCF54\uB529 \uB418\uC138\uC694!</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),h=l("p",null,"\uC704\uC758 \uAE00\uC774 \uC870\uAE08\uC774\uB098\uB9C8 \uC774\uD574\uC5D0 \uB3C4\uC6C0\uC774 \uB418\uC5C8\uC73C\uBA74 \uC88B\uACA0\uC5B4\uC694. \uC774 \uAE00\uC5D0\uC11C \uB2E4\uB8EC \uB0B4\uC6A9\uC774\uB098 \uAC1C\uC120\uD560 \uBD80\uBD84\uC5D0 \uB300\uD574 \uC9C8\uBB38\uC774 \uC788\uAC70\uB098 \uC758\uACAC\uC744 \uC8FC\uACE0 \uC2F6\uC740 \uC810\uC774 \uC788\uB2E4\uBA74 \uC5B8\uC81C\uB4E0\uC9C0 \uC544\uB798 \uB313\uAE00\uB85C \uB0A8\uACA8\uC8FC\uC138\uC694.",-1);function m(g,y){return n(),c("div",null,[d,(n(),a(e("script"),null,{default:s(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),r,(n(),a(e("script"),null,{default:s(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),k,(n(),a(e("script"),null,{default:s(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),v,(n(),a(e("script"),null,{default:s(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),f,(n(),a(e("script"),null,{default:s(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b,(n(),a(e("script"),null,{default:s(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),h])}var U=p(u,[["render",m],["__file","index.html.vue"]]);export{U as default};