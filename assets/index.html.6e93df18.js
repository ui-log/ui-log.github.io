import{_ as c,o as s,c as l,a,w as t,b as n,r as e,d as p,e as o}from"./app.e672c54b.js";const i={},u=p('<h1 id="next-js\u110B\u1166\u1109\u1165-cypress-\u1109\u1165\u11AF\u110C\u1165\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#next-js\u110B\u1166\u1109\u1165-cypress-\u1109\u1165\u11AF\u110C\u1165\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> Next.js\uC5D0\uC11C Cypress \uC124\uC815\uD558\uAE30</h1><p>Cypress\uB294 \uC5D4\uB4DC \uD22C \uC5D4\uB4DC(E2E) \uBC0F \uCEF4\uD3EC\uB10C\uD2B8 \uD14C\uC2A4\uD2B8\uC5D0 \uC0AC\uC6A9\uB418\uB294 \uD14C\uC2A4\uD2B8 \uB7EC\uB108\uC785\uB2C8\uB2E4. \uC774 \uD398\uC774\uC9C0\uC5D0\uC11C\uB294 Next.js\uC640 \uD568\uAED8 Cypress\uB97C \uC124\uC815\uD558\uACE0 \uCCAB \uBC88\uC9F8 \uD14C\uC2A4\uD2B8\uB97C \uC791\uC131\uD558\uB294 \uBC29\uBC95\uC744 \uC548\uB0B4\uD569\uB2C8\uB2E4.</p><blockquote><p>\uACBD\uACE0: \uD604\uC7AC Cypress\uB294 Next.js \uBC84\uC804 14\uC640 \uBE44\uB3D9\uAE30 \uC11C\uBC84 \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC774 \uBB38\uC81C\uB4E4\uC740 \uCD94\uC801 \uC911\uC785\uB2C8\uB2E4. \uD604\uC7AC\uB294 Next.js \uBC84\uC804 13\uC5D0\uC11C \uCEF4\uD3EC\uB10C\uD2B8 \uD14C\uC2A4\uD2B8\uAC00 \uC791\uB3D9\uD558\uBA70, \uBE44\uB3D9\uAE30 \uC11C\uBC84 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0 \uB300\uD574\uC11C\uB294 E2E \uD14C\uC2A4\uD2B8\uB97C \uAD8C\uC7A5\uD569\uB2C8\uB2E4. Cypress\uB294 \uD604\uC7AC TypeScript \uBC84\uC804 5\uC640 moduleResolution: &quot;bundler&quot;\uB97C \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC774 \uBB38\uC81C\uB294 \uCD94\uC801 \uC911\uC785\uB2C8\uB2E4.</p></blockquote><h2 id="\u1108\u1161\u1105\u1173\u11AB-\u1109\u1175\u110C\u1161\u11A8" tabindex="-1"><a class="header-anchor" href="#\u1108\u1161\u1105\u1173\u11AB-\u1109\u1175\u110C\u1161\u11A8" aria-hidden="true">#</a> \uBE60\uB978 \uC2DC\uC791</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),r=p(`<p>create-next-app\uC744 with-cypress \uC608\uC81C\uC640 \uD568\uAED8 \uC0AC\uC6A9\uD558\uC5EC \uBE60\uB974\uAC8C \uC2DC\uC791\uD560 \uC218 \uC788\uC5B4\uC694.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npx create<span class="token operator">-</span>next<span class="token operator">-</span>app@latest <span class="token operator">--</span>example <span class="token keyword">with</span><span class="token operator">-</span>cypress <span class="token keyword">with</span><span class="token operator">-</span>cypress<span class="token operator">-</span>app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u1109\u116E\u1103\u1169\u11BC-\u1109\u1165\u11AF\u110C\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1109\u116E\u1103\u1169\u11BC-\u1109\u1165\u11AF\u110C\u1165\u11BC" aria-hidden="true">#</a> \uC218\uB3D9 \uC124\uC815</h2><p>\uC218\uB3D9\uC73C\uB85C Cypress\uB97C \uC124\uC815\uD558\uB824\uBA74 Cypress\uB97C \uAC1C\uBC1C \uC758\uC874\uC131\uC73C\uB85C \uC124\uCE58\uD558\uC138\uC694.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),d=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm install <span class="token operator">-</span><span class="token constant">D</span> cypress
# \uB610\uB294
yarn add <span class="token operator">-</span><span class="token constant">D</span> cypress
# \uB610\uB294
pnpm install <span class="token operator">-</span><span class="token constant">D</span> cypress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>package.json \uC2A4\uD06C\uB9BD\uD2B8 \uD544\uB4DC\uC5D0 Cypress \uC2E4\uD589 \uBA85\uB839\uC5B4\uB97C \uCD94\uAC00\uD558\uC138\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;next dev&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;next build&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;next start&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;lint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;next lint&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;cypress:open&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cypress open&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uCC98\uC74C\uC73C\uB85C Cypress\uB97C \uC2E4\uD589\uD558\uC5EC Cypress \uD14C\uC2A4\uD2B8 \uC2A4\uC704\uD2B8\uB97C \uC5FD\uB2C8\uB2E4:</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),k=p('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm run cypress<span class="token operator">:</span>open\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>E2E \uD14C\uC2A4\uD2B8 \uBC0F/\uB610\uB294 \uAD6C\uC131 \uC694\uC18C \uD14C\uC2A4\uD2B8\uB97C \uAD6C\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uC635\uC158 \uC911 \uD558\uB098\uB97C \uC120\uD0DD\uD558\uBA74 \uC790\uB3D9\uC73C\uB85C \uD504\uB85C\uC81D\uD2B8\uC5D0 cypress.config.js \uD30C\uC77C\uACFC cypress \uD3F4\uB354\uAC00 \uC0DD\uC131\uB429\uB2C8\uB2E4.</p><h2 id="\u110E\u1165\u11BA-\u1107\u1165\u11AB\u110D\u1162-cypress-e2e-\u1110\u1166\u1109\u1173\u1110\u1173-\u1106\u1161\u11AB\u1103\u1173\u11AF\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u110E\u1165\u11BA-\u1107\u1165\u11AB\u110D\u1162-cypress-e2e-\u1110\u1166\u1109\u1173\u1110\u1173-\u1106\u1161\u11AB\u1103\u1173\u11AF\u1100\u1175" aria-hidden="true">#</a> \uCCAB \uBC88\uC9F8 Cypress E2E \uD14C\uC2A4\uD2B8 \uB9CC\uB4E4\uAE30</h2><p>cypress.config.js \uD30C\uC77C\uC774 \uB2E4\uC74C \uAD6C\uC131\uC744 \uAC00\uC9C0\uACE0 \uC788\uB294\uC9C0 \uD655\uC778\uD558\uC2ED\uC2DC\uC624:```</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),v=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;cypress&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">e2e</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">setupNodeEvents</span><span class="token punctuation">(</span><span class="token parameter">on<span class="token punctuation">,</span> config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;cypress&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">e2e</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">setupNodeEvents</span><span class="token punctuation">(</span><span class="token parameter">on<span class="token punctuation">,</span> config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uADF8\uB7F0 \uB2E4\uC74C, \uB450 \uAC1C\uC758 \uC0C8\uB85C\uC6B4 Next.js \uD30C\uC77C\uC744 \uC0DD\uC131\uD558\uC2ED\uC2DC\uC624:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">&quot;next/link&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Home<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">&quot;/about&quot;</span><span class="token operator">&gt;</span>About<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),b=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">&quot;next/link&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>About<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">&quot;/&quot;</span><span class="token operator">&gt;</span>\uD648<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uB124\uBE44\uAC8C\uC774\uC158\uC774 \uC81C\uB300\uB85C \uC791\uB3D9\uD558\uB294\uC9C0 \uD655\uC778\uD558\uB294 \uD14C\uC2A4\uD2B8\uB97C \uCD94\uAC00\uD558\uC138\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&quot;Navigation&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&quot;\uC5B4\uBC14\uC6C3 \uD398\uC774\uC9C0\uB85C \uC774\uB3D9\uD574\uC57C \uD568&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \uC778\uB371\uC2A4 \uD398\uC774\uC9C0\uC5D0\uC11C \uC2DC\uC791</span>
    cy<span class="token punctuation">.</span><span class="token function">visit</span><span class="token punctuation">(</span><span class="token string">&quot;http://localhost:3000/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// &quot;about&quot;\uC744 \uD3EC\uD568\uD55C href \uC18D\uC131\uC744 \uAC00\uC9C4 \uB9C1\uD06C\uB97C \uCC3E\uC544 \uD074\uB9AD</span>
    cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;a[href*=&quot;about&quot;]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \uC0C8\uB85C\uC6B4 URL\uC740 &quot;/about&quot;\uC744 \uD3EC\uD568\uD574\uC57C \uD568</span>
    cy<span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span><span class="token string">&quot;include&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/about&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \uC0C8 \uD398\uC774\uC9C0\uC5D0\uB294 &quot;About&quot;\uC774\uB77C\uB294 h1\uC774 \uC788\uC5B4\uC57C \uD568</span>
    cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;h1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&quot;About&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="e2e-\u1110\u1166\u1109\u1173\u1110\u1173-\u1109\u1175\u11AF\u1112\u1162\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#e2e-\u1110\u1166\u1109\u1173\u1110\u1173-\u1109\u1175\u11AF\u1112\u1162\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> E2E \uD14C\uC2A4\uD2B8 \uC2E4\uD589\uD558\uAE30</h3><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),m=o("p",null,"\uC2F8\uC774\uD504\uB808\uC2A4\uB294 \uC0AC\uC6A9\uC790\uAC00 \uADC0\uD558\uC758 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uD0D0\uC0C9\uD558\uB294 \uAC83\uC744 \uC2DC\uBBAC\uB808\uC774\uC158\uD569\uB2C8\uB2E4. \uC774\uB97C \uC704\uD574\uC11C\uB294 Next.js \uC11C\uBC84\uAC00 \uC2E4\uD589 \uC911\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uADC0\uD558\uC758 \uD14C\uC2A4\uD2B8\uB97C \uC81C\uD488 \uCF54\uB4DC\uC5D0 \uB300\uD574 \uC2E4\uD589\uD558\uC5EC \uADC0\uD558\uC758 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uC5B4\uB5BB\uAC8C \uB3D9\uC791\uD560\uC9C0 \uBCF4\uB2E4 \uC815\uD655\uD558\uAC8C \uBAA8\uC0AC\uD560 \uAC83\uC744 \uAD8C\uC7A5\uD569\uB2C8\uB2E4. \uB2E4\uC74C \uBA85\uB839\uC5B4\uB97C \uC2E4\uD589\uD558\uC5EC Next.js \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uBE4C\uB4DC\uD558\uACE0 \uC2DC\uC791\uD558\uC138\uC694 npm run build && npm run start. \uADF8\uB7F0 \uB2E4\uC74C \uB610 \uB2E4\uB978 \uD130\uBBF8\uB110 \uCC3D\uC5D0\uC11C npm run cypress:open\uC744 \uC2E4\uD589\uD558\uC5EC Cypress\uB97C \uC2DC\uC791\uD558\uACE0 E2E \uD14C\uC2A4\uD2B8 \uC2A4\uC704\uD2B8\uB97C \uC2E4\uD589\uD558\uC138\uC694.",-1),g=o("blockquote",null,[o("p",null,`\uCC38\uACE0 \uC0AC\uD56D: cypress.config.js \uAD6C\uC131 \uD30C\uC77C\uC5D0 baseUrl: 'http://localhost:3000'\uC744 \uCD94\uAC00\uD558\uC5EC cy.visit("/") \uB300\uC2E0 cy.visit("http://localhost:3000/")\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB610\uB294 start-server-and-test \uD328\uD0A4\uC9C0\uB97C \uC124\uCE58\uD558\uC5EC Next.js \uD504\uB85C\uB355\uC158 \uC11C\uBC84\uB97C Cypress\uC640 \uD568\uAED8 \uC2E4\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC124\uCE58 \uD6C4\uC5D0 package.json \uC2A4\uD06C\uB9BD\uD2B8 \uD544\uB4DC\uC5D0 "test": "start-server-and-test start http://localhost:3000 cypress"\uB97C \uCD94\uAC00\uD558\uC138\uC694. \uC0C8 \uBCC0\uACBD \uC0AC\uD56D \uC774\uD6C4\uC5D0\uB294 \uADC0\uD558\uC758 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uB2E4\uC2DC \uBE4C\uB4DC\uD558\uB294 \uAC83\uC744 \uAE30\uC5B5\uD574 \uC8FC\uC138\uC694.`)],-1),y=o("h2",{id:"\u110E\u1165\u110B\u1173\u11B7\u110B\u1173\u1105\u1169-cypress-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-\u1110\u1166\u1109\u1173\u1110\u1173\u1105\u1173\u11AF-\u1106\u1161\u11AB\u1103\u1173\u11AF\u110B\u1165-\u1107\u1169\u1109\u1166\u110B\u116D",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#\u110E\u1165\u110B\u1173\u11B7\u110B\u1173\u1105\u1169-cypress-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-\u1110\u1166\u1109\u1173\u1110\u1173\u1105\u1173\u11AF-\u1106\u1161\u11AB\u1103\u1173\u11AF\u110B\u1165-\u1107\u1169\u1109\u1166\u110B\u116D","aria-hidden":"true"},"#"),n(" \uCC98\uC74C\uC73C\uB85C Cypress \uCEF4\uD3EC\uB10C\uD2B8 \uD14C\uC2A4\uD2B8\uB97C \uB9CC\uB4E4\uC5B4 \uBCF4\uC138\uC694")],-1),h=o("p",null,[o("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),f=p(`<p>\uCEF4\uD3EC\uB10C\uD2B8 \uD14C\uC2A4\uD2B8\uB294 \uC804\uCCB4 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uBC88\uB4E4\uB9C1\uD558\uAC70\uB098 \uC11C\uBC84\uB97C \uC2DC\uC791\uD558\uC9C0 \uC54A\uACE0\uB3C4 \uD2B9\uC815 \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uBE4C\uB4DC\uD558\uACE0 \uB9C8\uC6B4\uD2B8\uD558\uB294 \uAC83\uC744 \uB9D0\uD574\uC694. Cypress \uC571\uC5D0\uC11C \uCEF4\uD3EC\uB10C\uD2B8 \uD14C\uC2A4\uD305\uC744 \uC120\uD0DD\uD55C \uB2E4\uC74C, \uD504\uB860\uD2B8\uC5D4\uB4DC \uD504\uB808\uC784\uC6CC\uD06C\uB85C Next.js\uB97C \uC120\uD0DD\uD558\uC138\uC694. \uD504\uB85C\uC81D\uD2B8\uC5D0 cypress/component \uD3F4\uB354\uAC00 \uC0DD\uC131\uB418\uBA70 cypress.config.js \uD30C\uC77C\uC774 \uC5C5\uB370\uC774\uD2B8\uB418\uC5B4 \uCEF4\uD3EC\uB10C\uD2B8 \uD14C\uC2A4\uD2B8\uB97C \uD65C\uC131\uD654\uD569\uB2C8\uB2E4. cypress.config.js \uD30C\uC77C\uC774 \uB2E4\uC74C \uAD6C\uC131\uC744 \uAC00\uC9C0\uACE0 \uC788\uB294\uC9C0 \uD655\uC778\uD558\uC138\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;cypress&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">framework</span><span class="token operator">:</span> <span class="token string">&quot;next&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">bundler</span><span class="token operator">:</span> <span class="token string">&quot;webpack&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,3),q=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;cypress&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">framework</span><span class="token operator">:</span> <span class="token string">&quot;next&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">bundler</span><span class="token operator">:</span> <span class="token string">&quot;webpack&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774\uC804 \uC139\uC158\uC758 \uAC19\uC740 \uAD6C\uC131 \uC694\uC18C\uB97C \uAC00\uC815\uD558\uACE0, \uAD6C\uC131 \uC694\uC18C\uAC00 \uC608\uC0C1 \uCD9C\uB825\uC744 \uB80C\uB354\uB9C1\uD558\uB294\uC9C0 \uD655\uC778\uD558\uB294 \uD14C\uC2A4\uD2B8\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Page <span class="token keyword">from</span> <span class="token string">&quot;../../app/page&quot;</span><span class="token punctuation">;</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;Page /&gt;&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&quot;should render and display expected content&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \uD648 \uD398\uC774\uC9C0\uC758 React \uAD6C\uC131 \uC694\uC18C\uB97C \uB9C8\uC6B4\uD2B8\uD569\uB2C8\uB2E4</span>
    cy<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Page <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \uC0C8 \uD398\uC774\uC9C0\uC5D0 &quot;Home&quot;\uC774\uB77C\uB294 h1\uC774 \uD3EC\uD568\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4</span>
    cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;h1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&quot;Home&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \uC608\uC0C1 URL\uC744 \uAC00\uC9C4 \uB9C1\uD06C\uAC00 \uC874\uC7AC\uD558\uB294\uC9C0 \uD655\uC778\uD569\uB2C8\uB2E4</span>
    <span class="token comment">// \uB9C1\uD06C\uB97C \uB530\uB77C\uAC00\uB294 \uAC83\uC740 E2E \uD14C\uC2A4\uD2B8\uC5D0 \uB354 \uC801\uD569\uD569\uB2C8\uB2E4</span>
    cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;a[href=&quot;/about&quot;]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span><span class="token string">&quot;be.visible&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\uC54C\uC544\uB450\uBA74 \uC88B\uC544\uC694: Cypress\uB294 \uD604\uC7AC \uBE44\uB3D9\uAE30 \uC11C\uBC84 \uAD6C\uC131 \uC694\uC18C\uC5D0 \uB300\uD55C \uAD6C\uC131 \uC694\uC18C \uD14C\uC2A4\uD2B8\uB97C \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. E2E \uD14C\uC2A4\uD2B8\uB97C \uC0AC\uC6A9\uD558\uB294 \uAC83\uC744 \uAD8C\uC7A5\uD569\uB2C8\uB2E4. \uAD6C\uC131 \uC694\uC18C \uD14C\uC2A4\uD2B8\uB294 Next.js \uC11C\uBC84\uB97C \uD544\uC694\uB85C\uD558\uC9C0 \uC54A\uC73C\uBBC0\uB85C \uC11C\uBC84\uAC00 \uD544\uC694\uD55C <code>&lt;Image /&gt;</code>\uC640 \uAC19\uC740 \uAE30\uB2A5\uC740 \uAE30\uBCF8\uC801\uC73C\uB85C \uC791\uB3D9\uD558\uC9C0 \uC54A\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p></blockquote><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),w=p('<h3 id="\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-\u1110\u1166\u1109\u1173\u1110\u1173-\u1109\u1175\u11AF\u1112\u1162\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-\u1110\u1166\u1109\u1173\u1110\u1173-\u1109\u1175\u11AF\u1112\u1162\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uCEF4\uD3EC\uB10C\uD2B8 \uD14C\uC2A4\uD2B8 \uC2E4\uD589\uD558\uAE30</h3><p>\uD130\uBBF8\uB110\uC5D0\uC11C npm run cypress:open\uC744 \uC2E4\uD589\uD558\uC5EC Cypress\uB97C \uC2DC\uC791\uD558\uACE0 \uCEF4\uD3EC\uB10C\uD2B8 \uD14C\uC2A4\uD2B8 \uC2A4\uC704\uD2B8\uB97C \uC2E4\uD589\uD558\uC138\uC694.</p><h2 id="\u110C\u1175\u1109\u1169\u11A8\u110C\u1165\u11A8-\u1110\u1169\u11BC\u1112\u1161\u11B8-ci" tabindex="-1"><a class="header-anchor" href="#\u110C\u1175\u1109\u1169\u11A8\u110C\u1165\u11A8-\u1110\u1169\u11BC\u1112\u1161\u11B8-ci" aria-hidden="true">#</a> \uC9C0\uC18D\uC801 \uD1B5\uD569 (CI)</h2><p>\uB300\uD654\uD615 \uD14C\uC2A4\uD2B8 \uC678\uC5D0\uB3C4 cypress run \uBA85\uB839\uC744 \uC0AC\uC6A9\uD558\uC5EC Cypress\uB97C \uD5E4\uB4DC\uB9AC\uC2A4 \uBAA8\uB4DC\uB85C \uC2E4\uD589\uD558\uC5EC CI \uD658\uACBD\uC5D0 \uB354 \uC801\uD569\uD558\uAC8C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),x=p(`<div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//...</span>
    <span class="token property">&quot;e2e&quot;</span><span class="token operator">:</span> <span class="token string">&quot;start-server-and-test dev http://localhost:3000 \\&quot;cypress open --e2e\\&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;e2e:headless&quot;</span><span class="token operator">:</span> <span class="token string">&quot;start-server-and-test dev http://localhost:3000 \\&quot;cypress run --e2e\\&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;component&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cypress open --component&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;component:headless&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cypress run --component&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774 \uB9AC\uC18C\uC2A4\uB4E4\uC744 \uD1B5\uD574 Cypress\uC640 \uC9C0\uC18D\uC801 \uD1B5\uD569\uC5D0 \uB300\uD574 \uB354 \uC54C\uC544\uBCF4\uC138\uC694:</p><ul><li>Next.js\uC640 Cypress \uC608\uC81C</li><li>Cypress \uC9C0\uC18D\uC801 \uD1B5\uD569 \uBB38\uC11C</li><li>Cypress GitHub Actions \uAC00\uC774\uB4DC</li><li>\uACF5\uC2DD Cypress GitHub Action</li><li>Cypress Discord</li></ul><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,4);function j(_,C){return s(),l("div",null,[u,(s(),a(e("script"),null,{default:t(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),r,(s(),a(e("script"),null,{default:t(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),d,(s(),a(e("script"),null,{default:t(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),k,(s(),a(e("script"),null,{default:t(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),v,(s(),a(e("script"),null,{default:t(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b,(s(),a(e("script"),null,{default:t(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),m,g,y,h,(s(),a(e("script"),null,{default:t(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),f,(s(),a(e("script"),null,{default:t(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),q,(s(),a(e("script"),null,{default:t(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),w,(s(),a(e("script"),null,{default:t(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),x,(s(),a(e("script"),null,{default:t(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1}))])}var N=c(i,[["render",j],["__file","index.html.vue"]]);export{N as default};
