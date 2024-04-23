import{_ as o}from"./app.d68f74da.js";import{l as s,m as i,E as n,G as a,p as t,Y as e,K as p,C as c}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const r={},u=p(`<p>\uC548\uB155\uD558\uC138\uC694! ES7 React snippets \uD655\uC7A5 \uD504\uB85C\uADF8\uB7A8\uC744 \uC0AC\uC6A9\uD574 \uBCF4\uC168\uB098\uC694? \uC81C\uACF5\uB418\uB294 \uB9C9\uB300\uD55C \uC591\uC758 \uC2A4\uB2C8\uD3AB\uC5D0 \uC555\uB3C4\uB418\uC5C8\uB2E4\uACE0 \uB290\uB080 \uC801\uC774 \uC788\uB098\uC694? \uADF8\uB807\uC9C0 \uC54A\uB2E4\uBA74, \uC5EC\uAE30 \uC81C\uAC00 \uCD94\uCC9C\uD558\uB294 \uAC00\uC7A5 \uD544\uC218\uC801\uC778 \uC2A4\uB2C8\uD3AB \uBAA9\uB85D\uC774 \uC788\uC5B4\uC694. \uD544\uC218 \uC0AC\uD56D\uC5D0\uB9CC \uCD08\uC810\uC744 \uB9DE\uCD94\uBA74\uC11C Visual Studio Code \uC124\uC815\uC744 \uAC04\uC18C\uD654\uD558\uACE0 \uCF54\uB529 \uACBD\uD5D8\uC744 \uD6A8\uC728\uC801\uC73C\uB85C \uB9CC\uB4E4\uC5B4\uBCFC \uC218 \uC788\uC5B4\uC694.</p><h1 id="react-snippets" tabindex="-1"><a class="header-anchor" href="#react-snippets" aria-hidden="true">#</a> React Snippets</h1><h2 id="react-usestate-\u2192-us" tabindex="-1"><a class="header-anchor" href="#react-usestate-\u2192-us" aria-hidden="true">#</a> React useState \u2192 us</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string-property property">&quot;React useState&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;us&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;const [$1, set$2] = useState($3);&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),l=p(`<h2 id="react-useeffect-\u2192-ue" tabindex="-1"><a class="header-anchor" href="#react-useeffect-\u2192-ue" aria-hidden="true">#</a> React useEffect \u2192 ue</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string-property property">&quot;React useEffect&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ue&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;useEffect(() =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  $1&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;}, [$2]);&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="react-usecallback-\u2192-ucb" tabindex="-1"><a class="header-anchor" href="#react-usecallback-\u2192-ucb" aria-hidden="true">#</a> React useCallback \u2192 ucb</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string-property property">&quot;React useCallback&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ucb&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;useCallback(() =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  $1&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;}, [$2]);&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),d=p(`<h2 id="react-usememo-\u2192-\u110B\u1173\u11B7" tabindex="-1"><a class="header-anchor" href="#react-usememo-\u2192-\u110B\u1173\u11B7" aria-hidden="true">#</a> React useMemo \u2192 \uC74C</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string-property property">&quot;React useMemo&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;umm&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;useMemo(() =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  $1&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;}, [$2]);&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="react-functional-components-\u2192-rafce" tabindex="-1"><a class="header-anchor" href="#react-functional-components-\u2192-rafce" aria-hidden="true">#</a> React Functional components \u2192 rafce</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string-property property">&quot;React Function Component&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;reactArrowFunctionExportComponent&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rafce&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;const \${1:\${TM_FILENAME_BASE} = () =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  return (&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    &lt;div&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      &lt;h1&gt;\${1:first}&lt;/h1&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    &lt;/div&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  )&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;}&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;export default \${1:\${TM_FILENAME_BASE}&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Creates a React Arrow Function Component with ES7 module system&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;typescript,typescriptreact,javascript,javascriptreact&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),v=p(`<h2 id="\u1111\u1173\u1105\u1169\u11B8\u1109\u1173\u1105\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u11AB-react-\u1112\u1161\u11B7\u1109\u116E\u1112\u1167\u11BC-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-\u2192-rafcep" tabindex="-1"><a class="header-anchor" href="#\u1111\u1173\u1105\u1169\u11B8\u1109\u1173\u1105\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u11AB-react-\u1112\u1161\u11B7\u1109\u116E\u1112\u1167\u11BC-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-\u2192-rafcep" aria-hidden="true">#</a> \uD504\uB86D\uC2A4\uB97C \uC0AC\uC6A9\uD55C React \uD568\uC218\uD615 \uCEF4\uD3EC\uB10C\uD2B8 \u2192 rafcep</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string-property property">&quot;React \uD568\uC218\uD615 \uCEF4\uD3EC\uB10C\uD2B8\uC640 \uD504\uB86D\uC2A4&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;react\uD654\uC0B4\uD45C\uD568\uC218\uB0B4\uBCF4\uB0C4\uCEF4\uD3EC\uB10C\uD2B8&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rafcep&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;interface $1Props {}&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const \${1:\${TM_FILENAME_BASE} = ({}: $1Props) =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  return (&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    &lt;div&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      &lt;h1&gt;\${1:first}&lt;/h1&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    &lt;/div&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  )&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;}&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;export default \${1:\${TM_FILENAME_BASE}&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ES7 \uBAA8\uB4C8 \uC2DC\uC2A4\uD15C\uC744 \uC0AC\uC6A9\uD558\uC5EC React \uD654\uC0B4\uD45C \uD568\uC218 \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4.&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;typescript,typescriptreact,javascript,javascriptreact&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="next-js-\u1103\u1161\u11AB\u110E\u116E\u11A8\u110F\u1175" tabindex="-1"><a class="header-anchor" href="#next-js-\u1103\u1161\u11AB\u110E\u116E\u11A8\u110F\u1175" aria-hidden="true">#</a> Next.js \uB2E8\uCD95\uD0A4</h1><h2 id="\u1107\u1175\u1103\u1169\u11BC\u1100\u1175-react-\u1112\u1161\u11B7\u1109\u116E\u1112\u1167\u11BC-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-\u2192-arafce" tabindex="-1"><a class="header-anchor" href="#\u1107\u1175\u1103\u1169\u11BC\u1100\u1175-react-\u1112\u1161\u11B7\u1109\u116E\u1112\u1167\u11BC-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-\u2192-arafce" aria-hidden="true">#</a> \uBE44\uB3D9\uAE30 React \uD568\uC218\uD615 \uCEF4\uD3EC\uB10C\uD2B8 \u2192 arafce</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),k=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string-property property">&quot;\uBE44\uB3D9\uAE30 \uB9AC\uC561\uD2B8 \uD568\uC218 \uCEF4\uD3EC\uB10C\uD2B8&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;arafce&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;const \${1:\${TM_FILENAME_BASE} = async () =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  return (&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    &lt;div&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      &lt;h1&gt;\${1:first}&lt;/h1&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    &lt;/div&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  )&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;}&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;export default \${1:\${TM_FILENAME_BASE}&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1107\u1175\u1103\u1169\u11BC\u1100\u1175-\u1105\u1175\u110B\u1162\u11A8\u1110\u1173-\u1112\u1161\u11B7\u1109\u116E-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-with-props-\u2192-arafcep" tabindex="-1"><a class="header-anchor" href="#\u1107\u1175\u1103\u1169\u11BC\u1100\u1175-\u1105\u1175\u110B\u1162\u11A8\u1110\u1173-\u1112\u1161\u11B7\u1109\u116E-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-with-props-\u2192-arafcep" aria-hidden="true">#</a> \uBE44\uB3D9\uAE30 \uB9AC\uC561\uD2B8 \uD568\uC218 \uCEF4\uD3EC\uB10C\uD2B8 with props \u2192 arafcep</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string-property property">&quot;\uBE44\uB3D9\uAE30 \uB9AC\uC561\uD2B8 \uD568\uC218 \uCEF4\uD3EC\uB10C\uD2B8 with Props&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;arafcep&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;interface $1Props {}&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const \${1:\${TM_FILENAME_BASE} = async ({}: $1Props) =&gt; {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  return (&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    &lt;div&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;      &lt;h1&gt;\${1:first}&lt;/h1&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;    &lt;/div&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  )&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;}&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;export default \${1:\${TM_FILENAME_BASE}&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="imports-alias-\u2192-imp-imd" tabindex="-1"><a class="header-anchor" href="#imports-alias-\u2192-imp-imd" aria-hidden="true">#</a> Imports alias \u2192 imp &amp; imd</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),q=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string-property property">&quot;import&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;import&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;imp&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;import \${2:second} from &#39;\${1:first}&#39;&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;typescript, typescriptreact, javascript, javascriptreact&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string-property property">&quot;importDestructing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;importDestructing&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;imd&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;import { \${2:second} } from &#39;\${1:first}&#39;&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;typescript, typescriptreact, javascript, javascriptreact&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="redux-toolkit-\u2192-rxslice" tabindex="-1"><a class="header-anchor" href="#redux-toolkit-\u2192-rxslice" aria-hidden="true">#</a> Redux Toolkit \u2192 rxslice</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string-property property">&quot;reduxSlice&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;reduxSlice&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rxslice&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;import { createSlice } from &#39;@reduxjs/toolkit&#39;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const initialState = {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  \${3}&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;}&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;const \${1:\${TM_FILENAME_BASE} = createSlice({&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  name: &#39;\${2:second}&#39;,&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  initialState,&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  reducers: {}&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;});&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;export const {} = \${1:\${TM_FILENAME_BASE}.actions&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;export default \${1:\${TM_FILENAME_BASE}.reducer&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;typescript, typescriptreact, javascript, javascriptreact&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),g=c("p",null,"\uC0C1\uB2E8\uC758 \uCF54\uB4DC \uC2A4\uB2C8\uD3AB\uC744 TypeScriptReact.json \uD30C\uC77C\uC5D0 \uCD94\uAC00\uD558\uAC70\uB098 VSCode\uC5D0\uC11C \uC81C \uC81C\uACF5\uD574\uB4DC\uB9AC\uB294 \uC2A4\uB2C8\uD3AB \uD30C\uC77C\uC744 \uC0AC\uC6A9\uD574\uBCF4\uC138\uC694. GitHub\uC5D0\uC11C \uD655\uC778\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1);function m(b,y){return s(),i("div",null,[u,(s(),n(e("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),l,(s(),n(e("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),d,(s(),n(e("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),v,(s(),n(e("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),k,(s(),n(e("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),q,(s(),n(e("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),g])}var E=o(r,[["render",m],["__file","index.html.vue"]]);export{E as default};
