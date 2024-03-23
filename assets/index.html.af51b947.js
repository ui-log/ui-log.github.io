import{_ as p,o as n,c as i,a as e,w as t,b as a,r as l,d as o,e as s}from"./app.252b99df.js";const c={},r=o(`<h1 id="css-in-js" tabindex="-1"><a class="header-anchor" href="#css-in-js" aria-hidden="true">#</a> CSS-in-JS</h1><p>\uC5B4\uB5A4 CSS-in-JS \uC194\uB8E8\uC158\uC744 \uC0AC\uC6A9\uD574\uB3C4 \uAD1C\uCC2E\uC544\uC694. \uAC00\uC7A5 \uAC04\uB2E8\uD55C \uBC29\uBC95\uC740 \uC778\uB77C\uC778 \uC2A4\uD0C0\uC77C\uC744 \uC774\uC6A9\uD558\uB294 \uAC83\uC774\uC5D0\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">HiThere</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>p style<span class="token operator">=</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span> <span class="token punctuation">}</span><span class="token operator">&gt;</span>hi there<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> HiThere
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC6B0\uB9AC\uB294 styled-jsx\uB97C \uBC88\uB4E4\uD558\uC5EC \uACA9\uB9AC\uB41C \uBC94\uC704\uC758 CSS\uB97C \uC9C0\uC6D0\uD574\uC694. \uBAA9\uD45C\uB294 \uC6F9 \uAD6C\uC131 \uC694\uC18C\uC640 \uBE44\uC2B7\uD55C &quot;\uADF8\uB9BC\uC790 CSS&quot;\uB97C \uC9C0\uC6D0\uD558\uB294 \uAC83\uC774\uC5D0\uC694. \uC11C\uBC84 \uB80C\uB354\uB9C1\uC744 \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 JS\uB9CC\uC73C\uB85C \uC774\uB904\uC9C4 \uC6F9 \uAD6C\uC131 \uC694\uC18C\uC640 \uC720\uC0AC\uD55C \uAE30\uC220\uC774\uB77C\uACE0 \uD560 \uC218 \uC788\uC8E0.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),d=o(`<p>\uC704\uC758 \uC608\uC81C\uB97C \uCC38\uACE0\uD558\uC5EC \uC2A4\uD0C0\uC77C\uB4DC \uCEF4\uD3EC\uB10C\uD2B8\uC640 \uAC19\uC740 \uC778\uAE30\uC788\uB294 CSS-in-JS \uC194\uB8E8\uC158\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>styled-jsx\uB97C \uC0AC\uC6A9\uD55C \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC74C\uACFC \uAC19\uC774 \uBCF4\uC785\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">HelloWorld</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      Hello world
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>scoped<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>style jsx<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
        p {
          color: blue;
        }
        div {
          background: red;
        }
        @media (max-width: 600px) {
          div {
            background: blue;
          }
        }
      </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>style global jsx<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
        body {
          background: black;
        }
      </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> HelloWorld<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uB354 \uB9CE\uC740 \uC608\uC81C\uB97C \uBCF4\uB824\uBA74 styled-jsx \uBB38\uC11C\uB97C \uCC38\uACE0\uD574\uC8FC\uC138\uC694.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),u=s("h3",{id:"\u110C\u1161\u1107\u1161\u1109\u1173\u110F\u1173\u1105\u1175\u11B8\u1110\u1173-\u1107\u1175\u1112\u116A\u11AF\u1109\u1165\u11BC\u1112\u116A",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u110C\u1161\u1107\u1161\u1109\u1173\u110F\u1173\u1105\u1175\u11B8\u1110\u1173-\u1107\u1175\u1112\u116A\u11AF\u1109\u1165\u11BC\u1112\u116A","aria-hidden":"true"},"#"),a(" \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uBE44\uD65C\uC131\uD654")],-1),v=s("p",null,"\uB124, \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uB97C \uBE44\uD65C\uC131\uD654\uD558\uBA74 CSS\uB294 \uC5EC\uC804\uD788 \uD504\uB85C\uB355\uC158 \uBE4C\uB4DC(next start)\uC5D0\uC11C \uB85C\uB4DC\uB429\uB2C8\uB2E4. \uAC1C\uBC1C \uC911\uC5D0\uB294 \uCD5C\uC0C1\uC758 \uAC1C\uBC1C\uC790 \uACBD\uD5D8\uC744 \uC81C\uACF5\uD558\uAE30 \uC704\uD574 \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uB97C \uD65C\uC131\uD654\uD574\uC57C \uD569\uB2C8\uB2E4. Fast Refresh\uB97C \uC0AC\uC6A9\uD558\uB824\uBA74 JavaScript\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4.",-1),k=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1);function b(m,g){return n(),i("div",null,[r,(n(),e(l("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),d,(n(),e(l("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),u,v,k,(n(),e(l("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1}))])}var h=p(c,[["render",b],["__file","index.html.vue"]]);export{h as default};
