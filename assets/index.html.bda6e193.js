import{_ as i}from"./app.63e06a35.js";import{l as s,m as d,E as o,G as e,p as a,Y as l,C as t,K as n}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var r="/assets/Responsive-data-tables-with-CSS-Grid_1.c9064178.png",p="/assets/Responsive-data-tables-with-CSS-Grid_2.5c3160b4.png",c="/assets/Responsive-data-tables-with-CSS-Grid_4.e7c36637.png",_="/assets/Responsive-data-tables-with-CSS-Grid_5.5d54ef76.png",u="/assets/Responsive-data-tables-with-CSS-Grid_6.c483f615.png",h="/assets/Responsive-data-tables-with-CSS-Grid_7.0275ead3.png",m="/assets/Responsive-data-tables-with-CSS-Grid_8.26887e39.png";const g={},b=t("h1",{id:"html-css\u1105\u1169-\u1107\u1161\u11AB\u110B\u1173\u11BC\u1112\u1167\u11BC-\u1110\u1166\u110B\u1175\u1107\u1173\u11AF-\u1106\u1161\u11AB\u1103\u1173\u1102\u1173\u11AB-\u1107\u1161\u11BC\u1107\u1165\u11B8",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#html-css\u1105\u1169-\u1107\u1161\u11AB\u110B\u1173\u11BC\u1112\u1167\u11BC-\u1110\u1166\u110B\u1175\u1107\u1173\u11AF-\u1106\u1161\u11AB\u1103\u1173\u1102\u1173\u11AB-\u1107\u1161\u11BC\u1107\u1165\u11B8","aria-hidden":"true"},"#"),a(" HTML CSS\uB85C \uBC18\uC751\uD615 \uD14C\uC774\uBE14 \uB9CC\uB4DC\uB294 \uBC29\uBC95")],-1),f=t("img",{src:"https://miro.medium.com/v2/resize:fit:1400/1*jTLeBdCKKscV-GR2nVSy2w.gif"},null,-1),S=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),y=t("p",null,"\uC774 \uAE00\uC740 CSS Grid\uC5D0 \uB300\uD55C \uD1B5\uCC30\uC744 \uC81C\uACF5\uD558\uACE0, \uC77C\uC0C1\uC801\uC778 \uC791\uC5C5\uC5D0\uC11C CSS Grid\uB97C \uC5B4\uB5BB\uAC8C \uD65C\uC6A9\uD558\uB294\uC9C0\uC5D0 \uB300\uD55C \uC608\uC81C\uB97C \uC81C\uACF5\uD558\uAE30 \uC704\uD55C \uAC83\uC785\uB2C8\uB2E4.",-1),v=t("p",null,"\uADF8\uB9AC\uB4DC \uB808\uC774\uC544\uC6C3\uC740 \uC5F4\uACFC \uD589\uC758 \uC2DC\uC2A4\uD15C\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC544\uB984\uB2F5\uACE0 \uAC04\uB2E8\uD55C \uB808\uC774\uC544\uC6C3\uC744 \uB9CC\uB4E4 \uC218 \uC788\uB294 \uC0C8\uB85C\uC6B4 CSS \uAE30\uB2A5\uC785\uB2C8\uB2E4. \uC6F9 \uD398\uC774\uC9C0\uC758 \uB514\uC790\uC778\uC744 \uADC0\uCC2E\uAC8C\uD558\uC9C0 \uC54A\uACE0 \uB9CC\uB4E4 \uC218 \uC788\uAC8C \uD574\uC90D\uB2C8\uB2E4! 2017\uB144 10\uC6D4 \uC774\uD6C4\uB85C \uBAA8\uB4E0 \uC8FC\uC694 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uC9C0\uC6D0\uB418\uACE0 \uC788\uC2B5\uB2C8\uB2E4.",-1),w=t("p",null,"Wes Bos\uAC00 \uC81C\uC791\uD55C \uC774 \uBA4B\uC9C4 \uAC15\uC758\uB97C \uBCF4\uACE0 CSS Grid\uC758 \uD32C\uC774 \uB418\uC5C8\uC2B5\uB2C8\uB2E4!",-1),C=t("p",null,"Evodeck\uC5D0\uC11C \uC77C\uD55C \uD504\uB85C\uC81D\uD2B8 \uC911 \uD558\uB098\uC5D0\uC11C \uADF8\uB9AC\uB4DC \uB808\uC774\uC544\uC6C3\uC744 \uC0AC\uC6A9\uD558\uC5EC \uB370\uC774\uD130 \uD14C\uC774\uBE14\uC744 \uAD6C\uD604\uD560 \uC218 \uC788\uB294 \uAE30\uD68C\uB97C \uBCF4\uC558\uACE0 \uC2DC\uB3C4\uD574 \uBCF4\uAE30\uB85C \uACB0\uC815\uD588\uC2B5\uB2C8\uB2E4. \uAC1C\uBC1C \uD504\uB85C\uC138\uC2A4\uC640 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uC9C4\uD589\uC5D0 \uD070 \uC601\uD5A5\uC744 \uBBF8\uCE58\uC9C0 \uC54A\uB294 \uBC29\uC2DD\uC73C\uB85C \uBCC0\uACBD\uD558\uAC70\uB098 \uB864\uBC31\uD560 \uC218 \uC788\uB294 \uC791\uC740 \uB0B4\uC6A9\uC744 \uC120\uD0DD\uD588\uC2B5\uB2C8\uB2E4.",-1),x=t("p",null,"\uC2DC\uAC01\uC801\uC778 \uBAA9\uC801\uC73C\uB85C, \uAC00\uC0C1\uC758 \uC0AC\uC6A9\uC790 \uB370\uC774\uD130\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC791\uC740 \uC608\uC81C\uB97C \uBCF4\uC5EC \uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4.",-1),G=t("img",{src:r},null,-1),q=t("p",null,"\uC774 \uD14C\uC774\uBE14\uC758 CSS \uCF54\uB4DC\uB294 \uBA87 \uC904\uC778\uAC00\uC694?",-1),k=t("img",{src:p},null,-1),R=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),B=t("p",null,"12\uC904\uC785\uB2C8\uB2E4! \uB9DE\uC2B5\uB2C8\uB2E4. CSS\uC5D0\uC11C 12\uC904\uC758 \uCF54\uB4DC\uB9CC \uC788\uC73C\uBA74 \uB418\uACE0 \uB9C8\uBC95\uC740 2\uBC88\uC9F8\uC640 3\uBC88\uC9F8 \uC904\uC5D0\uC11C \uC77C\uC5B4\uB0A9\uB2C8\uB2E4. \uC5EC\uAE30\uC11C\uB294 \uD074\uB798\uC2A4\uAC00 grid\uC778 HTML \uC694\uC18C\uAC00 \uB0B4\uC6A9\uC744 \uADF8\uB9AC\uB4DC\uB85C \uD45C\uC2DC\uD558\uACE0 \uAC01\uAC01\uC758 5\uAC1C \uC5F4\uC774 \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uACF5\uAC04\uC758 1fr\uB85C \uC124\uC815\uB418\uB3C4\uB85D \uC9C0\uC815\uD588\uC2B5\uB2C8\uB2E4! \u{1F632} \uB2E4\uB978 \uC124\uC815\uC740 \uD544\uC694 \uC5C6\uC73C\uBA70, \uC774\uB294 \uBCF8\uC9C8\uC801\uC73C\uB85C \uBC18\uC751\uD615\uC785\uB2C8\uB2E4! \uB610\uD55C CSS\uC758 repeat() \uD568\uC218\uB97C \uC0AC\uC6A9\uD588\uB294\uB370, \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uC5EC\uAE30\uB97C \uD655\uC778\uD558\uC2ED\uC2DC\uC624.",-1),V=t("img",{src:"https://miro.medium.com/v2/resize:fit:1400/1*38Jo6O4-7ZBLrq0fXVRvOA.gif"},null,-1),E=t("p",null,'"1fr"\uC774\uB77C\uB294 \uB9C8\uBC95 \uD45C\uD604\uC740 \uC694\uC18C\uAC00 \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uACF5\uAC04\uC758 \uC77C\uBD80\uBD84\uC744 \uCC28\uC9C0\uD55C\uB2E4\uB294 \uAC83\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4! \uC774\uB97C \uD1B5\uD574 \uD544\uC694\uD55C\uB9CC\uD07C \uB9CE\uC740 \uACF5\uAC04\uC744 \uAC16\uB294 \uC5F4\uC744 \uB9CC\uB4E4\uACE0 \uACE0\uC815 \uB108\uBE44\uB85C \uC791\uC5C5\uD560 \uD544\uC694\uAC00 \uC5C6\uC5B4\uC9D1\uB2C8\uB2E4! \u{1F62E}',-1),L=t("p",null,"\uC774\uC81C \uB2E4\uC591\uD55C \uB108\uBE44\uC758 \uC5F4\uC774 \uD544\uC694\uD55C \uACBD\uC6B0, \uB2E4\uC74C\uACFC \uAC19\uC774 \uC9C0\uC815\uD558\uBA74 \uB429\uB2C8\uB2E4:",-1),N=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),T=n('<img src="'+c+'"><p>\uC5EC\uAE30\uC11C \uB9D0\uD558\uB294 \uBC14\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.</p><ul><li>&quot;Id&quot; \uC5F4\uC740 \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uACF5\uAC04\uC758 1fr\uC744 \uCC28\uC9C0\uD574\uC57C \uD569\uB2C8\uB2E4.</li><li>&quot;Full Name&quot;\uACFC &quot;Email&quot; \uC5F4\uC740 \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uACF5\uAC04\uC758 3fr\uC744 \uCC28\uC9C0\uD574\uC57C \uD569\uB2C8\uB2E4.</li><li>&quot;Country&quot;\uC640 &quot;Created at&quot; \uC5F4\uC740 \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uACF5\uAC04\uC758 2fr\uC744 \uCC28\uC9C0\uD574\uC57C \uD569\uB2C8\uB2E4.</li></ul><p>\uACB0\uACFC\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4:</p><img src="'+_+'"><p>\uADF8\uB9AC\uACE0 \uC6B0\uB9AC\uB294 \uB354 \uB9CE\uC740 \uAC83\uC744 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4! \uBD84\uC218 \uB300\uC2E0 \uACE0\uC815 \uB108\uBE44\uB85C \uC791\uC5C5\uD558\uB824\uBA74 minmax() \uD568\uC218\uB97C \uC0AC\uC6A9\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4, \uCCAB \uBC88\uC9F8 \uC5F4\uC758 \uB108\uBE44\uB97C \uCD5C\uC18C 50px, \uCD5C\uB300 100px\uB85C \uACE0\uC815\uD558\uB824\uBA74 \uCF54\uB4DC\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4:</p><img src="'+u+'"><p>\uADF8\uB7EC\uBA74 \uCD5C\uC885 \uACB0\uACFC\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',9),F=t("img",{src:h},null,-1),K=t("img",{src:m},null,-1),O=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),z=t("p",null,"CSS Grid\uC758 \uAC00\uC7A5 \uC77C\uBC18\uC801\uC778 \uC0AC\uC6A9\uBC95\uC740 grid-template-areas\uB97C \uC0AC\uC6A9\uD558\uC5EC \uB808\uC774\uC544\uC6C3\uC744 \uB9CC\uB4DC\uB294 \uAC83\uC774\uC9C0\uB9CC, \uC800\uB294 \uD14C\uC774\uBE14\uC5D0\uB3C4 \uB9E4\uC6B0 \uC720\uC6A9\uD558\uB2E4\uACE0 \uC0DD\uAC01\uD569\uB2C8\uB2E4!",-1),H=t("p",null,"\uC694\uC57D\uD558\uBA74, \uC800\uB294 CSS Grid\uAC00 \uB9E4\uC6B0 \uC720\uC6A9\uD558\uACE0 \uC0AC\uC6A9\uD558\uAE30 \uC27D\uB2E4\uACE0 \uC0DD\uAC01\uD558\uBA70, \uBBF8\uB798\uAC00 \uC788\uACE0 \uCEE4\uBBA4\uB2C8\uD2F0\uC5D0\uC11C \uC798 \uBC1B\uC544\uB4E4\uC5EC\uC9C8 \uAC83\uC774\uB77C\uACE0 \uC0DD\uAC01\uD569\uB2C8\uB2E4!",-1),M=t("p",null,"Grid\uB97C Flexbox\uB098 \uD14C\uC774\uBE14\uBCF4\uB2E4 \uC120\uD0DD\uD574\uC57C \uD558\uB294 \uC774\uC720\uC5D0 \uB300\uD55C \uC138\uBD80 \uC0AC\uD56D\uC774\uB098 \uB17C\uC758\uC5D0\uB294 \uB4E4\uC5B4\uAC00\uC9C0 \uC54A\uACA0\uC2B5\uB2C8\uB2E4. \uB2E8\uC21C\uD788 Grid\uB97C \uC120\uD0DD\uD55C \uC774\uC720\uB294 \uB9E4\uC6B0 \uC27D\uAC8C \uC791\uC5C5\uD560 \uC218 \uC788\uACE0, \uD14C\uC774\uBE14\uBCF4\uB2E4 \uCF54\uB4DC\uAC00 \uC801\uAC8C \uB4E4\uBA70, Flexbox\uBCF4\uB2E4 \uBCF5\uC7A1\uD558\uC9C0 \uC54A\uC73C\uBA70, \uBB34\uC5C7\uBCF4\uB2E4 Out-of-the-box\uC5D0\uC11C \uB9CE\uC740 \uAE30\uB2A5\uC744 \uC81C\uACF5\uD558\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4!",-1);function j(A,D){return s(),d("div",null,[b,f,S,(s(),o(l("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),y,v,w,C,x,G,q,k,R,(s(),o(l("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),B,V,E,L,N,(s(),o(l("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),T,(s(),o(l("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),F,K,O,(s(),o(l("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),z,H,M])}var P=i(g,[["render",j],["__file","index.html.vue"]]);export{P as default};
