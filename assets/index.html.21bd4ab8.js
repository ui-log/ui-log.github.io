import{_ as c}from"./app.3052dcfb.js";import{l as a,m as l,E as t,G as e,p as n,Y as o,C as s,K as p}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var i="/assets/ReactmemoOptimizeReactFunctionalComponents_0.a0a30b41.png";const u={},r=s("p",null,[s("img",{src:i,alt:"ReactmemoOptimizeReactFunctionalComponents_0"})],-1),d=s("p",null,"\uB9AC\uC561\uD2B8\uC5D0\uC11C \uD568\uC218\uD615 \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC131\uB2A5\uC744 \uCD5C\uC801\uD654\uD558\uB294 \uAC83\uC740 \uBD80\uB4DC\uB7FD\uACE0 \uD6A8\uC728\uC801\uC778 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uBCF4\uC7A5\uD558\uAE30 \uC704\uD574 \uC911\uC694\uD569\uB2C8\uB2E4. \uC774\uB97C \uB2EC\uC131\uD558\uB294 \uD55C \uAC00\uC9C0 \uBC29\uBC95\uC740 React.memo \uD568\uC218\uB97C \uC0AC\uC6A9\uD558\uB294 \uAC83\uC778\uB370, \uC774 \uD568\uC218\uB294 \uC774\uB7EC\uD55C \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB80C\uB354\uB9C1 \uD504\uB85C\uC138\uC2A4\uB97C \uCD5C\uC801\uD654\uD558\uB294 \uB370 \uB3C4\uC6C0\uC774 \uB418\uB294 \uACE0\uCC28 \uCEF4\uD3EC\uB10C\uD2B8\uC785\uB2C8\uB2E4. \uC774 \uAE00\uC5D0\uC11C\uB294 React.memo\uC758 \uAC1C\uB150\uC744 \uC0B4\uD3B4\uBCF4\uACE0 \uC774\uB97C \uD1B5\uD574 \uB9AC\uC561\uD2B8 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uC131\uB2A5\uC744 \uD5A5\uC0C1\uC2DC\uD0AC \uC218 \uC788\uB294 \uBC29\uBC95\uC744 \uC54C\uC544\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.",-1),k=s("h2",{id:"\u1109\u1165\u11AF\u1106\u1167\u11BC",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u1109\u1165\u11AF\u1106\u1167\u11BC","aria-hidden":"true"},"#"),n(" \uC124\uBA85:")],-1),m=s("p",null,"React.memo\uB294 \uD568\uC218\uD615 \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB80C\uB354\uB9C1 \uACB0\uACFC\uB97C \uBA54\uBAA8\uC774\uC81C\uC774\uC158\uD558\uB294 \uB370 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uD568\uC218\uC785\uB2C8\uB2E4. \uC774 \uD568\uC218\uB294 \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB80C\uB354\uB9C1 \uCD9C\uB825\uC744 \uCE90\uC2F1\uD558\uACE0 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0 \uC804\uB2EC\uB41C \uC785\uB825(\uD504\uB86D\uC2A4)\uC774 \uBCC0\uACBD\uB420 \uB54C\uB9CC \uB2E4\uC2DC \uB80C\uB354\uB9C1\uD569\uB2C8\uB2E4. \uC774\uB294 \uBCF5\uC7A1\uD55C \uCEF4\uD3EC\uB10C\uD2B8\uB098 \uD070 \uB370\uC774\uD130 \uC138\uD2B8\uB97C \uCC98\uB9AC\uD560 \uB54C \uBD88\uD544\uC694\uD55C \uB2E4\uC2DC \uB80C\uB354\uB9C1\uC758 \uC218\uB97C \uD06C\uAC8C \uC904\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),v=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),b=p(`<h2 id="\u110B\u1168\u1109\u1175" tabindex="-1"><a class="header-anchor" href="#\u110B\u1168\u1109\u1175" aria-hidden="true">#</a> \uC608\uC2DC:</h2><p>\uAC04\uB2E8\uD55C \uC608\uC2DC\uB97C \uC0B4\uD3B4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. &quot;UserList&quot;\uB77C\uB294 \uAE30\uB2A5 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uC0AC\uC6A9\uC790 \uBAA9\uB85D\uC744 \uB80C\uB354\uB9C1\uD569\uB2C8\uB2E4. \uC0AC\uC6A9\uC790 \uBAA9\uB85D\uC740 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0 \uC18D\uC131(prop)\uC73C\uB85C \uC804\uB2EC\uB429\uB2C8\uB2E4. React.memo\uB97C \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uC73C\uBA74 \uBD80\uBAA8 \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBCC0\uACBD\uC774 \uBC1C\uC0DD\uD558\uBA74 &quot;UserList&quot; \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uC644\uC804\uD788 \uB2E4\uC2DC \uB80C\uB354\uB9C1\uB429\uB2C8\uB2E4. \uC2EC\uC9C0\uC5B4 \uC0AC\uC6A9\uC790 \uBAA9\uB85D\uC774 \uB3D9\uC77C\uD55C \uACBD\uC6B0\uC5D0\uB3C4\uC694.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">UserList</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> users <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">-</span> item1
    <span class="token operator">-</span> item2
    <span class="token operator">-</span> item3
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> UserList<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>&quot;UserList&quot; \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB80C\uB354\uB9C1\uC744 \uCD5C\uC801\uD654\uD558\uAE30 \uC704\uD574 React.memo\uB85C \uB798\uD551\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),h=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> UserList <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">memo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> users <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>
      <span class="token punctuation">{</span>users<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> UserList<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774\uC81C, \uBD80\uBAA8 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uB2E4\uC2DC \uB80C\uB354\uB9C1\uB418\uB354\uB77C\uB3C4 \uC0AC\uC6A9\uC790 \uBAA9\uB85D\uC774 \uB3D9\uC77C\uD558\uBA74 React.memo\uAC00 &quot;UserList&quot; \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC7AC\uB80C\uB354\uB9C1\uC744 \uBC29\uC9C0\uD560 \uAC83\uC785\uB2C8\uB2E4. \uC0AC\uC6A9\uC790 prop\uC774 \uBCC0\uACBD\uB420 \uB54C\uB9CC \uB2E4\uC2DC \uB80C\uB354\uB9C1\uB429\uB2C8\uB2E4.</p><h2 id="\u1100\u1167\u11AF\u1105\u1169\u11AB" tabindex="-1"><a class="header-anchor" href="#\u1100\u1167\u11AF\u1105\u1169\u11AB" aria-hidden="true">#</a> \uACB0\uB860:</h2><p>React.memo\uB294 React\uC758 \uD568\uC218\uD615 \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC131\uB2A5\uC744 \uCD5C\uC801\uD654\uD558\uAE30 \uC704\uD55C \uAC15\uB825\uD55C \uB3C4\uAD6C\uC785\uB2C8\uB2E4. \uB80C\uB354\uB9C1 \uACB0\uACFC\uB97C \uBA54\uBAA8\uC774\uC81C\uC774\uC158\uD568\uC73C\uB85C\uC368 \uBD88\uD544\uC694\uD55C \uC7AC\uB80C\uB354\uB9C1\uC744 \uC904\uC774\uACE0 \uC751\uC6A9 \uD504\uB85C\uADF8\uB7A8\uC758 \uC804\uBC18\uC801\uC778 \uD6A8\uC728\uC131\uC744 \uD5A5\uC0C1\uC2DC\uD0B5\uB2C8\uB2E4. \uD2B9\uD788 \uB80C\uB354\uB9C1 \uD504\uB85C\uC138\uC2A4\uAC00 \uBE44\uC6A9\uC774 \uB9CE\uC774 \uB4DC\uB294 \uCEF4\uD3EC\uB10C\uD2B8\uB098 props\uB85C \uB300\uB7C9\uC758 \uB370\uC774\uD130\uAC00 \uC804\uB2EC\uB418\uB294 \uCEF4\uD3EC\uB10C\uD2B8\uC640 \uAD00\uB828\uB41C \uACBD\uC6B0, React.memo\uB97C \uBD84\uBCC4\uD558\uC5EC \uC0AC\uC6A9\uD558\uB294 \uAC83\uC744 \uAE30\uC5B5\uD574 \uC8FC\uC138\uC694.\`\`\`</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),_=s("p",null,"\uACE0\uB9D9\uC2B5\uB2C8\uB2E4! \uB05D\uAE4C\uC9C0 \uC624\uC2E0 \uAC83\uC744 \uBC18\uAC00\uC6CC\uC694.",-1),g=s("p",null,"\uC800\uC640 \uC18C\uD1B5\uD574\uC694. \uC544\uB798 \uB9C1\uD06C\uB97C \uD074\uB9AD\uD558\uC2DC\uBA74 \uB354 \uB9CE\uC774 \uC54C \uC218 \uC788\uC5B4\uC694.",-1),y=s("p",null,"\uB2E4\uC74C \uBE14\uB85C\uADF8\uB97C \uBC1C\uD589\uD560 \uB54C \uC54C\uB9BC\uC744 \uBC1B\uC73C\uB824\uBA74 \uAD6C\uB3C5\uD574\uC8FC\uC138\uC694. \uB2E4\uC74C\uC5D0 \uB9CC\uB098\uC694.",-1);function f(w,R){return a(),l("div",null,[r,d,k,m,v,(a(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b,(a(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),h,(a(),t(o("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),_,g,y])}var B=c(u,[["render",f],["__file","index.html.vue"]]);export{B as default};