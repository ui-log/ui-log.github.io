import{_ as i}from"./app.d68f74da.js";import{l as a,m as d,E as l,G as o,p as e,Y as s,C as t,K as n}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var c="/assets/HumanCentricUI2023_0.3e4520db.png";const p={},r=t("p",null,[t("img",{src:c,alt:"HumanCentricUI2023_0"})],-1),_=t("p",null,"\uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C\uC5D0\uC11C\uB294 \uC0C8\uB85C\uC6B4 \uAE30\uB2A5\uC744 \uAD6C\uD604\uD558\uBA74\uC11C \uC0DD\uAE30\uB294 \uACE0\uD1B5\uC744 \uACBD\uD5D8\uD568\uC73C\uB85C\uC368\uB9CC \uBC30\uC6B8 \uC218 \uC788\uB294 \uC8FC\uC758\uD560 \uC810\uB4E4\uC774 \uB9CE\uC774 \uC788\uC5B4\uC694. \uC548\uB4DC\uB85C\uC774\uB4DC\uC758 \uADF8\uB9BC\uC790\uB294 iOS\uC640 \uB2E4\uB97C \uBFD0\uB354\uB7EC, \uC2A4\uD06C\uB864\uBDF0 \uC911\uCCA9\uC740 \uC798\uBABB\uB41C \uC2A4\uD06C\uB864\uBDF0\uB97C \uC2A4\uD06C\uB864\uD560 \uC218\uB3C4 \uC788\uACE0, \uBE60\uB974\uAC8C \uB204\uB97C \uC218 \uC788\uB294 \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uB204\uB974\uBA74 \uC6D0\uCE58 \uC54A\uB294 \uC694\uCCAD\uC73C\uB85C \uBC31\uC5D4\uB4DC\uB97C \uC5C4\uCCAD\uB098\uAC8C \uCE60 \uC218\uB3C4 \uC788\uC5B4\uC694.",-1),u=t("p",null,"\uB9C8\uC9C0\uB9C9 \uC608\uC2DC\uB294 \uAD49\uC7A5\uD788 \uAC00\uAE4C\uC6B4 \uC774\uC57C\uAE30\uC608\uC694. \uB098\uB294 \uC5B4\uB5BB\uAC8C \uC0AC\uB78C \uAD6C\uC131 \uC694\uC18C\uB97C \uB9CC\uB4E4\uC9C0 \uBAB0\uB790\uC5B4\uC694. '\uC0AC\uB78C'\uC774\uB780 \uB9D0\uC740 \uADF8 \uAD6C\uC131 \uC694\uC18C\uAC00 \uC778\uAC04\uC758 \uD589\uB3D9\uC744 \uAE30\uB300\uD55C\uB2E4\uB294 \uC758\uBBF8\uC5D0\uC11C, \uADF8 \uD589\uB3D9\uC774 \uC5BC\uB9C8\uB098 \uC798\uBABB\uB41C \uAC83\uC77C\uC9C0\uB77C\uB3C4\uC694.",-1),h=t("p",null,'\uC0C8\uB85C\uC6B4 \uAE30\uB2A5\uC744 \uCF54\uB529\uD560 \uB54C \uBAA8\uB4E0 \uC138\uBD80 \uC0AC\uD56D\uC744 \uAE30\uC5B5\uD558\uB294 \uAC83\uC740 \uC5B4\uB835\uC9C0\uB9CC, \uC774\uC0C1\uD55C \uC778\uAC04 \uD589\uB3D9\uC744 \uC608\uC0C1\uD558\uB294 \uAC83\uC740 \uCF54\uB4DC\uB97C \uC778\uAC04 \uC911\uC2EC\uC73C\uB85C \uB9CC\uB4DC\uB294 \uC5F4\uC1E0\uC5D0\uC694; \uAE30\uAE30 \uD754\uB4E4\uAE30, \uBC84\uD2BC\uC5D0 \uBD84\uB178\uB97C \uB204\uB974\uAE30, \uD3EC\uCF13 \uC18D\uC5D0\uC11C \uD654\uBA74\uC744 \uCF1C\uB193\uAE30, \uADF8\uB9AC\uACE0 \uC9C0\uAE08\uC740 \uC78A\uD600\uC9C4 \uB9CE\uC740 \uB2E4\uB978 \uD589\uB3D9\uB4E4\uB3C4 \uC788\uC8E0. \uBC84\uD2BC\uC744 \uB9CC\uB4DC\uB294 \uAC83\uC740 \uB2E8\uC21C\uD788 "\uBC84\uD2BC\uC744 \uB9CC\uB4DC\uB294 \uAC83"\uC774 \uC544\uB2C8\uC5D0\uC694, \uBD84\uB178\uB85C \uBE68\uB9AC \uB204\uB974\uAE30\uB97C \uD53C\uD558\uAE30 \uC704\uD574 \uB514\uBC14\uC6B4\uC2A4\uB97C \uCD94\uAC00\uD558\uB294 \uAC83\uC774\uACE0, \uBAA9\uD45C\uC9C0 \uC54A\uC740 \uD130\uCE58\uB97C \uD53C\uD558\uAE30 \uC704\uD574 \uD0ED \uAC00\uB2A5\uD55C \uC601\uC5ED\uC744 10\uD53D\uC140 \uB354 \uB298\uB9AC\uB294 \uAC83\uC774\uC5D0\uC694.',-1),m=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),f=n('<p>\uB2E4\uC74C\uC5D0 \uC0AC\uC6A9\uC790 \uC0C1\uD638\uC791\uC6A9\uC744 \uAE30\uB300\uD558\uB294 \uD504\uB860\uD2B8\uC5D4\uB4DC \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uAC1C\uBC1C\uD560 \uB54C\uB294 \uB2E4\uC74C \uD301\uC744 \uACE0\uB824\uD574\uBCF4\uC138\uC694:</p><ul><li><code>onpress</code> \uD578\uB4E4\uB7EC\uC5D0 \uB514\uBC14\uC6B4\uC2A4\uB97C \uCD94\uAC00\uD558\uC5EC \uC0AC\uC6A9\uC790\uAC00 \uB108\uBB34 \uBE68\uB9AC \uB204\uB97C \uACBD\uC6B0\uC5D0\uB3C4 \uD55C \uBC88\uB9CC \uD2B8\uB9AC\uAC70\uB418\uB3C4\uB85D \uD574\uBCF4\uC138\uC694. \uC800\uB294 \uC774 Stack Overflow \uAC8C\uC2DC\uBB3C\uC5D0\uC11C \uAC00\uC7A5 \uB192\uC740 \uD3C9\uC810\uC744 \uBC1B\uC740 \uB2F5\uBCC0\uC774 \uB9E4\uC6B0 \uB3C4\uC6C0\uC774 \uB41C\uB2E4\uACE0 \uC0DD\uAC01\uD588\uC5B4\uC694.</li><li>\uAC80\uC0C9 \uC785\uB825 \uB610\uB294 \uD14D\uC2A4\uD2B8\uAC00 \uBCC0\uACBD\uB420 \uB54C API \uD638\uCD9C\uC744 \uD558\uB294 \uB2E4\uB978 \uC785\uB825\uC5D0 \uB514\uBC14\uC6B4\uC2A4\uB098 \uC2A4\uB85C\uD2C0\uC744 \uCD94\uAC00\uD574\uBCF4\uC138\uC694. \uC774\uB807\uAC8C \uD558\uBA74 \uAC01 \uBB38\uC790\uB97C \uC785\uB825\uD560 \uB54C\uB9C8\uB2E4 \uC694\uCCAD\uC744 \uBCF4\uB0B4\uB294 \uAC83\uC744 \uBC29\uC9C0\uD560 \uC218 \uC788\uC5B4\uC694.</li><li>\uD504\uB808\uC2A4 \uAC00\uB2A5\uD55C \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0ED \uAC00\uB2A5\uD55C \uC601\uC5ED\uC744 \uB298\uB824\uBCF4\uC138\uC694. \uC0AC\uC6A9\uC790\uAC00 \uD0ED\uC744 \uC870\uAE08 \uB193\uCCD0\uB3C4 \uC5EC\uC804\uD788 \uD2B8\uB9AC\uAC70\uB418\uB3C4\uB85D \uD574\uC90D\uB2C8\uB2E4.</li><li>\uBC31\uC5D4\uB4DC\uAC00 \uC571 \uC0C1\uD0DC\uB97C \uC218\uC815\uD560 \uC218 \uC788\uB3C4\uB85D \uD574\uC8FC\uC138\uC694. \uD504\uB860\uD2B8\uC5D4\uB4DC\uB294 \uBC31\uC5D4\uB4DC\uC5D0\uC11C \uBCC0\uACBD\uC744 \uD2B8\uB9AC\uAC70\uD560 \uC218 \uC788\uB294 API\uB97C \uAC00\uC838\uC57C \uD569\uB2C8\uB2E4. \uADF8\uB798\uC11C \uC0AC\uC6A9\uC790\uAC00 \uC5EC\uB7EC \uC7A5\uCE58\uC5D0\uC11C \uB85C\uADF8\uC778\uD588\uC744 \uB54C \uC5C5\uB370\uC774\uD2B8\uAC00 \uBAA8\uB4E0 \uC7A5\uCE58\uB85C \uC804\uB2EC\uB429\uB2C8\uB2E4.</li><li>\uB124\uD2B8\uC6CC\uD06C \uC694\uCCAD\uC744 \uB85C\uCEEC \uC2A4\uD1A0\uB9AC\uC9C0\uC5D0 \uC800\uC7A5\uD558\uC5EC \uC628\uB77C\uC778\uC73C\uB85C \uB3CC\uC544\uC654\uC744 \uB54C \uC694\uCCAD\uC744 \uB2E4\uC2DC \uC2DC\uB3C4\uD560 \uC218 \uC788\uAC8C \uD574\uC8FC\uC138\uC694. &quot;\uD050\uC5D0 \uC694\uCCAD\uC774 \uC788\uC73C\uBA74 \uD638\uCD9C\uC744 \uC2E4\uD589\uD558\uC138\uC694.&quot;</li><li>\uC0C1\uD0DC\uC5D0 \uB099\uAD00\uC801\uC778 \uC5C5\uB370\uC774\uD2B8\uB97C \uD558\uACE0 \uBC31\uC5D4\uB4DC \uC694\uCCAD\uC774 200\uC744 \uBC18\uD658\uD588\uC744 \uB54C \uD574\uB2F9 \uBCC0\uACBD\uC0AC\uD56D\uC744 &#39;\uCEE4\uBC0B&#39;\uD574\uC8FC\uC138\uC694. \uC774 \uC811\uADFC\uBC95\uC740 \uC624\uD504\uB77C\uC778 \uC6B0\uC120\uC774\uB77C\uACE0\uB3C4 \uBD88\uB9AC\uBA70 5\uBC88 \uD301\uACFC \uACB0\uD569\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</li></ul><p>\uB54C\uB85C\uB294 \uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C\uC744 \uBC30\uC6B8 \uB54C, \uC6B0\uB9AC\uAC00 \uAE30\uACC4\uAC00 \uC544\uB2CC \uB2E4\uB978 \uC0AC\uB78C\uB4E4\uC744 \uC704\uD55C \uB3C4\uAD6C\uB97C \uB9CC\uB4E0\uB2E4\uB294 \uAC83\uC744 \uC78A\uAE30 \uC27D\uC2B5\uB2C8\uB2E4. \uC0AC\uC6A9\uC790\uB4E4\uC774 \uC870\uAE09\uD574\uD560 \uAC83\uC744 \uC608\uC0C1\uD558\uACE0, \uBE60\uB978 \uB85C\uB529 \uC2DC\uAC04\uC744 \uAC16\uCD94\uB294 \uAC83\uC740 \uAC00\uC7A5 \uBE60\uB978 \uC571\uC744 \uAC16\uACE0 \uC2F6\uC5B4\uC11C\uAC00 \uC544\uB2C8\uB77C \uC778\uAC04\uB4E4\uC758 \uB2F5\uB2F5\uD568\uC744 \uC904\uC5EC\uC918\uC57C \uD558\uB294 \uC774\uC720\uC785\uB2C8\uB2E4.</p><p>Slack\uC740 \uC0AC\uB78C\uB4E4\uC5D0\uAC8C \uCE5C\uC219\uD55C \uACBD\uD5D8\uC744 \uC81C\uACF5\uD558\uB294 \uB370 \uC544\uC8FC \uC798 \uC9C0\uC6D0\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC2EC\uC9C0\uC5B4 \uBA54\uC2DC\uC9C0 \uBC18\uC751\uC5D0\uC11C \uBAA8\uB4E0 \uD53C\uBD80 \uD1A4\uC774 \uD45C\uC2DC\uB418\uC5B4 \uB2E4\uC591\uC131\uC744 \uC778\uC2DD\uD558\uACE0 \uC874\uC911\uD558\uB294 \uB370 \uD070 \uB3C4\uC6C0\uC774 \uB418\uB294 \uAE30\uB2A5\uC774\uB77C\uACE0 \uC0DD\uAC01\uD574\uC694. \u2018\uC790\uC5F0\uC2A4\uB7FD\uACE0\u2019 \uC720\uAE30\uC801\uC778 \uACBD\uD5D8\uC5D0 \uC9C4\uC2EC\uC73C\uB85C \uAD00\uC2EC\uC744 \uAC00\uC9C0\uB294 \uB2E4\uB978 \uD68C\uC0AC\uB85C\uB294 Apple\uC774 \uC788\uB294\uB370\uC694, \uAD6C\uCCB4\uC801\uC778 \uC608\uC2DC\uB294 \uB5A0\uC624\uB974\uC9C0 \uC54A\uC9C0\uB9CC \uC774 \uD68C\uC0AC\uB294 \uB2E4\uC591\uD55C \uAE30\uAE30 \uAC04 \uCD5C\uC0C1\uC758 \uACBD\uD5D8\uC744 \uAC1C\uBC1C\uD55C\uB2E4\uB294 \uC810\uC73C\uB85C \uC720\uBA85\uD569\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),g=t("p",null,"\uC81C\uAC00 \uBD88\uD3C9\uD558\uB294 \uAC83\uC744 \uC9C0\uAE08\uC740 \uADF8\uB9CC\uB450\uB824\uACE0 \uD574\uC694. \uADF8\uB807\uC9C0\uB9CC \uC774 6\uAC00\uC9C0 \uD301\uC744 \uD1B5\uD574 \uC5EC\uB7EC\uBD84\uC758 \uC791\uC5C5\uC744 \uCC28\uBCC4\uD654\uC2DC\uD0A4\uACE0 Slack\uC774\uB098 Apple \uC81C\uD488\uACFC \uB354 \uBE44\uC2B7\uD558\uAC8C \uB9CC\uB4E4 \uC218 \uC788\uC744 \uAC70\uC5D0\uC694.",-1),b=t("h1",{id:"\u110E\u1161\u11B7\u1100\u1169-\u110C\u1161\u1105\u116D",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#\u110E\u1161\u11B7\u1100\u1169-\u110C\u1161\u1105\u116D","aria-hidden":"true"},"#"),e(" \uCC38\uACE0 \uC790\uB8CC:")],-1),y=t("p",null,"\uC774 \uCC38\uACE0 \uC790\uB8CC\uB4E4\uC740 \uC9C1\uC811\uC801\uC778 \uD559\uC220 \uC790\uB8CC\uB294 \uC544\uB2C8\uC9C0\uB9CC \uD559\uC220 \uC790\uB8CC\uC5D0 \uC5F0\uACB0\uB418\uC5B4 \uC788\uB294 \uC18C\uC2A4\uB4E4\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC5B4\uC694.",-1);function k(v,w){return a(),d("div",null,[r,_,u,h,m,(a(),l(s("script"),null,{default:o(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),f,(a(),l(s("script"),null,{default:o(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),g,b,y])}var N=i(p,[["render",k],["__file","index.html.vue"]]);export{N as default};
