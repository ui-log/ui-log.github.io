import{_ as l}from"./app.3052dcfb.js";import{l as s,m as d,E as n,G as t,p as e,Y as o,C as a,K as i}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var p="/assets/RenamingYourReactNativeAppAStep-by-StepGuide_0.bb67f366.png";const r={},c=a("img",{src:p},null,-1),u=a("p",null,"\uB9CC\uC57D React Native \uC571\uC758 \uC774\uB984\uC744 \uBC14\uAFD4\uC57C \uD560 \uD544\uC694\uAC00 \uC788\uB2E4\uBA74, \uBE0C\uB79C\uB4DC \uBCC0\uACBD\uC774\uB098 \uD504\uB85C\uC81D\uD2B8 \uCD08\uC810 \uBCC0\uACBD\uC73C\uB85C \uC778\uD55C \uACBD\uC6B0\uB4E0 \uC0C1\uD669\uC740 \uB2E4\uB97C\uC9C0 \uBAA8\uB985\uB2C8\uB2E4. \uAE30\uC874\uC758 React Native \uC571\uC758 \uC774\uB984\uC744 \uBCC0\uACBD\uD558\uB294 \uAC83\uC740 \uBA87 \uB2E8\uACC4\uB97C \uAC70\uCCD0 \uC774\uB8E8\uC5B4\uC9C0\uBA70, \uBCF8 \uC548\uB0B4\uC11C\uC5D0\uC11C\uB294 \uC774\uB97C \uC218\uB3D9\uC73C\uB85C \uC9C4\uD589\uD574 \uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uC774 \uB2E8\uACC4\uB97C \uB530\uB77C\uAC00\uBA74 \uC678\uBD80 \uD328\uD0A4\uC9C0\uC5D0 \uC758\uC874\uD558\uC9C0 \uC54A\uACE0\uB3C4 \uC6D0\uD65C\uD55C \uC804\uD658\uC744 \uBCF4\uC7A5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),m=a("h1",{id:"\u1103\u1161\u11AB\u1100\u1168-1-package-json-\u110B\u1165\u11B8\u1103\u1166\u110B\u1175\u1110\u1173",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u1103\u1161\u11AB\u1100\u1168-1-package-json-\u110B\u1165\u11B8\u1103\u1166\u110B\u1175\u1110\u1173","aria-hidden":"true"},"#"),e(" \uB2E8\uACC4 1: package.json \uC5C5\uB370\uC774\uD2B8")],-1),g=a("p",null,"\uCCAB \uBC88\uC9F8 \uB2E8\uACC4\uB294 package.json \uD30C\uC77C\uC744 \uC5F4\uACE0 name \uD544\uB4DC\uB97C \uCC3E\uB294 \uAC83\uC785\uB2C8\uB2E4. \uC774 \uD544\uB4DC\uB294 \uC571\uC758 \uACE0\uC720 \uC2DD\uBCC4\uC790\uB85C \uC791\uB3D9\uD569\uB2C8\uB2E4. \uD604\uC7AC\uC758 \uC774\uB984\uC744 \uC6D0\uD558\uB294 \uC0C8 \uC774\uB984\uC73C\uB85C \uBC14\uAFB8\uC5B4 \uC8FC\uC2ED\uC2DC\uC624.",-1),h=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),v=i(`<div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;newAppName&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// other fields...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1103\u1161\u11AB\u1100\u1168-2-app-json-\u1111\u1161\u110B\u1175\u11AF\u110B\u1166\u1109\u1165-\u110B\u1162\u11B8-\u1111\u116D\u1109\u1175-\u110B\u1175\u1105\u1173\u11B7-\u110B\u1165\u11B8\u1103\u1166\u110B\u1175\u1110\u1173" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u1100\u1168-2-app-json-\u1111\u1161\u110B\u1175\u11AF\u110B\u1166\u1109\u1165-\u110B\u1162\u11B8-\u1111\u116D\u1109\u1175-\u110B\u1175\u1105\u1173\u11B7-\u110B\u1165\u11B8\u1103\u1166\u110B\u1175\u1110\u1173" aria-hidden="true">#</a> \uB2E8\uACC4 2: app.json \uD30C\uC77C\uC5D0\uC11C \uC571 \uD45C\uC2DC \uC774\uB984 \uC5C5\uB370\uC774\uD2B8</h2><p>app.json \uD30C\uC77C\uC5D0\uC11C displayName \uD544\uB4DC\uB97C \uCC3E\uC73C\uC138\uC694. \uC774 \uD544\uB4DC\uB294 \uAE30\uAE30\uC5D0 \uC124\uCE58\uB41C \uC571\uC758 \uD45C\uC2DC \uC774\uB984\uC744 \uB098\uD0C0\uB0C5\uB2C8\uB2E4. \uC0C8 \uC571 \uC774\uB984\uC73C\uB85C \uC5C5\uB370\uC774\uD2B8\uD558\uC2ED\uC2DC\uC624.</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;newAppName&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;displayName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\uC0C8 \uC571 \uC774\uB984&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),b=i(`<h1 id="\u1103\u1161\u11AB\u1100\u1168-3-androidmanifest-xml-\u110B\u1165\u11B8\u1103\u1166\u110B\u1175\u1110\u1173" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u1100\u1168-3-androidmanifest-xml-\u110B\u1165\u11B8\u1103\u1166\u110B\u1175\u1110\u1173" aria-hidden="true">#</a> \uB2E8\uACC4 3: AndroidManifest.xml \uC5C5\uB370\uC774\uD2B8</h1><p>Android\uB97C \uC704\uD574\uC11C\uB294 android/app/src/main/AndroidManifest.xml\uC744 \uC5F4\uACE0 \uD328\uD0A4\uC9C0 \uC18D\uC131\uC744 \uCC3E\uC73C\uC138\uC694. \uC0C8 \uC571 \uC774\uB984\uACFC \uC77C\uCE58\uD558\uB3C4\uB85D \uC5C5\uB370\uC774\uD2B8\uD574\uC8FC\uC138\uC694.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>manifest xmlns<span class="token operator">:</span>android<span class="token operator">=</span><span class="token string">&quot;http://schemas.android.com/apk/res/android&quot;</span>
  <span class="token keyword">package</span><span class="token operator">=</span><span class="token string">&quot;com.newAppName&quot;</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u1103\u1161\u11AB\u1100\u1168-4-info-plist\u110B\u1166\u1109\u1165-ios-\u1107\u1165\u11AB\u1103\u1173\u11AF-\u1109\u1175\u11A8\u1107\u1167\u11AF\u110C\u1161-\u110B\u1165\u11B8\u1103\u1166\u110B\u1175\u1110\u1173" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u1100\u1168-4-info-plist\u110B\u1166\u1109\u1165-ios-\u1107\u1165\u11AB\u1103\u1173\u11AF-\u1109\u1175\u11A8\u1107\u1167\u11AF\u110C\u1161-\u110B\u1165\u11B8\u1103\u1166\u110B\u1175\u1110\u1173" aria-hidden="true">#</a> \uB2E8\uACC4 4: Info.plist\uC5D0\uC11C iOS \uBC88\uB4E4 \uC2DD\uBCC4\uC790 \uC5C5\uB370\uC774\uD2B8</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),k=i(`<p>iOS\uC758 \uACBD\uC6B0, ios/<code>newAppName</code>/Info.plist \uD30C\uC77C\uB85C \uC774\uB3D9\uD558\uC5EC CFBundleIdentifier\uB97C \uCC3E\uC73C\uC138\uC694. \uC0C8 \uC571 \uC774\uB984\uACFC \uC77C\uCE58\uD558\uB3C4\uB85D \uC5C5\uB370\uC774\uD2B8\uD558\uC138\uC694.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>key<span class="token operator">&gt;</span>CFBundleIdentifier<span class="token operator">&lt;</span><span class="token operator">/</span>key<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span>com<span class="token punctuation">.</span>newAppName<span class="token operator">&lt;</span><span class="token operator">/</span>string<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u1103\u1161\u11AB\u1100\u1168-5-\u110C\u1165\u11BC\u1105\u1175-\u1106\u1175\u11BE-\u110C\u1162\u1107\u1175\u11AF\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u1100\u1168-5-\u110C\u1165\u11BC\u1105\u1175-\u1106\u1175\u11BE-\u110C\u1162\u1107\u1175\u11AF\u1103\u1173" aria-hidden="true">#</a> \uB2E8\uACC4 5: \uC815\uB9AC \uBC0F \uC7AC\uBE4C\uB4DC</h1><p>\uD504\uB85C\uC81D\uD2B8\uB97C \uC815\uB9AC\uD558\uB294 \uAC83\uC740 \uBCC0\uACBD \uC0AC\uD56D\uC744 \uD6A8\uACFC\uC801\uC73C\uB85C \uC801\uC6A9\uD558\uB294 \uB370 \uC911\uC694\uD569\uB2C8\uB2E4. \uC548\uB4DC\uB85C\uC774\uB4DC\uC758 \uACBD\uC6B0 \uB2E4\uC74C \uBA85\uB839\uC744 \uC2E4\uD589\uD558\uC138\uC694.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),f=i(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>cd android <span class="token operator">&amp;&amp;</span> <span class="token punctuation">.</span><span class="token operator">/</span>gradlew clean
cd <span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>iOS \uACBD\uC6B0, Xcode\uC5D0\uC11C ios \uB514\uB809\uD1A0\uB9AC\uB97C \uC5F4\uACE0 \uD504\uB85C\uC81D\uD2B8\uB97C \uC815\uB9AC\uD558\uC138\uC694.</p><h1 id="\u1103\u1161\u11AB\u1100\u1168-6-\u110B\u1162\u11B8-\u110E\u1161\u11B7\u110C\u1169-\u110B\u1165\u11B8\u1103\u1166\u110B\u1175\u1110\u1173" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u1100\u1168-6-\u110B\u1162\u11B8-\u110E\u1161\u11B7\u110C\u1169-\u110B\u1165\u11B8\u1103\u1166\u110B\u1175\u1110\u1173" aria-hidden="true">#</a> \uB2E8\uACC4 6: \uC571 \uCC38\uC870 \uC5C5\uB370\uC774\uD2B8</h1><p>\uCF54\uB4DC\uBCA0\uC774\uC2A4\uC5D0\uC11C \uC774\uC804 \uC571 \uC774\uB984\uC744 \uC0C8\uB85C\uC6B4 \uC774\uB984\uC73C\uB85C \uC218\uB3D9\uC73C\uB85C \uAC80\uC0C9\uD558\uACE0 \uB300\uCCB4\uD558\uC138\uC694. \uC774 \uB2E8\uACC4\uB294 \uB7F0\uD0C0\uC784 \uBB38\uC81C\uB97C \uBC29\uC9C0\uD558\uAE30 \uC704\uD574 \uC911\uC694\uD569\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),_=i(`<h1 id="\u1103\u1161\u11AB\u1100\u1168-7-\u1107\u1167\u11AB\u1100\u1167\u11BC-\u1102\u1162\u110B\u116D\u11BC-\u1112\u116A\u11A8\u110B\u1175\u11AB" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u1100\u1168-7-\u1107\u1167\u11AB\u1100\u1167\u11BC-\u1102\u1162\u110B\u116D\u11BC-\u1112\u116A\u11A8\u110B\u1175\u11AB" aria-hidden="true">#</a> \uB2E8\uACC4 7: \uBCC0\uACBD \uB0B4\uC6A9 \uD655\uC778</h1><p>\uB9C8\uC9C0\uB9C9\uC73C\uB85C \uC571\uC744 \uC2E4\uD589\uD558\uC5EC \uBAA8\uB4E0 \uAC83\uC774 \uC62C\uBC14\uB974\uAC8C \uC791\uB3D9\uD558\uB294\uC9C0 \uD655\uC778\uD558\uC2ED\uC2DC\uC624. \uB2E4\uC74C \uBA85\uB839\uC5B4\uB97C \uC0AC\uC6A9\uD558\uC2ED\uC2DC\uC624:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npx react<span class="token operator">-</span>native run<span class="token operator">-</span>android
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npx react<span class="token operator">-</span>native run<span class="token operator">-</span>ios
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),y=i('<p>\uC774 \uB2E8\uACC4\uB97C \uB530\uB77C\uC11C React Native \uC571\uC758 \uC774\uB984\uC744 \uC131\uACF5\uC801\uC73C\uB85C \uBC14\uAFB8\uC168\uAD70\uC694. \uC218\uB3D9\uC73C\uB85C \uC9C4\uD589\uD558\uB294 \uC774 \uBC29\uBC95\uC740 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uAC00\uD55C \uBCC0\uACBD \uC0AC\uD56D\uC744 \uC81C\uC5B4\uD558\uACE0 \uC774\uD574\uD560 \uC218 \uC788\uB3C4\uB85D \uB3C4\uC640\uC90D\uB2C8\uB2E4. \uC774\uB984\uC744 \uBCC0\uACBD\uD558\uB294 \uACFC\uC815\uC744 \uCD94\uC801\uD558\uAE30 \uC704\uD574 \uBC84\uC804 \uAD00\uB9AC\uC5D0 \uBCC0\uACBD \uC0AC\uD56D\uC744 \uCEE4\uBC0B\uD558\uB294 \uAC83\uC744 \uAE30\uC5B5\uD574 \uC8FC\uC138\uC694.</p><p>\uC81C\uAC00 \uC81C\uC2DC\uD55C \uC774 \uAC00\uC774\uB4DC\uAC00 React Native \uC571\uC758 \uC774\uB984\uC744 \uC218\uB3D9\uC73C\uB85C \uBCC0\uACBD\uD558\uB294 \uACFC\uC815\uC744 \uD0D0\uD5D8\uD558\uB294 \uB370 \uB3C4\uC6C0\uC774 \uB418\uC5C8\uC73C\uBA74 \uC88B\uACA0\uC5B4\uC694. \uAD81\uAE08\uD55C \uC810\uC774\uB098 \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD558\uBA74 \uC5B8\uC81C\uB4E0\uC9C0 \uBB38\uC758\uD574 \uC8FC\uC138\uC694. \uC990\uAC70\uC6B4 \uCF54\uB529\uD558\uC138\uC694!</p><ul><li>\u{1F44F} \uC2A4\uD1A0\uB9AC\uC5D0 \uBC15\uC218\uB97C \uBCF4\uB0B4\uACE0 \uC800\uC790\uB97C \uD314\uB85C\uC6B0\uD558\uC138\uC694</li><li>\uC800\uC790\uC758 \uD1B5\uCC30\uB825 \uC788\uB294 \uCEE8\uD150\uCE20\uC5D0 \uAC10\uC0AC\uC758 \uD45C\uC2DC\uB97C \uD574\uC8FC\uC138\uC694.</li><li>Abhishek Kumar\uB97C \uD314\uB85C\uC6B0\uD558\uC138\uC694.</li><li>\u{1F4F0} Abhishek Kumar \uBC1C\uD589\uBB3C\uC744 \uB354 \uC0B4\uD3B4\uBCF4\uC138\uC694</li><li>\u{1F514} \uC18C\uC15C \uBBF8\uB514\uC5B4\uB85C \uC5F0\uACB0\uC720\uC9C0\uD558\uC138\uC694</li><li>Level Up Coding\uC744 \uD2B8\uC704\uD130\uC5D0\uC11C \uD314\uB85C\uC6B0\uD558\uACE0 LinkedIn\uC5D0\uC11C \uC5F0\uACB0\uD558\uC5EC \uCD5C\uC2E0 \uD1A0\uB860\uACFC \uCF58\uD150\uCE20\uB97C \uC5C5\uB370\uC774\uD2B8\uD558\uC138\uC694.</li></ul><h1 id="stackademic" tabindex="-1"><a class="header-anchor" href="#stackademic" aria-hidden="true">#</a> Stackademic</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),j=a("p",null,"\uB9C8\uC9C0\uB9C9\uAE4C\uC9C0 \uC77D\uC5B4 \uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4. \uC774\uB807\uAC8C \uC904 \uAE00 \uB0A8\uACA8\uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4!",-1),w=a("ul",null,[a("li",null,"\uC791\uAC00\uB97C \uD074\uB7A9\uD558\uACE0 \uD314\uB85C\uC6B0\uD560 \uAC83\uC744 \uACE0\uB824\uD574 \uC8FC\uC138\uC694! \u{1F44F}"),a("li",null,"\uD2B8\uC704\uD130(X), \uB9C1\uD06C\uB4DC\uC778, \uC720\uD29C\uBE0C\uC5D0\uC11C \uD314\uB85C\uC6B0\uD574\uC8FC\uC138\uC694."),a("li",null,"\uC804\uC138\uACC4\uC5D0\uC11C \uBB34\uB8CC \uD504\uB85C\uADF8\uB798\uBC0D \uAD50\uC721\uC744 \uBBFC\uC8FC\uD654\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD574 \uB354 \uC54C\uC544\uBCF4\uB824\uBA74 Stackademic.com\uC744 \uBC29\uBB38\uD574 \uC8FC\uC138\uC694.")],-1);function x(q,N){return s(),d("div",null,[c,u,m,g,h,(s(),n(o("script"),null,{default:t(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),v,(s(),n(o("script"),null,{default:t(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b,(s(),n(o("script"),null,{default:t(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),k,(s(),n(o("script"),null,{default:t(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),f,(s(),n(o("script"),null,{default:t(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),_,(s(),n(o("script"),null,{default:t(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),y,(s(),n(o("script"),null,{default:t(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),j,w])}var K=l(r,[["render",x],["__file","index.html.vue"]]);export{K as default};
