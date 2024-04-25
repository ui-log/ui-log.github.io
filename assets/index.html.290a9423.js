import{_ as n}from"./app.3052dcfb.js";import{l as s,m as i,E as o,G as e,p as a,Y as l,C as t}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var d="/assets/HowEventsWorkinReact_0.8ad9a1e2.png",c="/assets/HowEventsWorkinReact_3.b5ce6145.png",_="/assets/HowEventsWorkinReact_4.f4d038dc.png",p="/assets/HowEventsWorkinReact_5.ab4d636b.png",r="/assets/HowEventsWorkinReact_6.39f60ca6.png",u="/assets/HowEventsWorkinReact_8.19ebcb63.png",h="/assets/HowEventsWorkinReact_9.63f88487.png",g="/assets/HowEventsWorkinReact_10.abae61cc.png",m="/assets/HowEventsWorkinReact_11.0958bc2b.png";const b={},f=t("img",{src:d},null,-1),y=t("p",null,"\uADF8\uB798\uC11C \uC774 \uAC15\uC758\uC5D0\uC11C\uB294 React\uAC00 \uC774\uBCA4\uD2B8\uB97C \uCC98\uB9AC\uD558\uB294 \uBC29\uBC95\uACFC \uADF8 \uBC30\uD6C4\uC5D0\uC11C \uC5B4\uB5BB\uAC8C \uC791\uB3D9\uD558\uB294\uC9C0 \uBC30\uC6B8 \uAC83\uC785\uB2C8\uB2E4. \uADF8\uB7F0\uB370 DOM\uC5D0\uC11C \uC774\uBCA4\uD2B8 \uC804\uD30C\uC640 \uC774\uBCA4\uD2B8 \uC704\uC784\uC774 \uC5B4\uB5BB\uAC8C \uC791\uB3D9\uD558\uB294\uC9C0 \uAC04\uB2E8\uD788 \uBCF5\uC2B5\uD55C \uB2E4\uC74C\uC5D0 \uC2DC\uC791\uD558\uACA0\uC2B5\uB2C8\uB2E4. \uC65C\uB0D0\uD558\uBA74 React\uAC00 \uC5B4\uB5BB\uAC8C \uC791\uB3D9\uD558\uB294\uC9C0 \uC774\uD574\uD558\uB294 \uB370 \uC911\uC694\uD558\uACE0, \uAC8C\uB2E4\uAC00 \uB9CE\uC740 \uC0AC\uB78C\uB4E4\uC774 \uC2E4\uC81C\uB85C \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uC774\uBCA4\uD2B8\uAC00 \uC5B4\uB5BB\uAC8C \uC791\uB3D9\uD558\uB294\uC9C0\uB97C \uC798 \uC774\uD574\uD558\uC9C0 \uBABB\uD55C\uB2E4\uACE0 \uBBFF\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4. \uADF8\uB798\uC11C \uC774 DOM \uC694\uC18C \uD2B8\uB9AC\uB97C \uACE0\uB824\uD574\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uC774\uAC83\uC740 \uC815\uB9D0 DOM \uD2B8\uB9AC\uC774\uBA70, \uD30C\uC774\uBC84 \uD2B8\uB9AC\uB098 React \uC694\uC18C \uD2B8\uB9AC\uAC00 \uC544\uB2D9\uB2C8\uB2E4.",-1),v=t("p",null,[t("img",{src:"https://miro.medium.com/v2/resize:fit:1400/1*WXQBB8M504NfFZjcYuMX7w.gif",alt:"image"})],-1),w=t("p",null,'\uADF8\uB7FC \uC9C0\uAE08, \uC138 \uAC1C\uC758 \uBC84\uD2BC \uC911 \uD558\uB098\uB97C \uD074\uB9AD\uD558\uB294 \uB4F1 \uC5B4\uB5A4 \uC774\uBCA4\uD2B8\uAC00 \uBC1C\uC0DD\uD55C\uB2E4\uACE0 \uAC00\uC815\uD574\uBD05\uC2DC\uB2E4. \uADF8\uB7EC\uBA74 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uC5B4\uB5A4 \uC77C\uC774 \uC77C\uC5B4\uB0A0\uC9C0 \uC0B4\uD3B4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uC774\uBCA4\uD2B8\uAC00 \uBC1C\uC0DD\uD558\uBA74 \uACE7\uBC14\uB85C \uC0C8\uB85C\uC6B4 \uC774\uBCA4\uD2B8 \uAC1D\uCCB4\uAC00 \uC0DD\uC131\uB429\uB2C8\uB2E4. \uADF8\uB7EC\uB098 \uC774 \uAC1D\uCCB4\uB294 \uD074\uB9AD\uC774 \uC2E4\uC81C\uB85C \uBC1C\uC0DD\uD55C \uACF3\uC5D0 \uC0DD\uC131\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB300\uC2E0, \uAC1D\uCCB4\uB294 \uBB38\uC11C\uC758 \uB8E8\uD2B8\uC5D0\uC11C \uC0DD\uC131\uB429\uB2C8\uB2E4. \uC989, \uD2B8\uB9AC\uC758 \uB9E8 \uC704\uC5D0\uC11C \uC0DD\uC131\uB429\uB2C8\uB2E4. \uAC70\uAE30\uC11C \uC774\uBCA4\uD2B8\uB294 "\uCEA1\uCC98\uB9C1" \uB2E8\uACC4 \uB3D9\uC548 \uC804\uCCB4 \uD2B8\uB9AC\uB97C \uB530\uB77C \uC544\uB798\uB85C \uC774\uB3D9\uD569\uB2C8\uB2E4. \uADF8\uB9AC\uACE0 \uADF8 \uC774\uBCA4\uD2B8\uB294 \uB300\uC0C1 \uC694\uC18C\uC5D0 \uB3C4\uB2EC\uD558\uB294\uB370, \uB300\uC0C1 \uC694\uC18C\uB294 \uC0AC\uC2E4 \uC774\uBCA4\uD2B8\uAC00 \uC2E4\uC81C\uB85C \uCC98\uC74C\uC73C\uB85C \uD2B8\uB9AC\uAC70\uB41C \uC694\uC18C\uC785\uB2C8\uB2E4. \uB530\uB77C\uC11C \uB300\uC0C1\uC5D0\uC11C\uC774 \uC774\uBCA4\uD2B8\uB97C \uCC98\uB9AC\uD558\uAE30 \uC704\uD574 \uC77C\uBC18\uC801\uC73C\uB85C \uC774 \uC694\uC18C\uC5D0 \uC774\uBCA4\uD2B8 \uD578\uB4E4\uB7EC \uD568\uC218\uB97C \uBC30\uCE58\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.',-1),k=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),R=t("p",null,[t("img",{src:"https://miro.medium.com/v2/resize:fit:1400/1*7478CY5Lj47cZY45VAOCeQ.gif",alt:"\uC774\uBBF8\uC9C0"})],-1),D=t("p",null,"\uADF8\uB7F0 \uB2E4\uC74C, \uB300\uC0C1 \uC694\uC18C\uC5D0 \uB3C4\uB2EC\uD558\uBA74 \uC774\uBCA4\uD2B8 \uAC1C\uCCB4\uB294 \uB4A4\uB2A6\uAC8C \uBC84\uBE14\uB9C1 \uB2E8\uACC4 \uC911\uC5D0 \uC804\uCCB4 \uD2B8\uB9AC\uB97C \uAC70\uC2AC\uB7EC \uC62C\uB77C\uAC11\uB2C8\uB2E4.",-1),C=t("p",null,"\uC774 \uACFC\uC815\uC5D0 \uB300\uD574 \uC774\uD574\uD574\uC57C \uD560 \uB450 \uAC00\uC9C0 \uB9E4\uC6B0 \uC911\uC694\uD55C \uC810\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uCCAB \uBC88\uC9F8\uB294 \uCEA1\uCC98\uB9C1 \uBC0F \uBC84\uBE14\uB9C1 \uB2E8\uACC4 \uB3D9\uC548 \uC2E4\uC81C\uB85C \uC774\uBCA4\uD2B8\uAC00 \uBAA8\uB4E0 \uC790\uC2DD \uBC0F \uBD80\uBAA8 \uC694\uC18C\uB97C \uD558\uB098\uC529 \uD1B5\uACFC\uD55C\uB2E4\uB294 \uAC83\uC785\uB2C8\uB2E4. \uC0AC\uC2E4, \uC774\uB7EC\uD55C DOM \uC694\uC18C \uAC01\uAC01\uC5D0\uC11C \uC774\uBCA4\uD2B8\uAC00 \uBC1C\uC0DD\uD588\uB2E4\uACE0 \uC0DD\uAC01\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),E=t("p",null,"\uB450 \uBC88\uC9F8 \uC911\uC694\uD55C \uC810\uC740 \uAE30\uBCF8\uC801\uC73C\uB85C \uC774\uBCA4\uD2B8 \uD578\uB4E4\uB7EC\uAC00 \uB300\uC0C1 \uC694\uC18C\uBFD0\uB9CC \uC544\uB2C8\uB77C \uBC84\uBE14\uB9C1 \uB2E8\uACC4\uC5D0\uC11C\uB3C4 \uC774\uBCA4\uD2B8\uB97C \uC218\uC2E0\uD55C\uB2E4\uB294 \uAC83\uC785\uB2C8\uB2E4. \uADF8\uB7EC\uBA74 \uC774 \uB450 \uAC00\uC9C0\uB97C \uACB0\uD569\uD558\uBA74 \uBD80\uBAA8 \uC694\uC18C\uC758 \uBAA8\uB4E0 \uC774\uBCA4\uD2B8 \uD578\uB4E4\uB7EC\uAC00 \uB300\uC0C1 \uC694\uC18C\uC640 \uAC19\uC740 \uC720\uD615\uC758 \uC774\uBCA4\uD2B8\uB97C \uC218\uC2E0\uD558\uB294 \uB3D9\uC548 \uBC84\uBE14\uB9C1 \uB2E8\uACC4\uC5D0\uC11C \uC2E4\uD589\uB41C\uB2E4\uB294 \uAC83\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4, \uD5E4\uB354 \uC694\uC18C\uC5D0 \uB2E4\uB978 \uD074\uB9AD \uC774\uBCA4\uD2B8 \uD578\uB4E4\uB7EC\uB97C \uCD94\uAC00\uD558\uBA74\uC774 \uC804\uCCB4 \uD504\uB85C\uC138\uC2A4 \uC911\uC5D0 \uD074\uB9AD\uC774 \uBC1C\uC0DD\uD560 \uB54C \uB300\uC0C1 \uBC0F \uD5E4\uB354 \uC694\uC18C\uC758 \uD578\uB4E4\uB7EC\uAC00 \uBAA8\uB450 \uC2E4\uD589\uB429\uB2C8\uB2E4.",-1),M=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),O=t("p",null,[t("img",{src:c,alt:"HowEventsWorkinReact_3"})],-1),W=t("p",null,"\uAC00\uB054 \uC6B0\uB9AC\uB294 \uC2E4\uC81C\uB85C \uC774 \uB3D9\uC791\uC744 \uC6D0\uD558\uC9C0 \uC54A\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uADF8\uB7F0 \uACBD\uC6B0\uC5D0\uB294 \uC774\uBCA4\uD2B8\uAC00 \uB354 \uC774\uC0C1 \uBC84\uBE14\uB9C1\uB418\uC9C0 \uC54A\uB3C4\uB85D \uAC04\uB2E8\uD788 \uC774\uBCA4\uD2B8 \uAC1D\uCCB4\uC758 stopPropagation \uBA54\uC11C\uB4DC\uB97C \uD638\uCD9C\uD568\uC73C\uB85C\uC368 \uC774\uB97C \uBC29\uC9C0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB294 \uBC14\uB2D0\uB77C JavaScript\uC5D0\uC11C\uB3C4 \uB3D9\uC791\uD558\uBA70 React\uC5D0\uC11C\uB3C4 \uB3D9\uC791\uD558\uC9C0\uB9CC \uC2E4\uC81C\uB85C\uB294 \uB9E4\uC6B0 \uB4DC\uBB3C\uAC8C \uD544\uC694\uD55C \uACBD\uC6B0\uC774\uBBC0\uB85C \uB2E4\uB978 \uD574\uACB0\uCC45\uC774 \uC5C6\uB294 \uACBD\uC6B0\uC5D0\uB9CC \uC0AC\uC6A9\uD558\uC138\uC694. \uADF8\uB798\uC11C \uC774\uAC83\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uC774\uBCA4\uD2B8\uAC00 \uB3D9\uC791\uD558\uB294 \uBC29\uC2DD\uC785\uB2C8\uB2E4.",-1),H=t("p",null,[t("img",{src:_,alt:"HowEventsWorkinReact_4"})],-1),x=t("p",null,"\uC774\uB807\uAC8C \uC774\uBCA4\uD2B8\uAC00 \uBC84\uBE14\uB9C1\uB418\uB294 \uC0AC\uC2E4\uC740 \uAC1C\uBC1C\uC790\uAC00 \uC774\uBCA4\uD2B8 \uC704\uC784(Event Delegation)\uC774\uB77C\uB294 \uB9E4\uC6B0 \uC77C\uBC18\uC801\uC774\uACE0 \uC720\uC6A9\uD55C \uAE30\uC220\uC744 \uAD6C\uD604\uD560 \uC218 \uC788\uAC8C \uD574\uC90D\uB2C8\uB2E4. \uC774\uBCA4\uD2B8 \uC704\uC784\uC744 \uC0AC\uC6A9\uD558\uBA74 \uC5EC\uB7EC \uC694\uC18C\uC758 \uC774\uBCA4\uD2B8\uB97C \uD55C \uACF3\uC778 \uBD80\uBAA8 \uC694\uC18C \uC911 \uD558\uB098\uC5D0\uC11C \uCC98\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 \uC138 \uAC1C\uC758 \uBC84\uD2BC \uB300\uC2E0 1,000\uAC1C\uC758 \uBC84\uD2BC\uC774 \uC788\uB2E4\uACE0 \uC0C1\uC0C1\uD574\uBCF4\uC138\uC694. \uC774\uB4E4 \uBAA8\uB450\uC5D0\uAC8C \uC774\uBCA4\uD2B8\uB97C \uCC98\uB9AC\uD558\uB824\uBA74 \uAC01 \uBC84\uD2BC\uB9C8\uB2E4 \uACE0\uC720\uD55C \uC774\uBCA4\uD2B8 \uD578\uB4E4\uB7EC \uD568\uC218\uB97C \uAC00\uC9C0\uACE0 \uC788\uC5B4\uC57C \uD558\uB294\uB370, \uC774\uB294 \uC571\uC758 \uC131\uB2A5\uACFC \uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uC5D0 \uBB38\uC81C\uAC00 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uADF8 \uB300\uC2E0 \uC774\uBCA4\uD2B8 \uC704\uC784\uC744 \uC0AC\uC6A9\uD558\uBA74 \uC774 \uBC84\uD2BC\uB4E4\uC758 \uCCAB \uBC88\uC9F8 \uBD80\uBAA8 \uC694\uC18C\uC5D0 \uD558\uB098\uC758 \uD578\uB4E4\uB7EC \uD568\uC218\uB9CC \uCD94\uAC00\uD558\uBA74 \uB429\uB2C8\uB2E4. \uADF8\uB7F0 \uB2E4\uC74C \uBC84\uD2BC \uC911 \uD558\uB098\uC5D0\uC11C \uD074\uB9AD\uC774 \uBC1C\uC0DD\uD558\uBA74, \uC774\uBCA4\uD2B8\uB294 \uC774 \uC608\uC81C\uC5D0\uC11C \uC635\uC158 div\uAE4C\uC9C0 \uBC84\uBE14\uB9C1\uB418\uACE0, \uADF8 \uB54C \uC6B0\uB9AC\uB294 \uBC84\uD2BC \uC911 \uD558\uB098\uC5D0\uC11C \uC774\uBCA4\uD2B8\uAC00 \uBC1C\uC0DD\uD588\uB294\uC9C0 \uD655\uC778\uD558\uAE30 \uC704\uD574 \uC774\uBCA4\uD2B8 \uB300\uC0C1 \uC18D\uC131\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uADF8\uB9AC\uACE0 \uADF8\uB807\uAC8C \uD558\uBA74 \uC911\uC559 \uC774\uBCA4\uD2B8 \uD578\uB4E4\uB7EC \uD568\uC218\uC5D0\uC11C \uC774\uBCA4\uD2B8\uB97C \uCC98\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),S=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),B=t("h2",{id:"\u1105\u1175\u110B\u1162\u11A8\u1110\u1173-\u110B\u1162\u11B8\u110B\u1166\u1109\u1165\u1102\u1173\u11AB-\u110B\u1175-\u1100\u1175\u1109\u116E\u11AF\u110B\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1102\u1173\u11AB-\u1100\u1165\u11BA\u110B\u1175-\u1109\u1175\u11AF\u110C\u1166\u1105\u1169-\u1100\u1173\u1105\u1175-\u1112\u1173\u11AB\u1112\u1161\u110C\u1175-\u110B\u1161\u11AD\u110C\u1175\u1106\u1161\u11AB-\u1106\u1161\u11AB\u110B\u1163\u11A8-\u110B\u1175\u1100\u1166-\u1105\u1175\u110B\u1162\u11A8\u1110\u1173\u110B\u1166\u1109\u1165-\u1109\u1175\u11AF\u110C\u1166\u1105\u1169-\u110C\u116E\u11BC\u110B\u116D\u1112\u1161\u110C\u1175-\u110B\u1161\u11AD\u1103\u1161\u1106\u1167\u11AB-\u110B\u116B-\u110B\u116E\u1105\u1175\u1100\u1161-\u1109\u1175\u11B7\u110C\u1175\u110B\u1165-\u110B\u1175\u110B\u1166-\u1103\u1162\u1112\u1162-\u110B\u1175\u110B\u1163\u1100\u1175\u1112\u1161\u1100\u1169-\u110B\u1175\u11BB\u1102\u1173\u11AB\u110C\u1175-\u1100\u116E\u11BC\u1100\u1173\u11B7\u1112\u1161\u1100\u1166-\u1103\u116C\u11AF-\u1109\u116E\u1103\u1169-\u110B\u1175\u11BB\u110B\u1165\u110B\u116D",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#\u1105\u1175\u110B\u1162\u11A8\u1110\u1173-\u110B\u1162\u11B8\u110B\u1166\u1109\u1165\u1102\u1173\u11AB-\u110B\u1175-\u1100\u1175\u1109\u116E\u11AF\u110B\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1102\u1173\u11AB-\u1100\u1165\u11BA\u110B\u1175-\u1109\u1175\u11AF\u110C\u1166\u1105\u1169-\u1100\u1173\u1105\u1175-\u1112\u1173\u11AB\u1112\u1161\u110C\u1175-\u110B\u1161\u11AD\u110C\u1175\u1106\u1161\u11AB-\u1106\u1161\u11AB\u110B\u1163\u11A8-\u110B\u1175\u1100\u1166-\u1105\u1175\u110B\u1162\u11A8\u1110\u1173\u110B\u1166\u1109\u1165-\u1109\u1175\u11AF\u110C\u1166\u1105\u1169-\u110C\u116E\u11BC\u110B\u116D\u1112\u1161\u110C\u1175-\u110B\u1161\u11AD\u1103\u1161\u1106\u1167\u11AB-\u110B\u116B-\u110B\u116E\u1105\u1175\u1100\u1161-\u1109\u1175\u11B7\u110C\u1175\u110B\u1165-\u110B\u1175\u110B\u1166-\u1103\u1162\u1112\u1162-\u110B\u1175\u110B\u1163\u1100\u1175\u1112\u1161\u1100\u1169-\u110B\u1175\u11BB\u1102\u1173\u11AB\u110C\u1175-\u1100\u116E\u11BC\u1100\u1173\u11B7\u1112\u1161\u1100\u1166-\u1103\u116C\u11AF-\u1109\u116E\u1103\u1169-\u110B\u1175\u11BB\u110B\u1165\u110B\u116D","aria-hidden":"true"},"#"),a(" \uB9AC\uC561\uD2B8 \uC571\uC5D0\uC11C\uB294 \uC774 \uAE30\uC220\uC744 \uC0AC\uC6A9\uD558\uB294 \uAC83\uC774 \uC2E4\uC81C\uB85C \uADF8\uB9AC \uD754\uD558\uC9C0 \uC54A\uC9C0\uB9CC, \uB9CC\uC57D \uC774\uAC8C \uB9AC\uC561\uD2B8\uC5D0\uC11C \uC2E4\uC81C\uB85C \uC911\uC694\uD558\uC9C0 \uC54A\uB2E4\uBA74, \uC65C \uC6B0\uB9AC\uAC00 \uC2EC\uC9C0\uC5B4 \uC774\uC5D0 \uB300\uD574 \uC774\uC57C\uAE30\uD558\uACE0 \uC788\uB294\uC9C0 \uAD81\uAE08\uD558\uAC8C \uB420 \uC218\uB3C4 \uC788\uC5B4\uC694.")],-1),z=t("p",null,"\uC774\uC5D0 \uB300\uD574 \uB450 \uAC00\uC9C0 \uC774\uC720\uAC00 \uC788\uC5B4\uC694. \uCCAB\uC9F8, \uB54C\uB85C\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC774\uBCA4\uD2B8\uC640 \uAD00\uB828\uB41C \uC77C\uBD80 \uC774\uC0C1\uD55C \uB3D9\uC791\uC744 \uBC1C\uACAC\uD560 \uC218 \uC788\uB294\uB370, \uC774\uB294 \uC2E4\uC81C\uB85C \uC774\uBCA4\uD2B8 \uBC84\uBE14\uB9C1\uACFC \uAD00\uB828\uC774 \uC788\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uADF8\uB798\uC11C \uC88B\uC740 \uB9AC\uC561\uD2B8 \uAC1C\uBC1C\uC790\uB85C\uC11C \uC774 \uBB38\uC81C\uB97C \uD574\uACB0\uD558\uAE30 \uC704\uD574 \uD56D\uC0C1 \uBB34\uC2A8 \uC77C\uC774 \uBC8C\uC5B4\uC9C0\uACE0 \uC788\uB294\uC9C0 \uC815\uD655\uD788 \uC774\uD574\uD558\uACE0 \uC2F6\uC5B4\uD574\uC694. \uB458\uC9F8\uB85C, \uC774\uAC83\uC774 \uC2E4\uC81C\uB85C \uB9AC\uC561\uD2B8\uAC00 \uC774\uBCA4\uD2B8\uC640 \uD568\uAED8 \uBB34\uC2A8 \uC77C\uC744 \uD558\uB294\uC9C0\uC774\uAE30 \uB54C\uBB38\uC5D0 \uC6B0\uB9AC\uAC00 \uADF8\uAC83\uC744 \uC0B4\uD3B4\uBCFC\uAC8C\uC694.",-1),V=t("p",null,[t("img",{src:p,alt:"\uC774\uBBF8\uC9C0"})],-1),Y=t("p",null,"\uADF8\uB798\uC11C \uB3D9\uC77C\uD55C DOM \uD2B8\uB9AC\uB97C \uACE0\uB824\uD574\uBCF4\uACE0, \uB2E4\uC2DC \uD55C \uBC88 \uBC84\uD2BC \uC911 \uD558\uB098 \uB610\uB294 \uB2E4\uB978 DOM \uC694\uC18C\uC5D0 \uC774\uBCA4\uD2B8 \uD578\uB4E4\uB7EC\uB97C \uCD94\uAC00\uD558\uACE0 \uC2F6\uB2E4\uACE0 \uAC00\uC815\uD574 \uBD05\uC2DC\uB2E4. \uB9AC\uC561\uD2B8 \uCF54\uB4DC\uC5D0\uC11C \uC774\uAC83\uC774 \uC5B4\uB5BB\uAC8C \uBCF4\uC77C\uC9C0 \uC0B4\uD3B4\uBD05\uC2DC\uB2E4. \uADF8\uB798\uC11C \uC6B0\uB9AC\uB294 \uAC04\uB2E8\uD788 onClick \uD504\uB86D\uC744 \uC0AC\uC6A9\uD558\uC5EC \uD074\uB9AD \uC774\uBCA4\uD2B8\uB97C \uAE30\uB2E4\uB9AC\uACE0, \uADF8\uC5D0 \uB300\uD574 \uD568\uC218\uB97C \uC804\uB2EC\uD569\uB2C8\uB2E4. \uC815\uB9D0 \uC26C\uC6B4 \uAC70\uC8E0? \uC774\uC81C, \uB9AC\uC561\uD2B8\uAC00 \uC2E4\uC81C\uB85C \uC774\uB7EC\uD55C \uC774\uBCA4\uD2B8 \uD578\uB4E4\uB7EC\uB97C \uB0B4\uBD80\uC801\uC73C\uB85C \uB4F1\uB85D\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD574 \uC0DD\uAC01\uD574\uBCF4\uBA74, \uB9AC\uC561\uD2B8\uAC00 \uC5D8\uB9AC\uBA3C\uD2B8\uB97C \uC120\uD0DD\uD558\uACE0, \uADF8 \uC5D8\uB9AC\uBA3C\uD2B8\uC5D0 \uC774\uBCA4\uD2B8 \uCC98\uB9AC\uAE30\uB97C \uCD94\uAC00\uD560 \uAC83\uC73C\uB85C \uC0DD\uAC01\uD560\uC9C0\uB3C4 \uBAA8\uB985\uB2C8\uB2E4. \uADF8\uB807\uAE30 \uB54C\uBB38\uC5D0 \uC774\uAC83\uC740 \uAF64 \uB17C\uB9AC\uC801\uC73C\uB85C \uB4E4\uB9B4 \uC218 \uC788\uC5B4\uC694. \uADF8\uB7EC\uB098 \uC0AC\uC2E4\uC740 \uB9AC\uC561\uD2B8\uAC00 \uB0B4\uBD80\uC801\uC73C\uB85C \uC774\uB807\uAC8C \uCC98\uB9AC\uD558\uC9C0\uB294 \uC54A\uB294\uB2E8 \uB9D0\uC774\uC8E0.",-1),N=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),I=t("p",null,[t("img",{src:r,alt:"\uC774\uBBF8\uC9C0"})],-1),J=t("p",null,"\uB300\uC2E0\uC5D0, React\uAC00 \uC2E4\uC81C\uB85C \uD558\uB294 \uAC83\uC740 \uC774 \uBC0F \uBAA8\uB4E0 \uB2E4\uB978 \uC774\uBCA4\uD2B8 \uD578\uB4E4\uB7EC \uD568\uC218\uB97C \uB8E8\uD2B8 DOM \uCEE8\uD14C\uC774\uB108\uC5D0 \uB4F1\uB85D\uD558\uB294 \uAC83\uC774\uBA70, \uD574\uB2F9 \uB8E8\uD2B8 \uCEE8\uD14C\uC774\uB108\uB294 React \uC571\uC774 \uD45C\uC2DC\uB418\uB294 DOM \uC694\uC18C\uC785\uB2C8\uB2E4. Create React App\uC758 \uAE30\uBCF8\uAC12\uC744 \uC0AC\uC6A9\uD558\uB294 \uACBD\uC6B0, \uC77C\uBC18\uC801\uC73C\uB85C ID\uAC00 root\uB85C \uC124\uC815\uB41C div \uC694\uC18C\uC785\uB2C8\uB2E4. \uB530\uB77C\uC11C \uC2E4\uC81C\uB85C \uC774\uBCA4\uD2B8 \uD578\uB4E4\uB7EC\uB97C \uBC30\uCE58\uD55C \uBC84\uD2BC\uC744 \uC120\uD0DD\uD558\uB294 \uB300\uC2E0, \uC6B0\uB9AC\uB294 React\uAC00 \uB8E8\uD2B8 \uC694\uC18C\uB97C \uC120\uD0DD\uD558\uACE0 \uBAA8\uB4E0 \uC774\uBCA4\uD2B8 \uD578\uB4E4\uB7EC\uB97C \uD574\uB2F9 \uC694\uC18C\uC5D0 \uCD94\uAC00\uD55C\uB2E4\uACE0 \uC0C1\uC0C1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. React\uAC00 \uC774 \uBAA8\uB4E0 \uC791\uC5C5\uC744 \uD558\uB294 \uBC29\uC2DD\uC740 \uC2E4\uC81C\uB85C \uC774\uBCF4\uB2E4 \uD6E8\uC52C \uBCF5\uC7A1\uD558\uC9C0\uB9CC, \uC5EC\uAE30\uC11C \uAE4A\uC774 \uD30C\uAE30\uD560 \uAC00\uCE58\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.",-1),L=t("p",null,"\uC54C\uC544\uB46C\uC57C \uD560 \uC720\uC77C\uD55C \uAC83\uC740 React\uAC00 \uC774\uBCA4\uD2B8 \uC720\uD615 \uB2F9 \uD558\uB098\uC758 \uC774\uBCA4\uD2B8 \uD578\uB4E4\uB7EC \uD568\uC218\uB97C \uBB3C\uB9AC\uC801\uC73C\uB85C \uB4F1\uB85D\uD558\uBA70, \uB80C\uB354 \uB2E8\uACC4\uC5D0\uC11C \uD53C\uBC84 \uD2B8\uB9AC\uC758 \uB8E8\uD2B8 \uB178\uB4DC\uC5D0 \uADF8\uB807\uAC8C \uD55C\uB2E4\uB294 \uAC83\uC785\uB2C8\uB2E4. \uC989, \uCF54\uB4DC\uC5D0 \uC5EC\uB7EC \uAC1C\uC758 onClick \uD578\uB4E4\uB7EC\uAC00 \uC788\uB294 \uACBD\uC6B0, React\uB294 \uC2E4\uC81C\uB85C \uBAA8\uB450 \uBC88\uB4E4\uB85C \uBB36\uC5B4\uC11C \uD558\uB098\uC758 \uD070 onClick \uD578\uB4E4\uB7EC\uB97C \uD53C\uBC84 \uD2B8\uB9AC\uC758 \uB8E8\uD2B8 \uB178\uB4DC\uC5D0 \uCD94\uAC00\uD558\uAC8C \uB429\uB2C8\uB2E4. \uB530\uB77C\uC11C \uC774\uAC83\uC740 \uD53C\uBC84 \uD2B8\uB9AC\uC758 \uB610 \uB2E4\uB978 \uC911\uC694\uD55C \uAE30\uB2A5\uC778\uB370, \uC5B4\uCA0C\uB4E0, \uC774\uAC83\uC740 React\uAC00 \uC2E4\uC81C\uB85C \uBAA8\uB4E0 \uC774\uBCA4\uD2B8\uC5D0 \uB300\uD574 \uC774\uBCA4\uD2B8 \uC704\uC784\uC744 \uC218\uD589\uD55C\uB2E4\uB294 \uAC83\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. \uC989, React\uAC00 \uBAA8\uB4E0 \uC774\uBCA4\uD2B8\uB97C \uB8E8\uD2B8 DOM \uCEE8\uD14C\uC774\uB108\uB85C \uC704\uC784\uD55C\uB2E4\uACE0 \uB9D0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC65C\uB0D0\uD558\uBA74 \uC2E4\uC81C\uB85C \uCC98\uB9AC\uB418\uB294 \uACF3\uC740 \uC6B0\uB9AC\uAC00 \uB4F1\uB85D\uD588\uB2E4\uACE0 \uC0DD\uAC01\uD55C \uACF3\uC774 \uC544\uB2C8\uB77C \uC704\uCE58\uC5D0\uC11C\uAC00 \uC544\uB2C8\uB77C \uADF8 \uACF3\uC785\uB2C8\uB2E4. \uC774\uB294 \uC774\uC804 \uC2AC\uB77C\uC774\uB4DC\uC5D0\uC11C \uBC30\uC6B4 \uB0B4\uC6A9\uACFC \uC815\uD655\uD788 \uC77C\uCE58\uD569\uB2C8\uB2E4.",-1),P=t("p",null,[t("img",{src:"https://miro.medium.com/v2/resize:fit:1400/1*Vz0IKlu2zRyNciihY_1WMg.gif",alt:"\uC774\uBBF8\uC9C0"})],-1),X=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),j=t("p",null,"\uADF8\uB798\uC11C \uB2E4\uC2DC \uD55C \uBC88 \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uBA74 \uC0C8\uB85C\uC6B4 \uC774\uBCA4\uD2B8 \uAC1D\uCCB4\uAC00 \uBC1C\uC0DD\uB418\uACE0, \uADF8 \uD6C4 DOM \uD2B8\uB9AC\uB97C \uB530\uB77C \uC774\uBCA4\uD2B8\uAC00 \uB300\uC0C1 \uC694\uC18C\uC5D0 \uB3C4\uB2EC\uD560 \uB54C\uAE4C\uC9C0 \uC774\uB3D9\uD569\uB2C8\uB2E4. \uADF8\uB7F0 \uB2E4\uC74C \uC774\uBCA4\uD2B8\uB294 \uB2E4\uC2DC \uC704\uB85C \uBC84\uBE14\uB9C1\uB429\uB2C8\uB2E4. \uADF8\uB9AC\uACE0 React\uAC00 \uBAA8\uB4E0 \uD578\uB4E4\uB7EC\uB97C \uB4F1\uB85D\uD55C \uB8E8\uD2B8 \uCEE8\uD14C\uC774\uB108\uC5D0 \uC774\uBCA4\uD2B8\uAC00 \uB3C4\uB2EC\uD558\uBA74 \uD574\uB2F9 \uC774\uBCA4\uD2B8\uB294 \uC2E4\uC81C\uB85C \uC774\uBCA4\uD2B8\uC640 \uB300\uC0C1 \uC694\uC18C\uC5D0 \uC77C\uCE58\uD558\uB294 \uD578\uB4E4\uB7EC\uC5D0 \uB530\uB77C \uCC98\uB9AC\uB429\uB2C8\uB2E4. \uB9C8\uCE68\uB0B4 \uC774 \uBAA8\uB4E0 \uC791\uC5C5\uC774 \uC644\uB8CC\uB418\uBA74 \uC774\uBCA4\uD2B8\uB294 \uBB3C\uB860 \uC0AC\uB77C\uC9C8 \uB54C\uAE4C\uC9C0 \uACC4\uC18D\uD574\uC11C \uC704\uB85C \uBC84\uBE14\uB9C1\uB429\uB2C8\uB2E4. \uC774 \uACFC\uC815\uC740 \uBAA8\uB450 \uC790\uB3D9\uC801\uC73C\uB85C \uCC98\uB9AC\uB418\uBA70 \uC6B0\uB9AC\uC758 React \uC571\uC744 \uC870\uAE08 \uB354 \uC131\uB2A5 \uD5A5\uC0C1\uC2DC\uD0A4\uAE30 \uC704\uD574 \uB208\uC5D0 \uBCF4\uC774\uC9C0 \uC54A\uAC8C \uBC1C\uC0DD\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4.",-1),A=t("p",null,[t("img",{src:u,alt:"how-events-work-in-react_8"})],-1),F=t("p",null,"\uC774\uC81C \uC8FC\uBAA9\uD574\uC57C \uD560 \uC791\uC740 \uC138\uBD80\uC0AC\uD56D \uD558\uB098\uAC00 \uC788\uB294\uB370, \uC5EC\uAE30\uC11C \uC911\uC694\uD55C \uAC83\uC740 \uCEF4\uD3EC\uB10C\uD2B8 \uD2B8\uB9AC\uAC00 \uC544\uB2C8\uB77C DOM \uD2B8\uB9AC\uC785\uB2C8\uB2E4. \uB530\uB77C\uC11C \uD55C \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uB2E4\uB978 \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC790\uC2DD\uC778 \uACBD\uC6B0\uB77C\uB3C4, \uD45C\uC2DC\uB41C DOM \uD2B8\uB9AC\uC5D0\uC11C \uB3D9\uC77C\uD558\uB2E4\uB294 \uAC83\uC744 \uC758\uBBF8\uD558\uC9C0\uB294 \uC54A\uC2B5\uB2C8\uB2E4. React \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uBC84\uBE14\uB9C1\uC744 \uC0DD\uAC01\uD560 \uB54C \uC774 \uC810\uC744 \uC5FC\uB450\uC5D0 \uB450\uC138\uC694.",-1),Q=t("p",null,"\uC790, \uADF8\uB798\uC11C \uC6B0\uB9AC\uB294 \uC774\uBCA4\uD2B8\uC640 \uC774\uBCA4\uD2B8 \uAC1D\uCCB4\uC5D0 \uB300\uD574 \uB9CE\uC774 \uC774\uC57C\uAE30\uD588\uC73C\uB2C8, \uC774\uC81C \uC774 \uC774\uBCA4\uD2B8 \uAC1D\uCCB4\uB4E4\uC774 \uC2E4\uC81C\uB85C \uC5B4\uB5BB\uAC8C \uC791\uB3D9\uD558\uB294\uC9C0 \uC0B4\uD3B4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.",-1),T=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),Z=t("p",null,[t("img",{src:h,alt:"HowEventsWorkinReact_9"})],-1),G=t("p",null,"\uB530\uB77C\uC11C \uC6B0\uB9AC\uAC00 \uC774\uC640 \uAC19\uC740 \uC774\uBCA4\uD2B8 \uD578\uB4E4\uB7EC\uB97C \uC120\uC5B8\uD560 \uB54C\uB9C8\uB2E4, React\uB294 \uC0DD\uC131\uB41C \uC774\uBCA4\uD2B8 \uAC1D\uCCB4\uC5D0 \uB300\uD55C \uC561\uC138\uC2A4 \uAD8C\uD55C\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uBC14\uB2D0\uB77C JavaScript\uC640 \uB9C8\uCC2C\uAC00\uC9C0\uB85C \uC774\uBCA4\uD2B8 \uAC1D\uCCB4\uC5D0 \uC561\uC138\uC2A4\uD560 \uC218 \uC788\uC9C0\uB9CC React\uC5D0\uC11C\uB294 \uC2E4\uC81C\uB85C \uC774\uBCA4\uD2B8 \uAC1D\uCCB4\uAC00 \uB2E4\uB985\uB2C8\uB2E4.",-1),K=t("p",null,[t("img",{src:g,alt:"HowEventsWorkinReact_10"})],-1),q=t("p",null,"\uADF8\uB798\uC11C \uBC14\uB2D0\uB77C JavaScript\uC5D0\uC11C\uB294 \uAC04\uB2E8\uD788 \uC6D0\uC2DC DOM \uC774\uBCA4\uD2B8 \uAC1D\uCCB4\uC5D0 \uC561\uC138\uC2A4\uD560 \uC218 \uC788\uC9C0\uB9CC, React\uC5D0\uC11C\uB294 Synthetic \uC774\uBCA4\uD2B8\uB77C\uB294 \uAC83\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. Synthetic \uC774\uBCA4\uD2B8\uB294 \uAE30\uBCF8\uC801\uC73C\uB85C DOM\uC758 \uC6D0\uC2DC \uC774\uBCA4\uD2B8 \uAC1D\uCCB4 \uC8FC\uC704\uC5D0 \uC587\uC740 \uB798\uD37C\uC774\uBA70, \uB798\uD37C\uB780 \uAC04\uB2E8\uD788 \uB9D0\uD574 Synthetic \uC774\uBCA4\uD2B8\uAC00 \uC6D0\uC2DC \uC774\uBCA4\uD2B8 \uAC1D\uCCB4\uC640 \uB9E4\uC6B0 \uC720\uC0AC\uD558\uC9C0\uB9CC \uADF8 \uC704\uC5D0 \uC77C\uBD80 \uAE30\uB2A5\uC744 \uCD94\uAC00\uD558\uAC70\uB098 \uBCC0\uACBD\uD55C\uB2E4\uB294 \uAC83\uC785\uB2C8\uB2E4. \uB530\uB77C\uC11C \uC774\uB7EC\uD55C Synthetic \uC774\uBCA4\uD2B8\uB294 \uC6D0\uC2DC \uC774\uBCA4\uD2B8 \uAC1D\uCCB4\uC640 \uB3D9\uC77C\uD55C \uC778\uD130\uD398\uC774\uC2A4\uB97C \uAC16\uACE0 \uC788\uC73C\uBA70, \uC911\uC694\uD55C \uBA54\uC18C\uB4DC \uC911 \uD558\uB098\uC778 stopPropagation \uBC0F preventDefault\uB97C \uD3EC\uD568\uD569\uB2C8\uB2E4.",-1),U=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),$=t("p",null,"\uD558\uC9C0\uB9CC \uD569\uC131 \uC774\uBCA4\uD2B8\uAC00 \uD2B9\uBCC4\uD55C \uC810\uC774 \uBB58\uAE4C\uC694? \uB9AC\uC561\uD2B8 \uD300\uC774 \uADF8\uAC83\uB4E4\uC744 \uAD6C\uD604\uD558\uAE30\uB85C \uACB0\uC815\uD55C \uC774\uC720 \uC911 \uD558\uB098\uB294 \uBE0C\uB77C\uC6B0\uC800\uC758 \uC77C\uAD00\uC131 \uBB38\uC81C\uB97C \uD574\uACB0\uD558\uACE0, \uBAA8\uB4E0 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uC774\uBCA4\uD2B8\uAC00 \uC644\uC804\uD788 \uB3D9\uC77C\uD55C \uBC29\uC2DD\uC73C\uB85C \uC791\uB3D9\uD558\uB3C4\uB85D \uB9CC\uB4E0\uB2E4\uB294 \uC810\uC785\uB2C8\uB2E4. \uB9AC\uC561\uD2B8 \uD300\uC740 \uB610\uD55C \uBAA8\uB4E0 \uC911\uC694\uD55C \uD569\uC131 \uC774\uBCA4\uD2B8\uAC00 \uC2E4\uC81C\uB85C \uBC84\uBE14\uB9C1\uB418\uB3C4\uB85D \uACB0\uC815\uD588\uC2B5\uB2C8\uB2E4. \uD3EC\uCEE4\uC2A4, \uBE14\uB7EC \uBC0F \uBCC0\uACBD \uC774\uBCA4\uD2B8\uC640 \uAC19\uC740 \uC774\uBCA4\uD2B8\uB294 \uC77C\uBC18\uC801\uC73C\uB85C \uBC84\uBE14\uB9C1\uB418\uC9C0 \uC54A\uC9C0\uB9CC \uD574\uB2F9 \uC774\uBCA4\uD2B8\uB4E4\uC740 \uB9AC\uC561\uD2B8\uC5D0\uC11C\uB294 \uBC84\uBE14\uB9C1\uB429\uB2C8\uB2E4. \uC5EC\uAE30\uC11C \uC720\uC77C\uD55C \uC608\uC678\uB294 \uC2A4\uD06C\uB864 \uC774\uBCA4\uD2B8\uC778\uB370, \uB9AC\uC561\uD2B8\uC5D0\uC11C\uB3C4 \uBC84\uBE14\uB9C1\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.",-1),tt=t("p",null,[t("img",{src:m,alt:"\uC774\uBBF8\uC9C0"})],-1),at=t("p",null,"\uC790, \uB9C8\uC9C0\uB9C9\uC73C\uB85C, \uB9AC\uC561\uD2B8\uC640 \uC21C\uC218 \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uC5D0\uC11C \uC774\uBCA4\uD2B8 \uD578\uB4E4\uB7EC\uC758 \uC791\uB3D9 \uBC29\uC2DD\uC5D0\uB294 \uC5B4\uB5A4 \uCC28\uC774\uAC00 \uC788\uB294\uC9C0 \uAC04\uB2E8\uD788 \uC5B8\uAE09\uD558\uACE0 \uC2F6\uC2B5\uB2C8\uB2E4. \uCCAB \uBC88\uC9F8\uB85C, \uB9AC\uC561\uD2B8\uC5D0\uC11C \uC774\uBCA4\uD2B8 \uD578\uB4E4\uB7EC\uB97C \uC5F0\uACB0\uD558\uAE30 \uC704\uD55C \uC18D\uC131 \uC774\uB984\uC740 camelCase\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC791\uC131\uB429\uB2C8\uB2E4. \uB530\uB77C\uC11C onClick\uACFC \uAC19\uC774 \uB300\uBB38\uC790 C\uB85C \uB41C \uC18D\uC131 \uC774\uB984\uC774 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uBC18\uBA74 HTML\uC5D0\uC11C\uB294 \uBAA8\uB450 \uC18C\uBB38\uC790\uC778 onclick\uC774\uBA70, \uC21C\uC218 \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uC758 addEventListener\uB97C \uC0AC\uC6A9\uD558\uBA74 \uC774\uBCA4\uD2B8\uAC00 \uB2E8\uC21C\uD788 click\uC774\uB77C\uB294 \uC774\uB984\uC73C\uB85C \uD638\uCD9C\uB429\uB2C8\uB2E4.",-1),st=t("p",null,"\uC774\uC81C \uC21C\uC218 \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uC5D0\uC11C \uBE0C\uB77C\uC6B0\uC800\uC758 \uAE30\uBCF8 \uB3D9\uC791\uC744 \uC911\uC9C0\uD558\uB824\uBA74 \uC774\uBCA4\uD2B8 \uD578\uB4E4\uB7EC \uD568\uC218\uC5D0\uC11C false\uB97C \uBC18\uD658\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4, \uC591\uC2DD\uC744 \uC81C\uCD9C\uD560 \uB54C \uBE0C\uB77C\uC6B0\uC800\uAC00 \uC790\uB3D9\uC73C\uB85C \uD398\uC774\uC9C0\uB97C \uB2E4\uC2DC\uB85C\uB4DC\uD558\uB294 \uAC83\uC774 \uB300\uD45C\uC801\uC778 \uC608\uC785\uB2C8\uB2E4. \uADF8\uB7EC\uB098 \uB9AC\uC561\uD2B8 \uC774\uBCA4\uD2B8 \uD578\uB4E4\uB7EC\uC5D0\uC11C false\uB97C \uBC18\uD658\uD558\uB824\uACE0 \uD558\uBA74 \uC791\uB3D9\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C \uB9AC\uC561\uD2B8\uC5D0\uC11C \uBE0C\uB77C\uC6B0\uC800\uC758 \uAE30\uBCF8 \uB3D9\uC791\uC744 \uBC29\uC9C0\uD558\uB294 \uC720\uC77C\uD55C \uBC29\uBC95\uC740 \uD569\uC131 \uC774\uBCA4\uD2B8 \uAC1D\uCCB4\uC5D0\uC11C preventDefault\uB97C \uD638\uCD9C\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4.",-1),ot=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),et=t("p",null,"\uB9C8\uC9C0\uB9C9\uC73C\uB85C, \uBC84\uBE14\uB9C1 \uB2E8\uACC4\uAC00 \uC544\uB2CC \uCEA1\uCC98\uB9C1 \uB2E8\uACC4\uC5D0\uC11C \uC774\uBCA4\uD2B8\uB97C \uCC98\uB9AC\uD574\uC57C \uD558\uB294 \uACBD\uC6B0\uAC00 \uB9E4\uC6B0 \uB4DC\uBB3C\uC9C0\uB9CC, \uADF8\uB7F4 \uB54C\uB294 \uC774\uBCA4\uD2B8 \uD578\uB4E4\uB7EC \uC774\uB984\uC5D0 Capture\uB97C \uB2EC\uC544\uC8FC\uBA74 \uB429\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 onClick \uB300\uC2E0\uC5D0 onClickCapture\uB97C \uC0AC\uC6A9\uD558\uBA74 \uB429\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uC2E4\uC81C\uB85C \uC774\uB97C \uC0AC\uC6A9\uD560 \uC77C\uC740 \uAC70\uC758 \uC5C6\uC744 \uAC83\uC774\uBBC0\uB85C, \uADF8\uB0E5 \uBA38\uB9AC \uC18D \uC5B4\uB518\uAC00\uC5D0 \uC774 \uC815\uBCF4\uB97C \uAE30\uC5B5\uD574 \uB450\uC138\uC694.",-1),lt=t("p",null,"\uC790, \uC774 \uC2AC\uB77C\uC774\uB4DC\uC5D0\uC11C \uBC30\uC6B4 \uAC83\uC740 React\uC5D0\uC11C \uC774\uBCA4\uD2B8\uB97C \uC131\uACF5\uC801\uC73C\uB85C \uCC98\uB9AC\uD558\uAE30 \uC704\uD574 \uC2E4\uBB34\uC5D0\uC11C \uC54C\uC544\uC57C \uD560 \uBAA8\uB4E0 \uAC83\uC785\uB2C8\uB2E4. \uB098\uBA38\uC9C0\uB294 \uBAA8\uB450 \uD654\uBA74 \uB4A4\uC5D0\uC11C \uC790\uB3D9\uC73C\uB85C \uCC98\uB9AC\uB418\uC9C0\uB9CC, \uB2E4\uB978 \uAC15\uC758 \uB0B4\uC6A9\uB3C4 \uD765\uBBF8\uB85C\uC6B0\uC168\uAE30\uB97C \uBC14\uB77C\uBA70, \uC774\uB97C \uD1B5\uD574 \uC5EC\uB7EC\uBD84\uC758 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC774\uBCA4\uD2B8 \uCC98\uB9AC\uC5D0 \uB300\uD55C \uB354 \uD070 \uC790\uC2E0\uAC10\uC744 \uC5BB\uC5C8\uC73C\uBA74 \uC88B\uACA0\uC2B5\uB2C8\uB2E4.",-1),nt=t("h1",{id:"stackademic-\u{1F393}",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#stackademic-\u{1F393}","aria-hidden":"true"},"#"),a(" Stackademic \u{1F393}")],-1),it=t("p",null,"\uB05D\uAE4C\uC9C0 \uC77D\uC5B4\uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4. \uAC00\uAE30 \uC804\uC5D0:",-1),dt=t("p",null,[t("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),ct=t("ul",null,[t("li",null,"\uC791\uAC00\uB97C \uBC15\uC218 \uCE58\uACE0 \uD314\uB85C\uC6B0 \uD574\uC8FC\uC138\uC694! \u{1F44F}"),t("li",null,"\uD314\uB85C\uC6B0\uD558\uAE30 X | \uB9C1\uD06C\uB4DC\uC778 | \uC720\uD29C\uBE0C | \uB514\uC2A4\uCF54\uB4DC"),t("li",null,"\uB2E4\uB978 \uD50C\uB7AB\uD3FC \uBC29\uBB38\uD558\uAE30: In Plain English | CoFeed | Venture | Cubed"),t("li",null,"Stackademic.com\uC5D0\uC11C \uB354 \uB9CE\uC740 \uCF58\uD150\uCE20\uB97C \uB9CC\uB098\uBCF4\uC138\uC694.")],-1);function _t(pt,rt){return s(),i("div",null,[f,y,v,w,k,(s(),o(l("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),R,D,C,E,M,(s(),o(l("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),O,W,H,x,S,(s(),o(l("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),B,z,V,Y,N,(s(),o(l("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),I,J,L,P,X,(s(),o(l("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),j,A,F,Q,T,(s(),o(l("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),Z,G,K,q,U,(s(),o(l("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),$,tt,at,st,ot,(s(),o(l("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),et,lt,nt,it,dt,(s(),o(l("script"),null,{default:e(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),ct])}var yt=n(b,[["render",_t],["__file","index.html.vue"]]);export{yt as default};