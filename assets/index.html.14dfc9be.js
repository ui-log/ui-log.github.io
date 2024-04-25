import{_ as n}from"./app.3052dcfb.js";import{l as s,m as a,K as t}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const p={},e=t(`<p>\uC18C\uAC1C: \uC0C1\uD0DC \uAD00\uB9AC\uB294 \uBAA8\uB4E0 \uD50C\uB7EC\uD130 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uD575\uC2EC\uC5D0 \uC704\uCE58\uD558\uC5EC \uB370\uC774\uD130\uAC00 UI\uB97C \uD1B5\uD574 \uD750\uB974\uACE0 \uC0AC\uC6A9\uC790 \uC791\uC5C5\uACFC \uC0C1\uD638 \uC791\uC6A9\uD558\uB294 \uBC29\uC2DD\uC744 \uC9C0\uC2DC\uD569\uB2C8\uB2E4. \uD50C\uB7EC\uD130\uB294 \uB2E4\uC591\uD55C \uC0C1\uD0DC \uAD00\uB9AC \uC194\uB8E8\uC158\uC744 \uC81C\uACF5\uD558\uC5EC \uB2E4\uC591\uD55C \uC2DC\uB098\uB9AC\uC624\uC640 \uC120\uD638\uB3C4\uC5D0 \uB9DE\uAC8C \uC870\uC815\uB429\uB2C8\uB2E4. \uC774 \uAE00\uC5D0\uC11C\uB294 \uC2E4\uC804 \uC608\uC81C\uB97C \uD1B5\uD574 \uD50C\uB7EC\uD130\uC5D0\uC11C \uC5EC\uB7EC \uC0C1\uD0DC \uAD00\uB9AC \uAE30\uC220\uC744 \uC0B4\uD3B4\uBCF4\uACE0, \uD504\uB85C\uC81D\uD2B8\uC5D0 \uC801\uD569\uD55C \uBC29\uC2DD\uC744 \uC120\uD0DD\uD558\uB294 \uB370 \uB3C4\uC6C0\uC744 \uC904 \uAC83\uC785\uB2C8\uB2E4.</p><p>\uD50C\uB7EC\uD130\uC5D0\uC11C \uC0C1\uD0DC \uC774\uD574: \uC0C1\uD0DC \uAD00\uB9AC \uAE30\uC220\uC744 \uD0D0\uC0C9\uD558\uAE30 \uC804\uC5D0, \uD50C\uB7EC\uD130\uC5D0\uC11C \uC0C1\uD0DC\uAC00 \uBB34\uC5C7\uC744 \uB098\uD0C0\uB0B4\uB294\uC9C0 \uBA85\uD655\uD788 \uD574\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uC0C1\uD0DC\uB294 \uC2DC\uAC04\uC774 \uC9C0\uB0A8\uC5D0 \uB530\uB77C \uBCC0\uACBD\uB420 \uC218 \uC788\uB294 \uB370\uC774\uD130\uB97C \uBAA8\uB450 \uD3EC\uD568\uD558\uBA70, UI\uC758 \uBAA8\uC591\uACFC \uB3D9\uC791\uC5D0 \uC601\uD5A5\uC744 \uC90D\uB2C8\uB2E4. \uC774\uB294 \uC0AC\uC6A9\uC790 \uC785\uB825, \uB124\uD2B8\uC6CC\uD06C \uC751\uB2F5 \uB610\uB294 \uB0B4\uBD80 \uC571 \uB85C\uC9C1\uC5D0 \uC758\uD574 \uD2B8\uB9AC\uAC70\uB41C \uBCC0\uACBD \uC0AC\uD56D\uC744 \uD3EC\uD568\uD569\uB2C8\uB2E4.</p><p>\uB0B4\uC7A5 \uC0C1\uD0DC \uAD00\uB9AC: \uD50C\uB7EC\uD130\uB294 \uC704\uC82F \uB0B4\uC5D0\uC11C \uC0C1\uD0DC\uB97C \uAD00\uB9AC\uD558\uAE30 \uC704\uD55C \uB0B4\uC7A5 \uBA54\uCEE4\uB2C8\uC998\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uAC00\uC7A5 \uC77C\uBC18\uC801\uC778 \uC811\uADFC \uBC29\uC2DD\uC740 setState\uB97C \uC0AC\uC6A9\uD558\uB294 \uAC83\uC73C\uB85C, \uC0C1\uD0DC\uAC00 \uBCC0\uACBD\uB420 \uB54C \uC704\uC82F\uC744 \uB2E4\uC2DC \uBE4C\uB4DC\uD569\uB2C8\uB2E4. \uAC1C\uBCC4 \uC704\uC82F \uB0B4\uC5D0\uC11C \uB85C\uCEEC \uC0C1\uD0DC\uB97C \uAD00\uB9AC\uD558\uAE30\uC5D0 \uC801\uD569\uD558\uC9C0\uB9CC, \uBCF5\uC7A1\uD55C \uC0C1\uD0DC\uB97C \uC5EC\uB7EC \uC704\uC82F\uC774\uB098 \uD654\uBA74 \uC804\uBC18\uC5D0 \uAC78\uCCD0 \uCC98\uB9AC\uD558\uB294 \uB370\uB294 \uBC88\uAC70\uB85C\uC6CC\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&#39;package:flutter/material.dart&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">CounterApp</span> <span class="token keyword">extends</span> <span class="token class-name">StatefulWidget</span> <span class="token punctuation">{</span>
  @override
  _CounterAppState <span class="token function">createState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">_CounterAppState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">_CounterAppState</span> <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token operator">&lt;</span>CounterApp<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  int _counter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token keyword">void</span> <span class="token function">_incrementCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      _counter<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  @override
  Widget <span class="token function">build</span><span class="token punctuation">(</span><span class="token parameter">BuildContext context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">Scaffold</span><span class="token punctuation">(</span>
      <span class="token literal-property property">appBar</span><span class="token operator">:</span> <span class="token function">AppBar</span><span class="token punctuation">(</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">&#39;Counter App&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token function">Center</span><span class="token punctuation">(</span>
        <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token function">Column</span><span class="token punctuation">(</span>
          <span class="token literal-property property">mainAxisAlignment</span><span class="token operator">:</span> MainAxisAlignment<span class="token punctuation">.</span>center<span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token operator">&lt;</span>Widget<span class="token operator">&gt;</span><span class="token punctuation">[</span>
            <span class="token function">Text</span><span class="token punctuation">(</span>
              <span class="token string">&#39;Counter:&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token function">Text</span><span class="token punctuation">(</span>
              <span class="token string">&#39;$_counter&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">style</span><span class="token operator">:</span> Theme<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">.</span>textTheme<span class="token punctuation">.</span>headline4<span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">floatingActionButton</span><span class="token operator">:</span> <span class="token function">FloatingActionButton</span><span class="token punctuation">(</span>
        <span class="token literal-property property">onPressed</span><span class="token operator">:</span> _incrementCounter<span class="token punctuation">,</span>
        <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token string">&#39;Increment&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token function">Icon</span><span class="token punctuation">(</span>Icons<span class="token punctuation">.</span>add<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">runApp</span><span class="token punctuation">(</span><span class="token function">CounterApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[e];function c(i,l){return s(),a("div",null,o)}var b=n(p,[["render",c],["__file","index.html.vue"]]);export{b as default};
