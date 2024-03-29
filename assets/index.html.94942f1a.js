import{_ as i,o as s,c as d,a as n,w as e,b as t,r as l,e as a,d as o}from"./app.19857685.js";var p="/assets/DotEnvInFlutter_0.a207b3dc.png";const c={},u=a("p",null,[a("img",{src:p,alt:"DotEnvInFlutter_0"})],-1),r=a("p",null,"flutter_dotenv\uC740 \uD50C\uB7EC\uD130 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C .env \uD30C\uC77C\uB85C\uBD80\uD130 \uD658\uACBD \uBCC0\uC218\uB97C \uB85C\uB4DC\uD560 \uC218 \uC788\uAC8C \uD574\uC8FC\uB294 \uD50C\uB7EC\uD130 \uD328\uD0A4\uC9C0\uC785\uB2C8\uB2E4. \uD658\uACBD \uBCC0\uC218\uB294 API \uD0A4, \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC790\uACA9 \uC99D\uBA85 \uB610\uB294 \uAE30\uD0C0 \uBBFC\uAC10\uD55C \uB370\uC774\uD130\uC640 \uAC19\uC740 \uAD6C\uC131 \uC815\uBCF4\uB97C \uBCF4\uC720\uD558\uB294 \uD0A4-\uAC12 \uC30D\uC785\uB2C8\uB2E4. .env \uD30C\uC77C\uC744 \uC0AC\uC6A9\uD558\uBA74 \uBBFC\uAC10\uD55C \uC815\uBCF4\uB97C \uCF54\uB4DC\uBCA0\uC774\uC2A4\uC640 \uBD84\uB9AC\uD558\uC5EC \uC11C\uB85C \uB2E4\uB978 \uD658\uACBD(\uAC1C\uBC1C, \uC2A4\uD14C\uC774\uC9D5, \uD504\uB85C\uB355\uC158 \uB4F1)\uC5D0 \uB300\uD55C \uB2E4\uC591\uD55C \uAD6C\uC131\uC744 \uC27D\uAC8C \uAD00\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),v=a("p",null,"flutter_dotenv\uB97C \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD55C \uAC04\uB2E8\uD55C \uC18C\uAC1C\uC785\uB2C8\uB2E4:",-1),g=a("ul",null,[a("li",null,"pubspec.yaml \uD30C\uC77C\uC5D0 flutter_dotenv \uD328\uD0A4\uC9C0\uB97C \uCD94\uAC00\uD558\uC138\uC694:")],-1),m=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),b=o(`<div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">dependencies</span><span class="token punctuation">:</span>
  <span class="token key atrule">flutter_dotenv</span><span class="token punctuation">:</span> ^3.1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><p>\uD574\uB2F9 \uD328\uD0A4\uC9C0\uB97C \uAC00\uC838\uC624\uB824\uBA74 flutter pub get\uC744 \uC2E4\uD589\uD569\uB2C8\uB2E4.</p></li><li><p>Flutter \uD504\uB85C\uC81D\uD2B8\uC758 \uB8E8\uD2B8 \uB514\uB809\uD1A0\uB9AC\uC5D0 .env \uD30C\uC77C\uC744 \uC0DD\uC131\uD569\uB2C8\uB2E4. \uC774 \uD30C\uC77C\uC5D0 \uD658\uACBD \uBCC0\uC218\uB97C KEY=VALUE \uD615\uC2DD\uC73C\uB85C \uC800\uC7A5\uD558\uC2DC\uBA74 \uB429\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uBA74:</p></li></ol><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>API_KEY=\uC5EC\uAE30\uC5D0_\uB2F9\uC2E0\uC758_\uC571_\uD0A4\uB97C_\uC785\uB825\uD558\uC138\uC694
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,4),_=o(`<ol start="4"><li>pubspec.yaml \uD30C\uC77C\uC5D0 .env \uD30C\uC77C\uC744 assets\uC5D0 \uCD94\uAC00\uD574\uC8FC\uC138\uC694:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>assets:
    - .env
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>Dart \uD30C\uC77C\uC5D0\uC11C flutter_dotenv \uD328\uD0A4\uC9C0\uB97C import \uD574\uC8FC\uC138\uC694:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">import</span> <span class="token string">&#39;package:flutter_dotenv/flutter_dotenv.dart&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),k=o(`<ol start="6"><li>.env \uD30C\uC77C\uC5D0\uC11C \uD658\uACBD \uBCC0\uC218\uB97C \uB85C\uB4DC\uD558\uC138\uC694:</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> async <span class="token punctuation">{</span>
  <span class="token keyword">await</span> dotenv<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">runApp</span><span class="token punctuation">(</span><span class="token function">MyApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>dotenv.load() \uD568\uC218\uB294 .env \uD30C\uC77C\uC5D0\uC11C \uD658\uACBD \uBCC0\uC218\uB97C \uB85C\uB4DC\uD558\uACE0 dotenv.env \uAC1D\uCCB4\uB97C \uD1B5\uD574 \uC774\uB4E4\uC5D0 \uC811\uADFC\uD560 \uC218 \uC788\uAC8C \uD569\uB2C8\uB2E4.</p><ol start="7"><li>dotenv.env \uAC1D\uCCB4\uB97C \uC0AC\uC6A9\uD558\uC5EC \uCF54\uB4DC\uC5D0\uC11C \uD658\uACBD \uBCC0\uC218\uC5D0 \uC561\uC138\uC2A4\uD558\uC138\uC694:</li></ol><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),y=o(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>String apiKey <span class="token operator">=</span> dotenv<span class="token punctuation">.</span>env<span class="token punctuation">[</span><span class="token string">&#39;API_KEY&#39;</span><span class="token punctuation">]</span><span class="token operator">!</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>.env \uD30C\uC77C\uC5D0 \uC81C\uACF5\uB41C \uD0A4\uB97C \uC0AC\uC6A9\uD558\uC5EC \uD658\uACBD \uBCC0\uC218\uC758 \uAC12\uC744 \uC561\uC138\uC2A4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD658\uACBD \uBCC0\uC218\uB97C \uCC3E\uC744 \uC218 \uC5C6\uAC70\uB098 \uBE44\uC5B4\uC788\uB294 \uACBD\uC6B0 \uAE30\uBCF8\uAC12\uC744 \uC81C\uACF5\uD558\uAC70\uB098 \uC801\uC808\uD788 \uCC98\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>flutter_dotenv\uC744 \uC0AC\uC6A9\uD558\uBA74 \uBBFC\uAC10\uD55C \uC815\uBCF4\uB97C \uCF54\uB4DC\uBCA0\uC774\uC2A4\uC640 \uBD84\uB9AC\uD558\uACE0 \uB2E4\uC591\uD55C \uAD6C\uC131\uC744 \uC27D\uAC8C \uAD00\uB9AC\uD558\uBA70 \uBBFC\uAC10\uD55C \uB370\uC774\uD130\uAC00 \uBC84\uC804 \uC81C\uC5B4 \uC2DC\uC2A4\uD15C\uC5D0\uC11C \uB178\uCD9C\uB418\uC9C0 \uC54A\uB3C4\uB85D \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p>`,3);function f(h,w){return s(),d("div",null,[u,r,v,g,m,(s(),n(l("script"),null,{default:e(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b,(s(),n(l("script"),null,{default:e(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),_,(s(),n(l("script"),null,{default:e(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),k,(s(),n(l("script"),null,{default:e(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),y])}var E=i(c,[["render",f],["__file","index.html.vue"]]);export{E as default};
