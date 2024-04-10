import{_ as d}from"./app.63e06a35.js";import{l as s,m as n,E as l,G as e,p as o,Y as a,C as t,K as i}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var u="/assets/Integrating-Rust-into-Next.js:-How-To-Developer-Guide_0.6344ee4a.png",c="/assets/Integrating-Rust-into-Next.js:-How-To-Developer-Guide_1.cb27fe2d.png",p="/assets/Integrating-Rust-into-Next.js:-How-To-Developer-Guide_2.a510640f.png";const r={},_=t("p",null,[t("img",{src:u,alt:"Integrating Rust into Next.js: How-To Developer Guide"})],-1),h=t("p",null,"\uB7EC\uC2A4\uD2B8\uB294 \uCD5C\uADFC\uC5D0 \uAC1C\uBC1C\uC790 \uCEE4\uBBA4\uB2C8\uD2F0\uC5D0\uC11C \uD070 \uC8FC\uBAA9\uC744 \uBC1B\uB294 \uCD5C\uC2E0 \uC5B8\uC5B4 \uC911 \uD558\uB098\uC785\uB2C8\uB2E4. \uC131\uB2A5 \uBA74\uC5D0\uC11C C/C++\uACFC \uACBD\uC7C1\uD560 \uB9CC\uD07C\uC774\uB098 \uC6B0\uC218\uD558\uC9C0\uB9CC \uC5EC\uB7EC \uB2E4\uC591\uD55C \uC791\uC5C5\uC5D0 \uD65C\uC6A9\uD560 \uC218 \uC788\uACE0 \uC5EC\uB7EC \uD50C\uB7AB\uD3FC\uC5D0\uC11C \uC2E4\uD589\uD560 \uC218 \uC788\uC744 \uB9CC\uD07C \uC811\uADFC\uC131\uC774 \uC88B\uC2B5\uB2C8\uB2E4. \uBB3C\uB860 \uADF8 \uC911 \uD558\uB098\uAC00 \uC6F9 \uD50C\uB7AB\uD3FC\uC785\uB2C8\uB2E4. \uC774 \uAE00\uC5D0\uC11C\uB294 \uC5B4\uB5BB\uAC8C\uD558\uC5EC \uC6F9 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C Rust\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294\uC9C0 \uADF8\uB9AC\uACE0 \uC774\uBBF8 \uC775\uC219\uD55C \uD50C\uB7AB\uD3FC\uC5D0 \uC5B4\uB5BB\uAC8C \uD1B5\uD569\uD560 \uC218 \uC788\uB294\uC9C0 \uC54C\uC544\uBCFC \uAC83\uC785\uB2C8\uB2E4.",-1),g=t("p",null,"\uC6F9 \uAC1C\uBC1C\uB3C4 \uB7EC\uC2A4\uD2B8\uC758 \uD729\uC52C\uC744 \uD0D4\uACE0 \uC544\uC8FC \uC798 \uC5B4\uC6B8\uB9B0\uB2E4\uACE0 \uBCF4\uC774\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uB7EC\uC2A4\uD2B8\uB294 \uD45C\uC900 JavaScript \uB3C4\uAD6C\uC778 \uBC88\uB4E4\uB7EC, \uCEF4\uD30C\uC77C\uB7EC, \uD14C\uC2A4\uD2B8 \uC2E4\uD589\uAE30 \uBC0F \uC2EC\uC9C0\uC5B4 \uB7F0\uD0C0\uC784\uC774 \uB7EC\uC2A4\uD2B8\uB85C \uC7AC\uC791\uC131\uB418\uC5B4 \uC5C4\uCCAD\uB09C \uC131\uB2A5 \uD5A5\uC0C1\uC744 \uC774\uB8E8\uB294 \uB4F1 \uB180\uB77C\uC6B4 \uC2DC\uC791\uC744 \uD588\uC2B5\uB2C8\uB2E4. \uC11C\uB85C \uB2E4\uB978 \uC5B8\uC5B4\uC778 PHP, Python, Objective C, Swift, JavaScript \uB4F1\uC744 \uC0AC\uC6A9\uD574 \uD504\uB85C\uB355\uC158 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uC77C\uD55C \uACBD\uD5D8\uC774 \uC788\uB294 \uC624\uB79C \uAE30\uAC04 \uD504\uB85C\uADF8\uB798\uBA38\uB85C\uC11C \uC0C8\uB85C\uC6B4 \uC5B8\uC5B4\uB97C \uBC30\uC6B8 \uB54C \uD56D\uC0C1 \uAC00\uB2A5\uD55C \uBE68\uB9AC \uD504\uB85C\uB355\uC158 \uCF54\uB4DC\uB97C \uC791\uC131\uD558\uB294 \uAC83\uC774 \uBAA9\uD45C\uC785\uB2C8\uB2E4. \uAE30\uBCF8 \uAC1C\uB150\uC740 \uC911\uC694\uD558\uC9C0\uB9CC \uC5B8\uC5B4\uB97C \uC2E4\uC81C \uBB38\uC81C \uD574\uACB0\uB85C\uC368 \uBCF4\uACE0 \uBC30\uC6B0\uB294 \uAC83\uC774 \uC911\uC694\uD569\uB2C8\uB2E4.",-1),b=t("p",null,"\uCD5C\uADFC\uC5D0\uB294 \uC8FC\uB85C \uBC31\uC5D4\uB4DC \uBC0F API\uC5D0 \uCD08\uC810\uC744 \uB9DE\uCD94\uC5B4 \uC654\uAE30 \uB54C\uBB38\uC5D0 \uB7EC\uC2A4\uD2B8\uB85C \uB0B4 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uC0C8\uB85C\uC6B4 API \uC5D4\uB4DC\uD3EC\uC778\uD2B8\uB97C \uC791\uC131\uD558\uAE30\uB85C \uD588\uC2B5\uB2C8\uB2E4. \uC81C \uAE00 \uC911 \uC5B4\uB290 \uAC83\uC744 \uC77D\uC73C\uC168\uB2E4\uBA74 \uB300\uBD80\uBD84\uC758 \uD504\uB85C\uC81D\uD2B8\uB97C \uD638\uC2A4\uD305\uD558\uB294 \uB370 Vercel\uC744 \uC0AC\uC6A9\uD55C\uB2E4\uB294 \uAC83\uC744 \uC774\uBBF8 \uC544\uC2E4 \uAC83\uC785\uB2C8\uB2E4. \uC81C\uAC00 \uC791\uC5C5 \uC911\uC778 \uC571\uB4E4\uC758 \uC778\uD504\uB77C \uAD00\uB9AC\uB97C \uAC71\uC815\uD558\uC9C0 \uC54A\uACE0 \uAE30\uB2A5\uC744 \uC804\uB2EC\uD558\uAE30\uB9CC\uC5D0 \uCD08\uC810\uC744 \uB9DE\uCD9C \uC218 \uC788\uAC8C \uD574\uC8FC\uB294 \uB2E4\uC591\uC131\uC774 \uB9C8\uC74C\uC5D0 \uB4E4\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. \uB2F9\uC5F0\uD788 Vercel \uD50C\uB7AB\uD3FC\uC5D0\uC11C \uB7EC\uC2A4\uD2B8 \uCF54\uB4DC\uB97C \uBE4C\uB4DC, \uBC30\uD3EC \uBC0F \uC2E4\uD589\uD560 \uC218 \uC788\uB294\uC9C0, \uADF8\uB9AC\uACE0 \uD604\uC7AC (\uB300\uBD80\uBD84) JavaScript \uAE30\uBC18 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uD1B5\uD569\uD560 \uC218 \uC788\uB294\uC9C0 \uAD81\uAE08\uD588\uC2B5\uB2C8\uB2E4.",-1),y=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),f=t("p",null,"\uAE30\uC068 \uAC00\uB4DD\uD55C \uC18C\uC2DD! Vercel\uC5D0\uC11C Rust \uCF54\uB4DC\uB97C \uBC30\uD3EC\uD558\uB294 \uC5EC\uB7EC \uAC00\uC9C0 \uBC29\uBC95\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uC591\uD55C \uC635\uC158\uC744 \uC0B4\uD3B4\uBCF4\uACE0 \uC120\uD0DD\uD55C \uBC29\uBC95\uC5D0 \uB300\uD574 \uC790\uC138\uD788 \uC0B4\uD3B4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.",-1),m=t("ul",null,[t("li",null,"\uC5E3\uC9C0(Edge)\uC5D0\uC11C WebAssembly (Wasm) \uC0AC\uC6A9: Rust \uCF54\uB4DC\uB97C \uC791\uC131\uD558\uC5EC .wasm \uC774\uC9C4 \uD30C\uC77C\uB85C \uCEF4\uD30C\uC77C\uD55C \uB2E4\uC74C JavaScript \uCF54\uB4DC\uC5D0\uC11C \uB2E4\uB978 \uD328\uD0A4\uC9C0/\uD30C\uC77C\uCC98\uB7FC \uAC00\uC838\uC62C \uC218 \uC788\uC2B5\uB2C8\uB2E4."),t("li",null,"\uC0AC\uC6A9\uC790 \uC815\uC758 Rust \uB7F0\uD0C0\uC784 \uC0AC\uC6A9: Node.js \uBC0F Next.js\uC640 \uAC19\uC740 \uD504\uB808\uC784\uC6CC\uD06C\uB97C \uBC30\uD3EC\uD558\uB294 \uAC83 \uC678\uC5D0\uB3C4, Vercel\uC740 Go, Python \uBC0F Rust\uC640 \uAC19\uC740 \uB2E4\uB978 \uC5B8\uC5B4\uC5D0\uC11C \uCEF4\uD30C\uC77C\uB41C \uB124\uC774\uD2F0\uBE0C \uCF54\uB4DC\uB97C \uBC30\uD3EC\uD560 \uC218 \uC788\uB294 \uB2E4\uC591\uD55C \uC0AC\uC6A9\uC790 \uC815\uC758 \uB7F0\uD0C0\uC784\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uB7F0\uD0C0\uC784 \uC911 \uC77C\uBD80\uB294 Vercel\uC5D0\uC11C \uAD00\uB9AC\uD558\uACE0 \uC77C\uBD80\uB294 \uCEE4\uBBA4\uB2C8\uD2F0\uAC00 \uAD00\uB9AC\uD558\uB294\uB370, \uB458 \uB2E4 \uC798 \uC791\uB3D9\uD569\uB2C8\uB2E4 (\uC774\uC804\uC5D0 PHP \uBC0F Python \uB7F0\uD0C0\uC784\uC744 \uC0AC\uC6A9\uD574\uBD24\uC2B5\uB2C8\uB2E4)."),t("li",null,"Next.js \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C Rust \uB7F0\uD0C0\uC784 \uC0AC\uC6A9: Vercel\uACFC \uD568\uAED8 Rust \uB7F0\uD0C0\uC784\uC744 \uC0AC\uC6A9\uD558\uB294 \uAC83\uC774 \uC88B\uC9C0\uB9CC, \uC2E4\uC81C\uB85C \uB9CE\uC740 \uD504\uB85C\uC81D\uD2B8\uAC00 Next.js\uC640 \uAC19\uC740 \uD504\uB808\uC784\uC6CC\uD06C\uC5D0\uC11C \uC9C4\uD589\uB418\uACE0 \uC788\uC2B5\uB2C8\uB2E4. Rust\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uD504\uB85C\uC81D\uD2B8 \uC218\uB97C \uB298\uB9AC\uAE30 \uC704\uD574 Rust \uB7F0\uD0C0\uC784\uC744 Next.js\uC640 \uD1B5\uD569\uD558\uAE30\uB85C \uACB0\uC815\uD588\uC2B5\uB2C8\uB2E4. \uC774\uB807\uAC8C \uD558\uBA74 Rust\uB85C \uD504\uB85C\uC81D\uD2B8\uC5D0 \uBA87 \uAC00\uC9C0 \uAE30\uB2A5\uC744 \uC810\uC9C4\uC801\uC73C\uB85C \uAD6C\uD604\uD560 \uC218 \uC788\uC744 \uBFD0\uB9CC \uC544\uB2C8\uB77C \uB9E4\uC77C Rust\uB97C \uC0AC\uC6A9\uD568\uC73C\uB85C\uC368 Rust\uB97C \uB354 \uC798 \uC775\uD790 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.")],-1),v=t("p",null,"\uC124\uC815",-1),w=t("p",null,"\uC774 \uC791\uC5C5\uC744 \uC218\uD589\uD558\uB824\uBA74 \uC0C8\uB85C\uC6B4 create-next-app \uD504\uB85C\uC81D\uD2B8\uB97C \uC2DC\uC791\uD558\uC5EC \uC791\uC5C5\uC5D0 \uD544\uC694\uD55C \uC218\uC815 \uC0AC\uD56D\uC744 \uBCF4\uC5EC\uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4. \uC774\uB294 \uADC0\uD558\uC758 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uC774\uB97C \uC218\uD589\uD558\uB294 \uB370 \uD544\uC694\uD55C \uB2E8\uACC4\uB3C4 \uC81C\uACF5\uD560 \uAC83\uC785\uB2C8\uB2E4. \uBB3C\uB860 \uC544\uB798 GitHub\uC5D0\uC11C \uC81C \uD15C\uD50C\uB9BF\uC5D0 \uB300\uD55C \uB9C1\uD06C\uB3C4 \uC81C\uACF5\uD558\uACA0\uC2B5\uB2C8\uB2E4.",-1),R=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),P=t("p",null,"Next.js \uD504\uB85C\uC81D\uD2B8\uAC00 \uC2E4\uD589 \uC911\uC774\uBA74 \uB7EC\uC2A4\uD2B8\uB97C \uACB0\uD569\uD574\uBCFC \uC218 \uC788\uC5B4\uC694. \uD639\uC2DC \uAD81\uAE08\uD558\uC2E0 \uC810\uC774 \uC788\uC73C\uC2DC\uB2E4\uBA74, \uC774 \uBAA8\uB4E0 \uAC83\uC774 Next.js \uBC84\uC804 12.x, 13.x, 14.x\uC5D0\uC11C pages \uB610\uB294 app \uB514\uB809\uD1A0\uB9AC\uC640 \uD568\uAED8 \uC791\uB3D9\uD560 \uAC70\uC608\uC694. \uCEE4\uC2A4\uD140 \uB7F0\uD0C0\uC784\uC744 \uD65C\uC6A9\uD558\uB824\uBA74 vercel.json \uAD6C\uC131 \uD30C\uC77C\uC744 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uCD94\uAC00\uD574\uC57C \uD574\uC694.",-1),x=t("p",null,"\uB610\uD55C \uAC1C\uBC1C \uC758\uC874\uC131\uC5D0 vercel CLI\uB97C \uCD94\uAC00\uD558\uAE30 \uC704\uD574 npm install vercel -D \uBA85\uB839\uC5B4\uB97C \uC2E4\uD589\uD560 \uAC70\uC5D0\uC694. \uC774 CLI\uB97C \uC0AC\uC6A9\uD558\uC5EC \uB7EC\uC2A4\uD2B8 API \uC5D4\uB4DC\uD3EC\uC778\uD2B8\uB97C \uC704\uD55C \uB85C\uCEEC \uC11C\uBC84\uB97C \uC2E4\uD589\uD560 \uAC70\uC5D0\uC694. \uC774\uAC83\uC744 \uD1B5\uD574 Vercel\uC5D0\uAC8C .rs \uD30C\uC77C\uC744 \uB7EC\uC2A4\uD2B8 \uB7F0\uD0C0\uC784\uC73C\uB85C \uC11C\uBC84\uB9AC\uC2A4 API \uD568\uC218\uB85C \uBC30\uD3EC\uD558\uB3C4\uB85D \uC54C\uB9B4 \uAC70\uC608\uC694. \uB2E4\uC74C\uC73C\uB85C \uD504\uB85C\uC81D\uD2B8 \uB0B4\uC5D0 \uCD5C\uC0C1\uC704 api/ \uB514\uB809\uD1A0\uB9AC\uB97C \uC791\uC131\uD560 \uAC70\uC5D0\uC694. \uC774\uB294 \uC774\uBBF8 Next.js \uD504\uB85C\uC81D\uD2B8\uC5D0 \uC788\uB294 pages/api/ \uB514\uB809\uD1A0\uB9AC\uC640 \uB2E4\uB974\uB2E4\uB294 \uC810\uC744 \uC8FC\uBAA9\uD558\uC138\uC694. \uB9CC\uC57D \uC774\uBBF8 pages/api/ \uC548\uC5D0 \uCF54\uB4DC\uAC00 \uC788\uB2E4\uBA74 \uADF8\uB300\uB85C \uB450\uACE0 \uADF8 \uB2E4\uC74C\uC73C\uB85C \uB7EC\uC2A4\uD2B8 \uB7F0\uD0C0\uC784 \uD568\uC218\uB97C \uC704\uD55C \uCD5C\uC0C1\uC704 /api \uB514\uB809\uD1A0\uB9AC\uB97C \uC791\uC131\uD558\uC138\uC694.",-1),I=t("p",null,"\uB610\uD55C \uB85C\uCEEC \uBA38\uC2E0\uC5D0 \uB7EC\uC2A4\uD2B8\uAC00 \uC124\uCE58\uB418\uC5B4 \uC788\uC5B4\uC57C \uD574\uC694. \uAC00\uC7A5 \uBE60\uB978 \uBC29\uBC95\uC740 rustup\uC744 \uC0AC\uC6A9\uD558\uB294 \uAC83\uC774\uB2C8 \uC774\uBBF8 \uC124\uCE58\uB418\uC5B4 \uC788\uC9C0 \uC54A\uB2E4\uBA74 \uC124\uCE58\uD558\uC138\uC694. \uB7EC\uC2A4\uD2B8\uB294 cargo\uB97C \uD328\uD0A4\uC9C0 \uB9E4\uB2C8\uC800\uC774\uC790 \uBE4C\uB4DC \uC2DC\uC2A4\uD15C\uC73C\uB85C \uC0AC\uC6A9\uD574\uC694. cargo\uB97C \uD65C\uC131\uD654\uD558\uAE30 \uC704\uD574 \uD504\uB85C\uC81D\uD2B8 \uB8E8\uD2B8\uC5D0 Cargo.toml \uAD6C\uC131 \uD30C\uC77C\uC744 \uC0DD\uC131\uD574\uC57C \uD574\uC694.",-1),N=t("p",null,'\uB9CC\uC57D package.json\uC744 \uC54C\uACE0 \uACC4\uC2DC\uB2E4\uBA74 \uBA87 \uAC00\uC9C0 \uC720\uC0AC\uD55C \uC810\uC774 \uC788\uC744 \uAC70\uC608\uC694. \uC774\uB984\uACFC \uBC84\uC804 \uAC19\uC740 \uC77C\uBC18 \uBA54\uD0C0\uB370\uC774\uD130\uB97C \uCD94\uAC00\uD558\uACE0 API \uC5D4\uB4DC\uD3EC\uC778\uD2B8\uB97C \uBE4C\uB4DC\uD558\uB294 \uB370 \uD544\uC694\uD55C \uC758\uC874\uC131\uC744 \uCD94\uAC00\uD574\uC694. \uB7EC\uC2A4\uD2B8\uC5D0\uC11C\uB294 \uC758\uC874\uC131\uC744 "\uD06C\uB808\uC774\uD2B8(crate)"\uB77C\uACE0 \uBD80\uB974\uBA70 crates.io\uC5D0 \uB4F1\uB85D\uB418\uC5B4 \uC788\uC5B4\uC694. \uC6B0\uB9AC\uB294 async \uB7F0\uD0C0\uC784\uC73C\uB85C tokio\uB97C \uC0AC\uC6A9\uD558\uACE0 JSON \uD30C\uC2F1/\uBCC0\uD658\uC744 \uC704\uD574 serde_json\uC744 \uC0AC\uC6A9\uD558\uBA70 \uC694\uCCAD\uACFC \uC751\uB2F5\uC744 \uB2E4\uB8E8\uB294 Vercel\uC774\uB098 Next.js API\uC758 \uB7EC\uC2A4\uD2B8 \uBC84\uC804\uC778 vercel_runtime\uC744 \uC0AC\uC6A9\uD560 \uAC70\uC5D0\uC694. \uB610\uD55C VSCode\uB97C \uC0AC\uC6A9 \uC911\uC774\uC2DC\uB77C\uBA74 rust-analyzer \uD655\uC7A5\uC744 \uC124\uCE58\uD560 \uC218 \uC788\uC5B4\uC694. \uC774\uB807\uAC8C \uD558\uBA74 \uB7EC\uC2A4\uD2B8 \uC5B8\uC5B4 \uAE30\uB2A5\uC744 \uD65C\uC131\uD654\uD558\uACE0 \uCF54\uB4DC \uC791\uC131 \uC2DC \uB354 \uB9CE\uC740 \uB3C4\uC6C0\uACFC \uCEE8\uD14D\uC2A4\uD2B8\uB97C \uC81C\uACF5\uD560 \uAC70\uC5D0\uC694.',-1),V=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),j=t("p",null,"\uB2E4\uC74C\uC73C\uB85C, \uC6B0\uB9AC\uB294 \uCCAB \uBC88\uC9F8 Rust API \uC5D4\uB4DC\uD3EC\uC778\uD2B8\uB97C \uC0DD\uC131\uD560 \uAC83\uC785\uB2C8\uB2E4. \uC6B0\uB9AC\uB294 \uC6B0\uB9AC\uC758 cargo \uAD6C\uC131 \uD30C\uC77C\uC5D0 \uC791\uC131\uD55C\uB300\uB85C api/crab.rs\uB85C \uC774\uB984\uC744 \uC9C0\uC815\uD560 \uAC83\uC785\uB2C8\uB2E4.",-1),A=t("p",null,"\uC774\uC81C, Rust\uC5D0\uC11C \uD55C \uC904\uC758 \uCF54\uB4DC\uB3C4 \uC791\uC131\uD574\uBCF4\uC9C0 \uC54A\uC740 \uACBD\uC6B0\uC5D0\uB294 100% \uBA85\uD655\uD558\uC9C0 \uC54A\uC744 \uC218 \uC788\uC9C0\uB9CC, Vercel\uC744 \uC0AC\uC6A9\uD574\uBCF8 \uC801\uC774 \uC788\uAC70\uB098 \uB2E4\uB978 \uC5B8\uC5B4\uB85C HTTP \uC11C\uBC84\uB97C \uC0AC\uC6A9\uD574\uBCF8 \uC801\uC774 \uC788\uB2E4\uBA74 \uB300\uBD80\uBD84 \uC77D\uAE30 \uC26C\uC6B8 \uAC83\uC785\uB2C8\uB2E4. \uC6B0\uB9AC\uB294 API \uC694\uCCAD\uC774 GET /api/crab \uB85C \uB4E4\uC5B4\uC62C \uB54C \uC751\uB2F4\uD558\uB294 \uD578\uB4E4\uB7EC \uD568\uC218\uB97C \uC0DD\uC131\uD560 \uAC83\uC785\uB2C8\uB2E4. \uC774\uB294 200 OK \uC0C1\uD0DC \uCF54\uB4DC\uB85C \uC751\uB2F5\uD558\uACE0 JSON \uD615\uC2DD\uC758 \uBA54\uC2DC\uC9C0\uB97C \uBC18\uD658\uD569\uB2C8\uB2E4.",-1),k=t("p",null,'\uBE60\uB974\uAC8C \uD14C\uC2A4\uD2B8\uD558\uAE30 \uC704\uD574 npx vercel dev\uB97C \uC2E4\uD589\uD558\uC5EC \uD14C\uC2A4\uD2B8\uD560 \uAC83\uC785\uB2C8\uB2E4. \uB9CC\uC57D \uC0C8 \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD588\uB2E4\uBA74 Vercel \uD504\uB85C\uC81D\uD2B8\uB97C \uC124\uC815\uD558\uB77C\uB294 \uBA54\uC2DC\uC9C0\uAC00 \uD45C\uC2DC\uB420 \uAC83\uC785\uB2C8\uB2E4. \uADF8\uB0E5 \uC9C0\uC2DC\uC5D0 \uB530\uB77C \uC124\uC815\uC744 \uC644\uB8CC\uD558\uBA74 \uB429\uB2C8\uB2E4. \uBAA8\uB450 \uC644\uB8CC\uB418\uBA74 "\uC900\uBE44\uB428! http://localhost:3000\uC5D0\uC11C \uC774\uC6A9 \uAC00\uB2A5\uD569\uB2C8\uB2E4"\uC640 \uAC19\uC740 \uBA54\uC2DC\uC9C0\uAC00 \uD45C\uC2DC\uB420 \uAC83\uC785\uB2C8\uB2E4. \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uBA87 \uCD08 \uD6C4\uC5D0 http://localhost:3000/api/crab\uB97C \uC5F4\uBA74 \uC751\uB2F5\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4.',-1),C=t("p",null,[t("img",{src:c,alt:"\uC774\uBBF8\uC9C0"})],-1),T=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),S=t("p",null,"\uB2E4\uC2DC \uC0C8\uB85C \uACE0\uCE68\uD558\uBA74 \uC751\uB2F5\uC774 \uAC70\uC758 \uC989\uC2DC \uB3CC\uC544\uC628\uB2E4\uB294 \uAC83\uC744 \uC54C \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB294 vercel dev\uAC00 \uB0B4\uBD80\uC801\uC73C\uB85C Cargo\uB97C \uC0AC\uC6A9\uD558\uC5EC Rust \uD30C\uC77C\uC744 \uBE4C\uB4DC\uD558\uACE0 \uC2E4\uD589\uD558\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. \uC774\uB294 \uBCC0\uACBD \uC0AC\uD56D\uC744 \uC790\uB3D9\uC73C\uB85C \uAC10\uC9C0\uD558\uC5EC \uCF54\uB4DC\uB97C \uBCC0\uACBD\uD560 \uB54C\uB9CC \uB2E4\uC2DC \uCEF4\uD30C\uC77C\uD569\uB2C8\uB2E4. \uADF8\uB0E5 \uCF54\uB4DC\uB97C \uC791\uC131\uD558\uACE0 \uC990\uAE30\uC138\uC694. \uC774\uC81C \uB8E8\uD2B8 \uB514\uB809\uD1A0\uB9AC\uC5D0 target/ \uD3F4\uB354\uAC00 \uC788\uB294 \uAC83\uC744 \uC54C\uAC8C \uB418\uC5C8\uC744 \uAC83\uC785\uB2C8\uB2E4. \uC774\uB294 Rust \uC774\uC9C4 \uD30C\uC77C\uC758 \uD45C\uC900 \uCD9C\uB825 \uD3F4\uB354\uC774\uBBC0\uB85C .gitignore \uD30C\uC77C\uC5D0 \uCD94\uAC00\uD574\uC57C \uD569\uB2C8\uB2E4. .vercelignore\uC5D0\uB3C4 \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4(\uCC38\uACE0\uC6A9\uC73C\uB85C \uB9C8\uC9C0\uB9C9\uC5D0 \uC788\uB294 \uD15C\uD50C\uB9BF\uC744 \uD655\uC778\uD558\uC138\uC694).",-1),H=t("p",null,"\uC774\uC81C \uBAA8\uB4E0 \uAC83\uC774 \uC791\uB3D9 \uC911\uC774\uBBC0\uB85C \uC870\uAE08 \uC815\uB9AC\uD558\uACE0 \uB098\uBA38\uC9C0 Next.js \uCF54\uB4DC\uBCA0\uC774\uC2A4\uC640 \uD568\uAED8 \uC2E4\uD589\uD574 \uBCF4\uACA0\uC2B5\uB2C8\uB2E4. Rust \uB7F0\uD0C0\uC784\uC740 Vercel\uC5D0 \uBC30\uD3EC\uD560 \uB54C Rust \uCF54\uB4DC\uB97C \uC2E4\uD589\uD558\uB294 \uB370 \uAD00\uC5EC\uD558\uC9C0\uB9CC \uAC1C\uBC1C \uC911\uC5D0\uB294 npm run dev \uBA85\uB839\uC744 \uC57D\uAC04 \uC218\uC815\uD574\uC57C \uD569\uB2C8\uB2E4.",-1),E=t("p",null,"\uC5EC\uAE30\uC11C \uC6B0\uB9AC\uAC00 \uD558\uB294 \uC77C\uC740 \uC0C8\uB85C\uC6B4 dev:rust \uC2A4\uD06C\uB9BD\uD2B8\uB85C Rust API\uB97C \uB2E4\uB978 \uD3EC\uD2B8\uC5D0\uC11C \uC2E4\uD589\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4. \uADF8\uB7F0 \uB2E4\uC74C next dev\uB97C \uC2E4\uD589\uD558\uB294 \uAC83 \uC678\uC5D0\uB3C4 \uD45C\uC900 dev \uC2A4\uD06C\uB9BD\uD2B8\uC5D0 \uCD94\uAC00\uD569\uB2C8\uB2E4. \uC774\uC81C Next.js \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uC775\uC219\uD55C \uB2E8\uC77C \uBA85\uB839\uC73C\uB85C \uBAA8\uB4E0 \uAC83\uC744 \uC2E4\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),J=t("p",null,"\uB610 \uD558\uB098 \uC8FC\uC758\uD560 \uC810\uC740 Rust \uC5D4\uB4DC\uD3EC\uC778\uD2B8\uC5D0 \uB300\uD574 localhost:3001\uB85C \uC774\uB3D9\uD558\uAE38 \uC6D0\uD558\uC9C0 \uC54A\uB294\uB2E4\uB294 \uAC83\uC785\uB2C8\uB2E4. \uC774\uB294 Next.js\uC758 \uAE30\uBCF8 localhost:3000\uACFC \uB2E4\uB978 \uD3EC\uD2B8\uC785\uB2C8\uB2E4. next.config.js \uB0B4\uC5D0 \uB9AC\uB2E4\uC774\uB809\uD2B8\uB97C \uCD94\uAC00\uD558\uC5EC \uC218\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),D=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),G=t("p",null,"\uC6B0\uB9AC\uB294 \uAC1C\uBC1C \uB2E8\uACC4\uC5D0\uC11C\uB9CC \uCF54\uB4DC\uB97C \uC7AC\uC791\uC131\uD569\uB2C8\uB2E4. Vercel\uC5D0\uC11C\uB294 \uBAA8\uB4E0 \uAC83\uC774 \uB3D9\uC77C\uD55C \uBC30\uD3EC\uB85C \uBC30\uD3EC\uB418\uBBC0\uB85C \uC7AC\uC791\uC131\uD560 \uD544\uC694\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uC774\uC81C http://localhost:3000/api/crab\uC5D0 \uB2E4\uC2DC \uC811\uC18D\uD558\uC5EC \uB611\uAC19\uC774 \uC791\uB3D9\uB429\uB2C8\uB2E4. \uBB3C\uB860 \uB2E4\uB978 \uAC1C\uBC1C \uC11C\uBC84\uC5D0\uC11C \uC2E4\uD589 \uC911\uC774\uC9C0\uB9CC\uC694. fallback\uC5D0 rewrite\uB97C \uCD94\uAC00\uD558\uBA74, \uD604\uC7AC\uC758 \uD398\uC774\uC9C0\uB098 API \uC5D4\uB4DC\uD3EC\uC778\uD2B8\uB4E4\uC774 \uAC1C\uBC1C \uC911\uC778 Rust API \uC5D4\uB4DC\uD3EC\uC778\uD2B8\uC5D0 \uB36E\uC5B4\uC50C\uC6CC\uC9C0\uC9C0 \uC54A\uB3C4\uB85D \uBCF4\uC7A5\uD574\uC90D\uB2C8\uB2E4.",-1),O=t("p",null,"\uBAA8\uB4E0 \uAC83\uC774 \uC791\uB3D9 \uC911\uC774\uB2C8, \uC77C\uC0C1\uC801\uC778 API \uAC1C\uBC1C\uC5D0\uC11C \uD544\uC694\uD560 \uC218 \uC788\uB294 \uC77C\uBC18\uC801\uC778 \uD328\uD134\uB4E4\uC744 \uC0B4\uD3B4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.",-1),B=t("p",null,"\uCE90\uC2F1",-1),L=t("p",null,"\uC6B4\uC601 \uC900\uBE44\uB41C API\uB294 \uC5B4\uB5A4 \uD615\uD0DC\uC758 \uCE90\uC2F1\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. Vercel\uC5D0 \uBC30\uD3EC\uD560 \uB54C \uC6B0\uB9AC\uB294 \uADF8\uB4E4\uC758 Edge Network (CDN)\uB97C \uC0AC\uC6A9\uD558\uC5EC API \uC751\uB2F5\uC744 \uCE90\uC2F1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD45C\uC900 cache-control \uD5E4\uB354\uC640 \uC751\uB2F5\uC758 s-maxage \uC9C0\uC2DC\uBB38\uACFC \uD568\uAED8 \uC791\uB3D9\uD569\uB2C8\uB2E4. API \uC5D4\uB4DC\uD3EC\uC778\uD2B8\uB97C 1\uC2DC\uAC04 \uB3D9\uC548 \uCE90\uC2F1\uD558\uB824\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC774 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),W=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),M=t("p",null,"\uC694\uCCAD \uB9E4\uAC1C\uBCC0\uC218 \uC77D\uAE30",-1),z=t("p",null,"vercel_runtime\uC744 \uC0AC\uC6A9\uD558\uBA74 \uB4E4\uC5B4\uC624\uB294 \uC694\uCCAD\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uC77D\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0\uB294 \uC77C\uBC18\uC801\uC778 \uC608\uC81C\uAC00 \uC788\uC2B5\uB2C8\uB2E4.",-1),K=t("p",null,"\uC77C\uBC18\uC801\uC778 \uC720\uD2F8/\uB77C\uC774\uBE0C\uB7EC\uB9AC",-1),q=t("p",null,"\uB354 \uD070 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C\uB294 \uB2E4\uC591\uD55C API \uC5D4\uB4DC\uD3EC\uC778\uD2B8\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uC77C\uB828\uC758 \uC720\uD2F8\uC744 \uAC16\uACE0 \uC788\uC744 \uAC83\uC785\uB2C8\uB2E4. \uB7EC\uC2A4\uD2B8\uC5D0\uC11C\uB294 Cargo \uAD6C\uC131\uC5D0\uC11C \uB85C\uCEEC \uD06C\uB808\uC774\uD2B8\uB3C4 \uB4F1\uB85D\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),F=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),U=t("p",null,"\uB098\uB294 \uB098\uC758 \uACF5\uC720\uB41C Rust \uCF54\uB4DC\uB97C \uB2E4\uB978 JavaScript \uD30C\uC77C\uB4E4\uACFC \uBD84\uB9AC\uD558\uAE30 \uC704\uD574 src/rs \uB514\uB809\uD1A0\uB9AC \uC548\uC5D0 \uBAA8\uB450 \uB123\uAE30\uB85C \uACB0\uC815\uD588\uC5B4. \uC774 \uD06C\uB808\uC774\uD2B8 \uC548\uC5D0\uC11C\uB294 Rust API \uC5D4\uB4DC\uD3EC\uC778\uD2B8\uC5D0\uC11C \uC7AC\uC0AC\uC6A9\uD560 \uD568\uC218\uB4E4\uACFC \uB9E4\uD06C\uB85C\uB4E4\uC744 \uC815\uC758\uD560 \uC218 \uC788\uC5B4. \uC774\uB7EC\uD55C \uD568\uC218\uB4E4\uC744 \uC0AC\uC6A9\uD558\uB824\uBA74 \uADF8\uB0E5 \uB2E4\uB978 Rust \uD06C\uB808\uC774\uD2B8\uB4E4\uACFC \uB9C8\uCC2C\uAC00\uC9C0\uB85C \uAC00\uC838\uC624\uBA74 \uB3FC. \uB9CC\uC57D IDE\uC5D0 rust-analyzer\uB098 \uBE44\uC2AC\uD55C \uC5B8\uC5B4 \uD1B5\uD569\uC774 \uC124\uCE58\uB418\uC5B4 \uC788\uB2E4\uBA74 \uD568\uC218 \uC774\uB984\uC744 \uC785\uB825\uD558\uAE30 \uC2DC\uC791\uD558\uBA74 \uC790\uB3D9\uC73C\uB85C \uAC00\uC838\uC62C \uC218 \uC788\uC744 \uAC70\uC57C.",-1),X=t("p",null,"\uD658\uACBD \uBCC0\uC218",-1),Y=t("p",null,"\uB85C\uCEEC .env \uD30C\uC77C\uC774\uB098 Vercel \uBC30\uD3EC\uB85C\uBD80\uD130 \uBAA8\uB4E0 \uD658\uACBD \uBCC0\uC218\uC5D0 \uC811\uADFC\uD560 \uC218 \uC788\uC5B4. \uC0AC\uC6A9\uD558\uAE30 \uD3B8\uD558\uACE0 \uAC04\uB2E8\uD55C dotenv \uD06C\uB808\uC774\uD2B8\uB97C \uCD94\uCC9C\uD574.",-1),Q=t("p",null,"\uC5D0\uB7EC \uCC98\uB9AC",-1),Z=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),$=t("p",null,"JSON APIs\uAC00 \uC608\uC058\uC9C0 \uC54A\uC740 \uCC98\uB9AC\uB418\uC9C0 \uC54A\uC740 \uC608\uC678\uB85C \uD06C\uB798\uC2DC\uD558\uB294 \uAC78 \uC6D0\uCE58 \uC54A\uACA0\uC9C0\uC694. Rust\uB294 \uC5D0\uB7EC\uB97C \uCC98\uB9AC\uD558\uB294 \uD2B9\uC815\uD55C \uBC29\uC2DD\uC744 \uAC16\uACE0 \uC788\uC9C0\uB9CC API \uC5D4\uB4DC\uD3EC\uC778\uD2B8\uC5D0\uC11C \uAD6C\uC870\uD654\uB41C \uC5D0\uB7EC\uB97C \uC7A1\uAC70\uB098 \uB358\uC9C0\uAE30 \uC704\uD574 \uB0B4 \uC720\uD2F8\uB9AC\uD2F0\uC5D0 \uB9E4\uD06C\uB85C\uB97C \uCD94\uAC00\uD588\uC2B5\uB2C8\uB2E4. \uD504\uB85C\uC81D\uD2B8 \uC804\uCCB4\uC5D0\uC11C \uC774\uB97C \uC0AC\uC6A9\uD558\uACE0 \uC788\uC5B4\uC694.",-1),tt=t("p",null,"\uC774 \uB9E4\uD06C\uB85C\uB294 \uBA54\uC2DC\uC9C0, \uC5D0\uB7EC, \uADF8\uB9AC\uACE0 HTTP \uC0C1\uD0DC \uCF54\uB4DC\uB97C \uBC1B\uC544\uB4E4\uC5EC\uC11C \uADF8\uAC83\uB4E4\uC744 \uAE30\uB85D\uD558\uBA70 \uC81C\uACF5\uB41C \uC88B\uC740 \uC5D0\uB7EC \uBA54\uC2DC\uC9C0\uC640 \uC0C1\uD0DC \uCF54\uB4DC\uB97C \uBC18\uD658\uD569\uB2C8\uB2E4. \uB610\uD55C, \uC77C\uBC18\uC801\uC778 \uACBD\uC6B0\uC5D0 \uB300\uD574 \uC81C\uB124\uB9AD 500 \uC5D0\uB7EC\uB97C \uB358\uC9C0\uB294 \uB370 \uC4F0\uC774\uB294 \uBA87 \uAC00\uC9C0 \uB9E4\uD06C\uB85C\uAC00 \uC788\uC2B5\uB2C8\uB2E4.",-1),st=t("p",null,"\uB2E4\uC591\uD55C \uC694\uCCAD \uBC29\uC2DD",-1),lt=t("p",null,"POST, PUT, DELETE\uC640 \uAC19\uC740 \uB2E4\uC591\uD55C \uC694\uCCAD \uBC29\uC2DD\uC744 \uC9C0\uC6D0\uD560 \uC218 \uC788\uC5B4\uC694. \uAC01 API \uD568\uC218\uB294 \uC5EC\uB7EC \uC694\uCCAD \uBC29\uC2DD\uC744 \uCC98\uB9AC\uD560 \uC218 \uC788\uC73C\uBBC0\uB85C \uC5B4\uB5BB\uAC8C API \uC5D4\uB4DC\uD3EC\uC778\uD2B8\uAC00 \uBC1B\uC544\uB4E4\uC77C\uC9C0\uB97C \uAC80\uC99D\uD558\uACE0 \uC81C\uD55C\uD574\uBCF4\uC8E0. \uBA3C\uC800, \uC6B0\uB9AC\uC758 \uAC01 \uC694\uCCAD \uBC29\uC2DD\uC5D0 \uB300\uD574 \uBCC4\uB3C4\uC758 \uD568\uC218\uB97C \uC815\uC758\uD560 \uAC70\uC5D0\uC694. \uC608\uB97C \uB4E4\uC5B4, POST \uBC29\uC2DD\uC744 \uC704\uD55C \uAC83\uC774\uC8E0.",-1),et=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),ot=t("p",null,"\uADF8\uB7FC \uD578\uB4E4\uB7EC\uC5D0\uC11C \uC62C\uBC14\uB978 \uD568\uC218\uB97C \uC694\uCCAD \uBA54\uC11C\uB4DC\uC5D0 \uB9E4\uD551\uD558\uACE0 \uC720\uD6A8\uC131\uC744 \uAC80\uC0AC\uD569\uB2C8\uB2E4.",-1),at=t("p",null,"\uB2E4\uB978 \uC11C\uBE44\uC2A4\uC640 \uD1B5\uC2E0",-1),dt=t("p",null,"API \uC5D4\uB4DC\uD3EC\uC778\uD2B8\uB294 \uB2E4\uB978 \uD504\uB85C\uD1A0\uCF5C\uC744 \uD1B5\uD574 \uB2E4\uB978 \uC11C\uBE44\uC2A4\uC640 \uD1B5\uC2E0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB300\uBD80\uBD84\uC758 \uACBD\uC6B0 HTTP\uB97C \uD1B5\uD574 \uD1B5\uC2E0\uD558\uB294\uB370, \uC774\uB97C \uC704\uD574 \uC774\uBBF8 \uC0AC\uC6A9 \uC911\uC778 \uB2E4\uB978 \uD328\uD0A4\uC9C0\uC640 \uC798 \uC791\uB3D9\uD558\uB294 reqwest \uD06C\uB808\uC774\uD2B8\uB97C \uCD94\uCC9C\uD569\uB2C8\uB2E4. \uC81C\uAC00 \uC5F0\uACB0\uD55C \uD15C\uD50C\uB9BF \uD504\uB85C\uC81D\uD2B8 \uC548\uC5D0 \uBA87 \uAC00\uC9C0 \uC608\uC81C\uB97C \uD655\uC778\uD560 \uC218 \uC788\uC5B4\uC694.",-1),nt=t("p",null,"Cold boot \uBC0F \uC2DC\uC791 \uC124\uC815",-1),it=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),ut=t("p",null,"\uC11C\uBC84\uB9AC\uC2A4 \uBC30\uD3EC\uB294 \uBE44\uC6A9\uC774 \uBC1C\uC0DD\uD569\uB2C8\uB2E4. \uB54C\uB85C\uB294 \uC0AC\uC6A9\uC790\uAC00 \uC900\uBE44\uB41C \uC778\uC2A4\uD134\uC2A4 \uC5C6\uC774 \uC5D4\uB4DC\uD3EC\uC778\uD2B8\uC5D0 \uC811\uADFC\uD558\uC5EC \uB0C9\uC7A5 \uBD80\uD305 \uC9C0\uC5F0\uC744 \uACBD\uD5D8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB0C9\uC7A5 \uBD80\uD305\uC5D0 \uC601\uD5A5\uC744 \uBBF8\uCE58\uB294 \uC694\uC778 \uC911 \uD558\uB098\uB294 \uD06C\uAE30\uC785\uB2C8\uB2E4. \uC81C\uAC00 \uAC80\uC99D\uD55C \uBC14\uC5D0 \uB530\uB974\uBA74, Vercel\uC5D0\uC11C \uB7EC\uC2A4\uD2B8 \uB7F0\uD0C0\uC784\uC744 \uC0AC\uC6A9\uD558\uB294 \uCEF4\uD30C\uC77C\uB41C \uC11C\uBC84\uB9AC\uC2A4 \uD568\uC218\uB294 \uCF54\uB4DC \uC591\uC774 \uC720\uC0AC\uD55C Node.js \uD568\uC218\uBCF4\uB2E4 \uC791\uC9C0\uB9CC Edge \uD568\uC218\uBCF4\uB2E4 \uD07D\uB2C8\uB2E4.",-1),ct=t("p",null,[t("img",{src:p,alt:"\uC774\uBBF8\uC9C0"})],-1),pt=t("p",null,"\uB0C9\uC7A5 \uBD80\uD305 \uC131\uB2A5\uC5D0 \uB300\uD574 \uCE21\uC815\uD55C \uACB0\uACFC, 500~1000ms \uBC94\uC704 \uB0B4\uC5D0 \uC788\uC74C\uC744 \uD655\uC778\uD588\uC2B5\uB2C8\uB2E4. \uC6DC/\uC900\uBE44 \uC0C1\uD0DC\uC758 \uC778\uC2A4\uD134\uC2A4\uC5D0 \uC811\uADFC\uD560 \uB54C \uC131\uB2A5\uC774 \uD06C\uAC8C \uD5A5\uC0C1\uB418\uBA70, \uD504\uB85C\uC81D\uD2B8\uAC00 \uB9CE\uC740 \uC694\uCCAD\uC744 \uBC1B\uB294 \uACBD\uC6B0(\uCE90\uC2F1\uACFC \uD568\uAED8) Rust\uB85C \uAD6C\uD604\uB41C API \uC5D4\uB4DC\uD3EC\uC778\uD2B8\uC5D0\uB294 \uBB38\uC81C\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.",-1),rt=t("p",null,'\uC800\uB294 \uC9C0\uB09C \uBA87 \uB2EC\uAC04 \uC77C\uBD80 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uC774 \uC124\uC815\uC744 \uC131\uACF5\uC801\uC73C\uB85C \uC0AC\uC6A9\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uADF8\uC911 \uD558\uB098\uC778 https://shareimdb.com/\uC740 API \uCE21\uBA74\uC5D0\uC11C \uC644\uC804\uD788 Rust \uB7F0\uD0C0\uC784\uC73C\uB85C \uAD6C\uC131\uB418\uC5B4 \uC788\uC73C\uBA70, HTML \uB80C\uB354\uB9C1\uC774 \uD544\uC694\uD55C \uD398\uC774\uC9C0\uC5D0\uB9CC JavaScript/React\uB97C \uC0AC\uC6A9\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. Rust\uB97C \uC0AC\uC6A9\uD558\uC5EC Node.js \uB300\uC2E0 \uAE30\uBCF8 \uD06C\uB864\uB9C1 \uBC0F \uD30C\uC2F1 \uC791\uC5C5\uC744 \uD55C \uACB0\uACFC, \uD504\uB85C\uC81D\uD2B8\uAC00 \uD06C\uAC8C \uC774\uC775\uC744 \uC5BB\uC5C8\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4, \uBB34\uB8CC\uB85C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 50MB \uC81C\uD55C\uC774 \uC788\uB294 \uC11C\uBC84\uB9AC\uC2A4 \uD568\uC218\uC5D0 \uD5E4\uB4DC\uB9AC\uC2A4 \uBE0C\uB77C\uC6B0\uC800 \uB7F0\uD0C0\uC784\uC744 \uC801\uC6A9\uD558\uAE30 \uC5B4\uB824\uC6E0\uC9C0\uB9CC, Rust\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC791\uC5C5\uC744 \uC218\uD589\uD560 \uB54C \uBB38\uC81C\uAC00 \uC5C6\uC5C8\uC2B5\uB2C8\uB2E4. \uAC00\uC7A5 \uC911\uC694\uD55C \uAC83\uC740 \uC791\uC5C5\uC5D0 \uC801\uD569\uD55C \uC62C\uBC14\uB978 \uB3C4\uAD6C\uB97C \uC120\uD0DD\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4. \uC7A5\uAE30\uC801\uC778 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uCC38\uC5EC\uD55C \uC0AC\uB78C\uC774\uB77C\uBA74 "\uBAA8\uB4E0 \uAC83\uC744 \uB2E4\uC2DC \uC791\uC131"\uC774 \uAC00\uB2A5\uD55C \uC811\uADFC\uBC95\uC774 \uC544\uB2C8\uB77C\uB294 \uAC83\uC744 \uC54C \uAC83\uC785\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uBD80\uBD84\uC801 \uD1B5\uD569\uACFC \uB2E4\uC591\uD55C \uAE30\uC220/\uC5B8\uC5B4\uB97C \uB2E8\uC77C \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uC0AC\uC6A9\uD558\uB294 \uAC83\uC740 \uD504\uB85C\uC81D\uD2B8\uB97C \uB354 \uB098\uC544\uC9C0\uAC8C \uB9CC\uB4E4 \uC218 \uC788\uB294 \uC774\uC0C1\uC801\uC778 \uBC29\uBC95\uC785\uB2C8\uB2E4.',-1),_t=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),ht=t("p",null,"\uBB38\uC81C\uC810",-1),gt=t("p",null,"\uC81C\uAC00 Vercel\uC5D0\uC11C Rust\uB97C \uC0AC\uC6A9\uD558\uBA74\uC11C \uB9C8\uC8FC\uCE5C \uBA87 \uAC00\uC9C0 \uBB38\uC81C\uC810\uC744 \uC9C0\uC801\uD558\uBA70 \uB9C8\uBB34\uB9AC\uD558\uACE0 \uC2F6\uC2B5\uB2C8\uB2E4. \uC9C0\uAE08\uAE4C\uC9C0 \uC798 \uC2E4\uD589\uB418\uACE0 \uC788\uC9C0\uB9CC, \uACB0\uC815\uC744 \uB0B4\uB9B4 \uB54C\uC640 \uB514\uBC84\uAE45\uC5D0 \uC2DC\uAC04\uC744 \uC808\uC57D\uD560 \uC218 \uC788\uB3C4\uB85D \uBA87 \uAC00\uC9C0 \uC544\uD514\uC744 \uC9C0\uC801\uD558\uACE0 \uB9C8\uC8FC\uD55C \uBC84\uADF8\uB97C \uC5B8\uAE09\uD558\uACE0 \uC2F6\uC5B4\uD569\uB2C8\uB2E4.",-1),bt=t("p",null,"\uBA3C\uC800, \uAC00\uB054 Rust \uB7F0\uD0C0\uC784 \uD568\uC218\uB97C \uC2E4\uD589\uD558\uB294 vercel dev\uAC00 \uBA85\uBC31\uD55C \uC774\uC720 \uC5C6\uC774 \uAC11\uC790\uAE30 \uCDA9\uB3CC\uD558\uB294 \uBB38\uC81C\uB97C \uBC1C\uACAC\uD588\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4, cargo\uB97C \uD1B5\uD574 \uD2B9\uC815 \uC885\uC18D\uC131\uC744 \uCD94\uAC00\uD560 \uB54C vercel dev\uB97C \uC7AC\uC2DC\uC791\uD574\uC57C \uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. cargo \uAD6C\uC131\uC5D0 \uC0C8 \uD30C\uC77C\uC744 \uCD94\uAC00\uD558\uAC70\uB098 lib\uB85C \uCD94\uAC00\uD560 \uB54C\uC5D0\uB3C4 \uAC1C\uBC1C \uBA85\uB839\uC744 \uB2E4\uC2DC \uC2E4\uD589\uD558\uAC70\uB098 \uC11C\uBC84\uB97C \uC2E4\uD589\uD558\uACE0 \uC788\uB294 \uB178\uB4DC \uD504\uB85C\uC138\uC2A4\uB97C \uC885\uB8CC\uD574\uC57C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB294 Vercel\uC5D0\uC11C \uCEE4\uBBA4\uB2C8\uD2F0 \uB7F0\uD0C0\uC784\uC784\uC744 \uC778\uC815\uD588\uC9C0\uB9CC, \uD5A5\uD6C4 \uACF5\uC2DD \uB7F0\uD0C0\uC784\uC73C\uB85C Rust\uB97C \uCD94\uAC00\uD574\uC8FC\uAE38 \uD76C\uB9DD\uD569\uB2C8\uB2E4.",-1),yt=t("p",null,"\uB610 \uB2E4\uB978 \uD070 \uBB38\uC81C\uB294 \uC0AC\uC6A9\uC790 \uC9C0\uC815 \uB7F0\uD0C0\uC784(\uADF8\uB0E5 Rust\uBFD0\uB9CC \uC544\uB2C8\uB77C \uBAA8\uB4E0 \uC0AC\uC6A9\uC790 \uC9C0\uC815 \uB7E0\uD0C0\uC784)\uACFC \uD568\uAED8 \uB3D9\uC801 \uB77C\uC6B0\uD2B8\uB97C \uBC30\uD3EC\uD560 \uB54C Vercel\uC5D0 \uBB38\uC81C\uAC00 \uC788\uB294 \uAC83\uC785\uB2C8\uB2E4. Vercel GitHub\uC5D0 \uC62C\uB9B0 \uBC84\uADF8 \uBCF4\uACE0\uC11C\uC5D0\uC11C \uC790\uC138\uD55C \uB0B4\uC6A9\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD574\uB2F9 \uD2F0\uCF13 \uB0B4\uC5D0\uC11C \uC774 \uBB38\uC81C\uB97C \uD53C\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD55C \uB300\uC548\uB3C4 \uC81C\uC2DC\uB418\uACE0 \uC788\uC2B5\uB2C8\uB2E4.",-1),ft=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),mt=t("p",null,"\uBAA8\uB450\uB97C \uC815\uB9AC\uD558\uBA74, \uC800\uB294 Rust\uB97C \uAE30\uC874 \uAC1C\uBC1C \uC2A4\uD0DD\uACFC \uD504\uB85C\uC81D\uD2B8\uC5D0 \uCD94\uAC00\uD560 \uC218 \uC788\uC5B4\uC11C \uC88B\uC558\uC2B5\uB2C8\uB2E4. \uC774 \uBE14\uB85C\uADF8 \uD3EC\uC2A4\uD2B8\uC5D0\uC11C \uB9CC\uB4E0 \uB0B4 Next.js + Rust \uD15C\uD50C\uB9BF\uC5D0\uC11C \uCF54\uB4DC\uC640 \uC608\uC81C\uB97C \uB354 \uC790\uC138\uD788 \uC0B4\uD3B4\uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB610\uD55C \uC774\uB97C \uC0C8\uB85C\uC6B4 \uD504\uB85C\uC81D\uD2B8\uC758 \uD15C\uD50C\uB9BF\uC73C\uB85C \uC0AC\uC6A9\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.",-1),vt=t("p",null,"\uC774 \uD3EC\uC2A4\uD2B8\uB97C \uC990\uAE30\uC168\uB2E4\uBA74 \uC88B\uC544\uC694 \uB610\uB294 \uACF5\uC720\uB97C \uAC10\uC0AC\uD788 \uBC1B\uACA0\uC2B5\uB2C8\uB2E4. \uB610\uD55C \uC774 \uC8FC\uC81C\uC5D0 \uB300\uD574 \uB354 \uC54C\uACE0 \uC2F6\uB2E4\uBA74 \uC544\uB798 \uB9C1\uD06C\uB4E4\uC744 \uCC38\uACE0\uD574\uBCF4\uC138\uC694.",-1),wt=t("ul",null,[t("li",null,"Vercel\uC744 \uC704\uD55C Rust \uB7F0\uD0C0\uC784 (\uCEE4\uBBA4\uB2C8\uD2F0)"),t("li",null,"Vercel\uC5D0\uC11C \uC9C0\uC6D0\uD558\uB294 \uC0AC\uC6A9\uC790 \uC9C0\uC815 \uB7F0\uD0C0\uC784"),t("li",null,"Rust Book \u2014 Rust \uAE30\uBCF8 \uD559\uC2B5\uC5D0 \uB300\uD55C \uC911\uC694 \uC790\uB8CC"),t("li",null,"Web Assembly\uB97C \uC704\uD55C Rust \uBC0F Vercel\uC5D0\uC11C\uC758 Wasm"),t("li",null,"\uB0B4 Next.js + Rust \uD15C\uD50C\uB9BF")],-1),Rt=t("p",null,"\uADF8\uB9AC\uACE0 \uC81C \uB2E4\uB978 \uD3EC\uC2A4\uD2B8/\uD504\uB85C\uC81D\uD2B8 \uC911 \uC77C\uBD80\uB294:",-1),Pt=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),xt=i('<ul><li>https://jawa.sh\u2014 \uC2DC\uAC01\uC801 \uC2A4\uD06C\uB798\uD37C \uC778\uD130\uD398\uC774\uC2A4, \uC544\uBB34 \uACF3\uC5D0\uC11C\uB098 \uC2E4\uD589\uD558\uACE0 \uC5B4\uB5A4 \uAC83\uC774\uB4E0 \uC2A4\uD06C\uB798\uD551\uD560 \uC218 \uC788\uB294 \uD37C\uD53C\uD2F0\uC5B4 \uC2A4\uD06C\uB9BD\uD2B8\uB85C \uB0B4\uBCF4\uB0C5\uB2C8\uB2E4 \u{1F916}</li><li>https://medium.com/@capJavert/doing-100-000-push-ups-this-year-with-the-help-of-siri-605c3c8eb18f \u2014 1\uB144 \uB3D9\uC548 100,000\uAC1C\uC758 \uD478\uC2DC\uC5C5\uC744 \uC5B4\uB5BB\uAC8C \uD588\uB294\uC9C0\uC5D0 \uB300\uD55C \uC774\uC57C\uAE30 \u{1F4AA}</li><li>https://get.komfy.app \u2014 \uC990\uACA8 \uBCF4\uB294 \uBE44\uB514\uC624 \uCF58\uD150\uCE20\uB97C \uC9C1\uC811 PC \uB610\uB294 Mac\uC73C\uB85C \uC2A4\uD2B8\uB9AC\uBC0D\uD569\uB2C8\uB2E4 \u{1F4FA}</li><li>https://medium.com/@capJavert/re-hacking-wordle-114ba75d1344 \u2014 \uC138\uACC4\uC5D0\uC11C \uAC00\uC7A5 \uC778\uAE30 \uC788\uB294 \uAC8C\uC784\uC744 \uD574\uD0B9\uD55C \uB0B4 \uACBD\uD5D8 \u2328\uFE0F</li></ul><h1 id="\u1111\u1167\u11BC\u1107\u1165\u11B7\u1112\u1161\u11AB-\u110B\u1167\u11BC\u110B\u1165\u1105\u1169-\u{1F680}" tabindex="-1"><a class="header-anchor" href="#\u1111\u1167\u11BC\u1107\u1165\u11B7\u1112\u1161\u11AB-\u110B\u1167\u11BC\u110B\u1165\u1105\u1169-\u{1F680}" aria-hidden="true">#</a> \uD3C9\uBC94\uD55C \uC601\uC5B4\uB85C \u{1F680}</h1><p>\uD3C9\uBC94\uD55C \uC601\uC5B4 \uCEE4\uBBA4\uB2C8\uD2F0\uC758 \uC77C\uC6D0\uC774 \uB418\uC5B4 \uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4! \uB5A0\uB098\uC2DC\uAE30 \uC804\uC5D0:</p><ul><li>\uBC18\uB4DC\uC2DC \uAE00\uC4F4\uC774\uB97C \uD074\uB7A9\uD558\uACE0 \uD314\uB85C\uC6B0\uD574\uC8FC\uC138\uC694 \uFE0F\u{1F44F}\uFE0F\uFE0F</li><li>\uD314\uB85C\uC6B0\uD558\uC138\uC694: X | \uB9C1\uD06C\uB4DC\uC778 | \uC720\uD29C\uBE0C | \uB514\uC2A4\uCF54\uB4DC | \uB274\uC2A4\uB808\uD130</li><li>\uB2E4\uB978 \uD50C\uB7AB\uD3FC \uBC29\uBB38\uD558\uAE30: Stackademic | CoFeed | Venture | Cubed</li><li>PlainEnglish.io\uC5D0\uC11C \uB354 \uB9CE\uC740 \uCF58\uD150\uCE20 \uD655\uC778\uD558\uAE30</li></ul>',4);function It(Nt,Vt){return s(),n("div",null,[_,h,g,b,y,(s(),l(a("script"),null,{default:e(()=>[o(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),f,m,v,w,R,(s(),l(a("script"),null,{default:e(()=>[o(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),P,x,I,N,V,(s(),l(a("script"),null,{default:e(()=>[o(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),j,A,k,C,T,(s(),l(a("script"),null,{default:e(()=>[o(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),S,H,E,J,D,(s(),l(a("script"),null,{default:e(()=>[o(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),G,O,B,L,W,(s(),l(a("script"),null,{default:e(()=>[o(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),M,z,K,q,F,(s(),l(a("script"),null,{default:e(()=>[o(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),U,X,Y,Q,Z,(s(),l(a("script"),null,{default:e(()=>[o(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),$,tt,st,lt,et,(s(),l(a("script"),null,{default:e(()=>[o(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),ot,at,dt,nt,it,(s(),l(a("script"),null,{default:e(()=>[o(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),ut,ct,pt,rt,_t,(s(),l(a("script"),null,{default:e(()=>[o(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),ht,gt,bt,yt,ft,(s(),l(a("script"),null,{default:e(()=>[o(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),mt,vt,wt,Rt,Pt,(s(),l(a("script"),null,{default:e(()=>[o(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),xt])}var Ht=d(r,[["render",It],["__file","index.html.vue"]]);export{Ht as default};
