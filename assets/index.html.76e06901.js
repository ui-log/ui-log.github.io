import{_ as c}from"./app.63e06a35.js";import{l as s,m as l,E as a,G as t,p,Y as o,C as n,K as e}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var i="/assets/TestanddebugyourwebsiteUIwithrandomdata_0.ad980bbe.png",u="/assets/TestanddebugyourwebsiteUIwithrandomdata_1.9e3905a8.png",r="/assets/TestanddebugyourwebsiteUIwithrandomdata_2.a38ae42a.png";const k={},d=n("p",null,"\uC800\uD76C \uAC1C\uBC1C\uC790\uB4E4 \uBAA8\uB450(\uC801\uC5B4\uB3C4 \uC77C \uB144 \uACBD\uB825\uC774 \uC788\uB294 \uAC1C\uBC1C\uC790\uB4E4)\uAC00 \uC774\uB7F0 \uACBD\uD5D8\uC744 \uD588\uC744 \uAC81\uB2C8\uB2E4. \uAC1C\uBC1C \uC911\uC5D0 \uD504\uB85C\uADF8\uB7A8\uC774 \uC644\uBCBD\uD558\uAC8C \uC791\uB3D9\uD558\uB294 \uAC83\uC744 \uBCF4\uC558\uB294\uB370, \uC6B4\uC601 \uD658\uACBD\uC5D0 \uBC30\uD3EC\uD558\uBA74 \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD558\uB294 \uACBD\uC6B0\uAC00 \uB9CE\uC2B5\uB2C8\uB2E4. \uC0AC\uC6A9\uC790 \uBC84\uADF8 \uC2E0\uACE0\uAC00 \uB9CE\uC544\uC9C0\uAC70\uB098, \uD2B9\uC815 \uC0C1\uD669\uC5D0\uC11C \uBC1C\uC0DD\uD558\uB294 \uBC84\uADF8\uB85C \uC0C1\uC0AC\uAC00 \uBD88\uD3C9\uD558\uB294 \uACBD\uC6B0\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uADF8 \uBB38\uAD6C\uAC00 10\uB2E8\uC5B4\uB9CC \uC788\uB294 \uAC8C \uC544\uB2C8\uB77C 200\uB2E8\uC5B4\uC640 \uAC19\uC774 \uAE34 \uBB38\uAD6C\uC77C \uB54C\uB294 \uC5B4\uB5BB\uAC8C \uD560\uAE4C\uC694? \uC0AC\uC6A9\uC790\uAC00 \uACF5\uBC31 \uC5C6\uC774 \uC544\uC8FC \uAE34 \uB2E8\uC5B4\uB97C \uC785\uB825\uD588\uC744 \uB54C\uB294 \uC5B4\uB5BB\uAC8C \uD560\uAE4C\uC694? \uB370\uC774\uD130 \uBC30\uC5F4\uC5D0 \uAC1C\uBC1C \uB2F9\uC2DC \uC11C\uBC84\uC5D0\uC11C \uD56D\uC0C1 \uC81C\uACF5\uB420 \uAC83\uC73C\uB85C \uC0C1\uC0C1\uD588\uB358 \uD2B9\uC815 \uC720\uD615\uC758 \uB370\uC774\uD130\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC9C0 \uC54A\uC744 \uB54C\uB294 \uC5B4\uB5BB\uAC8C \uD560\uAE4C\uC694?",-1),m=n("p",null,[n("img",{src:i,alt:"\uB79C\uB364 \uB370\uC774\uD130\uB85C \uC6F9 \uC0AC\uC774\uD2B8 UI\uB97C \uD14C\uC2A4\uD2B8\uD558\uACE0 \uB514\uBC84\uAE45\uD574 \uBCF4\uC138\uC694"})],-1),v=n("p",null,"\uC800\uB294 \uC774\uB7F0 \uBB38\uC81C\uB97C \uC790\uC8FC \uB9C8\uC8FC\uD569\uB2C8\uB2E4. \uADF8\uB807\uB2E4\uBA74 \uC194\uB8E8\uC158\uC740 \uBB58\uAE4C\uC694? \uC788\uC744\uAE4C\uC694?",-1),b=n("p",null,"\uC74C, \uC788\uC744 \uC218\uB3C4 \uC5C6\uC744 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4! \uC608\uB97C \uB4E4\uC5B4 \uC218\uD559\uC801 \uC811\uADFC \uBC29\uC2DD\uC758 \uB17C\uB9AC \uBC84\uADF8\uC640 \uAC19\uC740 \uBC84\uADF8\uB294 \uCF54\uB4DC \uC218\uBC31 \uC904\uC744 \uC0B4\uD3B4\uBCF4\uC9C0 \uC54A\uACE0\uB294 \uC218\uC815\uD560 \uC218 \uC5C6\uC9C0\uB9CC, \uC774 \uAE00\uC774 \uB2E4\uB8E8\uB294 \uB0B4\uC6A9\uC740 \uC544\uB2D9\uB2C8\uB2E4. \uB2E8\uC704 \uD14C\uC2A4\uD2B8, \uD1B5\uD569 \uD14C\uC2A4\uD2B8, \uADF8\uB9AC\uACE0 End-to-End \uD14C\uC2A4\uD2B8\uB97C \uC791\uC131\uD558\uC5EC \uC77C\uBD80 \uB2E4\uB978 \uC885\uB958\uC758 \uBC84\uADF8\uC640 \uC7A5\uC560\uB97C \uC218\uC815\uD560 \uC218 \uC788\uC9C0\uB9CC, \uADF8\uB7EC\uD55C \uC2DC\uAC04\uC774 \uBD80\uC871\uD55C \uACBD\uC6B0\uB294 \uC5B4\uB5BB\uAC8C \uD560\uAE4C\uC694? \uB2E4\uC591\uD55C \uC2DC\uB098\uB9AC\uC624\uC5D0\uC11C \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uC5B4\uB5BB\uAC8C \uBCF4\uC774\uB294\uC9C0 \uD655\uC778\uD558\uACE0 \uC2F6\uB2E4\uBA74 \uC5B4\uB5BB\uAC8C \uD574\uC57C \uD560\uAE4C\uC694? \uC774 \uBB38\uC81C\uB85C \uACE0\uBBFC \uC911\uC774\uC2DC\uB77C\uBA74(\uD2B9\uD788 \uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C\uC790\uB77C\uBA74) \uC774 \uAE00\uC774 \uB3C4\uC6C0\uC774 \uB420 \uAC83\uC785\uB2C8\uB2E4! \u{1F609}",-1),g=n("p",null,[n("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),y=n("img",{src:u},null,-1),h=n("p",null,"\uC6B0\uC120, \uC6B0\uB9AC\uC758 \uBB34\uC791\uC704 \uB370\uC774\uD130\uB97C \uC0DD\uC131\uD558\uB294 \uBA87 \uAC00\uC9C0 \uD568\uC218\uAC00 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4.",-1),f=n("p",null,"\uAC00\uC7A5 \uD544\uC694\uD55C \uBB34\uC791\uC704 \uB370\uC774\uD130\uC758 \uACBD\uC6B0\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4:",-1),w=n("ul",null,[n("li",null,"\uD14D\uC2A4\uD2B8"),n("li",null,"\uC22B\uC790"),n("li",null,"\uB0A0\uC9DC"),n("li",null,"\uBD88\uB9AC\uC5B8"),n("li",null,"\uC774\uBBF8\uC9C0")],-1),_=n("p",null,[n("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),x=e(`<p>\uD14D\uC2A4\uD2B8\uBD80\uD130 \uC2DC\uC791\uD574\uBCFC\uAC8C\uC694. \uC6B0\uC120, \uBB34\uC791\uC704 \uD14D\uC2A4\uD2B8\uB97C \uB9CC\uB4E4\uAE30 \uC704\uD55C \uBB38\uC790\uC5F4\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.</p><p>\uC800\uB294 Lorem ipsum \uD14D\uC2A4\uD2B8\uC758 \uD55C \uBB38\uB2E8\uC744 \uC0AC\uC6A9\uD588\uC5B4\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>textArray <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token string">&#39;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut &#39;</span> <span class="token operator">+</span>
  <span class="token string">&#39;labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris &#39;</span> <span class="token operator">+</span>
  <span class="token string">&#39;nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit &#39;</span> <span class="token operator">+</span>
  <span class="token string">&#39;esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in &#39;</span> <span class="token operator">+</span>
  <span class="token string">&#39;culpa qui officia deserunt mollit anim id est laborum.&#39;</span>
<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774\uC81C \uC774 \uBC30\uC5F4\uC758 \uB79C\uB364 \uBC94\uC704\uB97C \uC120\uD0DD\uD558\uC5EC \uB2E4\uC591\uD55C \uAE38\uC774\uC758 \uD14D\uC2A4\uD2B8\uB97C \uB9CC\uB4E4\uC5B4\uBD05\uC2DC\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),j=e(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>textArray<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>
  <span class="token number">0</span><span class="token punctuation">,</span>
  Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>textArray<span class="token punctuation">.</span>length <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC88B\uC544\uC694, \uD558\uC9C0\uB9CC \uC5EC\uC804\uD788 \uBB38\uC81C\uAC00 \uC788\uC5B4\uC694. \uD15C\uD50C\uB9BF\uC5D0\uC11C \uC0DD\uC131\uB41C \uBAA8\uB4E0 \uD14D\uC2A4\uD2B8\uB4E4\uC774 &quot;Lorem ipsum dolor sit amet...&quot;\uC73C\uB85C \uC2DC\uC791\uD558\uAE30 \uB54C\uBB38\uC5D0 \uBAA8\uB450 \uAC19\uC544 \uBCF4\uC5EC\uC694. \uADF8\uB798\uC11C \uADF8\uAC83\uB3C4 \uC11E\uC5B4\uC57C \uD574\uC694. \uC544\uB798 \uD568\uC218\uAC00 \uD574\uACB0\uD560 \uAC70\uC608\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token function">shuffle</span><span class="token punctuation">(</span>array<span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> currentIndex <span class="token operator">=</span> array<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">let</span> randomIndex <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentIndex <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      randomIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> currentIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
      currentIndex<span class="token operator">--</span><span class="token punctuation">;</span>
      <span class="token punctuation">[</span>array<span class="token punctuation">[</span>currentIndex<span class="token punctuation">]</span><span class="token punctuation">,</span> array<span class="token punctuation">[</span>randomIndex<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
        array<span class="token punctuation">[</span>randomIndex<span class="token punctuation">]</span><span class="token punctuation">,</span>
        array<span class="token punctuation">[</span>currentIndex<span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> array<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774\uC81C \uC11E\uC778 \uB79C\uB364 \uAE38\uC774\uC758 \uD14D\uC2A4\uD2B8\uB85C \uC811\uADFC\uD560 \uAC70\uC608\uC694:\`\`\`</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),A=e(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">getRandomText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> string <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">shuffle</span><span class="token punctuation">(</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>textArray<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>textArray<span class="token punctuation">.</span>length <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
     <span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uB300\uBC15\uC774\uC8E0? \uC880 \uB354 \uD65C\uC6A9\uD574 \uBCFC\uAE4C\uC694? \uCD5C\uC18C-\uCD5C\uB300 \uB610\uB294 \uACE0\uC815 \uB2E8\uC5B4 \uC218\uB97C \uCD94\uAC00\uD558\uB294 \uAC74 \uC5B4\uB5A8\uAE4C\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">getRandomText</span><span class="token punctuation">(</span>length<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span> min<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">;</span> max<span class="token operator">?</span><span class="token operator">:</span> number <span class="token punctuation">}</span> <span class="token operator">|</span> number<span class="token punctuation">)</span><span class="token operator">:</span> string <span class="token punctuation">{</span>
  <span class="token keyword">let</span> textArray <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>randomTextArr<span class="token punctuation">;</span>
  <span class="token keyword">const</span> minLength <span class="token operator">=</span> <span class="token keyword">typeof</span> length <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span> <span class="token operator">?</span> length <span class="token operator">:</span> length<span class="token operator">?.</span>min <span class="token operator">??</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> maxLength <span class="token operator">=</span>
    <span class="token keyword">typeof</span> length <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span> <span class="token operator">?</span> length <span class="token operator">:</span> length<span class="token operator">?.</span>max <span class="token operator">??</span> textArray<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>maxLength <span class="token operator">&gt;</span> textArray<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    textArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>textArray<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>randomTextArr<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">shuffle</span><span class="token punctuation">(</span>textArray<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>
      <span class="token number">0</span><span class="token punctuation">,</span>
      Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>
        <span class="token punctuation">(</span><span class="token punctuation">(</span>maxLength <span class="token operator">??</span> textArray<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token punctuation">(</span>minLength <span class="token operator">??</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span>
          <span class="token punctuation">(</span>minLength <span class="token operator">??</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uBA4B\uC9C0\uC8E0. \uC774\uC81C \uC5EC\uAE30\uCC98\uB7FC \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:\`\`\`</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),I=e(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getRandomText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getRandomText</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getRandomText</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getRandomText</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uD14D\uC2A4\uD2B8 \uAE38\uC774\uB97C \uACB0\uC815\uD558\uB294 \uB17C\uB9AC\uB294 \uB79C\uB364 \uC22B\uC790\uB97C \uC0DD\uC131\uD558\uB294 \uB17C\uB9AC\uC640 \uB3D9\uC77C\uD569\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">getRandomNumber</span><span class="token punctuation">(</span>config<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span> min<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">;</span> max<span class="token operator">?</span><span class="token operator">:</span> number <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> number <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token punctuation">(</span>config<span class="token operator">?.</span>max <span class="token operator">??</span> Number<span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token punctuation">(</span>config<span class="token operator">?.</span>min <span class="token operator">??</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">*</span>
      Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span>
      <span class="token punctuation">(</span>config<span class="token operator">?.</span>min <span class="token operator">??</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC88B\uC544\uC694. \uC774\uC81C \uB0A0\uC9DC\uB97C \uC0B4\uD3B4\uBCFC\uAE4C\uC694?</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),M=e(`<p>\uB79C\uB364\uD55C \uB0A0\uC9DC\uB97C \uC0DD\uC131\uD558\uB824\uBA74 \uC2DC\uC791 \uB0A0\uC9DC\uC640 \uC885\uB8CC \uB0A0\uC9DC\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4. \uC800\uB294 \uC774\uB807\uAC8C \uD588\uC5B4\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">getRandomDate</span><span class="token punctuation">(</span>
    <span class="token literal-property property">start</span><span class="token operator">:</span> Date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&#39;1970-01-01&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">end</span><span class="token operator">:</span> Date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token operator">:</span> Date <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>
    start<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>end<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> start<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC88B\uC544\uC694. \uBD80\uC6B8\uAC12\uC5D0 \uB300\uD574\uC11C\uB294 \uC774\uB807\uAC8C \uAC04\uB2E8\uD558\uAC8C \uCF54\uB4DC\uB97C \uC791\uC131\uD588\uC5B4\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">getRandomBoolean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> boolean <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token number">.5</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),T=e(`<p>\uB79C\uB364 \uC774\uBBF8\uC9C0\uB97C \uC5BB\uAE30 \uC704\uD574 Picsum Photos\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC774 \uD568\uC218\uB294 \uC9C0\uC815\uB41C \uB108\uBE44\uC640 \uB192\uC774\uB85C Picum Photos\uC5D0\uC11C \uC774\uBBF8\uC9C0\uB97C \uB2E4\uC6B4\uB85C\uB4DC\uD560 \uC218 \uC788\uB294 URL\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">getRandomImageUrl</span><span class="token punctuation">(</span>
  config<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> number<span class="token punctuation">;</span> height<span class="token operator">:</span> number <span class="token punctuation">}</span> <span class="token operator">|</span> number<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> string <span class="token punctuation">{</span>
  <span class="token keyword">const</span> width <span class="token operator">=</span> <span class="token keyword">typeof</span> config <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span> <span class="token operator">?</span> config <span class="token operator">:</span> config<span class="token operator">?.</span>width <span class="token operator">??</span> <span class="token number">200</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> height <span class="token operator">=</span> <span class="token keyword">typeof</span> config <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span> <span class="token operator">?</span> config <span class="token operator">:</span> config<span class="token operator">?.</span>height <span class="token operator">??</span> <span class="token number">200</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">https://picsum.photos/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>width<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>height<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">?workAround=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">10000</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>workAround \uB9E4\uAC1C\uBCC0\uC218\uB97C \uC0AC\uC6A9\uD558\uB294 \uC774\uC720\uB294 \uB3D9\uC77C\uD55C URL\uC744 \uC0AC\uC6A9\uD558\uC5EC Picsum Photos\uC5D0 \uC774\uBBF8\uC9C0\uB97C \uC694\uCCAD\uD560 \uB54C \uB3D9\uC77C\uD55C \uC774\uBBF8\uC9C0\uAC00 \uB85C\uB4DC\uB418\uB294 \uAC83\uC744 \uBC29\uC9C0\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4. workAround\uB97C \uC0AC\uC6A9\uD558\uBA74 \uC694\uCCAD\uB9C8\uB2E4 \uACE0\uC720\uD55C \uC774\uBBF8\uC9C0\uB97C \uBC1B\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uC774 \uC811\uADFC \uBC29\uBC95\uC744 \uB354 \uAC04\uD3B8\uD558\uAC8C \uC0AC\uC6A9\uD558\uAE30 \uC704\uD574 \uD574\uB2F9 NPM \uD328\uD0A4\uC9C0\uB97C \uB9CC\uB4E4\uC5C8\uC2B5\uB2C8\uB2E4. \uC544\uB798 \uBA85\uB839\uC744 \uC0AC\uC6A9\uD558\uC5EC \uD504\uB85C\uC81D\uD2B8\uC5D0 \uC124\uCE58\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),D=e(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm install @skybluedev<span class="token operator">/</span>random<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uC774 \uBA54\uC18C\uB4DC\uB4E4\uC740 \uB2E4\uC74C\uACFC \uAC19\uC774 \uC811\uADFC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> random <span class="token keyword">from</span> <span class="token string">&#39;@skybluedev/random.js&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> randomText <span class="token operator">=</span> random<span class="token punctuation">.</span>string<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> randomNumber <span class="token operator">=</span> random<span class="token punctuation">.</span>number<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> randomBoolean <span class="token operator">=</span> random<span class="token punctuation">.</span>boolean<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> randomDate <span class="token operator">=</span> random<span class="token punctuation">.</span>date<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&#39;2022-01-01&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&#39;2023-01-01&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> randomImage <span class="token operator">=</span> random<span class="token punctuation">.</span>image<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC800\uB294 \uC774 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC81C Github\uC758 \uD574\uB2F9 \uC8FC\uC18C\uC5D0\uC11C \uBC29\uBB38\uD560 \uC218 \uC788\uB294 \uC0D8\uD50C \uCC44\uD305 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uC0AC\uC6A9\uD588\uC2B5\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),L=n("p",null,[n("img",{src:r,alt:"\uD14C\uC774\uBE14"})],-1);function R(U,q){return s(),l("div",null,[d,m,v,b,g,(s(),a(o("script"),null,{default:t(()=>[p(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),y,h,f,w,_,(s(),a(o("script"),null,{default:t(()=>[p(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),x,(s(),a(o("script"),null,{default:t(()=>[p(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),j,(s(),a(o("script"),null,{default:t(()=>[p(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),A,(s(),a(o("script"),null,{default:t(()=>[p(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),I,(s(),a(o("script"),null,{default:t(()=>[p(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),M,(s(),a(o("script"),null,{default:t(()=>[p(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),T,(s(),a(o("script"),null,{default:t(()=>[p(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),D,(s(),a(o("script"),null,{default:t(()=>[p(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),L])}var $=c(k,[["render",R],["__file","index.html.vue"]]);export{$ as default};
