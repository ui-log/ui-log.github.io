import{_ as r}from"./app.3052dcfb.js";import{j as s,l as a,m as n,C as e,p as t,z as l,E as c,G as i,Y as p}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var _="/assets/3-Useful-Libraries-for-React-Applications_0.c96be891.png";const d={},u=e("p",null,"\uC18C\uAC1C: \uB9AC\uC561\uD2B8 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC740 \uB3D9\uC801\uC774\uACE0 \uC0C1\uD638\uC791\uC6A9\uC801\uC778 \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uAD6C\uCD95\uD558\uB294 \uB370 \uB110\uB9AC \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uADF8\uB7EC\uB098 \uC774\uB7EC\uD55C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uAE30\uB2A5\uACFC \uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC744 \uD5A5\uC0C1\uC2DC\uD0A4\uAE30 \uC704\uD574 \uAC1C\uBC1C\uC790\uB4E4\uC740 \uC885\uC885 \uB2E4\uC591\uD55C \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC5D0 \uC758\uC874\uD569\uB2C8\uB2E4. \uC774 \uBE14\uB85C\uADF8 \uD3EC\uC2A4\uD2B8\uC5D0\uC11C\uB294 \uB9AC\uC561\uD2B8 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uAC1C\uBC1C \uD504\uB85C\uC138\uC2A4\uC640 \uC0AC\uC6A9\uC790 \uC0C1\uD638\uC791\uC6A9\uC744 \uD06C\uAC8C \uAC1C\uC120\uD560 \uC218 \uC788\uB294 \uC138 \uAC00\uC9C0 \uC720\uC6A9\uD55C \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uC0B4\uD3B4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.",-1),m=e("p",null,[e("img",{src:_,alt:"React Applications"})],-1),h={href:"https://github.com/nfl/react-helmet",target:"_blank",rel:"noopener noreferrer"},f={href:"https://quilljs.com/docs/quickstart/",target:"_blank",rel:"noopener noreferrer"},b=e("p",null,[e("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),g={start:"3"},k={href:"https://github.com/fkhadra/react-toastify",target:"_blank",rel:"noopener noreferrer"},x=e("p",null,"\uACB0\uB860: \uB9AC\uC561\uD2B8 \uD5EC\uBA67, \uD03C, \uB9AC\uC561\uD2B8 \uD1A0\uC2A4\uD2F0\uD30C\uC774\uC640 \uAC19\uC740 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uB9AC\uC561\uD2B8 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uD1B5\uD569\uD558\uBA74 \uAE30\uB2A5\uC131, \uC0AC\uC6A9\uC790 \uACBD\uD5D8 \uBC0F \uC811\uADFC\uC131\uC744 \uD06C\uAC8C \uD5A5\uC0C1\uC2DC\uD0AC \uC218 \uC788\uC2B5\uB2C8\uB2E4. SEO \uCD5C\uC801\uD654, \uD48D\uBD80\uD55C \uD14D\uC2A4\uD2B8 \uD3B8\uC9D1 \uAE30\uB2A5 \uD65C\uC131\uD654, \uC0AC\uC6A9\uC790 \uD53C\uB4DC\uBC31 \uC81C\uACF5 \uB4F1 \uC5EC\uB7EC\uBD84\uC758 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uACFC \uC0AC\uC6A9\uC790\uC758 \uB2E4\uC591\uD55C \uD544\uC694\uB97C \uCDA9\uC871\uC2DC\uD0AC \uC218 \uC788\uB294 \uAC15\uB825\uD55C \uAE30\uB2A5\uACFC \uC0AC\uC6A9\uC790 \uC815\uC758 \uC635\uC158\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.",-1),v=e("p",null,"\uB2E4\uC74C \uB9AC\uC561\uD2B8 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uC774\uB7EC\uD55C \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uD0D0\uC0C9\uD558\uACE0 \uD1B5\uD569\uD558\uC5EC \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uB354 \uB098\uC740 \uC218\uC900\uC73C\uB85C \uBC1C\uC804\uC2DC\uD0A4\uB294 \uAC83\uC744 \uACE0\uB824\uD574\uBCF4\uC138\uC694.",-1);function y(E,R){const o=s("ExternalLinkIcon");return a(),n("div",null,[u,m,e("p",null,[t("1.React Helmet: \uC124\uBA85: React Helmet\uC740 \uB9AC\uC561\uD2B8 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uBB38\uC11C \uD5E4\uB4DC\uB97C \uC27D\uAC8C \uAD00\uB9AC\uD560 \uC218 \uC788\uAC8C \uD574\uC8FC\uB294 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC785\uB2C8\uB2E4. \uD604\uC7AC \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uC0C1\uD0DC\uC5D0 \uAE30\uBC18\uD558\uC5EC \uBA54\uD0C0 \uD0DC\uADF8, \uC81C\uBAA9 \uBC0F \uAE30\uD0C0 \uBB38\uC11C \uD5E4\uB4DC \uC694\uC18C\uB97C \uB3D9\uC801\uC73C\uB85C \uC124\uC815\uD558\uB294 \uAC04\uB2E8\uD558\uACE0 \uC120\uC5B8\uC801\uC778 \uBC29\uBC95\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uD61C\uD0DD: SEO \uCD5C\uC801\uD654: \uBA54\uD0C0 \uD0DC\uADF8\uC640 \uC81C\uBAA9\uC744 \uB3D9\uC801\uC73C\uB85C \uC124\uC815\uD568\uC73C\uB85C\uC368, React Helmet\uC740 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uAC80\uC0C9 \uC5D4\uC9C4 \uCD5C\uC801\uD654(SEO)\uB97C \uD5A5\uC0C1\uC2DC\uCF1C \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uB354 \uC27D\uAC8C \uBC1C\uACAC\uB418\uB3C4\uB85D \uB3D5\uC2B5\uB2C8\uB2E4. \uC811\uADFC\uC131 \uD5A5\uC0C1: React Helmet\uC740 \uBB38\uC11C \uD5E4\uB4DC \uC694\uC18C\uAC00 \uC2A4\uD06C\uB9B0 \uB9AC\uB354 \uBC0F \uAE30\uD0C0 \uBCF4\uC870 \uAE30\uC220\uC744 \uC0AC\uC6A9\uD558\uB294 \uBAA8\uB4E0 \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uC811\uADFC \uAC00\uB2A5\uD558\uB3C4\uB85D \uBCF4\uC7A5\uD569\uB2C8\uB2E4. \uC0AC\uC6A9\uC790 \uC815\uC758: Open Graph \uD0DC\uADF8 \uBC0F Twitter \uCE74\uB4DC \uC124\uC815\uACFC \uAC19\uC740 \uBA54\uD0C0\uB370\uC774\uD130\uB97C \uC0AC\uC6A9\uC790 \uC815\uC758\uD560 \uC218 \uC788\uB294 \uC635\uC158\uC744 \uC81C\uACF5\uD558\uC5EC \uC18C\uC15C \uBBF8\uB514\uC5B4 \uD50C\uB7AB\uD3FC\uC5D0\uC11C \uACF5\uC720\uB420 \uB54C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uC5B4\uB5BB\uAC8C \uB098\uD0C0\uB0A0\uC9C0 \uC81C\uC5B4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \u2014 "),e("a",h,[t("React Helmet \uB354 \uC54C\uC544\uBCF4\uAE30"),l(o)])]),e("p",null,[t("2.Quill: \uC124\uBA85: Quill\uC740 \uD604\uB300\uC801\uC778 WYSIWYG \uC5D0\uB514\uD130\uB85C, \uC0AC\uC6A9\uC790\uAC00 \uB9AC\uC561\uD2B8 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uB0B4\uC5D0\uC11C \uD48D\uBD80\uD55C \uCF58\uD150\uCE20\uB97C \uC0DD\uC131\uD558\uACE0 \uD3B8\uC9D1\uD560 \uC218 \uC788\uAC8C \uD574\uC90D\uB2C8\uB2E4. \uD14D\uC2A4\uD2B8 \uC11C\uC2DD, \uBAA9\uB85D, \uB9C1\uD06C, \uC774\uBBF8\uC9C0 \uB4F1\uC744 \uC9C0\uC6D0\uD558\uB294 \uBD80\uB4DC\uB7FD\uACE0 \uC9C1\uAD00\uC801\uC778 \uD3B8\uC9D1 \uACBD\uD5D8\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uD61C\uD0DD: \uD48D\uBD80\uD55C \uD14D\uC2A4\uD2B8 \uD3B8\uC9D1: Quill\uC744 \uC0AC\uC6A9\uD558\uBA74 \uC0AC\uC6A9\uC790\uAC00 \uC9C1\uC811 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uB0B4\uC5D0\uC11C \uD48D\uBD80\uD55C \uCF58\uD150\uCE20\uB97C \uC0DD\uC131\uD558\uACE0 \uD3B8\uC9D1\uD560 \uC218 \uC788\uC5B4, \uBE14\uB85C\uAE45 \uD50C\uB7AB\uD3FC, \uCF58\uD150\uCE20 \uAD00\uB9AC \uC2DC\uC2A4\uD15C \uBC0F \uD611\uC5C5 \uBB38\uC11C \uD3B8\uC9D1\uAE30\uB97C \uAD6C\uCD95\uD558\uAE30\uC5D0 \uC801\uD569\uD569\uB2C8\uB2E4. \uC0AC\uC6A9\uC790 \uC815\uC758: \uBAA8\uB4C8\uD654\uB41C \uC544\uD0A4\uD14D\uCC98\uC640 \uAE54\uB054\uD55C API\uB97C \uC81C\uACF5\uD558\uC5EC \uC5D0\uB514\uD130\uC758 \uAE30\uB2A5\uACFC \uBAA8\uC591\uC744 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uC694\uAD6C\uC5D0 \uB9DE\uAC8C \uC0AC\uC6A9\uC790 \uC815\uC758\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC0AC\uC6A9\uC790 \uC0C1\uD638\uC791\uC6A9: Quill\uC740 \uD0A4\uBCF4\uB4DC \uB2E8\uCD95\uD0A4, \uCF58\uD150\uCE20 \uBD99\uC5EC\uB123\uAE30, \uC2E4\uD589 \uCDE8\uC18C/\uB2E4\uC2DC \uC2E4\uD604 \uB4F1 \uC0AC\uC6A9\uC790 \uC785\uB825\uC744 \uD6A8\uACFC\uC801\uC73C\uB85C \uCC98\uB9AC\uD558\uB294 \uAC15\uB825\uD55C \uC9C0\uC6D0\uC744 \uC81C\uACF5\uD558\uC5EC \uC804\uCCB4\uC801\uC778 \uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC744 \uD5A5\uC0C1\uC2DC\uD0B5\uB2C8\uB2E4. "),e("a",f,[t("Quill \uBB38\uC11C \uD0D0\uC0C9"),l(o)])]),b,(a(),c(p("script"),null,{default:i(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),e("ol",g,[e("li",null,[t("\uB9AC\uC561\uD2B8 \uD1A0\uC2A4\uD2F0\uD30C\uC774: \uC124\uBA85: \uB9AC\uC561\uD2B8 \uD1A0\uC2A4\uD2F0\uD30C\uC774\uB294 \uB9AC\uC561\uD2B8 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uD1A0\uC2A4\uD2B8 \uC54C\uB9BC\uC744 \uCD94\uAC00\uD558\uB294 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC785\uB2C8\uB2E4. \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uD1B5\uC9C0, \uACBD\uACE0 \uBC0F \uD655\uC778 \uBA54\uC2DC\uC9C0\uB97C \uD45C\uC2DC\uD558\uAE30 \uC704\uD55C \uC0AC\uC6A9\uC790 \uC815\uC758 \uAC00\uB2A5\uD558\uACE0 \uC27D\uAC8C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uAD6C\uC131 \uC694\uC18C\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4. \uD61C\uD0DD: \uC0AC\uC6A9\uC790 \uD53C\uB4DC\uBC31: \uB9AC\uC561\uD2B8 \uD1A0\uC2A4\uD2F0\uD30C\uC774\uB97C \uC0AC\uC6A9\uD558\uBA74 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uB0B4 \uB3D9\uC791 \uB610\uB294 \uC774\uBCA4\uD2B8\uC5D0 \uB300\uD55C \uC801\uC2DC\uC801\uC778 \uD53C\uB4DC\uBC31\uC744 \uC81C\uACF5\uD558\uC5EC \uC0AC\uC6A9\uC790 \uC0C1\uD638\uC791\uC6A9\uACFC \uCC38\uC5EC\uB97C \uD5A5\uC0C1\uC2DC\uD0AC \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC0AC\uC6A9\uC790 \uC815\uC758: \uD1A0\uC2A4\uD2B8 \uC54C\uB9BC\uC758 \uC678\uAD00 \uBC0F \uB3D9\uC791\uC744 \uC0AC\uC6A9\uC790 \uC815\uC758\uD560 \uC218 \uC788\uB294 \uC635\uC158\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC704\uCE58, \uC2A4\uD0C0\uC77C\uB9C1, \uC9C0\uC18D \uC2DC\uAC04 \uBC0F \uD574\uC81C \uB3D9\uC791\uC744 \uB9DE\uCDA4 \uC124\uC815\uD558\uC5EC \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uB514\uC790\uC778\uACFC \uBE0C\uB79C\uB529\uC5D0 \uB9DE\uAC8C \uB9CC\uB4E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC811\uADFC\uC131: \uB9AC\uC561\uD2B8 \uD1A0\uC2A4\uD2F0\uD30C\uC774\uB294 \uC811\uADFC\uC131\uC744 \uC6B0\uC120\uC2DC\uD558\uC5EC \uC54C\uB9BC\uC774 \uBAA8\uB4E0 \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uC0AC\uC6A9 \uAC00\uB2A5\uD558\uACE0 \uC774\uD574\uD558\uAE30 \uC27D\uB3C4\uB85D \uBCF4\uC7A5\uD569\uB2C8\uB2E4. \uC7A5\uC560\uAC00 \uC788\uB294 \uC0AC\uC6A9\uC790\uB97C \uD3EC\uD568\uD558\uC5EC \uBAA8\uB4E0 \uC0AC\uC6A9\uC790\uB97C \uB300\uC0C1\uC73C\uB85C \uD569\uB2C8\uB2E4. \u2014 "),e("a",k,[t("\uB9AC\uC561\uD2B8 \uD1A0\uC2A4\uD2F0\uD30C\uC774 GitHub \uC800\uC7A5\uC18C \uBC29\uBB38"),l(o)])])]),x,v])}var I=r(d,[["render",y],["__file","index.html.vue"]]);export{I as default};