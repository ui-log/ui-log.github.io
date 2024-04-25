import{_ as i}from"./app.3052dcfb.js";import{l as s,m as p,E as e,G as t,p as a,Y as o,K as l,C as n}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var d="/assets/HowtoaddTailwindCSStoyourHTMLproject_0.a01fdf37.png";const r={},c=l('<img src="'+d+'"><h1 id="tailwind\u1100\u1161-\u1112\u116E\u11AF\u1105\u1172\u11BC\u1112\u1161\u11AB-\u110B\u1175\u110B\u1172\u1102\u1173\u11AB-\u1106\u116E\u110B\u1165\u11BA\u110B\u1175\u11AB\u1100\u1161\u110B\u116D" tabindex="-1"><a class="header-anchor" href="#tailwind\u1100\u1161-\u1112\u116E\u11AF\u1105\u1172\u11BC\u1112\u1161\u11AB-\u110B\u1175\u110B\u1172\u1102\u1173\u11AB-\u1106\u116E\u110B\u1165\u11BA\u110B\u1175\u11AB\u1100\u1161\u110B\u116D" aria-hidden="true">#</a> Tailwind\uAC00 \uD6CC\uB96D\uD55C \uC774\uC720\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?</h1><p>Tailwind\uB294 \uC77C\uBC18 CSS\uB85C\uB294 \uC5B4\uB824\uC6C0\uC744 \uACAA\uB294 \uC0AC\uB78C\uB4E4\uC5D0\uAC8C \uB9CE\uC740 \uB3C4\uC6C0\uC774 \uB429\uB2C8\uB2E4. Tailwind\uB294 \uB0AE\uC740 \uC218\uC900\uC758 \uC720\uD2F8\uB9AC\uD2F0 \uD074\uB798\uC2A4\uB97C \uC81C\uACF5\uD558\uC5EC HTML \uD30C\uC77C\uC744 \uB5A0\uB098\uC9C0 \uC54A\uACE0\uB3C4 \uB3C5\uD2B9\uD55C \uB514\uC790\uC778\uC744 \uB9CC\uB4E4 \uC218 \uC788\uAC8C \uD574\uC90D\uB2C8\uB2E4. \uC790\uC138\uD55C \uC815\uBCF4\uB294 \uACF5\uC2DD \uBB38\uC11C\uB97C \uCC38\uC870\uD558\uC2ED\uC2DC\uC624.</p><h1 id="\u1111\u1173\u1105\u1169\u110C\u1166\u11A8\u1110\u1173\u110B\u1166-tailwind\u1105\u1173\u11AF-\u110E\u116E\u1100\u1161\u1112\u1161\u1102\u1173\u11AB-\u1107\u1161\u11BC\u1107\u1165\u11B8\u110B\u1173\u11AB" tabindex="-1"><a class="header-anchor" href="#\u1111\u1173\u1105\u1169\u110C\u1166\u11A8\u1110\u1173\u110B\u1166-tailwind\u1105\u1173\u11AF-\u110E\u116E\u1100\u1161\u1112\u1161\u1102\u1173\u11AB-\u1107\u1161\u11BC\u1107\u1165\u11B8\u110B\u1173\u11AB" aria-hidden="true">#</a> \uD504\uB85C\uC81D\uD2B8\uC5D0 Tailwind\uB97C \uCD94\uAC00\uD558\uB294 \uBC29\uBC95\uC740?</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),u=l(`<h1 id="_1-\u1102\u1169\u1103\u1173-\u1109\u1165\u11AF\u110E\u1175" tabindex="-1"><a class="header-anchor" href="#_1-\u1102\u1169\u1103\u1173-\u1109\u1165\u11AF\u110E\u1175" aria-hidden="true">#</a> 1. \uB178\uB4DC \uC124\uCE58</h1><p>\uD14C\uC77C\uC708\uB4DC\uB97C \uC124\uCE58\uD558\uAE30 \uC804\uC5D0 \uCEF4\uD4E8\uD130\uC5D0 \uB178\uB4DC\uAC00 \uC124\uCE58\uB418\uC5B4 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uB178\uB4DC\uC5D0\uB294 \uC885\uC18D\uC131\uC744 \uAD00\uB9AC\uD558\uB294 \uB370 \uC0AC\uC6A9\uB418\uB294 \uD328\uD0A4\uC9C0 \uAD00\uB9AC\uC790(NPM)\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uB178\uB4DC\uAC00 \uCEF4\uD4E8\uD130\uC5D0 \uC124\uCE58\uB418\uC5B4 \uC788\uB294\uC9C0 \uD655\uC778\uD558\uB824\uBA74 \uD130\uBBF8\uB110\uC744 \uC5F4\uACE0 \uB2E4\uC74C \uBA85\uB839\uC5B4\uB97C \uC785\uB825\uD558\uC138\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>node <span class="token operator">-</span>v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),v=n("p",null,"\uCEF4\uD4E8\uD130\uC5D0 \uB178\uB4DC\uAC00 \uC5C6\uB294 \uACBD\uC6B0, \uACF5\uC2DD \uB178\uB4DC \uC6F9\uC0AC\uC774\uD2B8\uB85C \uC774\uB3D9\uD558\uC5EC \uB2E4\uC6B4\uB85C\uB4DC\uD574\uC8FC\uC138\uC694.",-1),g=n("h2",{id:"_2-\u1111\u1173\u1105\u1169\u110C\u1166\u11A8\u1110\u1173-\u1106\u1161\u11AB\u1103\u1173\u11AF\u1100\u1175",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-\u1111\u1173\u1105\u1169\u110C\u1166\u11A8\u1110\u1173-\u1106\u1161\u11AB\u1103\u1173\u11AF\u1100\u1175","aria-hidden":"true"},"#"),a(" 2. \uD504\uB85C\uC81D\uD2B8 \uB9CC\uB4E4\uAE30")],-1),h=n("p",null,"\uD504\uB85C\uC81D\uD2B8\uB97C \uB9CC\uB4E4\uB824\uBA74 \uB514\uB809\uD1A0\uB9AC\uB97C \uD558\uB098 \uC0DD\uC131\uD558\uBA74 \uB429\uB2C8\uB2E4. \uCEF4\uD4E8\uD130\uC758 \uD130\uBBF8\uB110\uC744 \uC5F4\uACE0 \uB2E4\uC74C \uBA85\uB839\uC5B4\uB97C \uC785\uB825\uD558\uC138\uC694:",-1),k=n("p",null,"\uD504\uB85C\uC81D\uD2B8\uB294 \uB370\uC2A4\uD06C\uD0D1\uC5D0 \uB9CC\uB4E4 \uAC83\uC774\uBBC0\uB85C, \uB514\uB809\uD1A0\uB9AC \uAC04 \uC774\uB3D9\uC5D0 \uC0AC\uC6A9\uD558\uB294 cd \uBA85\uB839\uC5B4\uB97C \uC0AC\uC6A9\uD558\uACA0\uC2B5\uB2C8\uB2E4.",-1),b=n("p",null,[n("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),m=l(`<div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>cd Desktop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>mkdir \uBA85\uB839\uC5B4\uB294 \uC0C8\uB85C\uC6B4 \uB514\uB809\uD1A0\uB9AC\uB97C \uC0DD\uC131\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uC774 \uACBD\uC6B0\uC5D0\uB294 tailwindProject\uB77C\uB294 \uC0C8 \uD3F4\uB354\uB97C \uB9CC\uB4E4\uACE0 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>mkdir tailwindProject
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uBC29\uAE08 \uB9CC\uB4E0 \uD3F4\uB354 \uC548\uC5D0\uB294 \uBA87 \uAC00\uC9C0 \uB354 \uD3F4\uB354(src \uBC0F styles \uD3F4\uB354)\uB97C \uCD94\uAC00\uD574\uC57C \uD569\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),w=l(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>cd tailwindProject
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uC774 \uBA85\uB839\uC740 tailwindProject \uB514\uB809\uD1A0\uB9AC \uC548\uC5D0 \uB450 \uAC1C\uC758 \uD3F4\uB354\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>mkdir src styles
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_3-npm\u110B\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u110B\u1167-tailwind-css-\u1109\u1165\u11AF\u110E\u1175\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_3-npm\u110B\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u110B\u1167-tailwind-css-\u1109\u1165\u11AF\u110E\u1175\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 3. NPM\uC744 \uC0AC\uC6A9\uD558\uC5EC Tailwind CSS \uC124\uCE58\uD558\uAE30</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),y=l(`<p>\uD130\uBBF8\uB110\uC5D0 \uC774 \uBA85\uB839\uC5B4\uB97C \uC785\uB825\uD558\uC138\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm install <span class="token operator">-</span><span class="token constant">D</span> tailwindcss
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Tailwind\uC5D0\uB294 \uD14C\uC77C\uC708\uB4DC \uD14C\uB9C8\uB97C \uC0AC\uC6A9\uC790 \uC815\uC758\uD558\uB294 \uAD6C\uC131 \uD30C\uC77C\uC774 \uD568\uAED8 \uC81C\uACF5\uB429\uB2C8\uB2E4. \uC0AC\uC6A9\uC790 \uC815\uC758 \uC0C9\uC0C1, \uAE00\uAF34 \uBC0F \uAE30\uD0C0 \uB2E4\uC591\uD55C \uC0AC\uD56D\uC744 \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD14C\uC77C\uC708\uB4DC \uAD6C\uC131 \uD30C\uC77C\uC744 \uB9CC\uB4E4\uB824\uBA74 \uC774 \uBA85\uB839\uC5B4\uB97C \uC2E4\uD589\uD558\uBA74 \uB429\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npx tailwindcss init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),_=l(`<p>\uADF8\uB9AC\uACE0 \uAC00\uC7A5 \uC88B\uC544\uD558\uB294 \uCF54\uB4DC \uD3B8\uC9D1\uAE30\uB85C \uD504\uB85C\uC81D\uD2B8\uB97C \uC5F4\uC5B4\uBCF4\uC138\uC694. Visual Studio Code (VSCode)\uB97C \uC0AC\uC6A9 \uC911\uC774\uB77C\uBA74 \uD130\uBBF8\uB110\uC5D0 \uB2E4\uC74C \uBA85\uB839\uC5B4\uB97C \uC785\uB825\uD558\uBA74 \uD504\uB85C\uC81D\uD2B8\uAC00 \uC790\uB3D9\uC73C\uB85C \uC5F4\uB9BD\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>code <span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_4-\u1110\u1166\u11B7\u1111\u1173\u11AF\u1105\u1175\u11BA-\u1100\u1167\u11BC\u1105\u1169-\u1100\u116E\u1109\u1165\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_4-\u1110\u1166\u11B7\u1111\u1173\u11AF\u1105\u1175\u11BA-\u1100\u1167\u11BC\u1105\u1169-\u1100\u116E\u1109\u1165\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 4. \uD15C\uD50C\uB9BF \uACBD\uB85C \uAD6C\uC131\uD558\uAE30</h1><p>\uAD6C\uC131 \uD30C\uC77C\uC740 tailwind\uAC00 tailwind \uD074\uB798\uC2A4\uB97C \uC0AC\uC6A9\uD558\uB294 \uD15C\uD50C\uB9BF \uD30C\uC77C\uC744 \uC5B4\uB514\uC5D0\uC11C \uCC3E\uC744\uC9C0 \uC54C\uB824\uC8FC\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uC774\uAC83\uC740 \uC911\uC694\uD55C\uB370, tailwind\uB294 \uADF8 \uACBD\uB85C\uB97C \uC0AC\uC6A9\uD558\uC5EC HTML \uD30C\uC77C\uC744 \uD074\uB798\uC2A4\uB85C \uC2A4\uCE94\uD558\uACE0 \uADF8 \uD074\uB798\uC2A4\uB97C \uC2A4\uD0C0\uC77C \uC2DC\uD2B8\uC5D0 \uCD94\uAC00\uD569\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),f=l(`<p>tailwind.config.js \uD30C\uC77C \uC548\uC5D0, 3\uB2E8\uACC4\uC5D0\uC11C \uC0DD\uC131\uB41C \uD30C\uC77C\uC5D0 html \uD30C\uC77C\uC758 \uACBD\uB85C\uB97C content\uC5D0 \uCD94\uAC00\uD558\uC138\uC694.</p><p>\uB0B4 \uACBD\uC6B0\uC5D0\uB294 \uC774\uC804 \uB2E8\uACC4\uC5D0\uC11C \uC0DD\uC131\uB41C src \uD3F4\uB354 \uC548\uC5D0 \uBAA8\uB4E0 html \uD30C\uC77C\uC774 \uC800\uC7A5\uB420 \uAC83\uC785\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;./src/**/*.{html,js}&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">extend</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_5-css\u110B\u1166-tailwind-\u110C\u1175\u1109\u1175\u1106\u116E\u11AB-\u110E\u116E\u1100\u1161\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_5-css\u110B\u1166-tailwind-\u110C\u1175\u1109\u1175\u1106\u116E\u11AB-\u110E\u116E\u1100\u1161\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 5. CSS\uC5D0 Tailwind \uC9C0\uC2DC\uBB38 \uCD94\uAC00\uD558\uAE30</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),x=l(`<p>styles \uD3F4\uB354 \uC548\uC5D0 tailwind.css \uB610\uB294 \uC6D0\uD558\uB294 \uC774\uB984\uC73C\uB85C CSS \uD30C\uC77C\uC744 \uB9CC\uB4E4\uC5B4 \uC8FC\uC138\uC694. \uADF8\uB9AC\uACE0 \uB2E4\uC74C \uB0B4\uC6A9\uC744 \uCD94\uAC00\uD574 \uC8FC\uC138\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>@tailwind base<span class="token punctuation">;</span>
@tailwind components<span class="token punctuation">;</span>
@tailwind utilities<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>tailwind \uC9C0\uC2DC\uBB38 \uC774\uC678\uC5D0\uB3C4 \uD574\uB2F9 \uD30C\uC77C\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC0AC\uC6A9\uC790 \uC815\uC758 CSS\uB97C \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h1 id="_6-tailwind-cli-\u1107\u1175\u11AF\u1103\u1173-\u1111\u1173\u1105\u1169\u1109\u1166\u1109\u1173-\u1109\u1175\u110C\u1161\u11A8" tabindex="-1"><a class="header-anchor" href="#_6-tailwind-cli-\u1107\u1175\u11AF\u1103\u1173-\u1111\u1173\u1105\u1169\u1109\u1166\u1109\u1173-\u1109\u1175\u110C\u1161\u11A8" aria-hidden="true">#</a> 6. Tailwind CLI \uBE4C\uB4DC \uD504\uB85C\uC138\uC2A4 \uC2DC\uC791</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),j=l(`<p>\uAC70\uC758 \uB2E4 \uC654\uC5B4\uC694. \uB2E4\uC74C \uB2E8\uACC4\uB294 \uC720\uD2F8\uB9AC\uD2F0 \uD074\uB798\uC2A4\uB97C \uD3EC\uD568\uD558\uB294 CSS \uD30C\uC77C\uC744 \uB9CC\uB4DC\uB294 \uAC83\uC785\uB2C8\uB2E4.</p><h2 id="_6-1-package-json-\u1111\u1161\u110B\u1175\u11AF-\u110B\u1167\u11AF\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_6-1-package-json-\u1111\u1161\u110B\u1175\u11AF-\u110B\u1167\u11AF\u1100\u1175" aria-hidden="true">#</a> 6.1 package.json \uD30C\uC77C \uC5F4\uAE30</h2><p>\uB2E4\uC74C \uC2A4\uD06C\uB9BD\uD2B8\uB97C \uCD94\uAC00\uD558\uC138\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;dev&quot;</span><span class="token operator">:</span><span class="token string">&quot;npx tailwindcss -i ./styles/tailwind.css -o ./styles/output.css --watch&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),q=l(`<p>\uC704 \uC2A4\uD06C\uB9BD\uD2B8\uB294 \uD14C\uC77C\uC708\uB4DC \uB514\uB809\uD2F0\uBE0C\uAC00 \uD3EC\uD568\uB41C \uD30C\uC77C\uC744 \uC785\uB825\uC73C\uB85C \uC0AC\uC6A9\uD558\uC5EC \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uBAA8\uB4E0 \uC720\uD2F8\uB9AC\uD2F0 \uD074\uB798\uC2A4\uB97C \uD3EC\uD568\uD558\uB294 CSS\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4.</p><h2 id="_6-2-\u1109\u1173\u110F\u1173\u1105\u1175\u11B8\u1110\u1173-\u1109\u1175\u11AF\u1112\u1162\u11BC" tabindex="-1"><a class="header-anchor" href="#_6-2-\u1109\u1173\u110F\u1173\u1105\u1175\u11B8\u1110\u1173-\u1109\u1175\u11AF\u1112\u1162\u11BC" aria-hidden="true">#</a> 6.2 \uC2A4\uD06C\uB9BD\uD2B8 \uC2E4\uD589</h2><p>\uD130\uBBF8\uB110\uC5D0\uC11C \uB2E4\uC74C \uBA85\uB839\uC744 \uC785\uB825\uD558\uC138\uC694</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),S=l(`<p>\uAC70\uAE30\uC5D0 \uCD94\uAC00\uB85C \uB9E4\uBC88 \uD504\uB85C\uC81D\uD2B8\uB97C \uC2DC\uC791\uD560 \uB54C\uB9C8\uB2E4 \uC0AC\uC6A9\uB420 \uAC83\uC785\uB2C8\uB2E4.</p><h1 id="_7-html\u110B\u1166\u1109\u1165-tailwind-\u1109\u1161\u110B\u116D\u11BC-\u1109\u1175\u110C\u1161\u11A8\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_7-html\u110B\u1166\u1109\u1165-tailwind-\u1109\u1161\u110B\u116D\u11BC-\u1109\u1175\u110C\u1161\u11A8\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 7. HTML\uC5D0\uC11C Tailwind \uC0AC\uC6A9 \uC2DC\uC791\uD558\uAE30</h1><p>\uC88B\uC544\uD558\uB294 \uCF54\uB4DC \uD3B8\uC9D1\uAE30\uC5D0\uC11C \uD504\uB85C\uC81D\uD2B8\uB97C \uC5F4\uACE0 \uC77C\uBD80 HTML \uCF54\uB4DC\uB97C \uC791\uC131\uD558\uC138\uC694. \uBB34\uC5C7\uBCF4\uB2E4 \uC911\uC694\uD55C \uAC83\uC740 <strong>stylesheet\uB97C output.css \uD30C\uC77C\uC5D0 \uC5F0\uACB0\uD558\uB294 \uAC83\uC744 \uC78A\uC9C0 \uB9D0\uC544\uC8FC\uC138\uC694.</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>html
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta http<span class="token operator">-</span>equiv<span class="token operator">=</span><span class="token string">&quot;X-UA-Compatible&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;IE=edge&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">&quot;viewport&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;width=device-width, initial-scale=1.0&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>link  href<span class="token operator">=</span><span class="token string">&quot;/styles/output.css&quot;</span> rel<span class="token operator">=</span><span class="token string">&quot;stylesheet&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>Tailwind Starter<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;bg-gray-800&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;text-center mt-12&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>h1 <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;text-4xl text-yellow-500 font-bold&quot;</span><span class="token operator">&gt;</span>Heap Heap Arrayy<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;text-xl text-white mt-4&quot;</span><span class="token operator">&gt;</span> \uC800\uB294 Tailwind\uB97C \uC0AC\uC6A9\uD558\uC5EC \uCCAB <span class="token constant">HTML</span> \uD504\uB85C\uC81D\uD2B8\uB97C \uB9CC\uB4E4\uC5C8\uC2B5\uB2C8\uB2E4<span class="token punctuation">.</span> <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),T=n("h1",{id:"_8-\u1105\u1161\u110B\u1175\u1107\u1173-\u1109\u1165\u1107\u1165\u1105\u1169-\u1110\u1166\u1109\u1173\u1110\u1173\u1112\u1162\u1107\u1169\u1109\u1166\u110B\u116D",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_8-\u1105\u1161\u110B\u1175\u1107\u1173-\u1109\u1165\u1107\u1165\u1105\u1169-\u1110\u1166\u1109\u1173\u1110\u1173\u1112\u1162\u1107\u1169\u1109\u1166\u110B\u116D","aria-hidden":"true"},"#"),a(" 8. \uB77C\uC774\uBE0C \uC11C\uBC84\uB85C \uD14C\uC2A4\uD2B8\uD574\uBCF4\uC138\uC694")],-1),C=n("p",null,"\uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uCF54\uB4DC\uB97C \uC5F4\uC5B4\uC11C \uBAA8\uB4E0 \uAC83\uC774 \uC81C\uB300\uB85C \uC791\uB3D9\uD558\uB294\uC9C0 \uD655\uC778\uD574\uBCF4\uC138\uC694. CSS \uC2A4\uD0C0\uC77C\uC774 \uD45C\uC2DC\uB418\uC9C0 \uC54A\uB294\uB2E4\uBA74, \uC5B4\uB5A4 \uB2E8\uACC4\uB97C \uB193\uCE5C \uAC83\uC77C\uC9C0\uB3C4 \uBAA8\uB985\uB2C8\uB2E4. \uC774 \uD29C\uD1A0\uB9AC\uC5BC \uC0DD\uC131 \uC2DC \uC0AC\uC6A9\uD588\uB358 \uD30C\uC77C \uAD6C\uC870\uC640 \uBE44\uAD50\uD574\uBCF4\uC138\uC694.",-1),H=n("h1",{id:"\u1100\u1167\u11AF\u1105\u1169\u11AB",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u1100\u1167\u11AF\u1105\u1169\u11AB","aria-hidden":"true"},"#"),a(" \uACB0\uB860")],-1),M=n("p",null,"\uB3C5\uC11C\uD574\uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4. \uAD81\uAE08\uD55C \uC810\uC774 \uC788\uC73C\uC2DC\uBA74 \uC5B8\uC81C\uB4E0\uC9C0 \uD2B8\uC704\uD130 @khazifire \uC5D0\uAC8C \uC5F0\uB77D\uC8FC\uC138\uC694. \uBE44\uC2B7\uD55C \uCEE8\uD150\uCE20\uB97C \uB354 \uBCF4\uACE0 \uC2F6\uC73C\uC2DC\uB2E4\uBA74 \uD314\uB85C\uC6B0\uB3C4 \uC78A\uC9C0\uB9D0\uACE0 \uD574\uC8FC\uC138\uC694.",-1);function L(P,N){return s(),p("div",null,[c,(s(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),u,(s(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),v,g,h,k,b,(s(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),m,(s(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),w,(s(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),y,(s(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),_,(s(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),f,(s(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),x,(s(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),j,(s(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),q,(s(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),S,(s(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),T,C,H,M])}var U=i(r,[["render",L],["__file","index.html.vue"]]);export{U as default};
