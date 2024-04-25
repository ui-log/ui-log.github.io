import{_ as d}from"./app.3052dcfb.js";import{l as s,m as n,E as l,G as o,p as t,Y as e,C as a,K as i}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var c="/assets/DemystifyingJSXbuildingyourownJSXparserfromscratch_0.c0021433.png",u="/assets/DemystifyingJSXbuildingyourownJSXparserfromscratch_1.2588bcbc.png",r="/assets/DemystifyingJSXbuildingyourownJSXparserfromscratch_2.89be24af.png";const _={},p=a("h2",{id:"\u110B\u116B-\u110B\u1161\u11AB-\u1103\u116C\u1100\u1166\u11BB\u110B\u1165\u110B\u116D",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u110B\u116B-\u110B\u1161\u11AB-\u1103\u116C\u1100\u1166\u11BB\u110B\u1165\u110B\u116D","aria-hidden":"true"},"#"),t(" \uC65C \uC548 \uB418\uACA0\uC5B4\uC694?!")],-1),h=a("p",null,[a("img",{src:c,alt:"\uC774\uBBF8\uC9C0"})],-1),g=a("p",null,"\uC6F9 \uD45C\uC900\uC740 \uC544\uB2C8\uC9C0\uB9CC \uC6F9 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uC880 \uB354 \uB300\uC138\uAC00 \uB418\uACE0 \uC788\uC9C0\uB9CC, JSX\uB294 React\uC640 \uD568\uAED8 \uB4F1\uC7A5\uD558\uC5EC HTML\uACFC JavaScript\uB97C \uD568\uAED8 \uC791\uC131\uD558\uB294 \uAC83\uC744 \uAC04\uB2E8\uD558\uAC8C \uB9CC\uB4DC\uB294 \uB180\uB77C\uC6B4 \uAE30\uC220\uC785\uB2C8\uB2E4.",-1),b=a("p",null,"\uD558\uC9C0\uB9CC, \uC774\uAC8C \uC815\uD655\uD788 \uC5B4\uB5BB\uAC8C \uC791\uB3D9\uD558\uB294 \uAC78\uAE4C\uC694? \uB9DE\uC544\uC694, React \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C JSX\uB97C \uBC18\uD658\uD560 \uC218\uB294 \uC788\uC9C0\uB9CC, \uC6B0\uB9AC\uB294 \uADF8\uAC83\uC774 \uD45C\uC900 JavaScript\uAC00 \uC544\uB2C8\uB77C\uB294 \uAC78 \uB2E4 \uC54C\uACE0 \uC788\uC5B4\uC694. \uADF8\uB807\uB2E4\uBA74 \uC774\uAC83\uC774 \uC815\uD655\uD788 \uC5B4\uB5BB\uAC8C \uC791\uB3D9\uD558\uB294 \uAC78\uAE4C\uC694? \uC774 \uC77C\uC5D0 \uC5B4\uB5A4 \uB9C8\uBC95\uC774 \uC228\uC5B4 \uC788\uC744\uAE4C\uC694?",-1),y=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),f=a("p",null,'\uB098\uB294 \uAE30\uC220\uC774 "\uADF8\uC800 \uC791\uB3D9\uD558\uB294" \uAC83\uC744 \uC815\uB9D0 \uC88B\uC544\uD574\uC694. \uD558\uC9C0\uB9CC \uADF8\uAC8C \uB0B4 \uC77C\uC5D0 \uC601\uD5A5\uC744 \uBBF8\uCE58\uBA74, \uCD5C\uB300\uD55C \uC774\uD574\uD558\uB824 \uB178\uB825\uD574\uC694. \uADF8 \uBC29\uBC95 \uC911 \uD558\uB098\uB294 \uADF8\uAC83\uC774 \uC5B4\uB5BB\uAC8C \uC791\uB3D9\uD558\uB294\uC9C0 \uC5ED\uACF5\uD559\uC744 \uC2DC\uB3C4\uD558\uACE0 \uADF8\uC758 \uBC84\uC804\uC744 \uC9C1\uC811 \uC791\uC131\uD558\uB294 \uAC83\uC774\uC5D0\uC694. \uC774 \uACFC\uC815\uC744 \uD1B5\uD574 \uB9CE\uC740 \uAC83\uC744 \uBC30\uC6B8 \uC218 \uC788\uC5B4\uC694!',-1),m=a("p",null,'\uADF8\uB798\uC11C \uC774 \uAE00\uC5D0\uC11C\uB294 JSX \uD30C\uC11C\uC758 \uBC84\uC804\uC744 \uC791\uC131\uD558\uB294 \uBC29\uBC95\uC744 \uBCF4\uC5EC\uB4DC\uB9B4 \uAC70\uC608\uC694. JSX "\uAD6C\uC131 \uC694\uC18C"\uB97C \uC2E4\uC81C\uB85C \uC720\uD6A8\uD55C HTML\uC744 \uBC18\uD658\uD558\uB294 JavaScript\uB85C \uBCC0\uD658\uD558\uB294 \uC77C\uC744 \uD560 \uC218 \uC788\uB294 \uD30C\uC11C\uB97C \uB9CC\uB4DC\uB294 \uBC29\uBC95\uC744 \uC54C\uB824 \uB4DC\uB9B4 \uAC70\uC5D0\uC694.',-1),w=a("p",null,"\uC2DC\uC791\uD574 \uBD05\uC2DC\uB2E4!",-1),S=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),J=a("h1",{id:"jsx\u1105\u1173\u11AF-\u1111\u1161\u1109\u1175\u11BC\u1112\u1161\u11AF-\u1100\u1165\u11BA\u110B\u1175\u11B8\u1102\u1175\u1103\u1161",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#jsx\u1105\u1173\u11AF-\u1111\u1161\u1109\u1175\u11BC\u1112\u1161\u11AF-\u1100\u1165\u11BA\u110B\u1175\u11B8\u1102\u1175\u1103\u1161","aria-hidden":"true"},"#"),t(" JSX\uB97C \uD30C\uC2F1\uD560 \uAC83\uC785\uB2C8\uB2E4")],-1),v=a("p",null,"\uACB0\uAD6D \uC2DC\uC791\uD574 \uBD05\uC2DC\uB2E4, \uD30C\uC2F1\uD560 JSX \uD30C\uC77C\uC744 \uC0B4\uD3B4\uBD05\uC2DC\uB2E4.",-1),X=a("p",null,"\uB9CC\uC57D React\uB85C \uC774\uB97C \uC791\uC131\uD55C\uB2E4\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC774 \uB420 \uAC83\uC785\uB2C8\uB2E4:",-1),x=a("p",null,"\uC194\uC9C1\uD788 \uB9D0\uD574\uC11C, \uBCC0\uD558\uB294 \uBD80\uBD84\uC740 \uCD08\uAE30 \uAC00\uC838\uC624\uAE30(import)\uC77C \uBFD0\uC774\uBA70, JSX\uB97C \uC791\uC131\uD558\uB824\uBA74 \uC65C React\uB97C \uAC00\uC838\uC640\uC57C \uD558\uB294\uC9C0 \uC2E4\uC81C\uB85C \uBCFC \uC218 \uC788\uAC8C \uB420 \uAC83\uC785\uB2C8\uB2E4.",-1),k=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),R=a("p",null,"\uD30C\uC2F1 \uC790\uCCB4\uB294 \uC870\uAE08 \uC77C\uC774 \uB4DC\uB294\uB370, \uADF8 \uB4A4\uC5D0 \uC228\uACA8\uC9C4 \uB85C\uC9C1\uC740 \uC2E4\uC81C\uB85C \uC544\uC8FC \uAC04\uB2E8\uD574\uC694. Rect\uC758 \uBB38\uC11C\uB97C \uC0B4\uD3B4\uBCF4\uBA74 JSX\uB97C \uD30C\uC2F1\uD55C \uACB0\uACFC\uB97C \uBCF4\uC5EC\uC904 \uAC70\uC608\uC694.",-1),j=a("p",null,[a("img",{src:u,alt:"parsing jsx"})],-1),E=a("p",null,"JSX \uC694\uC18C\uB97C React.createElement \uD638\uCD9C\uB85C \uBCC0\uD658\uD558\uACE0 \uC788\uB2E4\uB294 \uC810\uC744 \uC8FC\uBAA9\uD574\uBCF4\uC138\uC694. \uB124, \uADF8\uB798\uC694! \uADF8\uB798\uC11C \uC9C1\uC811\uC801\uC73C\uB85C \uC0AC\uC6A9\uD558\uC9C4 \uC54A\uB354\uB77C\uB3C4 React\uB97C import\uD574\uC57C \uD558\uB294 \uAC70\uC8E0. \uD30C\uC2F1\uC774 \uB05D\uB098\uACE0 \uB098\uBA74 \uB9CC\uB4E4\uC5B4\uC9C4 JavaScript \uCF54\uB4DC\uC5D0\uC11C\uB294 React\uAC00 \uC0AC\uC6A9\uB420 \uAC70\uC5D0\uC694.",-1),M=a("p",null,"\uC774\uC81C \uADF8 \uBBF8\uC2A4\uD130\uB9AC\uB97C \uD574\uACB0\uD588\uC73C\uB2C8, \uACC4\uC18D \uC9C4\uD589\uD574\uBD05\uC2DC\uB2E4.",-1),T=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),L=a("p",null,"\uBA54\uC18C\uB4DC\uC758 \uCCAB \uBC88\uC9F8 \uC18D\uC131\uC740 \uC0DD\uC131\uD560 \uC694\uC18C\uC758 \uD0DC\uADF8 \uC774\uB984\uC785\uB2C8\uB2E4. \uB450 \uBC88\uC9F8 \uC18D\uC131\uC740 \uC0DD\uC131\uB418\uB294 \uC694\uC18C\uC640 \uAD00\uB828\uB41C \uBAA8\uB4E0 \uC18D\uC131\uC744 \uD3EC\uD568\uD55C \uAC1D\uCCB4\uC774\uBA70, \uB9C8\uC9C0\uB9C9\uC73C\uB85C \uB098\uBA38\uC9C0 \uC18D\uC131\uB4E4(\uD558\uB098 \uC774\uC0C1 \uC874\uC7AC\uD560 \uC218 \uC788\uC74C)\uC740 \uC774 \uC694\uC18C\uC758 \uC9C1\uACC4 \uC790\uC2DD \uC694\uC18C\uAC00 \uB420 \uAC83\uC785\uB2C8\uB2E4(\uC77C\uBC18 \uD14D\uC2A4\uD2B8 \uB610\uB294 \uB2E4\uB978 \uC694\uC18C\uC77C \uC218 \uC788\uC74C).",-1),N=a("p",null,"\uADF8\uB7F0 \uB2E4\uC74C, \uC5EC\uAE30\uC5D0 \uB300\uD55C \uB3C4\uC804 \uACFC\uC81C\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4:",-1),B=a("ul",null,[a("li",null,"JavaScript \uB0B4\uBD80\uC758 JSX\uB97C \uCEA1\uCC98\uD569\uB2C8\uB2E4."),a("li",null,"\uC774\uB97C \uCFFC\uB9AC \uBC0F \uD0D0\uC0C9\uD560 \uC218 \uC788\uB294 \uD2B8\uB9AC \uAD6C\uC870\uB85C \uD30C\uC2F1\uD569\uB2C8\uB2E4."),a("li",null,"\uD574\uB2F9 \uAD6C\uC870\uB97C JavaScript \uCF54\uB4DC(\uD14D\uC2A4\uD2B8)\uB85C \uBC88\uC5ED\uD558\uC5EC JSX \uB300\uC2E0\uC5D0 \uC791\uC131\uB429\uB2C8\uB2E4."),a("li",null,"3\uB2E8\uACC4\uC758 \uCD9C\uB825\uBB3C\uC744 .js \uD655\uC7A5\uC790\uB97C \uAC00\uC9C4 \uD30C\uC77C\uB85C \uB514\uC2A4\uD06C\uC5D0 \uC800\uC7A5\uD569\uB2C8\uB2E4.")],-1),H=a("p",null,"\uCF54\uB529\uD574\uBD05\uC2DC\uB2E4!",-1),D=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),C=a("h1",{id:"\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173\u110B\u1166\u1109\u1165-jsx-\u110E\u116E\u110E\u116E\u11AF-\u1106\u1175\u11BE-\u1100\u116E\u1106\u116E\u11AB-\u1107\u116E\u11AB\u1109\u1165\u11A8",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173\u110B\u1166\u1109\u1165-jsx-\u110E\u116E\u110E\u116E\u11AF-\u1106\u1175\u11BE-\u1100\u116E\u1106\u116E\u11AB-\u1107\u116E\u11AB\u1109\u1165\u11A8","aria-hidden":"true"},"#"),t(" \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C JSX \uCD94\uCD9C \uBC0F \uAD6C\uBB38 \uBD84\uC11D")],-1),I=a("p",null,"\uCCAB \uBC88\uC9F8 \uB2E8\uACC4\uB294 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C JSX\uB97C \uC5B4\uB5A4 \uBC29\uC2DD\uC73C\uB85C\uB4E0 \uCD94\uCD9C\uD558\uACE0 \uD2B8\uB9AC \uAD6C\uC870\uB85C \uAD6C\uBB38 \uBD84\uC11D\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4.",-1),V=a("p",null,"\uC0AC\uC2E4, \uC774 \uB450 \uB2E8\uACC4\uB294 \uC788\uC9C0\uB9CC, \uD568\uAED8 \uC9C4\uD589\uD558\uACA0\uC2B5\uB2C8\uB2E4.",-1),O=a("p",null,"\uC6B0\uC120 \uD574\uC57C \uD560 \uC77C\uC740 JSX \uD30C\uC77C\uC744 \uC77D\uC740 \uB2E4\uC74C \uC815\uADDC \uD45C\uD604\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC JSX \uCF54\uB4DC\uB97C \uCEA1\uCC98\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4. (\uB124, \uC774 \uAE00 \uC804\uCCB4\uC5D0\uC11C \uBA87 \uAC00\uC9C0 \uC815\uADDC \uD45C\uD604\uC2DD\uC744 \uC0AC\uC6A9\uD560 \uAC83\uC785\uB2C8\uB2E4.)",-1),A=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),G=a("p",null,"\uC774\uC81C \uC774\uB97C \uD1B5\uD574 HTML \uD30C\uC11C\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC774\uD574\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),K=a("p",null,"\uC6B0\uB9AC\uAC00 \uC5EC\uAE30\uC11C \uD560 \uC218 \uC788\uB294 \uC774\uC720\uB97C \uC5FC\uB450\uC5D0 \uB450\uC138\uC694. \uC6B0\uB9AC\uAC00 \uC2E0\uACBD \uC368\uC57C \uD560 \uAC83\uC740 \uAD6C\uC870\uBFD0\uC774\uBA70 JSX\uC758 \uC2E4\uC81C \uAE30\uB2A5\uC740 \uC544\uB2D9\uB2C8\uB2E4. \uB530\uB77C\uC11C \uD30C\uC77C\uC744 \uC77D\uAE30 \uC704\uD574 Node\uC758 fs \uBAA8\uB4C8\uACFC node-html-parser \uD328\uD0A4\uC9C0\uB97C \uC0AC\uC6A9\uD560 \uAC83\uC785\uB2C8\uB2E4.",-1),U=a("p",null,"\uC774 \uD568\uC218\uB294 \uB2E4\uC74C\uACFC \uAC19\uC774 \uC0DD\uACBC\uC2B5\uB2C8\uB2E4:",-1),Y=a("p",null,"\uC774 \uD568\uC218\uB294 (...) \uD568\uC218 \uBD80\uBD84 \uB0B4\uC758 \uCCAB \uBC88\uC9F8 \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC5EC\uB294 \uD0DC\uADF8\uB97C \uCC3E\uAE30 \uC704\uD574 RegExp\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. 10\uBC88\uC9F8 \uC904\uC5D0\uC11C\uB294 \uC6B0\uB9AC\uC758 JSX\uC758 \uB8E8\uD2B8 \uC5D8\uB9AC\uBA3C\uD2B8\uAC00 \uB420 \uCCAB \uBC88\uC9F8 \uC790\uC2DD\uC778 \uB8E8\uD2B8 \uC5D8\uB9AC\uBA3C\uD2B8\uB97C \uBC18\uD658\uD558\uB294 parse \uD568\uC218\uB97C \uD638\uCD9C\uD569\uB2C8\uB2E4 (\uC6B0\uB9AC\uC758 \uACBD\uC6B0, wrapping div\uC785\uB2C8\uB2E4).",-1),q=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),z=a("p",null,"\uC774\uC81C \uD2B8\uB9AC \uBAA8\uC591 \uAD6C\uC870\uAC00 \uC788\uB2E4\uBA74, \uCF54\uB4DC\uB85C \uBC88\uC5ED\uD574 \uBD05\uC2DC\uB2E4. \uADF8\uB7EC\uAE30 \uC704\uD574 translate \uD568\uC218\uB97C \uD638\uCD9C\uD560 \uAC81\uB2C8\uB2E4.",-1),F=a("h1",{id:"html\u110B\u1173\u11AF-js-\u110F\u1169\u1103\u1173\u1105\u1169-\u1107\u1165\u11AB\u110B\u1167\u11A8\u1112\u1161\u1100\u1175",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#html\u110B\u1173\u11AF-js-\u110F\u1169\u1103\u1173\u1105\u1169-\u1107\u1165\u11AB\u110B\u1167\u11A8\u1112\u1161\u1100\u1175","aria-hidden":"true"},"#"),t(" HTML\uC744 JS \uCF54\uB4DC\uB85C \uBC88\uC5ED\uD558\uAE30")],-1),P=a("p",null,"\uC6B0\uB9AC\uAC00 \uD2B8\uB9AC \uBAA8\uC591 \uAD6C\uC870\uC5D0\uC11C \uC0C1\uB2F9\uD788 \uC81C\uD55C\uB41C \uAE4A\uC774\uB97C \uB2E4\uB8E8\uACE0 \uC788\uAE30 \uB54C\uBB38\uC5D0, \uC774 \uD2B8\uB9AC\uB97C \uC21C\uD68C\uD558\uAE30 \uC704\uD574 \uC548\uC804\uD558\uAC8C \uC7AC\uADC0\uB97C \uC0AC\uC6A9\uD560 \uAC81\uB2C8\uB2E4.",-1),Q=a("p",null,"\uC5EC\uAE30 \uD568\uC218\uAC00 \uC5B4\uB5BB\uAC8C \uC0DD\uACBC\uB294\uC9C0 \uC54C\uC544\uBD05\uC2DC\uB2E4. \uB098\uC911\uC5D0 \uBD84\uC11D\uD574 \uBD05\uC2DC\uB2E4:",-1),W=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),Z=a("p",null,"\uBA3C\uC800 \uBAA8\uB4E0 \uC790\uC2DD \uC694\uC18C\uB97C \uAC80\uD1A0\uD558\uACE0 \uD574\uB2F9 \uC694\uC18C\uC5D0 \uB300\uD574 \uBC88\uC5ED \uD568\uC218\uB97C \uD638\uCD9C\uD569\uB2C8\uB2E4. \uC790\uC2DD \uC694\uC18C\uAC00 \uBE44\uC5B4\uC788\uC73C\uBA74 \uD574\uB2F9 \uD638\uCD9C\uC740 null\uC744 \uBC18\uD658\uD558\uACE0 7\uBC88 \uC904\uC5D0\uC11C \uD574\uB2F9 \uACB0\uACFC\uB97C \uAC78\uB7EC\uB0C5\uB2C8\uB2E4.",-1),$=a("p",null,'\uC790\uC2DD \uC694\uC18C\uB97C \uCC98\uB9AC\uD588\uB2E4\uBA74, 9\uBC88 \uC904\uC744 \uC0B4\uD3B4\uBD05\uC2DC\uB2E4. \uC5EC\uAE30\uC11C\uB294 \uB178\uB4DC\uC758 \uC720\uD615\uC5D0 \uB300\uD55C \uBE60\uB978 \uAC80\uC99D\uC744 \uC218\uD589\uD569\uB2C8\uB2E4. \uC720\uD615\uC774 3\uC774\uBA74 \uC774\uB294 \uD14D\uC2A4\uD2B8 \uB178\uB4DC\uB97C \uC758\uBBF8\uD558\uBA70, \uD2B9\uBCC4\uD55C \uB9D0\uB85C\uB294 "\uD14D\uC2A4\uD2B8\uB9CC"\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. \uB530\uB77C\uC11C \uAD6C\uBB38 \uBD84\uC11D\uB41C \uD14D\uC2A4\uD2B8\uB97C \uBC18\uD658\uD569\uB2C8\uB2E4.',-1),aa=a("p",null,"\uC65C parseText \uD568\uC218\uB97C \uD638\uCD9C\uD558\uB294 \uAC78\uAE4C\uC694? \uD14D\uC2A4\uD2B8 \uB178\uB4DC \uB0B4\uBD80\uC5D0\uC11C\uB3C4 { ... } \uD615\uC2DD\uC758 JSX \uD45C\uD604\uC744 \uCC3E\uC544\uC57C \uD558\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. \uB530\uB77C\uC11C \uC774 \uD568\uC218\uB294 \uD544\uC694\uD55C \uACBD\uC6B0 \uBC18\uD658\uB41C \uBB38\uC790\uC5F4\uC744 \uD655\uC778\uD558\uACE0 \uC801\uC808\uD558\uAC8C \uBCC0\uACBD\uD569\uB2C8\uB2E4.",-1),ta=a("p",null,"\uADF8 \uD6C4, \uC989 \uD14D\uC2A4\uD2B8 \uB178\uB4DC\uB97C \uB2E4\uB8E8\uB294 \uAC83\uC774 \uC544\uB2C8\uB77C\uBA74, \uD0DC\uADF8 \uC774\uB984(14\uBC88 \uC904)\uC744 \uC5BB\uACE0 \uC18D\uC131\uC744 \uAD6C\uBB38 \uBD84\uC11D\uD569\uB2C8\uB2E4(16\uBC88 \uC904). \uC18D\uC131\uC744 \uAD6C\uBB38 \uBD84\uC11D\uD55C\uB2E4\uB294 \uAC83\uC740 \uD574\uB2F9 \uC6D0\uC2DC \uBB38\uC790\uC5F4\uC744 \uC801\uC808\uD55C JSON\uC73C\uB85C \uBCC0\uD658\uD558\uB294 \uC791\uC5C5\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4.",-1),sa=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),la=a("p",null,"\uB9C8\uCE68\uB0B4, \uC0DD\uC131\uD558\uACE0\uC790 \uD558\uB294 \uCF54\uB4DC \uB77C\uC778\uC744 \uBC18\uD658\uD560 \uAC83\uC785\uB2C8\uB2E4 (\uC989, \uC801\uC808\uD55C \uB9E4\uAC1C\uBCC0\uC218\uB97C \uC0AC\uC6A9\uD558\uC5EC createElement\uB97C \uD638\uCD9C\uD558\uB294 \uBD80\uBD84). \uC774\uAC83\uC774 18\uBC88 \uB77C\uC778\uC5D0\uC11C \uBC1C\uC0DD\uD558\uB294 \uC77C\uC785\uB2C8\uB2E4.",-1),oa=a("p",null,"\uC6B0\uB9AC\uAC00 \uCF54\uB4DC\uB97C \uC791\uC131 \uC911\uC774\uB77C\uB294 \uAC83\uC744 \uAE30\uC5B5\uD558\uC138\uC694. \uC2E4\uC81C\uB85C \uC2E4\uD589\uD558\uC9C0\uB294 \uC54A\uC2B5\uB2C8\uB2E4. \uADF8\uB798\uC11C \uBAA8\uB4E0 \uAC83\uC774 \uBB38\uC790\uC5F4 \uC548\uC5D0 \uC788\uC2B5\uB2C8\uB2E4.",-1),ea=a("p",null,"\uB9C8\uC9C0\uB9C9\uC73C\uB85C, \uC774 \uD568\uC218\uC5D0 \uB300\uD574 \uC8FC\uBAA9\uD574\uC57C \uD560 \uB9C8\uC9C0\uB9C9 \uC138\uBD80 \uC0AC\uD56D\uC740 \uC0DD\uC131\uB41C \uCF54\uB4DC\uAC00 MyLib \uBAA8\uB4C8\uC5D0\uC11C createElement \uBA54\uC11C\uB4DC\uB97C \uD638\uCD9C\uD55C\uB2E4\uB294 \uAC83\uC785\uB2C8\uB2E4. \uC774\uAC83\uC774 JSX \uD30C\uC77C \uB0B4\uC5D0\uC11C `./MyLib.js\u2019\uB85C\uBD80\uD130 import * as MyLib\uB97C \uD55C \uC774\uC720\uC785\uB2C8\uB2E4.",-1),da=a("p",null,"\uC774\uC81C \uD14D\uC2A4\uD2B8 \uB178\uB4DC\uC640 \uAC01 \uC694\uC18C\uC758 \uC18D\uC131 \uAC1D\uCCB4 \uB0B4\uC5D0\uC11C JSX \uD45C\uD604\uC2DD\uC744 \uB300\uCCB4\uD558\uAE30 \uC704\uD574 \uBB38\uC790\uC5F4\uC744 \uB2E4\uB8E8\uAE30 \uC2DC\uC791\uD574\uC57C \uD569\uB2C8\uB2E4.",-1),na=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),ia=a("p",null,'\uC704 \uAE00\uC744 \uC88B\uC544\uD558\uC168\uB098\uC694? \uC81C \uBB34\uB8CC \uB274\uC2A4\uB808\uD130\uB97C \uAD6C\uB3C5\uD574\uBCF4\uC138\uC694. IT \uC0B0\uC5C5\uC5D0\uC11C 20\uB144 \uAC04\uC758 \uC9C0\uD61C\uB97C \uBAA8\uB450\uC640 \uACF5\uC720\uD560\uAC8C\uC694. "The Rambling of an old developer"\uC5D0 \uAC00\uC785\uD574\uC8FC\uC138\uC694!',-1),ca=a("h1",{id:"\u1111\u116D\u1112\u1167\u11AB\u1109\u1175\u11A8-\u1100\u116E\u1106\u116E\u11AB-\u1107\u116E\u11AB\u1109\u1165\u11A8",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u1111\u116D\u1112\u1167\u11AB\u1109\u1175\u11A8-\u1100\u116E\u1106\u116E\u11AB-\u1107\u116E\u11AB\u1109\u1165\u11A8","aria-hidden":"true"},"#"),t(" \uD45C\uD604\uC2DD \uAD6C\uBB38 \uBD84\uC11D")],-1),ua=a("p",null,"\uC774 \uAD6C\uD604\uC5D0\uC11C \uC9C0\uC6D0\uD558\uB294 JSX \uD45C\uD604\uC2DD\uC758 \uC720\uD615\uC740 \uAC00\uC7A5 \uC26C\uC6B4 \uAC83\uC785\uB2C8\uB2E4. \uC608\uC81C\uC5D0\uC11C \uBCF4\uB294 \uAC83\uCC98\uB7FC \uC774\uB7EC\uD55C \uD45C\uD604\uC2DD \uC548\uC5D0 JS \uBCC0\uC218\uB97C \uCD94\uAC00\uD560 \uC218 \uC788\uACE0, \uCD5C\uC885 \uCD9C\uB825\uBB3C\uC5D0\uB294 \uADF8\uB300\uB85C \uBCC0\uC218\uB85C \uC720\uC9C0\uB429\uB2C8\uB2E4.",-1),ra=a("p",null,"\uC774 \uC791\uC5C5\uC744 \uC218\uD589\uD558\uB294 \uD568\uC218\uB4E4\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4:",-1),_a=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),pa=a("p",null,"\uC6B0\uB9AC\uAC00 \uBCF4\uAC04(\uC989, \uC911\uAD04\uD638 \uC548\uC5D0 \uBCC0\uC218\uAC00 \uC788\uB294 \uACBD\uC6B0)\uC744 \uAC00\uC9C0\uACE0 \uC788\uB2E4\uBA74 replaceInterpolation \uD568\uC218\uB97C \uD638\uCD9C\uD569\uB2C8\uB2E4. \uC774 \uD568\uC218\uB294 \uBAA8\uB4E0 \uC77C\uCE58\uD558\uB294 \uBCF4\uAC04\uC744 \uD655\uC778\uD558\uACE0 \uC801\uC808\uD788 \uD615\uC2DD\uD654\uB41C \uBB38\uC790\uC5F4\uB85C \uB300\uCCB4\uD569\uB2C8\uB2E4 (JS \uD30C\uC77C\uC5D0 \uC791\uC131\uB420 \uB54C \uBCC0\uC218 \uC774\uB984\uC744 \uB0A8\uAE34 \uC0C1\uD0DC\uB85C \uBCC0\uD658\uB429\uB2C8\uB2E4).",-1),ha=a("p",null,"\uC6B0\uB9AC\uB294 \uC774\uB7EC\uD55C \uD568\uC218\uB97C \uC18D\uC131 \uAC1D\uCCB4\uC640 \uD568\uAED8 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. JS \uCF54\uB4DC\uB97C \uBC18\uD658\uD560 \uB54C JSON.stringify \uBA54\uC11C\uB4DC\uB97C \uC0AC\uC6A9\uD558\uAE30 \uB54C\uBB38\uC5D0 \uD574\uB2F9 \uD568\uC218\uB294 \uBAA8\uB4E0 \uAC12\uC744 \uBB38\uC790\uC5F4\uB85C \uBCC0\uD658\uD569\uB2C8\uB2E4 (\uAC70\uC758 \uBAA8\uB4E0 \uAC12\uC774\uC9C0\uB9CC \uC6B0\uB9AC\uAC00 \uB2E8\uC77C \uBCC0\uC218\uB85C \uC815\uC758\uD55C \uAC83\uB4E4\uC740 \uD655\uC2E4\uD788 \uBB38\uC790\uC5F4\uB85C \uBCC0\uD658\uB429\uB2C8\uB2E4). \uADF8\uB798\uC11C \uB300\uC2E0 stringify \uBA54\uC11C\uB4DC\uAC00 \uBC18\uD658\uD55C \uBB38\uC790\uC5F4\uC744 \uD30C\uC2F1\uD558\uACE0 \uBCF4\uAC04\uB41C \uBCC0\uC218\uB97C \uC801\uC808\uD788 \uB300\uCCB4\uD560 \uAC83\uC785\uB2C8\uB2E4.",-1),ga=a("p",null,"\uC5EC\uAE30\uC11C getAttrs \uD568\uC218\uB97C \uD655\uC778\uD558\uC5EC \uC791\uC5C5 \uBC29\uC2DD\uC744 \uC774\uD574\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),ba=a("p",null,"\uC774\uC81C JSX \uD30C\uC77C\uC744 \uD30C\uC2F1\uD55C \uACB0\uACFC \uCF54\uB4DC\uB97C \uC0B4\uD3B4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.",-1),ya=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),fa=a("h1",{id:"\u110C\u1161\u1107\u1161\u1109\u1173\u110F\u1173\u1105\u1175\u11B8\u1110\u1173-\u110F\u1169\u1103\u1173",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u110C\u1161\u1107\u1161\u1109\u1173\u110F\u1173\u1105\u1175\u11B8\u1110\u1173-\u110F\u1169\u1103\u1173","aria-hidden":"true"},"#"),t(" \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uCF54\uB4DC")],-1),ma=a("p",null,"\uC81C \uC5B4\uB9AC\uBC84\uB9AC\uD55C JSX \uCF54\uB4DC\uB97C \uC77D\uACE0 \uAD6C\uBB38 \uBD84\uC11D\uD558\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC740 \uACB0\uACFC\uAC00 \uB098\uC635\uB2C8\uB2E4:",-1),wa=a("p",null,"\uC774 \uCF54\uB4DC\uC5D0\uC11C \uD765\uBBF8\uB85C\uC6B4 \uBD80\uBD84\uC740 createElement\uB85C \uC0DD\uC131\uB41C \uD638\uCD9C\uC785\uB2C8\uB2E4. JSX \uD30C\uC77C\uC5D0\uC11C \uB0B4 \uBCF4\uAC04\uB41C \uBCC0\uC218\uB97C \uCC38\uC870\uD558\uACE0 \uC911\uCCA9\uB41C \uAC83\uC744 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),Sa=a("p",null,"\uC774 \uCF54\uB4DC\uB97C \uC2E4\uD589\uD558\uBA74 \uCD9C\uB825\uC740 \uB2E4\uC74C\uACFC \uAC19\uC744 \uAC83\uC785\uB2C8\uB2E4:",-1),Ja=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),va=a("p",null,"\uD558\uC9C0\uB9CC \uB9C8\uC9C0\uB9C9 \uC9C8\uBB38\uC740 \uC544\uC9C1 \uB2F5\uC774 \uC5C6\uC2B5\uB2C8\uB2E4: createElement \uBA54\uC11C\uB4DC\uB294 \uC5B4\uB5BB\uAC8C \uAD6C\uD604\uB418\uC5C8\uC744\uAE4C\uC694? \uC74C, \uC81C\uAC00 \uAC04\uB2E8\uD55C \uBC84\uC804\uC744 \uAC00\uC9C0\uACE0 \uC788\uC2B5\uB2C8\uB2E4:",-1),Xa=a("p",null,"\uAE30\uBCF8\uC801\uC73C\uB85C, \uD0DC\uADF8 \uAC12\uC744 \uAC00\uC9C0\uB294 \uB798\uD37C \uC5D8\uB9AC\uBA3C\uD2B8\uB97C \uC0DD\uC131\uD558\uACE0, \uD574\uB2F9 \uC5D8\uB9AC\uBA3C\uD2B8\uC758 \uC18D\uC131\uC744 \uCD94\uAC00\uD55C \uD6C4, \uC790\uC2DD \uC694\uC18C\uB4E4\uC758 \uBAA9\uB85D\uC744 \uD655\uC778\uD558\uBA70 (\uCD94\uAC00\uB41C \uBAA8\uB4E0 \uC18D\uC131\uC774 \uD3EC\uD568\uB41C 'rest' \uC18D\uC131\uC785\uB2C8\uB2E4), \uC774 \uD504\uB85C\uC138\uC2A4 \uC911\uC5D0 \uAC04\uB2E8\uD788 \uC774 \uAC12\uC744 \uBB38\uC790\uC5F4\uB85C \uBC18\uD658\uD569\uB2C8\uB2E4 (line 9).",-1),xa=a("p",null,"\uADF8\uB9AC\uACE0 \uC774\uAC8C \uC804\uBD80\uC785\uB2C8\uB2E4, \uB9C8\uBC95\uC774 \uB4DC\uB7EC\uB0AC\uC5B4\uC694!",-1),ka=a("p",null,"JSX\uB294 \uC81C\uAC00 \uC88B\uC544\uD558\uB294 \uAE30\uC220 \uC911 \uD558\uB098\uC774\uBA70, JS \uD30C\uC77C \uB0B4\uBD80\uC5D0\uC11C HTML\uC744 \uC791\uC5C5\uD558\uACE0 \uC0DD\uC131\uD558\uB294 \uAC83\uC744 \uD655\uC2E4\uD788 \uAC04\uB2E8\uD558\uAC8C \uB9CC\uB4E4\uC5B4\uC90D\uB2C8\uB2E4.",-1),Ra=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),ja=a("p",null,"\uBB3C\uB860 createElement \uBA54\uC11C\uB4DC\uB97C \uC9C1\uC811 \uC0AC\uC6A9\uD558\uC5EC \uCF54\uB4DC\uB97C \uC791\uC131\uD560 \uC218 \uC788\uC9C0\uB9CC, \uBCF5\uC7A1\uD55C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uB300\uD574\uC11C\uB294 \uC27D\uC9C0 \uC54A\uC744 \uBFD0\uB9CC \uC544\uB2C8\uB77C \uAE54\uB054\uD558\uAC8C \uBCF4\uC774\uC9C0\uB3C4 \uC54A\uC744 \uAC83\uC785\uB2C8\uB2E4.",-1),Ea=a("p",null,"\uC774 \uD504\uB85C\uC81D\uD2B8\uC758 \uC804\uCCB4 \uC18C\uC2A4 \uCF54\uB4DC\uB97C \uBCF4\uACE0 \uC2F6\uB2E4\uBA74 \uC5EC\uAE30\uB97C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uAD81\uAE08\uD55C \uC810\uC774 \uC788\uB2E4\uBA74 \uB313\uAE00\uC744 \uB0A8\uACA8\uC8FC\uC138\uC694. \uD568\uAED8 \uB17C\uC758\uD574\uBD10\uC694!",-1),Ma=a("h1",{id:"\u1105\u1166\u1100\u1169\u110E\u1165\u1105\u1165\u11B7-\u110C\u1162\u1109\u1161\u110B\u116D\u11BC-\u1100\u1161\u1102\u1173\u11BC\u1112\u1161\u11AB-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173\u1105\u1169-\u110B\u1162\u11B8-\u1106\u1161\u11AB\u1103\u1173\u11AF\u1100\u1175",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u1105\u1166\u1100\u1169\u110E\u1165\u1105\u1165\u11B7-\u110C\u1162\u1109\u1161\u110B\u116D\u11BC-\u1100\u1161\u1102\u1173\u11BC\u1112\u1161\u11AB-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173\u1105\u1169-\u110B\u1162\u11B8-\u1106\u1161\u11AB\u1103\u1173\u11AF\u1100\u1175","aria-hidden":"true"},"#"),t(" \uB808\uACE0\uCC98\uB7FC \uC7AC\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uCEF4\uD3EC\uB10C\uD2B8\uB85C \uC571 \uB9CC\uB4E4\uAE30")],-1),Ta=a("img",{src:r},null,-1),La=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),Na=a("p",null,"Bit\uC758 \uC624\uD508 \uC18C\uC2A4 \uB3C4\uAD6C\uB294 25\uB9CC \uBA85 \uC774\uC0C1\uC758 \uAC1C\uBC1C\uC790\uB4E4\uC774 \uCEF4\uD3EC\uB10C\uD2B8\uB85C \uC571\uC744 \uB9CC\uB4DC\uB294 \uB370 \uB3C4\uC6C0\uC744 \uC90D\uB2C8\uB2E4.",-1),Ba=a("p",null,"\uC5B4\uB5A4 UI, \uAE30\uB2A5 \uB610\uB294 \uD398\uC774\uC9C0\uB77C\uB3C4 \uC7AC\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uCEF4\uD3EC\uB10C\uD2B8\uB85C \uBCC0\uD658\uD558\uACE0 \uC751\uC6A9 \uD504\uB85C\uADF8\uB7A8 \uAC04\uC5D0 \uACF5\uC720\uD558\uC138\uC694. \uD611\uC5C5\uD558\uACE0 \uB354 \uBE60\uB974\uAC8C \uBE4C\uB4DC\uD558\uB294 \uAC83\uC774 \uB354 \uC27D\uC2B5\uB2C8\uB2E4.",-1),Ha=a("p",null,"\u2192 \uB354 \uC54C\uC544\uBCF4\uAE30",-1),Da=a("p",null,"\uC571\uC744 \uCEF4\uD3EC\uB10C\uD2B8\uB85C \uBD84\uD560\uD558\uC5EC \uC571 \uAC1C\uBC1C\uC774 \uB354 \uC26C\uC6CC\uC9C0\uACE0, \uC6D0\uD558\uB294 \uC6CC\uD06C\uD50C\uB85C\uC6B0\uC5D0 \uB300\uD574 \uCD5C\uC0C1\uC758 \uACBD\uD5D8\uC744 \uC990\uAE30\uC138\uC694:",-1),Ca=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),Ia=i('<h2 id="\u2192-\u1106\u1161\u110B\u1175\u110F\u1173\u1105\u1169-\u1111\u1173\u1105\u1169\u11AB\u1110\u1173\u110B\u1166\u11AB\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#\u2192-\u1106\u1161\u110B\u1175\u110F\u1173\u1105\u1169-\u1111\u1173\u1105\u1169\u11AB\u1110\u1173\u110B\u1166\u11AB\u1103\u1173" aria-hidden="true">#</a> \u2192 \uB9C8\uC774\uD06C\uB85C \uD504\uB860\uD2B8\uC5D4\uB4DC</h2><h2 id="\u2192-\u1103\u1175\u110C\u1161\u110B\u1175\u11AB-\u1109\u1175\u1109\u1173\u1110\u1166\u11B7" tabindex="-1"><a class="header-anchor" href="#\u2192-\u1103\u1175\u110C\u1161\u110B\u1175\u11AB-\u1109\u1175\u1109\u1173\u1110\u1166\u11B7" aria-hidden="true">#</a> \u2192 \uB514\uC790\uC778 \uC2DC\uC2A4\uD15C</h2><h2 id="\u2192-\u110F\u1169\u1103\u1173-\u1100\u1169\u11BC\u110B\u1172-\u1106\u1175\u11BE-\u110C\u1162\u1109\u1161\u110B\u116D\u11BC" tabindex="-1"><a class="header-anchor" href="#\u2192-\u110F\u1169\u1103\u1173-\u1100\u1169\u11BC\u110B\u1172-\u1106\u1175\u11BE-\u110C\u1162\u1109\u1161\u110B\u116D\u11BC" aria-hidden="true">#</a> \u2192 \uCF54\uB4DC \uACF5\uC720 \uBC0F \uC7AC\uC0AC\uC6A9</h2><h2 id="\u2192-monorepo" tabindex="-1"><a class="header-anchor" href="#\u2192-monorepo" aria-hidden="true">#</a> \u2192 Monorepo</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),Va=a("h1",{id:"\u1103\u1165-\u110B\u1161\u11AF\u110B\u1161\u1107\u1169\u1100\u1175",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u1103\u1165-\u110B\u1161\u11AF\u110B\u1161\u1107\u1169\u1100\u1175","aria-hidden":"true"},"#"),t(" \uB354 \uC54C\uC544\uBCF4\uAE30")],-1);function Oa(Aa,Ga){return s(),n("div",null,[p,h,g,b,y,(s(),l(e("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),f,m,w,S,(s(),l(e("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),J,v,X,x,k,(s(),l(e("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),R,j,E,M,T,(s(),l(e("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),L,N,B,H,D,(s(),l(e("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),C,I,V,O,A,(s(),l(e("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),G,K,U,Y,q,(s(),l(e("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),z,F,P,Q,W,(s(),l(e("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),Z,$,aa,ta,sa,(s(),l(e("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),la,oa,ea,da,na,(s(),l(e("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),ia,ca,ua,ra,_a,(s(),l(e("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),pa,ha,ga,ba,ya,(s(),l(e("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),fa,ma,wa,Sa,Ja,(s(),l(e("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),va,Xa,xa,ka,Ra,(s(),l(e("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),ja,Ea,Ma,Ta,La,(s(),l(e("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),Na,Ba,Ha,Da,Ca,(s(),l(e("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),Ia,(s(),l(e("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),Va])}var Pa=d(_,[["render",Oa],["__file","index.html.vue"]]);export{Pa as default};