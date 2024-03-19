import{_ as c,o as n,c as i,a as s,r as a,w as e,b as o,d as p,e as t}from"./app.19a0d412.js";var u="/assets/1.6b876270.png";const l={},r=p('<h1 id="\u1109\u1166\u11AF\u1105\u1166\u1102\u1175\u110B\u116E\u11B7-selenium-\u110B\u1173\u1105\u1169-\u110C\u1161\u1103\u1169\u11BC\u1112\u116A-\u1111\u1173\u1105\u1169\u1100\u1173\u1105\u1162\u11B7-\u110C\u1166\u110C\u1161\u11A8\u1112\u1161\u1100\u1175-1" tabindex="-1"><a class="header-anchor" href="#\u1109\u1166\u11AF\u1105\u1166\u1102\u1175\u110B\u116E\u11B7-selenium-\u110B\u1173\u1105\u1169-\u110C\u1161\u1103\u1169\u11BC\u1112\u116A-\u1111\u1173\u1105\u1169\u1100\u1173\u1105\u1162\u11B7-\u110C\u1166\u110C\u1161\u11A8\u1112\u1161\u1100\u1175-1" aria-hidden="true">#</a> \uC140\uB808\uB2C8\uC6C0(selenium)\uC73C\uB85C \uC790\uB3D9\uD654 \uD504\uB85C\uADF8\uB7A8 \uC81C\uC791\uD558\uAE30(1)</h1><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1}\uC774 \uD3EC\uC2A4\uD305\uC744 \uC77D\uC73C\uBA74</p><p>\uC140\uB808\uB2C8\uC6C0\uC73C\uB85C \uC790\uB3D9\uD654 \uD504\uB85C\uADF8\uB7A8\uC744 \uC81C\uC791\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uBC88 \uAE00\uC5D0\uC11C\uB294 \uC140\uB808\uB2C8\uC6C0\uC744 \uC2E4\uD589\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD574\uC11C \uC815\uB9AC\uD558\uACA0\uC2B5\uB2C8\uB2E4.</p></div><p>\uD06C\uB864\uB9C1\uC744 \uD558\uB294 \uBC29\uBC95\uC5D0\uB294 \uB2E4\uC591\uD55C \uBC29\uBC95\uC774 \uC788\uC9C0\uB9CC \uC2E4\uC81C \uC720\uC800\uAC00 \uB3D9\uC791\uD558\uB294 \uAC83\uCC98\uB7FC \uD558\uAE30 \uC704\uD574\uC11C\uB294 \uC140\uB808\uB2C8\uC6C0(selenium)\uC744 \uC0AC\uC6A9\uD574\uC57C\uD569\uB2C8\uB2E4. <strong>\uC140\uB808\uB2C8\uC6C0\uC740 \uD30C\uC774\uC36C \uC790\uBC14 \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uB4F1 \uB2E4\uC591\uD55C \uC5B8\uC5B4\uB85C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC9C0\uB9CC \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uB85C \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD574\uC11C \uACF5\uC720\uD569\uB2C8\uB2E4.</strong></p><h2 id="_1-selenium-webdriver-\u1109\u1165\u11AF\u110E\u1175" tabindex="-1"><a class="header-anchor" href="#_1-selenium-webdriver-\u1109\u1165\u11AF\u110E\u1175" aria-hidden="true">#</a> 1. selenium-webdriver \uC124\uCE58</h2>',4),d=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),k=p(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> i selenium-webdriver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-\u110F\u1173\u1105\u1169\u11B7-\u1109\u1175\u11AF\u1112\u1162\u11BC" tabindex="-1"><a class="header-anchor" href="#_2-\u110F\u1173\u1105\u1169\u11B7-\u1109\u1175\u11AF\u1112\u1162\u11BC" aria-hidden="true">#</a> 2. \uD06C\uB86C \uC2E4\uD589</h2><p>\uD06C\uB86C \uC140\uB808\uB2C8\uC6C0\uC744 \uC0AC\uC6A9\uD558\uAE30 \uC704\uD574\uC120 chromeOption\uB4E4\uC744 \uC124\uC815\uD574 \uC8FC\uC5B4\uC57C \uD569\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> webdriver <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;selenium-webdriver&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> chrome <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;selenium-webdriver/chrome&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> Builder<span class="token punctuation">,</span> By<span class="token punctuation">,</span> Key<span class="token punctuation">,</span> until<span class="token punctuation">,</span> Capabilities <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;selenium-webdriver&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> userAgent <span class="token operator">=</span> <span class="token string">&quot;Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.192 Safari/537.36&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">driver</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">forBrowser</span><span class="token punctuation">(</span><span class="token string">&quot;chrome&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">setChromeOptions</span><span class="token punctuation">(</span>
      <span class="token keyword">new</span> <span class="token class-name">chrome<span class="token punctuation">.</span>Options</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">addArguments</span><span class="token punctuation">(</span><span class="token string">&quot;--headless&quot;</span><span class="token punctuation">)</span> <span class="token comment">// \uBC31\uADF8\uB77C\uC6B4\uB4DC\uB85C \uC2E4\uD589</span>
        <span class="token punctuation">.</span><span class="token function">addArguments</span><span class="token punctuation">(</span><span class="token string">&quot;--disable-gpu&quot;</span><span class="token punctuation">)</span> <span class="token comment">// gpu \uBE44\uD65C\uC131\uD654</span>
        <span class="token punctuation">.</span><span class="token function">addArguments</span><span class="token punctuation">(</span><span class="token string">&quot;--no-sandbox&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">addArguments</span><span class="token punctuation">(</span><span class="token string">&quot;--disable-dev-shm-usage&quot;</span><span class="token punctuation">)</span> <span class="token comment">// \uACF5\uC720 \uBA54\uBAA8\uB9AC\uB97C \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uACA0\uB2E4\uB294 \uC758\uBBF8</span>
        <span class="token punctuation">.</span><span class="token function">addArguments</span><span class="token punctuation">(</span><span class="token string">&quot;window-size=1280,800&quot;</span><span class="token punctuation">)</span> <span class="token comment">// \uC708\uB3C4\uC6B0 \uC0AC\uC774\uC988 \uC9C0\uC815</span>
        <span class="token punctuation">.</span><span class="token function">addArguments</span><span class="token punctuation">(</span><span class="token string">&quot;--disable-blink-features=AutomationControlled&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">addArguments</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">user-agent==</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>userAgent<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// \uC720\uC800 \uC5D0\uC774\uC804\uD2B8\uB97C \uC9C0\uC815\uD560 \uC218 \uC788\uC74C</span>
        <span class="token punctuation">.</span><span class="token function">setUserPreferences</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token string-property property">&quot;download.default_directory&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \uB2E4\uC6B4\uB85C\uB4DC\uD560 \uACBD\uC6B0 \uB514\uD3F4\uD2B8 \uACBD\uB85C\uB97C \uC9C0\uC815\uD560 \uC218 \uC788\uC74C</span>
          <span class="token string-property property">&quot;profile.default_content_setting_values.automatic_downloads&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">await</span> driver<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;https://www.naver.com/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \uB124\uC774\uBC84 \uD648\uD398\uC774\uC9C0 \uC5F4\uAE30</span>
<span class="token keyword">await</span> driver<span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000000000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \uD0C0\uC784 \uC2AC\uB9BD</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),m=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),v=p(`<p>\uC704\uC5D0 \uC8FC\uC11D\uCC98\uB9AC\uD574\uB454 \uC18D\uC131\uB4E4\uC744 \uBCF4\uACE0 \uD544\uC694\uD55C \uC18D\uC131\uC744 \uC801\uC6A9\uD558\uC5EC \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC704\uC640 \uAC19\uC774 index.js\uB97C \uC791\uC131\uD574\uC11C \uC2E4\uD589\uD558\uBA74 \uC544\uBB34\uB7F0 \uACB0\uACFC\uB3C4 \uB098\uC624\uC9C0 \uC54A\uB294\uB370\uC694.</p><p><strong>\uADF8 \uC774\uC720\uB294 \uBC31\uADF8\uB77C\uC6B4\uB4DC\uB85C \uC2E4\uD589\uD588\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.</strong> \uC544\uB798 \uBD80\uBD84\uC744 \uC8FC\uC11D\uCC98\uB9AC\uD558\uAC70\uB098 \uC81C\uAC70\uD558\uACE0 \uC2E4\uD589\uC2DC\uCF1C\uC57C\uD569\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">.</span><span class="token function">addArguments</span><span class="token punctuation">(</span><span class="token string">&quot;--headless&quot;</span><span class="token punctuation">)</span> <span class="token comment">// \uBC31\uADF8\uB77C\uC6B4\uB4DC\uB85C \uC2E4\uD589</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),g=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),b=p('<img src="'+u+`" width="700"><h2 id="_3-\u1109\u1166\u11AF\u1105\u1166\u1102\u1175\u110B\u116E\u11B7-\u1111\u1161\u110B\u1175\u110B\u1165\u1111\u1169\u11A8\u1109\u1173-\u1109\u1175\u11AF\u1112\u1162\u11BC" tabindex="-1"><a class="header-anchor" href="#_3-\u1109\u1166\u11AF\u1105\u1166\u1102\u1175\u110B\u116E\u11B7-\u1111\u1161\u110B\u1175\u110B\u1165\u1111\u1169\u11A8\u1109\u1173-\u1109\u1175\u11AF\u1112\u1162\u11BC" aria-hidden="true">#</a> 3. \uC140\uB808\uB2C8\uC6C0 \uD30C\uC774\uC5B4\uD3ED\uC2A4 \uC2E4\uD589</h2><p>\uD06C\uB86C\uC774 \uC544\uB2CC \uD30C\uC774\uC5B4\uD3ED\uC2A4\uB3C4 \uC2E4\uD589\uD560 \uC218 \uC788\uB294\uB370\uC694. \uC140\uB808\uB2C8\uC6C0\uC744 \uC0AC\uC6A9\uD558\uB2E4\uBCF4\uBA74 \uD2B9\uC815 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C\uB294 \uB3D9\uC791\uD558\uC9C0 \uC54A\uB294 \uACBD\uC6B0\uAC00 \uC788\uC5B4\uC11C \uB2E4\uB978 \uBE0C\uB77C\uC6B0\uC800\uB3C4 \uC0AC\uC6A9\uD574\uC57C\uD560 \uACBD\uC6B0\uAC00 \uBC1C\uC0DD\uD569\uB2C8\uB2E4.</p><p>firefox\uB3C4 \uD06C\uB86C\uACFC \uB3D9\uC77C\uD558\uAC8C headless\uB97C \uD1B5\uD574 \uBC31\uADF8\uB77C\uC6B4\uB4DC\uB85C \uC2E4\uD589 \uC5EC\uBD80\uB97C \uACB0\uC815\uD558\uB294\uB370\uC694.</p><p>\uC544\uB798\uCC98\uB7FC \uD568\uC218\uB97C \uB9CC\uB4E4\uC5B4\uB450\uBA74 \uD544\uC694\uC5D0 \uB530\uB77C headless\uB97C \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">firefoxBuild</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">headless <span class="token operator">=</span> <span class="token boolean">true</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>headless<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forBrowser</span><span class="token punctuation">(</span><span class="token string">&quot;firefox&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setFirefoxOptions</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">firefox<span class="token punctuation">.</span>Options</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addArguments</span><span class="token punctuation">(</span><span class="token string">&quot;--headless&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forBrowser</span><span class="token punctuation">(</span><span class="token string">&quot;firefox&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setFirefoxOptions</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">firefox<span class="token punctuation">.</span>Options</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774\uC81C \uC140\uB808\uB2C8\uC6C0\uC744 \uC2E4\uD589\uD574\uC11C \uBE0C\uB77C\uC6B0\uC800\uB97C \uD0A4\uB294\uB370 \uAE4C\uC9C0 \uC131\uACF5\uD588\uC2B5\uB2C8\uB2E4. \uC140\uB808\uB2C8\uC6C0\uC744 \uC774\uC6A9\uD558\uBA74 \uD074\uB9AD, \uC2A4\uD06C\uB864, \uB2E4\uC6B4\uB85C\uB4DC \uB4F1\uB4F1 \uC0AC\uB78C\uC774 \uB3D9\uC791\uD558\uB294 \uAC83\uACFC \uB3D9\uC77C\uD558\uAC8C \uB3D9\uC791\uC744 \uC218\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uC140\uB808\uB2C8\uC6C0\uC744 \uD65C\uC6A9\uD558\uBA74 \uC815\uB9D0 \uB2E4\uC591\uD55C \uB3D9\uC791\uC744 \uC790\uB3D9\uD654\uD560 \uC218 \uC788\uB294\uB370\uC694.</p><p>\uB2E4\uC74C \uAE00\uC5D0\uC11C\uB294 \uC140\uB808\uB2C8\uC6C0\uC758 \uAE30\uBCF8 \uBA85\uB839\uC5B4\uB4E4\uC5D0 \uB300\uD574\uC11C \uC54C\uC544\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.</p>`,9);function f(h,w){return n(),i("div",null,[r,(n(),s(a("script"),{src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4877378276818686",crossorigin:"anonymous",async:""})),d,(n(),s(a("script"),null,{default:e(()=>[o(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),k,(n(),s(a("script"),{src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4877378276818686",crossorigin:"anonymous",async:""})),m,(n(),s(a("script"),null,{default:e(()=>[o(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),v,(n(),s(a("script"),{src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4877378276818686",crossorigin:"anonymous",async:""})),g,(n(),s(a("script"),null,{default:e(()=>[o(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b])}var _=c(l,[["render",f],["__file","index.html.vue"]]);export{_ as default};