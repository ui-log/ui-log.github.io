import{_ as l}from"./app.3052dcfb.js";import{l as s,m as c,E as e,G as t,p as a,Y as o,C as n,K as p}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var i="/assets/UnderstandinguseImperativeHandleAPowerfulHookforReactDevelopment_0.08ba3c33.png";const u={},d=n("p",null,"React\uC5D0\uC11C useImperativeHandle \uD6C5\uC744 \uC0AC\uC6A9\uD558\uBA74 \uC790\uC2DD \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uBD80\uBAA8 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uAC8C \uD2B9\uC815 \uD568\uC218 \uB610\uB294 \uC18D\uC131\uC744 \uB178\uCD9C\uD558\uC5EC \uBD80\uBAA8 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uC790\uC2DD \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uB354 \uB9CE\uC774 \uC81C\uC5B4\uD560 \uC218 \uC788\uAC8C \uD574\uC90D\uB2C8\uB2E4. \uC774 \uAE30\uB2A5\uC740 React 16.3\uC5D0\uC11C \uC18C\uAC1C\uB418\uC5C8\uC73C\uBA70 \uBD80\uBAA8 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uC790\uC2DD \uCEF4\uD3EC\uB10C\uD2B8\uC640 \uC0C1\uD638 \uC791\uC6A9\uD558\uB294 \uB354 \uBA85\uC2DC\uC801\uC778 \uBC29\uBC95\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC77C\uBC18\uC801\uC73C\uB85C \uBD80\uBAA8 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uC790\uC2DD \uCEF4\uD3EC\uB10C\uD2B8\uC640 \uC9C1\uC811 \uC0C1\uD638 \uC791\uC6A9\uD574\uC57C \uD558\uB294 \uACBD\uC6B0\uC5D0 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. useRef\uC640 \uBE44\uAD50\uD588\uC744 \uB54C useImperativeHandle\uC740 \uC790\uC2DD \uCEF4\uD3EC\uB10C\uD2B8\uC640 \uB354 \uC9C1\uC811\uC801\uC73C\uB85C \uC0C1\uD638 \uC791\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uADF8\uB7EC\uB098 \uCF54\uB4DC\uC5D0 \uBCF5\uC7A1\uC131\uC744 \uB354\uD560 \uC218 \uC788\uACE0 \uC62C\uBC14\uB974\uAC8C \uC0AC\uC6A9\uB418\uC9C0 \uC54A\uC73C\uBA74 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),r=n("p",null,[n("img",{src:i,alt:"UnderstandinguseImperativeHandleAPowerfulHookforReactDevelopment_0.png"})],-1),k=n("p",null,"useImperativeHandle \uD6C5\uC740 React 16.3\uC5D0\uC11C \uC18C\uAC1C\uB41C \uAE30\uB2A5\uC73C\uB85C \uC790\uC2DD \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C \uBD80\uBAA8 \uCEF4\uD3EC\uB10C\uD2B8\uB85C \uB354 \uBA85\uC2DC\uC801\uC73C\uB85C \uD1B5\uC2E0\uD558\uB294 \uC218\uB2E8\uC73C\uB85C \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uC774 \uD6C5\uC740 \uC790\uC2DD \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uBD80\uBAA8 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uAC8C \uD2B9\uC815 \uD568\uC218 \uB610\uB294 \uC18D\uC131\uC744 \uB178\uCD9C\uD558\uC5EC \uBD80\uBAA8 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uC790\uC2DD \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uB354 \uB9CE\uC774 \uC81C\uC5B4\uD560 \uC218 \uC788\uAC8C \uD569\uB2C8\uB2E4.",-1),v=n("p",null,"\uAC04\uB2E8\uD788 \uB9D0\uD574, useImperativeHandle \uD6C5\uC740 \uC790\uC2DD\uACFC \uBD80\uBAA8 \uCEF4\uD3EC\uB10C\uD2B8 \uAC04\uC758 \uC0AC\uC6A9\uC790 \uC815\uC758 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uB9CC\uB4DC\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uC77C\uBC18\uC801\uC73C\uB85C \uBD80\uBAA8 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uC790\uC2DD \uCEF4\uD3EC\uB10C\uD2B8\uC640 \uC9C1\uC811 \uC0C1\uD638 \uC791\uC6A9\uD574\uC57C \uD558\uB294 \uACBD\uC6B0, \uC608\uB97C \uB4E4\uC5B4 \uC591\uC2DD \uC720\uD6A8\uC131 \uAC80\uC0AC\uB098 \uC0AC\uC6A9\uC790 \uC785\uB825 \uCC98\uB9AC\uC640 \uAC19\uC740 \uC0C1\uD669\uC5D0\uC11C \uC8FC\uB85C \uC0AC\uC6A9\uB429\uB2C8\uB2E4.",-1),m=n("p",null,[n("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),h=n("h2",{id:"\u110C\u1161\u11A8\u1103\u1169\u11BC-\u1107\u1161\u11BC\u1109\u1175\u11A8",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u110C\u1161\u11A8\u1103\u1169\u11BC-\u1107\u1161\u11BC\u1109\u1175\u11A8","aria-hidden":"true"},"#"),a(" \uC791\uB3D9 \uBC29\uC2DD")],-1),b=n("p",null,"useImperativeHandle\uC774 \uC791\uB3D9\uD558\uB294 \uBC29\uC2DD\uC744 \uC774\uD574\uD558\uB824\uBA74 \uBA3C\uC800 React\uC5D0\uC11C refs\uAC00 \uC5B4\uB5BB\uAC8C \uC791\uB3D9\uD558\uB294\uC9C0 \uC774\uD574\uD558\uB294 \uAC83\uC774 \uC911\uC694\uD569\uB2C8\uB2E4. refs\uB294 \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC778\uC2A4\uD134\uC2A4 \uB610\uB294 HTML \uC694\uC18C\uB97C \uC9C1\uC811 \uCC38\uC870\uD558\uB294 \uBC29\uBC95\uC785\uB2C8\uB2E4. DOM\uACFC \uC0C1\uD638 \uC791\uC6A9\uD558\uAC70\uB098 \uC790\uC2DD \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C1\uD0DC\uC5D0 \uC561\uC138\uC2A4\uD558\uB294 \uB370 \uC77C\uBC18\uC801\uC73C\uB85C \uC0AC\uC6A9\uB429\uB2C8\uB2E4.",-1),f=n("p",null,"\uADF8\uB7EC\uB098 useRef \uD6C5\uC740 \uBD80\uBAA8 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C \uC561\uC138\uC2A4\uD560 \uC218 \uC788\uB294 ref\uB97C \uC0DD\uC131\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uADF8\uB7EC\uB098 ref\uB294 \uC790\uC2DD \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD604\uC7AC \uC0C1\uD0DC\uC5D0\uB9CC \uC561\uC138\uC2A4\uD560 \uBFD0, \uC790\uC2DD \uCEF4\uD3EC\uB10C\uD2B8\uC640 \uC9C1\uC811 \uC0C1\uD638 \uC791\uC6A9\uD560 \uC218\uB294 \uC5C6\uC2B5\uB2C8\uB2E4.",-1),_=n("p",null,"\uC774\uAC83\uC774 useImperativeHandle\uC774 \uD544\uC694\uD55C \uC774\uC720\uC785\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574 \uC790\uC2DD \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uBD80\uBAA8 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0 \uD2B9\uC815 \uD568\uC218 \uB610\uB294 \uC18D\uC131\uC744 \uB178\uCD9C\uC2DC\uD0AC \uC218 \uC788\uC5B4 ref\uB97C \uD1B5\uD574 \uC561\uC138\uC2A4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574 \uBD80\uBAA8 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uC790\uC2DD \uCEF4\uD3EC\uB10C\uD2B8\uC640 \uC0C1\uD638 \uC791\uC6A9\uD558\uB294 \uB354 \uBA85\uC2DC\uC801\uC778 \uBC29\uBC95\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.",-1),g=n("p",null,[n("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),y=p(`<p>\uC5EC\uAE30 useImperativeHandle\uC758 \uC791\uB3D9 \uC608\uC2DC\uAC00 \uC788\uC5B4\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \uC790\uC2DD \uCEF4\uD3EC\uB10C\uD2B8</span>
<span class="token keyword">const</span> ChildComponent <span class="token operator">=</span> <span class="token function">forwardRef</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> ref</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useImperativeHandle</span><span class="token punctuation">(</span>ref<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> count<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \uBD80\uBAA8 \uCEF4\uD3EC\uB10C\uD2B8</span>
<span class="token keyword">const</span> <span class="token function-variable function">ParentComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> childRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    childRef<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>ChildComponent ref<span class="token operator">=</span><span class="token punctuation">{</span>childRef<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span><span class="token operator">&gt;</span>\uC99D\uAC00<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774 \uC608\uC2DC\uC5D0\uC11C, \uC790\uC2DD \uCEF4\uD3EC\uB10C\uD2B8\uB294 useImperativeHandle\uC744 \uD1B5\uD574 \uBD80\uBAA8 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0 increment\uC640 getCount \uB450 \uD568\uC218\uB97C \uB178\uCD9C\uD569\uB2C8\uB2E4. \uBD80\uBAA8 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C\uB294 childRef ref\uB97C \uD1B5\uD574 \uC774\uB7EC\uD55C \uD568\uC218\uC5D0 \uC561\uC138\uC2A4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uADF8\uB9AC\uACE0 \uBD80\uBAA8 \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uBC84\uD2BC\uC744 \uD074\uB9AD\uD560 \uB54C increment \uD568\uC218\uB97C \uD638\uCD9C\uD558\uC5EC \uC790\uC2DD \uCEF4\uD3EC\uB10C\uD2B8\uC758 count \uC0C1\uD0DC\uB97C \uC5C5\uB370\uC774\uD2B8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="useimperativehandle\u110B\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1102\u1173\u11AB-\u1109\u1175\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#useimperativehandle\u110B\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1102\u1173\u11AB-\u1109\u1175\u1100\u1175" aria-hidden="true">#</a> useImperativeHandle\uC744 \uC0AC\uC6A9\uD558\uB294 \uC2DC\uAE30</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),H=p('<p><code>useImperativeHandle</code>\uC740 \uC77C\uBC18\uC801\uC73C\uB85C \uBD80\uBAA8 \uAD6C\uC131 \uC694\uC18C\uAC00 \uC790\uC2DD \uAD6C\uC131 \uC694\uC18C\uC640 \uC9C1\uC811 \uC0C1\uD638 \uC791\uC6A9\uD574\uC57C \uD558\uB294 \uACBD\uC6B0\uC5D0 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. <code>useImperativeHandle</code>\uC758 \uC77C\uBC18\uC801\uC778 \uC0AC\uC6A9 \uC0AC\uB840\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4:</p><ul><li>\uC591\uC2DD \uC720\uD6A8\uC131 \uAC80\uC0AC: \uC790\uC2DD \uAD6C\uC131 \uC694\uC18C\uAC00 \uC591\uC2DD \uB370\uC774\uD130\uB97C \uC720\uD6A8\uC131 \uAC80\uC0AC\uD558\uB294 \uD568\uC218\uB97C \uBD80\uBAA8 \uAD6C\uC131 \uC694\uC18C\uC5D0 \uB178\uCD9C\uD560 \uC218 \uC788\uC73C\uBA70, \uC774\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC624\uB958 \uBA54\uC2DC\uC9C0\uB97C \uD45C\uC2DC\uD558\uAC70\uB098 \uC591\uC2DD \uC81C\uCD9C\uC744 \uBC29\uC9C0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</li><li>\uC0AC\uC6A9\uC790 \uC785\uB825 \uCC98\uB9AC: \uC790\uC2DD \uAD6C\uC131 \uC694\uC18C\uAC00 \uC0AC\uC6A9\uC790 \uC785\uB825\uC744 \uCC98\uB9AC\uD558\uB294 \uD568\uC218\uB97C \uBD80\uBAA8 \uAD6C\uC131 \uC694\uC18C\uC5D0 \uB178\uCD9C\uD560 \uC218 \uC788\uC73C\uBA70, \uC774\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC751\uC6A9 \uD504\uB85C\uADF8\uB7A8 \uC0C1\uD0DC\uC758 \uB2E4\uB978 \uBD80\uBD84\uC744 \uC5C5\uB370\uC774\uD2B8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</li><li>\uC790\uC2DD \uC0C1\uD0DC \uC811\uADFC: <code>useImperativeHandle</code>\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC790\uC2DD \uAD6C\uC131 \uC694\uC18C\uC758 \uD2B9\uC815 \uC0C1\uD0DC \uAC12\uC744 \uBD80\uBAA8 \uAD6C\uC131 \uC694\uC18C\uC5D0 \uB178\uCD9C\uD560 \uC218 \uC788\uC73C\uBA70, \uBD80\uBAA8 \uAD6C\uC131 \uC694\uC18C\uAC00 \uD574\uB2F9 \uC0C1\uD0DC\uB97C \uC561\uC138\uC2A4\uD558\uACE0 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB3C4\uB85D \uD569\uB2C8\uB2E4.</li></ul><h2 id="useimperativehandle-vs-useref" tabindex="-1"><a class="header-anchor" href="#useimperativehandle-vs-useref" aria-hidden="true">#</a> <code>useImperativeHandle</code> vs <code>useRef</code></h2><p><code>useImperativeHandle</code>\uACFC <code>useRef</code>\uB294 \uBAA8\uB450 \uBD80\uBAA8 \uAD6C\uC131 \uC694\uC18C\uC5D0\uC11C \uC790\uC2DD \uAD6C\uC131 \uC694\uC18C\uC640 \uC0C1\uD638 \uC791\uC6A9\uD558\uB294 \uB370 \uC0AC\uC6A9\uB418\uC9C0\uB9CC, \uB450 \uD6C4\uD06C \uAC04\uC5D0 \uBA87 \uAC00\uC9C0 \uC8FC\uC694 \uCC28\uC774\uC810\uC774 \uC788\uC2B5\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),w=n("p",null,"useRef\uC740 \uCEF4\uD3EC\uB10C\uD2B8\uB098 DOM \uC694\uC18C\uC5D0 \uB300\uD55C \uCC38\uC870\uB97C \uB9CC\uB4E4\uC5B4 \uBD80\uBAA8 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uD574\uB2F9 \uCC38\uC870\uB97C \uD1B5\uD574 \uC811\uADFC\uD560 \uC218 \uC788\uAC8C \uD569\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574 \uBD80\uBAA8 \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC790\uC2DD \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD604\uC7AC \uC0C1\uD0DC\uC5D0 \uC811\uADFC\uD560 \uC218 \uC788\uC9C0\uB9CC, \uBD80\uBAA8 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uC9C1\uC811\uC801\uC73C\uB85C \uC790\uC2DD \uCEF4\uD3EC\uB10C\uD2B8\uC640 \uC0C1\uD638 \uC791\uC6A9\uD560 \uC218 \uC788\uB294 \uBC29\uBC95\uC744 \uC81C\uACF5\uD558\uC9C0\uB294 \uC54A\uC2B5\uB2C8\uB2E4.",-1),I=n("p",null,"\uB2E4\uB978 \uD55C\uD3B8\uC73C\uB85C, useImperativeHandle\uC740 \uC790\uC2DD \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uD2B9\uC815 \uD568\uC218\uB098 \uC18D\uC131\uC744 \uBD80\uBAA8 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0 \uB178\uCD9C\uD558\uC5EC ref\uB97C \uD1B5\uD574 \uC811\uADFC\uD560 \uC218 \uC788\uAC8C \uD569\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574 \uBD80\uBAA8 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uC790\uC2DD \uCEF4\uD3EC\uB10C\uD2B8\uC640 \uC0C1\uD638 \uC791\uC6A9\uD558\uB294 \uB354 \uBA85\uC2DC\uC801\uC778 \uBC29\uBC95\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.",-1),R=n("p",null,"\uC77C\uBC18\uC801\uC73C\uB85C, \uC790\uC2DD \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C1\uD0DC\uC5D0\uB9CC \uC811\uADFC\uD574\uC57C \uD55C\uB2E4\uBA74 useRef\uB97C \uC0AC\uC6A9\uD558\uACE0, \uC790\uC2DD \uCEF4\uD3EC\uB10C\uD2B8\uC640 \uB354 \uC9C1\uC811\uC801\uC73C\uB85C \uC0C1\uD638 \uC791\uC6A9\uD574\uC57C \uD55C\uB2E4\uBA74 useImperativeHandle\uC744 \uC0AC\uC6A9\uD560 \uAC83\uC785\uB2C8\uB2E4.",-1),C=n("h2",{id:"useimperativehandle\u110B\u1174-\u110C\u1161\u11BC\u1103\u1161\u11AB\u110C\u1165\u11B7",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#useimperativehandle\u110B\u1174-\u110C\u1161\u11BC\u1103\u1161\u11AB\u110C\u1165\u11B7","aria-hidden":"true"},"#"),a(" useImperativeHandle\uC758 \uC7A5\uB2E8\uC810")],-1),x=n("p",null,[n("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),D=p('<p>React \uD6C5 \uC911 \uD558\uB098\uC778 useImperativeHandle\uB97C \uC0AC\uC6A9\uD558\uB294 \uB370 \uC7A5\uB2E8\uC810\uC774 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="\u110C\u1161\u11BC\u110C\u1165\u11B7" tabindex="-1"><a class="header-anchor" href="#\u110C\u1161\u11BC\u110C\u1165\u11B7" aria-hidden="true">#</a> \uC7A5\uC810</h2><ul><li>\uBA85\uC2DC\uC801 \uC778\uD130\uD398\uC774\uC2A4: useImperativeHandle\uC744 \uC0AC\uC6A9\uD558\uBA74 \uD558\uC704 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uD2B9\uC815 \uD568\uC218\uB098 \uC18D\uC131\uC744 \uC0C1\uC704 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0 \uB178\uCD9C\uD558\uB294 \uB354 \uBA85\uC2DC\uC801\uC778 \uBC29\uBC95\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.</li><li>\uC131\uB2A5 \uAC1C\uC120: \uBD80\uBAA8 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uC9C1\uC811 \uC790\uC2DD \uCEF4\uD3EC\uB10C\uD2B8\uC640 \uC0C1\uD638 \uC791\uC6A9\uD560 \uC218 \uC788\uB3C4\uB85D \uD5C8\uC6A9\uD568\uC73C\uB85C\uC368, useImperativeHandle\uC740 \uD2B9\uC815 \uC2DC\uB098\uB9AC\uC624\uC5D0\uC11C \uC131\uB2A5\uC744 \uAC1C\uC120\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</li><li>\uCF54\uB4DC \uAD6C\uC131 \uAC1C\uC120: \uBD80\uBAA8\uC640 \uC790\uC2DD \uCEF4\uD3EC\uB10C\uD2B8 \uC0AC\uC774\uC758 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uBD84\uB9AC\uD568\uC73C\uB85C\uC368, useImperativeHandle\uC740 \uCF54\uB4DC\uC758 \uAD6C\uC131\uC744 \uAC1C\uC120\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</li></ul><h2 id="\u1103\u1161\u11AB\u110C\u1165\u11B7" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u110C\u1165\u11B7" aria-hidden="true">#</a> \uB2E8\uC810</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),B=n("ul",null,[n("li",null,"\uBCF5\uC7A1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4: useImperativeHandle\uC740 \uC5EC\uB7EC \uD558\uC704 \uCEF4\uD3EC\uB10C\uD2B8\uC640 \uB178\uCD9C\uD574\uC57C \uD560 \uC5EC\uB7EC \uAE30\uB2A5 \uB610\uB294 \uC18D\uC131\uC744 \uCC98\uB9AC\uD560 \uB54C \uCF54\uB4DC\uB97C \uBCF5\uC7A1\uD558\uAC8C \uB9CC\uB4E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4."),n("li",null,"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4: \uC62C\uBC14\uB974\uAC8C \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uC73C\uBA74 useImperativeHandle\uC740 \uC751\uC6A9 \uD504\uB85C\uADF8\uB7A8\uC5D0 \uC624\uB958\uC640 \uBC84\uADF8\uB97C \uC77C\uC73C\uD0AC \uC218 \uC788\uC2B5\uB2C8\uB2E4."),n("li",null,"\uD56D\uC0C1 \uD544\uC694\uD55C \uAC83\uC740 \uC544\uB2D9\uB2C8\uB2E4: \uC77C\uBD80 \uACBD\uC6B0\uC5D0\uB294 useImperativeHandle\uC744 \uC0AC\uC6A9\uD558\uB294 \uAC83\uC774 \uD544\uC694\uD558\uC9C0 \uC54A\uC744 \uC218\uB3C4 \uC788\uC73C\uBA70, useRef\uC640 \uAC19\uC740 \uB2E4\uB978 \uD6C5\uC744 \uC0AC\uC6A9\uD558\uB294 \uAC83\uC774 \uB354 \uAC04\uB2E8\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.")],-1),j=n("p",null,"Re act\uC758 useImperativeHandle \uD6C5\uC740 \uD558\uC704 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uD2B9\uC815 \uD568\uC218 \uB610\uB294 \uC18D\uC131\uC744 \uC0C1\uC704 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0 \uB178\uCD9C\uD560 \uC218 \uC788\uB3C4\uB85D \uD558\uB294 \uAC15\uB825\uD55C \uAE30\uB2A5\uC785\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574 \uC0C1\uC704 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uD2B9\uC815 \uC2DC\uB098\uB9AC\uC624\uC5D0\uC11C \uC131\uB2A5 \uBC0F \uCF54\uB4DC \uAD6C\uC131\uC744 \uAC1C\uC120\uD560 \uC218 \uC788\uAC8C \uD558\uBA70, \uC0C1\uC704 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uD558\uC704 \uCEF4\uD3EC\uB10C\uD2B8\uC640 \uC0C1\uD638 \uC791\uC6A9\uD558\uB294 \uB354 \uBA85\uC2DC\uC801\uC778 \uBC29\uBC95\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.",-1),M=n("p",null,"\uADF8\uB7EC\uB098 useImperativeHandle\uC744 \uC62C\uBC14\uB974\uAC8C \uC0AC\uC6A9\uD558\uACE0 \uD544\uC694\uD55C \uACBD\uC6B0\uC5D0\uB9CC \uC0AC\uC6A9\uD558\uB294 \uAC83\uC774 \uC911\uC694\uD569\uB2C8\uB2E4. \uC62C\uBC14\uB974\uAC8C \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uC73C\uBA74 \uCF54\uB4DC\uAC00 \uBCF5\uC7A1\uD574\uC9C0\uACE0 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. useImperativeHandle\uC758 \uC7A5\uB2E8\uC810\uC744 \uC774\uD574\uD568\uC73C\uB85C\uC368 \uBCF8\uC778\uC758 React \uC751\uC6A9 \uD504\uB85C\uADF8\uB7A8\uC5D0\uC11C \uC5B8\uC81C \uC5B4\uB5BB\uAC8C \uC0AC\uC6A9\uD560\uC9C0 \uACB0\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1);function N(P,V){return s(),c("div",null,[d,r,k,v,m,(s(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),h,b,f,_,g,(s(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),y,(s(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),H,(s(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),w,I,R,C,x,(s(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),D,(s(),e(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),B,j,M])}var G=l(u,[["render",N],["__file","index.html.vue"]]);export{G as default};
