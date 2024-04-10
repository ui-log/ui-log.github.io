import{_ as d}from"./app.63e06a35.js";import{l as t,m as n,E as a,G as e,p as s,Y as o,C as l}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var i="/assets/DB64FixingIndexedDBsUglinessinJavaScript_0.11eb3a68.png",c="/assets/DB64FixingIndexedDBsUglinessinJavaScript_1.5d7eac61.png",_="/assets/DB64FixingIndexedDBsUglinessinJavaScript_2.77e95c20.png";const u={},r=l("img",{src:i},null,-1),p=l("p",null,"IDB\uB294 \uB798\uD37C \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uC0AC\uC6A9\uD558\uC5EC \uB354 \uC27D\uAC8C \uC0AC\uC6A9\uD560 \uC218\uC788\uAC8C \uB418\uB294 \uAE30\uC220\uC785\uB2C8\uB2E4. \uADF8 \uC911 \uAC00\uC7A5 \uD070 \uC81C\uD55C \uC911 \uD558\uB098\uB294 \uBD88\uBCC0 \uC2A4\uD0A4\uB9C8\uB85C \uC778\uD574 \uBC84\uC804\uC744 \uAC15\uC81C\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4. DB64\uAC00 \uBC84\uC804 \uC81C\uD55C\uC744 \uD53C\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD574 \uC54C\uC544\uBD05\uC2DC\uB2E4.",-1),h=l("p",null,"\uB098\uB294 DB64\uB97C \uB9CC\uB4E4\uC5C8\uC5B4\uC694. \uC774\uAC83\uC740 IndexedDB\uB97C \uC0AC\uC6A9\uD558\uAE30\uAC00 \uC870\uAE08 \uB35C \uC9C0\uB3C5\uD558\uAC8C \uB9CC\uB4E4\uC5B4 \uC8FC\uB294 \uC791\uC740 \uB798\uD37C \uB798\uD37C\uC785\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4,",-1),g=l("ul",null,[l("li",null,"DB\uC640 Store\uB97C \uB9CC\uB4ED\uB2C8\uB2E4 (\uD14C\uC774\uBE14\uCC98\uB7FC)"),l("li",null,"\uD2B9\uC815 DB\uC758 \uC2A4\uD1A0\uC5B4 \uC0AC\uC6A9 (SQL\uC758 SELECT * FROM db_name.table_name;\uC640 \uC720\uC0AC)"),l("li",null,"\uD56D\uBAA9 \uC124\uC815 \uBC0F \uAC00\uC838 \uC624\uAE30"),l("li",null,"\uC608\uC678 \uCC98\uB9AC (\uC608 : \uB204\uAD70\uAC00\uAC00 \uCE90\uC2DC\uB97C \uC9C0\uC6B0\uBA74 \uC5B4\uB5BB\uAC8C \uD560\uAE4C\uC694?) \uC2A4\uD1A0\uB9AC\uC9C0 \uC81C\uAC70 \uBC0F \uB370\uC774\uD130 \uBB34\uD6A8\uD654\uB97C \uC6A9\uC774\uD558\uAC8C\uD558\uAE30 \uC704\uD574 has \uBA54\uC11C\uB4DC\uAC00 \uB3C4\uC785\uB418\uC5C8\uC2B5\uB2C8\uB2E4.")],-1),b=l("p",null,[l("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),B=l("p",null,"\uB85C\uCEEC \uC800\uC7A5\uC18C\uB294 \uB370\uC774\uD130 \uBB34\uD6A8\uD654 \uBC0F \uC800\uC7A5 \uACF5\uAC04 \uC81C\uAC70 \uC704\uD5D8\uC744 \uAC00\uC9C0\uACE0 \uC788\uC9C0\uB9CC API\uC758 \uD55C\uC815\uB41C \uAC04\uC18C\uD654 \uB54C\uBB38\uC5D0 \uC885\uC885 \uBB34\uC2DC\uB429\uB2C8\uB2E4.",-1),D=l("p",null,"\uBC84\uC804 0.8.5\uB294 \uB204\uB77D\uB41C \uC2A4\uD1A0\uC5B4\uB97C \uC0C8 \uC2A4\uD1A0\uC5B4\uB97C \uD3EC\uD568\uD558\uC5EC \uB2E4\uC2DC \uC0DD\uC131\uD560 \uC218 \uC788\uB294 \uAE30\uB2A5\uC744 \uC18C\uAC1C\uD588\uC2B5\uB2C8\uB2E4.",-1),m=l("p",null,"\uBC84\uC804 \uAD00\uB9AC\uB97C \uC81C\uAC70\uD558\uBA74 \uBC84\uC804 \uAD00\uB9AC\uAC00 \uD574\uACB0\uD558\uB824\uACE0 \uD588\uB358 \uBD88\uD3B8\uD55C \uBC29\uC2DD\uC73C\uB85C \uBB38\uC81C\uB97C \uD574\uACB0\uD558\uB294 \uAC83\uC774 \uC911\uC694\uD569\uB2C8\uB2E4.",-1),y=l("h2",{id:"indexeddb\u110B\u1166\u1102\u1173\u11AB-\u1109\u1173\u1110\u1169\u110B\u1165\u1105\u1173\u11AF-\u1109\u1161\u11A8\u110C\u1166\u1112\u1161\u1100\u1165\u1102\u1161-\u110E\u116E\u1100\u1161\u1112\u1161\u11AF-\u1109\u116E-\u110B\u1165\u11B9\u1109\u1173\u11B8\u1102\u1175\u1103\u1161",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#indexeddb\u110B\u1166\u1102\u1173\u11AB-\u1109\u1173\u1110\u1169\u110B\u1165\u1105\u1173\u11AF-\u1109\u1161\u11A8\u110C\u1166\u1112\u1161\u1100\u1165\u1102\u1161-\u110E\u116E\u1100\u1161\u1112\u1161\u11AF-\u1109\u116E-\u110B\u1165\u11B9\u1109\u1173\u11B8\u1102\u1175\u1103\u1161","aria-hidden":"true"},"#"),s(" IndexedDB\uC5D0\uB294 \uC2A4\uD1A0\uC5B4\uB97C \uC0AD\uC81C\uD558\uAC70\uB098 \uCD94\uAC00\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")],-1),f=l("p",null,[l("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),x=l("p",null,'\uB530\uB77C\uC11C DB64\uC5D0\uC11C\uB294 \uC2A4\uD1A0\uC5B4\uB97C \uC9C0\uC6B8 \uC218\uB3C4 \uC788\uACE0 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uB97C \uC0AD\uC81C\uD560 \uC218\uB3C4 \uC788\uC9C0\uB9CC "\uC2A4\uD0A4\uB9C8 \uBCC0\uACBD \uBC84\uC804 \uAD00\uB828 \uC694\uAD6C \uC0AC\uD56D"\uC73C\uB85C \uC778\uD574 \uC0C8 \uC2A4\uD1A0\uC5B4\uB97C \uCD94\uAC00\uD558\uAC70\uB098 \uC2A4\uD1A0\uC5B4\uB97C \uC0AD\uC81C\uD560 \uC218\uB294 \uC5C6\uC2B5\uB2C8\uB2E4.',-1),v=l("p",null,[l("img",{src:c,alt:"DB64FixingIndexedDBsUglinessinJavaScript_1.png"})],-1),w=l("p",null,'IDB \uC138\uACC4\uC5D0 \uC815\uD1B5\uD558\uB2E4\uBA74 "\uC0C8 \uBC84\uC804\uC744 \uC0DD\uC131\uD558\uACE0 setVersion\uC744 \uC124\uC815\uD558\uB294 \uBC29\uBC95\uC740 \uC65C \uC548 \uB420\uAE4C?"\uB77C\uACE0 \uC0DD\uAC01\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.',-1),I=l("p",null,'IDB\uC5D0\uC11C\uB294 \uACB0\uCF54 "\uADF8\uB0E5"\uC774\uB780 \uAC8C \uC5C6\uC5B4\uC694. \uAC8C\uB2E4\uAC00 IDB\uB294 \uC2DC\uAC04\uC774 \uC9C0\uB0A8\uC5D0 \uB530\uB77C \uB204\uC801\uB429\uB2C8\uB2E4. \uC2A4\uB0C5\uC0F7\uC744 \uC0AC\uC6A9\uD558\uAC70\uB098 Git\uACFC \uC720\uC0AC\uD55C DAG \uC54C\uACE0\uB9AC\uC998\uC744 \uC0AC\uC6A9\uD55C\uB2E4\uACE0 \uAC00\uC815\uD574\uB3C4, \uB300\uBD80\uBD84\uC758 \uC6F9 \uC0AC\uC6A9\uC790\uAC00 \uBC84\uC804 \uAD00\uB9AC\uB97C \uC694\uCCAD\uD55C \uC801\uC774 \uC5C6\uB294 \uC0C1\uD0DC\uC5D0\uC11C\uB294 \uC5EC\uC804\uD788 \uACFC\uB3C4\uD55C \uBC29\uBC95\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4.',-1),S=l("p",null,[l("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),k=l("h2",{id:"\u1109\u1175\u11AF\u110B\u116D\u11BC\u110C\u1165\u11A8\u110B\u1175\u11AB-\u1112\u1162\u1100\u1167\u11AF\u110E\u1162\u11A8",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#\u1109\u1175\u11AF\u110B\u116D\u11BC\u110C\u1165\u11A8\u110B\u1175\u11AB-\u1112\u1162\u1100\u1167\u11AF\u110E\u1162\u11A8","aria-hidden":"true"},"#"),s(" \uC2E4\uC6A9\uC801\uC778 \uD574\uACB0\uCC45")],-1),J=l("p",null,"0.9.x \uB9B4\uB9AC\uC988\uC5D0\uC11C DB64\uB294 \uBC84\uC804 \uAD00\uB9AC \uC5C6\uC774 \uC0C1\uC810\uC744 \uCD94\uAC00\uD558\uAC70\uB098 \uC0AD\uC81C\uD560 \uC218 \uC788\uB294 \uAE30\uB2A5\uC744 \uB3C4\uC785\uD560 \uAC83\uC785\uB2C8\uB2E4. \uC774 \uACFC\uC815\uC740 \uAC04\uB2E8\uD788 \uB2E4\uC74C\uACFC \uAC19\uC774 \uC218\uD589\uB429\uB2C8\uB2E4:",-1),C=l("ul",null,[l("li",null,"\uC0C8\uB85C\uC6B4 \uBE48 \uC2A4\uD0A4\uB9C8\uB97C \uC815\uC758\uD569\uB2C8\uB2E4."),l("li",null,"\uAE30\uC874 \uC2A4\uD0A4\uB9C8\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uBCF5\uC0AC\uD569\uB2C8\uB2E4."),l("li",null,"\uAE30\uC874 \uC2A4\uD0A4\uB9C8\uB97C \uC0AD\uC81C\uD569\uB2C8\uB2E4."),l("li",null,"\uCD94\uAC00 \uB610\uB294 \uC0AD\uC81C\uB41C \uAC1D\uCCB4 \uC2A4\uD1A0\uC5B4\uB97C \uD3EC\uD568\uD55C \uC0C8\uB85C\uC6B4 \uC2A4\uD0A4\uB9C8\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4.")],-1),E=l("p",null,"\uC774\uAC83\uC740 \uAE30\uC220\uC801\uC778 \uAC78\uC791\uC740 \uC544\uB2C8\uACE0, \uB9D0 \uADF8\uB300\uB85C \uAC04\uB2E8\uD55C \uC544\uC774\uB514\uC5B4\uC785\uB2C8\uB2E4.",-1),F=l("p",null,[l("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),L=l("p",null,"\uC774\uAC83\uC740 \uBA40\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. LocalStorage\uB294 JSON\uC774\uB098 \uC77C\uBC18 \uBB38\uC790\uC5F4\uB85C \uC9C1\uB82C\uD654 \uBC0F \uC5ED\uC9C1\uB82C\uD654\uB97C \uD544\uC694\uB85C \uD558\uAE30 \uB54C\uBB38\uC5D0 \uAC00\uB2A5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB85C \uC778\uD574 \uC778\uAC04 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD560 \uAC00\uB2A5\uC131\uC774 \uB192\uC544\uC9C8 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.",-1),T=l("p",null,"IndexedDB\uC640 DB64\uC744 \uC0AC\uC6A9\uD558\uBA74 \uD55C \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uAC00 \uC0AD\uC81C\uB420 \uB54C \uB2E4\uB978 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uAC00 \uC815\uC0C1\uC801\uC73C\uB85C \uC791\uB3D9\uC744 \uACC4\uC18D\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),U=l("p",null,"\uADF8\uB7EC\uB098 LocalStorage\uC758 \uACBD\uC6B0 \uD574\uB2F9 \uC2DC\uB098\uB9AC\uC624\uC5D0\uC11C \uB370\uC774\uD130\uAC00 \uD55C\uAEBC\uBC88\uC5D0 \uBAA8\uB450 \uC190\uC2E4\uB429\uB2C8\uB2E4. \uB530\uB77C\uC11C \uC608\uB97C \uB4E4\uC5B4 8\uAC1C\uC758 HTTP \uC694\uCCAD\uC744 \uB2E4\uC2DC \uCC44\uC6B0\uAE30 \uC704\uD574\uC11C \uB370\uC774\uD130\uB97C \uC7AC\uAD6C\uC131\uD574\uC57C \uD558\uB294 \uACBD\uC6B0, \uB2E4\uB978 \uD6A8\uC728\uC131 \uBB38\uC81C\uC640 \uC7A0\uC7AC\uC801\uC778 \uC2E4\uD328 \uC9C0\uC810\uC774 \uCD94\uAC00\uB429\uB2C8\uB2E4. (\uC774\uC81C \uC5B4\uB5A4 \uC694\uCCAD\uC774 \uC2E4\uD328\uD558\uAC70\uB098 \uBD80\uBD84\uC801\uC73C\uB85C \uC2E4\uD328\uD588\uB294\uC9C0 \uACE0\uB824\uD574\uC57C \uD569\uB2C8\uB2E4).",-1),G=l("p",null,"\uC774 \uB2E4\uAC00\uC624\uB294 \uAE30\uB2A5 \uC774\uD6C4\uB85C, DB64\uB294 IndexedDB\uC758 \uC720\uD2F8\uB9AC\uD2F0 \uCE21\uBA74\uACFC IDBCursor\uC744 \uBB36\uB294 \uAC83\uC744 \uD0D0\uC0C9\uD558\uAC8C \uB418\uC5B4, \uB354 \uACE0\uAE09 \uC791\uC5C5\uC744 \uC218\uD589\uD560 \uB54C DB64\uACFC IndexedDB\uB97C \uBAA8\uB450 \uC0AC\uC6A9\uD560 \uD544\uC694\uAC00 \uC5C6\uAC8C \uB420 \uAC83\uC785\uB2C8\uB2E4.",-1),N=l("p",null,[l("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),V=l("p",null,[l("img",{src:_,alt:"Julien Etienne"})],-1);function A(O,P){return t(),n("div",null,[r,p,h,g,b,(t(),a(o("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),B,D,m,y,f,(t(),a(o("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),x,v,w,I,S,(t(),a(o("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),k,J,C,E,F,(t(),a(o("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),L,T,U,G,N,(t(),a(o("script"),null,{default:e(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),V])}var q=d(u,[["render",A],["__file","index.html.vue"]]);export{q as default};
