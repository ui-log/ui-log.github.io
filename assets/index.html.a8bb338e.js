import{_ as i}from"./app.63e06a35.js";import{l as s,m as c,E as a,G as t,p as e,Y as p,C as n,K as o}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var l="/assets/How-to-Scan-a-File-for-Viruses-Malware-in-Node.js_0.2bbe7db0.png";const u={},r=n("p",null,"\uB108\uBB34 \uB9CE\uC740 \uD30C\uC77C \uBCF4\uC548\uC740 \uC5C6\uB2E4\uACE0 \uB9D0\uD560 \uC218 \uC5C6\uC5B4\uC694. \uC0C8\uB85C\uC6B4 \uC885\uB958\uC758 \uC545\uC131 \uCF54\uB4DC\uAC00 \uAC70\uC758 \uB9E4\uC77C \uAC1C\uBC1C\uB418\uACE0 \uC788\uACE0, \uC0C8\uB85C\uC6B4 & \uAE30\uC874\uC758 \uC704\uD611\uC73C\uB85C\uBD80\uD130 \uCDA9\uBD84\uD788 \uC790\uC2E0\uC744 \uBCF4\uD638\uD558\uC9C0 \uC54A\uC73C\uBA74 \uADF8 \uC704\uD611\uC5D0 \uC190\uC27D\uAC8C \uB178\uCD9C\uB420 \uC218 \uC788\uC5B4\uC694.",-1),d=n("p",null,[n("img",{src:l,alt:"\uD30C\uC77C \uBC14\uC774\uB7EC\uC2A4 \uBC0F \uB9EC\uC6E8\uC5B4 \uC2A4\uCE94 \uBC29\uBC95"})],-1),k=n("p",null,"\uC544\uB798 Node.js \uCF54\uB4DC \uC608\uC81C\uB97C \uC0AC\uC6A9\uD558\uBA74 \uAC1C\uBCC4 \uD30C\uC77C\uC744 \uBC14\uC774\uB7EC\uC2A4 \uBC0F \uB9EC\uC6E8\uC5B4\uB85C \uC2A4\uCE94\uD558\uB294 \uBB34\uB8CC API\uB97C \uD65C\uC6A9\uD560 \uC218 \uC788\uC5B4\uC694. \uC774 \uC11C\uBE44\uC2A4\uB294 \uC2DC\uADF8\uB2C8\uCC98 \uAE30\uBC18 \uC2A4\uCE94\uC744 \uC801\uC6A9\uD558\uC5EC \uD734\uB9AC\uC2A4\uD2F1 \uBC0F \uAE30\uD0C0 \uCD5C\uCCA8\uB2E8 \uC608\uCE21 \uC704\uD611 \uD0D0\uC9C0 \uBC29\uBC95\uC744 \uACB0\uD569\uD558\uC5EC, \uCE68\uD574\uB41C \uD30C\uC77C \uB0B4\uC5D0 \uB3C4\uC0AC\uB9AC\uB294 \uAE30\uC874 \uBC0F \uC54C\uB824\uC9C0\uC9C0 \uC54A\uC740 \uC704\uD611 \uC720\uD615\uC744 \uC2DD\uBCC4\uD560 \uC218 \uC788\uAC8C \uD574\uC918\uC694. \uC774 \uC2A4\uCE94\uC744 \uD1B5\uD574 \uB2E4\uC591\uD55C \uD30C\uC77C\uC744 \uC2E4\uD589\uD560 \uC218 \uC788\uC5B4\uC694. Office \uBC0F PDF \uD615\uC2DD\uC758 \uBCF4\uAD00 \uD30C\uC77C, HTML \uBC0F \uAE30\uD0C0 \uBCF4\uAD00 \uD30C\uC77C \uB4F1\uC774 \uD3EC\uD568\uB3FC\uC694.",-1),v=n("p",null,"API \uD638\uCD9C\uC744 \uBA87 \uAC00\uC9C0 \uAC04\uB2E8\uD55C \uB2E8\uACC4\uB85C \uAD6C\uC870\uD654\uD560 \uC218 \uC788\uC5B4\uC694. \uBA3C\uC800 \uC544\uB798 \uBA85\uB839\uC744 \uC2E4\uD589\uD558\uC5EC SDK\uB97C \uC124\uCE58\uD569\uC2DC\uB2E4.",-1),m=n("p",null,[n("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),b=o(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm install cloudmersive<span class="token operator">-</span>virus<span class="token operator">-</span>api<span class="token operator">-</span>client <span class="token operator">--</span>save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uB610\uB294 \uB2E4\uC74C \uC2A4\uB2C8\uD3AB\uC744 package.json \uD30C\uC77C\uC5D0 \uCD94\uAC00\uD569\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token string-property property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;cloudmersive-virus-api-client&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.1.9&quot;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uB9C8\uC9C0\uB9C9\uC73C\uB85C \uC544\uB798 \uCF54\uB4DC \uC608\uC81C\uB97C \uD30C\uC77C\uC5D0 \uBCF5\uC0AC\uD574\uC8FC\uC138\uC694. \uC694\uCCAD\uC744 \uC2B9\uC778\uD558\uAE30 \uC704\uD574 Cloudmersive \uC6F9\uC0AC\uC774\uD2B8\uC5D0\uC11C \uBB34\uB8CC \uD2F0\uC5B4 API \uD0A4\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574 \uB9E4\uC6D4 \uCD5C\uB300 800\uD68C\uC758 API \uD638\uCD9C\uC744 \uCD94\uAC00\uC801\uC778 \uC57D\uC815 \uC5C6\uC774 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),f=o(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> CloudmersiveVirusApiClient <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;cloudmersive-virus-api-client&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> defaultClient <span class="token operator">=</span> CloudmersiveVirusApiClient<span class="token punctuation">.</span>ApiClient<span class="token punctuation">.</span>instance<span class="token punctuation">;</span>

<span class="token comment">// API \uD0A4 \uAD8C\uD55C \uAD6C\uC131: Apikey</span>
<span class="token keyword">var</span> Apikey <span class="token operator">=</span> defaultClient<span class="token punctuation">.</span>authentications<span class="token punctuation">[</span><span class="token string">&quot;Apikey&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
Apikey<span class="token punctuation">.</span>apiKey <span class="token operator">=</span> <span class="token string">&quot;YOUR API KEY&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> apiInstance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CloudmersiveVirusApiClient<span class="token punctuation">.</span>ScanApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> inputFile <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&quot;C:\\\\temp\\\\inputfile&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>buffer<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \uD30C\uC77C | \uC791\uC5C5\uC744 \uC218\uD589\uD560 \uC785\uB825 \uD30C\uC77C.</span>

<span class="token keyword">var</span> <span class="token function-variable function">callback</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> data<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;API\uAC00 \uC131\uACF5\uC801\uC73C\uB85C \uD638\uCD9C\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uBC18\uD658\uB41C \uB370\uC774\uD130: &quot;</span> <span class="token operator">+</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
apiInstance<span class="token punctuation">.</span><span class="token function">scanFile</span><span class="token punctuation">(</span>inputFile<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uAC01 \uD30C\uC77C\uC774 \uBA54\uBAA8\uB9AC\uC5D0\uC11C \uC2A4\uCE94\uB418\uBA70, \uC2A4\uCE94 \uC791\uC5C5\uC774 \uC644\uB8CC\uB418\uBA74 \uD30C\uC77C \uB370\uC774\uD130\uAC00 \uBAA8\uB450 \uD574\uC81C\uB429\uB2C8\uB2E4. \uC774\uB294 \uCF58\uD150\uCE20 \uBCF4\uC548\uC774 \uCD5C\uC6B0\uC120\uC774 \uB418\uB294 \uACE0\uC18D \uC11C\uBE44\uC2A4\uB97C \uAC00\uB2A5\uD558\uAC8C \uD569\uB2C8\uB2E4.</p><p>\uC774\uC81C \uC6B0\uB9AC\uB294 \uBE60\uB974\uACE0 \uC27D\uAC8C \uAC1C\uBCC4 \uD30C\uC77C\uC744 \uC704\uD611\uC73C\uB85C\uBD80\uD130 \uC2A4\uCE94\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4!</p>`,3);function g(y,_){return s(),c("div",null,[r,d,k,v,m,(s(),a(p("script"),null,{default:t(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b,(s(),a(p("script"),null,{default:t(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),f])}var x=i(u,[["render",g],["__file","index.html.vue"]]);export{x as default};
