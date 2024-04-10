import{_ as o}from"./app.63e06a35.js";import{l as i,m as r,E as l,G as t,p as e,Y as s,K as d,C as a}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var n="/assets/BootstrapaSaaSProjectinMinuteswithNextjsSupabaseandStripe_0.0de3f7f9.png",p="/assets/BootstrapaSaaSProjectinMinuteswithNextjsSupabaseandStripe_1.e3c536b5.png",u="/assets/BootstrapaSaaSProjectinMinuteswithNextjsSupabaseandStripe_2.c240097a.png",c="/assets/BootstrapaSaaSProjectinMinuteswithNextjsSupabaseandStripe_3.0d78521c.png",h="/assets/BootstrapaSaaSProjectinMinuteswithNextjsSupabaseandStripe_4.c23dd366.png";const _={},b=d('<p><img src="'+n+'" alt="Bootstrap a SaaS with a modern tech stack built to move quickly"></p><h1 id="tl-dr" tabindex="-1"><a class="header-anchor" href="#tl-dr" aria-hidden="true">#</a> TL;DR</h1><h1 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h1><p>Bootstrap a SaaS with a modern tech stack built to move quickly. In just a few minutes you can deploy a SaaS project that includes:</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),S=d('<ul><li>Supabase \u2014 \uD3EC\uC2A4\uD2B8\uADF8\uB808\uC2A4 \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uBC0F \uC0AC\uC6A9\uC790 \uC778\uC99D</li><li>Stripe \u2014 \uCCB4\uD06C\uC544\uC6C3, \uAD6C\uB3C5 \uBC0F \uACE0\uAC1D \uD3EC\uD11C</li><li>Tailwindcss \u2014 CSS \uD504\uB808\uC784\uC6CC\uD06C</li><li>shadcn/ui \u2014 \uC0AC\uC804 \uAD6C\uCD95 \uAC00\uB2A5\uD55C \uC811\uADFC\uC131 \uAD6C\uC131 \uC694\uC18C</li><li>\uC6F9\uD6C5\uC744 \uC0AC\uC6A9\uD558\uC5EC Stripe\uC640 Supabase\uB97C \uC790\uB3D9\uC73C\uB85C \uB3D9\uAE30\uD654</li><li>\uC81C\uD488 \uB370\uC774\uD130\uB97C \uBD80\uD2B8\uC2A4\uD2B8\uB7A9\uD558\uB294 Stripe \uD53D\uC2A4\uCC98</li><li>\uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC2A4\uD0A4\uB9C8\uB97C \uBD80\uD2B8\uC2A4\uD2B8\uB7A9\uD558\uACE0 \uAD00\uB9AC\uD558\uAE30 \uC704\uD55C Supabase \uB9C8\uC774\uADF8\uB808\uC774\uC158</li><li>\uBC18\uC751\uD615, \uC131\uB2A5 \uBC0F \uC811\uADFC\uC131\uC774 \uC6B0\uC218\uD55C \uC0AC\uC804 \uAD6C\uCD95\uB41C \uD398\uC774\uC9C0</li><li>\uC560\uB2C8\uBA54\uC774\uC158 \uBC84\uD2BC \uD14C\uB450\uB9AC! \uC774\uC81C \uB2F9\uC2E0\uC758 \uC0AC\uC774\uD2B8\uB294 \uBA4B\uC838\uBCF4\uC77C \uC218 \uC788\uC5B4\uC694! \uB108\uB4DC\uB4E4\uC774 \uB108\uBB34 \uB2A6\uAC8C \uCD9C\uC2DC\uD588\uB2E4\uACE0 \uB9D0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4 \u{1F604}</li></ul><p><img src="'+p+'" alt=""></p><h1 id="\u1109\u1175\u110C\u1161\u11A8\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1109\u1175\u110C\u1161\u11A8\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uC2DC\uC791\uD558\uAE30</h1><h2 id="\u1103\u1161\u11AB\u1100\u1168-1-supabase-\u1109\u1165\u11AF\u110C\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u1100\u1168-1-supabase-\u1109\u1165\u11AF\u110C\u1165\u11BC" aria-hidden="true">#</a> \uB2E8\uACC4 1: Supabase \uC124\uC815</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),g=d('<ul><li>supabase.com\uC73C\uB85C \uC774\uB3D9\uD558\uC5EC \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD558\uC138\uC694.</li><li>Project Settings \u2192 Database \u2192 Database password\uB85C \uC774\uB3D9\uD558\uC5EC \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uBE44\uBC00\uBC88\uD638\uB97C \uC7AC\uC124\uC815\uD558\uACE0 \uC0C8 \uBE44\uBC00\uBC88\uD638\uB97C \uC0DD\uC131\uD558\uC138\uC694. (\uC774\uBBF8 \uC0DD\uC131\uD55C \uBE44\uBC00\uBC88\uD638\uAC00 \uC788\uC9C0\uB9CC, CLI\uC5D0\uC11C \uD2B9\uC218 \uBB38\uC790\uB97C \uC0AC\uC6A9\uD55C \uBE44\uBC00\uBC88\uD638\uB97C \uC0AC\uC6A9\uD560 \uB54C \uBC1C\uC0DD\uD558\uB294 \uBC84\uADF8\uB97C \uD574\uACB0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4)</li><li>\uC774 \uBE44\uBC00\uBC88\uD638\uB97C \uC5B4\uB518\uAC00\uC5D0 \uC800\uC7A5\uD574 \uB450\uC138\uC694. \uC0C1\uC790\uB97C \uB2EB\uC73C\uBA74 \uBE44\uBC00\uBC88\uD638\uB97C \uD655\uC778\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.</li></ul><h2 id="\u1103\u1161\u11AB\u1100\u1168-2-stripe-\u1109\u1165\u11AF\u110C\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u1100\u1168-2-stripe-\u1109\u1165\u11AF\u110C\u1165\u11BC" aria-hidden="true">#</a> \uB2E8\uACC4 2: Stripe \uC124\uC815</h2><ul><li>stripe.com\uC73C\uB85C \uC774\uB3D9\uD558\uC5EC \uD504\uB85C\uC81D\uD2B8\uB97C \uC0DD\uC131\uD558\uC138\uC694.</li><li>Customer Portal Settings\uB85C \uC774\uB3D9\uD558\uC5EC Active test link \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uC138\uC694.</li></ul><h2 id="\u1103\u1161\u11AB\u1100\u1168-3-\u1107\u1162\u1111\u1169" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u1100\u1168-3-\u1107\u1162\u1111\u1169" aria-hidden="true">#</a> \uB2E8\uACC4 3: \uBC30\uD3EC</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),f=d('<ul><li>\uC774 \uB9C1\uD06C\uB97C \uD074\uB9AD\uD558\uC138\uC694: Vercel\uB85C \uBC30\uD3EC\uD558\uAE30</li><li>\uC591\uC2DD\uC5D0\uC11C \uC0C8\uB85C\uC6B4 \uC800\uC7A5\uC18C\uB97C \uC0DD\uC131\uD558\uACE0 Supabase \uD1B5\uD569\uC744 \uCD94\uAC00\uD558\uC138\uC694.</li><li>\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uD658\uACBD \uBCC0\uC218\uB97C \uCD94\uAC00\uD558\uC138\uC694. Stripe \uC6F9\uD6C5 \uC2DC\uD06C\uB9BF\uC5D0 \uC784\uC758\uC758 \uAC12\uB9CC \uB123\uC5B4\uC8FC\uC138\uC694. \uC6F9\uD6C5\uC744 \uAD6C\uC131\uD55C \uD6C4\uC5D0 \uC774 \uAC12\uC744 \uC5C5\uB370\uC774\uD2B8\uD560 \uAC83\uC785\uB2C8\uB2E4.</li><li>\uBC30\uD3EC\uB97C \uD074\uB9AD\uD558\uC138\uC694.</li><li>\uAE30\uB2E4\uB9AC\uB294 \uB3D9\uC548 \uC0C8 \uC800\uC7A5\uC18C\uB97C \uBCF5\uC81C\uD558\uACE0 \uCF54\uB4DC \uD3B8\uC9D1\uAE30\uC5D0\uC11C \uC5FD\uB2C8\uB2E4. \uADF8 \uD6C4 .env.local\uC774\uB77C\uB294 \uD30C\uC77C\uC744 \uB9CC\uB4E4\uC5B4\uC8FC\uC138\uC694. .env.local.example\uC758 \uB0B4\uC6A9\uC744 \uC774 \uD30C\uC77C\uC5D0 \uBCF5\uC0AC\uD558\uC5EC \uC62C\uBC14\uB978 \uAC12\uB4E4\uC744 \uCD94\uAC00\uD558\uC138\uC694. \uC704\uC5D0\uC11C \uCD94\uAC00\uD55C \uAC12\uACFC \uB3D9\uC77C\uD574\uC57C \uD569\uB2C8\uB2E4.</li></ul><p><img src="'+u+'" alt="\uC774\uBBF8\uC9C0"></p><h2 id="\u1103\u1161\u11AB\u1100\u1168-4-stripe-\u110B\u1170\u11B8\u1112\u116E\u11A8" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u1100\u1168-4-stripe-\u110B\u1170\u11B8\u1112\u116E\u11A8" aria-hidden="true">#</a> \uB2E8\uACC4 4: Stripe \uC6F9\uD6C5</h2><ul><li>\uBC30\uD3EC\uD55C \uD6C4 Vercel \uB300\uC2DC\uBCF4\uB4DC\uB85C \uC774\uB3D9\uD558\uC5EC Vercel URL\uC744 \uCC3E\uC73C\uC138\uC694.</li><li>\uB2E4\uC74C\uC73C\uB85C Stripe \uB300\uC2DC\uBCF4\uB4DC\uB85C \uC774\uB3D9\uD574\uC11C \uC0C1\uB2E8 \uB124\uBE44\uAC8C\uC774\uC158\uC5D0\uC11C \uAC1C\uBC1C\uC790\uB97C \uD074\uB9AD\uD558\uACE0 \uADF8 \uB2E4\uC74C \uC6F9\uD6C5 \uD0ED\uC744 \uD074\uB9AD\uD558\uC138\uC694.</li><li>\uC5D4\uB4DC\uD3EC\uC778\uD2B8\uB97C \uCD94\uAC00\uD558\uC138\uC694. Vercel URL \uB4A4\uC5D0 /api/webhooks\uC744 \uC785\uB825\uD558\uC138\uC694.</li><li>\uC774\uBCA4\uD2B8 \uC120\uD0DD\uC744 \uD074\uB9AD\uD558\uC138\uC694.</li><li>\uBAA8\uB4E0 \uC774\uBCA4\uD2B8 \uC120\uD0DD\uC744 \uCCB4\uD06C\uD558\uC138\uC694.</li><li>\uD398\uC774\uC9C0 \uC544\uB798\uB85C \uC2A4\uD06C\uB864\uD558\uC5EC \uC5D4\uB4DC\uD3EC\uC778\uD2B8 \uCD94\uAC00\uB97C \uD074\uB9AD\uD558\uC138\uC694.</li><li>\uC11C\uBA85 \uBE44\uBC00 \uD0A4\uB97C \uD655\uC778\uD558\uC5EC \uBCF5\uC0AC\uD558\uC138\uC694.</li><li>Vercel \uD504\uB85C\uC81D\uD2B8 \uC124\uC815\uC73C\uB85C \uC774\uB3D9\uD558\uC5EC \uD658\uACBD \uBCC0\uC218\uB97C \uC5C5\uB370\uC774\uD2B8\uD558\uC138\uC694.</li><li>\uC0C8\uB85C \uD68D\uB4DD\uD55C \uC6F9\uD6C5 \uC2DC\uD06C\uB9BF\uC73C\uB85C STRIPE_WEBHOOK_SECRET \uD658\uACBD \uBCC0\uC218\uC758 \uAC12\uC744 \uC5C5\uB370\uC774\uD2B8\uD558\uC138\uC694. \uC800\uC7A5\uC744 \uB20C\uB7EC\uC8FC\uC138\uC694.</li></ul><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),m=d('<h2 id="\u1103\u1161\u11AB\u1100\u1168-5-supabase-\u1106\u1161\u110B\u1175\u1100\u1173\u1105\u1166\u110B\u1175\u1109\u1167\u11AB-\u1109\u1175\u11AF\u1112\u1162\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u1100\u1168-5-supabase-\u1106\u1161\u110B\u1175\u1100\u1173\u1105\u1166\u110B\u1175\u1109\u1167\u11AB-\u1109\u1175\u11AF\u1112\u1162\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uB2E8\uACC4 5: Supabase \uB9C8\uC774\uADF8\uB808\uC774\uC158 \uC2E4\uD589\uD558\uAE30</h2><p>\uC774\uC81C \uCD08\uAE30 Supabase \uB9C8\uC774\uADF8\uB808\uC774\uC158\uC744 \uC2E4\uD589\uD558\uC5EC \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uD14C\uC774\uBE14\uC744 \uB9CC\uB4E4\uC5B4\uBD05\uC2DC\uB2E4.</p><ul><li>npx supabase login \uBA85\uB839\uC744 \uC2E4\uD589\uD558\uC138\uC694.</li><li>npx supabase init \uBA85\uB839\uC744 \uC2E4\uD589\uD558\uC138\uC694.</li><li>package.json \uD30C\uC77C\uC744 \uC5F4\uACE0 UPDATE_THIS_WITH_YOUR_SUPABASE_PROJECT_ID \uBB38\uC790\uC5F4\uC744 \uC0AC\uC6A9\uC790\uC758 Supabase \uD504\uB85C\uC81D\uD2B8 ID\uB85C \uAC01\uAC01 \uC5C5\uB370\uC774\uD2B8\uD558\uC138\uC694.</li><li>npm run supabase:link \uBA85\uB839\uC744 \uC2E4\uD589\uD558\uC138\uC694.</li><li>npm run migration:up \uBA85\uB839\uC744 \uC2E4\uD589\uD558\uC138\uC694.</li></ul><p>\u{1F4A5}\uC0C8\uB85C\uC6B4 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uAC00 \uC900\uBE44\uB418\uC5C8\uC2B5\uB2C8\uB2E4! \uC774\uC81C \uC2DC\uC791\uD574\uBD10\uC694.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),y=a("p",null,[a("img",{src:c,alt:"\uC774\uBBF8\uC9C0"})],-1),w=a("h2",{id:"\u1103\u1161\u11AB\u1100\u1168-6-stripe-fixture-\u1109\u1175\u11AF\u1112\u1162\u11BC",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u1103\u1161\u11AB\u1100\u1168-6-stripe-fixture-\u1109\u1175\u11AF\u1112\u1162\u11BC","aria-hidden":"true"},"#"),e(" \uB2E8\uACC4 6: Stripe Fixture \uC2E4\uD589")],-1),x=a("p",null,"Stripe fixtures\uB294 Stripe UI\uC5D0\uC11C \uAF2C\uC774\uC9C0 \uC54A\uACE0 \uC81C\uD488 \uC624\uD37C\uB9C1\uC744 \uAD6C\uC131\uD558\uB294 \uAC04\uD3B8\uD55C \uBC29\uBC95\uC785\uB2C8\uB2E4.",-1),v=a("ul",null,[a("li",null,"Stripe CLI\uB97C \uC124\uCE58\uD558\uC138\uC694. \uB9E5\uC5D0\uC11C\uB294 \uAC04\uB2E8\uD788 \uC2E4\uD589\uD558\uBA74 \uB429\uB2C8\uB2E4: brew install stripe/stripe-cli/stripe (Homebrew\uAC00 \uC788\uB2E4\uACE0 \uAC00\uC815\uD558\uBA70, \uC124\uCE58\uB418\uC5B4 \uC788\uC9C0 \uC54A\uB2E4\uBA74 \uC124\uCE58\uD558\uC138\uC694)"),a("li",null,"stripe fixtures ./stripe-fixtures.json \u2014 api-key UPDATE_THIS_WITH_YOUR_STRIPE_SK \uBA85\uB839\uC744 \uC2E4\uD589\uD558\uC138\uC694 (Stripe SK\uB85C \uBA85\uB839\uC5B4\uB97C \uC5C5\uB370\uC774\uD2B8\uD574\uC57C \uD569\uB2C8\uB2E4)")],-1),k=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),P=a("p",null,"\u{1F4A5} \uC0C8\uB85C\uC6B4 Stripe \uC81C\uD488\uC744 \uC0AC\uC6A9\uD560 \uC900\uBE44\uAC00 \uB418\uC5C8\uC2B5\uB2C8\uB2E4! \uADF8\uAC8C \uC544\uB2C8\uB77C, Stripe\uC5D0\uC11C \uBCC0\uACBD \uC0AC\uD56D\uC774 \uBC1C\uC0DD\uD558\uBA74 \uC6F9\uD6C5\uC774 \uBC30\uD3EC\uB41C API\uB97C \uD638\uCD9C\uD569\uB2C8\uB2E4. API \uD578\uB4E4\uB7EC\uB294 Stripe\uC5D0\uC11C \uBCC0\uACBD\uB41C \uB370\uC774\uD130\uB97C \uAC00\uC838\uC640 Supabase \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC640 \uB3D9\uAE30\uD654\uD569\uB2C8\uB2E4.",-1),T=a("p",null,[a("img",{src:h,alt:"\uC774\uBBF8\uC9C0"})],-1),j=a("h2",{id:"step-7-\u1106\u1161\u110C\u1175\u1106\u1161\u11A8-\u1103\u1161\u11AB\u1100\u1168",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#step-7-\u1106\u1161\u110C\u1175\u1106\u1161\u11A8-\u1103\u1161\u11AB\u1100\u1168","aria-hidden":"true"},"#"),e(" Step 7: \uB9C8\uC9C0\uB9C9 \uB2E8\uACC4")],-1),I=a("ul",null,[a("li",null,"\uCF54\uB4DC \uC5D0\uB514\uD130\uC5D0\uC11C UPDATE_THIS_\uB85C \uAC80\uC0C9\uD558\uACE0 .env.local.example\uC744 \uC81C\uC678\uD55C \uBAA8\uB4E0 \uC778\uC2A4\uD134\uC2A4\uB97C \uAD00\uB828 \uAC12\uC73C\uB85C \uC5C5\uB370\uC774\uD2B8\uD569\uB2C8\uB2E4."),a("li",null,"delete-me \uB514\uB809\uD1A0\uB9AC\uB97C \uC0AD\uC81C\uD558\uC138\uC694.")],-1),B=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),E=d('<h2 id="\u1103\u1161\u11AB\u1100\u1168-8-\u1112\u116A\u11A8\u110B\u1175\u11AB\u1112\u1162\u1107\u1169\u1109\u1166\u110B\u116D" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u1100\u1168-8-\u1112\u116A\u11A8\u110B\u1175\u11AB\u1112\u1162\u1107\u1169\u1109\u1166\u110B\u116D" aria-hidden="true">#</a> \uB2E8\uACC4 8: \uD655\uC778\uD574\uBCF4\uC138\uC694!</h2><p>\u{1F389} \uC798 \uD588\uC5B4\uC694! \uC774\uC81C Stripe \uB300\uC2DC \uBCF4\uB4DC\uC5D0\uC11C \uC81C\uD488\uC744 \uD655\uC778\uD560 \uC218 \uC788\uACE0, \uB3D9\uC77C\uD55C \uB370\uC774\uD130\uAC00 Supabase \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC5D0\uB3C4 \uCC44\uC6CC\uC84C\uC744 \uAC83\uC785\uB2C8\uB2E4. \uC774\uC81C \uBAA8\uB4E0 \uAC83\uC744 \uD14C\uC2A4\uD2B8\uD574 \uBCF4\uACA0\uC2B5\uB2C8\uB2E4.</p><ul><li>npm i \uC2E4\uD589</li><li>npm run dev \uC2E4\uD589</li><li>\uB85C\uCEEC \uC571\uC73C\uB85C \uC774\uB3D9\uD558\uACE0 \uBB34\uB8CC\uB85C \uC2DC\uC791\uC744 \uD074\uB9AD\uD558\uC138\uC694 \u2014 \uC774\uAC83\uC740 \uB85C\uADF8\uC778 \uD398\uC774\uC9C0\uB85C \uC774\uB3D9\uD569\uB2C8\uB2E4</li><li>\uC544\uC9C1 \uC778\uC99D \uC81C\uACF5 \uC5C5\uCCB4\uB97C \uAD6C\uC131\uD558\uC9C0 \uC54A\uC558\uC73C\uBBC0\uB85C \uC9C0\uAE08\uC740 \uC774\uBA54\uC77C\uB85C \uACC4\uC18D \uD074\uB9AD\uD558\uACE0 \uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uC81C\uCD9C\uD569\uB2C8\uB2E4</li><li>\uC774\uBA54\uC77C\uB85C \uBC1B\uC740 \uB9C1\uD06C\uB97C \uD074\uB9AD\uD558\uBA74 \uC571\uC73C\uB85C \uB9AC\uB514\uB809\uC158\uB429\uB2C8\uB2E4 \u2014 \uC778\uC99D\uB428</li><li>\uC694\uAE08\uC81C \uC911 \uD558\uB098\uB97C \uC120\uD0DD\uD558\uACE0 \uC2DC\uC791 \uD074\uB9AD\uD558\uC138\uC694. \uC774\uAC83\uC740 Stripe \uCCB4\uD06C\uC544\uC6C3 \uD398\uC774\uC9C0\uB85C \uC774\uB3D9\uD569\uB2C8\uB2E4 (\uD14C\uC2A4\uD2B8 \uBAA8\uB4DC\uC5D0\uC11C)</li><li>\uC2E0\uC6A9 \uCE74\uB4DC \uBC88\uD638\uB85C 4242424242424242\uB97C \uC785\uB825\uD558\uC138\uC694. \uB098\uBA38\uC9C0 \uC591\uC2DD\uC740 \uC720\uD6A8\uD55C \uB370\uC774\uD130\uB85C \uCC44\uC6B0\uACE0 \uAD6C\uB3C5\uC744 \uD074\uB9AD\uD558\uC138\uC694</li><li>\uADF8\uB7FC \uACC4\uC815 \uD398\uC774\uC9C0\uB85C \uB9AC\uB514\uB809\uC158\uB418\uC5B4 \uD65C\uC131 \uAD6C\uB3C5\uC744 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4</li><li>\uAD6C\uB3C5 \uAD00\uB9AC \uBC84\uD2BC\uC744 \uD074\uB9AD\uD558\uC5EC \uAD6C\uB3C5\uC744 \uAD00\uB9AC\uD560 \uC218 \uC788\uB294 Stripe \uACE0\uAC1D \uD3EC\uD138\uB85C \uB9AC\uB514\uB809\uC158\uB429\uB2C8\uB2E4</li></ul><h1 id="\u1100\u1167\u11AF\u1100\u116A" tabindex="-1"><a class="header-anchor" href="#\u1100\u1167\u11AF\u1100\u116A" aria-hidden="true">#</a> \uACB0\uACFC</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),C=a("p",null,"\uC9E7\uC740 \uC124\uC815 \uC791\uC5C5 \uD6C4\uC5D0\uB294 \uC791\uB3D9\uD558\uB294 \uB370\uC774\uD130\uBCA0\uC774\uC2A4, \uAD6C\uC131\uB41C \uC2A4\uD2B8\uB77C\uC774\uD504 \uC81C\uD488, \uACB0\uC81C, \uAD6C\uB3C5, \uACE0\uAC1D \uD3EC\uD138, Stripe\uC640 Supabase\uB97C \uB3D9\uAE30\uD654\uD558\uB294 \uC6F9\uD6C5, \uD604\uB300\uC801\uC778 \uAE30\uC220 \uC2A4\uD0DD\uC744 \uC0AC\uC6A9\uD55C \uC544\uB984\uB2E4\uC6B4 \uCF54\uB4DC\uBCA0\uC774\uC2A4\uAC00 \uC900\uBE44\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC774\uC81C \uC81C\uD488\uC744 \uAD6C\uCD95\uD558\uB294 \uB370 \uC9D1\uC911\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),D=a("p",null,"\uC0C8\uB85C\uC6B4 \uCF54\uB4DC\uBCA0\uC774\uC2A4\uC5D0\uC11C \uCF54\uB529\uD558\uB294 \uAC00\uC774\uB4DC\uB97C \uCC3E\uC73C\uB824\uBA74 \uB808\uD3EC\uC9C0\uD1A0\uB9AC\uB85C \uC774\uB3D9\uD558\uACE0 \uB2E4\uC74C \uB9C1\uD06C\uB97C \uD1B5\uD574 \uB354 \uB9CE\uC740 \uC815\uBCF4\uB97C \uC54C\uC544\uBCF4\uC138\uC694:",-1),R=a("ul",null,[a("li",null,"\uC778\uC99D \uC81C\uACF5\uC790 \uC124\uC815\uC5D0 \uB300\uD574 \uB354 \uC54C\uC544\uBCF4\uAE30"),a("li",null,"Supabase \uB9C8\uC774\uADF8\uB808\uC774\uC158\uC5D0 \uB300\uD574 \uB354 \uC54C\uC544\uBCF4\uAE30"),a("li",null,"shadcn/ui \uCEF4\uD3EC\uB10C\uD2B8\uC5D0 \uB300\uD574 \uB354 \uC54C\uC544\uBCF4\uAE30"),a("li",null,"shadcn/ui\uB85C \uD14C\uB9C8 \uC124\uC815\uC5D0 \uB300\uD574 \uB354 \uC54C\uC544\uBCF4\uAE30"),a("li",null,"Tailwindcss \uD14C\uB9C8 \uAD6C\uC131\uC5D0 \uB300\uD574 \uB354 \uC54C\uC544\uBCF4\uAE30")],-1),U=a("p",null,"\uC124\uC815\uC774\uB098 \uCF54\uB4DC\uBCA0\uC774\uC2A4\uC5D0\uC11C \uAC1C\uBC1C\uD558\uB294 \uB370 \uB3C4\uC6C0\uC774 \uD544\uC694\uD558\uBA74 \uC5B8\uC81C\uB4E0\uC9C0 \uD2B8\uC704\uD130 @kolbysisk\uC5D0\uC11C \uC800\uC5D0\uAC8C \uC5F0\uB77D\uD574 \uC8FC\uC138\uC694. \uB3C4\uC640\uB4DC\uB9B4 \uC218 \uC788\uB294 \uAC83\uC744 \uAE30\uC058\uAC8C \uB3C4\uC640\uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4. \u2764\uFE0F",-1);function A(N,V){return i(),r("div",null,[b,(i(),l(s("script"),null,{default:t(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),S,(i(),l(s("script"),null,{default:t(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),g,(i(),l(s("script"),null,{default:t(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),f,(i(),l(s("script"),null,{default:t(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),m,(i(),l(s("script"),null,{default:t(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),y,w,x,v,k,(i(),l(s("script"),null,{default:t(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),P,T,j,I,B,(i(),l(s("script"),null,{default:t(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),E,(i(),l(s("script"),null,{default:t(()=>[e(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),C,D,R,U])}var Y=o(_,[["render",A],["__file","index.html.vue"]]);export{Y as default};
