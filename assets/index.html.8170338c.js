import{_ as d}from"./app.a99075bb.js";import{l as o,m as n,E as l,G as s,p as a,Y as e,C as t}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var i="/assets/UnderstandFloatandFlexboxinComparisonwithBooks_0.942d87db.png";const _={},c=t("p",null,"\uC774\uAC74 \uB0B4\uAC00 Medium\uC5D0\uC11C \uCC98\uC74C \uC4F0\uB294 \uAE00\uC774\uC5D0\uC694, \uADF8\uB798\uC11C \uC544\uC8FC \uAC04\uACB0\uD558\uACE0 \uD575\uC2EC\uC5D0\uB9CC \uC9D1\uC911\uD588\uC5B4\uC694.",-1),p=t("p",null,"\uC8FC\uC81C\uB97C \uAE4A\uAC8C \uD30C\uAE30 \uC804\uC5D0, float\uC640 flexbox\uAC00 \uBB34\uC5C7\uC778\uC9C0 \uC54C\uC544\uC57C \uD574\uC694.",-1),u=t("p",null,[t("img",{src:i,alt:"\uC774\uBBF8\uC9C0"})],-1),r=t("p",null,"\uD55C \uC904\uB85C \uB9D0\uD558\uB294 Float\uC640 Flexbox:\u{1F447}\u{1F3FB}",-1),h=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),g=t("p",null,"\uD50C\uB85C\uD2B8(Float)\uC640 \uD50C\uB809\uC2A4\uBC15\uC2A4(Flexbox)\uB294 CSS\uC5D0\uC11C \uC694\uC18C\uB4E4\uC744 \uC6F9\uD398\uC774\uC9C0\uC5D0\uC11C \uC606\uC73C\uB85C \uBC30\uCE58\uD558\uB294 \uB450 \uAC00\uC9C0 \uBC29\uBC95\uC774\uC5D0\uC694.",-1),b=t("p",null,"\uB9C8\uCE58 \uCC45\uC744 \uC120\uBC18\uC5D0 \uC815\uB9AC\uD558\uB294 \uAC83\uCC98\uB7FC! \u{1F4DA}",-1),m=t("p",null,"\uD50C\uB85C\uD2B8\uB294 \uC694\uC18C\uB4E4\uC744 \uC11C\uB85C \uC778\uC811\uD558\uAC8C \uB9CC\uB4DC\uB294 \uB9C8\uC220\uCC98\uB7FC \uC791\uB3D9\uD574\uC694. \uD558\uC9C0\uB9CC \uB54C\uB85C\uB294 \uB2E4\uB8E8\uAE30 \uAE4C\uB2E4\uB86D\uACE0 \uCD94\uAC00\uC801\uC778 \uBA85\uB839\uC774 \uD544\uC694\uD560 \uC218\uB3C4 \uC788\uC5B4\uC694!",-1),f=t("p",null,"\uD50C\uB809\uC2A4\uBC15\uC2A4\uB294 \uC694\uC18C\uB4E4\uC744 \uC27D\uAC8C \uBC30\uCE58\uD560 \uC218 \uC788\uB3C4\uB85D \uC124\uACC4\uB418\uC5C8\uC5B4\uC694. \uB9C8\uCE58 \uCC45\uC744 \uAE54\uB054\uD55C \uD589\uACFC \uC5F4\uB85C \uBC30\uC5F4\uD558\uB294 \uAC83\uCC98\uB7FC \uB9D0\uC774\uC8E0.",-1),y=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),x=t("p",null,"\uD50C\uB86F\uC744 \uC0AC\uC6A9\uD558\uBA74 \uBAA8\uB4E0 \uC694\uC18C\uC5D0 \uD06C\uAE30\uB97C \uC9C0\uC815\uD574\uC57C \uD558\uB294\uB370, \uC774\uAC83\uC774 \uC870\uAE08 \uD63C\uB780\uC2A4\uB7EC\uC6B8 \uC218 \uC788\uC5B4\uC694. \uCC45\uB9C8\uB2E4 \uB108\uBE44\uC640 \uB192\uC774\uB97C \uCE21\uC815\uD55C \uB2E4\uC74C\uC5D0 \uB193\uB294 \uAC83\uACFC \uAC19\uC740 \uB290\uB08C\uC774\uC8E0!",-1),w=t("p",null,"\uD50C\uB809\uC2A4\uBC15\uC2A4\uB294 \uD06C\uAE30\uC640 \uC704\uCE58\uB97C \uC790\uB3D9\uC73C\uB85C \uC870\uC815\uD574\uC8FC\uC5B4\uC694. \uB9C8\uCE58 \uC720\uC5F0\uD55C \uCC45\uC7A5\uCC98\uB7FC \uBB3C\uAC74\uB4E4\uC744 \uB9DE\uAC8C \uBC30\uCE58\uD574 \uC900\uB2F5\uB2C8\uB2E4!",-1),v=t("p",null,"\uD50C\uB86F\uC740 \uB54C\uB54C\uB85C \uBAA8\uB4E0 \uCC45\uC758 \uB192\uC774\uB97C \uB3D9\uC77C\uD558\uAC8C \uB9CC\uB4DC\uB294 \uB370 \uC5B4\uB824\uC6C0\uC744 \uACAA\uC744 \uC218 \uC788\uC5B4\uC694. \uC5B4\uB5A4 \uCC45\uC740 \uB354 \uD0A4\uAC00 \uD06C\uAC8C \uC790\uB77C\uACE0, \uB2E4\uB978 \uCC45\uC740 \uB0AE\uAC8C \uB0A8\uC544 \uC788\uB294 \uAC83\uACFC \uAC19\uC544\uC694!",-1),k=t("p",null,"\uD558\uC9C0\uB9CC \uD50C\uB809\uC2A4\uBC15\uC2A4\uB294 \uC774\uB97C \uD574\uACB0\uD574 \uC918\uC694! \uB9C8\uCE58 \uBAA8\uB4E0 \uCC45\uC744 \uB3D9\uC77C\uD55C \uB192\uC774\uB85C \uB9CC\uB4E4\uC5B4 \uC8FC\uB294 \uB9C8\uBC95\uACFC \uAC19\uC544\uC694. \uADF8\uB798\uC11C \uB2F9\uC2E0\uC758 \uCC45\uC7A5\uC774 \uAE54\uB054\uD558\uACE0 \uC815\uB3C8\uB418\uC5B4 \uBCF4\uC774\uB294 \uAC70\uC8E0!",-1),F=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),B=t("p",null,"\uD50C\uB86F\uC744 \uC0AC\uC6A9\uD558\uBA74 \uD734\uB300\uD3F0\uC774\uB098 \uD0DC\uBE14\uB9BF\uC5D0\uC11C \uC88B\uC544\uBCF4\uC774\uAC8C \uB9CC\uB4DC\uB294 \uAC83\uC774 \uC870\uAE08 \uAE4C\uB2E4\uB85C\uC6B8 \uC218 \uC788\uC5B4\uC694. \uADF8\uAC74 \uB9C8\uCE58 \uC11C\uB85C \uB2E4\uB978 \uCC45\uC7A5\uC5D0 \uCC45\uC744 \uC7AC\uBC30\uC5F4\uD558\uB294 \uAC83\uACFC \uAC19\uC544\uC694!",-1),C=t("p",null,"\uADF8\uB7EC\uB098 \uD50C\uB809\uC2A4\uBC15\uC2A4\uB294 \uC790\uC5F0\uC2A4\uB7FD\uAC8C \uB2E4\uC591\uD55C \uACF5\uAC04\uC5D0 \uB9DE\uAC8C \uC694\uC18C\uB97C \uB9DE\uCD94\uB294 \uB370 \uB2A5\uC219\uD574\uC694. \uADF8\uAC74 \uB9C8\uCE58 \uC5B4\uB5A4 \uBC29\uC5D0\uB4E0 \uC790\uB3D9\uC73C\uB85C \uB9DE\uCDB0\uC9C0\uB294 \uBCC0\uC2E0\uD558\uB294 \uCC45\uC7A5\uACFC \uAC19\uC544\uC694!",-1),E=t("p",null,"\uC694\uC57D\uD558\uBA74, \uD50C\uB86F\uC740 \uC62C\uB4DC \uC2A4\uCFE8 \uB9C8\uC220 \uAC19\uC9C0\uB9CC, \uD50C\uB809\uC2A4\uBC15\uC2A4\uB294 \uD604\uB300\uC758 \uC288\uD37C\uD788\uC5B4\uB85C\uCC98\uB7FC \uC6F9 \uB808\uC774\uC544\uC6C3\uC744 \uC27D\uAC8C \uB9CC\uB4E4\uC5B4\uC8FC\uC8E0!",-1),N=t("p",null,"\uAC1C\uC778\uC801\uC778 \uC870\uC5B8, \uC774 \uBAA8\uB4E0 \uC18D\uC131\uB4E4\uC744 \uC644\uBCBD\uD788 \uC775\uD790 \uD544\uC694\uB294 \uC5C6\uC5B4\uC694. \uAE30\uBCF8\uC744 \uC774\uD574\uD558\uACE0 \uD504\uB85C\uC81D\uD2B8\uB97C \uB9CC\uB4E4\uBA70 \uC5F0\uC2B5\uD574\uBCF4\uC138\uC694.",-1),S=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1);function V(D,G){return o(),n("div",null,[c,p,u,r,h,(o(),l(e("script"),null,{default:s(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),g,b,m,f,y,(o(),l(e("script"),null,{default:s(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),x,w,v,k,F,(o(),l(e("script"),null,{default:s(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),B,C,E,N,S,(o(),l(e("script"),null,{default:s(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1}))])}var z=d(_,[["render",V],["__file","index.html.vue"]]);export{z as default};
