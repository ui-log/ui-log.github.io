import{_ as o}from"./app.d68f74da.js";import{l as n,m as l,E as a,G as t,p,Y as e,K as s}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const c={},i=s('<h1 id="\u1109\u1169\u1100\u1162" tabindex="-1"><a class="header-anchor" href="#\u1109\u1169\u1100\u1162" aria-hidden="true">#</a> \uC18C\uAC1C</h1><p>\uC6F9 \uAC1C\uBC1C\uC758 \uB3D9\uC801 \uC138\uACC4\uC5D0\uC11C \uC6B0\uC544\uD558\uACE0 \uBC18\uC751 \uD615 \uB124\uBE44\uAC8C\uC774\uC158 \uBC14\uB97C \uC0DD\uC131\uD558\uB294 \uAC83\uC740 \uC0AC\uC6A9\uC790 \uCE5C\uD654\uC801 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uB514\uC790\uC778\uD558\uB294 \uAE30\uBCF8 \uC801\uC778 \uCE21\uBA74\uC785\uB2C8\uB2E4. \uC774 \uD29C\uD1A0\uB9AC\uC5BC\uC5D0\uC11C\uB294 \uAC15\uB825\uD55C Tailwind CSS\uC640 React Icons\uC758 \uC870\uD569\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC138\uB828\uB418\uACE0 \uB2E4\uC7AC\uB2E4\uB2A5\uD55C \uB124\uBE44\uAC8C\uC774\uC158 \uBC14\uB97C \uAD6C\uCD95\uD558\uB294 \uACFC\uC815\uC744 \uC54C\uC544\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uC774 \uB124\uBE44\uAC8C\uC774\uC158 \uBC14\uB294 \uADC0\uD558\uC758 \uC751\uC6A9 \uD504\uB85C\uADF8\uB7A8\uC758 \uC2DC\uAC01\uC801 \uB9E4\uB825\uC744 \uD5A5\uC0C1\uC2DC\uD0A4\uB294\uB370 \uADF8\uCE58\uC9C0 \uC54A\uACE0 \uB2E4\uC591\uD55C \uD654\uBA74 \uD06C\uAE30\uC5D0 \uB9E4\uB044\uB7FD\uAC8C \uC801\uC751\uD558\uC5EC \uCD5C\uC801\uC758 \uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC744 \uC81C\uACF5\uD560 \uAC83\uC785\uB2C8\uB2E4.</p><h1 id="\u1109\u1175\u110C\u1161\u11A8\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1109\u1175\u110C\u1161\u11A8\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uC2DC\uC791\uD558\uAE30</h1><p>\uB124\uBE44\uAC8C\uC774\uC158 \uBC14 \uC791\uC131 \uC5EC\uC815\uC744 \uC2DC\uC791\uD558\uAE30 \uC804\uC5D0, \uD504\uB85C\uC81D\uD2B8\uAC00 \uD544\uC694\uD55C \uB3C4\uAD6C\uB85C \uC7A5\uCC29\uB418\uC5B4 \uC788\uB294\uC9C0 \uD655\uC778\uD574 \uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uB2E4\uC74C \uBA85\uB839\uC5B4\uB97C \uC0AC\uC6A9\uD558\uC5EC Tailwind CSS\uC640 React Icons\uB97C \uC124\uCE58\uD574 \uC8FC\uC138\uC694:</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),r=s(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code># Tailwind <span class="token constant">CSS</span> \uC124\uCE58\uD558\uAE30
npm install tailwindcss

# React Icons \uC124\uCE58\uD558\uAE30
npm install react<span class="token operator">-</span>icons
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u1102\u1166\u1107\u1175\u1100\u1166\u110B\u1175\u1109\u1167\u11AB-\u1107\u1161-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-\u1100\u116E\u1109\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1102\u1166\u1107\u1175\u1100\u1166\u110B\u1175\u1109\u1167\u11AB-\u1107\u1161-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-\u1100\u116E\u1109\u1165\u11BC" aria-hidden="true">#</a> \uB124\uBE44\uAC8C\uC774\uC158 \uBC14 \uCEF4\uD3EC\uB10C\uD2B8 \uAD6C\uC131</h1><p>\uC790, \uC774\uC81C \uD29C\uD1A0\uB9AC\uC5BC \uD575\uC2EC\uC778 \uB124\uBE44\uAC8C\uC774\uC158 \uBC14 \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC0B4\uD3B4\uBD05\uC2DC\uB2E4.</p><h1 id="\u1102\u1166\u1107\u1175\u1100\u1166\u110B\u1175\u1109\u1167\u11AB-\u1107\u1161-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-navbar-jsx" tabindex="-1"><a class="header-anchor" href="#\u1102\u1166\u1107\u1175\u1100\u1166\u110B\u1175\u1109\u1167\u11AB-\u1107\u1161-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-navbar-jsx" aria-hidden="true">#</a> \uB124\uBE44\uAC8C\uC774\uC158 \uBC14 \uCEF4\uD3EC\uB10C\uD2B8 (Navbar.jsx)</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),u=s(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AiOutlineClose<span class="token punctuation">,</span> AiOutlineMenu <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-icons/ai&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Navbar</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \uC0C1\uD0DC\uB97C \uAD00\uB9AC\uD558\uB294 useState \uD6C5</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>nav<span class="token punctuation">,</span> setNav<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \uB124\uBE44\uAC8C\uC774\uC158 \uBC14 \uD45C\uC2DC\uB97C \uB2F4\uB2F9\uD558\uB294 \uD1A0\uAE00 \uD568\uC218</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleNav</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setNav</span><span class="token punctuation">(</span><span class="token operator">!</span>nav<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// \uB124\uBE44\uAC8C\uC774\uC158 \uD56D\uBAA9\uC744 \uB2F4\uC740 \uBC30\uC5F4</span>
  <span class="token keyword">const</span> navItems <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\uD648&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\uD68C\uC0AC&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\uC790\uB8CC&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\uC18C\uAC1C&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\uBB38\uC758&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&#39;bg-black flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white&#39;</span><span class="token operator">&gt;</span>
      <span class="token punctuation">{</span><span class="token comment">/* \uB85C\uACE0 */</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>h1 className<span class="token operator">=</span><span class="token string">&#39;w-full text-3xl font-bold text-[#00df9a]&#39;</span><span class="token operator">&gt;</span>\uB9AC\uC561\uD2B8<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>

      <span class="token punctuation">{</span><span class="token comment">/* \uB370\uC2A4\uD06C\uD1B1 \uB124\uBE44\uAC8C\uC774\uC158 */</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>ul className<span class="token operator">=</span><span class="token string">&#39;hidden md:flex&#39;</span><span class="token operator">&gt;</span>
        <span class="token punctuation">{</span>navItems<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>li
            key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">}</span>
            className<span class="token operator">=</span><span class="token string">&#39;p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black&#39;</span>
          <span class="token operator">&gt;</span>
            <span class="token punctuation">{</span>item<span class="token punctuation">.</span>text<span class="token punctuation">}</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>

      <span class="token punctuation">{</span><span class="token comment">/* \uBAA8\uBC14\uC77C \uB124\uBE44\uAC8C\uC774\uC158 \uC544\uC774\uCF58 */</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>div onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleNav<span class="token punctuation">}</span> className<span class="token operator">=</span><span class="token string">&#39;block md:hidden&#39;</span><span class="token operator">&gt;</span>
        <span class="token punctuation">{</span>nav <span class="token operator">?</span> <span class="token operator">&lt;</span>AiOutlineClose size<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">20</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span> <span class="token operator">:</span> <span class="token operator">&lt;</span>AiOutlineMenu size<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">20</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

      <span class="token punctuation">{</span><span class="token comment">/* \uBAA8\uBC14\uC77C \uB124\uBE44\uAC8C\uC774\uC158 \uBA54\uB274 */</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>ul
        className<span class="token operator">=</span><span class="token punctuation">{</span>
          nav
            <span class="token operator">?</span> <span class="token string">&#39;fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500&#39;</span>
            <span class="token operator">:</span> <span class="token string">&#39;ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token operator">&gt;</span>
        <span class="token punctuation">{</span><span class="token comment">/* \uBAA8\uBC14\uC77C \uB85C\uACE0 */</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>h1 className<span class="token operator">=</span><span class="token string">&#39;w-full text-3xl font-bold text-[#00df9a] m-4&#39;</span><span class="token operator">&gt;</span>\uB9AC\uC561\uD2B8<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>

        <span class="token punctuation">{</span><span class="token comment">/* \uBAA8\uBC14\uC77C \uB124\uBE44\uAC8C\uC774\uC158 \uD56D\uBAA9 */</span><span class="token punctuation">}</span>
        <span class="token punctuation">{</span>navItems<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>li
            key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">}</span>
            className<span class="token operator">=</span><span class="token string">&#39;p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600&#39;</span>
          <span class="token operator">&gt;</span>
            <span class="token punctuation">{</span>item<span class="token punctuation">.</span>text<span class="token punctuation">}</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Navbar<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u1102\u1166\u1107\u1175\u1100\u1166\u110B\u1175\u1109\u1167\u11AB\u1107\u1161\u1105\u1173\u11AF-\u110B\u1162\u11B8\u110B\u1166-\u1110\u1169\u11BC\u1112\u1161\u11B8\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1102\u1166\u1107\u1175\u1100\u1166\u110B\u1175\u1109\u1167\u11AB\u1107\u1161\u1105\u1173\u11AF-\u110B\u1162\u11B8\u110B\u1166-\u1110\u1169\u11BC\u1112\u1161\u11B8\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uB124\uBE44\uAC8C\uC774\uC158\uBC14\uB97C \uC571\uC5D0 \uD1B5\uD569\uD558\uAE30</h1><p>\uC900\uBE44\uB41C Navbar \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC8FC \uC571 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0 \uC190\uC27D\uAC8C \uD1B5\uD569\uD574\uBD05\uC2DC\uB2E4.</p><h1 id="\u110B\u1162\u11B8-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-app-js" tabindex="-1"><a class="header-anchor" href="#\u110B\u1162\u11B8-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-app-js" aria-hidden="true">#</a> \uC571 \uCEF4\uD3EC\uB10C\uD2B8 (app.js)\`\`\`</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),d=s(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Navbar <span class="token keyword">from</span> <span class="token string">&#39;./components/Navbar&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Navbar <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u1100\u1167\u11AF\u1105\u1169\u11AB" tabindex="-1"><a class="header-anchor" href="#\u1100\u1167\u11AF\u1105\u1169\u11AB" aria-hidden="true">#</a> \uACB0\uB860</h1><p>\uC774\uC81C React \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC6A9 \uC2DC\uAC01\uC801\uC73C\uB85C \uB9E4\uB825\uC801\uC774\uACE0 \uBC18\uC751\uD615 \uB124\uBE44\uAC8C\uC774\uC158 \uBC14\uB97C \uB9CC\uB4E4\uC5C8\uC2B5\uB2C8\uB2E4. Tailwind CSS\uC640 React Icons\uC758 \uAE30\uB2A5\uC744 \uD65C\uC6A9\uD558\uC5EC \uB2E4\uC591\uD55C \uAE30\uAE30\uC5D0\uC11C \uD6CC\uB96D\uD558\uAC8C \uBCF4\uC774\uBA70 \uB9E4\uB044\uB7EC\uC6B4 \uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC744 \uC81C\uACF5\uD558\uB3C4\uB85D \uBCF4\uC7A5\uD588\uC2B5\uB2C8\uB2E4. \uD504\uB85C\uC81D\uD2B8\uC758 \uACE0\uC720\uD55C \uC694\uAD6C \uC0AC\uD56D\uC5D0 \uB9DE\uAC8C \uC2A4\uD0C0\uC77C\uC744 \uC0AC\uC6A9\uC790 \uC815\uC758\uD558\uACE0 \uAE30\uB2A5\uC744 \uD655\uC7A5\uD558\uB294 \uAC83\uC740 \uC790\uC720\uB86D\uAC8C \uC9C4\uD589\uD574\uC8FC\uC138\uC694. \uC990\uAC70\uC6B4 \uCF54\uB529\uD558\uC138\uC694!</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div>`,4);function k(v,m){return n(),l("div",null,[i,(n(),a(e("script"),null,{default:t(()=>[p(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),r,(n(),a(e("script"),null,{default:t(()=>[p(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),u,(n(),a(e("script"),null,{default:t(()=>[p(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),d])}var w=o(c,[["render",k],["__file","index.html.vue"]]);export{w as default};
