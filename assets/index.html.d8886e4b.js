import{_ as a}from"./app.63e06a35.js";import{l,m as n,E as i,G as s,p as o,Y as e,C as t}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var d="/assets/GitvsGitHubUnderstandingtheCoreDifferences_0.5e7e9aca.png";const u={},_=t("p",null,"\uC18C\uD504\uD2B8\uC6E8\uC5B4 \uAC1C\uBC1C \uBD84\uC57C\uC5D0\uC11C Git\uACFC GitHub\uC740 \uC885\uC885 \uC0C1\uD638 \uAD50\uD658 \uAC00\uB2A5\uD558\uAC8C \uC0AC\uC6A9\uB418\uB294 \uB450 \uC6A9\uC5B4\uB85C, \uCD08\uBCF4\uC790\uC640 \uC219\uB828\uB41C \uAC1C\uBC1C\uC790 \uBAA8\uB450\uC5D0\uAC8C \uD63C\uB780\uC744 \uC57C\uAE30\uD569\uB2C8\uB2E4. \uBE44\uB85D \uB458\uC740 \uBC00\uC811\uD55C \uAD00\uB828\uC774 \uC788\uC9C0\uB9CC, \uAC01\uAC01 \uB2E4\uB978 \uBAA9\uC801\uC73C\uB85C \uC0AC\uC6A9\uB418\uBA70 \uBC84\uC804 \uAD00\uB9AC \uBC0F \uD611\uC5C5 \uCF54\uB529 \uC138\uACC4\uB97C \uD0D0\uC0C9\uD558\uB294 \uB370 \uB9E4\uC6B0 \uC911\uC694\uD569\uB2C8\uB2E4. Git\uACFC GitHub\uC758 \uCC28\uC774\uB97C \uC774\uD574\uD558\uB294 \uAC83\uC774 \uC911\uC694\uD569\uB2C8\uB2E4.",-1),c=t("p",null,"Git\uC774\uB780?",-1),r=t("p",null,"Git\uC740 2005\uB144 Linus Torvalds\uAC00 \uB9CC\uB4E0 \uBD84\uC0B0 \uBC84\uC804 \uAD00\uB9AC \uC2DC\uC2A4\uD15C(VCS)\uC73C\uB85C, \uC8FC\uB85C \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uAC1C\uBC1C \uC911\uC5D0 \uC18C\uC2A4 \uCF54\uB4DC\uB97C \uAD00\uB9AC\uD558\uAE30 \uC704\uD574 \uC124\uACC4\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uAC1C\uBC1C\uC790\uB4E4\uC740 \uCF54\uB4DC\uBCA0\uC774\uC2A4\uC758 \uBCC0\uACBD \uC0AC\uD56D\uC744 \uCD94\uC801\uD558\uACE0 \uB2E4\uB978 \uC0AC\uB78C\uB4E4\uACFC \uD611\uC5C5\uD558\uBA70 \uD544\uC694\uD55C \uACBD\uC6B0 \uC774\uC804 \uBC84\uC804\uC73C\uB85C \uC190\uC27D\uAC8C \uB3CC\uC544\uAC08 \uC218 \uC788\uC2B5\uB2C8\uB2E4. SVN\uACFC \uAC19\uC740 \uC911\uC559\uC9D1\uC911\uC2DD \uBC84\uC804 \uAD00\uB9AC \uC2DC\uC2A4\uD15C\uACFC \uB2EC\uB9AC Git\uC740 \uBD84\uC0B0 \uBC29\uC2DD\uC73C\uB85C \uC791\uB3D9\uD558\uC5EC \uAC01 \uAC1C\uBC1C\uC790\uAC00 \uB85C\uCEEC \uCEF4\uD4E8\uD130\uC5D0 \uC800\uC7A5\uC18C\uC758 \uC644\uC804\uD55C \uC0AC\uBCF8\uC744 \uAC00\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),p=t("p",null,"Git\uC758 \uC8FC\uC694 \uD2B9\uC9D5:",-1),G=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),b=t("ul",null,[t("li",null,"\uB85C\uCEEC \uC800\uC7A5\uC18C: Git\uC740 \uBAA8\uB4E0 \uBCC0\uACBD \uC0AC\uD56D\uACFC \uBE0C\uB79C\uCE58\uB97C \uAC1C\uBC1C\uC790 \uAC01\uC790\uC758 \uCEF4\uD4E8\uD130\uC5D0 \uC644\uBCBD\uD55C \uD788\uC2A4\uD1A0\uB9AC\uB85C \uC800\uC7A5\uD569\uB2C8\uB2E4. \uC774\uB294 \uAC1C\uBC1C\uC790\uB4E4\uC774 \uC624\uD504\uB77C\uC778\uC73C\uB85C \uC791\uC5C5\uD560 \uC218 \uC788\uACE0 \uBCC0\uACBD \uC0AC\uD56D\uC744 \uC9C0\uC5ED\uC801\uC73C\uB85C \uCEE4\uBC0B\uD558\uACE0 \uB098\uC911\uC5D0 \uC911\uC559 \uC800\uC7A5\uC18C\uC640 \uB3D9\uAE30\uD654\uD560 \uC218 \uC788\uC74C\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4."),t("li",null,"\uBE0C\uB79C\uCE58 \uBC0F \uBCD1\uD569: Git\uC740 \uC0C8\uB85C\uC6B4 \uAE30\uB2A5\uC744 \uC2E4\uD5D8\uD558\uAC70\uB098 \uBC84\uADF8\uB97C \uC218\uC815\uD560 \uB54C \uBCF8 \uCF54\uB4DC\uBCA0\uC774\uC2A4\uC5D0 \uC601\uD5A5\uC744 \uC8FC\uC9C0 \uC54A\uACE0 \uBE0C\uB79C\uCE58\uB97C \uB9CC\uB4DC\uB294 \uD504\uB85C\uC138\uC2A4\uB97C \uB2E8\uC21C\uD654\uD569\uB2C8\uB2E4. \uBCC0\uACBD \uC0AC\uD56D\uC774 \uD14C\uC2A4\uD2B8\uB418\uACE0 \uC900\uBE44\uB418\uBA74 \uAC1C\uBC1C\uC790\uB4E4\uC740 \uBE0C\uB79C\uCE58\uB97C \uBA54\uC778 \uBE0C\uB79C\uCE58\uB85C \uBCD1\uD569\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."),t("li",null,"\uC18D\uB3C4\uC640 \uD6A8\uC728\uC131: Git\uC740 \uB300\uADDC\uBAA8 \uCF54\uB4DC\uBCA0\uC774\uC2A4\uB97C \uD6A8\uACFC\uC801\uC73C\uB85C \uAD00\uB9AC\uD558\uB294 \uC18D\uB3C4\uC640 \uD6A8\uC728\uC131\uC73C\uB85C \uC54C\uB824\uC838 \uC788\uC2B5\uB2C8\uB2E4. \uBCC0\uACBD \uC0AC\uD56D \uCEE4\uBC0B, \uBE0C\uB79C\uCE58 \uC0DD\uC131, \uBCD1\uD569\uACFC \uAC19\uC740 \uC791\uC5C5\uB4E4\uC740 \uC544\uC8FC \uBE60\uB974\uAC8C \uC774\uB8E8\uC5B4\uC9C0\uBA70, \uBCF5\uC7A1\uD55C \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C\uB3C4 \uC6D0\uD560\uD55C \uD611\uC5C5\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4.")],-1),h=t("p",null,[t("img",{src:d,alt:"GitvsGitHubUnderstandingtheCoreDifferences_0.png"})],-1),g=t("p",null,"GitHub\uB780 \uBB34\uC5C7\uC778\uAC00\uC694?",-1),m=t("p",null,"\uBC18\uBA74\uC5D0 GitHub\uC740 2008\uB144 Tom Preston-Werner, Chris Wanstrath, PJ Hyett\uC5D0 \uC758\uD574 \uC124\uB9BD\uB41C Git \uC800\uC7A5\uC18C\uB97C \uC704\uD55C \uC6F9 \uAE30\uBC18 \uD638\uC2A4\uD305 \uC11C\uBE44\uC2A4\uC785\uB2C8\uB2E4. \uC774\uB294 \uAC1C\uBC1C\uC790\uAC00 Git \uC800\uC7A5\uC18C\uB97C \uD638\uC2A4\uD305\uD558\uACE0 \uB2E4\uB978 \uC0AC\uB78C\uACFC \uD611\uC5C5\uD558\uBA70 \uC624\uD508 \uC18C\uC2A4 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uAE30\uC5EC\uD560 \uC218 \uC788\uB294 \uD50C\uB7AB\uD3FC\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. Git\uC774 \uAE30\uBCF8 \uBC84\uC804 \uAD00\uB9AC \uC2DC\uC2A4\uD15C\uC778 \uBC18\uBA74, GitHub\uC740 \uAC1C\uBC1C\uC790\uB4E4\uC744 \uC704\uD574 \uD2B9\uBCC4\uD788 \uC81C\uC791\uB41C \uD611\uC5C5 \uAE30\uB2A5\uACFC \uC18C\uC15C \uB124\uD2B8\uC6CC\uD0B9 \uC694\uC18C\uC758 \uB808\uC774\uC5B4\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",-1),f=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),H=t("p",null,"GitHub\uC758 \uC8FC\uC694 \uAE30\uB2A5:",-1),y=t("ul",null,[t("li",null,"\uC6D0\uACA9 \uC800\uC7A5\uC18C \uD638\uC2A4\uD305: GitHub\uB294 \uAC1C\uBC1C\uC790\uB4E4\uC774 Git \uC800\uC7A5\uC18C\uB97C \uD074\uB77C\uC6B0\uB4DC\uC5D0 \uC800\uC7A5\uD560 \uC218 \uC788\uB294 \uC6D0\uACA9 \uC800\uC7A5\uC18C \uD638\uC2A4\uD305 \uC11C\uBE44\uC2A4 \uC5ED\uD560\uC744 \uD569\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574 \uC778\uD130\uB137 \uC5F0\uACB0\uC774 \uAC00\uB2A5\uD55C \uC5B4\uB514\uC5D0\uC11C\uB4E0 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uC561\uC138\uC2A4\uD558\uACE0 \uD611\uC5C5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."),t("li",null,"\uC774\uC288 \uCD94\uC801 \uBC0F \uD504\uB85C\uC81D\uD2B8 \uAD00\uB9AC: GitHub\uB294 \uC774\uC288 \uCD94\uC801, \uD504\uB85C\uC81D\uD2B8 \uAD00\uB9AC \uBC0F \uD300 \uD611\uC5C5\uC744 \uC704\uD55C \uB3C4\uAD6C\uB97C \uC81C\uACF5\uD558\uC5EC \uAC1C\uBC1C\uC790\uB4E4\uC774 \uC791\uC5C5\uC744 \uC870\uC9C1\uD654\uD558\uACE0 \uBC84\uADF8\uB97C \uCD94\uC801\uD558\uBA70 \uD300 \uB0B4\uC5D0\uC11C \uD611\uC5C5\uC744 \uC870\uC728\uD558\uAE30 \uC27D\uAC8C \uB9CC\uB4ED\uB2C8\uB2E4."),t("li",null,"\uD480 \uB9AC\uD018\uC2A4\uD2B8 \uBC0F \uCF54\uB4DC \uB9AC\uBDF0: GitHub\uC758 \uAC00\uC7A5 \uAC15\uB825\uD55C \uAE30\uB2A5 \uC911 \uD558\uB098\uB294 \uD480 \uB9AC\uD018\uC2A4\uD2B8\uB97C \uC9C0\uC6D0\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4. \uC774 \uAE30\uB2A5\uC744 \uD1B5\uD574 \uAC1C\uBC1C\uC790\uB4E4\uC740 \uBCC0\uACBD \uC0AC\uD56D\uC744 \uC81C\uC548\uD558\uACE0 \uCF54\uB4DC\uB97C \uB9AC\uBDF0\uD558\uBA70 \uBCF8 \uCF54\uB4DC\uB85C \uBCD1\uD569\uD558\uAE30 \uC804\uC5D0 \uD53C\uB4DC\uBC31\uC744 \uC81C\uACF5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574 \uD22C\uBA85\uD558\uACE0 \uD611\uC5C5\uC801\uC778 \uAC1C\uBC1C \uC6CC\uD06C\uD50C\uB85C\uC6B0\uB97C \uC6A9\uC774\uD558\uAC8C \uD569\uB2C8\uB2E4.")],-1),v=t("p",null,"Git vs GitHub: \uCC28\uC774\uC810 \uC774\uD574\uD558\uAE30",-1),w=t("p",null,"\uC694\uC57D\uD558\uC790\uBA74, Git\uC740 \uD504\uB85C\uC81D\uD2B8\uC758 \uBCC0\uACBD \uB0B4\uC5ED\uC744 \uAD00\uB9AC\uD558\uB294 \uBC84\uC804 \uAD00\uB9AC \uC2DC\uC2A4\uD15C\uC774\uBA70 GitHub\uB294 Git\uC744 \uAE30\uBC18\uC73C\uB85C \uAD6C\uCD95\uB41C \uC6F9 \uAE30\uBC18 \uD50C\uB7AB\uD3FC\uC73C\uB85C, \uC800\uC7A5\uC18C\uB97C \uD638\uC2A4\uD305\uD558\uACE0 \uB2E4\uB978 \uC0AC\uB78C\uB4E4\uACFC \uD611\uC5C5\uD558\uBA70 \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uD504\uB85C\uC81D\uD2B8\uB97C \uAD00\uB9AC\uD560 \uC218 \uC788\uB294 \uAE30\uB2A5\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. Git\uC740 \uB85C\uCEEC \uAE30\uACC4\uC5D0\uC11C \uB3C5\uB9BD\uC801\uC73C\uB85C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC9C0\uB9CC, GitHub\uB294 \uC911\uC559 \uC9D1\uC911\uC2DD \uD50C\uB7AB\uD3FC\uC744 \uC81C\uACF5\uD558\uC5EC Git \uC800\uC7A5\uC18C\uB97C \uD638\uC2A4\uD305\uD558\uACE0 \uACF5\uC720\uD560 \uC218 \uC788\uC5B4 \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uAC1C\uBC1C\uC758 \uD611\uC5C5 \uCE21\uBA74\uC744 \uAC15\uD654\uD569\uB2C8\uB2E4.",-1),x=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),C=t("p",null,"\uACB0\uB860\uC801\uC73C\uB85C, Git\uACFC GitHub\uB294 \uD604\uB300 \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uAC1C\uBC1C \uC6CC\uD06C\uD50C\uB85C\uC6B0\uC5D0\uC11C \uC911\uC694\uD55C \uC5ED\uD560\uC744 \uD569\uB2C8\uB2E4. Git\uC740 \uBC84\uC804 \uAD00\uB9AC\uC758 \uAE30\uCD08\uB97C \uD615\uC131\uD558\uB294 \uBC18\uBA74, GitHub\uB294 \uB2E4\uC591\uD55C \uD611\uC5C5 \uB3C4\uAD6C\uC640 \uC18C\uC15C \uAE30\uB2A5\uC73C\uB85C \uBCF4\uC644\uD558\uC5EC \uC624\uD508 \uC18C\uC2A4 \uAE30\uC5EC \uBC0F \uD300 \uD611\uC5C5\uC5D0 \uAC15\uB825\uD55C \uD50C\uB7AB\uD3FC\uC774 \uB429\uB2C8\uB2E4. Git\uACFC GitHub \uC0AC\uC774\uC758 \uCC28\uC774\uB97C \uC774\uD574\uD558\uB294 \uAC83\uC740 \uAC1C\uBC1C\uC790\uAC00 \uAC1C\uBC1C \uD504\uB85C\uC138\uC2A4\uB97C \uAC04\uC18C\uD654\uD558\uACE0 \uB354 \uB113\uC740 \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uAC1C\uBC1C \uCEE4\uBBA4\uB2C8\uD2F0\uC640 \uC18C\uD1B5\uD558\uB294 \uB370 \uC911\uC694\uD569\uB2C8\uB2E4.",-1),k=t("p",null,"\uC81C \uCD5C\uC2E0 \uC791\uC5C5 \uB0B4\uC6A9\uC744 \uC5C5\uB370\uC774\uD2B8\uD558\uB824\uBA74! \uC800\uB97C Medium\uC5D0\uC11C \uD314\uB85C\uC6B0\uD558\uACE0 \uC774 \uAE30\uC0AC\uC5D0 \uBC15\uC218\uB97C \uCE58\uC154\uC11C \uC81C \uCF58\uD150\uCE20 \uC81C\uC791\uC744 \uC9C0\uC6D0\uD574\uC8FC\uC138\uC694. \uC77D\uC5B4 \uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4!",-1);function B(V,D){return l(),n("div",null,[_,c,r,p,G,(l(),i(e("script"),null,{default:s(()=>[o(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b,h,g,m,f,(l(),i(e("script"),null,{default:s(()=>[o(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),H,y,v,w,x,(l(),i(e("script"),null,{default:s(()=>[o(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),C,k])}var W=a(u,[["render",B],["__file","index.html.vue"]]);export{W as default};
