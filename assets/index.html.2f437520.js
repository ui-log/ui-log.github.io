import{_ as s}from"./app.3052dcfb.js";import{l as o,m as n,K as a}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var t="/assets/Previewandbuilddocs_0.ea460f95.png";const e={},i=a(`<p>Storybook\uC740 \uAC1C\uBC1C \uACFC\uC815\uC5D0 \uAD00\uC5EC\uD558\uB294 \uBAA8\uB4E0 \uC774\uD574\uAD00\uACC4\uC790\uB4E4\uC774 \uB3C4\uC6C0\uC744 \uBC1B\uC744 \uC218 \uC788\uB294 \uD48D\uBD80\uD558\uACE0 \uD3EC\uAD04\uC801\uC778 \uBB38\uC11C\uB97C \uC0DD\uC131\uD560 \uC218 \uC788\uAC8C \uD574\uC90D\uB2C8\uB2E4. \uAE30\uBCF8\uC801\uC73C\uB85C \uD544\uC694\uD55C \uB3C4\uAD6C\uB97C \uAC16\uCD94\uC5B4 \uBB38\uC11C\uB97C \uC791\uC131\uD560 \uBFD0\uB9CC \uC544\uB2C8\uB77C \uBBF8\uB9AC \uBCF4\uAE30\uD558\uACE0 \uAD6C\uCD95\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="storybook-\u1106\u116E\u11AB\u1109\u1165-\u1106\u1175\u1105\u1175-\u1107\u1169\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#storybook-\u1106\u116E\u11AB\u1109\u1165-\u1106\u1175\u1105\u1175-\u1107\u1169\u1100\u1175" aria-hidden="true">#</a> Storybook \uBB38\uC11C \uBBF8\uB9AC \uBCF4\uAE30</h2><p>\uAC1C\uBC1C \uC911\uC5D0 \uC791\uC131\uD55C \uBB38\uC11C\uB97C \uC5B8\uC81C\uB4E0\uC9C0 \uBBF8\uB9AC \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4. --docs \uD50C\uB798\uADF8\uB97C \uC0AC\uC6A9\uD558\uC5EC \uCD5C\uC885 \uBB38\uC11C\uC758 \uBBF8\uB9AC \uBCF4\uAE30\uB97C \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB97C \uC0C8\uB85C\uC6B4 \uC2A4\uD06C\uB9BD\uD2B8\uB85C package.json\uC5D0 \uD3EC\uD568\uD558\uB294 \uAC83\uC744 \uAD8C\uC7A5\uD569\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;storybook-docs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;storybook dev --docs&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uB2F9\uC2E0\uC758 \uC124\uC815\uC5D0 \uB530\uB77C, storybook-docs \uC2A4\uD06C\uB9BD\uD2B8\uB97C \uC2E4\uD589\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 Storybook\uC774 \uBB38\uC11C \uBAA8\uB4DC\uB85C \uC804\uD658\uB418\uC5B4 \uB2E4\uB978 \uBE4C\uB4DC\uAC00 \uC0DD\uC131\uB429\uB2C8\uB2E4.</p><p>MDX \uB610\uB294 CSF \uD615\uC2DD\uC758 \uC774\uC57C\uAE30\uB97C \uCC3E\uC544 \uBB38\uC11C\uC5D0 \uCD94\uAC00\uD55C \uB0B4\uC6A9\uC5D0 \uB530\uB77C \uADF8 \uB0B4\uC6A9\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4...</p><p><img src="`+t+`" alt="\uC774\uBBF8\uC9C0"></p><p>\uD3C9\uBC94\uD55C Storybook \uBE4C\uB4DC\uC640\uB294 \uB2E4\uB974\uAC8C \uC774 \uBE4C\uB4DC \uBAA8\uB4DC\uC5D0\uB294 \uBA87 \uAC00\uC9C0 \uC8FC\uC758\uD574\uC57C \uD560 \uC0AC\uD56D\uC774 \uC788\uC2B5\uB2C8\uB2E4:</p><ul><li>\uCD5C\uC0C1\uC704 \uD56D\uBAA9\uC740 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0 \uB300\uD55C \uC8FC\uC694 \uC774\uC57C\uAE30\uB97C \uAC00\uB9AC\uD0B5\uB2C8\uB2E4.</li><li>\uAC01 \uAC1C\uBCC4 \uC774\uC57C\uAE30\uB294 \uC774\uC81C \uD3BC\uCCD0\uC9C4 \uD45C\uC2DC \uBAA8\uB4DC\uB85C \uC81C\uACF5\uB418\uBA70, \uB2E4\uB978 \uC138\uD2B8\uC758 \uC544\uC774\uCF58\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574 \uBB38\uC11C \uC790\uCCB4\uC5D0 \uC9D1\uC911\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</li><li>Storybook\uC758 \uB808\uC774\uC544\uC6C3\uC774 \uB2E4\uB974\uAC8C \uB80C\uB354\uB9C1\uB429\uB2C8\uB2E4. \uD234\uBC14\uB294 \uD45C\uC2DC\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</li></ul><h2 id="storybook\u110B\u1174-\u1106\u116E\u11AB\u1109\u1165-\u1100\u1169\u11BC\u1100\u1162\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#storybook\u110B\u1174-\u1106\u116E\u11AB\u1109\u1165-\u1100\u1169\u11BC\u1100\u1162\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> Storybook\uC758 \uBB38\uC11C \uACF5\uAC1C\uD558\uAE30</h2><p>Storybook\uC744 \uACF5\uAC1C\uD558\uB294 \uBC29\uC2DD\uACFC \uB9C8\uCC2C\uAC00\uC9C0\uB85C \uBB38\uC11C\uB97C \uACF5\uAC1C\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. build-storybook \uBA85\uB839\uC5B4\uC5D0 --docs \uD50C\uB798\uADF8\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB610\uD55C package.json \uD30C\uC77C\uC5D0 \uC2A4\uD06C\uB9BD\uD2B8\uB85C \uD3EC\uD568\uD558\uB294 \uAC83\uC744 \uAD8C\uC7A5\uD569\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;build-storybook-docs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;storybook build --docs&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uB2F9\uC2E0\uC774 \uAC00\uC9C4 \uC124\uC815\uC5D0 \uB530\uB974\uBA74, build-storybook-docs \uC2A4\uD06C\uB9BD\uD2B8\uAC00 \uC2E4\uD589\uB418\uBA74 Storybook\uC740 \uB2E4\uC2DC \uD55C \uBC88 \uBB38\uC11C \uBAA8\uB4DC\uB85C \uC804\uD658\uB418\uC5B4 \uB2E4\uB978 \uBE4C\uB4DC\uB97C \uC0DD\uC131\uD558\uACE0 \uBB38\uC11C\uB97C storybook-static \uD3F4\uB354\uC5D0 \uCD9C\uB825\uD560 \uAC83\uC785\uB2C8\uB2E4.</p><p>\uC704\uC5D0\uC11C \uC5B8\uAE09\uD55C \uC8FC\uC758 \uC0AC\uD56D\uC774 \uC5EC\uC804\uD788 \uC801\uC6A9\uB429\uB2C8\uB2E4.</p><p>\uBB38\uC11C\uB97C \uBC30\uD3EC\uD558\uAE30 \uC704\uD574 \uB2E4\uC74C\uACFC \uAC19\uC740 \uD638\uC2A4\uD305 \uC81C\uACF5\uC790\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><ul><li>Vercel</li><li>Netlify</li><li>S3</li></ul><p>\uC2A4\uD1A0\uB9AC\uBD81 \uBB38\uC11C\uC5D0 \uB300\uD574 \uB354 \uC790\uC138\uD788 \uC54C\uC544\uBCF4\uC138\uC694</p><ul><li>\uC2A4\uD1A0\uB9AC\uB97C \uC704\uD55C \uBB38\uC11C \uC791\uC131\uC744 \uC704\uD55C Autodocs</li><li>\uBB38\uC11C\uB97C \uC0AC\uC6A9\uC790 \uC815\uC758\uD558\uAE30 \uC704\uD55C MDX</li><li>\uBB38\uC11C \uC791\uC131\uC744 \uC704\uD55C Doc Blocks</li><li>\uBB38\uC11C \uAC8C\uC2DC\uB97C \uC790\uB3D9\uD654\uD558\uB294 \uBB38\uC11C \uAC8C\uC2DC</li></ul>`,18),r=[i];function p(l,c){return o(),n("div",null,r)}var y=s(e,[["render",p],["__file","index.html.vue"]]);export{y as default};
