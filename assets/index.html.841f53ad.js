import{_ as d}from"./app.3052dcfb.js";import{l as o,m as n,E as a,G as l,p as s,Y as e,C as t}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var i="/assets/HowtoStyleYourDjangoForms_0.b009fa16.png",_="/assets/HowtoStyleYourDjangoForms_1.00832611.png",u="/assets/HowtoStyleYourDjangoForms_2.22c74446.png",c="/assets/HowtoStyleYourDjangoForms_3.f590d08f.png",p="/assets/HowtoStyleYourDjangoForms_4.083e3601.png";const r={},h=t("h2",{id:"\u1109\u1173\u1111\u1169\u110B\u1175\u11AF\u1105\u1165-\u110B\u1171\u110C\u1166\u11BA\u110B\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1162\u110B\u1163-\u1112\u1161\u11B8\u1102\u1175\u1103\u1161",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#\u1109\u1173\u1111\u1169\u110B\u1175\u11AF\u1105\u1165-\u110B\u1171\u110C\u1166\u11BA\u110B\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1162\u110B\u1163-\u1112\u1161\u11B8\u1102\u1175\u1103\u1161","aria-hidden":"true"},"#"),s(" \uC2A4\uD3EC\uC77C\uB7EC: \uC704\uC82F\uC744 \uC0AC\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4.")],-1),g=t("p",null,[t("img",{src:i,alt:"\uC774\uBBF8\uC9C0"})],-1),y=t("p",null,"Django\uB97C \uC0AC\uC6A9\uD558\uB294 \uC0AC\uB78C\uC774\uB77C\uBA74 Django \uD3FC\uC774 \uC5BC\uB9C8\uB098 \uC88B\uC740\uC9C0 \uC54C\uACE0 \uC788\uC744 \uAC81\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uCC98\uC74C \uC0AC\uC6A9\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC9C8\uBB38\uC774 \uB4F1\uC7A5\uD569\uB2C8\uB2E4: \uC5B4\uB5BB\uAC8C \uC2A4\uD0C0\uC77C\uC744 \uC9C0\uC815\uD560 \uC218 \uC788\uC744\uAE4C\uC694? \uC5B4\uB5BB\uAC8C \uD074\uB798\uC2A4\uB97C \uCD94\uAC00\uD560 \uC218 \uC788\uC744\uAE4C\uC694?",-1),m=t("p",null,"\uC74C, \uBC29\uBC95\uC774 \uC788\uC2B5\uB2C8\uB2E4 (\uC2E4\uC81C\uB85C \uB9E4\uC6B0 \uAC04\uB2E8\uD569\uB2C8\uB2E4), \uBC14\uB85C \uC704\uC82F\uC744 \uC0AC\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4.",-1),b=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),f=t("p",null,"\uD558\uC9C0\uB9CC \uC815\uD655\uD788 \uBB34\uC5C7\uC778\uAC00\uC694? Django \uBB38\uC11C\uC5D0 \uB530\uB974\uBA74 \uC704\uC82F\uC758 \uC815\uC758\uB97C \uC0B4\uD3B4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4:",-1),w=t("p",null,[s("\uB2E4\uC2DC \uB9D0\uD574, \uC704\uC82F\uC740 \uCF58\uD150\uCE20\uB97C HTML\uB85C \uB80C\uB354\uB9C1\uD558\uB294 \uBC29\uBC95\uC744 \uC815\uC758\uD558\uB294 \uAC83\uBFD0\uC785\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4, CharField\uC758 \uAE30\uBCF8 \uC704\uC82F\uC740 "),t("code",null,'input type="text"'),s("\uB85C \uB80C\uB354\uB9C1\uB418\uB294 TextInput\uC785\uB2C8\uB2E4.")],-1),v=t("p",null,"\uD558\uC9C0\uB9CC \uC704\uC82F\uC740 \uC0AC\uC6A9\uC790 \uC815\uC758 \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uADF8\uB798\uC11C \uADF8 textarea\uC758 \uD06C\uAE30\uB098 \uD574\uB2F9 \uD544\uB4DC\uAC00 \uD544\uC218 \uD544\uB4DC\uC778\uC9C0\uC640 \uAC19\uC740 \uAC83\uB4E4\uC744 \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),x=t("p",null,"\uADF8\uB798\uC11C \uC704\uC82F\uC774 \uC5B4\uB5BB\uAC8C \uC791\uB3D9\uD558\uB294\uC9C0 \uBCF4\uC5EC\uC8FC\uAE30 \uC704\uD574 \uC608\uC81C\uB97C \uB9CC\uB4E4\uC5B4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.",-1),D=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),j=t("p",null,"\uC548\uB155\uD558\uC138\uC694! UserInfoForm\uC774\uB77C\uB294 \uC591\uC2DD\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uC5EC\uAE30\uC11C \uC0AC\uC6A9\uC790\uC758 \uC774\uB984\uACFC \uC774\uBA54\uC77C\uC744 \uC5BB\uC2B5\uB2C8\uB2E4.",-1),k=t("p",null,"HTML \uCF54\uB4DC\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4:",-1),F=t("p",null,"\uD604\uC7AC \uC774 \uC591\uC2DD\uC740 \uAE30\uBCF8 \uC704\uC82F\uC744 \uC0AC\uC6A9\uD558\uACE0 \uC788\uC73C\uBA70 \uC544\uBB34\uB7F0 \uC2A4\uD0C0\uC77C\uC774 \uC5C6\uC5B4\uC11C \uAE30\uBCF8\uC801\uC73C\uB85C \uC774\uB807\uAC8C \uBCF4\uC785\uB2C8\uB2E4:",-1),H=t("img",{src:_},null,-1),T=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),Y=t("p",null,"\uADF8\uB798\uC11C \uBCC0\uACBD\uD558\uB824\uBA74 \uC678\uAD00\uC744 \uC0AC\uC6A9\uC790 \uC815\uC758\uD574\uC57C \uD569\uB2C8\uB2E4. \uC704\uC82F\uC744 \uB450 \uAC00\uC9C0 \uBC29\uBC95\uC73C\uB85C \uC0AC\uC6A9\uC790 \uC815\uC758\uD560 \uC218 \uC788\uC5B4\uC694 \u2014 \uC704\uC82F \uC778\uC2A4\uD134\uC2A4\uB97C \uD1B5\uD574 \uB610\uB294 \uC704\uC82F \uD074\uB798\uC2A4\uB97C \uD1B5\uD574. \uC774 \uCCAB \uBC88\uC9F8 \uC608\uC81C\uC5D0\uC11C\uB294 \uC704\uC82F \uC778\uC2A4\uD134\uC2A4\uB97C \uC0AC\uC6A9\uD560 \uAC70\uC5D0\uC694. \uAE30\uBCF8\uC801\uC73C\uB85C Widget.attrs \uC778\uC218\uB97C \uC0AC\uC6A9\uD574\uC57C \uD558\uB294\uB370\uC694, \uC774\uB294 \uB80C\uB354\uB9C1\uB41C \uC704\uC82F\uC5D0 \uC124\uC815\uD560 HTML \uC18D\uC131\uC744 \uD3EC\uD568\uD558\uB294 \uB515\uC154\uB108\uB9AC\uC785\uB2C8\uB2E4. \uC544\uB798 \uC608\uC81C\uCC98\uB7FC\uC694:",-1),C=t("p",null,"\uADF8\uB9AC\uACE0 \uADF8 \uB2E4\uC74C\uC5D4 placeholder \uD0A4\uB97C \uAC00\uC9C0\uACE0 Name \uAC12\uC744, \uADF8\uB9AC\uACE0 style \uD0A4\uB97C \uAC00\uC9C0\uACE0 width: 300px; \uAC12\uC744 \uAC00\uC9C4 attrs \uB515\uC154\uB108\uB9AC\uB97C \uBCFC \uC218 \uC788\uC5B4\uC694.",-1),M=t("p",null,"\uADF8\uB9AC\uACE0 \uC774\uAC8C \uACB0\uACFC\uC5D0\uC694:",-1),S=t("p",null,[t("img",{src:u,alt:"image"})],-1),B=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),E=t("p",null,"\uD6E8\uC52C \uB098\uC544\uC84C\uC8E0? \uADF8\uB807\uC9C0\uB9CC \uB354 \uAC1C\uC120\uD560 \uC218 \uC788\uC5B4\uC694. \uC774\uC5D0 \uBD80\uD2B8\uC2A4\uD2B8\uB7A9 \uD074\uB798\uC2A4\uB97C \uCD94\uAC00\uD574\uBCFC\uAC8C\uC694. attrs \uB515\uC154\uB108\uB9AC \uB0B4\uC5D0\uC11C \uD074\uB798\uC2A4\uB97C \uC120\uC5B8\uD558\uC5EC \uC774 \uC791\uC5C5\uC744 \uD560 \uC218 \uC788\uC5B4\uC694.",-1),I=t("p",null,"\uBD80\uD2B8\uC2A4\uD2B8\uB7A9 \uD074\uB798\uC2A4\uB97C \uCD94\uAC00\uD588\uACE0 \uACB0\uACFC\uAC00 \uC5EC\uAE30 \uC788\uC5B4\uC694.",-1),L=t("img",{src:c},null,-1),N=t("p",null,"\uC774\uC81C \uC644\uBCBD\uD574\uC84C\uB124\uC694!",-1),G=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),U=t("p",null,"\uADF8\uB7EC\uB098 \uBCF4\uD1B5 Django \uC591\uC2DD\uC744 \uC0AC\uC6A9\uD560 \uB54C\uB294 \uD574\uB2F9 \uC591\uC2DD\uC774 \uD2B9\uC815 \uBAA8\uB378\uACFC \uAD00\uB828\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uD604\uC7AC \uC774 \uC591\uC2DD\uC740 \uADF8\uB807\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC774\uAC83\uC744 \uAC00\uB2A5\uD558\uAC8C \uD558\uB824\uBA74 \uBA87 \uAC00\uC9C0 \uB354 \uBCC0\uACBD\uD574\uC57C \uD569\uB2C8\uB2E4. \uC774\uC81C \uC704\uC82F \uD074\uB798\uC2A4\uB97C \uC0AC\uC6A9\uD560 \uAC83\uC785\uB2C8\uB2E4. \uC704\uC82F \uD074\uB798\uC2A4\uC5D0\uB294 \uC704\uC758 \uC608\uC2DC\uC640 \uB9C8\uCC2C\uAC00\uC9C0\uB85C \uAE30\uBCF8 \uC18D\uC131\uC778 attrs\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uB610\uD55C Meta\uB77C\uB294 \uC0C8 \uD074\uB798\uC2A4\uB97C \uCD94\uAC00\uD558\uACE0, \uC774 \uC591\uC2DD\uC774 \uAD00\uB828\uB41C \uBAA8\uB378\uC758 \uC774\uB984\uACFC \uAC00\uC838\uC57C \uD560 \uD544\uB4DC, \uADF8\uB9AC\uACE0 \uD574\uB2F9 \uD544\uB4DC\uC5D0 \uB300\uD55C \uC704\uC82F\uC744 \uC9C0\uC815\uD574\uC57C \uD569\uB2C8\uB2E4.",-1),V=t("p",null,"\uADF8\uB798\uC11C \uC5EC\uAE30\uC5D0\uC11C \uBB34\uC2A8 \uC77C\uC774 \uC77C\uC5B4\uB098\uACE0 \uC788\uB294 \uAC78\uAE4C\uC694? \uC774\uC804\uC5D0 \uC0AC\uC6A9\uD588\uB358 CharField\uC640 EmailField\uB294 \uB0B4\uC7A5 Field \uD074\uB798\uC2A4\uC785\uB2C8\uB2E4. \uADF8\uB7EC\uB098 \uC774\uC81C \uC704\uC82F \uD074\uB798\uC2A4\uC640 \uD568\uAED8 \uC791\uC5C5\uD558\uB824\uBA74 \uB0B4\uC7A5 \uC704\uC82F\uC744 \uC0AC\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4(\uC774 \uACBD\uC6B0 TextInput\uACFC EmailInput\uC785\uB2C8\uB2E4). \uACB0\uACFC\uC801\uC73C\uB85C \uB3D9\uC77C\uD55C \uC791\uC5C5\uC744 \uC218\uD589\uD558\uC9C0\uB9CC \uAD6C\uC131\uC740 \uC57D\uAC04 \uB2E4\uB97C \uAC83\uC785\uB2C8\uB2E4.",-1),W=t("p",null,"\uC774 \uC591\uC2DD\uC740 \uAE30\uBCF8\uC801\uC73C\uB85C \uC774\uC804\uACFC \uB3D9\uC77C\uD558\uBA70 \uD45C\uC2DC\uB418\uB294 \uBC29\uC2DD\uC774\uB098 \uAE30\uD0C0 \uC0AC\uD56D\uC744 \uBCC0\uACBD\uD558\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uADF8\uB7EC\uB098 \uC774\uC81C \uC774 \uC591\uC2DD\uC740 \uC0AC\uC6A9\uC790 \uC815\uBCF4\uB97C \uC800\uC7A5\uD558\uB294 \uB370 \uC0AC\uC6A9\uB41C User \uBAA8\uB378\uC5D0 \uC5F0\uACB0\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.",-1),q=t("p",null,"HTML\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4:",-1),z=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),A=t("p",null,"\uB9C8\uC9C0\uB9C9 \uACB0\uACFC:",-1),J=t("p",null,[t("img",{src:p,alt:"\uC774\uBBF8\uC9C0"})],-1),K=t("h1",{id:"\u1100\u1167\u11AF\u1105\u1169\u11AB",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#\u1100\u1167\u11AF\u1105\u1169\u11AB","aria-hidden":"true"},"#"),s(" \uACB0\uB860")],-1),O=t("p",null,"\uC704\uC82F\uC744 \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95\uC744 \uBC30\uC6B0\uB294 \uAC83\uC740 \uC88B\uC740 \uC120\uD0DD\uC785\uB2C8\uB2E4. \uC774\uC81C \uD3FC\uC744 \uB354 \uC798\uBCF4\uC774\uB3C4\uB85D \uB9CC\uB4E4\uACE0 \uBD80\uD2B8\uC2A4\uD2B8\uB7A9 \uD074\uB798\uC2A4\uB97C \uCD94\uAC00\uD558\uB294 \uAC83\uC774 \uC5BC\uB9C8\uB098 \uAC04\uB2E8\uD55C\uC9C0 \uC54C\uAC8C \uB418\uC5C8\uC73C\uB2C8 \uC720\uC6A9\uD558\uAC8C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC744 \uAC81\uB2C8\uB2E4.",-1),P=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),Q=t("p",null,"\uC774 \uD504\uB85C\uC81D\uD2B8\uC758 \uC18C\uC2A4 \uCF54\uB4DC\uB294 Github\uC5D0\uC11C \uD655\uC778\uD560 \uC218 \uC788\uC5B4\uC694.",-1),R=t("p",null,"\uBB3C\uB860 \uC704\uC82F\uC744 \uC0AC\uC6A9\uD558\uC5EC \uD560 \uC218 \uC788\uB294 \uC791\uC5C5\uC774 \uB354 \uB9CE\uC544\uC694. \uADF8\uB9AC\uACE0 \uBC30\uC6B8 \uC218 \uC788\uB294 \uCD5C\uACE0\uC758 \uACF3\uC740 \uACF5\uC2DD \uBB38\uC11C\uC778 Django docs\uC8E0.",-1);function X(Z,$){return o(),n("div",null,[h,g,y,m,b,(o(),a(e("script"),null,{default:l(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),f,w,v,x,D,(o(),a(e("script"),null,{default:l(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),j,k,F,H,T,(o(),a(e("script"),null,{default:l(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),Y,C,M,S,B,(o(),a(e("script"),null,{default:l(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),E,I,L,N,G,(o(),a(e("script"),null,{default:l(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),U,V,W,q,z,(o(),a(e("script"),null,{default:l(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),A,J,K,O,P,(o(),a(e("script"),null,{default:l(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),Q,R])}var dt=d(r,[["render",X],["__file","index.html.vue"]]);export{dt as default};