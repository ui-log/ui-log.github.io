import{_ as o}from"./app.d68f74da.js";import{l as n,m as l,E as a,G as s,p as e,Y as t,K as p}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const i={},c=p('<h1 id="\u1109\u1161\u110B\u116D\u11BC\u110C\u1161-\u110C\u1165\u11BC\u110B\u1174-webpack-\u1109\u1165\u11AF\u110C\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1109\u1161\u110B\u116D\u11BC\u110C\u1161-\u110C\u1165\u11BC\u110B\u1174-webpack-\u1109\u1165\u11AF\u110C\u1165\u11BC" aria-hidden="true">#</a> \uC0AC\uC6A9\uC790 \uC815\uC758 Webpack \uC124\uC815</h1><blockquote><p>\uCC38\uACE0: \uC6F9\uD329 \uAD6C\uC131 \uBCC0\uACBD\uC740 \uC138\uB9E8\uBC84\uB85C \uB36E\uC9C0 \uC54A\uC73C\uBBC0\uB85C \uC790\uC2E0\uC758 \uCC45\uC784 \uD558\uC5D0 \uC9C4\uD589\uD558\uC2ED\uC2DC\uC624.</p></blockquote><p>\uADC0\uD558\uC758 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uC0AC\uC6A9\uC790 \uC815\uC758 \uC6F9\uD329 \uAD6C\uC131\uC744 \uCD94\uAC00\uD558\uAE30 \uC804\uC5D0 Next.js\uAC00 \uC774\uBBF8 \uADC0\uD558\uC758 \uC0AC\uC6A9 \uC0AC\uB840\uB97C \uC9C0\uC6D0\uD558\uB294\uC9C0 \uD655\uC778\uD558\uC2ED\uC2DC\uC624:</p><ul><li>CSS \uC784\uD3EC\uD2B8</li><li>CSS \uBAA8\uB4C8</li><li>Sass/SCSS \uC784\uD3EC\uD2B8</li><li>Sass/SCSS \uBAA8\uB4C8</li></ul><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),u=p(`<p>\uC77C\uBD80 \uC790\uC8FC \uC694\uCCAD\uB418\uB294 \uAE30\uB2A5\uC740 \uD50C\uB7EC\uADF8\uC778\uC73C\uB85C \uC81C\uACF5\uB429\uB2C8\uB2E4:</p><ul><li>@next/mdx</li><li>@next/bundle-analyzer</li></ul><p>\uC6F9\uD329\uC758 \uC0AC\uC6A9\uC744 \uD655\uC7A5\uD558\uAE30 \uC704\uD574 next.config.js \uB0B4\uC5D0\uC11C \uAD6C\uC131(config)\uC744 \uD655\uC7A5\uD558\uB294 \uD568\uC218\uB97C \uC815\uC758\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC544\uB798\uC640 \uAC19\uC774:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">webpack</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">config<span class="token punctuation">,</span> <span class="token punctuation">{</span> buildId<span class="token punctuation">,</span> dev<span class="token punctuation">,</span> isServer<span class="token punctuation">,</span> defaultLoaders<span class="token punctuation">,</span> nextRuntime<span class="token punctuation">,</span> webpack <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \uC911\uC694: \uC218\uC815\uB41C \uAD6C\uC131\uC744 \uBC18\uD658\uD558\uC138\uC694</span>
    <span class="token keyword">return</span> config<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),d=p('<blockquote><p>\uC6F9\uD329 \uD568\uC218\uB294 \uC11C\uBC84(nodejs / edge \uC2E4\uD589 \uD658\uACBD)\uC5D0 \uB300\uD574 \uB450 \uBC88, \uD074\uB77C\uC774\uC5B8\uD2B8\uC5D0 \uB300\uD574 \uD55C \uBC88 \uC2E4\uD589\uB429\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574 isServer \uC18D\uC131\uC744 \uC0AC\uC6A9\uD558\uC5EC \uD074\uB77C\uC774\uC5B8\uD2B8\uC640 \uC11C\uBC84 \uAD6C\uC131\uC744 \uAD6C\uBD84\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p></blockquote><p>\uC6F9\uD329 \uD568\uC218\uC758 \uB450 \uBC88\uC9F8 \uC778\uC218\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC18D\uC131\uC744 \uAC00\uC9C4 \uAC1D\uCCB4\uC785\uB2C8\uB2E4:</p><ul><li>buildId: String - \uBE4C\uB4DC id\uB85C \uB450 \uBE4C\uB4DC \uAC04\uC5D0 \uACE0\uC720 \uC2DD\uBCC4\uC790\uB85C \uC0AC\uC6A9\uB429\uB2C8\uB2E4.</li><li>dev: Boolean - \uCEF4\uD30C\uC77C\uC774 \uAC1C\uBC1C \uC911\uC5D0 \uC218\uD589\uB420\uC9C0 \uC5EC\uBD80\uB97C \uB098\uD0C0\uB0C5\uB2C8\uB2E4.</li><li>isServer: Boolean - \uC11C\uBC84 \uCE21 \uCEF4\uD30C\uC77C\uC5D0 \uB300\uD574\uC11C\uB294 true\uC774\uBA70, \uD074\uB77C\uC774\uC5B8\uD2B8 \uCE21 \uCEF4\uD30C\uC77C\uC5D0 \uB300\uD574\uC11C\uB294 false\uC785\uB2C8\uB2E4.</li><li>nextRuntime: String | undefined - \uC11C\uBC84 \uCE21 \uCEF4\uD30C\uC77C\uC744 \uC704\uD55C \uB300\uC0C1 \uB7F0\uD0C0\uC784; &quot;edge&quot; \uB610\uB294 &quot;nodejs&quot; \uC911 \uD558\uB098\uC774\uBA70, \uD074\uB77C\uC774\uC5B8\uD2B8 \uCE21 \uCEF4\uD30C\uC77C\uC5D0 \uB300\uD574\uC11C\uB294 \uC815\uC758\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</li><li>defaultLoaders: Object - Next.js\uC5D0\uC11C \uB0B4\uBD80\uC801\uC73C\uB85C \uC0AC\uC6A9\uB418\uB294 \uAE30\uBCF8 \uB85C\uB354: babel: Object - \uAE30\uBCF8 babel-loader \uAD6C\uC131</li></ul><p>defaultLoaders.babel \uC0AC\uC6A9 \uC608\uC2DC:</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),r=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \uBCA0\uC774\uBE14 \uB85C\uB354\uC5D0 \uC758\uC874\uD558\uB294 \uB85C\uB354\uB97C \uCD94\uAC00\uD558\uB294 \uC608\uC2DC \uC124\uC815</span>
<span class="token comment">// \uC774 \uC18C\uC2A4\uB294 @next/mdx \uD50C\uB7EC\uADF8\uC778 \uC18C\uC2A4\uC5D0\uC11C \uAC00\uC838\uC654\uC2B5\uB2C8\uB2E4:</span>
<span class="token comment">// https://github.com/vercel/next.js/tree/canary/packages/next-mdx</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">webpack</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">config<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    config<span class="token punctuation">.</span>module<span class="token punctuation">.</span>rules<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.mdx</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        options<span class="token punctuation">.</span>defaultLoaders<span class="token punctuation">.</span>babel<span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;@mdx-js/loader&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> pluginOptions<span class="token punctuation">.</span>options<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> config<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="nextruntime" tabindex="-1"><a class="header-anchor" href="#nextruntime" aria-hidden="true">#</a> nextRuntime</h4><p>nextRuntime\uC774 &quot;edge&quot; \uB610\uB294 &quot;nodejs&quot;\uC778 \uACBD\uC6B0 isServer\uAC00 true\uC784\uC744 \uC54C \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD604\uC7AC nextRuntime &quot;edge&quot;\uB294 \uBBF8\uB4E4\uC6E8\uC5B4 \uBC0F \uC5D0\uC9C0 \uB7F0\uD0C0\uC784\uC5D0\uC11C\uB9CC \uC11C\uBC84 \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC704\uD55C \uAC83\uC785\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,4);function k(v,m){return n(),l("div",null,[c,(n(),a(t("script"),null,{default:s(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),u,(n(),a(t("script"),null,{default:s(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),d,(n(),a(t("script"),null,{default:s(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),r,(n(),a(t("script"),null,{default:s(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1}))])}var _=o(i,[["render",k],["__file","index.html.vue"]]);export{_ as default};
