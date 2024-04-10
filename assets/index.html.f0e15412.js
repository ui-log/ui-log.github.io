import{_ as s}from"./app.63e06a35.js";import{l as e,m as c,E as i,G as r,p as t,Y as p,C as a,K as d}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var o="/assets/WhyStickingwithTypeScriptsprivateKeywordTrumpsUsingJavaScriptsPrefixforPrivacy_0.6f72b444.png";const l={},n=a("p",null,[a("img",{src:o,alt:"Why Sticking with TypeScript's private Keyword Trumps Using JavaScript's Prefix for Privacy"})],-1),h=a("p",null,"\uD504\uB85C\uADF8\uB798\uBC0D\uC758 \uACC4\uC18D \uBC1C\uC804\uD558\uB294 \uC138\uACC4\uC5D0\uC11C JavaScript\uC758 private \uD074\uB798\uC2A4 \uBCC0\uC218\uC5D0 \uB300\uD55C # \uC811\uB450\uC0AC\uC758 \uB3C4\uC785\uC740 \uC5B8\uC5B4 \uC218\uC900\uC5D0\uC11C \uC9C4\uC815\uD55C \uCEA1\uC290\uD654\uB97C \uC81C\uACF5\uD558\uB294 \uC911\uC694\uD55C \uBC1C\uC804\uC774\uC5C8\uC2B5\uB2C8\uB2E4. ECMAScript 2022\uC5D0\uC11C JavaScript\uC5D0\uB3C4 \uB3C4\uC785\uB41C \uC774 \uAE30\uB2A5\uC740 TypeScript \uAC1C\uBC1C\uC790\uB4E4 \uC0AC\uC774\uC5D0\uC11C \uAC1C\uC778 \uBCC0\uC218\uB97C \uC815\uC758\uD558\uB294 \uCD5C\uC120\uC758 \uBC29\uBC95\uC5D0 \uB300\uD55C \uB17C\uC7C1\uC744 \uCD09\uBC1C\uD588\uC2B5\uB2C8\uB2E4. JavaScript\uC5D0 \uC815\uC801 \uC720\uD615 \uBC0F \uD5A5\uC0C1\uB41C \uAC1D\uCCB4 \uC9C0\uD5A5 \uAE30\uB2A5\uC744 \uC81C\uACF5\uD558\uB294 \uB370 \uC720\uC6A9\uD55C TypeScript\uC740 \uD074\uB798\uC2A4 \uCEA1\uC290\uD654\uB97C \uC704\uD55C \uAD6C\uBB38\uC758 \uC77C\uBD80\uB85C \uC624\uB7AB\uB3D9\uC548 private \uD0A4\uC6CC\uB4DC\uB97C \uC0AC\uC6A9\uD574\uC654\uC2B5\uB2C8\uB2E4. \uAC1C\uC778 \uC815\uBCF4 \uBCF4\uD638\uB97C \uBCF4\uC7A5\uD558\uAE30 \uC704\uD55C \uC0C8\uB85C\uC6B4 # \uC811\uB450\uC0AC \uAD6C\uBB38\uC758 \uB9E4\uB825\uC5D0\uB3C4 \uBD88\uAD6C\uD558\uACE0, \uC800\uB294 TypeScript private \uB370\uCF54\uB808\uC774\uD130\uC758 \uACC4\uC18D\uC801\uC778 \uC0AC\uC6A9\uC744 \uC9C0\uC9C0\uD569\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0 \uC774\uC720\uAC00 \uC788\uC2B5\uB2C8\uB2E4:",-1),u=a("h1",{id:"_1-\u110F\u1169\u1103\u1173\u1107\u1166\u110B\u1175\u1109\u1173\u110B\u1174-\u110B\u1175\u11AF\u1100\u116A\u11AB\u1109\u1165\u11BC",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_1-\u110F\u1169\u1103\u1173\u1107\u1166\u110B\u1175\u1109\u1173\u110B\u1174-\u110B\u1175\u11AF\u1100\u116A\u11AB\u1109\u1165\u11BC","aria-hidden":"true"},"#"),t(" 1. \uCF54\uB4DC\uBCA0\uC774\uC2A4\uC758 \uC77C\uAD00\uC131")],-1),y=a("p",null,"TypeScript\uC758 private \uD0A4\uC6CC\uB4DC\uB294 \uD074\uB798\uC2A4 \uB0B4\uC758 \uAC1C\uC778 \uC18D\uC131 \uBC0F \uBA54\uC11C\uB4DC\uC5D0 \uB300\uD55C \uD45C\uC900\uC785\uB2C8\uB2E4. \uC774\uB294 \uAC1D\uCCB4 \uC9C0\uD5A5 \uD504\uB85C\uADF8\uB798\uBC0D \uAC1C\uB150\uC5D0 \uC775\uC219\uD55C \uC0AC\uB78C\uC5D0\uAC8C \uC27D\uAC8C \uC774\uD574\uB420 \uC218 \uC788\uB294 \uC561\uC138\uC2A4 \uC81C\uC5B4\uC758 \uBA85\uD655\uD558\uACE0 \uBA85\uC2DC\uC801\uC778 \uD45C\uC2DC\uC785\uB2C8\uB2E4. \uB3D9\uC77C\uD55C \uCF54\uB4DC\uBCA0\uC774\uC2A4 \uB0B4\uC5D0\uC11C \uAC1C\uC778 \uBC0F #\uC744 \uC0AC\uC6A9\uD558\uC5EC \uAC1C\uC778 \uC815\uBCF4 \uBCF4\uD638\uB97C \uC804\uD658\uD558\uB294 \uAC83\uC740 \uC77C\uAD00\uC131\uC758 \uBD80\uC7AC\uB85C \uC778\uD574 \uCF54\uB4DC\uB97C \uC77D\uACE0 \uC720\uC9C0 \uAD00\uB9AC\uD558\uAE30 \uC5B4\uB835\uAC8C \uB9CC\uB4E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. private \uD0A4\uC6CC\uB4DC\uB97C \uC801\uC6A9\uD558\uBA74 \uC77C\uAD00\uB41C \uCF54\uB4DC \uC2A4\uD0C0\uC77C\uC744 \uC720\uC9C0\uD558\uACE0 \uC0C8\uB85C\uC6B4 \uAC1C\uBC1C\uC790\uAC00 \uCF54\uB4DC\uBCA0\uC774\uC2A4\uB97C \uC774\uD574\uD558\uAE30 \uC27D\uAC8C \uB9CC\uB4ED\uB2C8\uB2E4.",-1),_=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),S=d('<h1 id="_2-\u1103\u1169\u1100\u116E-\u1106\u1175\u11BE-ide-\u110C\u1175\u110B\u116F\u11AB" tabindex="-1"><a class="header-anchor" href="#_2-\u1103\u1169\u1100\u116E-\u1106\u1175\u11BE-ide-\u110C\u1175\u110B\u116F\u11AB" aria-hidden="true">#</a> 2. \uB3C4\uAD6C \uBC0F IDE \uC9C0\uC6D0</h1><p>TypeScript \uB3C4\uAD6C\uC778 \uB9B0\uD130\uC640 \uD1B5\uD569 \uAC1C\uBC1C \uD658\uACBD(IDE)\uC740 private, protected, public\uACFC \uAC19\uC740 TypeScript\uC758 \uC811\uADFC \uC81C\uD55C\uC790\uC5D0 \uCD5C\uC801\uD654\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uB3C4\uAD6C\uB294 \uC774\uB7EC\uD55C \uC811\uADFC \uC218\uC900\uC744 \uAE30\uBC18\uC73C\uB85C \uAC00\uCE58 \uC788\uB294 \uD53C\uB4DC\uBC31\uACFC \uCF54\uB4DC \uBD84\uC11D\uC744 \uC81C\uACF5\uD558\uC5EC \uAC1C\uBC1C \uD504\uB85C\uC138\uC2A4 \uCD08\uAE30\uC5D0 \uC7A0\uC7AC\uC801\uC778 \uBB38\uC81C\uB97C \uBBF8\uB9AC \uD30C\uC545\uD558\uB294 \uB370 \uB3C4\uC6C0\uC744 \uC90D\uB2C8\uB2E4. # \uC811\uB450\uC0AC\uC5D0 \uB300\uD55C \uB3C4\uAD6C \uC9C0\uC6D0\uC774 \uAC1C\uC120\uB418\uACE0 \uC788\uC9C0\uB9CC, TypeScript\uC758 \uC811\uADFC \uC81C\uD55C\uC790\uC640 \uAE30\uC874 \uB3C4\uAD6C\uC758 \uD1B5\uD569\uC131\uACFC \uC131\uC219\uB3C4\uB294 \uB354 \uC6D0\uD65C\uD55C \uAC1C\uBC1C \uACBD\uD5D8\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.</p><h1 id="_3-typescript\u110B\u1174-\u1100\u116E\u110C\u1169\u110C\u1165\u11A8-\u1110\u1161\u110B\u1175\u11B8-\u1109\u1175\u1109\u1173\u1110\u1166\u11B7" tabindex="-1"><a class="header-anchor" href="#_3-typescript\u110B\u1174-\u1100\u116E\u110C\u1169\u110C\u1165\u11A8-\u1110\u1161\u110B\u1175\u11B8-\u1109\u1175\u1109\u1173\u1110\u1166\u11B7" aria-hidden="true">#</a> 3. TypeScript\uC758 \uAD6C\uC870\uC801 \uD0C0\uC785 \uC2DC\uC2A4\uD15C</h1><p>TypeScript\uC758 \uD575\uC2EC \uAE30\uB2A5 \uC911 \uD558\uB098\uB294 \uAC12\uC758 \uBAA8\uC591\uC5D0 \uCD08\uC810\uC744 \uB9DE\uCD98 \uAD6C\uC870\uC801 \uD0C0\uC785 \uC2DC\uC2A4\uD15C\uC785\uB2C8\uB2E4. \uC774 \uC2DC\uC2A4\uD15C\uC740 \uBA85\uCE6D\uC801 \uD0C0\uC774\uD551\uACFC \uBE44\uAD50\uD558\uC5EC \uB354 \uC720\uC5F0\uD558\uACE0 \uB3D9\uC801\uC778 \uCF54\uB529 \uD328\uD134\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4. private \uD0A4\uC6CC\uB4DC\uC758 \uC0AC\uC6A9\uC740 \uC774 \uC2DC\uC2A4\uD15C\uC5D0 \uC601\uD5A5\uC744 \uC8FC\uC9C0 \uC54A\uC9C0\uB9CC, # \uC811\uB450\uC0AC\uB294 private \uD544\uB4DC\uAC00 \uC788\uB294 \uD074\uB798\uC2A4\uC758 \uC720\uD615 \uD655\uC778\uC5D0 \uBA85\uCE6D\uC801 \uC694\uC18C\uB97C \uB3C4\uC785\uD569\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uC57D\uAC04\uC758 \uBA85\uCE6D\uC801 \uD0C0\uC774\uD551\uC73C\uB85C \uC778\uD574 TypeScript \uAC1C\uBC1C\uC790\uAC00 \uAC10\uC0AC\uD588\uB358 \uC720\uC5F0\uC131 \uC911 \uC77C\uBD80\uAC00 \uC81C\uD55C\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),v=d('<h1 id="_4-\u1109\u1161\u11BC\u1112\u1169-\u110B\u116E\u11AB\u110B\u116D\u11BC\u1109\u1165\u11BC-\u1106\u1175\u11BE-\u1105\u1175\u1111\u1162\u11A8\u1110\u1165\u1105\u1175\u11BC" tabindex="-1"><a class="header-anchor" href="#_4-\u1109\u1161\u11BC\u1112\u1169-\u110B\u116E\u11AB\u110B\u116D\u11BC\u1109\u1165\u11BC-\u1106\u1175\u11BE-\u1105\u1175\u1111\u1162\u11A8\u1110\u1165\u1105\u1175\u11BC" aria-hidden="true">#</a> 4. \uC0C1\uD638 \uC6B4\uC6A9\uC131 \uBC0F \uB9AC\uD329\uD130\uB9C1</h1><p>\uB300\uADDC\uBAA8 \uD504\uB85C\uC81D\uD2B8\uB098 \uB2E4\uB978 JavaScript \uB610\uB294 TypeScript \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uC0AC\uC6A9\uB420 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uC791\uC5C5\uD560 \uB54C \uCF54\uB4DC\uC758 \uC0C1\uD638 \uC6B4\uC6A9\uC131\uC740 \uB9E4\uC6B0 \uC911\uC694\uD569\uB2C8\uB2E4. TypeScript\uC758 private \uD0A4\uC6CC\uB4DC\uB294 \uC0DD\uC131\uB41C JavaScript \uCF54\uB4DC\uC758 \uAD6C\uC870\uB97C \uBCC0\uACBD\uD558\uC9C0 \uC54A\uC73C\uBBC0\uB85C \uB2E4\uB978 \uD504\uB85C\uC81D\uD2B8 \uAC04\uC5D0 \uC791\uC5C5\uD558\uAE30\uAC00 \uB354 \uC608\uCE21 \uAC00\uB2A5\uD558\uACE0 \uC26C\uC6CC\uC9D1\uB2C8\uB2E4. \uB610\uD55C TypeScript\uC758 \uC811\uADFC \uC81C\uD55C\uC790\uB97C \uC0AC\uC6A9\uD558\uB294 \uCF54\uB4DC\uB97C \uB9AC\uD329\uD130\uB9C1\uD558\uB294 \uAC83\uC740 TypeScript\uC758 \uB3C4\uAD6C \uC0DD\uD0DC\uACC4\uC758 \uB3C4\uC6C0\uC73C\uB85C \uAC04\uB2E8\uD574\uC9C0\uBA70 \uD504\uB85C\uC81D\uD2B8 \uC804\uCCB4\uC5D0\uC11C \uC561\uC138\uC2A4 \uC218\uC900\uC744 \uC790\uB3D9\uC73C\uB85C \uC5C5\uB370\uC774\uD2B8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h1 id="_5-\u1106\u1175\u1105\u1162-\u1112\u1169\u1112\u116A\u11AB\u1109\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#_5-\u1106\u1175\u1105\u1162-\u1112\u1169\u1112\u116A\u11AB\u1109\u1165\u11BC" aria-hidden="true">#</a> 5. \uBBF8\uB798 \uD638\uD658\uC131</h1><p>TypeScript \uD300\uC740 \uC0C8\uB85C\uC6B4 JavaScript \uAE30\uB2A5\uC744 \uC801\uADF9\uC801\uC73C\uB85C \uCC44\uD0DD\uD558\uB418 TypeScript\uAC00 \uBBF8\uB798 JavaScript \uBC84\uC804\uACFC \uD638\uD658\uB418\uB3C4\uB85D \uBCF4\uC7A5\uD558\uB294 \uAC83\uC73C\uB85C \uC54C\uB824\uC838 \uC788\uC2B5\uB2C8\uB2E4. private \uD0A4\uC6CC\uB4DC\uB97C \uC0AC\uC6A9\uD568\uC73C\uB85C\uC368 \uAC1C\uBC1C\uC790\uB4E4\uC740 \uCF54\uB4DC\uAC00 TypeScript \uBC0F JavaScript\uC758 \uBBF8\uB798 \uBC84\uC804\uACFC \uD638\uD658\uB420 \uAC83\uC774\uB77C\uB294 \uAC83\uC744 \uBBFF\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. TypeScript \uD300\uC740 JavaScript\uC758 \uBC1C\uC804\uC5D0 \uB9DE\uCD98 \uC0C8\uB85C\uC6B4 \uAE30\uB2A5\uC744 \uC9C0\uC6D0\uD558\uAC70\uB098 \uC774\uB3D9\uD560 \uC218 \uC788\uB294 \uACBD\uB85C\uB97C \uC81C\uACF5\uD560 \uAC00\uB2A5\uC131\uC774 \uC788\uC2B5\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),f=d('<h1 id="\u1100\u1167\u11AF\u1105\u1169\u11AB" tabindex="-1"><a class="header-anchor" href="#\u1100\u1167\u11AF\u1105\u1169\u11AB" aria-hidden="true">#</a> \uACB0\uB860</h1><p>\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uC5D0\uC11C \uAC1C\uC778 \uBCC0\uC218\uC5D0 \uB300\uD55C # \uC811\uB450\uC0AC\uB294 \uC5B8\uC5B4\uC758 \uAE30\uB2A5\uC5D0\uC11C \uC911\uC694\uD55C \uBC1C\uC804\uC744 \uB098\uD0C0\uB0B4\uC9C0\uB9CC, TypeScript\uC758 private \uD0A4\uC6CC\uB4DC\uB97C \uC0AC\uC6A9\uD558\uB294 \uC774\uC810\uB4E4 - \uC77C\uAD00\uC131, \uB3C4\uAD6C \uC9C0\uC6D0, TypeScript\uC758 \uC720\uD615 \uC2DC\uC2A4\uD15C\uACFC\uC758 \uD638\uD658\uC131, \uC0C1\uD638 \uC6B4\uC6A9\uC131 \uBC0F \uC55E\uC73C\uB85C\uC758 \uD638\uD658\uC131 - \uC774\uC5B4\uD3EC\uC5EC \uACC4\uC18D\uD574\uC11C \uC0AC\uC6A9\uD560 \uAC00\uCE58\uAC00 \uC788\uB294 \uC774\uC720\uB97C \uC81C\uC2DC\uD569\uB2C8\uB2E4. TypeScript\uAC00 JavaScript\uC640 \uD568\uAED8 \uACC4\uC18D \uBC1C\uC804\uD568\uC5D0 \uB530\uB77C \uD504\uB85C\uC81D\uD2B8 \uBC0F \uD300\uC758 \uBAA9\uD45C\uC640 \uAC00\uC7A5 \uC798 \uB9DE\uB294 \uAE30\uB2A5\uC744 \uD65C\uC6A9\uD558\uC5EC \uC720\uC9C0\uBCF4\uC218 \uAC00\uB2A5\uD558\uACE0 \uC774\uD574\uD558\uAE30 \uC27D\uACE0 \uACAC\uACE0\uD55C \uCF54\uB4DC\uB97C \uD655\uBCF4\uD558\uB294 \uAC83\uC774 \uC911\uC694\uD569\uB2C8\uB2E4.</p><h1 id="stackademic-\u{1F393}" tabindex="-1"><a class="header-anchor" href="#stackademic-\u{1F393}" aria-hidden="true">#</a> Stackademic \u{1F393}</h1><p>\uB05D\uAE4C\uC9C0 \uC77D\uC5B4\uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4. \uAC00\uAE30 \uC804\uC5D0:</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),b=a("ul",null,[a("li",null,"\uC791\uAC00\uC5D0 \uB300\uD55C \uBC15\uC218\uC640 \uD314\uB85C\uC6B0 \uBD80\uD0C1\uB4DC\uB824\uC694! \u{1F44F}"),a("li",null,"\uD314\uB85C\uC6B0\uD558\uAE30 X | LinkedIn | YouTube | Discord"),a("li",null,"\uB2E4\uB978 \uD50C\uB7AB\uD3FC \uBC29\uBB38\uD574\uC8FC\uC138\uC694: In Plain English | CoFeed | Venture | Cubed"),a("li",null,"Stackademic.com\uC5D0\uC11C \uB354 \uB9CE\uC740 \uCF58\uD150\uCE20\uB97C \uB9CC\uB098\uBCF4\uC138\uC694")],-1);function g(m,T){return e(),c("div",null,[n,h,u,y,_,(e(),i(p("script"),null,{default:r(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),S,(e(),i(p("script"),null,{default:r(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),v,(e(),i(p("script"),null,{default:r(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),f,(e(),i(p("script"),null,{default:r(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b])}var P=s(l,[["render",g],["__file","index.html.vue"]]);export{P as default};
