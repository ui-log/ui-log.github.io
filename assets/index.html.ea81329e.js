import{_ as d}from"./app.63e06a35.js";import{l as o,m as n,E as a,G as s,p as e,Y as l,K as i,C as t}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var c="/assets/BuildingMicroFrontendsWithReact_0.79c706e9.png",p="/assets/BuildingMicroFrontendsWithReact_1.b0e9a826.png",r="/assets/BuildingMicroFrontendsWithReact_2.29c7c11e.png";const u={},_=i('<p>\uB9AC\uC561\uD2B8\uB85C \uB9C8\uC774\uD06C\uB85C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uD798\uC744 \uBC1C\uD718\uD574\uBCF4\uC138\uC694: \uB2E8\uACC4\uBCC4 \uC548\uB0B4</p><p>\uC9C0\uB09C \uC139\uC158\uC5D0\uC11C \uB9C8\uC774\uD06C\uB85C \uD504\uB860\uD2B8\uC5D4\uB4DC\uC5D0 \uB300\uD55C \uAC1C\uC694\uB97C \uC81C\uACF5\uD588\uC2B5\uB2C8\uB2E4. \uC774\uC81C \uC5EC\uAE30\uC11C\uB294 React\uB97C \uC0AC\uC6A9\uD558\uC5EC \uB3C5\uB9BD\uC801\uC778 \uB9C8\uC774\uD06C\uB85C \uD504\uB860\uD2B8\uC5D4\uB4DC \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uAD6C\uCD95\uD558\uB294 \uBC29\uBC95\uC744 \uC790\uC138\uD788 \uC0B4\uD3B4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.</p><p>\uBAA8\uB178\uB9AC\uC2DD \uC804\uC790 \uC0C1\uAC70\uB798 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uACE0\uB824\uD574\uBD05\uC2DC\uB2E4. \uC0AC\uC6A9\uC790 \uC0C1\uD638\uC791\uC6A9\uC744 \uC704\uD574 \uB2E4\uC74C \uD398\uC774\uC9C0\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4:</p><ul><li>\uC81C\uD488 \uAC80\uC0C9</li><li>\uC81C\uD488 \uC138\uBD80 \uC815\uBCF4</li><li>\uAD6C\uB9E4 \uD750\uB984</li><li>\uC8FC\uBB38 \uBAA8\uB2C8\uD130\uB9C1</li><li>\uBC30\uC1A1 \uCD94\uC801</li></ul><p><img src="'+c+'" alt="BuildingMicroFrontendsWithReact_0.png"></p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',6),g=t("p",null,"\uC774\uC804 \uC139\uC158\uC5D0\uC11C\uB294 Micro Frontend \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uD1B5\uD569\uC5D0 \uB300\uD574 \uAC04\uB7B5\uD788 \uB2E4\uB918\uC2B5\uB2C8\uB2E4. \uC774\uC81C \uB354 \uC790\uC138\uD788 \uD1B5\uD569 \uBC29\uBC95\uC5D0 \uB300\uD574 \uC54C\uC544\uBCFC \uAC83\uC785\uB2C8\uB2E4. \uD1B5\uD569\uC744 \uC704\uD574 \uC8FC\uB85C \uC138 \uAC00\uC9C0 \uBC29\uBC95\uC744 \uB530\uB97C \uC218 \uC788\uC2B5\uB2C8\uB2E4: \uC11C\uBC84 \uCE21 \uD1B5\uD569, \uD074\uB77C\uC774\uC5B8\uD2B8 \uCE21 \uD1B5\uD569 \uBC0F \uBE4C\uB4DC \uC2DC\uAC04 \uD1B5\uD569.",-1),m=t("p",null,"\uC11C\uBC84 \uCE21 \uD1B5\uD569\uC740 \uD504\uB7F0\uD2B8\uC5D4\uB4DC \uBC0F \uC11C\uBC84 \uBC31\uC5D4\uB4DC \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC11C\uBC84 \uCE21\uC5D0\uC11C \uD1B5\uD569\uD558\uACE0 \uD074\uB77C\uC774\uC5B8\uD2B8\uC5D0 \uC804\uC1A1\uD558\uB294 \uAC83\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. \uC774 \uBC29\uC2DD\uC740 \uC11C\uBC84\uC5D0 \uC0C1\uB2F9\uD55C \uBD80\uB2F4\uC744 \uC8FC\uB294 \uACBD\uC6B0\uAC00 \uC788\uC2B5\uB2C8\uB2E4.",-1),h=t("p",null,"\uD55C\uD3B8 \uBE4C\uB4DC \uC2DC\uAC04 \uD1B5\uD569\uC740 \uBE4C\uB4DC \uD504\uB85C\uC138\uC2A4 \uC911\uC5D0 \uD1B5\uD569\uC774 \uBC1C\uC0DD\uD558\uB3C4\uB85D \uD558\uB294 \uAC83\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4, \uC8FC \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uBE4C\uB4DC\uD560 \uB54C \uBAA8\uB4E0 Micro Frontend \uC571\uC744 \uD3EC\uD568\uC2DC\uD0A4\uB294 \uAC83\uC785\uB2C8\uB2E4. \uC774\uB97C \uC704\uD574 \uAC01 Micro Frontend \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 npm \uD328\uD0A4\uC9C0\uB85C \uAC8C\uC2DC\uD558\uACE0 \uC8FC \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB807\uAC8C \uD558\uBA74 \uBAA8\uB4E0 Micro Frontend \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uC8FC \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uACFC \uD568\uAED8 \uBE4C\uB4DC\uB429\uB2C8\uB2E4.",-1),b=t("p",null,"\uC6B0\uB9AC\uC758 Micro Frontend\uC5D0\uC11C\uB294 Runtime \uD1B5\uD569\uC744 \uC0AC\uC6A9\uD560 \uAC83\uC785\uB2C8\uB2E4. \uC774\uB294 \uD544\uC694\uD55C Micro Frontend \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uD074\uB77C\uC774\uC5B8\uD2B8\uB85C \uB2E4\uC6B4\uB85C\uB4DC\uB418\uACE0 \uC2E4\uD589 \uC911\uC5D0 \uD1B5\uD569\uB418\uB294 \uAC83\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574 \uCD08\uAE30 \uB85C\uB4DC \uC2DC\uAC04\uC744 \uC904\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4. Runtime \uD1B5\uD569\uC744 \uC704\uD574 Webpack 5\uC640 Module Federation\uC744 \uC0AC\uC6A9\uD560 \uAC83\uC785\uB2C8\uB2E4.",-1),y=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),f=i('<p>\uC774\uC81C <code>create-mf-app</code> \uB3C4\uAD6C\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC138 \uAC1C\uC758 Micro Frontend \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uB9CC\uB4E4\uC5B4 \uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uC774 \uB3C4\uAD6C\uB294 Webpack\uACFC React\uB97C \uD3EC\uD568\uD55C \uCD5C\uC18C \uAD6C\uC131\uC73C\uB85C Create React App\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.</p><p>Micro Frontend \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uB9CC\uB4E4\uB824\uBA74 \uB2E4\uC74C \uBA85\uB839\uC744 \uC2E4\uD589\uD558\uC138\uC694:</p><p><img src="'+p+'" alt="\uC774\uBBF8\uC9C0"></p><p>\uB2E4\uC74C \uC815\uBCF4\uB97C \uC81C\uACF5\uD558\uC2ED\uC2DC\uC624:</p><ul><li>\uC571 \uC774\uB984 \uC120\uD0DD: &quot;product&quot; // \uC571 \uC774\uB984</li><li>\uD504\uB85C\uC81D\uD2B8 \uC720\uD615: \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158</li><li>\uD3EC\uD2B8 \uBC88\uD638: 9001</li><li>\uD504\uB808\uC784\uC6CC\uD06C: React</li><li>\uC5B8\uC5B4: JavaScript</li><li>CSS: Tailwind</li></ul><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',6),v=i(`<p>\uC0C1\uAE30 \uC138\uBD80 \uB0B4\uC5ED\uC744 \uC81C\uACF5\uD55C \uD6C4 &#39;\uC81C\uD488&#39; \uD504\uB85C\uC81D\uD2B8\uAC00 \uC2E4\uD589 \uC900\uBE44\uB420 \uAC83\uC785\uB2C8\uB2E4.</p><p>\uC81C\uD488 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C\uB294 \uB450 \uAC1C\uC758 \uD398\uC774\uC9C0\uAC00 \uC788\uC744 \uAC83\uC785\uB2C8\uB2E4: \uC81C\uD488\uC744 \uAC80\uC0C9\uD558\uB294 &quot;/products&quot; \uD398\uC774\uC9C0\uC640 \uC81C\uD488 \uC138\uBD80 \uC815\uBCF4\uB97C \uD45C\uC2DC\uD558\uB294 &quot;/product/prodId&quot; \uD398\uC774\uC9C0\uC785\uB2C8\uB2E4. \uBA3C\uC800, \uB2E4\uC74C \uBA85\uB839\uC744 \uC0AC\uC6A9\uD558\uC5EC \uD544\uC694\uD55C \uC885\uC18D \uD56D\uBAA9\uC778 axios\uC640 react-router-dom\uC744 \uC124\uCE58\uD574 \uBCF4\uACA0\uC2B5\uB2C8\uB2E4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm i axios react<span class="token operator">-</span>router<span class="token operator">-</span>dom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uB2E4\uC74C\uC73C\uB85C, \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uB77C\uC6B0\uD305\uC744 \uCD94\uAC00\uD574\uC57C \uD569\uB2C8\uB2E4. \uC5EC\uAE30\uC11C basename \uC18D\uC131\uC740 \uB8E8\uD2B8 \uACBD\uB85C\uB85C \uAC04\uC8FC\uB418\uC5B4 \uBAA8\uB4E0 \uB9C1\uD06C\uAC00 &quot;/products&quot;\uB85C \uC2DC\uC791\uD568\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. \uC774\uB97C \uD1B5\uD574 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 &quot;/products&quot;\uC5D0\uC11C \uB80C\uB354\uB9C1\uB418\uACE0 &quot;/&quot;\uAC00 \uC544\uB2CC \uACF3\uC5D0 \uB80C\uB354\uB9C1\uB428\uC774 \uBCF4\uC7A5\uB429\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),w=t("p",null,"\uC81C\uD488 \uB9C8\uC774\uD06C\uB85C \uC571\uC758 \uC804\uCCB4 \uCF54\uB4DC\uB97C \uD655\uC778\uD558\uB824\uBA74 \uC5EC\uAE30\uB97C \uD655\uC778\uD574\uBCF4\uC138\uC694.",-1),k=t("p",null,'\uC6B0\uB9AC \uC81C\uD488 \uB9C8\uC774\uD06C\uB85C \uC571\uC758 \uB9C8\uC9C0\uB9C9 \uB2E8\uACC4\uB294 \uB2E4\uB978 \uC571 \uBC0F \uC8FC \uC751\uC6A9 \uD504\uB85C\uADF8\uB7A8\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uC77C\uBD80 \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uB178\uCD9C\uD558\uAC70\uB098 \uACF5\uC720\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4. \uC774\uB97C \uC704\uD574 src/webpack.config.js \uD30C\uC77C\uC744 \uC218\uC815\uD574\uC57C \uD569\uB2C8\uB2E4. \uB2E4\uC74C \uC904\uC744 \uCD94\uAC00\uD558\uC5EC "product" \uBAA8\uB4C8\uC744 \uB178\uCD9C\uD569\uB2C8\uB2E4:',-1),F=t("p",null,[t("img",{src:r,alt:"product module"})],-1),M=t("p",null,"\uC774 \uBCC0\uACBD\uC73C\uB85C \uC81C\uD488 \uB9C8\uC774\uD06C\uB85C \uC571\uC744 \uC131\uACF5\uC801\uC73C\uB85C \uC644\uB8CC\uD588\uC2B5\uB2C8\uB2E4. \uB2E4\uB978 \uB9C8\uC774\uD06C\uB85C \uC571\uC758 \uCF54\uB4DC\uB97C \uC5EC\uAE30\uC5D0\uC11C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),q=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),R=t("p",null,"\uB2E4\uC74C \uAC8C\uC2DC\uBB3C\uB85C \uB118\uC5B4\uAC00\uAE30 \uC804\uC5D0 \uCF54\uB4DC\uB97C \uC644\uC804\uD788 \uBAA8\uC544\uB193\uC73C\uC168\uB294\uC9C0 \uD655\uC778\uD574\uC8FC\uC138\uC694. \uBE14\uB85C\uADF8 \uAE00\uC774 \uC9C0\uB098\uCE58\uAC8C \uAE38\uC5B4\uC838\uC11C \uC9C0\uB098\uCCE4\uB358 \uAC83\uC5D0 \uB300\uD574 \uC0AC\uACFC\uB4DC\uB9BD\uB2C8\uB2E4. \uADF8\uB798\uB3C4 \uC774\uB7F0 \uC77C\uC774 \uBC1C\uC0DD\uD558\uC9C0 \uC54A\uB3C4\uB85D \uC7A0\uB4E4\uC9C0 \uC54A\uAC8C \uD558\uB824\uACE0 \uD588\uC5B4\uC694! \u{1F62B}\u{1F62A}",-1),x=t("p",null,"\uB2E4\uC74C \uAC8C\uC2DC\uBB3C\uC5D0\uC11C\uB294 \uBAA8\uB4E0 \uB9C8\uC774\uD06C\uB85C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uB4E4\uC744 \uD1B5\uD569\uD560 \uAC70\uC5D0\uC694. \uC9C0\uAE08\uC740 React\uC640 \uC720\uC0AC\uD55C \uB2E4\uB978 \uB9C8\uC774\uD06C\uB85C \uC571\uB4E4\uC744 \uC0B4\uD3B4\uBCF4\uB294 \uAC78 \uC801\uADF9 \uAD8C\uC720\uD569\uB2C8\uB2E4. \uC644\uC804\uD788 \uC774\uD574\uD558\uC9C0 \uBABB\uD558\uC168\uB354\uB77C\uB3C4 \uAC71\uC815\uD558\uC9C0 \uB9C8\uC138\uC694. \uB2E4\uC74C \uAC8C\uC2DC\uBB3C\uC5D0\uC11C \uB354 \uBD84\uBA85\uD574\uC9C8 \uAC70\uB77C\uACE0 \uD655\uC2E0\uD569\uB2C8\uB2E4.",-1),B=t("p",null,"\uC18C\uD1B5\uC744 \uC774\uC5B4\uAC00\uC694! \uC758\uACAC\uC774\uB098 \uC9C8\uBB38\uC744 \uACF5\uC720\uD574\uC8FC\uC138\uC694.",-1),W=t("p",null,"\uB2E4\uC74C \uAC8C\uC2DC\uBB3C\uC5D0\uC11C\uB294 \uBAA8\uB4E0 \uB9C8\uC774\uD06C\uB85C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uD558\uB098\uB85C \uD1B5\uD569\uD560 \uAC70\uC608\uC694. \uB2E4\uB978 React\uC640 \uC720\uC0AC\uD55C \uB9C8\uC774\uD06C\uB85C \uC571\uC744 \uC774\uD574\uD558\uC9C0 \uBABB\uD574\uB3C4 \uAC71\uC815\uD558\uC9C0 \uB9C8\uC138\uC694. \uB2E4\uC74C \uAC8C\uC2DC\uBB3C\uC5D0\uC11C \uAF2D \uC774\uD574\uD558\uC2E4 \uAC70\uC5D0\uC694.",-1);function C(j,S){return o(),n("div",null,[_,(o(),a(l("script"),null,{default:s(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),g,m,h,b,y,(o(),a(l("script"),null,{default:s(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),f,(o(),a(l("script"),null,{default:s(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),v,(o(),a(l("script"),null,{default:s(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),w,k,F,M,q,(o(),a(l("script"),null,{default:s(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),R,x,B,W])}var G=d(u,[["render",C],["__file","index.html.vue"]]);export{G as default};
