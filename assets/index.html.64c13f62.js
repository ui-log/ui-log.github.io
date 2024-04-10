import{_ as o}from"./app.63e06a35.js";import{l as a,m as i,E as n,G as t,p as e,Y as l,K as s}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const p={},c=s('<p>React -Ui \uB77C\uC774\uBE0C\uB7EC\uB9AC Redux -\uC0C1\uD0DC \uAD00\uB9AC \uB77C\uC774\uBE0C\uB7EC\uB9AC react-redux - React\uC640 Redux\uB97C \uD568\uAED8 \uC0AC\uC6A9\uD560 \uC218 \uC788\uAC8C \uD558\uB294 \uB77C\uC774\uBE0C\uB7EC\uB9AC</p><p>Redux\uC758 3\uAC00\uC9C0 \uD575\uC2EC \uAC1C\uB150</p><ol><li>Store \u2192 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uC0C1\uD0DC\uB97C \uBCF4\uC720</li><li>Action \u2192 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC0C1\uD0DC\uC758 \uBCC0\uACBD\uC744 \uC124\uBA85</li><li>Reducer \u2192 \uC561\uC158\uC5D0 \uB530\uB77C \uC0C1\uD0DC \uC804\uD658\uC744 \uC218\uD589</li></ol><p>3\uAC00\uC9C0 \uC6D0\uCE59:</p><ol><li>\uC804\uCCB4 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uC0C1\uD0DC\uB294 \uB2E8\uC77C \uC800\uC7A5\uC18C \uB0B4 \uAC1D\uCCB4 \uD2B8\uB9AC\uC5D0 \uC800\uC7A5\uB41C\uB2E4.</li><li>\uC0C1\uD0DC\uB97C \uBCC0\uACBD\uD558\uB294 \uC720\uC77C\uD55C \uBC29\uBC95\uC740 \uC561\uC158\uC744 \uBC1C\uD589\uD558\uB294 \uAC83\uC73C\uB85C, \uC77C\uC5B4\uB09C \uC77C\uC744 \uC124\uBA85\uD558\uB294 \uAC1D\uCCB4(\uC571\uC758 \uC0C1\uD0DC\uB97C \uC5C5\uB370\uC774\uD2B8\uD558\uB824\uBA74 \uB9AC\uB355\uC2A4\uC5D0 \uC561\uC158 \uB0B4\uC5D0\uC11C \uC54C\uB824\uC918\uC57C \uD558\uBA70, \uC0C1\uD0DC \uAC1D\uCCB4\uB97C \uC9C1\uC811 \uC5C5\uB370\uC774\uD2B8\uD558\uB294 \uAC83\uC740 \uD5C8\uC6A9\uB418\uC9C0 \uC54A\uC74C).</li><li>\uC561\uC158\uC5D0 \uC758\uD574 \uBCC0\uD658\uB41C \uC0C1\uD0DC \uD2B8\uB9AC\uB97C \uC9C0\uC815\uD558\uB824\uBA74 \uC21C\uC218 \uB9AC\uB4C0\uC11C\uB97C \uC791\uC131\uD558\uC138\uC694.</li></ol><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',6),r=s(`<p>\uB9AC\uB4C0\uC11C (\uAC00\uAC8C\uC8FC\uC778)</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">reducer</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token constant">BUY_CAKE</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">numOfCakes</span><span class="token operator">:</span> state<span class="token punctuation">.</span>numOfCakes <span class="token operator">-</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC561\uC158 == \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uC0C1\uD0DC\uC640 \uC0C1\uD638\uC791\uC6A9\uD558\uB294 \uC720\uC77C\uD55C \uBC29\uBC95\uC785\uB2C8\uB2E4. \uC571\uC5D0\uC11C \uB9AC\uB355\uC2A4 \uC2A4\uD1A0\uC5B4\uB85C \uC77C\uBC18 \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uAC1D\uCCB4\uB97C \uC804\uB2EC\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.</p><p>\uB9AC\uB4C0\uC11C : \uC0C1\uD0DC\uC640 \uC561\uC158\uC744 \uB9E4\uAC1C\uBCC0\uC218\uB85C\uBC1B\uC544 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uB2E4\uC74C \uC0C1\uD0DC\uB97C \uBC18\uD658\uD558\uB294 \uD568\uC218\uC785\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),d=s('<h1 id="\u1105\u1175\u1103\u1165\u11A8\u1109\u1173-\u1109\u1173\u1110\u1169\u110B\u1165" tabindex="-1"><a class="header-anchor" href="#\u1105\u1175\u1103\u1165\u11A8\u1109\u1173-\u1109\u1173\u1110\u1169\u110B\u1165" aria-hidden="true">#</a> \uB9AC\uB355\uC2A4 \uC2A4\uD1A0\uC5B4 :</h1><ul><li>\uC804\uCCB4 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC704\uD55C \uD558\uB098\uC758 \uC2A4\uD1A0\uC5B4</li></ul><p><strong>\uCC45\uC784</strong>:</p><ul><li>\uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC0C1\uD0DC \uBCF4\uC720</li><li>getState()\uB97C \uD1B5\uD574 \uC0C1\uD0DC\uC5D0 \uC561\uC138\uC2A4 \uD5C8\uC6A9</li><li>dispatch(\uC561\uC158)\uC744 \uD1B5\uD574 \uC0C1\uD0DC \uC5C5\uB370\uC774\uD2B8 \uD5C8\uC6A9</li><li>subscribe(\uB9AC\uC2A4\uB108)\uB97C \uD1B5\uD574 \uB9AC\uC2A4\uB108 \uB4F1\uB85D</li><li>subscribe(\uB9AC\uC2A4\uB108)\uB85C \uBC18\uD658\uB41C \uD568\uC218\uB97C \uD1B5\uD574 \uB9AC\uC2A4\uB108 \uB4F1\uB85D \uD574\uC81C</li></ul><p><strong>Action Creator</strong>:</p><ul><li>\uAC1D\uCCB4\uB97C \uBC18\uD658\uD558\uB294 \uD568\uC218</li></ul>',6);function u(k,m){return a(),i("div",null,[c,(a(),n(l("script"),null,{default:t(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),r,(a(),n(l("script"),null,{default:t(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),d])}var y=o(p,[["render",u],["__file","index.html.vue"]]);export{y as default};
