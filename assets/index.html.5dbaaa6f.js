import{_ as c}from"./app.3052dcfb.js";import{l as s,m as l,E as t,G as p,p as a,Y as o,C as n,K as e}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var r="/assets/FormValidationinReactAGuidewithExamples5bestlibraries_0.d807edda.png";const i={},u=n("p",null,"React \uAC1C\uBC1C \uC138\uACC4\uC5D0\uC11C\uB294 \uC0AC\uC6A9\uC790 \uC785\uB825\uC758 \uC720\uD6A8\uC131, \uBCF4\uC548, \uC720\uC6A9\uC131\uC744 \uBCF4\uC7A5\uD558\uB294 \uAC83\uC774 \uB9E4\uC6B0 \uC911\uC694\uD569\uB2C8\uB2E4. React\uAC00 \uD504\uB860\uD2B8\uC5D4\uB4DC\uB97C \uC9C0\uBC30\uD558\uACE0 \uC788\uB294 \uC0C1\uD669\uC5D0\uC11C, \uC62C\uBC14\uB978 \uC591\uC2DD \uC720\uD6A8\uC131 \uAC80\uC0AC \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uD65C\uC6A9\uD558\uBA74 \uC774 \uD504\uB85C\uC138\uC2A4\uB97C \uB300\uD3ED \uB2E8\uC21C\uD654\uD558\uC5EC \uAC1C\uBC1C\uC790 \uACBD\uD5D8\uACFC \uC751\uC6A9 \uD504\uB85C\uADF8\uB7A8 \uBB34\uACB0\uC131\uC744 \uD5A5\uC0C1\uC2DC\uD0AC \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uC548\uB0B4\uC11C\uB294 React\uB97C \uC704\uD55C \uCD5C\uACE0\uC758 \uC591\uC2DD \uC720\uD6A8\uC131 \uAC80\uC0AC \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uC608\uC81C\uC640 \uD568\uAED8 \uC0B4\uD3B4\uBD04\uC73C\uB85C\uC368 \uC774\uB7EC\uD55C \uC194\uB8E8\uC158\uC744 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uD1B5\uD569\uD558\uB294 \uB370 \uB3C4\uC6C0\uC774 \uB429\uB2C8\uB2E4.",-1),k=n("p",null,[n("img",{src:r,alt:"Form Validation in React: A Guide with Examples"})],-1),d=n("h2",{id:"_1-react-hook-form-\u1109\u1165\u11BC\u1102\u1173\u11BC\u1100\u116A-\u1100\u1161\u11AB\u1100\u1167\u11AF\u1112\u1161\u11B7\u110B\u1175-\u1106\u1161\u11AB\u1102\u1161\u1103\u1161",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-react-hook-form-\u1109\u1165\u11BC\u1102\u1173\u11BC\u1100\u116A-\u1100\u1161\u11AB\u1100\u1167\u11AF\u1112\u1161\u11B7\u110B\u1175-\u1106\u1161\u11AB\u1102\u1161\u1103\u1161","aria-hidden":"true"},"#"),a(" 1. React Hook Form: \uC131\uB2A5\uACFC \uAC04\uACB0\uD568\uC774 \uB9CC\uB098\uB2E4")],-1),v=n("p",null,"React Hook Form\uC740 \uC131\uB2A5 \uC911\uC2EC\uC801\uC778 \uC811\uADFC \uBC29\uC2DD\uC73C\uB85C \uC720\uBA85\uD558\uBA70, \uBCF4\uC77C\uB7EC\uD50C\uB808\uC774\uD2B8 \uCF54\uB4DC\uC758 \uC591\uC744 \uD06C\uAC8C \uC904\uC774\uACE0 \uB2E4\uC2DC \uB80C\uB354\uB9C1\uC744 \uCD5C\uC18C\uD654\uD569\uB2C8\uB2E4. \uD6A8\uC728\uC131\uACFC \uC18D\uB3C4\uB97C \uC6B0\uC120\uC2DC\uD558\uB294 \uAC1C\uBC1C\uC790\uB4E4\uC5D0\uAC8C \uC774\uC0C1\uC801\uC778 \uC774 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB294 \uD6C5 \uAE30\uBC18 API\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC591\uC2DD \uC720\uD6A8\uC131 \uAC80\uC0AC \uD504\uB85C\uC138\uC2A4\uB97C \uAC04\uC18C\uD654\uD569\uB2C8\uB2E4.",-1),m=n("p",null,[n("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),b=e(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useForm <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-hook-form&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">LoginForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> register<span class="token punctuation">,</span> handleSubmit<span class="token punctuation">,</span> errors <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onSubmit</span> <span class="token operator">=</span> <span class="token parameter">data</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>form onSubmit<span class="token operator">=</span><span class="token punctuation">{</span><span class="token function">handleSubmit</span><span class="token punctuation">(</span>onSubmit<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>input name<span class="token operator">=</span><span class="token string">&quot;username&quot;</span> ref<span class="token operator">=</span><span class="token punctuation">{</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token punctuation">{</span>errors<span class="token punctuation">.</span>username <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\uC544\uC774\uB514\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span><span class="token punctuation">}</span>
      
      <span class="token operator">&lt;</span>input name<span class="token operator">=</span><span class="token string">&quot;password&quot;</span> type<span class="token operator">=</span><span class="token string">&quot;password&quot;</span> ref<span class="token operator">=</span><span class="token punctuation">{</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token punctuation">{</span>errors<span class="token punctuation">.</span>password <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span><span class="token punctuation">}</span>
      
      <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">&quot;submit&quot;</span><span class="token operator">&gt;</span>\uB85C\uADF8\uC778<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-formik-\u1111\u1169\u1100\u116A\u11AF\u110C\u1165\u11A8\u110B\u1175\u11AB-\u1112\u1162\u1100\u1167\u11AF\u110E\u1162\u11A8" tabindex="-1"><a class="header-anchor" href="#_2-formik-\u1111\u1169\u1100\u116A\u11AF\u110C\u1165\u11A8\u110B\u1175\u11AB-\u1112\u1162\u1100\u1167\u11AF\u110E\u1162\u11A8" aria-hidden="true">#</a> 2. Formik: \uD3EC\uAD04\uC801\uC778 \uD574\uACB0\uCC45</h1><p>Formik\uC740 React \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uBCF5\uC7A1\uD55C \uD3FC \uC0C1\uD0DC\uC640 \uC720\uD6A8\uC131\uC744 \uAD00\uB9AC\uD558\uAE30 \uC704\uD55C \uAC15\uB825\uD55C \uC194\uB8E8\uC158\uC774\uB2E4. \uAC1C\uBC1C\uC790 \uACBD\uD5D8\uC744 \uD76C\uC0DD\uD558\uC9C0 \uC54A\uACE0 \uAD11\uBC94\uC704\uD55C \uD3FC \uAE30\uB2A5\uC774 \uD544\uC694\uD55C \uC2DC\uB098\uB9AC\uC624\uC5D0\uC11C \uBE5B\uC744 \uBC1C\uD55C\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useFormik <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;formik&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">LoginForm</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> formik <span class="token operator">=</span> <span class="token function">useFormik</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">initialValues</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">onSubmit</span><span class="token operator">:</span> <span class="token parameter">values</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>form onSubmit<span class="token operator">=</span><span class="token punctuation">{</span>formik<span class="token punctuation">.</span>handleSubmit<span class="token punctuation">}</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>input
        name<span class="token operator">=</span><span class="token string">&quot;username&quot;</span>
        onChange<span class="token operator">=</span><span class="token punctuation">{</span>formik<span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span>
        value<span class="token operator">=</span><span class="token punctuation">{</span>formik<span class="token punctuation">.</span>values<span class="token punctuation">.</span>username<span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">&gt;</span>
      
      <span class="token operator">&lt;</span>input
        name<span class="token operator">=</span><span class="token string">&quot;password&quot;</span>
        type<span class="token operator">=</span><span class="token string">&quot;password&quot;</span>
        onChange<span class="token operator">=</span><span class="token punctuation">{</span>formik<span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span>
        value<span class="token operator">=</span><span class="token punctuation">{</span>formik<span class="token punctuation">.</span>values<span class="token punctuation">.</span>password<span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">&gt;</span>
      
      <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">&quot;submit&quot;</span><span class="token operator">&gt;</span>\uB85C\uADF8\uC778<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),g=e(`<h1 id="_3-yup-\u1109\u1165\u11AB\u110B\u1165\u11AB\u110C\u1165\u11A8-\u110B\u1172\u1112\u116D\u1109\u1165\u11BC-\u1100\u1165\u11B7\u1109\u1161-\u1109\u1173\u110F\u1175\u1106\u1161" tabindex="-1"><a class="header-anchor" href="#_3-yup-\u1109\u1165\u11AB\u110B\u1165\u11AB\u110C\u1165\u11A8-\u110B\u1172\u1112\u116D\u1109\u1165\u11BC-\u1100\u1165\u11B7\u1109\u1161-\u1109\u1173\u110F\u1175\u1106\u1161" aria-hidden="true">#</a> 3. Yup: \uC120\uC5B8\uC801 \uC720\uD6A8\uC131 \uAC80\uC0AC \uC2A4\uD0A4\uB9C8</h1><p>\uC5C4\uBC00\uD788 \uB9D0\uD558\uBA74 \uD3FC \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB294 \uC544\uB2C8\uC9C0\uB9CC, Yup\uC740 Formik\uACFC \uAC19\uC740 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC640 \uD6CC\uB96D\uD558\uAC8C \uD568\uAED8 \uC791\uB3D9\uD558\uC5EC \uC2A4\uD0A4\uB9C8 \uAE30\uBC18\uC758 \uC720\uD6A8\uC131 \uAC80\uC0AC\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4. \uBCF5\uC7A1\uD55C \uC720\uD6A8\uC131 \uAC80\uC0AC \uB85C\uC9C1\uC744 \uB354 \uC77D\uAE30 \uC27D\uACE0 \uC720\uC9C0\uBCF4\uC218 \uAC00\uB2A5\uD55C \uBC29\uC2DD\uC73C\uB85C \uC815\uC758\uD558\uB294 \uB370 \uC644\uBCBD\uD569\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useFormik <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;formik&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> Yup <span class="token keyword">from</span> <span class="token string">&#39;yup&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> validationSchema <span class="token operator">=</span> Yup<span class="token punctuation">.</span><span class="token function">object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">shape</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">username</span><span class="token operator">:</span> Yup<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">required</span><span class="token punctuation">(</span><span class="token string">&#39;\uC0AC\uC6A9\uC790 \uC774\uB984\uC740 \uD544\uC218 \uD56D\uBAA9\uC785\uB2C8\uB2E4&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">password</span><span class="token operator">:</span> Yup<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">required</span><span class="token punctuation">(</span><span class="token string">&#39;\uBE44\uBC00\uBC88\uD638\uB294 \uD544\uC218 \uD56D\uBAA9\uC785\uB2C8\uB2E4&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">LoginForm</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> formik <span class="token operator">=</span> <span class="token function">useFormik</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">initialValues</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    validationSchema<span class="token punctuation">,</span>
    <span class="token function-variable function">onSubmit</span><span class="token operator">:</span> <span class="token parameter">values</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>form onSubmit<span class="token operator">=</span><span class="token punctuation">{</span>formik<span class="token punctuation">.</span>handleSubmit<span class="token punctuation">}</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>input
        name<span class="token operator">=</span><span class="token string">&quot;username&quot;</span>
        onChange<span class="token operator">=</span><span class="token punctuation">{</span>formik<span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span>
        value<span class="token operator">=</span><span class="token punctuation">{</span>formik<span class="token punctuation">.</span>values<span class="token punctuation">.</span>username<span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token punctuation">{</span>formik<span class="token punctuation">.</span>errors<span class="token punctuation">.</span>username <span class="token operator">?</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span>formik<span class="token punctuation">.</span>errors<span class="token punctuation">.</span>username<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">}</span>
      
      <span class="token operator">&lt;</span>input
        name<span class="token operator">=</span><span class="token string">&quot;password&quot;</span>
        type<span class="token operator">=</span><span class="token string">&quot;password&quot;</span>
        onChange<span class="token operator">=</span><span class="token punctuation">{</span>formik<span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span>
        value<span class="token operator">=</span><span class="token punctuation">{</span>formik<span class="token punctuation">.</span>values<span class="token punctuation">.</span>password<span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token punctuation">{</span>formik<span class="token punctuation">.</span>errors<span class="token punctuation">.</span>password <span class="token operator">?</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span>formik<span class="token punctuation">.</span>errors<span class="token punctuation">.</span>password<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">}</span>
      
      <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">&quot;submit&quot;</span><span class="token operator">&gt;</span>\uB85C\uADF8\uC778<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4-react-final-form-\u1109\u1165\u11BC\u1102\u1173\u11BC\u110B\u1173\u11AF-\u110B\u1171\u1112\u1161\u11AB-\u1100\u116E\u1103\u1169\u11A8" tabindex="-1"><a class="header-anchor" href="#_4-react-final-form-\u1109\u1165\u11BC\u1102\u1173\u11BC\u110B\u1173\u11AF-\u110B\u1171\u1112\u1161\u11AB-\u1100\u116E\u1103\u1169\u11A8" aria-hidden="true">#</a> 4. React Final Form: \uC131\uB2A5\uC744 \uC704\uD55C \uAD6C\uB3C5</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),f=e(`<p>React Final Form\uC740 \uC131\uB2A5\uC5D0 \uC911\uC810\uC744 \uB454 \uBCF5\uC7A1\uD55C \uC591\uC2DD \uC0C1\uD0DC\uB97C \uD6A8\uACFC\uC801\uC73C\uB85C \uAD00\uB9AC\uD558\uB294 \uB370 \uB6F0\uC5B4\uB0A9\uB2C8\uB2E4. \uC591\uC2DD\uC758 \uC5B4\uB290 \uBD80\uBD84\uC774 \uB2E4\uC2DC \uB80C\uB354\uB9C1\uB418\uB3C4\uB85D \uD558\uB294\uC9C0\uB97C \uC138\uBC00\uD558\uAC8C \uC81C\uC5B4\uD560 \uC218 \uC788\uC5B4 \uACE0\uC131\uB2A5 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uC774\uC0C1\uC801\uC785\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Form<span class="token punctuation">,</span> Field <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-final-form&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">LoginForm</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Form
    onSubmit<span class="token operator">=</span><span class="token punctuation">{</span><span class="token parameter">formValues</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>formValues<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span>
    render<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> handleSubmit <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>form onSubmit<span class="token operator">=</span><span class="token punctuation">{</span>handleSubmit<span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Field name<span class="token operator">=</span><span class="token string">&quot;username&quot;</span> component<span class="token operator">=</span><span class="token string">&quot;input&quot;</span> placeholder<span class="token operator">=</span><span class="token string">&quot;Username&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Field name<span class="token operator">=</span><span class="token string">&quot;password&quot;</span> component<span class="token operator">=</span><span class="token string">&quot;input&quot;</span> type<span class="token operator">=</span><span class="token string">&quot;password&quot;</span> placeholder<span class="token operator">=</span><span class="token string">&quot;Password&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">&quot;submit&quot;</span><span class="token operator">&gt;</span>Login<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">}</span>
  <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_5-react-redux-form-redux-\u1110\u1169\u11BC\u1112\u1161\u11B8" tabindex="-1"><a class="header-anchor" href="#_5-react-redux-form-redux-\u1110\u1169\u11BC\u1112\u1161\u11B8" aria-hidden="true">#</a> 5. React-Redux-Form: Redux \uD1B5\uD569</h1><p>\uC774\uBBF8 \uC0C1\uD0DC \uAD00\uB9AC\uB97C \uC704\uD574 Redux\uB97C \uD65C\uC6A9\uD558\uACE0 \uC788\uB294 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uB300\uD574 React-Redux-Form\uC740 Redux\uC640 \uAE34\uBC00\uD558\uAC8C \uD1B5\uD569\uB418\uC5B4 \uBCF5\uC7A1\uD55C \uC591\uC2DD \uCC98\uB9AC \uBC0F \uC720\uD6A8\uC131 \uAC80\uC0AC \uB17C\uB9AC\uB97C \uC6A9\uC774\uD558\uAC8C \uD574\uC8FC\uB294 \uACAC\uACE0\uD55C \uC194\uB8E8\uC158\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),y=e(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \uC774 \uC608\uC2DC\uB294 Redux\uC640 React-Redux-Form\uC774 \uC124\uCE58\uB41C \uD658\uACBD\uC744 \uAC00\uC815\uD569\uB2C8\uB2E4</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Control<span class="token punctuation">,</span> Form <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-redux-form&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">LoginForm</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleSubmit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">values</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Form model<span class="token operator">=</span><span class="token string">&quot;user&quot;</span> onSubmit<span class="token operator">=</span><span class="token punctuation">{</span>handleSubmit<span class="token punctuation">}</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>label<span class="token operator">&gt;</span>\uC0AC\uC6A9\uC790\uBA85<span class="token operator">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Control<span class="token punctuation">.</span>text model<span class="token operator">=</span><span class="token string">&quot;.username&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>

      <span class="token operator">&lt;</span>label<span class="token operator">&gt;</span>\uBE44\uBC00\uBC88\uD638<span class="token operator">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Control<span class="token punctuation">.</span>text model<span class="token operator">=</span><span class="token string">&quot;.password&quot;</span> type<span class="token operator">=</span><span class="token string">&quot;password&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>

      <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">&quot;submit&quot;</span><span class="token operator">&gt;</span>\uC81C\uCD9C<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Form<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>React \uD504\uB85C\uC81D\uD2B8\uC5D0 \uC801\uD569\uD55C \uD3FC \uC720\uD6A8\uC131 \uAC80\uC0AC \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uC120\uD0DD\uD558\uB294 \uAC83\uC740 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uAE30\uB2A5\uC131\uACFC \uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC5D0 \uC911\uB300\uD55C \uC601\uD5A5\uC744 \uBBF8\uCE60 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC131\uB2A5, \uC720\uC5F0\uC131 \uB610\uB294 \uAE30\uC874 \uC0C1\uD0DC \uAD00\uB9AC \uC194\uB8E8\uC158\uACFC\uC758 \uD1B5\uD569\uC744 \uC911\uC694\uC2DC\uD558\uB294 \uACBD\uC6B0, \uD544\uC694\uC5D0 \uB9DE\uB294 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uC6CC\uD06C\uD50C\uB85C\uC5D0 \uD1B5\uD569\uD568\uC73C\uB85C\uC368 \uACAC\uACE0\uD55C \uD3FC \uC720\uD6A8\uC131 \uAC80\uC0AC\uB97C \uBCF4\uC7A5\uD558\uACE0 \uAC1C\uBC1C \uD504\uB85C\uC138\uC2A4\uC640 \uCD5C\uC885 \uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC744 \uD5A5\uC0C1\uC2DC\uD0AC \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uC990\uAC70\uC6B4 \uCF54\uB529! \u{1F680}</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div>`,4);function h(w,q){return s(),l("div",null,[u,k,d,v,m,(s(),t(o("script"),null,{default:p(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b,(s(),t(o("script"),null,{default:p(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),g,(s(),t(o("script"),null,{default:p(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),f,(s(),t(o("script"),null,{default:p(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),y])}var C=c(i,[["render",h],["__file","index.html.vue"]]);export{C as default};