import{_ as i}from"./app.3052dcfb.js";import{l as s,m as l,E as t,G as e,p as n,Y as o,K as p,C as a}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var c="/assets/Boosting-React-Native-Performance-with-Lazy-Loading-and-Code-Splitting_0.c378a633.png",r="/assets/Boosting-React-Native-Performance-with-Lazy-Loading-and-Code-Splitting_1.4403d4bd.png",d="/assets/Boosting-React-Native-Performance-with-Lazy-Loading-and-Code-Splitting_2.86a443d3.png";const u={},k=p('<img src="'+c+'"><h1 id="\u1109\u1169\u1100\u1162" tabindex="-1"><a class="header-anchor" href="#\u1109\u1169\u1100\u1162" aria-hidden="true">#</a> \uC18C\uAC1C:</h1><p>\uBAA8\uBC14\uC77C \uC571 \uAC1C\uBC1C \uC138\uACC4\uC5D0\uC11C \uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC740 \uC911\uC694\uD569\uB2C8\uB2E4. \uC0AC\uC6A9\uC790\uB294 \uD50C\uB7AB\uD3FC\uC5D0 \uAD00\uACC4\uC5C6\uC774 \uBE60\uB974\uACE0 \uBC18\uC751\uC801\uC778 \uC571\uC744 \uAE30\uB300\uD569\uB2C8\uB2E4. React Native\uC758 \uACBD\uC6B0, \uD06C\uB85C\uC2A4 \uD50C\uB7AB\uD3FC \uBAA8\uBC14\uC77C \uC571\uC744 \uAC1C\uBC1C\uD558\uAE30 \uC704\uD55C \uC778\uAE30\uC788\uB294 \uD504\uB808\uC784\uC6CC\uD06C\uB85C, \uC131\uB2A5 \uCD5C\uC801\uD654\uB294 \uAC1C\uBC1C\uC758 \uC911\uC694\uD55C \uCE21\uBA74\uC785\uB2C8\uB2E4. \uB808\uC774\uC9C0 \uB85C\uB529\uACFC \uCF54\uB4DC \uC2A4\uD50C\uB9AC\uD305\uC740 React Native \uC571\uC758 \uC131\uB2A5\uC744 \uD06C\uAC8C \uD5A5\uC0C1\uC2DC\uD0AC \uC218 \uC788\uB294 \uB450 \uAC00\uC9C0 \uAC15\uB825\uD55C \uAE30\uC220\uC785\uB2C8\uB2E4.</p><h1 id="\u1105\u1166\u110B\u1175\u110C\u1175-\u1105\u1169\u1103\u1175\u11BC\u1100\u116A-\u110F\u1169\u1103\u1173-\u1109\u1173\u1111\u1173\u11AF\u1105\u1175\u1110\u1175\u11BC\u110B\u1175\u1105\u1161\u11AB-\u1106\u116E\u110B\u1165\u11BA\u110B\u1175\u11AB\u1100\u1161\u110B\u116D" tabindex="-1"><a class="header-anchor" href="#\u1105\u1166\u110B\u1175\u110C\u1175-\u1105\u1169\u1103\u1175\u11BC\u1100\u116A-\u110F\u1169\u1103\u1173-\u1109\u1173\u1111\u1173\u11AF\u1105\u1175\u1110\u1175\u11BC\u110B\u1175\u1105\u1161\u11AB-\u1106\u116E\u110B\u1165\u11BA\u110B\u1175\u11AB\u1100\u1161\u110B\u116D" aria-hidden="true">#</a> \uB808\uC774\uC9C0 \uB85C\uB529\uACFC \uCF54\uB4DC \uC2A4\uD50C\uB9AC\uD305\uC774\uB780 \uBB34\uC5C7\uC778\uAC00\uC694?</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),v=a("p",null,"\uC774 \uAE30\uC220\uB4E4\uC744 React Native\uC5D0\uC11C \uC5B4\uB5BB\uAC8C \uAD6C\uD604\uD558\uB294\uC9C0 \uC54C\uC544\uBCF4\uAE30 \uC804\uC5D0, lazy loading\uACFC \uCF54\uB4DC \uBD84\uD560\uC774 \uBB34\uC5C7\uC744 \uC758\uBBF8\uD558\uB294\uC9C0 \uBA85\uD655\uD788 \uD574\uBD05\uC2DC\uB2E4.",-1),g=a("p",null,[a("img",{src:r,alt:"\uC774\uBBF8\uC9C0"})],-1),m=a("h2",{id:"lazy-loading",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#lazy-loading","aria-hidden":"true"},"#"),n(" Lazy Loading:")],-1),b=a("p",null,"Lazy loading\uC740 \uD2B9\uC815 \uB9AC\uC18C\uC2A4(\uC608: \uCEF4\uD3EC\uB10C\uD2B8, \uBAA8\uB4C8 \uB610\uB294 \uC774\uBBF8\uC9C0)\uC758 \uB85C\uB529\uC744 \uC2E4\uC81C\uB85C \uD544\uC694\uD560 \uB54C\uAE4C\uC9C0 \uC9C0\uC5F0\uC2DC\uD0A4\uB294 \uC804\uB7B5\uC785\uB2C8\uB2E4. \uC774 \uC811\uADFC \uBC29\uC2DD\uC740 \uCD08\uAE30 \uC571 \uB85C\uB4DC \uC2DC\uAC04\uC744 \uC904\uC774\uB294 \uB370 \uB3C4\uC6C0\uC774 \uB429\uB2C8\uB2E4. \uC65C\uB0D0\uD558\uBA74 \uCD08\uAE30 \uC571 \uAD6C\uB3D9 \uC2DC\uC5D0\uB294 \uD544\uC218 \uCEF4\uD3EC\uB10C\uD2B8\uB9CC \uB85C\uB4DC\uB418\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. \uCD94\uAC00 \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC0AC\uC6A9\uC790\uAC00 \uC571\uACFC \uC0C1\uD638\uC791\uC6A9\uD560 \uB54C \uB85C\uB4DC\uB429\uB2C8\uB2E4.",-1),h=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),y=a("p",null,[a("img",{src:d,alt:"Boosting React Native Performance with Lazy Loading and Code Splitting"})],-1),f=a("h1",{id:"\u110F\u1169\u1103\u1173-\u1107\u116E\u11AB\u1112\u1161\u11AF",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u110F\u1169\u1103\u1173-\u1107\u116E\u11AB\u1112\u1161\u11AF","aria-hidden":"true"},"#"),n(" \uCF54\uB4DC \uBD84\uD560:")],-1),w=a("p",null,"\uCF54\uB4DC \uBD84\uD560\uC740 JavaScript \uCF54\uB4DC\uB97C \uB354 \uC791\uACE0 \uAD00\uB9AC\uD558\uAE30 \uC26C\uC6B4 \uC870\uAC01\uB4E4\uB85C \uBD84\uD560\uD558\uB294 \uAE30\uC220\uC785\uB2C8\uB2E4. \uC571 \uC804\uCCB4\uB97C \uD558\uB098\uC758 JavaScript \uD30C\uC77C\uB85C \uBC88\uB4E4\uB9C1\uD558\uB294 \uB300\uC2E0 \uC5EC\uB7EC \uAC1C\uC758 \uC791\uC740 \uD30C\uC77C \uB610\uB294 \uC870\uAC01\uC73C\uB85C \uB098\uB204\uC5B4 \uC9C1\uC811 \uB85C\uB4DC\uB420 \uB54C\uC5D0\uB9CC \uB85C\uB529\uD558\uB294 \uBC29\uC2DD\uC73C\uB85C \uC571\uC758 \uCD08\uAE30 \uB85C\uB4DC \uC2DC\uAC04\uACFC \uC804\uBC18\uC801\uC778 \uC131\uB2A5\uC744 \uD5A5\uC0C1\uC2DC\uD0AC \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),_=a("p",null,"\uC774\uC81C \uC774 \uAC1C\uB150\uC744 \uC774\uD574\uD588\uC73C\uB2C8, React Native \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C lazy loading\uACFC \uCF54\uB4DC \uBD84\uD560\uC744 \uAD6C\uD604\uD558\uB294 \uBC29\uBC95\uC744 \uC0B4\uD3B4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.",-1),x=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),R=p(`<h1 id="react-native\u110B\u1166\u1109\u1165-lazy-loading\u1100\u116A-\u110F\u1169\u1103\u1173-\u1107\u116E\u11AB\u1112\u1161\u11AF-\u1100\u116E\u1112\u1167\u11AB\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#react-native\u110B\u1166\u1109\u1165-lazy-loading\u1100\u116A-\u110F\u1169\u1103\u1173-\u1107\u116E\u11AB\u1112\u1161\u11AF-\u1100\u116E\u1112\u1167\u11AB\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> React Native\uC5D0\uC11C Lazy Loading\uACFC \uCF54\uB4DC \uBD84\uD560 \uAD6C\uD604\uD558\uAE30</h1><h2 id="\u1103\u1161\u11AB\u1100\u1168-1-react-native-\u1111\u1173\u1105\u1169\u110C\u1166\u11A8\u1110\u1173-\u1109\u1165\u11AF\u110C\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u1100\u1168-1-react-native-\u1111\u1173\u1105\u1169\u110C\u1166\u11A8\u1110\u1173-\u1109\u1165\u11AF\u110C\u1165\u11BC" aria-hidden="true">#</a> \uB2E8\uACC4 1: React Native \uD504\uB85C\uC81D\uD2B8 \uC124\uC815</h2><p>\uC544\uC9C1\uC774\uB77C\uBA74 Expo \uB610\uB294 React Native CLI\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC0C8\uB85C\uC6B4 React Native \uD504\uB85C\uC81D\uD2B8\uB97C \uC124\uC815\uD558\uC138\uC694. \uC774 \uC608\uC2DC\uC5D0\uC11C\uB294 React Native CLI\uB97C \uC0AC\uC6A9\uD55C\uB2E4\uACE0 \uAC00\uC815\uD558\uACA0\uC2B5\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npx react<span class="token operator">-</span>native init CodeSplittingExample
cd CodeSplittingExample
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),S=p(`<h2 id="\u1103\u1161\u11AB\u1100\u1168-2-react-navigation-\u1109\u1165\u11AF\u110E\u1175" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u1100\u1168-2-react-navigation-\u1109\u1165\u11AF\u110E\u1175" aria-hidden="true">#</a> \uB2E8\uACC4 2: React Navigation \uC124\uCE58</h2><p>\uC800\uD76C\uB294 \uB124\uBE44\uAC8C\uC774\uC158 \uBC0F \uC9C0\uC5F0 \uB85C\uB529\uC744 \uC704\uD574 React Navigation\uC744 \uC0AC\uC6A9\uD560 \uAC70\uC5D0\uC694. \uB2E4\uC74C\uC744 \uC2E4\uD589\uD558\uC5EC \uC124\uCE58\uD574\uBCF4\uC138\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm install react<span class="token operator">-</span>navigation react<span class="token operator">-</span>navigation<span class="token operator">-</span>stack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u1103\u1161\u11AB\u1100\u1168-3-\u1112\u116A\u1106\u1167\u11AB-\u1109\u1162\u11BC\u1109\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u1100\u1168-3-\u1112\u116A\u1106\u1167\u11AB-\u1109\u1162\u11BC\u1109\u1165\u11BC" aria-hidden="true">#</a> \uB2E8\uACC4 3: \uD654\uBA74 \uC0DD\uC131</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),N=p(`<p>\uC774 \uC608\uC81C\uC5D0\uC11C\uB294 \uD648 \uD654\uBA74\uACFC \uD504\uB85C\uD544 \uD654\uBA74 \uB450 \uAC1C\uB97C \uB9CC\uB4E4\uACA0\uC2B5\uB2C8\uB2E4. \uD504\uB85C\uD544 \uD654\uBA74\uC740 \uC0AC\uC6A9\uC790\uAC00 \uC774\uB3D9\uD560 \uB54C\uB9CC \uB290\uB9B0\uB85C\uB529\uC744 \uC0AC\uC6A9\uD558\uC5EC \uB85C\uB4DC\uD560 \uAC83\uC785\uB2C8\uB2E4.</p><p>\uB450 \uAC1C\uC758 \uD30C\uC77C\uC744 \uB9CC\uB4E4\uC5B4\uC8FC\uC138\uC694: HomeScreen.js\uC640 ProfileScreen.js.</p><h2 id="homescreen-js" tabindex="-1"><a class="header-anchor" href="#homescreen-js" aria-hidden="true">#</a> HomeScreen.js:</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> View<span class="token punctuation">,</span> Text<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-native&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">HomeScreen</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> navigation <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>View<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Text<span class="token operator">&gt;</span>Home Screen<span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Button title<span class="token operator">=</span><span class="token string">&quot;\uD504\uB85C\uD544\uB85C \uC774\uB3D9&quot;</span> onPress<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> navigation<span class="token punctuation">.</span><span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">&quot;Profile&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> HomeScreen<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),j=p(`<h2 id="profilescreen-js" tabindex="-1"><a class="header-anchor" href="#profilescreen-js" aria-hidden="true">#</a> ProfileScreen.js:</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> View<span class="token punctuation">,</span> Text <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-native&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">ProfileScreen</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>View<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Text<span class="token operator">&gt;</span>\uD504\uB85C\uD544 \uD654\uBA74<span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> ProfileScreen<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1103\u1161\u11AB\u1100\u1168-4-\u110C\u1175\u110B\u1167\u11AB-\u1105\u1169\u1103\u1175\u11BC\u1100\u116A-\u1112\u1161\u11B7\u1101\u1166-\u1102\u1166\u1107\u1175\u1100\u1166\u110B\u1175\u1109\u1167\u11AB-\u1109\u1165\u11AF\u110C\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u1100\u1168-4-\u110C\u1175\u110B\u1167\u11AB-\u1105\u1169\u1103\u1175\u11BC\u1100\u116A-\u1112\u1161\u11B7\u1101\u1166-\u1102\u1166\u1107\u1175\u1100\u1166\u110B\u1175\u1109\u1167\u11AB-\u1109\u1165\u11AF\u110C\u1165\u11BC" aria-hidden="true">#</a> \uB2E8\uACC4 4: \uC9C0\uC5F0 \uB85C\uB529\uACFC \uD568\uAED8 \uB124\uBE44\uAC8C\uC774\uC158 \uC124\uC815</h2><p>App.js(\uB610\uB294 \uB124\uBE44\uAC8C\uC774\uC158\uC744 \uAD6C\uC131\uD558\uB294 \uACF3)\uC5D0\uC11C React.lazy()\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC9C0\uC5F0 \uB85C\uB529\uC73C\uB85C \uB124\uBE44\uAC8C\uC774\uC158\uC744 \uC124\uC815\uD558\uC138\uC694.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),q=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createAppContainer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-navigation&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createStackNavigator <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-navigation-stack&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \uC2A4\uD06C\uB9B0\uB4E4\uC744 lazy\uB85C \uB85C\uB529\uD569\uB2C8\uB2E4.</span>
<span class="token keyword">const</span> HomeScreen <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;./HomeScreen&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> ProfileScreen <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;./ProfileScreen&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> AppNavigator <span class="token operator">=</span> <span class="token function">createStackNavigator</span><span class="token punctuation">(</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">Home</span><span class="token operator">:</span> HomeScreen<span class="token punctuation">,</span>
    <span class="token literal-property property">Profile</span><span class="token operator">:</span> ProfileScreen<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">initialRouteName</span><span class="token operator">:</span> <span class="token string">&quot;Home&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> AppContainer <span class="token operator">=</span> <span class="token function">createAppContainer</span><span class="token punctuation">(</span>AppNavigator<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>React<span class="token punctuation">.</span>Suspense fallback<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Text<span class="token operator">&gt;</span>Loading<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">&gt;</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>AppContainer <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>React<span class="token punctuation">.</span>Suspense<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC704 \uCF54\uB4DC\uC5D0\uC11C\uB294 \uB124\uBE44\uAC8C\uC774\uC158 \uC911\uC5D0 HomeScreen\uACFC ProfileScreen \uCEF4\uD3EC\uB10C\uD2B8\uB97C lazy\uD558\uAC8C \uB85C\uB4DC\uD558\uB294 React.lazy()\uB97C \uC0AC\uC6A9\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. React.Suspense\uB85C AppContainer\uB97C \uAC10\uC2F8\uC11C \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uB85C\uB529\uB418\uB294 \uB3D9\uC548 \uB85C\uB529 \uBA54\uC2DC\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.</p><p>\uB2E8\uACC4 5: \uC571 \uC2E4\uD589</p><p>React Native \uC571\uC744 \uC2E4\uD589\uD558\uC138\uC694.\`\`\`</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),z=p('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>react<span class="token operator">-</span>native run<span class="token operator">-</span>android \uB610\uB294 yarn android\n# \uB610\uB294\nnpx react<span class="token operator">-</span>native run<span class="token operator">-</span>ios \uB610\uB294 yarn ios\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774\uC81C \uC571\uC744 \uC2DC\uC791\uD558\uBA74 \uD648 \uD654\uBA74\uC774 \uC989\uC2DC \uB85C\uB4DC\uB418\uB294 \uAC83\uC744 \uC54C \uC218 \uC788\uC744 \uAC83\uC785\uB2C8\uB2E4. \uD504\uB85C\uD544 \uD654\uBA74\uC740 \uD544\uC694\uD560 \uB54C\uB9CC \uB85C\uB4DC\uB418\uBBC0\uB85C Lazy Loading \uBC0F \uCF54\uB4DC \uBD84\uD560\uC774 \uC2E4\uC81C\uB85C \uC791\uB3D9\uD558\uB294 \uAC83\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h1 id="lazy-loading-\u1106\u1175\u11BE-\u110F\u1169\u1103\u1173-\u1107\u116E\u11AB\u1112\u1161\u11AF\u110B\u1174-\u110C\u1161\u11BC\u110C\u1165\u11B7" tabindex="-1"><a class="header-anchor" href="#lazy-loading-\u1106\u1175\u11BE-\u110F\u1169\u1103\u1173-\u1107\u116E\u11AB\u1112\u1161\u11AF\u110B\u1174-\u110C\u1161\u11BC\u110C\u1165\u11B7" aria-hidden="true">#</a> Lazy Loading \uBC0F \uCF54\uB4DC \uBD84\uD560\uC758 \uC7A5\uC810</h1><p>React Native \uC571\uC5D0 Lazy Loading \uBC0F \uCF54\uB4DC \uBD84\uD560\uC744 \uAD6C\uD604\uD558\uB294 \uAC83\uC740 \uC5EC\uB7EC \uC774\uC810\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4:```</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),L=p('<ul><li>\uBE60\uB978 \uCD08\uAE30 \uB85C\uB4DC \uC2DC\uAC04: \uD544\uC218 \uAD6C\uC131 \uC694\uC18C\uB9CC\uB85C\uB4DC\uD558\uACE0 \uCF54\uB4DC\uB97C \uBD84\uD560\uD558\uC5EC \uC751\uC6A9 \uD504\uB85C\uADF8\uB7A8\uC774 \uB354 \uBE68\uB9AC \uC2DC\uC791\uB418\uC5B4 \uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC774 \uD5A5\uC0C1\uB429\uB2C8\uB2E4.</li><li>\uD5A5\uC0C1\uB41C \uC131\uB2A5: \uCD08\uAE30 \uBC88\uB4E4 \uD06C\uAE30\uB97C \uC904\uC774\uBA74 \uD2B9\uD788 \uB290\uB9B0 \uB124\uD2B8\uC6CC\uD06C\uB098 \uC624\uB798\uB41C \uC7A5\uCE58\uC5D0\uC11C \uC131\uB2A5\uC774 \uAC1C\uC120\uB429\uB2C8\uB2E4.</li><li>\uD6A8\uC728\uC801\uC778 \uB9AC\uC18C\uC2A4 \uD65C\uC6A9: \uD544\uC694\uD560 \uB54C\uB9CC \uB9AC\uC18C\uC2A4\uB97C\uB85C\uB4DC\uD558\uB3C4\uB85D \uAC8C\uC73C\uB974\uAC8C\uB85C\uB4DC\uB85C \uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uB7C9\uC744 \uCD5C\uC801\uD654\uD569\uB2C8\uB2E4.</li><li>\uB2E8\uC21C\uD654\uB41C \uC720\uC9C0 \uAD00\uB9AC: \uCF54\uB4DC \uBD84\uD560\uB85C \uB354 \uC791\uACE0 \uAD00\uB9AC\uD558\uAE30 \uC26C\uC6B4 \uCF54\uB4DC \uCCAD\uD06C\uAC00 \uC0DD\uC131\uB418\uC5B4 \uCF54\uB4DC\uBCA0\uC774\uC2A4\uB97C \uC720\uC9C0 \uAD00\uB9AC\uD558\uAE30 \uC27D\uC2B5\uB2C8\uB2E4.</li></ul><h1 id="\u1100\u1166\u110B\u1173\u1105\u1173\u11B7\u110B\u1173\u11AF-\u1107\u116E\u1105\u1173\u1100\u1169-\u110F\u1169\u1103\u1173-\u1107\u116E\u11AB\u1112\u1161\u11AF\u110B\u1174-\u110C\u1161\u11BC\u110C\u1165\u11B7" tabindex="-1"><a class="header-anchor" href="#\u1100\u1166\u110B\u1173\u1105\u1173\u11B7\u110B\u1173\u11AF-\u1107\u116E\u1105\u1173\u1100\u1169-\u110F\u1169\u1103\u1173-\u1107\u116E\u11AB\u1112\u1161\u11AF\u110B\u1174-\u110C\u1161\u11BC\u110C\u1165\u11B7" aria-hidden="true">#</a> \uAC8C\uC73C\uB984\uC744 \uBD80\uB974\uACE0 \uCF54\uB4DC \uBD84\uD560\uC758 \uC7A5\uC810</h1><p>React Native \uC571\uC5D0 \uAC8C\uC73C\uB984\uC744 \uBD80\uB974\uACE0 \uCF54\uB4DC\uB97C \uBD84\uD560\uD558\uB294 \uAC83\uC740 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC5EC\uB7EC \uC774\uC810\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4:</p><ul><li>\uBE60\uB978 \uCD08\uAE30 \uB85C\uB4DC \uC2DC\uAC04: \uD544\uC218 \uAD6C\uC131 \uC694\uC18C\uB9CC\uB85C\uB4DC\uD558\uACE0 \uCF54\uB4DC\uB97C \uBD84\uD560\uD558\uC5EC \uC751\uC6A9 \uD504\uB85C\uADF8\uB7A8\uC774 \uB354 \uBE68\uB9AC \uC2DC\uC791\uB418\uC5B4 \uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC774 \uD5A5\uC0C1\uB429\uB2C8\uB2E4.</li><li>\uD5A5\uC0C1\uB41C \uC131\uB2A5: \uCD08\uAE30 \uBC88\uB4E4 \uD06C\uAE30\uB97C \uC904\uC774\uBA74 \uD2B9\uD788 \uB290\uB9B0 \uB124\uD2B8\uC6CC\uD06C\uB098 \uC624\uB798\uB41C \uC7A5\uCE58\uC5D0\uC11C \uC131\uB2A5\uC774 \uAC1C\uC120\uB429\uB2C8\uB2E4.</li><li>\uD6A8\uC728\uC801\uC778 \uB9AC\uC18C\uC2A4 \uD65C\uC6A9: \uD544\uC694\uD560 \uB54C\uB9CC \uB9AC\uC18C\uC2A4\uB97C\uB85C\uB4DC\uD558\uB3C4\uB85D \uAC8C\uC73C\uB974\uAC8C\uB85C\uB4DC\uB85C \uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uB7C9\uC744 \uCD5C\uC801\uD654\uD569\uB2C8\uB2E4.</li><li>\uB2E8\uC21C\uD654\uB41C \uC720\uC9C0 \uAD00\uB9AC: \uCF54\uB4DC \uBD84\uD560\uB85C \uB354 \uC791\uACE0 \uAD00\uB9AC\uD558\uAE30 \uC26C\uC6B4 \uCF54\uB4DC \uCCAD\uD06C\uAC00 \uC0DD\uC131\uB418\uC5B4 \uCF54\uB4DC\uBCA0\uC774\uC2A4\uB97C \uC720\uC9C0 \uAD00\uB9AC\uD558\uAE30 \uC27D\uC2B5\uB2C8\uB2E4.</li></ul><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),C=a("h1",{id:"\u1100\u1167\u11AF\u1105\u1169\u11AB",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u1100\u1167\u11AF\u1105\u1169\u11AB","aria-hidden":"true"},"#"),n(" \uACB0\uB860")],-1),P=a("p",null,"\uB808\uC774\uC9C0 \uB85C\uB529\uACFC \uCF54\uB4DC \uBD84\uD560\uC740 React Native \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uC131\uB2A5\uC744 \uD5A5\uC0C1\uC2DC\uD0A4\uB294 \uB370 \uD544\uC218\uC801\uC778 \uAE30\uC220\uC785\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uC804\uB7B5\uC744 \uD65C\uC6A9\uD558\uC5EC \uCD08\uAE30\uB85C\uB4DC \uC2DC\uAC04\uC744 \uD06C\uAC8C \uAC1C\uC120\uD558\uACE0 \uB9AC\uC18C\uC2A4 \uC18C\uBE44\uB97C \uC904\uC774\uBA70 \uB354 \uBD80\uB4DC\uB7EC\uC6B4 \uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC744 \uC81C\uACF5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. React Native \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uC774\uB7EC\uD55C \uAE30\uC220\uC744 \uCC44\uD0DD\uD558\uACE0 \uC571 \uC131\uB2A5\uC774 \uC0C8\uB85C\uC6B4 \uCC28\uC6D0\uC73C\uB85C \uB354 \uBE68\uB77C\uC9C0\uB294 \uAC83\uC744 \uC9C0\uCF1C\uBCF4\uC138\uC694!",-1);function H(A,B){return s(),l("div",null,[k,(s(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),v,g,m,b,h,(s(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),y,f,w,_,x,(s(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),R,(s(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),S,(s(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),N,(s(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),j,(s(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),q,(s(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),z,(s(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),L,(s(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),C,P])}var G=i(u,[["render",H],["__file","index.html.vue"]]);export{G as default};
