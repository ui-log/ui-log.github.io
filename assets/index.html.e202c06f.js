import{_ as l}from"./app.3052dcfb.js";import{l as n,m as i,E as e,G as t,p as s,Y as p,C as a,K as o}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var c="/assets/AdvancedStylingwithSass_0.5d7965bd.png";const r={},u=a("img",{src:c},null,-1),d=a("p",null,"\uC5EC\uAE30\uC11C Sass\uB97C \uC0AC\uC6A9\uD55C \uACE0\uAE09 \uC2A4\uD0C0\uC77C\uB9C1\uC5D0 \uB300\uD574 \uC774\uC57C\uAE30\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574 \uC0AC\uC6A9\uC790 \uC815\uC758 SCSS \uD074\uB798\uC2A4\uB97C \uC791\uC131\uD560 \uB54C \uC6F9 \uB514\uC790\uC778\uC758 \uD6A8\uC728\uC131\uC744 \uD5A5\uC0C1\uC2DC\uD0AC \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),v=a("h1",{id:"sass-\u1107\u1167\u11AB\u1109\u116E",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#sass-\u1107\u1167\u11AB\u1109\u116E","aria-hidden":"true"},"#"),s(" Sass \uBCC0\uC218:")],-1),k=a("p",null,"Sass\uB97C \uC0AC\uC6A9\uD558\uBA74 \uBB38\uC790\uC5F4, \uC22B\uC790, \uC0C9\uC0C1, \uBD80\uC6B8 \uAC12, \uB9AC\uC2A4\uD2B8 \uBC0F \uB110\uACFC \uAC19\uC740 \uB2E4\uC591\uD55C \uBCC0\uC218 \uC720\uD615\uC744 \uD65C\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4:",-1),m=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),b=o(`<div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token property"><span class="token variable">$myColor</span></span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$myWidth</span></span><span class="token punctuation">:</span> 680px<span class="token punctuation">;</span>

<span class="token selector">.sampleClass </span><span class="token punctuation">{</span>
  <span class="token property">color</span> <span class="token punctuation">:</span> <span class="token variable">$myColor</span><span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$myWidth</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC704\uC758 \uCF54\uB4DC\uC5D0\uC11C .sampleClass\uB294 Sass \uBCC0\uC218\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC0C9\uC0C1\uACFC \uB108\uBE44\uB97C \uC81C\uACF5\uD558\uC5EC \uC2A4\uD0C0\uC77C\uB9C1\uC744 \uC720\uC5F0\uD558\uACE0 \uC720\uC9C0\uBCF4\uC218 \uAC00\uB2A5\uD558\uAC8C \uD569\uB2C8\uB2E4.</p><h1 id="scss-\u110C\u116E\u11BC\u110E\u1165\u11B8" tabindex="-1"><a class="header-anchor" href="#scss-\u110C\u116E\u11BC\u110E\u1165\u11B8" aria-hidden="true">#</a> SCSS \uC911\uCCA9:</h1><p>Sass\uB294 SCSS\uC5D0\uC11C \uC911\uCCA9\uC744 \uC18C\uAC1C\uD558\uC5EC \uC2A4\uD0C0\uC77C\uC744 \uBCF4\uB2E4 \uAD6C\uC870\uD654\uB418\uACE0 \uAC00\uB3C5\uC131\uC788\uAC8C \uAD6C\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uC74C\uC758 SCSS \uCF54\uB4DC:\`\`\`</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),g=o(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">.</span>content <span class="token punctuation">{</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span>

  a <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> #2ecc71<span class="token punctuation">;</span>

    <span class="token operator">&amp;</span><span class="token operator">:</span>hover <span class="token punctuation">{</span>
      text<span class="token operator">-</span>decoration<span class="token operator">:</span> underline<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC704 \uCF54\uB4DC\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 CSS \uCF54\uB4DC\uC640 \uB3D9\uC77C\uD569\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">.</span>content <span class="token punctuation">{</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>content a <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #2ecc71<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>content a<span class="token operator">:</span>hover <span class="token punctuation">{</span>
  text<span class="token operator">-</span>decoration<span class="token operator">:</span> underline<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="sass-\u1111\u1161\u110B\u1175\u11AF-\u1100\u1161\u110C\u1167\u110B\u1169\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#sass-\u1111\u1161\u110B\u1175\u11AF-\u1100\u1161\u110C\u1167\u110B\u1169\u1100\u1175" aria-hidden="true">#</a> Sass \uD30C\uC77C \uAC00\uC838\uC624\uAE30:</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),y=o(`<p>CSS\uC640 \uC720\uC0AC\uD558\uAC8C, Sass\uB294 \uC678\uBD80 \uD30C\uC77C\uC744 \uD3EC\uD568\uD558\uAE30 \uC704\uD55C @import \uC9C0\uC2DC\uBB38\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// _colors.scss \uD30C\uC77C</span>
<span class="token literal-property property">$myColor</span><span class="token operator">:</span> #<span class="token constant">EE82EE</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>@<span class="token keyword">import</span> <span class="token string">&quot;colors&quot;</span><span class="token punctuation">;</span>
body <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> $myColor<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774\uB97C \uD1B5\uD574 \uC678\uBD80 \uD30C\uC77C\uC5D0\uC11C \uD2B9\uC815 \uC2A4\uD0C0\uC77C\uC744 \uAC00\uC838\uC640 \uCF54\uB4DC \uC870\uC9C1\uD654\uC640 \uC720\uC9C0 \uBCF4\uC218\uC131\uC744 \uB192\uC77C \uC218 \uC788\uB294 \uBAA8\uB4C8\uC2DD \uC811\uADFC\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),h=o(`<h1 id="sass-\u1112\u116A\u11A8\u110C\u1161\u11BC-\u110F\u1173\u11AF\u1105\u1162\u1109\u1173" tabindex="-1"><a class="header-anchor" href="#sass-\u1112\u116A\u11A8\u110C\u1161\u11BC-\u110F\u1173\u11AF\u1105\u1162\u1109\u1173" aria-hidden="true">#</a> Sass \uD655\uC7A5 \uD074\uB798\uC2A4:</h1><p>@extend\uC740 Sass\uC5D0\uC11C \uC2A4\uD0C0\uC77C\uC744 \uC0C1\uC18D\uD560 \uC218 \uC788\uAC8C \uD574\uC8FC\uC5B4 \uC2A4\uD0C0\uC77C\uC2DC\uD2B8\uC758 \uC911\uBCF5\uC744 \uC904\uC774\uB294 \uAE30\uB2A5\uC785\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574 \uC77C\uAD00\uC131\uC744 \uC720\uC9C0\uD558\uC5EC \uC720\uC9C0\uBCF4\uC218\uAC00 \uD5A5\uC0C1\uB429\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">.</span>text <span class="token punctuation">{</span>
  font<span class="token operator">-</span>family<span class="token operator">:</span> <span class="token string">&#39;Arial&#39;</span><span class="token punctuation">,</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> 16px<span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">333</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// @extend\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC2A4\uD0C0\uC77C \uC801\uC6A9</span>
p <span class="token punctuation">{</span>
  @extend <span class="token punctuation">.</span>text<span class="token punctuation">;</span>
  font<span class="token operator">-</span>weight<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">;</span> <span class="token comment">// &lt;p&gt;\uC5D0 \uB300\uD55C \uD2B9\uC815 \uC2A4\uD0C0\uC77C \uCD94\uAC00</span>
<span class="token punctuation">}</span>

span <span class="token punctuation">{</span>
  @extend <span class="token punctuation">.</span>text<span class="token punctuation">;</span>
  font<span class="token operator">-</span>weight<span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">;</span> <span class="token comment">// &lt;span&gt;\uC5D0 \uB300\uD55C \uD2B9\uC815 \uC2A4\uD0C0\uC77C \uCD94\uAC00</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="sass\u110B\u1166\u1109\u1165-\u1112\u1161\u11B7\u1109\u116E-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#sass\u110B\u1166\u1109\u1165-\u1112\u1161\u11B7\u1109\u116E-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> Sass\uC5D0\uC11C \uD568\uC218 \uC0AC\uC6A9\uD558\uAE30:</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),f=o(`<p>Sass \uD568\uC218\uB97C \uC0AC\uC6A9\uD558\uBA74 \uACC4\uC0B0\uC744 \uC218\uD589\uD558\uC5EC \uB3D9\uC801 \uC2A4\uD0C0\uC77C\uB9C1\uC744 \uAC00\uB2A5\uD558\uAC8C \uD558\uBA70, \uB354 \uB2E4\uC591\uD558\uACE0 \uC7AC\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uC2A4\uD0C0\uC77C\uC744 \uB9CC\uB4E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>@<span class="token keyword">function</span> <span class="token function">calculateMarginLeft</span><span class="token punctuation">(</span><span class="token parameter">$n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \uACC4\uC0B0 \uC218\uD589 \uD6C4 \uAC12\uC744 \uBC18\uD658</span>
  @<span class="token keyword">return</span> $n <span class="token operator">*</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>sample <span class="token punctuation">{</span>
  <span class="token literal-property property">float</span><span class="token operator">:</span> left<span class="token punctuation">;</span>
  margin<span class="token operator">-</span>left<span class="token operator">:</span> <span class="token function">calculateMarginLeft</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="if-else-\u110C\u1169\u1100\u1165\u11AB-\u1109\u1161\u110B\u116D\u11BC" tabindex="-1"><a class="header-anchor" href="#if-else-\u110C\u1169\u1100\u1165\u11AB-\u1109\u1161\u110B\u116D\u11BC" aria-hidden="true">#</a> If Else \uC870\uAC74 \uC0AC\uC6A9:</h1><p>Sass\uC758 \uC870\uAC74\uBB38(@if \uBC0F @else if)\uC744 \uC0AC\uC6A9\uD558\uBA74 \uD2B9\uC815 \uC870\uAC74\uC5D0 \uAE30\uBC18\uD558\uC5EC \uC2A4\uD0C0\uC77C\uC744 \uC801\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),x=o(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>@<span class="token keyword">function</span> get<span class="token operator">-</span>text<span class="token operator">-</span><span class="token function">color</span><span class="token punctuation">(</span><span class="token parameter">$input</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  @<span class="token keyword">if</span> $input <span class="token operator">==</span> <span class="token string">&quot;light&quot;</span> <span class="token punctuation">{</span>
    @<span class="token keyword">return</span> #<span class="token number">333</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> @<span class="token keyword">else</span> <span class="token keyword">if</span> $input <span class="token operator">==</span> <span class="token string">&quot;dark&quot;</span> <span class="token punctuation">{</span>
    @<span class="token keyword">return</span> #fff<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>text <span class="token punctuation">{</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> 16px<span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> get<span class="token operator">-</span>text<span class="token operator">-</span><span class="token function">color</span><span class="token punctuation">(</span><span class="token string">&quot;light&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="scss\u110B\u1166\u1109\u1165-for-\u1105\u116E\u1111\u1173-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#scss\u110B\u1166\u1109\u1165-for-\u1105\u116E\u1111\u1173-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> SCSS\uC5D0\uC11C For \uB8E8\uD504 \uC0AC\uC6A9\uD558\uAE30:</h1><p>Sass @each \uB8E8\uD504\uB294 \uC5EC\uB7EC \uC694\uC18C\uC5D0 \uB300\uD55C \uC2A4\uD0C0\uC77C \uC0DD\uC131\uC744 \uAC04\uD3B8\uD654\uD558\uC5EC \uD6A8\uC728\uC131\uC744 \uB192\uC785\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \uCD08\uAE30\uAC12\uC744 \uAC00\uC9C4 \uD14C\uB9C8 \uC0C9\uC0C1 \uB9F5 \uC124\uC815</span>
$theme<span class="token operator">-</span>colors<span class="token operator">:</span> <span class="token punctuation">(</span>
  <span class="token string-property property">&quot;primary&quot;</span><span class="token operator">:</span> #3498db<span class="token punctuation">,</span>
  <span class="token string-property property">&quot;secondary&quot;</span><span class="token operator">:</span> #2ecc71<span class="token punctuation">,</span>
  <span class="token string-property property">&quot;success&quot;</span><span class="token operator">:</span> #28a745<span class="token punctuation">,</span>
  <span class="token string-property property">&quot;info&quot;</span><span class="token operator">:</span> #17a2b8<span class="token punctuation">,</span>
  <span class="token string-property property">&quot;warning&quot;</span><span class="token operator">:</span> #ffc107<span class="token punctuation">,</span>
  <span class="token string-property property">&quot;danger&quot;</span><span class="token operator">:</span> #dc3545<span class="token punctuation">,</span>
  <span class="token string-property property">&quot;light&quot;</span><span class="token operator">:</span> #f8f9fa<span class="token punctuation">,</span>
  <span class="token string-property property">&quot;dark&quot;</span><span class="token operator">:</span> #343a40
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \uD14C\uB9C8 \uC0C9\uC0C1 \uB9F5\uC744 \uC21C\uD68C\uD558\uBA70 \uC2A4\uD0C0\uC77C \uC0DD\uC131</span>
@each $state<span class="token punctuation">,</span> $color <span class="token keyword">in</span> $theme<span class="token operator">-</span>colors <span class="token punctuation">{</span>
  <span class="token punctuation">.</span>text<span class="token operator">-</span>#<span class="token punctuation">{</span>$state<span class="token punctuation">}</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> $color<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),_=o(`<p>\uC704\uC758 \uCF54\uB4DC\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">.</span>text<span class="token operator">-</span>primary <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #3498db<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>text<span class="token operator">-</span>secondary <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #2ecc71<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>text<span class="token operator">-</span>success <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #28a745<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>text<span class="token operator">-</span>info <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #17a2b8<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>text<span class="token operator">-</span>warning <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #ffc107<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>text<span class="token operator">-</span>danger <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #dc3545<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>text<span class="token operator">-</span>light <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #f8f9fa<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>text<span class="token operator">-</span>dark <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #343a40<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u1109\u1162\u11A8\u1109\u1161\u11BC-\u1112\u1161\u11B7\u1109\u116E" tabindex="-1"><a class="header-anchor" href="#\u1109\u1162\u11A8\u1109\u1161\u11BC-\u1112\u1161\u11B7\u1109\u116E" aria-hidden="true">#</a> \uC0C9\uC0C1 \uD568\uC218:</h1><p>Sass \uC0C9\uC0C1 \uD568\uC218\uC778 lighten\uACFC \uAC19\uC740 \uAC83\uB4E4\uC744 \uC0AC\uC6A9\uD558\uBA74 \uC0C9\uC0C1\uC744 \uB3D9\uC801\uC73C\uB85C \uC870\uC791\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uC608\uC2DC\uB294 \uC774\uB7EC\uD55C \uD568\uC218\uAC00 \uC5B4\uB5BB\uAC8C \uB2E4\uC591\uD55C \uC0C9\uC0C1 \uC870\uD569\uC744 \uB9CC\uB4E4\uC5B4\uB0B4\uB294 \uAC83\uC744 \uB2E8\uC21C\uD654\uD574\uC8FC\uB294\uC9C0\uB97C \uBCF4\uC5EC\uC90D\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574 \uC2A4\uD0C0\uC77C \uC2DC\uD2B8\uC5D0\uC11C \uAC01 \uC0C9\uC0C1 \uAC12\uC744 \uC218\uB3D9\uC73C\uB85C \uC9C0\uC815\uD558\uC9C0 \uC54A\uACE0\uB3C4 \uB3D9\uC801\uC73C\uB85C \uC870\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),w=o(`<p>\uC704\uC758 \uB0B4\uC6A9\uC744 \uD55C\uAD6D\uC5B4\uB85C \uBC88\uC5ED\uD558\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">$myColor</span><span class="token operator">:</span> #<span class="token number">004776</span><span class="token punctuation">;</span>
<span class="token punctuation">.</span>sample <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token function">lighten</span><span class="token punctuation">(</span>$myColor<span class="token punctuation">,</span> <span class="token number">20</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uACB0\uACFC\uB294 \uC544\uB798\uC640 \uAC19\uC774 \uB098\uD0C0\uB0A9\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">.</span>sample <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #0084dc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uD568\uC218, if-else \uC870\uAC74 \uBC0F \uB8E8\uD504\uB97C SCSS \uCF54\uB4DC\uC5D0\uC11C \uC0AC\uC6A9\uD558\uC5EC \uC2A4\uD0C0\uC77C\uC744 \uC0DD\uC131\uD558\uB294 \uACFC\uC815\uC744 \uB354 \uC27D\uACE0 \uC870\uC9C1\uC801\uC73C\uB85C \uB9CC\uB4E4 \uC218 \uC788\uB2E4\uB294 \uAC83\uC744 \uC774\uD574\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uB3C4\uAD6C\uB4E4\uC744 \uC0AC\uC6A9\uD558\uBA74 \uAC12 \uACC4\uC0B0, \uC0C9\uC0C1 \uAD6C\uC131 \uAD00\uB9AC \uBC0F \uC2A4\uD0C0\uC77C \uC77C\uAD00\uC131 \uC801\uC6A9\uC5D0 \uB3C4\uC6C0\uC774 \uB418\uC5B4 \uCF54\uB4DC\uAC00 \uD6A8\uC728\uC801\uC774\uACE0 \uB2E4\uC591\uD55C \uB514\uC790\uC778 \uC694\uAD6C\uC5D0 \uC801\uC751 \uAC00\uB2A5\uD558\uAC8C \uB429\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,6),S=a("h1",{id:"sass-\u1106\u1175\u11A8\u1109\u1173\u110B\u1175\u11AB",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#sass-\u1106\u1175\u11A8\u1109\u1173\u110B\u1175\u11AB","aria-hidden":"true"},"#"),s(" Sass \uBBF9\uC2A4\uC778")],-1),j=a("p",null,"Sass \uBBF9\uC2A4\uC778\uC5D0 \uB300\uD574 \uB354 \uC54C\uC544\uBCF4\uB824\uBA74 \uC5EC\uAE30\uB97C \uD074\uB9AD\uD558\uC138\uC694.",-1);function q(C,$){return n(),i("div",null,[u,d,v,k,m,(n(),e(p("script"),null,{default:t(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b,(n(),e(p("script"),null,{default:t(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),g,(n(),e(p("script"),null,{default:t(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),y,(n(),e(p("script"),null,{default:t(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),h,(n(),e(p("script"),null,{default:t(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),f,(n(),e(p("script"),null,{default:t(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),x,(n(),e(p("script"),null,{default:t(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),_,(n(),e(p("script"),null,{default:t(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),w,(n(),e(p("script"),null,{default:t(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),S,j])}var L=l(r,[["render",q],["__file","index.html.vue"]]);export{L as default};