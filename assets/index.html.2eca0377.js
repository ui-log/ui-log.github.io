import{_ as d}from"./app.3052dcfb.js";import{l as a,m as i,E as s,G as e,p as l,Y as o,C as t}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var n="/assets/PaginatedvsVirtualizedList_1.1db2bec0.png";const c={},r=t("p",null,"\uC8FC\uB85C \uB450 \uAC00\uC9C0\uC758 \uBAA9\uC801\uC740 \uB354 \uB9CE\uC740 \uCF58\uD150\uCE20\uB97C \uB85C\uB4DC\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4.",-1),u=t("p",null,"\uC6F9 \uD398\uC774\uC9C0\uC5D0 \uC81C\uD488 \uBAA9\uB85D\uC774\uB098 \uC18C\uC15C \uBBF8\uB514\uC5B4 \uD53C\uB4DC \uB4F1 \uB300\uB7C9\uC758 \uB370\uC774\uD130\uB97C \uD6A8\uACFC\uC801\uC73C\uB85C \uAD00\uB9AC\uD558\uAE30 \uC704\uD574\uC11C\uB294 \uB450 \uAC00\uC9C0 \uC77C\uBC18\uC801\uC778 \uC811\uADFC \uBC29\uC2DD\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uD398\uC774\uC9C0\uB124\uC774\uC158\uACFC \uAC00\uC0C1\uD654\uC778\uB370, \uC774 \uB458\uC740 \uB370\uC774\uD130 \uCC98\uB9AC \uBC29\uC2DD\uACFC \uC0AC\uC6A9\uC790 \uACBD\uD5D8(UX)\uC5D0\uC11C \uCC28\uC774\uAC00 \uC788\uC2B5\uB2C8\uB2E4.",-1),_=t("h1",{id:"\u1111\u1166\u110B\u1175\u110C\u1175\u1102\u1166\u110B\u1175\u1109\u1167\u11AB",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#\u1111\u1166\u110B\u1175\u110C\u1175\u1102\u1166\u110B\u1175\u1109\u1167\u11AB","aria-hidden":"true"},"#"),l(" \uD398\uC774\uC9C0\uB124\uC774\uC158")],-1),p=t("p",null,[t("img",{src:"https://miro.medium.com/v2/resize:fit:1400/1*e46A0Y8obP325HVgew8_hg.gif",alt:"\uC774\uBBF8\uC9C0"})],-1),h=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),g=t("p",null,'\uD398\uC774\uC9C0\uB124\uC774\uC158\uC740 \uB370\uC774\uD130\uB97C \uB354 \uC791\uACE0 \uAD00\uB9AC\uD558\uAE30 \uC26C\uC6B4 \uCCAD\uD06C\uB85C \uB098\uB215\uB2C8\uB2E4. \uC0AC\uC6A9\uC790\uB294 \uC774 "\uD398\uC774\uC9C0"\uB97C \uBC84\uD2BC\uC774\uB098 \uC22B\uC790\uB97C \uD1B5\uD574 \uD0D0\uC0C9\uD558\uBA70, \uC77C\uBC18\uC801\uC73C\uB85C \uAC01 \uD398\uC774\uC9C0\uC5D0\uC11C \uC77C\uC815 \uC218\uC758 \uD56D\uBAA9\uC744 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uC591\uD55C \uD398\uC774\uC9C0\uB124\uC774\uC158 \uC2A4\uD0C0\uC77C\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4:',-1),m=t("ul",null,[t("li",null,'Pages: \uD398\uC774\uC9C0\uB2F9 \uC77C\uC815 \uC218\uC758 \uD56D\uBAA9\uC744 \uD45C\uC2DC\uD558\uBA70, \uC0AC\uC6A9\uC790\uB294 \uD0D0\uC0C9\uC744 \uC704\uD574 "\uB2E4\uC74C" \uB610\uB294 "\uC774\uC804"\uC744 \uD074\uB9AD\uD574\uC57C \uD569\uB2C8\uB2E4.'),t("li",null,"Infinite Scroll: \uC0AC\uC6A9\uC790\uAC00 \uC2A4\uD06C\uB864\uC744 \uD558\uBA74 \uCF58\uD150\uCE20\uAC00 \uC790\uB3D9\uC73C\uB85C \uB85C\uB4DC\uB418\uC5B4 \uB05D\uC774 \uC5C6\uB294 \uBAA9\uB85D\uCC98\uB7FC \uBCF4\uC785\uB2C8\uB2E4."),t("li",null,"Load More Button: \uC0AC\uC6A9\uC790\uAC00 \uCD94\uAC00 \uB370\uC774\uD130\uB97C \uAC00\uC838\uC624\uAE30 \uC704\uD574 \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uBA74, \uC0C8\uB85C\uC6B4 \uCF58\uD150\uCE20\uB97C \uB85C\uB4DC\uD558\uB294\uB370 \uB354 \uB9CE\uC740 \uC81C\uC5B4\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4.")],-1),f=t("p",null,"\uD398\uC774\uC9C0\uB124\uC774\uC158\uC758 \uB2E8\uC810: DOM \uACFC\uBD80\uD558",-1),b=t("p",null,"\uD398\uC774\uC9C0\uB124\uC774\uC158\uC758 \uC77C\uBC18\uC801\uC778 \uBB38\uC81C\uB294 \uC0C8 \uB370\uC774\uD130\uB97C \uAE30\uC874 \uBAA9\uB85D\uC5D0 \uCD94\uAC00\uD560 \uB54C, DOM \uB178\uB4DC(\uC6F9 \uD398\uC774\uC9C0\uC758 \uC694\uC18C)\uC758 \uC218\uAC00 \uC99D\uAC00\uD55C\uB2E4\uB294 \uAC83\uC785\uB2C8\uB2E4. \uC774\uB294 \uBE0C\uB77C\uC6B0\uC800\uAC00 \uC131\uC7A5\uD558\uB294 \uC694\uC18C \uC218\uB97C \uAD00\uB9AC\uD558\uAE30 \uC5B4\uB824\uC6CC\uD558\uC5EC \uB290\uB9B0 \uC2A4\uD06C\uB864\uB9C1\uACFC \uC751\uB2F5\uC131\uACFC \uAC19\uC740 \uC131\uB2A5 \uBB38\uC81C\uB97C \uC77C\uC73C\uD0AC \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),y=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),w=t("h1",{id:"\u1100\u1161\u1109\u1161\u11BC\u1112\u116A",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#\u1100\u1161\u1109\u1161\u11BC\u1112\u116A","aria-hidden":"true"},"#"),l(" \uAC00\uC0C1\uD654")],-1),v=t("p",null,[t("img",{src:n,alt:"\uC774\uBBF8\uC9C0"})],-1),x=t("p",null,"\uAC00\uC0C1\uD654\uB294 \uB2E4\uB978 \uBC29\uC2DD\uC73C\uB85C \uC774 \uBB38\uC81C\uB97C \uD574\uACB0\uD569\uB2C8\uB2E4:",-1),D=t("ul",null,[t("li",null,"\uC2A4\uB9C8\uD2B8 \uB80C\uB354\uB9C1: \uBDF0\uD3EC\uD2B8(\uC0AC\uC6A9\uC790\uAC00 \uD654\uBA74\uC5D0\uC11C \uBCFC \uC218 \uC788\uB294 \uC601\uC5ED)\uC5D0 \uD604\uC7AC \uD45C\uC2DC\uB418\uB294 \uD56D\uBAA9\uC5D0 \uB300\uD55C DOM \uB178\uB4DC\uB9CC \uC0DD\uC131\uD558\uBBC0\uB85C \uB2E4\uC6B4\uB85C\uB4DC\uB41C \uB370\uC774\uD130\uC591\uACFC \uAD00\uACC4\uC5C6\uC774 \uBDF0\uD3EC\uD2B8\uC5D0 \uBCF4\uC774\uB294 \uD56D\uBAA9\uC5D0\uB9CC \uB178\uB4DC\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4."),t("li",null,"\uB178\uB4DC \uC7AC\uD65C\uC6A9: \uC0AC\uC6A9\uC790\uAC00 \uC2A4\uD06C\uB864\uD558\uBA74, \uAC00\uC0C1 \uBAA9\uB85D\uC740 \uC0C8\uB86D\uAC8C \uD45C\uC2DC\uB418\uB294 \uD56D\uBAA9\uC744 \uC704\uD574 \uAE30\uC874 DOM \uB178\uB4DC\uB97C \uC7AC\uC0AC\uC6A9\uD558\uC5EC DOM \uC870\uC791\uC744 \uCD5C\uC18C\uD654\uD569\uB2C8\uB2E4.")],-1),M=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),k=t("p",null,"DOM \uD06C\uAE30\uB97C \uC791\uAC8C \uC720\uC9C0\uD558\uC5EC \uB9E4\uC6B0 \uD070 \uB370\uC774\uD130 \uC138\uD2B8\uC5D0 \uB300\uD574 \uC6D0\uD65C\uD55C \uC2A4\uD06C\uB864 \uC131\uB2A5\uC744 \uBCF4\uC7A5\uD569\uB2C8\uB2E4.",-1),B=t("p",null,"\uAC00\uC0C1\uD654\uB97C \uC704\uD574 react-window \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB294 Brian Vaughn\uC774 \uB9AC\uB77C\uC774\uD2B8\uD55C react-virtualized \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC785\uB2C8\uB2E4.",-1);function O(V,z){return a(),i("div",null,[r,u,_,p,h,(a(),s(o("script"),null,{default:e(()=>[l(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),g,m,f,b,y,(a(),s(o("script"),null,{default:e(()=>[l(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),w,v,x,D,M,(a(),s(o("script"),null,{default:e(()=>[l(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),k,B])}var A=d(c,[["render",O],["__file","index.html.vue"]]);export{A as default};
