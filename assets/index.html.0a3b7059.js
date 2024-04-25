import{_ as i}from"./app.3052dcfb.js";import{l as e,m as n,E as s,G as o,p as t,Y as l,K as d,C as a}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var c="/assets/Howtobuildasimplereal-timeapplicationusingFlaskReactandSocketio_0.a376c99b.png";const u={},r=d('<img src="'+c+'"><h1 id="tl-dr-\u{1F9D0}" tabindex="-1"><a class="header-anchor" href="#tl-dr-\u{1F9D0}" aria-hidden="true">#</a> TL;DR \u{1F9D0}</h1><p>\uC774 \uD29C\uD1A0\uB9AC\uC5BC\uC5D0\uC11C\uB294 React + Flask \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC124\uC815\uD558\uACE0 socket.io\uB97C \uC0AC\uC6A9\uD558\uC5EC \uD074\uB77C\uC774\uC5B8\uD2B8\uC640 \uC11C\uBC84 \uAC04\uC5D0 \uC6F9\uC18C\uCF13\uC744 \uD1B5\uD574 \uC0C1\uD638\uC791\uC6A9\uD558\uB294 \uBC29\uBC95\uC744 \uBCF4\uC5EC\uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4.</p><h2 id="\u1107\u1162\u1100\u1167\u11BC-\u{1F9E9}" tabindex="-1"><a class="header-anchor" href="#\u1107\u1162\u1100\u1167\u11BC-\u{1F9E9}" aria-hidden="true">#</a> \uBC30\uACBD \u{1F9E9}</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),p=a("p",null,"\uC2E4\uC2DC\uAC04\uC73C\uB85C \uC0AC\uC6A9\uC790\uC758 \uCE5C\uAD6C \uD53C\uB4DC\uB97C \uC5C5\uB370\uC774\uD2B8\uD558\uB294 \uC6F9 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uB9CC\uB4E4\uACE0 \uC2F6\uC5C8\uC5B4\uC694. \uD398\uC774\uC9C0\uB97C \uB2E4\uC2DC \uB80C\uB354\uB9C1\uD560 \uD544\uC694 \uC5C6\uC774 \uC2E4\uC2DC\uAC04 \uB370\uC774\uD130 \uC804\uC1A1\uC744 \uAC00\uB2A5\uD558\uAC8C \uD558\uAE30 \uC704\uD574 \uC6F9\uC18C\uCF13 \uD1B5\uC2E0 \uD504\uB85C\uD1A0\uCF5C\uC744 \uD1B5\uD55C \uC5F0\uACB0 \uC124\uC815\uC774 \uD544\uC694\uD558\uB2E4\uB294 \uAC83\uC744 \uAE68\uB2EC\uC558\uC8E0.",-1),h=a("p",null,"\uC774 \uAE30\uC220\uC5D0 \uCC98\uC74C \uB450 \uBC1C\uC744 \uB4E4\uC5B4\uB193\uC558\uAE30 \uB54C\uBB38\uC5D0, \uBA3C\uC800 \uC774 \uC6F9\uC18C\uCF13 \uC5F0\uACB0 \uBC29\uBC95\uC744 \uC775\uD788\uAE30 \uC704\uD574 \uD070 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uC801\uC6A9\uD558\uAE30 \uC804\uC5D0 \uC791\uC740 \uC571\uC744 \uBA3C\uC800 \uB9CC\uB4E4\uC5B4 \uBCF4\uAE30\uB85C \uACB0\uC2EC\uD588\uC5B4\uC694. \uADF8\uB9AC\uACE0 \uC774\uBC88 \uD29C\uD1A0\uB9AC\uC5BC\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uAC04\uB2E8\uD55C \uC571\uC774\uC5D0\uC694.",-1),_=a("p",null,"\uC774 \uC77C\uC744 \uC2DC\uC791\uD558\uBA74\uC11C, Flask\uC640 React \uAC04\uC758 \uD2B9\uC815 \uC5F0\uACB0 \uC124\uC815\uC744 \uB9CC\uB4DC\uB294 \uAC83\uC774 \uD63C\uB780\uC2A4\uB7FD\uACE0 \uC5B4\uB824\uC6E0\uC5B4\uC694. \uC8FC\uB85C \uC774\uC720\uB294 \uAC01\uAC01 \uB2E4\uB978 \uC6D0\uBCF8\uC5D0\uC11C \uC2E4\uD589\uB418\uAE30 \uB54C\uBB38\uC774\uC5C8\uC8E0 (Flask\uB294 \uD3EC\uD2B8 5000\uC5D0\uC11C, React\uB294 \uD3EC\uD2B8 3000\uC5D0\uC11C). React + Flask\uB97C \uC6F9\uC18C\uCF13\uACFC \uD568\uAED8 \uC124\uC815\uD558\uB294 \uC88B\uC740 \uC628\uB77C\uC778 \uC790\uC2B5\uC11C\uB4E4\uC744 \uCC3E\uC558\uC9C0\uB9CC, \uADF8 \uC911 \uD558\uB098\uB3C4 \uC644\uC804\uD788 \uB3D9\uC791\uD558\uC9C0 \uC54A\uC558\uC5B4\uC694.",-1),b=a("p",null,"\uB9CE\uC740 \uC2DC\uD589\uCC29\uC624 \uB05D\uC5D0, \uC774 \uD504\uB808\uC784\uC6CC\uD06C\uB97C \uC0AC\uC6A9\uD574 \uC6F9\uC18C\uCF13 \uC5F0\uACB0\uC744 \uC791\uB3D9\uC2DC\uD0AC \uC218 \uC788\uC5C8\uB2F5\uB2C8\uB2E4. \uC774\uC81C \uB098\uB294 \uB2E4\uB978 \uC0AC\uB78C\uB4E4\uC774 Flask+React \uC571\uC744 \uC6F9\uC18C\uCF13\uC73C\uB85C \uAD6C\uCD95\uD558\uB824\uB294 \uBD84\uB4E4\uC744 \uB3C4\uC640\uC8FC\uAE30 \uC704\uD574 \uB0B4 \uB2E8\uACC4\uB4E4\uC744 \uACF5\uC720\uD558\uB824\uACE0 \uD574\uC694. \uAD6C\uCCB4\uC801\uC73C\uB85C, socket.io \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC11C\uBC84\uC640 \uD074\uB77C\uC774\uC5B8\uD2B8 \uAC04 \uC11C\uB85C \uB4E3\uACE0 \uB9D0\uD560 \uC218 \uC788\uB294 \uBC29\uBC95\uC744 \uBCF4\uC5EC\uB4DC\uB9B4 \uAC70\uC608\uC694. \uC774\uB97C \uD1B5\uD574 \uB2E4\uB978 \uC0AC\uC6A9\uC790\uB4E4\uC774 \uC2E4\uC2DC\uAC04\uC73C\uB85C \uCC44\uD305\uD560 \uC218 \uC788\uB294 \uAC04\uB2E8\uD55C \uBA54\uC2DC\uC9D5 \uC571\uC744 \uB9CC\uB4E4\uC5B4 \uBCFC \uAC70\uC608\uC694.",-1),f=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),g=d('<p>\uBAA8\uB4E0 \uCF54\uB4DC\uB97C \uB2E4\uC6B4\uB85C\uB4DC\uD558\uB824\uBA74 GitHub \uC800\uC7A5\uC18C\uB97C \uBC29\uBB38\uD574\uC8FC\uC138\uC694.</p><h2 id="\u1100\u1175\u1109\u116E\u11AF-\u1109\u1173\u1110\u1162\u11A8-\u{1F4DA}" tabindex="-1"><a class="header-anchor" href="#\u1100\u1175\u1109\u116E\u11AF-\u1109\u1173\u1110\u1162\u11A8-\u{1F4DA}" aria-hidden="true">#</a> \uAE30\uC220 \uC2A4\uD0DD \u{1F4DA}</h2><h2 id="\u110B\u1162\u11B8-\u1103\u1166\u1106\u1169-\u{1F4DF}" tabindex="-1"><a class="header-anchor" href="#\u110B\u1162\u11B8-\u1103\u1166\u1106\u1169-\u{1F4DF}" aria-hidden="true">#</a> \uC571 \uB370\uBAA8 \u{1F4DF}</h2><p>\uC544\uB798 \uADF8\uB9BC 1\uC744 \uBCF4\uBA74, Google Chrome \uBE0C\uB77C\uC6B0\uC800(\uC67C\uCABD)\uC640 Firefox \uBE0C\uB77C\uC6B0\uC800(\uC624\uB978\uCABD)\uAC00 \uC571\uC744 \uC2E4\uD589 \uC911\uC785\uB2C8\uB2E4. HTTP \uD1B5\uC2E0\uC73C\uB85C \uD45C\uC2DC\uB41C \uC0C1\uC790\uC5D0\uB294 \uC11C\uBC84\uB85C\uC758 HTTP \uC694\uCCAD\uC73C\uB85C\uBD80\uD130 \uAC00\uC838\uC628 \uBE68\uAC04 \uD14D\uC2A4\uD2B8\uAC00 \uD398\uC774\uC9C0 \uB85C\uB4DC\uC2DC \uB80C\uB354\uB9C1\uB429\uB2C8\uB2E4. WebSocket \uD1B5\uC2E0\uC73C\uB85C \uD45C\uC2DC\uB41C \uC0C1\uC790\uC5D0\uB294 \uC6F9\uC18C\uCF13\uC744 \uC774\uC6A9\uD574 \uB450 \uC0AC\uC6A9\uC790 \uAC04\uC5D0 \uC774\uB8E8\uC5B4\uC9C0\uB294 \uC2E4\uC2DC\uAC04 \uCC44\uD305 \uD1B5\uC2E0\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),y=a("p",null,"\uC0AC\uC6A9\uC790\uAC00 \uBA54\uC2DC\uC9C0\uB97C \uBCF4\uB0B4\uBA74 \uC571\uC744 \uC2E4\uD589 \uC911\uC778 \uBAA8\uB4E0 \uC0AC\uC6A9\uC790\uAC00 \uC11C\uBC84\uC5D0\uC11C \uC218\uB3D9\uC73C\uB85C \uC694\uCCAD\uD558\uC9C0 \uC54A\uC544\uB3C4 \uC989\uC2DC \uBA54\uC2DC\uC9C0\uB97C \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC544\uB798 GIF\uC5D0\uC11C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),k=a("p",null,[a("img",{src:"https://miro.medium.com/v2/resize:fit:1400/1*wTl4cZd1i_W5fODidlsasw.gif",alt:"GIF"})],-1),m=a("h2",{id:"flask-\u2192-\u1109\u1165\u1107\u1165-\u1109\u1165\u11AF\u110C\u1165\u11BC-\u{1F4E1}",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#flask-\u2192-\u1109\u1165\u1107\u1165-\u1109\u1165\u11AF\u110C\u1165\u11BC-\u{1F4E1}","aria-hidden":"true"},"#"),t(" Flask \u2192 \uC11C\uBC84 \uC124\uC815 \u{1F4E1}")],-1),w=a("p",null,"\uD50C\uB77C\uC2A4\uD06C \uC11C\uBC84.py \uD30C\uC77C\uC744 \uC124\uC815\uD558\uACE0, \uC774 \uD30C\uC77C\uC758 \uAC01 \uC139\uC158\uC744 \uC790\uC138\uD788 \uC0B4\uD3B4\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.",-1),x=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),v=a("p",null,"\uC8FC\uC694 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC778 flask, flask_socketio \uBC0F flask_cors\uB97C \uC124\uCE58\uD558\uACE0 \uAC00\uC838\uC640\uC57C \uD569\uB2C8\uB2E4. \uC774\uB294 \uC544\uB798 \uADF8\uB9BC 2\uC5D0\uC11C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4(GitHub \uC800\uC7A5\uC18C\uC758 requirements.txt\uC5D0\uC11C \uBAA8\uB4E0 \uB77C\uC774\uBE0C\uB7EC\uB9AC \uBC84\uC804\uC744 \uD655\uC778\uD558\uC138\uC694). \uB610\uD55C eventlet\uC744 \uC124\uCE58\uD588\uC9C0\uB9CC \uC571\uC744 \uC2E4\uD589\uD560 \uB54C flask-socketio\uAC00 \uC790\uB3D9\uC73C\uB85C \uAC10\uC9C0\uD558\uAE30 \uB54C\uBB38\uC5D0 \uAC00\uC838\uC62C \uD544\uC694\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.",-1),S=a("p",null,"\uADF8\uB9BC 3\uC5D0\uC11C \uBCFC \uC218 \uC788\uB4EF\uC774, flask \uC571\uC758 \uC778\uC2A4\uD134\uC2A4\uB97C \uC0DD\uC131\uD558\uACE0 \uBE44\uBC00 \uD0A4\uB97C \uD560\uB2F9\uD569\uB2C8\uB2E4. \uADF8\uB7F0 \uB2E4\uC74C CORS\uB97C \uCD08\uAE30\uD654\uD558\uACE0 \uC571\uC744 \uC804\uB2EC\uD558\uC5EC Cross-Origin Resource Sharing\uC744 \uD5C8\uC6A9\uD569\uB2C8\uB2E4. \uB610\uD55C \uBAA8\uB4E0 \uCD9C\uCC98\uC640\uC758 \uC571 \uACF5\uC720\uB97C \uD5C8\uC6A9\uD558\uB3C4\uB85D \uB9AC\uC18C\uC2A4 \uB9E4\uAC1C\uBCC0\uC218\uB97C \uC124\uC815\uD588\uC2B5\uB2C8\uB2E4. \uB9C8\uC9C0\uB9C9\uC73C\uB85C, \uC571\uC744 \uC804\uB2EC\uD558\uACE0 \uBAA8\uB4E0 \uCD9C\uCC98 '*'\uC5D0 \uB300\uD574 CORS\uB97C \uD5C8\uC6A9\uD560 \uB9E4\uAC1C\uBCC0\uC218\uB97C \uC804\uB2EC\uD558\uB294 SocketIO\uC758 \uC778\uC2A4\uD134\uC2A4\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4.",-1),R=a("p",null,"\uADF8\uB9BC 4\uC5D0\uC11C\uB294 \uC77C\uBC18 flask route\uC640 \uD074\uB77C\uC774\uC5B8\uD2B8\uC640 \uD1B5\uC2E0\uD558\uAE30 \uC704\uD55C \uBA87 \uAC00\uC9C0 \uC11C\uBC84 \uCE21 \uC774\uBCA4\uD2B8 \uD578\uB4E4\uB7EC\uB97C \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),F=a("p",null,'\uB0B4\uAC00 \uC124\uC815\uD55C \uB8E8\uD2B8 @app.route("/http-call") \uD558\uB098\uB9CC \uC124\uC815\uD558\uC5EC, \uC571\uC774 \uD074\uB77C\uC774\uC5B8\uD2B8\uC5D0\uC11C \uC2DC\uC791\uB41C \uC815\uADDC HTTP \uD638\uCD9C \uBC0F \uC11C\uBC84\uB85C\uBD80\uD130\uC758 \uC751\uB2F5\uC744 \uCC98\uB9AC\uD560 \uC218 \uC788\uC74C\uC744 \uBCF4\uC5EC\uC90D\uB2C8\uB2E4. \uB610\uD55C WebSocket\uC744 \uD1B5\uD55C \uC9C0\uC18D\uC801\uC778 \uD1B5\uC2E0\uB3C4 \uCC98\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.',-1),C=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),T=a("p",null,"socket.io\uB97C \uC0AC\uC6A9\uD558\uBA74 \uBA54\uC2DC\uC9C0\uAC00 \uC774\uBCA4\uD2B8\uB85C \uD074\uB77C\uC774\uC5B8\uD2B8\uC640 \uC11C\uBC84 \uC591\uCABD\uC5D0\uC11C \uBC1B\uC544\uC9C0\uBBC0\uB85C \uC11C\uBC84\uB294 \uC774\uB7EC\uD55C \uC774\uBCA4\uD2B8\uC5D0 \uB300\uD55C \uD578\uB4E4\uB7EC\uB97C \uB4F1\uB85D\uD574\uC57C \uD569\uB2C8\uB2E4. \uC989, @socketio.on()\uC744 \uC0AC\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4. \uC774\uBCA4\uD2B8 \uD578\uB4E4\uB7EC \uB0B4\uC5D0\uC11C\uB294 \uD074\uB77C\uC774\uC5B8\uD2B8\uAC00 \uD574\uB2F9 \uD2B9\uC815 \uC774\uB984 \uC544\uB798\uC758 \uBA54\uC2DC\uC9C0\uB97C \uC218\uC2E0\uD560 \uC218 \uC788\uB3C4\uB85D \uB300\uAE30\uD560 \uC774\uBCA4\uD2B8\uC758 \uC774\uB984\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.",-1),E=a("p",null,'\uC774 \uC608\uC2DC\uC5D0\uC11C\uB294 "connect"\uB77C\uB294 \uC774\uBCA4\uD2B8 \uC774\uB984\uC774 \uC0AC\uC6A9\uC790\uAC00 \uC5F0\uACB0\uB420 \uB54C \uB300\uAE30\uD558\uAC8C \uB429\uB2C8\uB2E4. \uADF8\uB7F0 \uB2E4\uC74C \uC0C8 \uC0AC\uC6A9\uC790\uAC00 \uC5F0\uACB0\uB418\uC5C8\uB2E4\uB294 \uBA54\uC2DC\uC9C0\uB97C \uD604\uC7AC \uC5F0\uACB0\uB41C \uBAA8\uB4E0 \uD074\uB77C\uC774\uC5B8\uD2B8\uC5D0 \uB2E4\uC2DC \uBCF4\uB0C5\uB2C8\uB2E4.',-1),G=a("p",null,'"data"\uB77C\uB294 \uC774\uBCA4\uD2B8 \uC774\uB984\uC740 \uC0AC\uC6A9\uC790\uAC00 \uC81C\uCD9C\uD558\uB294 \uBA54\uC2DC\uC9C0\uB97C \uB300\uAE30\uD569\uB2C8\uB2E4. \uC11C\uBC84\uAC00 \uBA54\uC2DC\uC9C0\uB97C \uBC1B\uC73C\uBA74 \uD574\uB2F9 \uBA54\uC2DC\uC9C0\uB97C \uC11C\uBC84\uC5D0 \uC788\uB294 \uBAA8\uB4E0 \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uB2E4\uC2DC \uC804\uC1A1\uD569\uB2C8\uB2E4.',-1),H=a("p",null,'\uB9C8\uC9C0\uB9C9\uC73C\uB85C "disconnect"\uB77C\uB294 \uC774\uBCA4\uD2B8 \uC774\uB984\uC740 \uC0AC\uC6A9\uC790\uAC00 \uC11C\uBC84\uC640 \uC5F0\uACB0\uC744 \uD574\uC81C\uD560 \uB54C \uB300\uAE30\uD558\uAC8C \uB418\uBA70 \uC0AC\uC6A9\uC790\uAC00 \uC5F0\uACB0\uC744 \uD574\uC81C\uD588\uB2E4\uB294 \uBA54\uC2DC\uC9C0\uB97C \uBAA8\uB4E0 \uC0AC\uC6A9\uC790\uC5D0 \uB2E4\uC2DC \uBCF4\uB0C5\uB2C8\uB2E4.',-1),W=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),I=a("p",null,"\uCC38\uACE0: \uC774\uBCA4\uD2B8\uBA85\uC740 \uC0AC\uC6A9\uC790 \uC815\uC758 \uC774\uB984\uC77C \uC218 \uC788\uC73C\uBA70 JSON\uACFC \uAC19\uC740 \uB2E4\uC591\uD55C \uB370\uC774\uD130 \uC720\uD615\uC744 \uCC98\uB9AC\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.",-1),O=a("p",null,"\uC11C\uBC84\uC758 \uCD5C\uC885 \uC124\uC815\uC740 \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC2E4\uD589\uD558\uB294 \uBC29\uC2DD\uC785\uB2C8\uB2E4. \uC544\uB798 \uADF8\uB9BC 5\uB97C \uCC38\uC870\uD558\uC138\uC694. \uC18C\uCF13.io \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uC0AC\uC6A9\uD558\uC5EC \uD50C\uB77C\uC2A4\uD06C \uC571\uC744 \uC2E4\uD589\uD558\uB824\uBA74 \uC77C\uBC18\uC801\uC778 app.run() \uB300\uC2E0\uC5D0 socketio.run()\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC18C\uCF13\uC778\uC2A4\uD134\uC2A4\uB97C \uC2E4\uD589\uD574\uC57C \uD569\uB2C8\uB2E4.",-1),B=a("h2",{id:"react-\u2192-\u110F\u1173\u11AF\u1105\u1161\u110B\u1175\u110B\u1165\u11AB\u1110\u1173-\u1109\u1165\u11AF\u110C\u1165\u11BC-\u{1F4BB}",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#react-\u2192-\u110F\u1173\u11AF\u1105\u1161\u110B\u1175\u110B\u1165\u11AB\u1110\u1173-\u1109\u1165\u11AF\u110C\u1165\u11BC-\u{1F4BB}","aria-hidden":"true"},"#"),t(" React \u2192 \uD074\uB77C\uC774\uC5B8\uD2B8 \uC124\uC815 \u{1F4BB}")],-1),N=a("p",null,'\uD074\uB77C\uC774\uC5B8\uD2B8 \uCE21\uC5D0\uC11C\uB294 package.json \uD30C\uC77C\uC5D0\uC11C "proxy": "http://localhost:5001/"\uB85C \uD504\uB85D\uC2DC\uB97C \uC124\uC815\uD588\uC2B5\uB2C8\uB2E4. \uC544\uB798 \uADF8\uB9BC 6\uC640 \uAC19\uC774 \uC124\uC815\uD558\uC138\uC694.',-1),D=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),P=a("p",null,"\uC544\uB798 \uADF8\uB9BC 7\uC5D0 \uD45C\uC2DC\uB41C App.js \uD30C\uC77C\uC5D0\uC11C\uB294 socket.io-client \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC5D0\uC11C {io}\uB97C \uAC00\uC838\uC640\uC11C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uADF8\uB7F0 \uB2E4\uC74C useEffect \uB0B4\uBD80\uC5D0\uC11C io\uB97C \uC0AC\uC6A9\uD558\uC5EC \uCC44\uD305 \uAE30\uB2A5\uC744 \uCF1C\uB294 \uBC84\uD2BC\uC744 \uD074\uB9AD\uD560 \uB54C \uC11C\uBC84\uC640\uC758 \uC6F9\uC18C\uCF13 \uC5F0\uACB0\uC744 \uCD08\uAE30\uD654\uD569\uB2C8\uB2E4.",-1),V=a("p",null,'useEffect \uB0B4\uBD80\uC5D0\uC11C io \uC5F0\uACB0\uC758 \uC778\uC2A4\uD134\uC2A4\uB97C \uB9CC\uB4E4\uACE0 \uBCC0\uC218 socket\uC5D0 \uC124\uC815\uD569\uB2C8\uB2E4. io\uB294 \uB85C\uCEEC\uD638\uC2A4\uD2B8 \uC11C\uBC84\uB97C \uB9E4\uAC1C\uBCC0\uC218 "localhost:5001/"\uB85C \uC0AC\uC6A9\uD558\uACE0, \uC804\uC1A1 \uBC29\uBC95(\uC774 \uACBD\uC6B0 WebSocket) \uBC0F React\uC758 \uD3EC\uD2B8 3000\uC744 \uC2DC\uC791\uC810\uC73C\uB85C \uD558\uB294 cors \uB9E4\uAC1C\uBCC0\uC218 \uC124\uC815\uC744 \uCDE8\uD569\uB2C8\uB2E4. \uADF8\uB7F0 \uB2E4\uC74C\uC774 \uC18C\uCF13 \uC778\uC2A4\uD134\uC2A4\uB97C \uC571 \uC804\uCCB4\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB3C4\uB85D \uB85C\uCEEC \uC0C1\uD0DC\uC5D0 \uC124\uC815\uD558\uAE30 \uC704\uD574 setSocketInstance\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4.',-1),j=a("p",null,'\uB610\uD55C, useEffect \uB0B4\uBD80\uC5D0\uB294 \uC774\uBCA4\uD2B8 \uC774\uBC0B\uD130 \uBC29\uBC95\uC778 socket.on\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uC774\uBC0B\uD130\uC5D0\uB294 \uCCAB \uBC88\uC9F8 \uB9E4\uAC1C\uBCC0\uC218\uB85C \uC774\uBCA4\uD2B8 "connect"\uB97C \uC804\uB2EC\uD558\uC5EC \uC0C8\uB85C\uC6B4 \uC0AC\uC6A9\uC790\uAC00 \uC5F0\uACB0\uB418\uC5C8\uC74C\uC744 \uC11C\uBC84\uC5D0 \uC54C\uB9BD\uB2C8\uB2E4. \uB610\uD55C \uC11C\uBC84\uC5D0\uC11C \uBC1B\uC740 \uB370\uC774\uD130\uB97C \uCC98\uB9AC\uD558\uB294 \uCF5C\uBC31 \uD568\uC218\uAC00 \uB450 \uBC88\uC9F8 \uB9E4\uAC1C\uBCC0\uC218\uB85C \uC804\uB2EC\uB429\uB2C8\uB2E4.',-1),L=a("p",null,'useEffect \uB0B4\uBD80\uC5D0\uB294 "disconnected"\uC778 \uC0AC\uC6A9\uC790\uB4E4\uC744 \uB4E3\uAE30 \uC704\uD55C \uB2E4\uB978 \uC774\uBCA4\uD2B8 \uC774\uBC0B\uD130\uB3C4 \uCD94\uAC00\uD569\uB2C8\uB2E4. \uC774\uB294 \uC0AC\uC6A9\uC790\uAC00 \uC5F0\uACB0\uC744 \uD574\uC81C\uD560 \uB54C \uC11C\uBC84\uC640 \uB2E4\uB978 \uBAA8\uB4E0 \uD074\uB77C\uC774\uC5B8\uD2B8\uC5D0 \uC54C\uB9AC\uAC8C \uB429\uB2C8\uB2E4.',-1),q=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),z=a("p",null,"useEffect\uC758 \uB05D\uC5D0, \uCC44\uD305\uC774 \uB2EB\uD788\uACE0 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uC5B8\uB9C8\uC6B4\uD2B8\uB420 \uB54C WebSocket \uC5F0\uACB0\uC744 \uC644\uC804\uD788 \uB2EB\uAE30 \uC704\uD574 cleanup() \uD568\uC218\uB97C \uD3EC\uD568\uD558\uB294 return\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4.",-1),A=a("p",null,[t("\uC6B0\uB9AC\uB294 socket \uC5F0\uACB0 \uC778\uC2A4\uD134\uC2A4\uB97C \uC0C1\uD0DC socketInstance\uC5D0 \uC800\uC7A5\uD588\uAE30 \uB54C\uBB38\uC5D0 \uC774\uB97C \uC571\uC5D0\uC11C \uAC00\uC9C0\uACE0 \uC788\uB294 \uBAA8\uB4E0 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0 props\uC73C\uB85C \uC804\uB2EC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC6B0\uB9AC\uC758 \uACBD\uC6B0\uC5D0\uB294 \uC18C\uCF13 \uC778\uC2A4\uD134\uC2A4\uB97C \uCC44\uD305\uC744 \uAD6C\uCD95\uD560 "),a("code",null,"WebSocketCall/"),t("\uCEF4\uD3EC\uB10C\uD2B8\uB85C \uC804\uB2EC\uD558\uACE0 \uC2F6\uC2B5\uB2C8\uB2E4.")],-1),J=a("p",null,[a("code",null,"WebSocketCall/"),t("\uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC758 Figure 8\uC5D0 \uD45C\uC2DC\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC6B0\uB9AC \uC571\uC758 \uCC44\uD305 \uAE30\uB2A5\uC744 \uAC16\uACE0 \uC788\uC2B5\uB2C8\uB2E4.")],-1),K=a("p",null,'\uB0B4\uBD80\uC5D0\uC11C ahandleText() \uD568\uC218\uB294 \uC0AC\uC6A9\uC790\uAC00 \uD14D\uC2A4\uD2B8 \uC0C1\uC790\uC5D0 \uD0C0\uC774\uD551\uD560 \uB54C \uBA54\uC2DC\uC9C0 \uC0C1\uD0DC\uB97C \uC5C5\uB370\uC774\uC774\uD2B8 \uD569\uB2C8\uB2E4. \uC0AC\uC6A9\uC790\uAC00 \uC81C\uCD9C \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uBA74 handleSubmit() \uD568\uC218\uAC00 \uD638\uCD9C\uB418\uC5B4 \uC18C\uCF13.emit\uC744 \uC0AC\uC6A9\uD558\uC5EC \uBA54\uC2DC\uC9C0\uB97C event "data"\uB85C \uC11C\uBC84\uC5D0 \uBCF4\uB0B4\uACE0 \uB450 \uBC88\uC9F8 \uB9E4\uAC1C\uBCC0\uC218\uB85C \uBA54\uC2DC\uC9C0 \uC0C1\uD0DC\uB97C \uC804\uB2EC\uD569\uB2C8\uB2E4. \uC11C\uBC84\uB294 \uADF8 \uBA54\uC2DC\uC9C0\uB97C \uC5F0\uACB0\uB41C \uBAA8\uB4E0 \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uB2E4\uC2DC \uBCF4\uB0C5\uB2C8\uB2E4.',-1),Y=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),Z=a("p",null,'\uC0AC\uC6A9\uC790\uAC00 \uC0C8\uB85C\uC6B4 \uBA54\uC2DC\uC9C0\uB97C \uBCF4\uB0BC \uB54C\uB9C8\uB2E4 \uBA54\uC2DC\uC9C0 \uAD6C\uC131 \uC694\uC18C\uB97C \uB80C\uB354\uB9C1\uD558\uACE0 \uC5C5\uB370\uC774\uD2B8\uD558\uB294 \uB370 useEffect\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. useEffect\uB294 \uC18C\uCF13\uACFC \uBA54\uC2DC\uC9C0\uB97C \uC885\uC18D\uC131 \uBC30\uC5F4\uC5D0 \uC0AC\uC6A9\uD558\uBBC0\uB85C \uD574\uB2F9 \uC885\uC18D\uC131 \uC911 \uD558\uB098\uAC00 \uC5C5\uB370\uC774\uD2B8\uB420 \uB54C \uBA54\uC2DC\uC9D5 \uAD6C\uC131 \uC694\uC18C\uAC00 \uB2E4\uC2DC \uB80C\uB354\uB9C1\uB429\uB2C8\uB2E4. \uADF8\uB7EC\uBA74 \uC0AC\uC6A9\uC790\uAC00 \uBA54\uC2DC\uC9C0\uB97C \uBC1B\uC744 \uC218 \uC788\uB294 "data" \uC774\uBCA4\uD2B8 \uB9AC\uC2A4\uB108\uAC00 \uD65C\uC131\uD654\uB429\uB2C8\uB2E4.',-1),M=a("h2",{id:"\u1100\u1167\u11AF\u1105\u1169\u11AB-\u{1F51A}",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u1100\u1167\u11AF\u1105\u1169\u11AB-\u{1F51A}","aria-hidden":"true"},"#"),t(" \uACB0\uB860 \u{1F51A}")],-1),Q=a("p",null,"\uBCF8 \uD29C\uD1A0\uB9AC\uC5BC\uC740 Flask\uC640 React\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC11C\uBC84\uC640 \uD074\uB77C\uC774\uC5B8\uD2B8\uAC00 \uC11C\uB85C \uB2E4\uB978 \uCD9C\uCC98\uC5D0\uC11C \uC791\uB3D9\uD560 \uB54C\uB3C4 \uC0C1\uD638 \uCCAD\uCDE8\uD558\uB3C4\uB85D\uD558\uC5EC \uC6F9\uC18C\uCF13 \uD1B5\uC2E0\uC744 \uD65C\uC6A9\uD558\uB294 \uC571\uC744 \uAD6C\uCD95\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),U=a("p",null,"\uC6F9\uC18C\uCF13 \uD1B5\uC2E0\uC744 \uD1B5\uD574 \uC2E4\uC2DC\uAC04 \uD53C\uB4DC, \uC2E4\uC2DC\uAC04 \uB370\uC774\uD130 \uC2DC\uAC01\uD654, \uC8FC\uC2DD \uAC00\uACA9 \uC9C0\uD45C, \uBA54\uC2DC\uC9D5 \uC571, \uC704\uCE58 \uAE30\uBC18 \uC571 \uB4F1\uACFC \uAC19\uC740 \uD765\uBBF8\uB85C\uC6B4 \uC571 \uAE30\uB2A5\uC744 \uAD6C\uCD95\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),X=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),$=d('<p>\uC774 \uD29C\uD1A0\uB9AC\uC5BC\uC774 \uC720\uC6A9\uD588\uAE30\uB97C \uBC14\uB78D\uB2C8\uB2E4. \uAD81\uAE08\uD55C \uC810\uC774 \uC788\uAC70\uB098 LinkedIn\uC744 \uD1B5\uD574 \uC800\uC5D0\uAC8C \uC5F0\uB77D\uD558\uB824\uBA74 \uB313\uAE00\uC744 \uB0A8\uACA8\uC8FC\uC138\uC694. \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uC5D4\uC9C0\uB2C8\uC5B4\uB9C1\uC758 \uC2E0\uC138\uC778\uB370\uC694, \uD53C\uB4DC\uBC31\uC774\uB098 \uAC74\uC124\uC801\uC778 \uCF54\uBA58\uD2B8\uAC00 \uC788\uC73C\uC2DC\uBA74 \uC54C\uB824\uC8FC\uC2DC\uBA74 \uAC10\uC0AC\uD558\uACA0\uC2B5\uB2C8\uB2E4 \u{1F60A}. \uC77D\uC5B4\uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4.</p><h2 id="repo-\u{1F5C4}\uFE0F" tabindex="-1"><a class="header-anchor" href="#repo-\u{1F5C4}\uFE0F" aria-hidden="true">#</a> Repo \u{1F5C4}\uFE0F</h2><p>\uC5B4\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uC804\uCCB4 \uCF54\uB4DC\uB97C \uB2E4\uC6B4\uB85C\uB4DC\uD558\uACE0 \uBCF4\uACE0 \uC2E4\uD589\uD558\uAE30 \uC704\uD574 \uC544\uB798 GitHub \uC800\uC7A5\uC18C\uB97C \uBC29\uBB38\uD574\uC8FC\uC138\uC694:</p><h2 id="connect-with-me-\u{1F30E}" tabindex="-1"><a class="header-anchor" href="#connect-with-me-\u{1F30E}" aria-hidden="true">#</a> Connect with me \u{1F30E}</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),aa=a("h2",{id:"\u1103\u1169\u110B\u116E\u11B7\u110B\u1175-\u1103\u116C\u1102\u1173\u11AB-\u110C\u1161\u1105\u116D",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u1103\u1169\u110B\u116E\u11B7\u110B\u1175-\u1103\u116C\u1102\u1173\u11AB-\u110C\u1161\u1105\u116D","aria-hidden":"true"},"#"),t(" \uB3C4\uC6C0\uC774 \uB418\uB294 \uC790\uB8CC")],-1);function ta(ea,sa){return e(),n("div",null,[r,(e(),s(l("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),p,h,_,b,f,(e(),s(l("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),g,(e(),s(l("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),y,k,m,w,x,(e(),s(l("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),v,S,R,F,C,(e(),s(l("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),T,E,G,H,W,(e(),s(l("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),I,O,B,N,D,(e(),s(l("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),P,V,j,L,q,(e(),s(l("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),z,A,J,K,Y,(e(),s(l("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),Z,M,Q,U,X,(e(),s(l("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),$,(e(),s(l("script"),null,{default:o(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),aa])}var ua=i(u,[["render",ta],["__file","index.html.vue"]]);export{ua as default};
