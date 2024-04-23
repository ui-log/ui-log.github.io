import{_ as l}from"./app.d68f74da.js";import{l as s,m as i,E as n,G as e,p as t,Y as o,C as a,K as p}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var c="/assets/DockerizeReactapplicationswithNginx_0.1103974a.png";const d={},r=a("p",null,[a("img",{src:c,alt:"Dockerize React applications with Nginx"})],-1),u=a("p",null,"Nginx\uB97C \uC0AC\uC6A9\uD558\uC5EC React \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 Docker\uD654\uD558\uB294 \uAC83\uC740 \uCEE8\uD14C\uC774\uB108 \uD658\uACBD\uC5D0\uC11C \uC6F9 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uBC30\uD3EC\uD558\uB294 \uC77C\uBC18\uC801\uC778 \uBC29\uBC95\uC785\uB2C8\uB2E4. \uC544\uB798\uC5D0\uC11C React \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 Nginx\uC640 \uD568\uAED8 Docker\uD654\uD558\uB294 \uB2E8\uACC4\uBCC4 \uAC00\uC774\uB4DC\uB97C \uC81C\uACF5\uD574 \uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4.",-1),v=a("p",null,"\uB2E8\uACC4 1: React \uC571 \uC124\uC815\uD558\uAE30",-1),k=a("p",null,"\uC774\uBBF8 React \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uC788\uC744 \uAC83\uC73C\uB85C \uAC00\uC815\uD558\uACE0, \uAD6C\uC870\uD654\uB418\uC5B4 \uC788\uACE0 \uC815\uC0C1\uC801\uC73C\uB85C \uC791\uB3D9\uD558\uB294\uC9C0 \uD655\uC778\uD558\uC138\uC694.",-1),b=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),m=p(`<h2 id="\u1103\u1161\u11AB\u1100\u1168-2-dockerfile-\u1106\u1161\u11AB\u1103\u1173\u11AF\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u1100\u1168-2-dockerfile-\u1106\u1161\u11AB\u1103\u1173\u11AF\u1100\u1175" aria-hidden="true">#</a> \uB2E8\uACC4 2: Dockerfile \uB9CC\uB4E4\uAE30</h2><p>React \uC571\uC758 \uB8E8\uD2B8 \uB514\uB809\uD1A0\uB9AC\uC5D0 Dockerfile\uC744 \uC0DD\uC131\uD558\uC138\uC694. \uC774 \uD30C\uC77C\uC740 \uC5B4\uB5BB\uAC8C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 Docker \uCEE8\uD14C\uC774\uB108 \uB0B4\uC5D0\uC11C \uBE4C\uB4DC\uB418\uACE0 \uC2E4\uD589\uB420\uC9C0 \uC815\uC758\uD569\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code># \uACF5\uC2DD Node<span class="token punctuation">.</span>js \uB7F0\uD0C0\uC784\uC744 \uBCA0\uC774\uC2A4 \uC774\uBBF8\uC9C0\uB85C \uC0AC\uC6A9
<span class="token constant">FROM</span> <span class="token literal-property property">node</span><span class="token operator">:</span><span class="token number">18</span> <span class="token keyword">as</span> build

# \uCEE8\uD14C\uC774\uB108 \uB0B4\uC758 \uC791\uC5C5 \uB514\uB809\uD1A0\uB9AC \uC124\uC815
<span class="token constant">WORKDIR</span> <span class="token operator">/</span>app

# <span class="token keyword">package</span><span class="token punctuation">.</span>json \uBC0F <span class="token keyword">package</span><span class="token operator">-</span>lock<span class="token punctuation">.</span>json\uC744 \uC791\uC5C5 \uB514\uB809\uD1A0\uB9AC\uB85C \uBCF5\uC0AC
<span class="token constant">COPY</span> <span class="token keyword">package</span><span class="token operator">*</span><span class="token punctuation">.</span>json <span class="token punctuation">.</span><span class="token operator">/</span>

# \uC758\uC874\uC131 \uC124\uCE58
<span class="token constant">RUN</span> npm install

# \uC804\uCCB4 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uCF54\uB4DC\uB97C \uCEE8\uD14C\uC774\uB108\uB85C \uBCF5\uC0AC
<span class="token constant">COPY</span> <span class="token punctuation">.</span> <span class="token punctuation">.</span>

# \uD504\uB85C\uB355\uC158\uC6A9\uC73C\uB85C React \uC571 \uBE4C\uB4DC
<span class="token constant">RUN</span> npm run build

# \uD504\uB85C\uB355\uC158 \uC11C\uBC84\uB85C Nginx \uC0AC\uC6A9
<span class="token constant">FROM</span> <span class="token literal-property property">nginx</span><span class="token operator">:</span>alpine

# \uBE4C\uB4DC\uB41C React \uC571\uC744 Nginx\uC758 \uC6F9 \uC11C\uBC84 \uB514\uB809\uD130\uB9AC\uB85C \uBCF5\uC0AC
<span class="token constant">COPY</span> <span class="token operator">--</span>from<span class="token operator">=</span>build <span class="token operator">/</span>app<span class="token operator">/</span>build <span class="token operator">/</span>usr<span class="token operator">/</span>share<span class="token operator">/</span>nginx<span class="token operator">/</span>html

# Nginx \uC11C\uBC84\uB97C \uC704\uD574 \uD3EC\uD2B8 <span class="token number">80</span> \uB178\uCD9C
<span class="token constant">EXPOSE</span> <span class="token number">80</span>

# \uCEE8\uD14C\uC774\uB108 \uC2E4\uD589 \uC2DC Nginx \uC2DC\uC791
<span class="token constant">CMD</span> <span class="token punctuation">[</span><span class="token string">&quot;nginx&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-g&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;daemon off;&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1103\u1161\u11AB\u1100\u1168-3-dockerignore-\u1111\u1161\u110B\u1175\u11AF-\u1106\u1161\u11AB\u1103\u1173\u11AF\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u1100\u1168-3-dockerignore-\u1111\u1161\u110B\u1175\u11AF-\u1106\u1161\u11AB\u1103\u1173\u11AF\u1100\u1175" aria-hidden="true">#</a> \uB2E8\uACC4 3: .dockerignore \uD30C\uC77C \uB9CC\uB4E4\uAE30</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),g=p(`<p>\uB3D9\uC77C\uD55C \uB514\uB809\uD1A0\uB9AC\uC5D0 .dockerignore \uD30C\uC77C\uC744 \uC0DD\uC131\uD558\uC5EC Docker \uC774\uBBF8\uC9C0\uB85C \uBCF5\uC0AC\uB418\uC9C0 \uC54A\uB3C4\uB85D \uBD88\uD544\uC694\uD55C \uD30C\uC77C\uACFC \uB514\uB809\uD1A0\uB9AC\uB97C \uC81C\uC678\uD574\uC8FC\uC138\uC694.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>node_modules
build
npm<span class="token operator">-</span>debug<span class="token punctuation">.</span>log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uB2E8\uACC4 4: Docker \uC774\uBBF8\uC9C0 \uBE4C\uB4DC\uD558\uAE30</p><p>\uD130\uBBF8\uB110\uC744 \uC5F4\uACE0 React \uC571\uC758 \uB8E8\uD2B8 \uB514\uB809\uD1A0\uB9AC(\uC5EC\uAE30\uC5D0 Dockerfile\uC774 \uC788\uB294 \uACF3)\uB85C \uC774\uB3D9\uD55C \uB2E4\uC74C Docker \uC774\uBBF8\uC9C0\uB97C \uBE4C\uB4DC\uD574\uC8FC\uC138\uC694.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),h=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>docker build <span class="token operator">-</span>t react<span class="token operator">-</span>nginx<span class="token operator">-</span>app <span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uC774 \uBA85\uB839\uC740 react-nginx-app\uC774\uB77C\uB294 Docker \uC774\uBBF8\uC9C0\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4. \uBE4C\uB4DC \uCEE8\uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD558\uAE30 \uC704\uD574 \uBA85\uB839 \uB05D\uC5D0 \uC810\uC744 \uD3EC\uD568\uD574\uC57C \uD569\uB2C8\uB2E4.</p><p>\uB2E8\uACC4 5: Docker \uCEE8\uD14C\uC774\uB108 \uC2E4\uD589</p><p>Docker \uC774\uBBF8\uC9C0\uB97C \uBE4C\uB4DC\uD55C \uD6C4\uC5D0 \uCEE8\uD14C\uC774\uB108\uB97C \uC2E4\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),_=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>\uB3C4\uCEE4 run <span class="token operator">--</span>name react<span class="token operator">-</span>nginx<span class="token operator">-</span>app <span class="token operator">-</span>p <span class="token number">8080</span><span class="token operator">:</span><span class="token number">80</span> <span class="token operator">-</span>d react<span class="token operator">-</span>nginx<span class="token operator">-</span>app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uC774 \uBA85\uB839\uC740 \uCEE8\uD14C\uC774\uB108\uB97C \uBD84\uB9AC\uB41C \uBAA8\uB4DC(-d)\uB85C \uC2E4\uD589\uD558\uACE0 \uD638\uC2A4\uD2B8 \uBA38\uC2E0\uC758 \uD3EC\uD2B8 8080\uC744 \uCEE8\uD14C\uC774\uB108 \uB0B4\uBD80\uC758 \uD3EC\uD2B8 80\uC5D0 \uB9E4\uD551\uD569\uB2C8\uB2E4.</p><p>\uC2A4\uD15D 6: React \uC571\uC5D0 \uC811\uC18D\uD558\uAE30</p><p>\uC774\uC81C \uC6F9 \uBE0C\uB77C\uC6B0\uC800\uB97C \uC5F4\uACE0 http://localhost:8080 \uB610\uB294 \uC9C0\uC815\uD55C \uD638\uC2A4\uD2B8\uC640 \uD3EC\uD2B8\uB85C \uC774\uB3D9\uD558\uC5EC React \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uC811\uC18D\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),y=a("p",null,"\uACB0\uB860",-1),f=a("p",null,"Nginx\uB97C \uC0AC\uC6A9\uD558\uC5EC React \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uB3C4\uCEE4\uD654\uD558\uBA74 \uB2E4\uC591\uD55C \uD658\uACBD\uC5D0 \uC571\uC744 \uBC30\uD3EC\uD558\uB294 \uC2E0\uB8B0\uD560 \uC218 \uC788\uB294 \uBC29\uBC95\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC774 \uBC29\uBC95\uC744 \uD1B5\uD574 \uBC30\uD3EC\uAC00 \uAC04\uC18C\uD654\uB418\uACE0 \uB2E4\uC591\uD55C \uD50C\uB7AB\uD3FC \uAC04\uC5D0 \uC77C\uAD00\uC131\uC744 \uBCF4\uC7A5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),x=a("p",null,"\uCF54\uB529\uC744 \uC990\uAE30\uC138\uC694!",-1);function w(R,D){return s(),i("div",null,[r,u,v,k,b,(s(),n(o("script"),null,{default:e(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),m,(s(),n(o("script"),null,{default:e(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),g,(s(),n(o("script"),null,{default:e(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),h,(s(),n(o("script"),null,{default:e(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),_,(s(),n(o("script"),null,{default:e(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),y,f,x])}var E=l(d,[["render",w],["__file","index.html.vue"]]);export{E as default};
