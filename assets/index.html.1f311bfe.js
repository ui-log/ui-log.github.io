import{_ as l}from"./app.3052dcfb.js";import{l as s,m as o,E as a,G as t,p as e,Y as p,K as n}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var i="/assets/IndexSignaturesinTypeScript_0.22e88a0f.png";const c={},r=n('<p>\uC778\uB371\uC2A4 \uC2DC\uADF8\uB2C8\uCC98\uB294 \uC6B0\uB9AC\uAC00 \uC775\uC219\uD558\uC9C0 \uC54A\uC740 \uC18D\uC131\uC744 \uD3EC\uD568\uD558\uB294 \uAC1D\uCCB4\uB97C \uB2E4\uB8E8\uB294 \uB370 \uC801\uD569\uD55C \uBC29\uBC95\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uADF8 \uAD6C\uBB38\uC740 \uC77C\uBC18\uC801\uC778 \uC18D\uC131\uC744 \uC124\uBA85\uD558\uC9C0\uB9CC, \uD45C\uC900 \uC18D\uC131 \uC774\uB984 \uB300\uC2E0 \uD0A4\uC758 \uC720\uD615\uACFC \uC18D\uC131\uC744 \uC815\uC758\uD569\uB2C8\uB2E4.</p><p><img src="'+i+`" alt="\uC778\uB371\uC2A4 \uC2DC\uADF8\uB2C8\uCC98"></p><p>\uC5D0\uB108\uC9C0 \uD68C\uC0AC\uAC00 \uACE0\uAC1D\uC5D0\uAC8C \uBCF4\uB0BC \uC218 \uC788\uB294 \uBA87 \uAC00\uC9C0 \uC720\uD2F8\uB9AC\uD2F0 \uCCAD\uAD6C\uC11C \uC608\uC81C\uB97C \uC0B4\uD3B4\uBD05\uC2DC\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> utilityBill1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">electricty</span><span class="token operator">:</span> <span class="token number">80.50</span><span class="token punctuation">,</span>
  <span class="token literal-property property">gas</span><span class="token operator">:</span> <span class="token number">65.05</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> utilityBill2 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">electricty</span><span class="token operator">:</span> <span class="token number">102.34</span><span class="token punctuation">,</span>
  <span class="token literal-property property">water</span><span class="token operator">:</span> <span class="token number">91.00</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> utilityBill3 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">electricty</span><span class="token operator">:</span> <span class="token number">89.15</span><span class="token punctuation">,</span>
  <span class="token literal-property property">hotWater</span><span class="token operator">:</span> <span class="token number">44.67</span><span class="token punctuation">,</span>
  <span class="token literal-property property">water</span><span class="token operator">:</span> <span class="token number">97.78</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),u=n(`<p>\uD574\uB2F9 \uD569\uACC4\uB97C \uACC4\uC0B0\uD558\uB294 \uD568\uC218\uB97C \uB9CC\uB4E4\uC5B4\uBCF4\uC138\uC694.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">calculateBillTotal</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">utilityBill</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> number <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">let</span> total <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
 <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> utilityBill<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  total <span class="token operator">+=</span> utilityBill<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 <span class="token keyword">return</span> total<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774 \uD568\uC218\uB97C \uC62C\uBC14\uB974\uAC8C \uD0C0\uC785 \uC9C0\uC815\uD558\uACE0 \uC2F6\uC2B5\uB2C8\uB2E4. any\uB97C \uC0AC\uC6A9\uD558\uB294 \uB300\uC2E0 number \uAC12\uC744 \uAC00\uC9C4 \uBAA8\uB4E0 \uAC1D\uCCB4\uB97C \uBC1B\uC744 \uC218 \uC788\uB3C4\uB85D \uD558\uACE0 \uC2F6\uC2B5\uB2C8\uB2E4.</p><p>\uBB38\uC81C\uB97C \uD574\uACB0\uD558\uAE30 \uC704\uD574 \uC778\uB371\uC2A4 \uC2DC\uADF8\uB2C8\uCC98\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uC74C\uACFC \uAC19\uC740 \uD615\uD0DC\uB97C \uAC00\uC9C0\uACE0 \uC788\uC2B5\uB2C8\uB2E4:</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),d=n(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span> <span class="token punctuation">[</span>\uD0A4<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> number <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uC774\uB294 \uAC1D\uCCB4\uC758 \uBAA8\uB4E0 \uBA64\uBC84\uAC00 \uBB38\uC790\uC5F4 \uC778\uB371\uC2A4 \uC2DC\uADF8\uB108\uCC98\uB97C \uC900\uC218\uD574\uC57C \uD568\uC744 \uB098\uD0C0\uB0C5\uB2C8\uB2E4.</p><p>\uC5B4\uB514\uC5D0\uB098 &#39;any&#39; \uB300\uC2E0 \uC778\uB371\uC2A4 \uC2DC\uADF8\uB108\uCC98\uB97C \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">calculateBillTotal</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">utilityBill</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>\uD0A4<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> number <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> total <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> utilityBill<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    total <span class="token operator">+=</span> utilityBill<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span> 
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> total<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),k=n(`<p>TypeScript\uC5D0\uAC8C utilityBill\uC774 \uBB38\uC790\uC5F4 \uC720\uD615\uC778 \uD0A4\uC640 \uC22B\uC790 \uC720\uD615\uC778 \uAC12\uC73C\uB85C \uAD6C\uC131\uB41C \uAC1D\uCCB4\uC5EC\uC57C \uD55C\uB2E4\uACE0 \uC54C\uB824\uC90D\uB2C8\uB2E4. \uC774\uB807\uAC8C \uD568\uC73C\uB85C\uC368 calculateBillTotal \uD568\uC218\uC5D0 utilityBill1, utilityBill2 \uBC0F utilityBill3 \uC911 \uC5B4\uB290 \uAC83\uC774\uB77C\uB3C4 \uD568\uC218\uC758 \uC778\uC218\uB85C \uC804\uB2EC\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uADF8\uB7EC\uB098 \uBB38\uC790\uC5F4\uC744 \uAC12\uC73C\uB85C \uAC16\uB294 \uAC1D\uCCB4\uB97C \uC804\uB2EC\uD558\uB824\uACE0 \uD558\uBA74 TypeScript\uAC00 \uC624\uB958 \uBA54\uC2DC\uC9C0\uB97C throw\uD560 \uAC83\uC785\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> utilityBill <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">electricty</span><span class="token operator">:</span> <span class="token string">&#39;89.15&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">hotWater</span><span class="token operator">:</span> <span class="token number">44.67</span><span class="token punctuation">,</span>
  <span class="token literal-property property">water</span><span class="token operator">:</span> <span class="token number">97.78</span> 
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">calculateBillTotal</span><span class="token punctuation">(</span>utilityBill<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*                 ~~~~~~~~~~~~ &#39;{ electricity: string; }&#39; \uC720\uD615\uC758 \uC778\uC218\uB294 
    &#39;{ [key: string]: number; }&#39; \uC720\uD615\uC758 \uB9E4\uAC1C\uBCC0\uC218\uC5D0 \uD560\uB2F9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.
    \uC18D\uC131 &#39;electricity&#39;\uC774(\uAC00) \uC778\uB371\uC2A4 \uC2DC\uADF8\uB2C8\uCC98\uC640 \uD638\uD658\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.
    &#39;string&#39; \uC720\uD615\uC740 &#39;number&#39; \uC720\uD615\uC5D0 \uD560\uB2F9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.ts(2345)
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u{1F4A1} \uC778\uB371\uC2A4 \uC2DC\uADF8\uB2C8\uCC98\uB294 \uD0A4 \uC720\uD615\uC73C\uB85C \uBB38\uC790\uC5F4, \uC22B\uC790 \uB610\uB294 \uC2EC\uBCFC\uB9CC\uC744 \uD5C8\uC6A9\uD569\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),v=n(`<h1 id="\u110C\u1169\u11AB\u110C\u1162\u1112\u1161\u110C\u1175-\u110B\u1161\u11AD\u1102\u1173\u11AB-\u1109\u1169\u11A8\u1109\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u110C\u1169\u11AB\u110C\u1162\u1112\u1161\u110C\u1175-\u110B\u1161\u11AD\u1102\u1173\u11AB-\u1109\u1169\u11A8\u1109\u1165\u11BC" aria-hidden="true">#</a> \uC874\uC7AC\uD558\uC9C0 \uC54A\uB294 \uC18D\uC131</h1><p>\uC778\uB371\uC2A4 \uC2DC\uADF8\uB2C8\uCC98\uB97C \uC0AC\uC6A9\uD560 \uB54C \uC8FC\uC758\uD574\uC57C \uD560 \uC810 \uC911 \uD558\uB098\uB294 \uC874\uC7AC\uD558\uC9C0 \uC54A\uB294 \uC18D\uC131\uC5D0 \uC561\uC138\uC2A4\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4. ****</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>type UtilityBill <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>key<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token literal-property property">utilityBill</span><span class="token operator">:</span> UtilityBill <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">electricty</span><span class="token operator">:</span> <span class="token number">89.15</span><span class="token punctuation">,</span>
 <span class="token literal-property property">hotWater</span><span class="token operator">:</span> <span class="token number">44.67</span><span class="token punctuation">,</span>
 <span class="token literal-property property">water</span><span class="token operator">:</span> <span class="token number">97.78</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> phoneBill <span class="token operator">=</span> utilityBill<span class="token punctuation">[</span><span class="token string">&#39;phone&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
phoneBill<span class="token punctuation">;</span> <span class="token comment">// \u{1F449}\u{1F3FB} undefined \u{1F4A5}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774 \uC608\uC5D0\uC11C TypeScript\uB294 \uACBD\uACE0\uB97C \uD45C\uC2DC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC778\uB371\uC2A4 \uC2DC\uADF8\uB2C8\uCC98\uB294 \uB2E8\uC21C\uD788 \uD0A4 \uC720\uD615\uC744 \uAC12 \uC720\uD615\uC5D0 \uB9E4\uD551\uD558\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. \uB530\uB77C\uC11C UtilityBill \uC720\uD615\uC744 \uC62C\uBC14\uB974\uAC8C \uC8FC\uC11D \uCC98\uB9AC\uD574\uC57C \uD569\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),m=n(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>type UtilityBill <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>key<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> number <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u{1F6A8} \uB9CC\uC57D \uBB38\uC790\uC5F4, \uC22B\uC790 \uB610\uB294 \uC2EC\uBCFC \uC774\uC678\uC758 \uD0C0\uC785\uC73C\uB85C \uC778\uB371\uC2A4 \uC2DC\uADF8\uB2C8\uCC98\uB97C \uC8FC\uC11D \uCC98\uB9AC\uD558\uB824\uACE0 \uD558\uBA74 TypeScript\uC5D0\uC11C \uD5C8\uC6A9\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>type Utilities <span class="token operator">=</span> <span class="token string">&quot;\uC804\uAE30&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;\uAC00\uC2A4&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;\uC628\uC218&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;\uBB3C&quot;</span><span class="token punctuation">;</span>
type UtilityBill <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>key<span class="token operator">:</span> Utilities <span class="token punctuation">]</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token comment">// ~~~ \uC778\uB371\uC2A4 \uC2DC\uADF8\uB2C8\uCC98\uC758 \uB9E4\uAC1C\uBCC0\uC218 \uD0C0\uC785\uC740 \uC720\uB2C8\uC5B8 \uD0C0\uC785\uC774 \uB420 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.</span>
<span class="token comment">// \uB300\uC2E0 mapped object type\uC744 \uC0AC\uC6A9\uD574 \uBCF4\uC138\uC694 \u{1F4A5}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="mapped-types" tabindex="-1"><a class="header-anchor" href="#mapped-types" aria-hidden="true">#</a> Mapped Types</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),y=n(`<p>Mapped Types\uC740 \uC778\uB371\uC2A4 \uC2DC\uADF8\uB2C8\uCC98\uB97C \uC0AC\uC6A9\uD558\uC5EC \uB9AC\uD130\uB7F4 \uBB38\uC790\uC5F4\uC758 \uC720\uB2C8\uC5B8\uC5D0 \uC18D\uD558\uB294 \uC778\uB371\uC2A4 \uBB38\uC790\uC5F4\uC744 \uAC15\uC81C\uB85C \uC9C0\uC815\uD560 \uC218 \uC788\uAC8C \uD569\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>type Utilities <span class="token operator">=</span> <span class="token string">&quot;\uC804\uAE30&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;\uAC00\uC2A4&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;\uC628\uC218&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;\uBB3C&quot;</span><span class="token punctuation">;</span>

type UtilityBill <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>k <span class="token keyword">in</span> Utilities<span class="token punctuation">]</span><span class="token operator">:</span> number <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="record-keys-type" tabindex="-1"><a class="header-anchor" href="#record-keys-type" aria-hidden="true">#</a> Record&lt;Keys, Type&gt;</h1><p>\uC778\uB371\uC2A4 \uC2DC\uADF8\uB2C8\uCC98\uC640 \uC720\uC0AC\uD558\uAC8C, TypeScript\uC5D0\uB294 \uB808\uCF54\uB4DC\uB97C \uC8FC\uC11D \uCC98\uB9AC\uD558\uB294 \uC720\uD2F8\uB9AC\uD2F0 \uD0C0\uC785 Record&lt;Keys, Type&gt;\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uC6B0\uB9AC\uB294 \uB354 \uC815\uD655\uD55C \uC720\uD615\uC73C\uB85C UtilityBill \uD0C0\uC785\uC744 \uC8FC\uC11D \uCC98\uB9AC\uD558\uAE30 \uC704\uD574 Record&lt;Keys, Type&gt;\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),b=n(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>\uC720\uD2F8\uB9AC\uD2F0 \uD0C0\uC785\uC744 \uC815\uC758\uD558\uACE0 \uD544\uC694\uD55C \uAC12\uC744 \uD560\uB2F9\uD560 \uC218 \uC788\uB294 \uC720\uD2F8\uB9AC\uD2F0 \uBE4C \uAC1D\uCCB4\uAC00 \uC788\uC5B4\uC694<span class="token punctuation">.</span> 

\uC720\uD2F8\uB9AC\uD2F0 \uBE4C \uAC1D\uCCB4\uC5D0\uB294 \uC804\uAE30\uC138<span class="token punctuation">,</span> \uAC00\uC2A4\uC694\uAE08<span class="token punctuation">,</span> \uC628\uC218\uC694\uAE08<span class="token punctuation">,</span> \uC218\uB3C4\uC694\uAE08\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC5B4\uC694<span class="token punctuation">.</span>

# \uC694\uC57D

\uC778\uB371\uC2A4 \uC2DC\uADF8\uB2C8\uCC98\uB294 \uC18D\uC131\uC758 \uC138\uBD80 \uC815\uBCF4\uAC00 \uC775\uC219\uD558\uC9C0 \uC54A\uC740 \uAC1D\uCCB4\uB97C \uAD00\uB9AC\uD558\uB294 \uC801\uD569\uD55C \uBC29\uBC95\uC744 \uC81C\uACF5\uD574\uC694<span class="token punctuation">.</span> \uBB38\uBC95\uC740 \uC77C\uBC18 \uC18D\uC131\uC744 \uC124\uBA85\uD558\uC9C0\uB9CC \uC77C\uBC18\uC801\uC778 \uC18D\uC131 \uC774\uB984\uC744 \uC791\uC131\uD558\uB294 \uB300\uC2E0 \uD0A4\uC758 \uC720\uD615\uACFC \uC18D\uC131\uC744 \uC815\uC758\uD574\uC694<span class="token punctuation">.</span>

\uC778\uB371\uC2A4 \uC2DC\uADF8\uB2C8\uCC98\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC77C\uBC18\uC801\uC778 \uAC1C\uCCB4\uB97C \uC8FC\uC11D \uCC98\uB9AC\uD560 \uC218 \uC788\uC9C0\uB9CC<span class="token punctuation">,</span> \uD0A4\uAC00 \uBB38\uC790\uC5F4 \uC720\uD615\uC778 \uAC1D\uCCB4\uB97C \uC8FC\uC11D \uCC98\uB9AC\uD558\uB294 \uACBD\uC6B0 Mapped Types \uB610\uB294 Record<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Keys, Type</span><span class="token template-punctuation string">\`</span></span> \uC720\uD2F8\uB9AC\uD2F0 \uD0C0\uC785\uC744 \uC0AC\uC6A9\uD558\uC5EC \uD0A4\uB85C \uC0AC\uC6A9\uB41C \uBB38\uC790\uC5F4 \uB9AC\uD130\uB7F4\uC758 \uC720\uB2C8\uC5B8\uC744 \uD3EC\uD568\uD558\uB294 \uAC1D\uCCB4\uB97C \uC8FC\uC11D \uCC98\uB9AC\uD560 \uC218 \uC788\uC5B4\uC694<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function g(h,w){return s(),o("div",null,[r,(s(),a(p("script"),null,{default:t(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),u,(s(),a(p("script"),null,{default:t(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),d,(s(),a(p("script"),null,{default:t(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),k,(s(),a(p("script"),null,{default:t(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),v,(s(),a(p("script"),null,{default:t(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),m,(s(),a(p("script"),null,{default:t(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),y,(s(),a(p("script"),null,{default:t(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b])}var q=l(c,[["render",g],["__file","index.html.vue"]]);export{q as default};
