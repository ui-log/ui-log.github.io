import{_ as d}from"./app.d68f74da.js";import{l as e,m as i,E as s,G as o,p as t,Y as l,C as a,K as p}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var n="/assets/HowtomanuallydeployaReactapptoAzureAppService_0.9a73690b.png",r="/assets/HowtomanuallydeployaReactapptoAzureAppService_1.e5b45420.png",c="/assets/HowtomanuallydeployaReactapptoAzureAppService_2.1e9a7fe3.png",u="/assets/HowtomanuallydeployaReactapptoAzureAppService_3.5e0ecaff.png",_="/assets/HowtomanuallydeployaReactapptoAzureAppService_4.ff9a9d55.png",g="/assets/HowtomanuallydeployaReactapptoAzureAppService_5.6392aff9.png",y="/assets/HowtomanuallydeployaReactapptoAzureAppService_6.27638888.png",m="/assets/HowtomanuallydeployaReactapptoAzureAppService_7.12b0511b.png",h="/assets/HowtomanuallydeployaReactapptoAzureAppService_8.eeae471a.png",v="/assets/HowtomanuallydeployaReactapptoAzureAppService_9.355227ba.png",b="/assets/HowtomanuallydeployaReactapptoAzureAppService_10.e25c6f3f.png",A="/assets/HowtomanuallydeployaReactapptoAzureAppService_11.0f5e3e2b.png",w="/assets/HowtomanuallydeployaReactapptoAzureAppService_12.6a64f3de.png",f="/assets/HowtomanuallydeployaReactapptoAzureAppService_13.736a5450.png",z="/assets/HowtomanuallydeployaReactapptoAzureAppService_14.95e90d1b.png",S="/assets/HowtomanuallydeployaReactapptoAzureAppService_15.f1f0157b.png",R="/assets/HowtomanuallydeployaReactapptoAzureAppService_16.d049c038.png",H="/assets/HowtomanuallydeployaReactapptoAzureAppService_17.311af1a8.png",k="/assets/HowtomanuallydeployaReactapptoAzureAppService_18.2e4e4fa8.png",x="/assets/HowtomanuallydeployaReactapptoAzureAppService_19.07825838.png",j="/assets/HowtomanuallydeployaReactapptoAzureAppService_20.80daacc0.png",C="/assets/HowtomanuallydeployaReactapptoAzureAppService_21.3c2854e9.png",V="/assets/HowtomanuallydeployaReactapptoAzureAppService_22.cceb2043.png";const B={},N=a("img",{src:n},null,-1),E=a("p",null,"\uC2A4\uD398\uC778\uC5B4 \uAE30\uC0AC",-1),G=a("p",null,"\uC548\uB155\uD558\uC138\uC694, \uC774 \uC548\uB0B4\uC11C\uB294 Visual Studio Code\uC5D0\uC11C React \uC571\uC744 Azure App Service\uB85C \uC218\uB3D9\uC73C\uB85C \uBC30\uD3EC\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD574 \uC54C\uB824\uB4DC\uB9BD\uB2C8\uB2E4. \uB531 8\uB2E8\uACC4\uB9CC\uC73C\uB85C \uBC30\uC6CC\uBCF4\uC138\uC694.",-1),T=a("h2",{id:"\u110B\u116D\u1100\u116E-\u1109\u1161\u1112\u1161\u11BC",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u110B\u116D\u1100\u116E-\u1109\u1161\u1112\u1161\u11BC","aria-hidden":"true"},"#"),t(" \uC694\uAD6C \uC0AC\uD56D:")],-1),D=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),F=a("ul",null,[a("li",null,"Azure \uAD6C\uB3C5\uC744 \uD1B5\uD574 \uBB34\uB8CC\uB85C Azure\uB97C \uC2DC\uC791\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."),a("li",null,"Visual Studio Code"),a("li",null,"Node.js LTS \uBC84\uC804"),a("li",null,"Git")],-1),K=a("h2",{id:"\u1109\u1175\u110C\u1161\u11A8\u1112\u1162-\u1107\u1169\u11B8\u1109\u1175\u1103\u1161",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u1109\u1175\u110C\u1161\u11A8\u1112\u1162-\u1107\u1169\u11B8\u1109\u1175\u1103\u1161","aria-hidden":"true"},"#"),t(" \uC2DC\uC791\uD574 \uBD05\uC2DC\uB2E4:")],-1),L=a("p",null,"\uB2E8\uACC4 0: \uC0C8\uB85C\uC6B4 React \uC571 \uC0DD\uC131\uD558\uAE30",-1),Y=a("p",null,"\uD130\uBBF8\uB110\uC744 \uC5F4\uACE0 \uB2E4\uC74C \uBA85\uB839\uC744 \uC2E4\uD589\uD558\uC5EC \uC0C8 React \uC571\uC744 \uC0DD\uC131\uD558\uC138\uC694.",-1),q=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),I=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npx create<span class="token operator">-</span>react<span class="token operator">-</span>app testreactinaas
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img src="`+r+'"><p>\uC6D0\uD558\uB294 \uC774\uB984\uC73C\uB85C testreactinaas\uB97C \uB300\uCCB4\uD558\uC138\uC694.</p><p>\uB2E8\uACC4 1: \uB85C\uCEEC\uC5D0\uC11C React \uC571\uC744 \uD14C\uC2A4\uD2B8\uD558\uC138\uC694: \uB85C\uCEEC \uC11C\uBC84\uC5D0\uC11C \uC2E4\uD589\uD558\uAE30</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),J=p(`<p>\uD130\uBBF8\uB110\uC774\uB098 \uBA85\uB839 \uD504\uB86C\uD504\uD2B8\uB97C \uC5F4\uACE0 \uB2E4\uC74C \uBA85\uB839\uC744 \uC2E4\uD589\uD574\uBCF4\uC138\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>cd testreactinaas
npm start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+c+'" alt="\uC774\uBBF8\uC9C0"></p><p><img src="'+u+'" alt="\uC774\uBBF8\uC9C0"></p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),M=p(`<p>\uAE30\uBCF8\uC801\uC73C\uB85C \uC571\uC740 http://localhost:3000/ \uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uB2E8\uACC4 2: \uC571 \uBE4C\uB4DC\uD558\uAE30, \uC571\uC744 \uBC30\uD3EC\uD560 \uC900\uBE44\uAC00 \uB418\uBA74 \uBE4C\uB4DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uD130\uBBF8\uB110\uC774\uB098 \uBA85\uB839 \uD504\uB86C\uD504\uD2B8\uB97C \uC5F4\uACE0 \uB2E4\uC74C\uC744 \uC2E4\uD589\uD558\uC2ED\uC2DC\uC624:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),O=a("p",null,[a("img",{src:_,alt:"\uC774\uBBF8\uC9C0"})],-1),P=a("p",null,"Step 3: React \uD504\uB85C\uC81D\uD2B8\uC6A9 Azure App Service \uD504\uB85C\uBE44\uC800\uB2DD",-1),Q=a("p",null,[a("img",{src:g,alt:"\uC774\uBBF8\uC9C0"})],-1),U=a("p",null,[a("img",{src:y,alt:"\uC774\uBBF8\uC9C0"})],-1),W=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),X=p('<h2 id="\u1103\u1161\u11AB\u1100\u1168-4-\u110B\u1170\u11B8-\u110B\u1162\u11B8\u110B\u1166-\u1103\u1162\u1112\u1161\u11AB-\u1100\u1175\u1107\u1169\u11AB-\u1100\u116E\u1109\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u1100\u1168-4-\u110B\u1170\u11B8-\u110B\u1162\u11B8\u110B\u1166-\u1103\u1162\u1112\u1161\u11AB-\u1100\u1175\u1107\u1169\u11AB-\u1100\u116E\u1109\u1165\u11BC" aria-hidden="true">#</a> \uB2E8\uACC4 4: \uC6F9 \uC571\uC5D0 \uB300\uD55C \uAE30\uBCF8 \uAD6C\uC131</h2><p><img src="'+m+'" alt="\uC774\uBBF8\uC9C0"></p><p><img src="'+h+'" alt="\uC774\uBBF8\uC9C0"></p><p><img src="'+v+'" alt="\uC774\uBBF8\uC9C0"></p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),Z=a("p",null,"\uD14C\uC2A4\uD2B8\uB97C \uC704\uD574 F1 \uC694\uAE08\uC81C\uB97C \uC120\uD0DD\uD574\uBCF4\uC138\uC694. \uD544\uC694\uC5D0 \uB530\uB77C \uB2E4\uB978 \uAC83\uC744 \uC120\uD0DD\uD574\uB3C4 \uAD1C\uCC2E\uC544\uC694.",-1),$=a("p",null,"\uB2E8\uACC4 5: \uC6F9 \uC571\uC5D0 \uB300\uD55C \uD0DC\uADF8 \uAD6C\uC131\uD558\uAE30",-1),aa=a("p",null,[a("img",{src:b,alt:"\uC774\uBBF8\uC9C0"})],-1),ta=a("p",null,[a("img",{src:A,alt:"\uC774\uBBF8\uC9C0"})],-1),ea=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),sa=a("img",{src:w},null,-1),oa=a("p",null,"\uB2E8\uACC4 6: Visual Studio Code\uC5D0\uC11C \uD504\uB85C\uC81D\uD2B8\uB97C \uC5FD\uB2C8\uB2E4. \uADF8\uB7F0 \uB2E4\uC74C \uB2E4\uC74C \uD655\uC7A5 \uD504\uB85C\uADF8\uB7A8\uC744 \uC124\uCE58\uD558\uC138\uC694.",-1),la=a("img",{src:f},null,-1),pa=a("p",null,"Azure Account",-1),da=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),ia=a("p",null,"Azure App Service",-1),na=a("p",null,"Azure \uC790\uC6D0",-1),ra=a("p",null,"\uB2E8\uACC4 7: Azure \uACC4\uC815\uC5D0 \uB85C\uADF8\uC778\uD558\uC138\uC694",-1),ca=a("p",null,[a("img",{src:z,alt:"\uC774\uBBF8\uC9C0"})],-1),ua=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),_a=a("p",null,"\uC790\uACA9 \uC99D\uBA85\uC744 \uC644\uB8CC\uD558\uC2DC\uACE0 \uB098\uBA74, Azure\uC5D0\uC11C \uB9AC\uC18C\uC2A4\uB97C \uBCFC \uC218 \uC788\uAC8C \uB418\uBA70 \uD2B9\uD788 5\uB2E8\uACC4\uC5D0\uC11C \uC0DD\uC131\uD55C \uC571 \uC11C\uBE44\uC2A4\uB97C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),ga=a("p",null,[a("img",{src:S,alt:"\uC774\uBBF8\uC9C0 1"})],-1),ya=a("p",null,[a("img",{src:R,alt:"\uC774\uBBF8\uC9C0 2"})],-1),ma=a("p",null,[a("img",{src:H,alt:"\uC774\uBBF8\uC9C0 3"})],-1),ha=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),va=p('<p><img src="'+k+'" alt="How to manually deploy a React app to Azure App Service 18"></p><p><img src="'+x+'" alt="How to manually deploy a React app to Azure App Service 19"></p><p><img src="'+j+'" alt="How to manually deploy a React app to Azure App Service 20"></p><p><img src="'+C+'" alt="How to manually deploy a React app to Azure App Service 21"></p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),ba=a("p",null,[a("img",{src:V,alt:"img"})],-1),Aa=a("p",null,"\uBAA8\uB4E0 \uAC83\uC774 \uC798 \uBCF4\uC785\uB2C8\uB2E4. React \uC571\uC774 \uC131\uACF5\uC801\uC73C\uB85C Azure App Services\uC5D0 \uBC30\uD3EC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.",-1),wa=a("p",null,"\uCC38\uACE0: Azure \uACC4\uC815 \uBCF4\uC548 \uC6B0\uC120\uC21C\uC704: \uCE5C\uC808\uD55C \uC54C\uB9BC",-1),fa=a("p",null,"\uBC18\uB4DC\uC2DC \uC2DC\uD589\uD574\uC57C \uD558\uB294 \uC911\uC694\uD55C \uC2E4\uCC9C \uBC29\uBC95 \uC911 \uD558\uB098\uB294 \uBC30\uD3EC \uBC0F \uAD00\uB9AC \uC791\uC5C5\uC744 \uC644\uB8CC\uD55C \uD6C4 Azure \uACC4\uC815\uC5D0\uC11C \uB85C\uADF8\uC544\uC6C3\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4.",-1),za=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),Sa=a("p",null,"\uBD80\uB514 \uC81C\uAC8C \uD53C\uB4DC\uBC31\uC744 \uC8FC\uC2DC\uBA74 \uC131\uC7A5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC815\uB9D0 \uAC10\uC0AC\uD569\uB2C8\uB2E4.",-1),Ra=a("p",null,"\uC601\uC5B4 \uC2E4\uB825\uC5D0 \uAD00\uB828\uB41C \uC2E4\uC218\uAC00 \uC788\uC744 \uC2DC \uC8C4\uC1A1\uD569\uB2C8\uB2E4. \uC81C \uB450 \uBC88\uC9F8 \uC5B8\uC5B4\uB97C \uBC30\uC6B0\uACE0 \uC788\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.",-1);function Ha(ka,xa){return e(),i("div",null,[N,E,G,T,D,(e(),s(l("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),F,K,L,Y,q,(e(),s(l("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),I,(e(),s(l("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),J,(e(),s(l("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),M,(e(),s(l("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),O,P,Q,U,W,(e(),s(l("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),X,(e(),s(l("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),Z,$,aa,ta,ea,(e(),s(l("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),sa,oa,la,pa,da,(e(),s(l("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),ia,na,ra,ca,ua,(e(),s(l("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),_a,ga,ya,ma,ha,(e(),s(l("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),va,(e(),s(l("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),ba,Aa,wa,fa,za,(e(),s(l("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),Sa,Ra])}var Ga=d(B,[["render",Ha],["__file","index.html.vue"]]);export{Ga as default};
