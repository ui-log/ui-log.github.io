import{_ as p}from"./app.3052dcfb.js";import{l as t,m as d,E as o,G as e,p as a,Y as l,C as s,K as n}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var i="/assets/HowToDeployAReactAppToAWSS3_1.c853a27a.png",c="/assets/HowToDeployAReactAppToAWSS3_2.5fe37a90.png",u="/assets/HowToDeployAReactAppToAWSS3_3.944e16dc.png",r="/assets/HowToDeployAReactAppToAWSS3_4.bd0887db.png",_="/assets/HowToDeployAReactAppToAWSS3_5.27cc940f.png",g="/assets/HowToDeployAReactAppToAWSS3_6.3fc65fbb.png",h="/assets/HowToDeployAReactAppToAWSS3_7.06f23a7a.png",b="/assets/HowToDeployAReactAppToAWSS3_8.ebf6d497.png",y="/assets/HowToDeployAReactAppToAWSS3_9.7718abbd.png",m="/assets/HowToDeployAReactAppToAWSS3_10.84b24eac.png",v="/assets/HowToDeployAReactAppToAWSS3_11.42599ee7.png";const f={},w=s("p",null,"\uB9AC\uC561\uD2B8 \uC571\uC744 \uBC30\uD3EC\uD558\uACE0 \uBCFC \uC218 \uC788\uB294 \uAC00\uC7A5 \uBE60\uB978 \uBC29\uBC95 \uC911 \uD558\uB098\uB294 \uD638\uC2A4\uD305\uC774\uB098 \uB3C4\uBA54\uC778 \uC774\uB984\uC5D0 \uB3C8\uC744 \uC9C0\uBD88\uD558\uC9C0 \uC54A\uACE0 AWS S3\uC5D0 \uBC30\uD3EC\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4.",-1),A=s("p",null,[a("\uC774\uBBF8\uC9C0\uB97C \uCC38\uC870\uD558\uC138\uC694: "),s("a",{href:"./img/HowToDeployAReactAppToAWSS3_0.png"},"HowToDeployAReactAppToAWSS3_0.png")],-1),k=s("p",null,"AWS S3\uB294 \uB300\uB7C9\uC758 \uBE44\uAD6C\uC870\uD654\uB41C \uB370\uC774\uD130\uB97C \uC800\uC7A5\uD560 \uC218 \uC788\uB294 \uC800\uC7A5 \uC11C\uBE44\uC2A4\uC785\uB2C8\uB2E4. \uC77C\uBC18\uC801\uC73C\uB85C S3\uC5D0\uB294 \uD504\uB85C\uADF8\uB798\uBC0D\uC801\uC73C\uB85C \uB610\uB294 \uC218\uB3D9\uC73C\uB85C \uC774\uBBF8\uC9C0, \uBE44\uB514\uC624, \uBB38\uC11C\uC640 \uAC19\uC740 \uBAA8\uB4E0 \uC885\uB958\uC758 \uD30C\uC77C(\uC774\uB97C S3\uC5D0\uC11C \uC624\uBE0C\uC81D\uD2B8\uB77C\uACE0 \uD568)\uC744 \uC800\uC7A5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),S=s("p",null,"\uD14C\uC2A4\uD2B8\uB098 \uAE30\uD0C0 \uBAA9\uC801\uC73C\uB85C \uC885\uC885 \uC6B0\uB9AC\uB294 \uB9AC\uC561\uD2B8 \uC571\uC744 \uAD6C\uCD95\uD558\uACE0 \uC6F9\uC5D0\uC11C \uC561\uC138\uC2A4\uD560 \uC218 \uC788\uB294 \uACF3\uC5D0 \uC571\uC744 \uD638\uC2A4\uD305\uD558\uACE0\uC790 \uD569\uB2C8\uB2E4.",-1),T=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),q=s("p",null,"\uC774\uB97C \uC218\uD589\uD558\uB294 \uC778\uAE30\uC788\uB294 \uBC29\uBC95 \uC911 \uD558\uB098\uB294 CICD \uD30C\uC774\uD504\uB77C\uC778\uC744 \uC0DD\uC131\uD558\uACE0 \uD504\uB85C\uC81D\uD2B8 \uD30C\uC77C\uC758 \uBCC0\uACBD \uC0AC\uD56D\uC774 \uD638\uC2A4\uD305 \uC81C\uACF5\uC5C5\uCCB4\uC5D0 \uBC30\uD3EC\uB418\uB3C4\uB85D \uD2B8\uB9AC\uAC70\uD558\uACE0 \uC571\uC758 \uCD5C\uC2E0 \uBCC0\uACBD \uC0AC\uD56D\uC744 \uD504\uB85C\uB355\uC158\uC5D0 \uC5C5\uB370\uC774\uD2B8\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4.",-1),R=s("p",null,"\uB098\uC911\uC5D0\uC774 \uC791\uC5C5\uC744 \uC5B4\uB5BB\uAC8C \uC218\uD589\uD560\uC9C0\uC5D0 \uB300\uD55C \uAE30\uC0AC\uB97C \uC791\uC131\uD560 \uC608\uC815\uC774\uC9C0\uB9CC, \uC774 \uAE30\uC0AC\uC5D0\uC11C\uB294 \uB9AC\uC561\uD2B8 JS \uC6F9 \uC571\uC744 Amazon S3\uC5D0 \uBE60\uB974\uACE0 \uC27D\uAC8C \uBC30\uD3EC\uD558\uB294 \uBC29\uBC95\uC5D0 \uCD08\uC810\uC744 \uB9DE\uCD9C \uAC83\uC785\uB2C8\uB2E4. \uC774\uB807\uAC8C\uD558\uBA74 \uB3C8\uC744 \uC4F0\uC9C0 \uC54A\uACE0 \uC989\uC2DC \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),D=s("h1",{id:"s3-\u1107\u1165\u110F\u1175\u11BA-\u1109\u1165\u11AF\u110C\u1165\u11BC",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#s3-\u1107\u1165\u110F\u1175\u11BA-\u1109\u1165\u11AF\u110C\u1165\u11BC","aria-hidden":"true"},"#"),a(" S3 \uBC84\uD0B7 \uC124\uC815")],-1),x=s("p",null,"\uBA3C\uC800 \uD560 \uC77C\uC740 \uB9AC\uC561\uD2B8 \uC571\uC744 \uD638\uC2A4\uD305\uD560 S3 \uBC84\uD0B7\uC744 \uC0DD\uC131\uD558\uACE0 \uC124\uC815\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4.",-1),W=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),H=s("p",null,"\uC774\uB97C \uC704\uD574\uC11C S3 \uCF58\uC194\uB85C \uC774\uB3D9\uD558\uC138\uC694. \uC0C8 \uBC84\uD0B7\uC744 \uB9CC\uB4E4\uACE0 my-react-app \uB610\uB294 \uBE44\uC2B7\uD55C \uC774\uB984\uC744 \uBD99\uC774\uC138\uC694.",-1),j=s("p",null,[s("img",{src:i,alt:"\uC774\uBBF8\uC9C0"})],-1),C=s("p",null,"\uC544\uB798\uC5D0\uC11C Object Ownership \uC544\uB798\uC5D0 ACLs \uD65C\uC131\uD654 \uC635\uC158\uC744 \uC120\uD0DD\uD558\uC138\uC694.",-1),V=s("p",null,[s("img",{src:c,alt:"\uC774\uBBF8\uC9C0"})],-1),I=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),L=s("p",null,"\uB2E4\uC2DC \uD558\uB2E8\uC5D0 \uACF5\uAC1C \uC561\uC138\uC2A4 \uC124\uC815\uC758 \uBAA8\uB4E0 \uD655\uC778\uB780\uC744 \uD574\uC81C\uD574 \uC8FC\uC138\uC694:",-1),B=s("p",null,[s("img",{src:u,alt:"\uC774\uBBF8\uC9C0"})],-1),E=s("p",null,"\uC774\uC81C '\uBC84\uD0B7 \uB9CC\uB4E4\uAE30' \uC544\uB798\uC758 \uC8FC\uD669\uC0C9 \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uC5EC \uBC84\uD0B7\uC744 \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),N=s("p",null,"\uC0DD\uC131\uD55C \uBC84\uD0B7\uC744 \uD074\uB9AD\uD558\uC5EC '\uAD8C\uD55C' \uD0ED\uC73C\uB85C \uC774\uB3D9\uD574 \uC8FC\uC138\uC694.",-1),O=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),G=n('<img src="'+r+`"><p>\uC544\uB798\uC5D0\uC11C &quot;\uBC84\uD0B7 \uC815\uCC45 \uD3B8\uC9D1&quot;\uC774\uB77C\uACE0 \uD45C\uC2DC\uB41C \uC139\uC158\uC744 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD3B8\uC9D1\uC744 \uD074\uB9AD\uD558\uACE0 \uB2E4\uC74C \uC815\uCC45\uC744 \uCD94\uAC00\uD558\uC5EC S3 \uBC84\uD0B7\uC5D0 \uC561\uC138\uC2A4\uD560 \uC218 \uC788\uB3C4\uB85D \uC124\uC815\uD558\uC138\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;Version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2012-10-17&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;Statement&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;Sid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;PublicReadGetObject&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;Effect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Allow&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;Principal&quot;</span><span class="token operator">:</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;Action&quot;</span><span class="token operator">:</span> <span class="token string">&quot;s3:GetObject&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;Resource&quot;</span><span class="token operator">:</span> <span class="token string">&quot;arn:aws:s3:::uriel-my-react-app/*&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Resource\uC758 \uAC12\uC744 &quot;uriel-my-react-app&quot;\uCC98\uB7FC \uC81C \uC774\uB984\uC774 \uC544\uB2CC \uC790\uC2E0\uC758 \uBC84\uD0B7 \uC774\uB984\uC73C\uB85C \uBCC0\uACBD\uD558\uB294 \uAC83\uC744 \uC78A\uC9C0 \uB9C8\uC138\uC694.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),U=s("img",{src:_},null,-1),J=s("p",null,"\uC774\uC81C \uD544\uC694\uD55C \uAD8C\uD55C\uC744 \uC124\uC815\uD588\uC73C\uBBC0\uB85C \uBC84\uD0B7\uC744 \uC815\uC801 \uC6F9 \uC0AC\uC774\uD2B8\uB85C \uD638\uC2A4\uD305\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),P=s("p",null,"\uBC84\uD0B7 \uD398\uC774\uC9C0\uB85C \uB3CC\uC544\uAC00\uC11C \uC18D\uC131 \uD0ED\uC744 \uD074\uB9AD\uD569\uB2C8\uB2E4.",-1),z=s("img",{src:g},null,-1),F=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),K=s("p",null,"\uB9E8 \uC544\uB798\uAE4C\uC9C0 \uC2A4\uD06C\uB864\uD558\uC5EC \uC815\uC801 \uC6F9\uC0AC\uC774\uD2B8 \uD638\uC2A4\uD305 \uC139\uC158\uC744 \uCC3E\uC544\uBCF4\uC138\uC694.",-1),X=s("p",null,[s("img",{src:h,alt:"\uC774\uBBF8\uC9C0"})],-1),Y=s("p",null,"\uD3B8\uC9D1 \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uBA74 \uB2E4\uB978 \uD398\uC774\uC9C0\uB85C \uC774\uB3D9\uD569\uB2C8\uB2E4.",-1),M=s("p",null,"\uC5EC\uAE30\uC11C enable\uC744 \uC120\uD0DD\uD55C \uD6C4 \uB2E4\uB978 \uC120\uD0DD\uC9C0\uB294 \uAE30\uBCF8 \uC124\uC815\uC73C\uB85C \uB0A8\uACA8\uB450\uC2DC\uBA74 \uB429\uB2C8\uB2E4.",-1),Q=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),Z=s("p",null,"\uC544\uB798\uC640 \uAC19\uC774 \uBCC0\uACBD\uD574\uC8FC\uC138\uC694:",-1),$=s("p",null,[s("img",{src:b,alt:"\uC774\uBBF8\uC9C0"})],-1),ss=s("p",null,'\uC774\uC81C \uC778\uB371\uC2A4 \uBB38\uC11C\uB97C \uC791\uC131\uD560 \uCC28\uB840\uC785\uB2C8\uB2E4. "index.html"\uC744 \uC785\uB825\uD558\uACE0 \uC120\uD0DD\uC801\uC778 \uC624\uB958 \uBB38\uC11C\uB294 \uC544\uBB34\uAC83\uB3C4 \uC791\uC131\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.',-1),as=s("p",null,"\uC774\uC81C \uBCC0\uACBD \uC0AC\uD56D\uC744 \uC800\uC7A5\uD558\uC2DC\uBA74 \uB429\uB2C8\uB2E4.",-1),ts=s("p",null,"\uC774\uC81C \uC5EC\uB7EC\uBD84\uC758 \uBC84\uD0B7\uC740 \uC815\uC801 \uC6F9 \uC0AC\uC774\uD2B8\uB97C \uD638\uC2A4\uD305\uD560 \uC900\uBE44\uAC00 \uB418\uC5C8\uC2B5\uB2C8\uB2E4.",-1),os=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),es=n(`<h1 id="\u110B\u116E\u1105\u1175\u110B\u1174-\u1105\u1175\u110B\u1162\u11A8\u1110\u1173-\u110B\u1162\u11B8-\u1106\u1161\u11AB\u1103\u1173\u11AF\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u110B\u116E\u1105\u1175\u110B\u1174-\u1105\u1175\u110B\u1162\u11A8\u1110\u1173-\u110B\u1162\u11B8-\u1106\u1161\u11AB\u1103\u1173\u11AF\u1100\u1175" aria-hidden="true">#</a> \uC6B0\uB9AC\uC758 \uB9AC\uC561\uD2B8 \uC571 \uB9CC\uB4E4\uAE30</h1><p>\uC6D0\uD558\uB294 IDE\uB97C \uC0AC\uC6A9\uD558\uC5EC \uB9AC\uC561\uD2B8 \uC571 \uD504\uB85C\uC81D\uD2B8\uB97C \uCC3E\uC544 \uC5F4\uC5B4\uBD05\uB2C8\uB2E4. \uC800\uB294 VSCode\uB97C \uC0AC\uC6A9\uD558\uACE0 \uC788\uC5B4\uC694. \uC81C \uB9AC\uC561\uD2B8 \uC571\uC744 \uC5F4\uC5B4 \uBE4C\uB4DC\uD588\uC2B5\uB2C8\uB2E4.</p><p>\uC800\uB294 Vite(\uB9AC\uC561\uD2B8 \uBC88\uB4E4\uB7EC)\uB97C \uC0AC\uC6A9\uD558\uACE0 \uC788\uC73C\uB2C8, CLI\uC5D0 \uB2E4\uC74C \uBA85\uB839\uC5B4\uB97C \uC785\uB825\uD588\uC5B4\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>vite run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),ls=n('<p><img src="'+y+`" alt="\uC774\uBBF8\uC9C0"></p><p>\uBC88\uB4E4\uB7EC\uB294 \uBE4C\uB4DC \uD30C\uC77C\uC744 dist \uD3F4\uB354\uC5D0 \uCD9C\uB825\uD569\uB2C8\uB2E4.</p><p>\uC77C\uBC18 React \uB610\uB294 Next JS\uB97C \uC0AC\uC6A9\uD558\uB294 \uACBD\uC6B0, \uC571\uC744 \uBE4C\uB4DC\uD558\uB294 \uBE4C\uB4DC \uBA85\uB839\uC5B4\uB97C \uCC3E\uC73C\uC138\uC694. Create React App (CRA) \uBC88\uB4E4\uB7EC\uB97C \uC0AC\uC6A9\uD558\uB294 \uACBD\uC6B0 \uBA85\uB839\uC5B4\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),ns=s("p",null,"\uC571\uC744 \uBE4C\uB4DC\uD55C \uD6C4 CRA\uB97C \uC0AC\uC6A9\uD588\uB2E4\uBA74 \uBE4C\uB4DC \uD3F4\uB354\uC758 \uBAA8\uB4E0 \uD30C\uC77C\uC744 \uAC00\uC838\uC640\uC11C \uB610\uB294 Vite\uB97C \uC0AC\uC6A9\uD588\uB2E4\uBA74 dist \uD3F4\uB354\uC758 \uD30C\uC77C\uC744 \uAC00\uC838\uC640\uC11C S3 \uBC84\uD0B7\uC5D0 \uC5C5\uB85C\uB4DC\uD558\uC138\uC694.",-1),ps=s("p",null,[s("img",{src:m,alt:"HowToDeployAReactAppToAWSS3_10"})],-1),ds=s("p",null,"\uB0B4 Vite \uBE4C\uB4DC \uD30C\uC77C\uC744 \uC5C5\uB85C\uB4DC\uD588\uC5B4\uC694 \u2014 \uAC70\uAE30\uC5D0\uB294 \uCEF4\uD30C\uC77C\uB41C index.html \uD30C\uC77C\uACFC \uC18C\uC2A4 \uCF54\uB4DC\uAC00 \uD3EC\uD568\uB41C assets \uD3F4\uB354\uAC00 \uC788\uC2B5\uB2C8\uB2E4.",-1),is=s("p",null,"\uC774\uAC8C \uB2E4\uC5D0\uC694!",-1),cs=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),us=s("h1",{id:"react-\u110B\u1162\u11B8-\u1107\u1169\u1100\u1175",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#react-\u110B\u1162\u11B8-\u1107\u1169\u1100\u1175","aria-hidden":"true"},"#"),a(" React \uC571 \uBCF4\uAE30")],-1),rs=s("p",null,"\uB9C8\uCE68\uB0B4, \uC571\uC744 \uBCF4\uB824\uBA74 S3 \uBC84\uD0B7\uC73C\uB85C \uB3CC\uC544\uAC00\uC11C \uC815\uC801 \uC6F9\uC0AC\uC774\uD2B8 \uD638\uC2A4\uD305\uC744 \uD65C\uC131\uD654\uD55C \uC18D\uC131 \uD0ED\uC744 \uD074\uB9AD\uD558\uBA74 \uB429\uB2C8\uB2E4.",-1),_s=s("p",null,"\uC774 \uC139\uC158\uC5D0\uC11C\uB294 \uC774\uC81C URL\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4. \uD574\uB2F9 URL\uC744 \uD074\uB9AD\uD558\uBA74 React \uC6F9 \uC571\uC744 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),gs=s("p",null,[s("img",{src:v,alt:"React \uC571 \uBCF4\uAE30"})],-1),hs=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),bs=s("p",null,"\uB2E4\uC74C \uD504\uB85C\uC81D\uD2B8\uC5D0 \uC720\uC6A9\uD558\uACE0 \uC2E4\uC6A9\uC801\uC778 \uAC83\uC744 \uBC30\uC6E0\uC73C\uBA74 \uC88B\uACA0\uC5B4\uC694!",-1),ys=s("p",null,"\uC548\uBD80 \uC778\uC0AC\uB97C \uB0A8\uAE30\uACE0 \u{1F44B}, \uC800\uC640 \uD611\uB825\uD558\uACE0 \uC81C \uC18C\uC15C \uBBF8\uB514\uC5B4\uB97C \uD568\uAED8 \uC0B4\uD3B4\uBCF4\uC138\uC694:",-1),ms=s("ul",null,[s("li",null,"LinkedIn"),s("li",null,"Twitter (X)"),s("li",null,"Threads"),s("li",null,"Instagram"),s("li",null,"Facebook")],-1),vs=s("p",null,"\uC88B\uC544\uD558\uC168\uB2E4\uBA74 \u{1F44F} \uB20C\uB7EC\uC8FC\uC2DC\uACE0 \uB354 \uB9CE\uC740 \uB0B4\uC6A9\uC744 \uBCF4\uC2DC\uB824\uBA74 \uD314\uB85C\uC6B0\uD574\uC8FC\uC138\uC694.",-1),fs=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),ws=s("p",null,"Uriel",-1);function As(ks,Ss){return t(),d("div",null,[w,A,k,S,T,(t(),o(l("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),q,R,D,x,W,(t(),o(l("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),H,j,C,V,I,(t(),o(l("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),L,B,E,N,O,(t(),o(l("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),G,(t(),o(l("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),U,J,P,z,F,(t(),o(l("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),K,X,Y,M,Q,(t(),o(l("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),Z,$,ss,as,ts,os,(t(),o(l("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),es,(t(),o(l("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),ls,(t(),o(l("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),ns,ps,ds,is,cs,(t(),o(l("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),us,rs,_s,gs,hs,(t(),o(l("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),bs,ys,ms,vs,fs,(t(),o(l("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),ws])}var Hs=p(f,[["render",As],["__file","index.html.vue"]]);export{Hs as default};