import{_ as c}from"./app.3052dcfb.js";import{l as n,m as l,E as t,G as e,p as s,Y as o,C as a,K as p}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var i="/assets/BuildingandDeployingaSimpleWebAppwithFastAPIReactandDocker_0.11c66ad0.png";const r={},d=a("p",null,[a("img",{src:i,alt:"Building and Deploying a Simple Web App with FastAPI, React, and Docker"})],-1),u=a("p",null,"\uC6F9 \uAC1C\uBC1C\uC758 \uBE60\uB974\uAC8C \uBCC0\uD654\uD558\uB294 \uD658\uACBD\uC5D0\uC11C, \uACAC\uACE0\uD55C \uBC31\uC5D4\uB4DC \uD504\uB808\uC784\uC6CC\uD06C\uC640 \uB3D9\uC801\uC778 \uD504\uB860\uD2B8\uC5D4\uB4DC \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uACB0\uD569\uD558\uB294 \uAC83\uC774 \uD6A8\uC728\uC801\uC778 \uD504\uB85C\uC81D\uD2B8 \uC124\uC815\uC758 \uD575\uC2EC\uC785\uB2C8\uB2E4. GitHub\uC758 plain-fastapi-react-docker \uB808\uD3EC\uC9C0\uD1A0\uB9AC\uB294 FastAPI, React \uBC0F Docker\uB97C \uD1B5\uD569\uD558\uC5EC \uAC04\uB2E8\uD55C \uC6F9 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC704\uD55C \uC2EC\uD50C\uD55C \uAC1C\uBC1C \uD658\uACBD\uC744 \uB9CC\uB4DC\uB294 \uD3EC\uAD04\uC801\uC778 \uC608\uC81C\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC774 \uAE00\uC5D0\uC11C\uB294 \uC774 \uD504\uB85C\uC81D\uD2B8\uB97C \uC0AC\uC6A9\uD558\uACE0 \uC218\uC815\uD558\uBA70 \uC124\uC815\uD558\uB294 \uBC29\uBC95\uC744 \uD0D0\uAD6C\uD558\uC5EC \uAC1C\uBC1C\uC790\uB4E4\uC774 Docker\uD654\uB41C \uD658\uACBD\uC744 \uD65C\uC6A9\uD558\uC5EC \uD480 \uC2A4\uD0DD \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uAC1C\uBC1C\uD558\uB294 \uB370 \uB3C4\uC6C0\uC744 \uC90D\uB2C8\uB2E4.",-1),k=a("h1",{id:"\u1111\u1173\u1105\u1169\u110C\u1166\u11A8\u1110\u1173-\u1100\u116E\u110C\u1169-\u1100\u1162\u110B\u116D",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u1111\u1173\u1105\u1169\u110C\u1166\u11A8\u1110\u1173-\u1100\u116E\u110C\u1169-\u1100\u1162\u110B\u116D","aria-hidden":"true"},"#"),s(" \uD504\uB85C\uC81D\uD2B8 \uAD6C\uC870 \uAC1C\uC694")],-1),h=a("p",null,"plain-fastapi-react-docker \uD504\uB85C\uC81D\uD2B8\uB294 \uBC31\uC5D4\uB4DC API\uAC00 FastAPI\uB97C \uC0AC\uC6A9\uD558\uC5EC \uAD6C\uCD95\uB418\uB294 \uBBF8\uB2C8\uBA40\uD55C \uC124\uC815\uC744 \uAC16\uCD94\uACE0 \uC788\uC2B5\uB2C8\uB2E4. FastAPI\uB294 \uD45C\uC900 Python \uD0C0\uC785 \uD78C\uD2B8\uB97C \uBC14\uD0D5\uC73C\uB85C \uD558\uB294 Python 3.7+\uC6A9 \uD604\uB300\uC801\uC774\uACE0 \uBE60\uB978(\uACE0\uC131\uB2A5) \uC6F9 \uD504\uB808\uC784\uC6CC\uD06C\uC785\uB2C8\uB2E4. \uD504\uB860\uD2B8\uC5D4\uB4DC\uB294 React\uB97C \uD65C\uC6A9\uD558\uBA70, \uC774\uB294 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uAD6C\uCD95\uD558\uAE30 \uC704\uD55C JavaScript \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB85C, \uD2B9\uD788 \uC2F1\uAE00 \uD398\uC774\uC9C0 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uAD6C\uCD95\uD558\uB294 \uB370 \uC801\uD569\uD569\uB2C8\uB2E4.",-1),g=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),m=a("p",null,"\uD504\uB85C\uC81D\uD2B8 \uB514\uB809\uD1A0\uB9AC\uC5D0 \uB300\uD55C \uAC04\uB2E8\uD55C \uAC1C\uC694\uC785\uB2C8\uB2E4:",-1),v=a("ul",null,[a("li",null,"backend/\uB294 Docker \uCEE8\uD14C\uC774\uB108 \uC124\uC815\uC744 \uC704\uD55C Dockerfile\uACFC requirements.txt\uC5D0 \uB098\uC5F4\uB41C Python \uC885\uC18D\uC131\uC744 \uD3EC\uD568\uD55C \uBAA8\uB4E0 FastAPI \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uD30C\uC77C\uC744 \uD3EC\uD568\uD569\uB2C8\uB2E4."),a("li",null,"frontend/\uB294 React \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uACFC \uC774\uB97C \uCEE8\uD14C\uC774\uB108\uD654\uD558\uAE30 \uC704\uD55C Dockerfile, npm \uC885\uC18D\uC131\uC744 \uAD00\uB9AC\uD558\uAE30 \uC704\uD55C package.json\uC744 \uD3EC\uD568\uD569\uB2C8\uB2E4.")],-1),b=a("p",null,"\uB450 \uAD6C\uC131 \uC694\uC18C\uB294 Docker Compose\uB97C \uC0AC\uC6A9\uD558\uC5EC \uD568\uAED8 \uC791\uB3D9\uD558\uB3C4\uB85D \uC870\uC815\uB418\uC5B4 \uC788\uC73C\uBA70, \uC774\uB97C \uD1B5\uD574 \uBA40\uD2F0 \uCEE8\uD14C\uC774\uB108 Docker \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uC124\uC815\uC774 \uAC04\uC18C\uD654\uB429\uB2C8\uB2E4.",-1),_=a("h1",{id:"\u1109\u1175\u110C\u1161\u11A8\u1112\u1161\u1100\u1175",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u1109\u1175\u110C\u1161\u11A8\u1112\u1161\u1100\u1175","aria-hidden":"true"},"#"),s(" \uC2DC\uC791\uD558\uAE30")],-1),f=a("p",null,"\uC774 \uD504\uB85C\uC81D\uD2B8\uB97C \uC2DC\uC791\uD558\uB824\uBA74 \uC2DC\uC2A4\uD15C\uC5D0 Docker \uBC0F Docker Compose\uAC00 \uC124\uCE58\uB418\uC5B4 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uC774 \uB3C4\uAD6C\uB4E4\uC740 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uAD6C\uC131 \uC694\uC18C\uC6A9 \uCEE8\uD14C\uC774\uB108\uB97C \uB9CC\uB4E4\uACE0 \uAD00\uB9AC\uD558\uB294 \uB370 \uB3C4\uC6C0\uC774 \uB429\uB2C8\uB2E4.",-1),y=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),w=p(`<p>\uB808\uD3EC\uC9C0\uD1A0\uB9AC\uB97C \uBCF5\uC81C\uD558\uC138\uC694: \uB85C\uCEEC \uBA38\uC2E0\uC5D0 \uB808\uD3EC\uC9C0\uD1A0\uB9AC\uB97C \uBCF5\uC81C\uD558\uB294 \uAC83\uC73C\uB85C \uC2DC\uC791\uD569\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>git clone https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>chigwell<span class="token operator">/</span>plain<span class="token operator">-</span>fastapi<span class="token operator">-</span>react<span class="token operator">-</span>docker<span class="token punctuation">.</span>git
cd plain<span class="token operator">-</span>fastapi<span class="token operator">-</span>react<span class="token operator">-</span>docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\uB3C4\uCEE4 \uCEF4\uD3EC\uC988\uB85C \uBE4C\uB4DC \uBC0F \uC2E4\uD589: \uB3C4\uCEE4 \uCEF4\uD3EC\uC988\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC774\uBBF8\uC9C0\uB97C \uBE4C\uB4DC\uD558\uACE0 \uCEE8\uD14C\uC774\uB108\uB97C \uC2E4\uD589\uD558\uC138\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>docker<span class="token operator">-</span>compose up <span class="token operator">--</span>build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),x=p(`<p>\uC774 \uBA85\uB839\uC740 docker-compose.yml\uC5D0 \uC815\uC758\uB41C \uCEE8\uD14C\uC774\uB108\uB97C \uC2DC\uC791\uD558\uACE0 Docker \uC774\uBBF8\uC9C0\uB97C \uCEF4\uD30C\uC77C\uD569\uB2C8\uB2E4. \uC2E4\uD589 \uC911\uC5D0\uB294 FastAPI \uBC31\uC5D4\uB4DC\uB97C http://localhost:80/\uC5D0\uC11C, React \uD504\uB860\uD2B8\uC5D4\uB4DC\uB97C http://localhost:3000/\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h1 id="api-\u1110\u1161\u11B7\u1109\u1162\u11A8-\u1106\u1175\u11BE-\u1109\u116E\u110C\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#api-\u1110\u1161\u11B7\u1109\u1162\u11A8-\u1106\u1175\u11BE-\u1109\u116E\u110C\u1165\u11BC" aria-hidden="true">#</a> API \uD0D0\uC0C9 \uBC0F \uC218\uC815</h1><p>FastAPI \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uB294 JSON \uC751\uB2F5\uC744 \uBC18\uD658\uD558\uB294 \uAC04\uB2E8\uD55C \uC5D4\uB4DC\uD3EC\uC778\uD2B8\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. backend/app/main.py \uD30C\uC77C\uC744 \uC218\uC815\uD558\uC5EC\uC774 API\uB97C \uBCC0\uACBD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4, \uC0C8\uB85C\uC6B4 \uC5D4\uB4DC\uD3EC\uC778\uD2B8\uB97C \uCD94\uAC00\uD558\uB294 \uAC83\uC740 \uB2E4\uC74C\uACFC \uAC19\uC774 \uBCF4\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>@app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/api/greet/{name}&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">async</span> def <span class="token function">greet</span><span class="token punctuation">(</span>name<span class="token operator">:</span> str<span class="token punctuation">)</span><span class="token operator">:</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string-property property">&quot;message&quot;</span><span class="token operator">:</span> f<span class="token string">&quot;Hello, {name}!&quot;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),A=p(`<p>\uC774 \uD568\uC218\uB294 \uC0AC\uC6A9\uC790\uC758 \uC774\uB984\uC73C\uB85C \uC778\uC0AC\uD558\uB294 \uC0C8 \uACBD\uB85C\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4. \uC774 \uC0C8 \uC5D4\uB4DC\uD3EC\uC778\uD2B8\uB294 http://localhost:80/api/greet/yourname\uC5D0\uC11C \uC561\uC138\uC2A4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h1 id="\u1111\u1173\u1105\u1169\u11AB\u1110\u1173\u110B\u1166\u11AB\u1103\u1173-\u1100\u1162\u1109\u1165\u11AB\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1111\u1173\u1105\u1169\u11AB\u1110\u1173\u110B\u1166\u11AB\u1103\u1173-\u1100\u1162\u1109\u1165\u11AB\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uC120\uD558\uAE30</h1><p>frontend/src/App.js\uC5D0 \uC788\uB294 React \uC124\uC815\uC740 FastAPI \uBC31\uC5D4\uB4DC\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uAC00\uC838\uC640 \uD45C\uC2DC\uD569\uB2C8\uB2E4. \uC774\uB97C \uD655\uC7A5\uD558\uAE30 \uC704\uD574 \uCD94\uAC00\uC801\uC778 UI \uAD6C\uC131 \uC694\uC18C\uB97C \uAD6C\uD604\uD558\uAC70\uB098 \uC815\uC758\uD55C \uB2E4\uB978 API \uC5D4\uB4DC\uD3EC\uC778\uD2B8\uC5D0 \uC5F0\uACB0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4, \uC704\uC5D0 \uCD94\uAC00\uB41C \uC0C8 \uC5D4\uB4DC\uD3EC\uC778\uD2B8\uC640 \uC0C1\uD638 \uC791\uC6A9\uD558\uB824\uBA74:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;http://0.0.0.0:80/api/greet/World&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=&gt;</span> <span class="token function">setMessage</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),D=a("h1",{id:"\u1100\u1167\u11AF\u1105\u1169\u11AB",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u1100\u1167\u11AF\u1105\u1169\u11AB","aria-hidden":"true"},"#"),s(" \uACB0\uB860")],-1),P=a("p",null,'plain-fastapi-react-docker \uD504\uB85C\uC81D\uD2B8\uB294 Docker\uB97C \uC0AC\uC6A9\uD558\uC5EC full-stack \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uB9CC\uB4DC\uB294 \uAC04\uB2E8\uD55C \uBC29\uBC95\uC744 \uBCF4\uC5EC\uC90D\uB2C8\uB2E4. \uD504\uB860\uD2B8\uC5D4\uB4DC\uC640 \uBC31\uC5D4\uB4DC\uB97C \uBCC4\uB3C4\uC758 \uCEE8\uD14C\uC774\uB108\uB85C \uBD84\uB9AC\uD568\uC73C\uB85C\uC368, \uAC1C\uBC1C\uC790\uB294 \uC885\uC18D\uC131\uACFC \uD658\uACBD\uC744 \uB354 \uD6A8\uC728\uC801\uC73C\uB85C \uAD00\uB9AC\uD560 \uC218 \uC788\uC5B4\uC11C "\uB0B4 \uCEF4\uD4E8\uD130\uC5D0\uC11C\uB294 \uC791\uB3D9\uD558\uB294\uB370" \uBB38\uC81C\uB97C \uC904\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uACBD\uD5D8 \uB9CE\uC740 \uAC1C\uBC1C\uC790\uB4E0 \uCD08\uBCF4\uB4E0, \uC774 \uC800\uC7A5\uC18C\uB294 \uC624\uB298 \uC81C\uACF5\uB418\uB294 \uAC00\uC7A5 \uAC15\uB825\uD55C \uB3C4\uAD6C\uB4E4\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC6F9 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uAD6C\uCD95\uD558\uACE0 \uD655\uC7A5\uD558\uB294 \uB370 \uACAC\uACE0\uD55C \uAE30\uBC18\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.',-1);function j(I,F){return n(),l("div",null,[d,u,k,h,g,(n(),t(o("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),m,v,b,_,f,y,(n(),t(o("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),w,(n(),t(o("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),x,(n(),t(o("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),A,(n(),t(o("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),D,P])}var E=c(r,[["render",j],["__file","index.html.vue"]]);export{E as default};