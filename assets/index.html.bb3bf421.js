import{_ as l}from"./app.3052dcfb.js";import{l as n,m as i,E as t,G as e,p as a,Y as o,K as p,C as s}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const d={},c=p('<h1 id="\u1103\u1175\u1107\u1165\u1100\u1175\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1103\u1175\u1107\u1165\u1100\u1175\u11BC" aria-hidden="true">#</a> \uB514\uBC84\uAE45</h1><p>\uC774 \uBB38\uC11C\uB294 VS Code \uB514\uBC84\uAC70\uB098 Chrome DevTools\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC804\uCCB4 \uC18C\uC2A4 \uB9F5 \uC9C0\uC6D0\uC744 \uD1B5\uD574 Next.js \uD504\uB860\uD2B8\uC5D4\uB4DC \uBC0F \uBC31\uC5D4\uB4DC \uCF54\uB4DC\uB97C \uB514\uBC84\uADF8\uD558\uB294 \uBC29\uBC95\uC744 \uC124\uBA85\uD569\uB2C8\uB2E4.</p><p>Node.js\uC5D0 \uC5F0\uACB0\uD560 \uC218 \uC788\uB294 \uBAA8\uB4E0 \uB514\uBC84\uAC70\uB294 Next.js \uC751\uC6A9 \uD504\uB85C\uADF8\uB7A8\uC744 \uB514\uBC84\uAE45\uD558\uB294 \uB370 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. Node.js \uB514\uBC84\uAE45 \uAC00\uC774\uB4DC\uC5D0\uC11C \uC790\uC138\uD55C \uB0B4\uC6A9\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="vs-code\u1105\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u11AB-\u1103\u1175\u1107\u1165\u1100\u1175\u11BC" tabindex="-1"><a class="header-anchor" href="#vs-code\u1105\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u11AB-\u1103\u1175\u1107\u1165\u1100\u1175\u11BC" aria-hidden="true">#</a> VS Code\uB97C \uC0AC\uC6A9\uD55C \uB514\uBC84\uAE45</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),r=p(`<p>\uD504\uB85C\uC81D\uD2B8 \uB8E8\uD2B8\uC5D0 .vscode/launch.json \uD30C\uC77C\uC744 \uB9CC\uB4E4\uC5B4\uC11C \uC544\uB798 \uB0B4\uC6A9\uC744 \uCD94\uAC00\uD574\uC8FC\uC138\uC694:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.2.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;configurations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Next.js: debug server-side&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node-terminal&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;request&quot;</span><span class="token operator">:</span> <span class="token string">&quot;launch&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run dev&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Next.js: debug client-side&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;chrome&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;request&quot;</span><span class="token operator">:</span> <span class="token string">&quot;launch&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:3000&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Next.js: debug full stack&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node-terminal&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;request&quot;</span><span class="token operator">:</span> <span class="token string">&quot;launch&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run dev&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;serverReadyAction&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;pattern&quot;</span><span class="token operator">:</span> <span class="token string">&quot;- Local:.+(https?://.+)&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;uriFormat&quot;</span><span class="token operator">:</span> <span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;action&quot;</span><span class="token operator">:</span> <span class="token string">&quot;debugWithChrome&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uB9CC\uC57D Yarn\uC744 \uC0AC\uC6A9\uD558\uACE0 \uC788\uB2E4\uBA74 npm run dev \uB300\uC2E0 yarn dev\uB85C, pnpm\uC744 \uC0AC\uC6A9 \uC911\uC774\uB77C\uBA74 npm run dev \uB300\uC2E0 pnpm dev\uB85C \uBCC0\uACBD\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uB9CC\uC57D \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uD3EC\uD2B8 \uBC88\uD638\uB97C \uBCC0\uACBD\uD558\uACE0 \uC788\uB2E4\uBA74 http://localhost:3000\uC758 3000\uC744 \uC0AC\uC6A9\uD558\uB294 \uD3EC\uD2B8 \uBC88\uD638\uB85C \uBCC0\uACBD\uD574\uC8FC\uC138\uC694.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),u=s("p",null,'\uB8E8\uD2B8 \uB514\uB809\uD1A0\uB9AC\uAC00 \uC544\uB2CC \uB2E4\uB978 \uB514\uB809\uD1A0\uB9AC\uC5D0\uC11C Next.js\uB97C \uC2E4\uD589 \uC911\uC774\uB77C\uBA74(\uC608: Turborepo\uB97C \uC0AC\uC6A9\uD558\uB294 \uACBD\uC6B0) \uC11C\uBC84 \uCE21 \uBC0F \uC804\uCCB4 \uC2A4\uD0DD \uB514\uBC84\uAE45 \uC791\uC5C5\uC5D0 cwd\uB97C \uCD94\uAC00\uD574\uC57C \uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4, "cwd": "${workspaceFolder}/apps/web"\uC640 \uAC19\uC774 \uC124\uC815\uD558\uC138\uC694.',-1),v=s("p",null,"\uC774\uC81C \uB514\uBC84\uADF8 \uD328\uB110\uB85C \uC774\uB3D9\uD558\uC138\uC694 (Windows/Linux\uC5D0\uC11C\uB294 Ctrl+Shift+D, macOS\uC5D0\uC11C\uB294 \u21E7+\u2318+D), \uC2DC\uC791 \uAD6C\uC131\uC744 \uC120\uD0DD\uD55C \uB2E4\uC74C F5\uB97C \uB204\uB974\uAC70\uB098 \uBA85\uB839 \uD314\uB808\uD2B8\uC5D0\uC11C Debug: Start Debugging\uC744 \uC120\uD0DD\uD558\uC5EC \uB514\uBC84\uAE45 \uC138\uC158\uC744 \uC2DC\uC791\uD558\uC138\uC694.",-1),h=s("h2",{id:"jetbrains-webstorm\u110B\u1166\u1109\u1165-\u1103\u1175\u1107\u1165\u1100\u1165-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#jetbrains-webstorm\u110B\u1166\u1109\u1165-\u1103\u1175\u1107\u1165\u1100\u1165-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175","aria-hidden":"true"},"#"),a(" Jetbrains WebStorm\uC5D0\uC11C \uB514\uBC84\uAC70 \uC0AC\uC6A9\uD558\uAE30")],-1),b=s("p",null,"\uB7F0\uD0C0\uC784 \uAD6C\uC131 \uBAA9\uB85D\uC758 \uB4DC\uB86D\uB2E4\uC6B4 \uBA54\uB274\uB97C \uD074\uB9AD\uD55C \uB2E4\uC74C Edit Configurations...\uC744 \uD074\uB9AD\uD558\uC138\uC694. http://localhost:3000\uC744 URL\uB85C \uC0AC\uC6A9\uD558\uC5EC Javascript Debug \uB514\uBC84\uADF8 \uAD6C\uC131\uC744 \uB9CC\uB4DC\uC138\uC694. \uD544\uC694\uC5D0 \uB530\uB77C \uC0AC\uC6A9\uC790 \uC815\uC758\uD558\uC138\uC694 (\uC608: \uB514\uBC84\uAE45\uC5D0 \uBE0C\uB77C\uC6B0\uC800, \uD504\uB85C\uC81D\uD2B8 \uD30C\uC77C\uB85C \uC800\uC7A5) \uADF8\uB9AC\uACE0 \uD655\uC778\uC744 \uD074\uB9AD\uD558\uC138\uC694. \uC774 \uB514\uBC84\uADF8 \uAD6C\uC131\uC744 \uC2E4\uD589\uD558\uBA74 \uC120\uD0DD\uD55C \uBE0C\uB77C\uC6B0\uC800\uAC00 \uC790\uB3D9\uC73C\uB85C \uC5F4\uB9B4 \uAC83\uC785\uB2C8\uB2E4. \uC774 \uC2DC\uC810\uC5D0\uC11C NextJS \uB178\uB4DC \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uACFC \uD074\uB77C\uC774\uC5B8\uD2B8/\uBE0C\uB77C\uC6B0\uC800 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uB450 \uAC1C\uAC00 \uB514\uBC84\uADF8 \uBAA8\uB4DC\uB85C \uC2E4\uD589 \uC911\uC784\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),k=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),m=p('<h2 id="chrome-devtools\u110B\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u11AB-\u1103\u1175\u1107\u1165\u1100\u1175\u11BC" tabindex="-1"><a class="header-anchor" href="#chrome-devtools\u110B\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u11AB-\u1103\u1175\u1107\u1165\u1100\u1175\u11BC" aria-hidden="true">#</a> Chrome DevTools\uC744 \uC0AC\uC6A9\uD55C \uB514\uBC84\uAE45</h2><h3 id="\u110F\u1173\u11AF\u1105\u1161\u110B\u1175\u110B\u1165\u11AB\u1110\u1173-\u110E\u1173\u11A8-\u110F\u1169\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#\u110F\u1173\u11AF\u1105\u1161\u110B\u1175\u110B\u1165\u11AB\u1110\u1173-\u110E\u1173\u11A8-\u110F\u1169\u1103\u1173" aria-hidden="true">#</a> \uD074\uB77C\uC774\uC5B8\uD2B8 \uCE21 \uCF54\uB4DC</h3><p>\uAC1C\uBC1C \uC11C\uBC84\uB97C \uBCF4\uD1B5\uCC98\uB7FC \uC2E4\uD589\uD558\uB824\uBA74 next dev, npm run dev \uB610\uB294 yarn dev\uB97C \uC2E4\uD589\uD558\uC138\uC694. \uC11C\uBC84\uAC00 \uC2DC\uC791\uB418\uBA74 \uD06C\uB86C\uC5D0\uC11C http://localhost:3000(\uB610\uB294 \uB300\uCCB4 URL)\uC744 \uC5F4\uC5B4\uC8FC\uC138\uC694. \uADF8 \uD6C4\uC5D0 \uD06C\uB86C\uC758 \uAC1C\uBC1C\uC790 \uB3C4\uAD6C\uB97C \uC5F4\uACE0 (Windows/Linux\uC5D0\uC11C\uB294 Ctrl+Shift+J, macOS\uC5D0\uC11C\uB294 \u2325+\u2318+I), Sources \uD0ED\uC73C\uB85C \uC774\uB3D9\uD558\uC138\uC694.</p><p>\uC774\uC81C \uD074\uB77C\uC774\uC5B8\uD2B8 \uCE21 \uCF54\uB4DC\uAC00 \uB514\uBC84\uAC70 \uBB38\uC744 \uB9CC\uB098\uBA74 \uCF54\uB4DC \uC2E4\uD589\uC774 \uBA48\uCD94\uACE0 \uD574\uB2F9 \uD30C\uC77C\uC774 \uB514\uBC84\uADF8 \uC601\uC5ED\uC5D0 \uB098\uD0C0\uB0A9\uB2C8\uB2E4. \uB610\uD55C Windows/Linux\uC5D0\uC11C\uB294 Ctrl+P \uB610\uB294 macOS\uC5D0\uC11C\uB294 \u2318+P\uB97C \uB20C\uB7EC \uD30C\uC77C\uC744 \uAC80\uC0C9\uD558\uACE0 \uC218\uB3D9\uC73C\uB85C \uC911\uB2E8\uC810\uC744 \uC124\uC815\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uC5EC\uAE30\uC11C \uAC80\uC0C9\uD560 \uB54C \uC720\uC758\uD560 \uC810\uC740 \uC6F9\uD329://_N_E/./\uB85C \uC2DC\uC791\uD558\uB294 \uACBD\uB85C\uB97C \uAC00\uC9C4 \uC18C\uC2A4 \uD30C\uC77C\uB4E4\uC774 \uC788\uC2B5\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),g=p(`<h3 id="\u1109\u1165\u1107\u1165-\u110E\u1173\u11A8-\u110F\u1169\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#\u1109\u1165\u1107\u1165-\u110E\u1173\u11A8-\u110F\u1169\u1103\u1173" aria-hidden="true">#</a> \uC11C\uBC84 \uCE21 \uCF54\uB4DC</h3><p>Chrome DevTools\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC11C\uBC84 \uCE21 Next.js \uCF54\uB4DC\uB97C \uB514\uBC84\uAE45\uD558\uB824\uBA74 \uAE30\uBCF8 Node.js \uD504\uB85C\uC138\uC2A4\uC5D0 --inspect \uD50C\uB798\uADF8\uB97C \uC804\uB2EC\uD574\uC57C \uD569\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token constant">NODE_OPTIONS</span><span class="token operator">=</span><span class="token string">&#39;--inspect&#39;</span> next dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uB9CC\uC57D npm run dev \uB610\uB294 yarn dev\uB97C \uC0AC\uC6A9 \uC911\uC774\uB77C\uBA74 package.json\uC5D0\uC11C dev \uC2A4\uD06C\uB9BD\uD2B8\uB97C \uC5C5\uB370\uC774\uD2B8\uD574\uC57C \uD569\uB2C8\uB2E4:</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),q=s("p",null,"\uD45C\uB97C \uB2E4\uC74C\uACFC \uAC19\uC740 \uD615\uC2DD\uC73C\uB85C \uBCC0\uACBD\uD574 \uBCF4\uC138\uC694:",-1),y=s("p",null,"Next.js \uAC1C\uBC1C \uC11C\uBC84\uC5D0 --inspect \uD50C\uB798\uADF8\uB97C \uC0AC\uC6A9\uD558\uC5EC \uB85C\uCEEC \uAC1C\uBC1C \uC11C\uBC84\uB97C \uC2DC\uC791\uD558\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC740 \uBA54\uC2DC\uC9C0\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4:",-1),_=s("p",null,"\uB514\uBC84\uAC70\uAC00 ws://127.0.0.1:9229/0cf90313-350d-4466-a748-cd60f4e47c95\uC5D0\uC11C \uC218\uC2E0 \uB300\uAE30 \uC911\uC785\uB2C8\uB2E4. \uB3C4\uC6C0\uC774 \uD544\uC694\uD558\uBA74 \uB2E4\uC74C \uBB38\uC11C\uB97C \uCC38\uC870\uD558\uC138\uC694: https://nodejs.org/en/docs/inspector \uC900\uBE44 \uC644\uB8CC - \uC11C\uBC84\uAC00 0.0.0.0:3000\uC5D0\uC11C \uC2DC\uC791\uB418\uC5C8\uC2B5\uB2C8\uB2E4. URL: http://localhost:3000",-1),f=s("blockquote",null,[s("p",null,[a("NODE_OPTIONS="),s("code",null,"--inspect"),a(" npm run dev \uB610\uB294 NODE_OPTIONS="),s("code",null,"--inspect"),a(" yarn dev\uB97C \uC0AC\uC6A9\uD558\uC9C0 \uB9C8\uC138\uC694. \uC774\uB807\uAC8C \uD558\uBA74 \uB3D9\uC77C\uD55C \uD3EC\uD2B8\uC5D0\uC11C \uC5EC\uB7EC \uAC1C\uC758 \uB514\uBC84\uAC70\uB97C \uC2DC\uC791\uD558\uB824\uACE0 \uD558\uBBC0\uB85C npm/yarn \uD504\uB85C\uC138\uC2A4\uC5D0 \uB300\uD55C \uD558\uB098, Next.js\uC5D0 \uB300\uD55C \uD558\uB098\uAC00 \uC0DD\uC131\uB429\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uACBD\uC6B0 \uCF58\uC194\uC5D0 Address already in use: Starting inspector on 127.0.0.1:9229 failed\uB77C\uB294 \uC624\uB958\uAC00 \uD45C\uC2DC\uB429\uB2C8\uB2E4.")])],-1),w=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),x=s("p",null,"\uC11C\uBC84\uAC00 \uC2DC\uC791\uB418\uBA74 Chrome\uC5D0\uC11C \uC0C8 \uD0ED\uC744 \uC5F4\uACE0 chrome://inspect\uB97C \uBC29\uBB38\uD558\uC5EC Remote Target \uC139\uC158 \uC548\uC5D0 Next.js \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158 \uC544\uB798\uC5D0 \uC788\uB294 inspect\uB97C \uD074\uB9AD\uD558\uC5EC \uBCC4\uB3C4\uC758 DevTools \uCC3D\uC744 \uC5F4\uACE0 Sources \uD0ED\uC73C\uB85C \uC774\uB3D9\uD558\uC138\uC694.",-1),N=s("p",null,"\uC5EC\uAE30\uC11C \uC11C\uBC84 \uCE21 \uCF54\uB4DC\uB97C \uB514\uBC84\uAE45\uD558\uB294 \uBC29\uBC95\uC740 Chrome DevTools\uB85C \uD074\uB77C\uC774\uC5B8\uD2B8 \uCE21 \uCF54\uB4DC\uB97C \uB514\uBC84\uAE45\uD558\uB294 \uAC83\uACFC \uB9E4\uC6B0 \uC720\uC0AC\uD569\uB2C8\uB2E4. \uB2E8, \uC5EC\uAE30\uC11C \uD30C\uC77C\uC744 \uCC3E\uC744 \uB54C Ctrl+P \uB610\uB294 \u2318+P\uB85C \uAC80\uC0C9\uD560 \uB54C \uC18C\uC2A4 \uD30C\uC77C \uACBD\uB85C\uB294 webpack://{application-name}/./ (\uC5EC\uAE30\uC11C {application-name}\uC740 package.json \uD30C\uC77C\uC5D0 \uB530\uB77C \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158 \uC774\uB984\uC73C\uB85C \uB300\uCCB4\uB429\uB2C8\uB2E4)\uB85C \uC2DC\uC791\uD569\uB2C8\uB2E4.",-1),j=s("h3",{id:"windows\u110B\u1166\u1109\u1165\u110B\u1174-\u1103\u1175\u1107\u1165\u1100\u1175\u11BC",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#windows\u110B\u1166\u1109\u1165\u110B\u1174-\u1103\u1175\u1107\u1165\u1100\u1175\u11BC","aria-hidden":"true"},"#"),a(" Windows\uC5D0\uC11C\uC758 \uB514\uBC84\uAE45")],-1),O=s("p",null,[a("Windows \uC0AC\uC6A9\uC790\uB294 NODE_OPTIONS="),s("code",null,"--inspect"),a("\uB97C \uC0AC\uC6A9\uD560 \uB54C Windows \uD50C\uB7AB\uD3FC\uC5D0\uC11C \uC9C0\uC6D0\uB418\uC9C0 \uC54A\uB294 \uAD6C\uBB38 \uBB38\uC81C\uC5D0 \uC9C1\uBA74\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB97C \uD574\uACB0\uD558\uAE30 \uC704\uD574 cross-env \uD328\uD0A4\uC9C0\uB97C \uAC1C\uBC1C \uC885\uC18D\uC131\uC73C\uB85C \uC124\uCE58\uD558\uACE0(-D with npm \uB610\uB294 yarn \uC0AC\uC6A9) dev \uC2A4\uD06C\uB9BD\uD2B8\uB97C \uB2E4\uC74C\uACFC \uAC19\uC774 \uBC14\uAFC9\uB2C8\uB2E4.")],-1),S=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),D=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cross-env NODE_OPTIONS=&#39;--inspect&#39; next dev&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cross-env\uB294 Mac, Linux \uBC0F Windows\uB97C \uD3EC\uD568\uD55C \uBAA8\uB4E0 \uD50C\uB7AB\uD3FC\uC5D0\uC11C NODE_OPTIONS \uD658\uACBD \uBCC0\uC218\uB97C \uC124\uC815\uD558\uACE0 \uC7A5\uCE58 \uBC0F \uC6B4\uC601 \uCCB4\uC81C \uAC04\uC5D0 \uC77C\uAD00\uB41C \uB514\uBC84\uAE45\uC744 \uAC00\uB2A5\uD558\uAC8C \uD569\uB2C8\uB2E4.</p><blockquote><p>\uC88B\uC740 \uC815\uBCF4: Windows Defender\uAC00 \uAEBC\uC838 \uC788\uB294\uC9C0 \uD655\uC778\uD558\uC138\uC694. \uC774 \uC678\uBD80 \uC11C\uBE44\uC2A4\uB294 \uBAA8\uB4E0 \uD30C\uC77C \uC77D\uAE30\uB97C \uD655\uC778\uD558\uBA70, next dev\uC5D0\uC11C Fast Refresh \uC2DC\uAC04\uC744 \uD06C\uAC8C \uB298\uB9B0\uB2E4\uACE0 \uBCF4\uACE0\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC774\uB294 Next.js\uC640 \uAD00\uB828\uB41C \uBB38\uC81C\uAC00 \uC544\uB2C8\uC9C0\uB9CC Next.js \uAC1C\uBC1C\uC5D0 \uC601\uD5A5\uC744 \uBBF8\uCE69\uB2C8\uB2E4.</p></blockquote><h2 id="\u110C\u1161\u1109\u1166\u1112\u1161\u11AB-\u110C\u1165\u11BC\u1107\u1169" tabindex="-1"><a class="header-anchor" href="#\u110C\u1161\u1109\u1166\u1112\u1161\u11AB-\u110C\u1165\u11BC\u1107\u1169" aria-hidden="true">#</a> \uC790\uC138\uD55C \uC815\uBCF4</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),C=s("p",null,"\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uB514\uBC84\uAC70\uB97C \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD574 \uB354 \uC54C\uC544\uBCF4\uB824\uBA74 \uB2E4\uC74C \uBB38\uC11C\uB97C \uCC38\uC870\uD574\uBCF4\uC138\uC694:",-1),T=s("ul",null,[s("li",null,"Node.js \uB514\uBC84\uAE45 VS Code: \uC911\uB2E8\uC810"),s("li",null,"Chrome DevTools: \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uB514\uBC84\uAE45")],-1),E=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1);function P(W,L){return n(),i("div",null,[c,(n(),t(o("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),r,(n(),t(o("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),u,v,h,b,k,(n(),t(o("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),m,(n(),t(o("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),g,(n(),t(o("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),q,y,_,f,w,(n(),t(o("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),x,N,j,O,S,(n(),t(o("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),D,(n(),t(o("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),C,T,E,(n(),t(o("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1}))])}var U=l(d,[["render",P],["__file","index.html.vue"]]);export{U as default};
