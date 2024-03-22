import{_ as o,o as n,c,a as s,w as a,d as e,b as t,g as p}from"./app.7f4ddb7a.js";const l={},i=p('<h1 id="nextjs-14\u110B\u1166\u1109\u1165-\u110B\u1173\u11BC\u1103\u1161\u11B8\u110B\u1173\u11AF-\u1109\u1171\u11B8\u1100\u1166-\u110E\u1165\u1105\u1175\u1112\u1161\u1102\u1173\u11AB-\u1107\u1161\u11BC\u1107\u1165\u11B8-nextresponse" tabindex="-1"><a class="header-anchor" href="#nextjs-14\u110B\u1166\u1109\u1165-\u110B\u1173\u11BC\u1103\u1161\u11B8\u110B\u1173\u11AF-\u1109\u1171\u11B8\u1100\u1166-\u110E\u1165\u1105\u1175\u1112\u1161\u1102\u1173\u11AB-\u1107\u1161\u11BC\u1107\u1165\u11B8-nextresponse" aria-hidden="true">#</a> Nextjs 14\uC5D0\uC11C \uC751\uB2F5\uC744 \uC27D\uAC8C \uCC98\uB9AC\uD558\uB294 \uBC29\uBC95(NextResponse)</h1><p>NextResponse\uB294 \uB354 \uB9CE\uC740 \uD3B8\uC758 \uAE30\uB2A5\uC744 \uC81C\uACF5\uD558\uB294 \uC6F9 \uC751\uB2F5 API\uB97C \uD655\uC7A5\uD569\uB2C8\uB2E4.</p><h2 id="cookies" tabindex="-1"><a class="header-anchor" href="#cookies" aria-hidden="true">#</a> cookies</h2><p>\uC751\uB2F5\uC758 Set-Cookie \uD5E4\uB354\uB97C \uC77D\uAC70\uB098 \uC218\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),u=p(`<h3 id="set-name-value" tabindex="-1"><a class="header-anchor" href="#set-name-value" aria-hidden="true">#</a> set(name, value)</h3><p>\uC8FC\uC5B4\uC9C4 \uC774\uB984\uC5D0 \uB300\uD55C \uAC12\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC751\uB2F5\uC5D0 \uCFE0\uD0A4\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \uC218\uC2E0\uB41C \uC694\uCCAD /home\uC778 \uACBD\uC6B0</span>
<span class="token keyword">let</span> response <span class="token operator">=</span> NextResponse<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \uBC30\uB108 \uC228\uAE30\uAE30\uC6A9 \uCFE0\uD0A4 \uC124\uC815</span>
response<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;show-banner&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;false&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \uC751\uB2F5\uC740 \`Set-Cookie:show-banner=false;path=/home\` \uD5E4\uB354\uB97C \uAC00\uC9D1\uB2C8\uB2E4.</span>
<span class="token keyword">return</span> response<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="get-name" tabindex="-1"><a class="header-anchor" href="#get-name" aria-hidden="true">#</a> get(name)</h3><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),r=p(`<p>\uCFE0\uD0A4 \uC774\uB984\uC744 \uC81C\uACF5\uD558\uBA74 \uD574\uB2F9 \uCFE0\uD0A4\uC758 \uAC12\uC744 \uBC18\uD658\uD569\uB2C8\uB2E4. \uCFE0\uD0A4\uB97C \uCC3E\uC744 \uC218 \uC5C6\uB294 \uACBD\uC6B0 undefined\uAC00 \uBC18\uD658\uB429\uB2C8\uB2E4. \uC5EC\uB7EC \uAC1C\uC758 \uCFE0\uD0A4\uAC00 \uBC1C\uACAC\uB418\uBA74 \uCCAB \uBC88\uC9F8 \uCFE0\uD0A4\uAC00 \uBC18\uD658\uB429\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \uC218\uC2E0\uB41C \uC694\uCCAD /home</span>
<span class="token keyword">let</span> response <span class="token operator">=</span> NextResponse<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// { name: &#39;show-banner&#39;, value: &#39;false&#39;, Path: &#39;/home&#39; }</span>
response<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;show-banner&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getall" tabindex="-1"><a class="header-anchor" href="#getall" aria-hidden="true">#</a> getAll()</h3><p>\uCFE0\uD0A4 \uC774\uB984\uC744 \uC81C\uACF5\uD558\uBA74 \uD574\uB2F9 \uCFE0\uD0A4\uC758 \uAC12\uB4E4\uC744 \uBC18\uD658\uD569\uB2C8\uB2E4. \uC774\uB984\uC774 \uC81C\uACF5\uB418\uC9C0 \uC54A\uC740 \uACBD\uC6B0 \uC751\uB2F5\uC5D0 \uC788\uB294 \uBAA8\uB4E0 \uCFE0\uD0A4\uB97C \uBC18\uD658\uD569\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),d=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \uC218\uC2E0\uB41C \uC694\uCCAD\uC778 /home\uC774 \uC8FC\uC5B4\uC9C4 \uACBD\uC6B0</span>
<span class="token keyword">let</span> response <span class="token operator">=</span> NextResponse<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [</span>
<span class="token comment">//   { name: &#39;experiments&#39;, value: &#39;new-pricing-page&#39;, Path: &#39;/home&#39; },</span>
<span class="token comment">//   { name: &#39;experiments&#39;, value: &#39;winter-launch&#39;, Path: &#39;/home&#39; },</span>
<span class="token comment">// ]</span>
response<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">getAll</span><span class="token punctuation">(</span><span class="token string">&quot;experiments&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \uB610\uB294 \uC751\uB2F5\uC5D0 \uB300\uD55C \uBAA8\uB4E0 \uCFE0\uD0A4\uB97C \uAC00\uC838\uC62C \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4</span>
response<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">getAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="delete-name" tabindex="-1"><a class="header-anchor" href="#delete-name" aria-hidden="true">#</a> delete(name)</h3><p>\uCFE0\uD0A4 \uC774\uB984\uC774 \uC8FC\uC5B4\uC9C4 \uACBD\uC6B0, \uD574\uB2F9 \uCFE0\uD0A4\uB97C \uC751\uB2F5\uC5D0\uC11C \uC0AD\uC81C\uD569\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \uC218\uC2E0\uB41C \uC694\uCCAD\uC778 /home\uC774 \uC8FC\uC5B4\uC9C4 \uACBD\uC6B0</span>
<span class="token keyword">let</span> response <span class="token operator">=</span> NextResponse<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \uC0AD\uC81C\uB41C \uACBD\uC6B0 true\uB97C \uBC18\uD658\uD569\uB2C8\uB2E4. \uC0AD\uC81C\uB41C \uAC83\uC774 \uC5C6\uC73C\uBA74 false\uB97C \uBC18\uD658\uD569\uB2C8\uB2E4</span>
response<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&quot;experiments&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),k=p(`<h2 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> json()</h2><p>\uC8FC\uC5B4\uC9C4 JSON \uB370\uC774\uD130\uB97C \uD3EC\uD568\uD55C \uC751\uB2F5\uC744 \uC0DD\uC131\uD569\uB2C8\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;next/server&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token constant">GET</span><span class="token punctuation">(</span>request<span class="token operator">:</span> Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> error<span class="token operator">:</span> <span class="token string">&quot;Internal Server Error&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> status<span class="token operator">:</span> <span class="token number">500</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="redirect" tabindex="-1"><a class="header-anchor" href="#redirect" aria-hidden="true">#</a> redirect()</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),v=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;next/server&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">&quot;/new&quot;</span><span class="token punctuation">,</span> request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC704\uC758 \uCF54\uB4DC\uB294 URL\uC744 \uC0DD\uC131\uD558\uC5EC \uC218\uC815\uD55C \uD6C4 NextResponse.redirect() \uBA54\uC11C\uB4DC\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4, request.nextUrl \uC18D\uC131\uC744 \uC0AC\uC6A9\uD558\uC5EC \uD604\uC7AC URL\uC744 \uAC00\uC838\uC640\uC11C \uB2E4\uB978 URL\uB85C \uB9AC\uB2E4\uC774\uB809\uC158\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;next/server&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \uC218\uC2E0\uB41C \uC694\uCCAD\uC744 \uAE30\uC900\uC73C\uB85C...</span>
<span class="token keyword">const</span> loginUrl <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">&quot;/login&quot;</span><span class="token punctuation">,</span> request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// /login URL\uC5D0 ?from=/incoming-url \uCD94\uAC00</span>
loginUrl<span class="token punctuation">.</span>searchParams<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;from&quot;</span><span class="token punctuation">,</span> request<span class="token punctuation">.</span>nextUrl<span class="token punctuation">.</span>pathname<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \uADF8\uB9AC\uACE0 \uC0C8 URL\uB85C \uB9AC\uB2E4\uC774\uB809\uD2B8</span>
<span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span>loginUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,4),m=p(`<h2 id="rewrite" tabindex="-1"><a class="header-anchor" href="#rewrite" aria-hidden="true">#</a> rewrite()</h2><p>\uC81C\uACF5\uB41C URL\uC744 \uC720\uC9C0\uD558\uBA74\uC11C \uB2E4\uC2DC \uC791\uC131(\uD504\uB85D\uC2DC)\uD558\uB294 \uC751\uB2F5\uC744 \uC0DD\uC131\uD569\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;next/server&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \uC218\uC2E0 \uC694\uCCAD: /about, \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uD45C\uC2DC\uB428: /about</span>
<span class="token comment">// \uB2E4\uC2DC \uC791\uC131\uB41C \uC694\uCCAD: /proxy, \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uD45C\uC2DC\uB428: /about</span>
<span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">rewrite</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">&quot;/proxy&quot;</span><span class="token punctuation">,</span> request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="next" tabindex="-1"><a class="header-anchor" href="#next" aria-hidden="true">#</a> next()</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),b=p(`<p><code>next()</code> \uBA54\uC11C\uB4DC\uB294 \uBBF8\uB4E4\uC6E8\uC5B4\uC5D0 \uC720\uC6A9\uD55C\uB370\uC694. \uC774 \uBA54\uC11C\uB4DC\uB97C \uC0AC\uC6A9\uD558\uBA74 \uC77C\uCC0D \uBC18\uD658\uD560 \uC218 \uC788\uACE0 \uB77C\uC6B0\uD305\uC744 \uACC4\uC18D\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;next/server&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC751\uB2F5 \uC0DD\uC131 \uC2DC \uD5E4\uB354\uB97C \uC804\uB2EC\uD560 \uC218\uB3C4 \uC788\uC5B4\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;next/server&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \uB4E4\uC5B4\uC624\uB294 \uC694\uCCAD\uC774 \uC788\uB2E4\uBA74...</span>
<span class="token keyword">const</span> newHeaders <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Headers</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>headers<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \uC0C8 \uD5E4\uB354 \uCD94\uAC00</span>
newHeaders<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;x-version&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \uC0C8 \uD5E4\uB354\uB97C \uD3EC\uD568\uD55C \uC751\uB2F5\uC744 \uC0DD\uC131\uD574\uC694</span>
<span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">request</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \uC0C8 \uC694\uCCAD \uD5E4\uB354</span>
    <span class="token literal-property property">headers</span><span class="token operator">:</span> newHeaders<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5);function g(h,y){return n(),c("div",null,[i,(n(),s(t("script"),null,{default:a(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),u,(n(),s(t("script"),null,{default:a(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),r,(n(),s(t("script"),null,{default:a(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),d,(n(),s(t("script"),null,{default:a(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),k,(n(),s(t("script"),null,{default:a(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),v,(n(),s(t("script"),null,{default:a(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),m,(n(),s(t("script"),null,{default:a(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b,(n(),s(t("script"),null,{default:a(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1}))])}var w=o(l,[["render",g],["__file","index.html.vue"]]);export{w as default};