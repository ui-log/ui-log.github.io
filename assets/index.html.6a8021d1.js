import{_ as i}from"./app.3052dcfb.js";import{l as o,m as n,E as s,G as e,p as t,Y as l,C as a,K as d}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var r="/assets/NotbytheBookthewrongapproachtoCSSRefactoring_0.6bde22fa.png",c="/assets/NotbytheBookthewrongapproachtoCSSRefactoring_1.e4dc0b16.png",p="/assets/NotbytheBookthewrongapproachtoCSSRefactoring_2.42b83459.png",h="/assets/NotbytheBookthewrongapproachtoCSSRefactoring_3.9197b75a.png",u="/assets/NotbytheBookthewrongapproachtoCSSRefactoring_4.a7767a86.png",_="/assets/NotbytheBookthewrongapproachtoCSSRefactoring_5.7fabdf58.png",g="/assets/NotbytheBookthewrongapproachtoCSSRefactoring_6.94396d86.png",b="/assets/NotbytheBookthewrongapproachtoCSSRefactoring_7.c8afd2e9.png",f="/assets/NotbytheBookthewrongapproachtoCSSRefactoring_8.90983675.png",y="/assets/NotbytheBookthewrongapproachtoCSSRefactoring_9.36ec9afc.png",m="/assets/NotbytheBookthewrongapproachtoCSSRefactoring_10.cedebd3d.png";const w={},v=a("p",null,'\uB9CE\uC740 \uBD84\uB4E4\uC774 \uB51C\uB808\uB9C8\uB97C \uACAA\uC740 \uC801\uC774 \uC788\uC744 \uAC83 \uAC19\uC544\uC694: "\uC62C\uBC14\uB974\uAC8C \uD558\uB294 \uBC29\uBC95\uC744 \uC54C\uACE0 \uC788\uB294\uB370 (\uADF8\uB9AC\uACE0 \uADF8\uAC83\uC744 \uD558\uB294 \uAC83\uC774 \uC88B\uC740 \uC774\uC720\uB3C4 \uC54C\uACE0 \uC788\uB294\uB370) \uADF8\uB7EC\uB098 \uC81C \uC0C1\uD669\uC5D0\uC11C\uB294 \uAC70\uC758 \uC758\uBBF8\uAC00 \uC5C6\uC5B4\uC694." "\uADDC\uCE59\uC740 \uAE68\uC9C0\uAE30 \uC704\uD574 \uB9CC\uB4E4\uC5B4\uC84C\uB2E4"\uB098 "\uADDC\uCE59\uC744 \uC5B4\uAE30\uB294 \uC0AC\uB78C\uB4E4\uC774 \uC5ED\uC0AC\uB97C \uB9CC\uB4E0\uB2E4"\uC640 \uAC19\uC740 \uBB38\uAD6C\uB85C \uB2F9\uC2E0\uC744 \uAD34\uB86D\uD788\uC9C0 \uC54A\uACA0\uC5B4\uC694. \uC2A4\uD0C0\uC77C \uC2DC\uD2B8 \uB9AC\uD329\uD130\uB9C1\uC5D0 \uB300\uD55C \uB2E4\uB978 \uC774\uB860\uC801\uC778 \uAE30\uC0AC\uB97C \uBCF4\uC644\uD558\uB294 \uBA87 \uAC00\uC9C0 \uC2E4\uC81C\uC801\uC778 \uC608\uC81C\uB97C \uACF5\uC720\uD558\uB294 \uAC83\uC774 \uB354 \uC911\uC694\uD574\uC694.',-1),S=a("p",null,"\uC800\uB294 React\uB85C \uB9CC\uB4E0 \uC815\uC801 \uC6F9\uC0AC\uC774\uD2B8\uC778 \uD504\uB85C\uC81D\uD2B8\uB97C \uD558\uACE0 \uC788\uB294\uB370\uC694; \uC800\uD76C\uB294 Gatsby\uC640 Bootstrap\uC744 \uC0AC\uC6A9\uD574\uC694. \uC5B8\uAE09\uD588\uB358 \uB300\uB85C, \uD300 \uB0B4\uC5D0\uC11C \uADF8\uB9AC\uACE0 \uD504\uB85C\uC81D\uD2B8 \uC804\uCCB4\uC801\uC73C\uB85C \uD6E8\uC52C \uB354 \uC758\uBBF8\uAC00 \uC788\uC5B4 \uBCF4\uC774\uB294 \uBA87 \uAC00\uC9C0 \uCC45\uC5D0 \uC5C6\uB294 \uACB0\uC815\uC744 \uD588\uC5B4\uC694. \uC544\uB798\uC5D0\uC11C\uB294 \uC800\uD76C \uD504\uB85C\uC81D\uD2B8\uB97C @import rule\uC5D0\uC11C \uD1F4\uCD9C\uC2DC\uD0A4\uAE30 \uC704\uD574 \uCDE8\uD55C \uB9AC\uD329\uD130\uB9C1\uC758 \uCCAB \uBC88\uC9F8 \uB2E8\uACC4\uC5D0 \uB300\uD574 \uC774\uC57C\uAE30\uD560 \uAC70\uC608\uC694. \uB2E4\uB978 \uB2E8\uACC4\uB4E4\uC740 \uB354 \uC774\uB840\uC801\uC778 \uC811\uADFC \uBC29\uBC95\uC774 \uD6E8\uC52C \uC801\uC5C8\uAE30 \uB54C\uBB38\uC5D0 \uBCC4\uB3C4\uC758 \uAE30\uC0AC\uC5D0\uC11C \uD569\uCCD0\uC9C0\uACE0 \uB2E4\uB8E8\uC5B4 \uC9D1\uB2C8\uB2E4.",-1),k=a("h1",{id:"import\u110B\u1166\u1109\u1165-use-forward\u1105\u1169-\u110B\u1175\u110C\u1165\u11AB\u1112\u1161\u1100\u1175",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#import\u110B\u1166\u1109\u1165-use-forward\u1105\u1169-\u110B\u1175\u110C\u1165\u11AB\u1112\u1161\u1100\u1175","aria-hidden":"true"},"#"),t(" @import\uC5D0\uC11C @use & @forward\uB85C \uC774\uC804\uD558\uAE30")],-1),x=a("p",null,'\uACF5\uC2DD \uBB38\uC11C\uC5D0 \uB530\uB974\uBA74 @import rule\uC5D0\uB294 \uBA87 \uAC00\uC9C0 \uBB38\uC81C\uAC00 \uC788\uACE0, \uC55E\uC73C\uB85C \uBA87 \uB144 \uC548\uC5D0 \uC0AC\uC6A9 \uC911\uC9C0\uB420 \uC608\uC815\uC785\uB2C8\uB2E4. "\uC62C\uBC14\uB978" \uB300\uC548\uC740 \uBAA8\uB4C8\uC744 \uC18C\uAC1C\uD558\uACE0 @import\uC758 \uBAA8\uB4E0 "\uC798\uBABB"\uC744 \uD574\uACB0\uD558\uB294 @use rule\uC785\uB2C8\uB2E4.',-1),B=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),C=a("p",null,"@use, @import, \uBC0F @forward\uAC00 SASS\uC5D0\uC11C\uC758 \uCC28\uC774\uC5D0 \uB300\uD574 \uC798 \uBAA8\uB974\uC2DC\uACA0\uB2E4\uBA74, \uC774 \uC9E7\uC740 \uBE44\uB514\uC624\uB97C \uD655\uC778\uD574\uBCF4\uC138\uC694. \uB354 \uC12C\uC138\uD558\uAC8C \uCF54\uB4DC \uBCC0\uACBD \uC0AC\uD56D\uC744 \uB530\uB97C \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),N=a("h1",{id:"\u1106\u1169\u1103\u1172\u11AF",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u1106\u1169\u1103\u1172\u11AF","aria-hidden":"true"},"#"),t(" \uBAA8\uB4C8")],-1),R=a("p",null,"\uC774 \uC544\uC774\uB514\uC5B4\uB294 \uBA4B\uC9C0\uACE0 \uBA85\uD655\uD569\uB2C8\uB2E4: \uC11C\uB85C \uB2E4\uB978 \uC2A4\uD0C0\uC77C \uBE14\uB85D\uC744 \uACA9\uB9AC\uC2DC\uCF1C \uB3D9\uC77C\uD55C \uBCC0\uC218 \uC774\uB984\uC744 \uBC18\uBCF5\uD574\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC73C\uBA70, \uD6CC\uB96D\uD558\uAC8C \uC720\uC9C0\uD560 \uC218 \uC788\uB294 \uAD6C\uC870\uAC00 \uC0DD\uAE41\uB2C8\uB2E4. \uADF8\uB7EC\uB098, \uCC98\uC74C\uBD80\uD130 \uC774\uAC83\uC744 \uC5FC\uB450\uC5D0 \uB450\uACE0 \uC788\uB2E4\uBA74 \uC815\uB9D0 \uBE5B\uC744 \uBC1C\uD569\uB2C8\uB2E4. \uC644\uC804\uD788 \uC791\uB3D9\uD558\uB294 \uD504\uB85C\uC81D\uD2B8\uAC00 \uC788\uACE0 \uACB9\uCE58\uB294 \uC784\uD3EC\uD2B8 \uBC0F \uAC19\uC740 \uBC94\uC704\uC5D0\uC11C \uBCC0\uC218 \uBC0F \uBE0C\uB808\uC774\uD06C\uD3EC\uC778\uD2B8\uC5D0 \uC811\uADFC\uD55C\uB2E4\uBA74, \uC2A4\uD0C0\uC77C \uBAA8\uB4C8\uBCC4\uB85C \uBD84\uB9AC\uD558\uACE0 \uB2E4\uC2DC \uC4F0\uB294 \uAC83\uC740 \uAF64 \uB3C4\uC804\uC801\uC785\uB2C8\uB2E4.",-1),G=a("p",null,'\uC6B0\uB9AC\uB294 \uACB0\uC815\uC744 \uB0B4\uB9AC\uAE30\uB85C \uD588\uC2B5\uB2C8\uB2E4: "\uC62C\uBC14\uB978 \uBC29\uBC95"\uC73C\uB85C \uBAA8\uB4E0 \uAC83\uC744 \uCC98\uB9AC\uD558\uACE0 \uBCC0\uC218\uB97C \uBD80\uD2B8\uC2A4\uD2B8\uB7A9 \uBE0C\uB808\uC774\uD06C\uD3EC\uC778\uD2B8\uC5D0\uC11C \uBD84\uB9AC\uD558\uC5EC \uB124\uC784\uC2A4\uD398\uC774\uC2A4\uB97C \uD1B5\uD574 \uC561\uC138\uC2A4\uD558\uAC70\uB098, @use \uADDC\uCE59\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC0C1\uD0DC\uB97C \uADF8\uB300\uB85C \uB458 \uAC83\uC778\uC9C0.',-1),V=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),A=a("img",{src:r},null,-1),E=a("p",null,'"\uC798\uBABB\uB41C" \uBC29\uC2DD\uC5D0\uC11C \uC5BB\uB294 \uAC83\uC740 \uBB34\uC5C7\uC778\uAC00\uC694? \uB418\uB3CC\uB9B4 \uC218 \uC788\uC744\uAE4C\uC694?',-1),j=a("h2",{id:"\u110C\u1161\u11BC\u110C\u1165\u11B7",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u110C\u1161\u11BC\u110C\u1165\u11B7","aria-hidden":"true"},"#"),t(" \uC7A5\uC810:")],-1),D=a("ul",null,[a("li",null,"\uB2E4\uC2DC \uC4F8 \uCF54\uB4DC\uAC00 \uC801\uC5B4\uC838\uC11C \uB180\uB77C\uC6B4 \uC18D\uB3C4\uC640 \uC2E4\uC218\uB97C \uC904\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4."),a("li",null,"\uC55E\uC73C\uB85C \uC791\uC131\uD574\uC57C \uD560 \uCF54\uB4DC\uAC00 \uC801\uC5B4\uC9D1\uB2C8\uB2E4. \uD604\uC7AC\uB85C\uC11C \uBCC0\uC218\uC640 \uBD80\uD2B8\uC2A4\uD2B8\uB7A9 \uC784\uD3EC\uD2B8\uAC00 \uC788\uB294 \uB2E8 \uD55C \uAC1C\uC758 \uD30C\uC77C\uB9CC \uC788\uC2B5\uB2C8\uB2E4. \uD2B9\uD788 \uC774 \uACBD\uC6B0\uC5D0\uB294 \uC5EC\uB7EC \uBAA8\uB4C8\uC744 \uCD94\uAC00\uD560 \uD544\uC694\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."),a("li",null,"\uC790\uB3D9\uC644\uC131\uC740 \uC5EC\uC804\uD788 \uC798 \uC791\uB3D9\uD569\uB2C8\uB2E4; \uC5EC\uB7EC \uB2EC \uB3D9\uC548 \uBAA8\uB4C8 \uC5C6\uB294 \uC791\uC5C5 \uD750\uB984\uC5D0 \uC775\uC219\uD574\uC9C4 \uD300\uC740 \uC0C8\uB85C\uC6B4 \uAC83\uC5D0 \uC801\uC751\uD560 \uD544\uC694\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."),a("li",null,"\uC55E\uC73C\uB85C \uBAA8\uB4C8\uC744 \uBD84\uB9AC\uD574\uC57C \uD560 \uD544\uC694\uAC00 \uC788\uC73C\uBA74 \uADF8\uB54C \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.")],-1),H=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),J=d('<h2 id="\u1103\u1161\u11AB\u110C\u1165\u11B7" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u110C\u1165\u11B7" aria-hidden="true">#</a> \uB2E8\uC810:</h2><ul><li>\uD2C0\uB838\uC5B4\uC694. @use\uB294 \uBAA8\uB4C8\uC2DD\uC73C\uB85C \uC0AC\uC6A9\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4.</li><li>\uACB9\uCE58\uB294 \uBCC0\uC218\uB97C \uAD00\uB9AC\uD558\uAE30\uAC00 \uB354 \uC5B4\uB824\uC6CC\uC84C\uC5B4\uC694.</li></ul><p>\uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uB0B4\uAC00 \uD55C \uBCC0\uACBD \uC0AC\uD56D\uC5D0 \uB300\uD55C \uB9E5\uB77D\uC744 \uC54C\uAC8C \uB418\uC5C8\uC73C\uB2C8, \uC774\uC81C \uADF8\uAC83\uB4E4\uC744 \uB2E8\uACC4\uBCC4\uB85C \uC548\uB0B4\uD574 \uB4DC\uB9B4\uAC8C\uC694. \uB9CC\uB0A8\uC744 \uB354 \uC774\uC0C1 \uBBF8\uB8E8\uC9C0 \uB9D0\uACE0 \uC774\uC81C \uC6B0\uB9AC \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uC774 \uAD6C\uC2DD @import \uADDC\uCE59\uC744 \uB9C8\uC9C0\uB9C9\uC73C\uB85C \uC81C\uAC70\uD574 \uBCF4\uACA0\uC5B4\uC694!</p><h1 id="\u1103\u1161\u11AB\u1100\u1168-1-import\u1105\u1173\u11AF-forward\u1105\u1169-\u1107\u1161\u1101\u116F\u110C\u116F\u110B\u116D-\u1106\u1161\u11AB\u110B\u1163\u11A8-\u1103\u1166\u110B\u1175\u1110\u1165\u1100\u1161-\u1109\u1161\u110B\u116D\u11BC\u1103\u116C\u110C\u1175-\u110B\u1161\u11AD\u1102\u1173\u11AB\u1103\u1161\u1106\u1167\u11AB" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u1100\u1168-1-import\u1105\u1173\u11AF-forward\u1105\u1169-\u1107\u1161\u1101\u116F\u110C\u116F\u110B\u116D-\u1106\u1161\u11AB\u110B\u1163\u11A8-\u1103\u1166\u110B\u1175\u1110\u1165\u1100\u1161-\u1109\u1161\u110B\u116D\u11BC\u1103\u116C\u110C\u1175-\u110B\u1161\u11AD\u1102\u1173\u11AB\u1103\u1161\u1106\u1167\u11AB" aria-hidden="true">#</a> \uB2E8\uACC4 1: @import\uB97C @forward\uB85C \uBC14\uAFD4\uC918\uC694 \uB9CC\uC57D \uB370\uC774\uD130\uAC00 \uC0AC\uC6A9\uB418\uC9C0 \uC54A\uB294\uB2E4\uBA74</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),K=a("p",null,"\uACFC\uAC70\uC5D0\uB294 start.scss \uD30C\uC77C\uC774 \uC788\uC5C8\uB294\uB370, \uC774 \uD30C\uC77C\uC740 \uBCC0\uC218\uC640 \uBD80\uD2B8\uC2A4\uD2B8\uB7A9\uC744 \uBAA8\uB450 \uAC00\uC838\uC640 \uBAA8\uB4E0 \uC2A4\uD0C0\uC77C\uC5D0 \uC811\uADFC \uAC00\uB2A5\uD558\uB3C4\uB85D \uD588\uC2B5\uB2C8\uB2E4. \uADF8\uB7F0\uB370 start.scss \uC548\uC5D0\uB294 \uC544\uBB34\uAC83\uB3C4 \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uC740 \uCC44\uB85C, \uC2A4\uD0C0\uC77C \uC2DC\uD2B8\uC5D0 @forward \uADDC\uCE59\uC744 \uC0AC\uC6A9\uD558\uC5EC \uD574\uB2F9 \uC2A4\uD0C0\uC77C\uC744 Layout.tsx\uC5D0\uC11C \uC561\uC138\uC2A4\uD560 \uC218 \uC788\uAC8C \uC218\uC815\uD588\uC2B5\uB2C8\uB2E4. \uB610\uD55C JSX\uC5D0\uC11C \uBD80\uD2B8\uC2A4\uD2B8\uB7A9 \uBC0F \uBCC0\uC218\uB97C \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uAC8C \uB418\uC5C8\uC73C\uBBC0\uB85C \uD574\uC81C\uD574\uC57C \uD569\uB2C8\uB2E4. \uBCC0\uACBD \uB0B4\uC6A9\uC740 \uC544\uB798\uC640 \uAC19\uC558\uC2B5\uB2C8\uB2E4:",-1),L=a("p",null,[a("img",{src:c,alt:"image"})],-1),O=a("h1",{id:"\u1103\u1161\u11AB\u1100\u1168-2-\u110C\u1162\u1109\u1161\u110B\u116D\u11BC-\u1100\u1161\u1102\u1173\u11BC\u1112\u1161\u11AB-\u1103\u1166\u110B\u1175\u1110\u1165-\u1112\u1173\u1105\u1173\u11B7-\u1100\u116A\u11AB\u1105\u1175-\u1106\u1175\u11BE-\u1112\u1161\u11AB-\u1100\u1169\u11BA\u110B\u1166-\u1102\u1165\u11C2\u1100\u1175",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u1103\u1161\u11AB\u1100\u1168-2-\u110C\u1162\u1109\u1161\u110B\u116D\u11BC-\u1100\u1161\u1102\u1173\u11BC\u1112\u1161\u11AB-\u1103\u1166\u110B\u1175\u1110\u1165-\u1112\u1173\u1105\u1173\u11B7-\u1100\u116A\u11AB\u1105\u1175-\u1106\u1175\u11BE-\u1112\u1161\u11AB-\u1100\u1169\u11BA\u110B\u1166-\u1102\u1165\u11C2\u1100\u1175","aria-hidden":"true"},"#"),t(" \uB2E8\uACC4 2: \uC7AC\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uB370\uC774\uD130 \uD750\uB984 \uAD00\uB9AC \uBC0F \uD55C \uACF3\uC5D0 \uB123\uAE30")],-1),T=a("p",null,"\uBD80\uD2B8\uC2A4\uD2B8\uB7A9\uACFC \uBCC0\uC218\uB97C \uACB0\uD569\uD558\uAE30 \uC704\uD574 \uC0C8 \uD30C\uC77C imports.scss\uB97C \uC0DD\uC131\uD558\uACE0 \uAC12\uB4E4\uC744 \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uC744 \uAC83\uC774\uAE30 \uB54C\uBB38\uC5D0 \uB2E4\uC2DC @forward \uADDC\uCE59\uC744 \uC0AC\uC6A9\uD588\uC2B5\uB2C8\uB2E4. \uC989\uC2DC \uC8FC\uC694 \uC0C9\uC0C1 \uBC0F \uB2E4\uC591\uD55C \uB808\uC774\uC544\uC6C3 \uC9C0\uC810\uACFC \uAC19\uC740 \uC911\uBCF5\uB418\uB294 \uBCC0\uC218 \uBB38\uC81C\uC5D0 \uC9C1\uBA74\uD588\uC2B5\uB2C8\uB2E4.",-1),X=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),Y=a("img",{src:p},null,-1),q=a("p",null,"\uB2E4\uC2DC \uD55C \uBC88 \uCC98\uB9AC\uD558\uB294 \uBC29\uBC95\uC740 \uC801\uC5B4\uB3C4 \uB450 \uAC00\uC9C0\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uAD8C\uC7A5\uB418\uB294 \uBC29\uBC95\uC740 \uBB38\uC11C\uC5D0 \uD45C\uC2DC\uB418\uC5B4 \uC788\uC73C\uBA70 \uBCC0\uC218\uB97C \uB2E4\uC2DC \uD560\uB2F9\uD558\uB294 \uD30C\uC77C\uC744 \uD558\uB098 \uB354 \uB9CC\uB4DC\uB294 \uAC83\uC744 \uD3EC\uD568\uD569\uB2C8\uB2E4.",-1),z=a("img",{src:h},null,-1),F=a("p",null,"\uC774 \uC811\uADFC \uBC29\uC2DD\uC5D0\uC11C \uC815\uB9D0 \uC2EB\uC5B4\uD558\uB294 \uC810\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uC989, \uBCC0\uC218\uAC00 \uC5B4\uB5BB\uAC8C \uBCC0\uD558\uB294\uC9C0 \uD5F7\uAC08\uB9AC\uC9C0 \uC54A\uB3C4\uB85D \uD30C\uC77C\uC744 \uD2B9\uC815\uD55C \uBC29\uC2DD\uC73C\uB85C \uC815\uB9AC\uD574\uC57C\uD55C\uB2E4\uB294 \uC810\uC785\uB2C8\uB2E4. \uBAA8\uB4E0 \uBCC0\uACBD \uC0AC\uD56D\uC744 _override.scss\uC5D0 \uC800\uC7A5\uD560 \uC218 \uC788\uC9C0\uB9CC, \uC544\uB984\uB2E4\uC6B4 with() \uAD6C\uC131 \uC635\uC158\uC774 \uC788\uAE30 \uB54C\uBB38\uC5D0 \uAD73\uC774 \uADC0\uCC2E\uC544\uD560 \uD544\uC694\uAC00 \uC788\uC744\uAE4C\uC694? \uC800\uB294 \uC774 \uC811\uADFC \uBC29\uC2DD\uC744 \uC120\uD638\uD569\uB2C8\uB2E4:",-1),I=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),M=a("ul",null,[a("li",null,"\uC6B0\uB9AC\uB294 \uBAA8\uB4E0 \uAC83\uC744 \uD55C \uACF3\uC5D0 \uBAA8\uC558\uC5B4\uC694 \u2014 \uC911\uCCA9\uB41C \uBCC0\uC218\uAC00 \uB108\uBB34 \uB9CE\uC9C0 \uC54A\uB2E4\uBA74 \uC720\uC9C0 \uAD00\uB9AC\uAC00 \uB354 \uC26C\uC6CC\uC694;"),a("li",null,"\uCD94\uAC00 \uD30C\uC77C\uC744 \uC0DD\uC131\uD558\uC9C0 \uC54A\uC544\uC694 \u2014 \uC774\uAC8C \uD504\uB85C\uC81D\uD2B8\uB97C \uC0C8\uB86D\uAC8C \uC2DC\uC791\uD558\uB294 \uC0AC\uB78C\uB4E4\uC5D0\uAC8C \uB354 \uC77D\uAE30 \uC27D\uAC8C \uB9CC\uB4E4\uC5B4\uC918\uC694;"),a("li",null,"\uC5B4\uB514\uC5D0\uC11C \uBB34\uC5C7\uC774 \uC218\uC815\uB418\uC5C8\uB294\uC9C0 \uBA85\uD655\uD788 \uBCFC \uC218 \uC788\uC5B4\uC694 \u2014 \uC774\uB97C \uD1B5\uD574 \uC911\uBCF5 \uC218\uC815\uC774 \uC5C6\uB2E4\uB294 \uAC83\uC744 \uBCF4\uC7A5\uD560 \uC218 \uC788\uC5B4\uC694.")],-1),P=a("p",null,[a("img",{src:u,alt:"\uC774\uBBF8\uC9C0"})],-1),Q=a("p",null,"\uB098\uB294 \uC77C\uC885\uC758 \uCEE8\uD14C\uC774\uB108\uB97C \uB9CC\uB4E4\uC5C8\uC5B4\uC694. \uC774 \uCEE8\uD14C\uC774\uB108\uB294 \uAC12\uC744 \uC800\uC7A5\uD558\uACE0 @forward\uD560 \uC218 \uC788\uB294\uB370\uC694, \uB9CC\uC57D \uD2B9\uC815 \uAE30\uBCF8 \uC2A4\uD0C0\uC77C\uC744 \uCD94\uAC00\uD558\uACE0 @extend \uADDC\uCE59\uC744 \uD1B5\uD574 \uC811\uADFC\uD560 \uC218 \uC788\uAC8C \uD558\uB824\uBA74 \uC5B4\uB5BB\uAC8C \uD574\uC57C \uD560\uAE4C\uC694? \uC81C\uAC00 \uC2A4\uD06C\uB9B0\uC0F7\uC744 \uC8FC\uBAA9\uD588\uB2E4\uBA74 \uC774\uBBF8 \uBB34\uC2A8 \uC598\uAE30\uC778\uC9C0 \uC720\uCD94\uD560 \uC218 \uC788\uC744 \uAC81\uB2C8\uB2E4. \uADF8\uAC83\uC740 variables \uB514\uB809\uD1A0\uB9AC \uC544\uB798\uC758 global.scss \uD30C\uC77C\uC774\uC5D0\uC694.",-1),U=a("p",null,'\uBAA8\uB4E0 \uC774 "\uD45C\uC900\uD654" \uD074\uB798\uC2A4\uB4E4\uC744 import\uC5D0 \uBCF5\uC0AC\uD558\uB294 \uAC8C \uC65C \uC88B\uC9C0 \uC54A\uC744\uAE4C\uC694? \uC6B0\uB9AC\uB294 \uBAA8\uB4C8\uB4E4\uC744 \uAC00\uC7A5 \uC798 \uD65C\uC6A9\uD558\uAE30 \uB54C\uBB38\uC774\uC5D0\uC694: imports.scss\uC640 \uADF8 \uBCC0\uC218\uB4E4\uC744 "\uAE30\uBCF8" \uD074\uB798\uC2A4\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC5B4\uC694.',-1),W=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),Z=a("img",{src:_},null,-1),$=a("p",null,"\uC5EC\uAE30 \uBCF4\uC138\uC694. \uC6B0\uB9AC\uAC00 \uD55C \uC77C\uC740 \uBB34\uC5C7\uC778\uAC00\uC694? \uC6B0\uB9AC\uC758 \uCF54\uB4DC\uB294 \uB2E8 \uD55C \uC904\uB9CC \uBC14\uB00C\uC5C8\uC5B4\uC694; \uBCC0\uC218\uB4E4\uC744 \uB2E4\uC2DC \uAD6C\uC131\uD558\uC9C0 \uC54A\uC73C\uB824\uACE0 * \uAD6C\uBB38\uC744 \uC0AC\uC6A9\uD574\uC11C \uAE30\uBCF8 \uBAA8\uB4C8 \uC774\uB984(\uB514\uB809\uD1A0\uB9AC \uC774\uB984)\uC744 \uD53C\uD588\uC5B4\uC694.",-1),aa=a("h1",{id:"\u1103\u1161\u11AB\u1100\u1168-3-\u1100\u1167\u11AF\u1112\u1161\u11B8\u1103\u116C\u11AB-\u1103\u1166\u110B\u1175\u1110\u1165-\u1109\u1171\u11B8\u1100\u1166-\u110C\u1165\u11B8\u1100\u1173\u11AB-\u1100\u1161\u1102\u1173\u11BC\u1112\u1161\u1100\u1166-\u1106\u1161\u11AB\u1103\u1173\u11AF\u1100\u1175",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u1103\u1161\u11AB\u1100\u1168-3-\u1100\u1167\u11AF\u1112\u1161\u11B8\u1103\u116C\u11AB-\u1103\u1166\u110B\u1175\u1110\u1165-\u1109\u1171\u11B8\u1100\u1166-\u110C\u1165\u11B8\u1100\u1173\u11AB-\u1100\u1161\u1102\u1173\u11BC\u1112\u1161\u1100\u1166-\u1106\u1161\u11AB\u1103\u1173\u11AF\u1100\u1175","aria-hidden":"true"},"#"),t(" \uB2E8\uACC4 3: \uACB0\uD569\uB41C \uB370\uC774\uD130 \uC27D\uAC8C \uC811\uADFC \uAC00\uB2A5\uD558\uAC8C \uB9CC\uB4E4\uAE30")],-1),ta=a("p",null,"\uAD6C\uD604\uD574\uC57C \uD560 \uB9C8\uC9C0\uB9C9 \uAC83\uC740 developers\uAC00 \uD504\uB85C\uC81D\uD2B8\uC758 \uB098\uBA38\uC9C0 \uBD80\uBD84\uC744 \uBC14\uAFB8\uC9C0 \uC54A\uACE0 imports.scss\uC640 global.scss \uB370\uC774\uD130\uB97C \uBAA8\uB450 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB3C4\uB85D \uD558\uB294 \uAC83\uC785\uB2C8\uB2E4.",-1),oa=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),sa=d('<img src="'+g+'"><p>\uC800\uB294 \uBAA8\uB4E0 \uC2A4\uD0C0\uC77C \uC2DC\uD2B8\uAC00 \uC704\uCE58\uD558\uB294 styles \uB514\uB809\uD1A0\uB9AC \uC544\uB798\uC5D0 _index.scss\uB97C \uC0DD\uC131\uD588\uC2B5\uB2C8\uB2E4. \uC774\uB807\uAC8C \uD568\uC73C\uB85C\uC368 \uB098\uBA38\uC9C0 \uC2A4\uD0C0\uC77C\uC5D0 \uB9E4\uC6B0 \uAC04\uB2E8\uD55C \uCD94\uAC00\uB97C \uD560 \uC218 \uC788\uC5C8\uACE0, \uC815\uD655\uD788 \uD55C \uC904\uC744 \uBCF5\uC0AC\uD588\uC2B5\uB2C8\uB2E4.</p><img src="'+b+'"><h1 id="\u1103\u1161\u11AB\u1100\u1168-4-forward\u1105\u1173\u11AF-\u110B\u1175\u110B\u116D\u11BC\u1112\u1161\u11AB-\u1107\u1169\u1102\u1165\u1109\u1173-\u110E\u1162\u11AF\u1105\u1175\u11AB\u110C\u1175" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u1100\u1168-4-forward\u1105\u1173\u11AF-\u110B\u1175\u110B\u116D\u11BC\u1112\u1161\u11AB-\u1107\u1169\u1102\u1165\u1109\u1173-\u110E\u1162\u11AF\u1105\u1175\u11AB\u110C\u1175" aria-hidden="true">#</a> \uB2E8\uACC4 4: @forward\uB97C \uC774\uC6A9\uD55C \uBCF4\uB108\uC2A4 \uCC4C\uB9B0\uC9C0</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),ea=a("p",null,"\uB9CC\uC57D \uB2F9\uC2E0\uC774 \uB2E8\uACC4 1\uC774 \uC21C\uC870\uB86D\uB2E4\uACE0 \uC0DD\uAC01\uD588\uB2E4\uBA74, \uC544\uB2C8\uC5C8\uC5B4\uC694. \uC74C, \uC644\uC804\uD788 \uC21C\uC870\uB86D\uC9C0\uB294 \uC54A\uC558\uC5B4\uC694. \uC6B0\uB9AC \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C\uB294 \uBAA8\uB4E0 \uC2A4\uD0C0\uC77C\uC744 \uACB0\uD569\uD558\uB294 start.scss\uC640 \uAC19\uC740 \uD30C\uC77C\uC774 \uD544\uC694\uD588\uC5B4\uC694. \uB2F9\uC5F0\uD788 \uADF8\uB7F0 \uC0C1\uD669\uC5D0\uC11C\uB294 \uC2A4\uD0C0\uC77C \uC2DC\uD2B8\uC758 \uC9C0\uC5ED \uBCC0\uC218\uAC00 \uC11C\uB85C \uACB9\uCE58\uAC8C \uB418\uC5C8\uC8E0. \uD558\uC9C0\uB9CC \uADF8\uAC83\uB4E4\uC744 \uC7AC\uD560\uB2F9\uD558\uAE38 \uC6D0\uD558\uC9C0 \uC54A\uC558\uC5B4\uC694. \u201C\uC62C\uBC14\uB978\u201D \uBC29\uBC95\uC740 \uB2E4\uC2DC \uB9D0\uD558\uC9C0\uB9CC \uAC01 \uC2A4\uD0C0\uC77C \uC2DC\uD2B8\uB9C8\uB2E4 \uC9C0\uC5ED \uBCC0\uC218\uC640 @use \uBCC0\uC218\uB97C \uC0AC\uC6A9\uD558\uB3C4\uB85D \uBCC4\uB3C4\uC758 \uD30C\uC77C\uC744 \uB9CC\uB4E4\uC5B4\uC57C \uD588\uC5B4\uC694. \uBA4B\uC9C0\uACE0 \uC88B\uC740 \uBC29\uBC95\uC774\uAE34 \uD558\uC9C0\uB9CC, \uB108\uBB34 \uB9CE\uC740 \uC791\uC5C5\uC774 \uD544\uC694\uD588\uB294\uB370 \uC644\uC804\uD788 \uD544\uC694 \uC5C6\uB294 \uC791\uC5C5\uC774\uC5C8\uC5B4\uC694. \uBCF4\uC5EC\uC904\uAC8C\uC694.",-1),la=a("p",null,[a("img",{src:f,alt:"\uCCA8\uBD80 \uC774\uBBF8\uC9C0"})],-1),da=a("p",null,"@import\uB97C @forward\uB85C \uBCC0\uACBD\uD55C \uD30C\uC77C \uC804\uCCB4\uC5D0\uC11C \uCDA9\uB3CC\uC774 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\uB294 \uD55C \uACF3\uBFD0\uC774\uC5C8\uC5B4\uC694. \uAE30\uC220\uC801\uC73C\uB85C \uB458\uC774\uAE34 \uD588\uC9C0\uB9CC, \uD55C \uD30C\uC77C \uB0B4\uC5D0\uC11C \uBC1C\uC0DD\uD588\uC5B4\uC694. \uADF8\uB9AC\uACE0 SASS\uC5D0\uC11C \uAC00\uC2DC\uC131\uC744 \uC81C\uC5B4\uD560 \uC218 \uC788\uB294 \uC635\uC158\uC774 \uC788\uAE30 \uB54C\uBB38\uC5D0 \uADF8\uAC78 \uC0AC\uC6A9\uD588\uC5B4\uC694. \uB530\uB77C\uC11C \uAE54\uB054\uD558\uACE0 \uBA4B\uC9C4 \uC544\uD0A4\uD14D\uCC98\uC801\uC778 \uD574\uACB0\uCC45\uC5D0 \uBC18\uB300\uD588\uC5B4\uC694. \uC65C\uB0D0\uD558\uBA74 \uB9CE\uC740 \uC911\uCCA9\uC774 \uBC1C\uC0DD\uD55C\uB2E4\uBA74 \uBCC4\uB3C4\uC758 \uD30C\uC77C\uC744 \uB9CC\uB4E4\uC5B4\uC57C \uD558\uACE0, \uC774 \uAD6C\uC870\uC801 \uBCC0\uACBD\uC774 \uBBF8\uC801\uC73C\uB85C \uB354 \uBA4B\uC9C0\uAC8C \uB9CC\uB4DC\uB294 \uB370\uC5D0 \uAD49\uC7A5\uD55C \uBD80\uD558\uB97C \uCD08\uB798\uD560 \uAC83\uC774\uAE30 \uB54C\uBB38\uC774\uC8E0.",-1),ia=a("h1",{id:"\u1103\u1161\u11AB\u1100\u1168-5-\u1106\u1161\u110C\u1175\u1106\u1161\u11A8-import-\u110C\u1166\u1100\u1165",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u1103\u1161\u11AB\u1100\u1168-5-\u1106\u1161\u110C\u1175\u1106\u1161\u11A8-import-\u110C\u1166\u1100\u1165","aria-hidden":"true"},"#"),t(" \uB2E8\uACC4 5: \uB9C8\uC9C0\uB9C9 @import \uC81C\uAC70")],-1),na=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),ra=a("p",null,'\uC5EC\uAE30\uC11C \uB2E4\uC2DC \uB9D0\uC500\uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4: "\uC9D1\uC911\uB825\uC744 \uB0AD\uBE44\uD558\uC9C0 \uB9C8\uC138\uC694; \uBAA9\uD45C\uB97C \uAE30\uC5B5\uD558\uC138\uC694". \uC6B0\uB9AC\uB294 @import \uADDC\uCE59\uC744 @use\uC640 @forward\uB85C \uB300\uCCB4\uD558\uAE30 \uC704\uD574 \uC2A4\uD0C0\uC77C \uC2DC\uD2B8\uB97C \uB9AC\uD329\uD1A0\uB9C1\uD574\uC57C \uD569\uB2C8\uB2E4. \uC774\uAC83\uC774 \uC6B0\uB9AC\uC758 \uC8FC\uC694 \uBAA9\uD45C\uC774\uBA70, \uC6B0\uB9AC\uB294 \uC131\uACF5\uD588\uC2B5\uB2C8\uB2E4. \uADF8\uB7EC\uB098! \uC6B0\uB9AC\uB294 variables.scss\uC5D0\uC11C \uC678\uBD80 \uAE00\uAF34\uC744 \uC0AC\uC6A9\uD558\uACE0 @use\uB85C\uB294 \uC774\uB97C \uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.',-1),ca=a("p",null,'@import url("https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;700&family=Open+Sans:wght@400;500;700&display=swap");',-1),pa=a("p",null,'\uBAA8\uB4E0 \uC791\uC5C5\uC774 \uB05D\uB098\uACE0 \uAD49\uC7A5\uD788 \uC791\uC740 \uBB38\uC81C\uC774\uAE30 \uB54C\uBB38\uC5D0 \uCD08\uAE30 \uBC94\uC704\uC5D0\uC11C \uC870\uAE08 \uBC97\uC5B4\uB098\uBCFC \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uC6B0\uB9AC\uB294 Gatsby\uB97C \uC0AC\uC6A9\uD558\uBBC0\uB85C, \uADF8\uB4E4\uC758 \uD574\uACB0\uCC45\uC744 \uAD6C\uAE00\uB9C1\uD574\uBCF4\uC558\uACE0 \uC6B0\uB9AC \uBAA9\uC801\uC5D0 \uC815\uD655\uD788 \uB9DE\uB294 \uBA4B\uC9C4 \uD328\uD0A4\uC9C0\uB97C \uBC1C\uACAC\uD588\uC2B5\uB2C8\uB2E4: "gatsby-omni-font-loader": "^2.0.2". \uC774\uB97C \uC0AC\uC6A9\uD558\uB824\uBA74, plugins \uBC30\uC5F4 \uC548\uC5D0 gatsby-config.js\uC5D0 \uAD6C\uC131 \uAC1D\uCCB4\uB97C \uCD94\uAC00\uD574\uC57C \uD569\uB2C8\uB2E4.',-1),ha=a("p",null,[a("img",{src:y,alt:"\uC774\uBBF8\uC9C0"})],-1),ua=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),_a=a("p",null,"\uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uB9C8\uC9C0\uB9C9 @import\uB97C \uC81C\uAC70\uD558\uACE0 \uAE30\uC874 \uC791\uC5C5 \uD750\uB984\uC744 \uBC29\uD574\uD558\uC9C0 \uC54A\uAE30 \uC704\uD574 \uAE00\uAF34 \uBCC0\uC218\uB97C \uB0A8\uACA8\uB450\uBA74 \uB429\uB2C8\uB2E4.",-1),ga=a("p",null,[a("img",{src:m,alt:"\uC774\uBBF8\uC9C0"})],-1),ba=a("h1",{id:"\u1100\u1167\u11AF\u1105\u1169\u11AB",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u1100\u1167\u11AF\u1105\u1169\u11AB","aria-hidden":"true"},"#"),t(" \uACB0\uB860")],-1),fa=a("p",null,'\uBA87 \uAC00\uC9C0 \uC2E4\uCC9C \uBC29\uBC95\uC740 \uB108\uBB34 \uC6B0\uC218\uD574\uC11C "\uCD5C\uC0C1\uC758 \uC2E4\uCC9C \uBC29\uBC95"\uC73C\uB85C \uBD88\uB9BD\uB2C8\uB2E4. \uADF8\uB7EC\uB098 \uC774\uAC83\uB4E4\uC774 \uBCF4\uD3B8\uC801\uC778 \uAC83\uC77C\uAE4C\uC694? \uADF8\uB807\uC9C0 \uC54A\uC544\uC694. "\uC774\uC0C1\uC801\uC778 \uC544\uD0A4\uD14D\uCC98"\uB098 "\uAE54\uB054\uD55C \uCF54\uB4DC"\uB97C \uAC16\uB294 \uAC83\uC740 \uC815\uB9D0\uB85C \uC88B\uC9C0\uB9CC, \uC774\uB97C \uAC00\uB2A5\uD558\uAC8C \uD558\uB824\uBA74 \uC5BC\uB9C8\uB098 \uB9CE\uC740 \uC694\uC18C\uAC00 \uACB0\uD569\uB418\uC5B4\uC57C \uD560\uAE4C\uC694? \uD604\uC2E4\uC5D0\uC11C\uB294 \uBE60\uB978 \uC81C\uACF5\uACFC \uC720\uC9C0\uBCF4\uC218\uC758 \uC26C\uC6C0 \uC0AC\uC774\uC758 \uADE0\uD615\uC744 \uCC3E\uC544\uC57C \uD569\uB2C8\uB2E4.',-1),ya=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),ma=a("p",null,'\uC6B0\uB9AC\uC758 \uBAA9\uD45C\uB294 \uC801\uC751\uD558\uACE0 \uC804\uB2EC\uD558\uB294 \uAC83\uC774\uBA70 "\uB9CC\uC57D" \uAC00\uC9C0\uB97C \uC774\uC0C1\uD654\uD558\uC9C0 \uC54A\uB294 \uAC83\uC785\uB2C8\uB2E4. \uAC01 \uACB0\uC815\uC774 \uACB0\uACFC\uB85C \uC774\uC5B4\uC9C4\uB2E4\uB294 \uAC83\uC744 \uC778\uC2DD\uD558\uC138\uC694. \uD558\uC9C0\uB9CC \uC608\uCE21 \uAC00\uB2A5\uD55C \uD55C cool \uD558\uAC8C \uD589\uB3D9\uD574\uC694. \uADF8\uB798\uC11C \uC6A9\uAC10\uD558\uAC8C "\uC798\uBABB\uB41C" \uBC29\uC2DD\uC73C\uB85C \uC77C\uC744 \uCC98\uB9AC\uD574\uBCF4\uC138\uC694. \uB2E8, \uADDC\uCE59\uC744 \uC5B4\uAE30\uB294 \uC774\uC720\uB97C \uC815\uB2F9\uD654\uD560 \uC218 \uC788\uB2E4\uBA74\uC694.',-1);function wa(va,Sa){return o(),n("div",null,[v,S,k,x,B,(o(),s(l("script"),null,{default:e(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),C,N,R,G,V,(o(),s(l("script"),null,{default:e(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),A,E,j,D,H,(o(),s(l("script"),null,{default:e(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),J,(o(),s(l("script"),null,{default:e(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),K,L,O,T,X,(o(),s(l("script"),null,{default:e(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),Y,q,z,F,I,(o(),s(l("script"),null,{default:e(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),M,P,Q,U,W,(o(),s(l("script"),null,{default:e(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),Z,$,aa,ta,oa,(o(),s(l("script"),null,{default:e(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),sa,(o(),s(l("script"),null,{default:e(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),ea,la,da,ia,na,(o(),s(l("script"),null,{default:e(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),ra,ca,pa,ha,ua,(o(),s(l("script"),null,{default:e(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),_a,ga,ba,fa,ya,(o(),s(l("script"),null,{default:e(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),ma])}var Ga=i(w,[["render",wa],["__file","index.html.vue"]]);export{Ga as default};