import{_ as c,o as a,c as i,a as s,w as e,b as n,r as t,d as o,e as d}from"./app.252b99df.js";const l={},p=o('<h1 id="nextrequest" tabindex="-1"><a class="header-anchor" href="#nextrequest" aria-hidden="true">#</a> NextRequest</h1><p>NextRequest\uB294 Web Request API\uB97C \uD655\uC7A5\uD558\uC5EC \uCD94\uAC00\uC801\uC778 \uD3B8\uC758 \uAE30\uB2A5\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.</p><h2 id="\u110F\u116E\u110F\u1175" tabindex="-1"><a class="header-anchor" href="#\u110F\u116E\u110F\u1175" aria-hidden="true">#</a> \uCFE0\uD0A4</h2><p>\uC694\uCCAD\uC758 Set-Cookie \uD5E4\uB354\uB97C \uC77D\uAC70\uB098 \uBCC0\uC774\uC2DC\uD0B5\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),u=o(`<h3 id="set-name-value" tabindex="-1"><a class="header-anchor" href="#set-name-value" aria-hidden="true">#</a> set(name, value)</h3><p>\uC8FC\uC5B4\uC9C4 \uC774\uB984\uC73C\uB85C \uC694\uCCAD\uC5D0 \uD574\uB2F9 \uAC12\uC758 \uCFE0\uD0A4\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \uC218\uC2E0\uB41C \uC694\uCCAD /home</span>
<span class="token comment">// \uBC30\uB108\uB97C \uC228\uAE30\uAE30 \uC704\uD55C \uCFE0\uD0A4 \uC124\uC815</span>
<span class="token comment">// \uC694\uCCAD\uC740 \`Set-Cookie:show-banner=false;path=/home\` \uD5E4\uB354\uB97C \uAC00\uC9D1\uB2C8\uB2E4</span>
request<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;show-banner&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;false&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="get-name" tabindex="-1"><a class="header-anchor" href="#get-name" aria-hidden="true">#</a> get(name)</h3><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),r=o(`<p>\uCFE0\uD0A4 \uC774\uB984\uC774 \uC8FC\uC5B4\uC9C0\uBA74 \uD574\uB2F9 \uCFE0\uD0A4\uC758 \uAC12\uC744 \uBC18\uD658\uD569\uB2C8\uB2E4. \uCFE0\uD0A4\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC73C\uBA74 \uC815\uC758\uB418\uC9C0 \uC54A\uC740(undefined) \uAC12\uC774 \uBC18\uD658\uB429\uB2C8\uB2E4. \uC5EC\uB7EC \uAC1C\uC758 \uCFE0\uD0A4\uAC00 \uBC1C\uACAC\uB418\uBA74 \uCCAB \uBC88\uC9F8 \uCFE0\uD0A4\uAC00 \uBC18\uD658\uB429\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \uC218\uC2E0\uB41C \uC694\uCCAD\uC774 /home\uC778 \uACBD\uC6B0</span>
<span class="token comment">// { name: &#39;show-banner&#39;, value: &#39;false&#39;, Path: &#39;/home&#39; }</span>
request<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;show-banner&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getall" tabindex="-1"><a class="header-anchor" href="#getall" aria-hidden="true">#</a> getAll()</h3><p>\uCFE0\uD0A4 \uC774\uB984\uC774 \uC8FC\uC5B4\uC9C0\uBA74 \uD574\uB2F9 \uCFE0\uD0A4\uC758 \uAC12\uC744 \uBC18\uD658\uD569\uB2C8\uB2E4. \uC774\uB984\uC774 \uC9C0\uC815\uB418\uC9C0 \uC54A\uC73C\uBA74 \uC694\uCCAD\uC5D0 \uC788\uB294 \uBAA8\uB4E0 \uCFE0\uD0A4\uB97C \uBC18\uD658\uD569\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),m=o(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \uC218\uC2E0\uB41C \uC694\uCCAD /home</span>
<span class="token comment">// [</span>
<span class="token comment">//   { name: &#39;experiments&#39;, value: &#39;new-pricing-page&#39;, Path: &#39;/home&#39; },</span>
<span class="token comment">//   { name: &#39;experiments&#39;, value: &#39;winter-launch&#39;, Path: &#39;/home&#39; },</span>
<span class="token comment">// ]</span>
request<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">getAll</span><span class="token punctuation">(</span><span class="token string">&quot;experiments&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \uB610\uB294, \uC694\uCCAD\uC5D0 \uB300\uD55C \uBAA8\uB4E0 \uCFE0\uD0A4 \uAC00\uC838\uC624\uAE30</span>
request<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">getAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="delete-name" tabindex="-1"><a class="header-anchor" href="#delete-name" aria-hidden="true">#</a> delete(name)</h3><p>\uCFE0\uD0A4 \uC774\uB984\uC744 \uC81C\uACF5\uD558\uBA74 \uD574\uB2F9 \uCFE0\uD0A4\uB97C \uC694\uCCAD\uC5D0\uC11C \uC0AD\uC81C\uD569\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \uC0AD\uC81C\uB418\uBA74 true\uB97C \uBC18\uD658\uD558\uACE0, \uC544\uBB34 \uAC83\uB3C4 \uC0AD\uC81C\uB418\uC9C0 \uC54A\uC73C\uBA74 false\uB97C \uBC18\uD658\uD569\uB2C8\uB2E4</span>
request<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&quot;experiments&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),h=o(`<h3 id="has-name" tabindex="-1"><a class="header-anchor" href="#has-name" aria-hidden="true">#</a> has(name)</h3><p>\uCFE0\uD0A4 \uC774\uB984\uC774 \uC8FC\uC5B4\uC84C\uC744 \uB54C, \uD574\uB2F9 \uCFE0\uD0A4\uAC00 \uC694\uCCAD\uC5D0 \uC874\uC7AC\uD558\uBA74 true\uB97C \uBC18\uD658\uD569\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \uCFE0\uD0A4\uAC00 \uC874\uC7AC\uD558\uBA74 true\uB97C \uBC18\uD658\uD558\uACE0, \uADF8\uB807\uC9C0 \uC54A\uC73C\uBA74 false\uB97C \uBC18\uD658\uD569\uB2C8\uB2E4</span>
request<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token string">&quot;experiments&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="clear" tabindex="-1"><a class="header-anchor" href="#clear" aria-hidden="true">#</a> clear()</h3><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),v=o(`<p>\uC694\uCCAD\uC5D0\uC11C Set-Cookie \uD5E4\uB354\uB97C \uC81C\uAC70\uD558\uC138\uC694.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>request<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="nexturl" tabindex="-1"><a class="header-anchor" href="#nexturl" aria-hidden="true">#</a> nextUrl</h2><p>\uAE30\uBCF8 URL API\uB97C \uD655\uC7A5\uD558\uC5EC Next.js \uD2B9\uC815 \uC18D\uC131\uC744 \uD3EC\uD568\uD55C \uCD94\uAC00\uC801\uC778 \uD3B8\uC758 \uAE30\uB2A5\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),k=o(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// /home\uC5D0 \uB300\uD55C \uC694\uCCAD\uC744 \uBC1B\uC558\uC744 \uB54C, pathname\uC740 /home\uC785\uB2C8\uB2E4.</span>
request<span class="token punctuation">.</span>nextUrl<span class="token punctuation">.</span>pathname<span class="token punctuation">;</span>
<span class="token comment">// /home?name=lee\uC5D0 \uB300\uD55C \uC694\uCCAD\uC744 \uBC1B\uC558\uC744 \uB54C, searchParams\uB294 { &#39;name&#39;: &#39;lee&#39; }\uC785\uB2C8\uB2E4.</span>
request<span class="token punctuation">.</span>nextUrl<span class="token punctuation">.</span>searchParams<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uB2E4\uC74C \uC635\uC158\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4:</p><table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>basePath</code></td><td><code>string</code></td><td>URL\uC758 <a href="/docs/pages/api-reference/next-config-js/basePath">base path</a>\uC785\uB2C8\uB2E4.</td></tr><tr><td><code>buildId</code></td><td><code>string</code> | <code>undefined</code></td><td>Next.js \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uBE4C\uB4DC \uC2DD\uBCC4\uC790\uC785\uB2C8\uB2E4. <a href="/docs/pages/api-reference/next-config-js/generateBuildId">\uC0AC\uC6A9\uC790 \uC815\uC758</a> \uAC00\uB2A5\uD569\uB2C8\uB2E4.</td></tr><tr><td><code>defaultLocale</code></td><td><code>string</code> | <code>undefined</code></td><td><a href="/docs/pages/building-your-application/routing/internationalization">\uB2E4\uAD6D\uC5B4\uD654</a>\uB97C \uC704\uD55C \uAE30\uBCF8 \uB85C\uCF00\uC77C\uC785\uB2C8\uB2E4.</td></tr><tr><td><code>domainLocale</code></td><td></td><td></td></tr><tr><td>- <code>defaultLocale</code></td><td><code>string</code></td><td>\uB3C4\uBA54\uC778 \uB0B4\uC758 \uAE30\uBCF8 \uB85C\uCF00\uC77C\uC785\uB2C8\uB2E4.</td></tr><tr><td>- <code>domain</code></td><td><code>string</code></td><td>\uD2B9\uC815 \uB85C\uCF00\uC77C\uACFC \uC5F0\uACB0\uB41C \uB3C4\uBA54\uC778\uC785\uB2C8\uB2E4.</td></tr><tr><td>- <code>http</code></td><td><code>boolean</code> | <code>undefined</code></td><td>\uB3C4\uBA54\uC778\uC774 HTTP\uB97C \uC0AC\uC6A9\uD558\uB294\uC9C0 \uC5EC\uBD80\uB97C \uB098\uD0C0\uB0C5\uB2C8\uB2E4.</td></tr><tr><td><code>locales</code></td><td><code>string[]</code> | <code>undefined</code></td><td>\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uB85C\uCF00\uC77C \uBC30\uC5F4\uC785\uB2C8\uB2E4.</td></tr><tr><td><code>locale</code></td><td><code>string</code> | <code>undefined</code></td><td>\uD604\uC7AC \uD65C\uC131\uD654\uB41C \uB85C\uCF00\uC77C\uC785\uB2C8\uB2E4.</td></tr><tr><td><code>url</code></td><td><code>URL</code></td><td>URL \uAC1D\uCCB4\uC785\uB2C8\uB2E4.</td></tr></tbody></table><h2 id="ip" tabindex="-1"><a class="header-anchor" href="#ip" aria-hidden="true">#</a> ip</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),g=d("p",null,[d("code",null,"table"),n(" \uD0DC\uADF8\uB294 Markdown \uD615\uC2DD\uC73C\uB85C \uBCC0\uACBD\uD558\uC138\uC694.")],-1),b=d("p",null,[d("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),f=o(`<p>geo \uC18D\uC131\uC740 \uC694\uCCAD\uC758 \uC9C0\uB9AC\uC801 \uC815\uBCF4\uB97C \uD3EC\uD568\uD558\uB294 \uAC1D\uCCB4\uC785\uB2C8\uB2E4. \uC774 \uAC12\uC740 \uD638\uC2A4\uD305 \uD50C\uB7AB\uD3FC\uC5D0\uC11C \uC120\uD0DD\uC801\uC73C\uB85C \uC81C\uACF5\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><blockquote><p>\uC54C\uC544 \uB450\uBA74 \uC88B\uC544\uC694: Vercel\uC5D0\uC11C\uB294 \uAE30\uBCF8\uC801\uC73C\uB85C \uC774 \uAC12\uC774 \uC81C\uACF5\uB429\uB2C8\uB2E4. \uB2E4\uB978 \uD50C\uB7AB\uD3FC\uC5D0\uC11C\uB294 X-Forwarded-For \uD5E4\uB354\uB97C \uC0AC\uC6A9\uD558\uC5EC IP \uC8FC\uC18C\uB97C \uC81C\uACF5\uD55C \uB2E4\uC74C, \uC81C 3\uC790 \uC11C\uBE44\uC2A4\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC9C0\uB9AC\uC801 \uC815\uBCF4\uB97C \uC870\uD68C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Vercel\uC5D0\uC11C \uC81C\uACF5\uB418\uB294 \uACBD\uC6B0</span>
request<span class="token punctuation">.</span>geo<span class="token punctuation">.</span>city<span class="token punctuation">;</span>
request<span class="token punctuation">.</span>geo<span class="token punctuation">.</span>country<span class="token punctuation">;</span>
request<span class="token punctuation">.</span>geo<span class="token punctuation">.</span>region<span class="token punctuation">;</span>
request<span class="token punctuation">.</span>geo<span class="token punctuation">.</span>latitude<span class="token punctuation">;</span>
request<span class="token punctuation">.</span>geo<span class="token punctuation">.</span>longitude<span class="token punctuation">;</span>

<span class="token comment">// \uC790\uCCB4 \uD638\uC2A4\uD305\uC758 \uACBD\uC6B0</span>
<span class="token keyword">function</span> <span class="token function">getGeo</span><span class="token punctuation">(</span><span class="token parameter">request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> ip <span class="token operator">=</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;X-Forwarded-For&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \uC81C 3\uC790 \uC11C\uBE44\uC2A4\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC9C0\uB9AC\uC801 \uC815\uBCF4 \uC870\uD68C</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,4);function y(x,_){return a(),i("div",null,[p,(a(),s(t("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),u,(a(),s(t("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),r,(a(),s(t("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),m,(a(),s(t("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),h,(a(),s(t("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),v,(a(),s(t("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),k,(a(),s(t("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),g,b,(a(),s(t("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),f,(a(),s(t("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1}))])}var q=c(l,[["render",y],["__file","index.html.vue"]]);export{q as default};
