import{_ as i}from"./app.3052dcfb.js";import{l as o,m as n,E as s,G as e,p as t,Y as l,C as a,K as d}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var r="/assets/HowtocreateInfiniteHorizontalScrollandHover-PausewithPureCSS_0.7d799663.png",c="/assets/HowtocreateInfiniteHorizontalScrollandHover-PausewithPureCSS_2.6c422221.png",u="/assets/HowtocreateInfiniteHorizontalScrollandHover-PausewithPureCSS_4.4fb76c3d.png";const p={},_=a("p",null,"\uB2F9\uC2E0\uC740 \uC6F9\uC0AC\uC774\uD2B8\uC5D0 \uB9E4\uB825\uC801\uC778 \uAC00\uB85C \uC2A4\uD06C\uB864 \uD6A8\uACFC\uB97C \uCD94\uAC00\uD574\uBCF4\uACE0 \uC2F6\uC740 \uC801\uC774 \uC788\uB098\uC694? CSS \uC560\uB2C8\uBA54\uC774\uC158\uACFC \uD638\uBC84 \uC0C1\uD0DC\uB97C \uACB0\uD569\uD558\uBA74 \uCF58\uD150\uCE20\uB97C \uB354 \uC0DD\uB3D9\uAC10 \uC788\uAC8C \uB9CC\uB4E4 \uC218 \uC788\uC5B4\uC694. \uAC04\uB2E8\uD55C HTML\uACFC CSS\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC77C\uC2DC \uC911\uC9C0 \uBC0F \uD638\uBC84 \uAE30\uB2A5\uC774 \uC788\uB294 \uBB34\uD55C \uAC00\uB85C \uC2A4\uD06C\uB864\uC744 \uC5B4\uB5BB\uAC8C \uAD6C\uD604\uD558\uB294\uC9C0 \uC54C\uC544\uBD10\uC694.",-1),h=a("p",null,"\uC0AC\uB78C\uB4E4\uC774 \uACE0\uBBFC\uD558\uB294 \uC77C\uBC18\uC801\uC778 \uBB38\uC81C\uC810\uC740 \uB2E4\uC74C\uACFC \uAC19\uC544\uC694.",-1),m=a("ol",null,[a("li",null,"\uC774\uBBF8\uC9C0 \uBAA9\uB85D\uC758 \uB05D\uC5D0 \uB3C4\uB2EC\uD55C \uD6C4 \uAC00\uB85C \uC2A4\uD06C\uB864\uC774 \uC911\uB2E8\uB418\uB294 \uBB38\uC81C."),a("li",null,"\uC0C8 \uB8E8\uD504\uC5D0\uC11C \uCCAB \uBC88\uC9F8 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD55C \uD6C4 \uC2A4\uD06C\uB864\uC774 \uBD80\uB4DC\uB7FD\uC9C0 \uC54A\uC740 \uBB38\uC81C."),a("li",null,"\uC0C8\uB85C\uC6B4 \uB8E8\uD504\uB97C \uC2DC\uC791\uD558\uAE30 \uC804\uC5D0 \uC2A4\uD06C\uB864 \uCEE8\uD14C\uC774\uB108 \uC548\uC5D0 \uB108\uBB34 \uB9CE\uC740 \uACF5\uAC04\uC774 \uB0A8\uC544 \uC788\uB294 \uBB38\uC81C.")],-1),g=a("p",null,"\uC774 \uBB38\uC81C\uB4E4\uC744 \uD574\uACB0\uD558\uAE30 \uC704\uD574 \uC774 \uAE30\uC0AC\uB97C \uB530\uB77C \uD574\uBCF4\uC138\uC694.",-1),f=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),y=a("p",null,"HTML\uC774 \uC5B4\uB5BB\uAC8C \uBCF4\uC774\uB294\uC9C0 \uC0B4\uD3B4\uBCF4\uB3C4\uB85D \uD574\uC694.",-1),S=a("p",null,[a("img",{src:r,alt:"HowtocreateInfiniteHorizontalScrollandHover-PausewithPureCSS_0.png"})],-1),b=a("p",null,"\uC774 \uBB38\uC81C\uB97C \uD574\uACB0\uD558\uAE30 \uC704\uD574 \uCD08\uAE30 \uC790\uC2DD \uC694\uC18C \uC606\uC5D0 \uB3D9\uC77C\uD55C \uC790\uC2DD \uC694\uC18C\uB97C \uC911\uBCF5\uD574\uC11C \uCD94\uAC00\uD558\uBA74 \uB429\uB2C8\uB2E4. \uB180\uB78D\uAC8C\uB3C4 \uAC04\uB2E8\uD558\uC8E0? \uD558\uC9C0\uB9CC \uC774 \uD574\uACB0\uCC45\uC774 \uC5B4\uB5BB\uAC8C \uC791\uB3D9\uD558\uB294\uC9C0 \uAD81\uAE08\uD558\uC2DC\uC8E0?",-1),v=a("h1",{id:"css-\u1106\u1161\u1107\u1165\u11B8-\u1100\u1169\u11BC\u1100\u1162",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#css-\u1106\u1161\u1107\u1165\u11B8-\u1100\u1169\u11BC\u1100\u1162","aria-hidden":"true"},"#"),t(" CSS \uB9C8\uBC95 \uACF5\uAC1C")],-1),w=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),H=a("p",null,"CSS \uD30C\uC77C\uC740 \uC694\uC18C\uB4E4\uC5D0 \uB300\uD55C \uC2A4\uD0C0\uC77C\uC744 \uC815\uC758\uD558\uB294\uB370, \uC720\uC5F0\uD55C \uB808\uC774\uC544\uC6C3\uC744 \uC124\uC815\uD558\uACE0 \uC560\uB2C8\uBA54\uC774\uC158\uC744 \uC815\uC758\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uD575\uC2EC\uC740 @keyframes \uADDC\uCE59\uC5D0 \uC788\uC73C\uBA70, left \uC18D\uC131\uC744 100%\uC5D0\uC11C -100%\uB85C \uC560\uB2C8\uBA54\uC774\uC158\uD654\uD558\uC5EC \uC218\uD3C9 \uC2A4\uD06C\uB864 \uD6A8\uACFC\uB97C \uB9CC\uB4E4\uC5B4 \uC9C0\uC18D\uC801\uC778 \uC6C0\uC9C1\uC784 \uD6A8\uACFC\uB97C \uC5BB\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),C=a("p",null,[a("img",{src:"https://miro.medium.com/v2/resize:fit:1200/1*vMDS-jnJPuUTGelL8KlKqg.gif",alt:"animation"})],-1),x=a("p",null,[a("img",{src:c,alt:"image"})],-1),P=a("p",null,"animation-delay \uC18D\uC131\uC740 .carousel-primary \uD074\uB798\uC2A4\uB97C \uAC00\uC9C4 \uC694\uC18C\uB4E4\uC5D0\uAC8C \uC560\uB2C8\uBA54\uC774\uC158\uC774 \uC2DC\uC791\uB418\uAE30 \uC804 \uC9C0\uC5F0\uC744 \uB3C4\uC785\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.",-1),k=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),z=a("p",null,"\uC774\uD574\uB97C \uB3D5\uAE30 \uC704\uD574 \uCABC\uAC1C \uBD05\uC2DC\uB2E4:",-1),B=a("ul",null,[a("li",null,"animation: scroll-horizontal 20s linear infinite;: \uC774 \uC904\uC740 .carousel-secondary\uC5D0 \uC801\uC6A9\uB41C \uC560\uB2C8\uBA54\uC774\uC158\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4. \uC5EC\uAE30\uC11C \uC0AC\uC6A9\uB41C scroll-horizontal \uC560\uB2C8\uBA54\uC774\uC158\uC740 \uC694\uC18C\uB97C \uC218\uD3C9\uC73C\uB85C 20\uCD08 \uB3D9\uC548 \uC77C\uC815\uD55C \uC18D\uB3C4\uB85C \uC774\uB3D9\uD558\uC5EC \uBB34\uD55C\uD55C \uC218\uD3C9 \uC2A4\uD06C\uB864 \uD6A8\uACFC\uB97C \uB9CC\uB4ED\uB2C8\uB2E4."),a("li",null,"animation-delay: 10s;: \uC774 \uC18D\uC131\uC740 .carousel-secondary \uD074\uB798\uC2A4\uB97C \uAC00\uC9C4 \uC694\uC18C\uB4E4\uC5D0\uAC8C \uC560\uB2C8\uBA54\uC774\uC158\uC774 \uC2DC\uC791\uB418\uAE30 \uC804 10\uCD08\uC758 \uB51C\uB808\uC774\uB97C \uB3C4\uC785\uD569\uB2C8\uB2E4. \uC774 \uB51C\uB808\uC774\uB294 \uC815\uD574\uC9C4 \uC2DC\uAC04\uC774 \uC9C0\uB09C \uD6C4\uC5D0 \uC560\uB2C8\uBA54\uC774\uC158\uC774 \uC2DC\uC791\uB418\uB3C4\uB85D \uD569\uB2C8\uB2E4.")],-1),M=a("h1",{id:"css-\u1109\u1165\u11AB\u1110\u1162\u11A8\u110C\u1161\u1105\u1173\u11AF-\u110B\u1175\u110B\u116D\u11BC\u1112\u1161\u11AB-hover-pause-\u1100\u116E\u1112\u1167\u11AB",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#css-\u1109\u1165\u11AB\u1110\u1162\u11A8\u110C\u1161\u1105\u1173\u11AF-\u110B\u1175\u110B\u116D\u11BC\u1112\u1161\u11AB-hover-pause-\u1100\u116E\u1112\u1167\u11AB","aria-hidden":"true"},"#"),t(" CSS \uC120\uD0DD\uC790\uB97C \uC774\uC6A9\uD55C Hover-Pause \uAD6C\uD604")],-1),T=a("p",null,"\uC5EC\uAE30\uC11C \uD765\uBBF8\uB85C\uC6B4 \uC810\uC740 JavaScript \uAC1C\uC785 \uC5C6\uC774 CSS \uC120\uD0DD\uC790\uB97C \uD65C\uC6A9\uD558\uC5EC hover \uAE30\uB2A5\uC744 \uAD6C\uD604\uD55C\uB2E4\uB294 \uAC83\uC785\uB2C8\uB2E4. \uC0AC\uC6A9\uC790\uAC00 .carousel-primary \uC704\uC5D0 \uB9C8\uC6B0\uC2A4\uB97C \uC62C\uB9AC\uBA74 .carousel-primary \uBC0F .carousel-secondary\uAC00 \uBAA8\uB450 \uC560\uB2C8\uBA54\uC774\uC158\uC744 \uC77C\uC2DC \uC911\uC9C0\uD569\uB2C8\uB2E4. \uAC8C\uB2E4\uAC00 \uC2A4\uD06C\uB864 \uCEE8\uD14C\uC774\uB108 \uC704\uC5D0 \uB9C8\uC6B0\uC2A4\uB97C \uC62C\uB9AC\uBA74 .carousel-primary\uC758 \uC560\uB2C8\uBA54\uC774\uC158\uC774 \uC77C\uC2DC \uC911\uC9C0\uB418\uB294\uB370, \uC0AC\uC6A9\uC790\uAC00 .carousel-primary \uBC14\uB85C \uC704\uC5D0 \uB9C8\uC6B0\uC2A4\uB97C \uC62C\uB9AC\uC9C0 \uC54A\uB294 \uD55C\uC694\uC18C\uC785\uB2C8\uB2E4.",-1),D=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),I=d('<p><img src="https://miro.medium.com/v2/resize:fit:1200/1*l0GMNsK98-WD1FjDaSBrhQ.gif" alt="\uC774\uBBF8\uC9C0"></p><p><img src="'+u+'" alt="\uC774\uBBF8\uC9C0"></p><p>\uC5EC\uAE30\uC5D0 \uC804\uCCB4 \uC18C\uC2A4 \uCF54\uB4DC \uB9C1\uD06C\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uD544\uC694\uD55C \uB300\uB85C \uD65C\uC6A9\uD558\uAC70\uB098 \uACF5\uC720\uD574 \uC8FC\uC138\uC694.</p><h1 id="\u110E\u116C\u110C\u1169\u11BC-\u1109\u1162\u11BC\u1100\u1161\u11A8" tabindex="-1"><a class="header-anchor" href="#\u110E\u116C\u110C\u1169\u11BC-\u1109\u1162\u11BC\u1100\u1161\u11A8" aria-hidden="true">#</a> \uCD5C\uC885 \uC0DD\uAC01</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),K=a("p",null,"HTML\uACFC CSS\uB9CC\uC744 \uC0AC\uC6A9\uD558\uC5EC \uD638\uBC84 \uC77C\uC2DC\uC815\uC9C0 \uAE30\uB2A5\uC774 \uC788\uB294 \uBB34\uD55C \uC2A4\uD06C\uB864 \uC774\uBBF8\uC9C0 \uCE90\uB85C\uC140\uC744 \uB9CC\uB4E4\uC5B4\uBCF4\uB294 \uAC83\uC740 \uC774\uB7EC\uD55C \uAE30\uC220\uB4E4\uC774 \uC81C\uACF5\uD558\uB294 \uC720\uC5F0\uC131\uACFC \uCC3D\uC758\uC131\uC744 \uBCF4\uC5EC\uC8FC\uB294 \uC88B\uC740 \uC608\uC2DC\uC785\uB2C8\uB2E4. \uC774 \uBC29\uBC95\uC744 \uD1B5\uD574 JavaScript \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB098 \uBCF5\uC7A1\uD55C \uC2A4\uD06C\uB9BD\uD2B8 \uC5C6\uC774\uB3C4 \uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC744 \uD5A5\uC0C1\uC2DC\uD0AC \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),L=a("p",null,"\uC990\uAC70\uC6B4 \uCF54\uB529\uD558\uC138\uC694! \u{1F60A}",-1);function N(G,J){return o(),n("div",null,[_,h,m,g,f,(o(),s(l("script"),null,{default:e(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),y,S,b,v,w,(o(),s(l("script"),null,{default:e(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),H,C,x,P,k,(o(),s(l("script"),null,{default:e(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),z,B,M,T,D,(o(),s(l("script"),null,{default:e(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),I,(o(),s(l("script"),null,{default:e(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),K,L])}var U=i(p,[["render",N],["__file","index.html.vue"]]);export{U as default};
