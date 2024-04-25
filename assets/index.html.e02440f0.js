import{_ as c}from"./app.3052dcfb.js";import{l as s,m as l,E as a,G as t,p,Y as e,C as n,K as o}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var i="/assets/BeyondtheBasics3Lesser-UsedReactNativeHooksforAdvancedDevelopers_0.d35dda5a.png",u="/assets/BeyondtheBasics3Lesser-UsedReactNativeHooksforAdvancedDevelopers_1.a2988116.png",r="/assets/BeyondtheBasics3Lesser-UsedReactNativeHooksforAdvancedDevelopers_2.b981dc6c.png";const k={},d=n("p",null,'useReducer, useMemo \uBC0F useCallback\uC744 \uD65C\uC6A9\uD55C "\uCD5C\uC801 \uAC1C\uBC1C"',-1),v=n("p",null,"\uAC15\uB825\uD55C \uB2A5\uB825\uC744 \uAC16\uCD98 React Native\uC740 \uBAA8\uBC14\uC77C \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uAC1C\uBC1C \uBC29\uC2DD\uC744 \uD601\uC2E0\uD588\uC2B5\uB2C8\uB2E4. React Native \uD6C5\uC740 \uBC29\uB300\uD55C \uC0DD\uD0DC\uACC4 \uC18D\uC5D0\uC11C \uAC1C\uBC1C \uC6CC\uD06C\uD50C\uB85C\uC6B0\uB97C \uCD5C\uC801\uD654\uD558\uACE0 \uCF54\uB4DC \uAC00\uB3C5\uC131\uC744 \uD5A5\uC0C1\uC2DC\uD0A4\uBA70 \uC7AC\uC0AC\uC6A9\uC131\uC744 \uCD09\uC9C4\uD558\uB294 \uD6A8\uC728\uC801\uC778 \uB3C4\uAD6C\uB85C \uB450\uB4DC\uB7EC\uC9D1\uB2C8\uB2E4. useState \uBC0F useEffect\uC640 \uAC19\uC740 \uD754\uD788 \uC54C\uB824\uC9C4 \uD6C5\uC774 \uC778\uAE30\uB97C \uB04C\uACE0 \uC788\uB294 \uBC18\uBA74, \uC5EC\uB7EC \uB2E4\uB978 \uD6C5\uB4E4\uC740 \uC5EC\uC804\uD788 \uC801\uAC8C \uD65C\uC6A9\uB418\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uAE00\uC5D0\uC11C\uB294 \uB450 \uAC00\uC9C0 \uC798 \uC54C\uB824\uC9C0\uC9C0 \uC54A\uC740 React Native \uD6C5\uC778 useReducer\uC640 useMemo\uC5D0 \uB300\uD574 \uC790\uC138\uD788 \uC0B4\uD3B4\uBCF4\uACE0, \uD604\uB300 \uC571 \uAC1C\uBC1C\uC5D0\uC11C\uC758 \uC911\uC694\uC131\uC744 \uBC1D\uD788\uACA0\uC2B5\uB2C8\uB2E4.",-1),m=n("ul",null,[n("li",null,"useReducer \uC774\uD574\uD558\uAE30: \uBCF5\uC7A1\uD55C \uC0C1\uD0DC \uB85C\uC9C1 \uAD00\uB9AC")],-1),b=n("p",null,"useState\uC640 \uB300\uBE44\uC801\uC73C\uB85C useReducer\uC740 \uC885\uC885 \uBE5B\uC744 \uBC1C\uD558\uC9C0 \uBABB\uD558\uC9C0\uB9CC, \uCEF4\uD3EC\uB10C\uD2B8 \uB0B4\uC5D0\uC11C \uBCF5\uC7A1\uD55C \uC0C1\uD0DC \uB85C\uC9C1\uC744 \uAD00\uB9AC\uD560 \uB54C \uBE5B\uC744 \uBC1C\uD569\uB2C8\uB2E4. \uC11C\uB85C \uB2E4\uB978 \uC561\uC158\uC5D0 \uB300\uD55C \uC5EC\uB7EC \uC5C5\uB370\uC774\uD2B8\uAC00 \uD544\uC694\uD55C \uC0C1\uD0DC \uAC1D\uCCB4\uC5D0\uAC8C \uD2B9\uD788 \uC720\uC6A9\uD569\uB2C8\uB2E4. \uC2E4\uC6A9\uC801\uC778 \uC608\uC2DC\uB97C \uC0B4\uD3B4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4:",-1),g=n("p",null,[n("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),y=o(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useReducer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> View<span class="token punctuation">,</span> TextInput<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-native&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> initialState <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">reducer</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&#39;SET_FIELD&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>state<span class="token punctuation">,</span> <span class="token punctuation">[</span>action<span class="token punctuation">.</span>field<span class="token punctuation">]</span><span class="token operator">:</span> action<span class="token punctuation">.</span>value <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&#39;RESET&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> initialState<span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">return</span> state<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">SinglePageForm</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> dispatch<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useReducer</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> initialState<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">field<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;SET_FIELD&#39;</span><span class="token punctuation">,</span> field<span class="token punctuation">,</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleSubmit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Form submitted with data:&#39;</span><span class="token punctuation">,</span> state<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleReset</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;RESET&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>View<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>TextInput
        value<span class="token operator">=</span><span class="token punctuation">{</span>state<span class="token punctuation">.</span>firstName<span class="token punctuation">}</span>
        onChangeText<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token string">&#39;firstName&#39;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">}</span>
        placeholder<span class="token operator">=</span><span class="token string">&quot;First Name&quot;</span>
      <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>TextInput
        value<span class="token operator">=</span><span class="token punctuation">{</span>state<span class="token punctuation">.</span>lastName<span class="token punctuation">}</span>
        onChangeText<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token string">&#39;lastName&#39;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">}</span>
        placeholder<span class="token operator">=</span><span class="token string">&quot;Last Name&quot;</span>
      <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>TextInput
        value<span class="token operator">=</span><span class="token punctuation">{</span>state<span class="token punctuation">.</span>email<span class="token punctuation">}</span>
        onChangeText<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token string">&#39;email&#39;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">}</span>
        placeholder<span class="token operator">=</span><span class="token string">&quot;Email&quot;</span>
      <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Button onPress<span class="token operator">=</span><span class="token punctuation">{</span>handleSubmit<span class="token punctuation">}</span> title<span class="token operator">=</span><span class="token string">&quot;Submit&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Button onPress<span class="token operator">=</span><span class="token punctuation">{</span>handleReset<span class="token punctuation">}</span> title<span class="token operator">=</span><span class="token string">&quot;Reset&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> SinglePageForm<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+i+'"><p>\uD558\uC9C0\uB9CC useState\uB85C\uB3C4 \uCDA9\uBD84\uD788 \uCC98\uB9AC \uAC00\uB2A5\uD55C \uAC04\uB2E8\uD55C \uC0C1\uD0DC \uAD00\uB9AC \uC2DC\uB098\uB9AC\uC624\uC5D0\uC11C useReducer\uB97C \uACFC\uB3C4\uD558\uAC8C \uC0AC\uC6A9\uD558\uB294 \uAC83\uC740 \uD53C\uD574\uC57C \uD569\uB2C8\uB2E4. useReducer\uC758 \uB0A8\uC6A9\uC740 \uBD88\uD544\uC694\uD558\uAC8C \uBCF5\uC7A1\uD55C \uCF54\uB4DC\uB85C \uC774\uC5B4\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><ol start="2"><li>useMemo\uB97C \uD65C\uC6A9\uD55C \uC131\uB2A5 \uCD5C\uC801\uD654: \uBE44\uC6A9\uC774 \uB9CE\uC774 \uB4DC\uB294 \uACC4\uC0B0 \uACB0\uACFC\uB97C \uBA54\uBAA8\uD654\uD558\uAE30```</li></ol><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),f=o(`<p><code>useMemo</code>\uC740 \uB2E4\uB978 \uC18C\uC911\uD55C \uD6C5\uC73C\uB85C, \uBE44\uC2FC \uACC4\uC0B0\uC744 \uBA54\uBAA8\uC774\uC9D5\uD558\uC5EC \uC131\uB2A5\uC744 \uD06C\uAC8C \uCD5C\uC801\uD654\uD560 \uC218 \uC788\uB294 \uC810\uC5D0\uC11C \uACFC\uC18C\uD3C9\uAC00\uB418\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC790\uC8FC \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uB80C\uB354\uB9C1\uD558\uAC70\uB098 \uBB34\uAC70\uC6B4 \uACC4\uC0B0\uC774 \uD544\uC694\uD55C \uC0C1\uD669\uC5D0\uC11C \uAC12\uC5B4\uCE58\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uC74C \uC608\uC2DC\uB97C \uACE0\uB824\uD574\uBCF4\uC138\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useMemo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> View<span class="token punctuation">,</span> Text <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-native&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">ExpensiveComponent</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> data <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> memoizedData <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \uB370\uC774\uD130\uC5D0 \uB300\uD55C \uBE44\uC2FC \uACC4\uC0B0 \uC218\uD589</span>
    <span class="token keyword">return</span> <span class="token function">computeData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>data<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \uC758\uC874\uC131 \uBC30\uC5F4</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>View<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Text<span class="token operator">&gt;</span><span class="token punctuation">{</span>memoizedData<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+u+'" alt="\uC774\uBBF8\uC9C0"></p><p><code>useMemo</code>\uC740 \uAC15\uB825\uD558\uC9C0\uB9CC, \uBAA8\uB4E0 \uACC4\uC0B0\uC5D0 \uC0AC\uC6A9\uD558\uB294 \uAC83\uC744 \uD53C\uD558\uB294 \uAC83\uC774 \uC911\uC694\uD569\uB2C8\uB2E4. \uD2B9\uD788 \uC791\uACE0 \uC0AC\uC18C\uD55C \uACC4\uC0B0\uC5D0 \uB300\uD574 \uC0AC\uC6A9\uD560 \uB54C \uC8FC\uC758\uD574\uC57C \uD569\uB2C8\uB2E4. \uC815\uD655\uD55C \uBA54\uBAA8\uC774\uC81C\uC774\uC158\uC744 \uBCF4\uC7A5\uD558\uAE30 \uC704\uD574 \uC758\uC874\uC131 \uBC30\uC5F4\uC5D0 \uC62C\uBC14\uB978 \uC758\uC874\uC131\uC744 \uC9C0\uC815\uD558\uB294 \uAC83\uC774 \uC911\uC694\uD569\uB2C8\uB2E4. <code>useMemo</code>\uC744 \uACFC\uB3C4\uD558\uAC8C \uC0AC\uC6A9\uD558\uBA74 \uC870\uAE30 \uCD5C\uC801\uD654\uC640 \uBD88\uD544\uC694\uD55C \uBCF5\uC7A1\uC131\uC73C\uB85C \uC774\uC5B4\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),w=o(`<ol start="3"><li>useCallback\uC744 \uC0AC\uC6A9\uD558\uC5EC \uD6A8\uC728\uC131 \uD5A5\uC0C1: \uCF5C\uBC31 \uD568\uC218 \uBA54\uBAA8\uD654</li></ol><p>useReducer\uC640 useMemo\uC5D0 \uCD94\uAC00\uB85C useCallback\uC744 \uC0AC\uC6A9\uD558\uBA74 \uD568\uC218\uB97C \uBA54\uBAA8\uD654\uD558\uC5EC \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C \uBD88\uD544\uC694\uD55C \uB2E4\uC2DC \uB80C\uB354\uB9C1\uC744 \uBC29\uC9C0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD2B9\uD788 \uC790\uC2DD \uCEF4\uD3EC\uB10C\uD2B8\uC5D0 \uCF5C\uBC31\uC744 \uC804\uB2EC\uD560 \uB54C \uC131\uB2A5\uC744 \uCD5C\uC801\uD654\uD558\uB294 \uB370 \uC720\uC6A9\uD569\uB2C8\uB2E4. \uC0AC\uC6A9\uBC95\uC744 \uC124\uBA85\uD574\uBCF4\uACA0\uC2B5\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useCallback <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> View<span class="token punctuation">,</span> TouchableOpacity<span class="token punctuation">,</span> Text <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-native&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">ParentComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> handleClick <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \uD074\uB9AD \uB85C\uC9C1 \uCC98\uB9AC</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>ChildComponent onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">ChildComponent</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> onClick <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>View<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>TouchableOpacity onPress<span class="token operator">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Text<span class="token operator">&gt;</span>\uD074\uB9AD<span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>TouchableOpacity<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> ParentComponent<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+r+'"><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),h=n("p",null,"\uC77C\uBC18\uC801\uC73C\uB85C \uBAA8\uB4E0 \uCF5C\uBC31 \uD568\uC218\uC5D0 useCallback\uC744 \uC801\uC6A9\uD558\uB294 \uAC83\uC740 \uD53C\uD558\uC138\uC694. \uBAA8\uB4E0 \uCF5C\uBC31 \uD568\uC218\uAC00 \uBA54\uBAA8\uD654\uC758 \uC774\uC810\uC744 \uB204\uB9AC\uC9C0\uB294 \uC54A\uC2B5\uB2C8\uB2E4. \uD2B9\uD788 \uB2E4\uC2DC \uB80C\uB354\uB9C1\uC744 \uC720\uBC1C\uD558\uC9C0 \uC54A\uB294 \uACBD\uC6B0\uC5D0\uB294 \uB354\uC6B1 \uADF8\uB807\uC2B5\uB2C8\uB2E4. useCallback\uC744 \uC0AC\uC6A9\uD560 \uB54C\uB294 \uC758\uC874\uC131 \uBC30\uC5F4\uC5D0\uC11C \uC758\uB3C4\uCE58 \uC54A\uC740 \uB3D9\uC791\uC744 \uD53C\uD558\uAE30 \uC704\uD574 \uC2E0\uC911\uD558\uAC8C \uC758\uC874\uC131\uC744 \uACE0\uB824\uD574\uC57C \uD569\uB2C8\uB2E4.",-1),_=n("p",null,"\uC694\uC57D\uD558\uC790\uBA74, React Native \uD6C5\uC2A4\uB294 \uD6A8\uC728\uC131, \uC720\uC9C0\uBCF4\uC218\uC131, \uC131\uB2A5 \uCE21\uBA74\uC5D0\uC11C \uBAA8\uBC14\uC77C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uCD5C\uC801\uD654\uD558\uB294 \uAC15\uB825\uD55C \uB3C4\uAD6C \uC0C1\uC790\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4. useReducer, useMemo, useCallback\uACFC \uAC19\uC740 \uC798 \uC54C\uB824\uC9C0\uC9C0 \uC54A\uC740 \uD6C5\uC744 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uD1B5\uD569\uD568\uC73C\uB85C\uC368 React Native \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uB354 \uACAC\uACE0\uD558\uACE0 \uD6A8\uC728\uC801\uC73C\uB85C \uAD6C\uCD95\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uD6C5\uC744 \uD0D0\uC0C9\uD558\uACE0 \uD65C\uC6A9\uD558\uC5EC \uAC1C\uBC1C \uBC29\uBC95\uC744 \uD5A5\uC0C1\uC2DC\uD0A4\uACE0 \uB6F0\uC5B4\uB09C \uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC744 \uB9CC\uB4E4\uC5B4\uBD05\uC2DC\uB2E4.",-1);function C(x,R){return s(),l("div",null,[d,v,m,b,g,(s(),a(e("script"),null,{default:t(()=>[p(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),y,(s(),a(e("script"),null,{default:t(()=>[p(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),f,(s(),a(e("script"),null,{default:t(()=>[p(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),w,(s(),a(e("script"),null,{default:t(()=>[p(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),h,_])}var q=c(k,[["render",C],["__file","index.html.vue"]]);export{q as default};
