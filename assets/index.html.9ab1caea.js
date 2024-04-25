import{_ as h}from"./app.3052dcfb.js";import{l as t,m as o,E as a,G as e,p as r,Y as s,K as d}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var i="/assets/Next.js-Project-Structure_0.66b02378.png";const l={},n=d('<h1 id="next-js-\u1111\u1166\u110B\u1175\u110C\u1175-\u1105\u1161\u110B\u116E\u1110\u1165-\u1111\u1173\u1105\u1169\u110C\u1166\u11A8\u1110\u1173-\u110C\u1165\u110C\u1161\u11BC\u1109\u1169-\u1100\u116E\u110C\u1169" tabindex="-1"><a class="header-anchor" href="#next-js-\u1111\u1166\u110B\u1175\u110C\u1175-\u1105\u1161\u110B\u116E\u1110\u1165-\u1111\u1173\u1105\u1169\u110C\u1166\u11A8\u1110\u1173-\u110C\u1165\u110C\u1161\u11BC\u1109\u1169-\u1100\u116E\u110C\u1169" aria-hidden="true">#</a> Next.js \uD398\uC774\uC9C0 \uB77C\uC6B0\uD130 \uD504\uB85C\uC81D\uD2B8 \uC800\uC7A5\uC18C \uAD6C\uC870</h1><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} \uC774 \uD3EC\uC2A4\uD2B8\uB97C \uC77D\uC73C\uBA74</p><p>Next.js \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uD504\uB85C\uC81D\uD2B8 \uAD6C\uC870\uC5D0 \uB300\uD55C \uAC1C\uC694\uB97C \uC5BB\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',3),c=d('<h2 id="\u1109\u1161\u11BC\u110B\u1171-\u1109\u116E\u110C\u116E\u11AB-\u1111\u1169\u11AF\u1103\u1165" tabindex="-1"><a class="header-anchor" href="#\u1109\u1161\u11BC\u110B\u1171-\u1109\u116E\u110C\u116E\u11AB-\u1111\u1169\u11AF\u1103\u1165" aria-hidden="true">#</a> \uC0C1\uC704 \uC218\uC900 \uD3F4\uB354</h2><p>\uC0C1\uC704 \uC218\uC900 \uD3F4\uB354\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uCF54\uB4DC \uBC0F \uC815\uC801 \uC790\uC0B0\uC744 \uAD6C\uC131\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.</p><img src="'+i+'"><table><thead><tr><th>\uD3F4\uB354</th><th>\uC124\uBA85</th></tr></thead><tbody><tr><td>app</td><td>\uC571 \uB77C\uC6B0\uD130</td></tr><tr><td>pages</td><td>\uD398\uC774\uC9C0 \uB77C\uC6B0\uD130</td></tr><tr><td>public</td><td>\uC81C\uACF5\uB418\uB294 \uC815\uC801 \uC5D0\uC14B</td></tr><tr><td>src</td><td>\uC120\uD0DD\uC801 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC18C\uC2A4 \uD3F4\uB354</td></tr></tbody></table><h2 id="\u1109\u1161\u11BC\u110B\u1171-\u1109\u116E\u110C\u116E\u11AB-\u1111\u1161\u110B\u1175\u11AF" tabindex="-1"><a class="header-anchor" href="#\u1109\u1161\u11BC\u110B\u1171-\u1109\u116E\u110C\u116E\u11AB-\u1111\u1161\u110B\u1175\u11AF" aria-hidden="true">#</a> \uC0C1\uC704 \uC218\uC900 \uD30C\uC77C</h2><p>\uC0C1\uC704 \uC218\uC900 \uD30C\uC77C\uC740 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uAD6C\uC131\uD558\uACE0, \uC885\uC18D\uC131\uC744 \uAD00\uB9AC\uD558\uACE0, \uBBF8\uB4E4\uC6E8\uC5B4\uB97C \uC2E4\uD589\uD558\uACE0, \uBAA8\uB2C8\uD130\uB9C1 \uB3C4\uAD6C\uB97C \uD1B5\uD569\uD558\uBA70, \uD658\uACBD \uBCC0\uC218\uB97C \uC815\uC758\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.</p><table><thead><tr><th>\uD30C\uC77C \uB610\uB294 \uD3F4\uB354</th><th>\uC124\uBA85</th></tr></thead><tbody><tr><td>Next.js</td><td>Next.js</td></tr><tr><td>next.config.js</td><td>Next.js\uC758 \uC124\uC815 \uD30C\uC77C</td></tr><tr><td>package.json</td><td>\uD504\uB85C\uC81D\uD2B8 \uC885\uC18D\uC131 \uBC0F \uC2A4\uD06C\uB9BD\uD2B8</td></tr><tr><td>instrumentation.ts</td><td>OpenTelemetry \uBC0F Instrumentation \uD30C\uC77C</td></tr><tr><td>middleware.ts</td><td>Next.js \uC694\uCCAD \uBBF8\uB4E4\uC6E8\uC5B4</td></tr><tr><td>.env</td><td>\uD658\uACBD \uBCC0\uC218</td></tr><tr><td>.env.local</td><td>\uB85C\uCEEC \uD658\uACBD \uBCC0\uC218</td></tr><tr><td>.env.production</td><td>\uD504\uB85C\uB355\uC158 \uD658\uACBD \uBCC0\uC218</td></tr><tr><td>.env.development</td><td>\uAC1C\uBC1C \uD658\uACBD \uBCC0\uC218</td></tr><tr><td>.eslintrc.json</td><td>ESLint\uC758 \uC124\uC815 \uD30C\uC77C</td></tr><tr><td>.gitignore</td><td>Git\uC5D0\uC11C \uBB34\uC2DC\uD560 \uD30C\uC77C \uBC0F \uD3F4\uB354</td></tr><tr><td>next-env.d.ts</td><td>Next.js\uC758 TypeScript \uC120\uC5B8 \uD30C\uC77C</td></tr><tr><td>tsconfig.json</td><td>TypeScript\uC758 \uC124\uC815 \uD30C\uC77C</td></tr><tr><td>jsconfig.json</td><td>JavaScript\uC758 \uC124\uC815 \uD30C\uC77C</td></tr></tbody></table><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',8),p=d('<h2 id="\u110B\u1162\u11B8-\u1105\u1161\u110B\u116E\u1110\u1175\u11BC-\u1100\u1172\u110E\u1175\u11A8" tabindex="-1"><a class="header-anchor" href="#\u110B\u1162\u11B8-\u1105\u1161\u110B\u116E\u1110\u1175\u11BC-\u1100\u1172\u110E\u1175\u11A8" aria-hidden="true">#</a> \uC571 \uB77C\uC6B0\uD305 \uADDC\uCE59</h2><p>\uB2E4\uC74C \uD30C\uC77C \uADDC\uCE59\uC740 \uC571 \uB77C\uC6B0\uD130\uC5D0\uC11C \uACBD\uB85C\uB97C \uC815\uC758\uD558\uACE0 \uBA54\uD0C0\uB370\uC774\uD130\uB97C \uCC98\uB9AC\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.</p><h3 id="\u1105\u1161\u110B\u116E\u1110\u1175\u11BC-\u1111\u1161\u110B\u1175\u11AF" tabindex="-1"><a class="header-anchor" href="#\u1105\u1161\u110B\u116E\u1110\u1175\u11BC-\u1111\u1161\u110B\u1175\u11AF" aria-hidden="true">#</a> \uB77C\uC6B0\uD305 \uD30C\uC77C</h3><table><thead><tr><th>\uD3F4\uB354</th><th>\uD30C\uC77C \uD655\uC7A5\uC790</th><th>\uC124\uBA85</th></tr></thead><tbody><tr><td>layout</td><td>.js .jsx .tsx</td><td>\uB808\uC774\uC544\uC6C3</td></tr><tr><td>page</td><td>.js .jsx .tsx</td><td>\uD398\uC774\uC9C0</td></tr><tr><td>loading</td><td>.js .jsx .tsx</td><td>\uB85C\uB529 UI</td></tr><tr><td>not-found</td><td>.js .jsx .tsx</td><td>\uCC3E\uC744 \uC218 \uC5C6\uC74C UI</td></tr><tr><td>error</td><td>.js .jsx .tsx</td><td>\uC5D0\uB7EC UI</td></tr><tr><td>global-error</td><td>.js .jsx .tsx</td><td>\uC804\uC5ED \uC5D0\uB7EC UI</td></tr><tr><td>route</td><td>.js .ts</td><td>API \uC5D4\uB4DC\uD3EC\uC778\uD2B8</td></tr><tr><td>template</td><td>.js .jsx .tsx</td><td>\uB2E4\uC2DC \uB80C\uB354\uB9C1\uB418\uB294 \uB808\uC774\uC544\uC6C3</td></tr><tr><td>default</td><td>.js .jsx .tsx</td><td>\uBCD1\uB82C \uB77C\uC6B0\uD2B8 \uD6C4\uD589 \uD398\uC774\uC9C0</td></tr></tbody></table><h3 id="\u110C\u116E\u11BC\u110E\u1165\u11B8\u1103\u116C\u11AB-\u1100\u1167\u11BC\u1105\u1169" tabindex="-1"><a class="header-anchor" href="#\u110C\u116E\u11BC\u110E\u1165\u11B8\u1103\u116C\u11AB-\u1100\u1167\u11BC\u1105\u1169" aria-hidden="true">#</a> \uC911\uCCA9\uB41C \uACBD\uB85C</h3><table><thead><tr><th>\uD3F4\uB354</th><th>\uB77C\uC6B0\uD2B8 \uC138\uADF8\uBA3C\uD2B8</th></tr></thead><tbody><tr><td>folder</td><td>\uB77C\uC6B0\uD2B8 \uC138\uADF8\uBA3C\uD2B8</td></tr><tr><td>folder/folder</td><td>\uC911\uCCA9\uB41C \uB77C\uC6B0\uD2B8 \uC138\uADF8\uBA3C\uD2B8</td></tr></tbody></table><h3 id="\u1103\u1169\u11BC\u110C\u1165\u11A8-\u1100\u1167\u11BC\u1105\u1169" tabindex="-1"><a class="header-anchor" href="#\u1103\u1169\u11BC\u110C\u1165\u11A8-\u1100\u1167\u11BC\u1105\u1169" aria-hidden="true">#</a> \uB3D9\uC801 \uACBD\uB85C</h3><table><thead><tr><th>\uD3F4\uB354</th><th>\uB77C\uC6B0\uD2B8 \uC138\uADF8\uBA3C\uD2B8 \uD0C0\uC785</th></tr></thead><tbody><tr><td>[folder]</td><td>\uB3D9\uC801 \uB77C\uC6B0\uD2B8 \uC138\uADF8\uBA3C\uD2B8</td></tr><tr><td>[...folder]</td><td>\uBAA8\uB4E0 \uACBD\uC6B0\uB97C \uD3EC\uD568\uD558\uB294 \uB77C\uC6B0\uD2B8 \uC138\uADF8\uBA3C\uD2B8</td></tr><tr><td>[[...folder]]</td><td>\uC120\uD0DD\uC801 \uBAA8\uB4E0 \uACBD\uC6B0\uB97C \uD3EC\uD568\uD558\uB294 \uB77C\uC6B0\uD2B8 \uC138\uADF8\uBA3C\uD2B8</td></tr></tbody></table><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',9),x=d('<h3 id="\u1100\u1167\u11BC\u1105\u1169-\u1100\u1173\u1105\u116E\u11B8-\u1106\u1175\u11BE-\u1107\u1175\u1100\u1169\u11BC\u1100\u1162-\u1111\u1169\u11AF\u1103\u1165" tabindex="-1"><a class="header-anchor" href="#\u1100\u1167\u11BC\u1105\u1169-\u1100\u1173\u1105\u116E\u11B8-\u1106\u1175\u11BE-\u1107\u1175\u1100\u1169\u11BC\u1100\u1162-\u1111\u1169\u11AF\u1103\u1165" aria-hidden="true">#</a> \uACBD\uB85C \uADF8\uB8F9 \uBC0F \uBE44\uACF5\uAC1C \uD3F4\uB354</h3><p>| (folder) | \uB77C\uC6B0\uD305\uC5D0 \uC601\uD5A5\uC744 \uBBF8\uCE58\uC9C0 \uC54A\uACE0 \uB77C\uC6B0\uD2B8\uB97C \uADF8\uB8F9\uD654\uD569\uB2C8\uB2E4. | | _folder | \uB77C\uC6B0\uD305\uC5D0\uC11C \uD3F4\uB354\uC640 \uBAA8\uB4E0 \uD558\uC704 \uC138\uADF8\uBA3C\uD2B8\uB97C \uB77C\uC6B0\uD305\uC5D0\uC11C \uC81C\uC678\uD569\uB2C8\uB2E4. |</p><h3 id="\u1107\u1167\u11BC\u1105\u1167\u11AF-\u1106\u1175\u11BE-\u1100\u1161\u1105\u1169\u110E\u1162\u1100\u1175\u1103\u116C\u11AB-\u1100\u1167\u11BC\u1105\u1169" tabindex="-1"><a class="header-anchor" href="#\u1107\u1167\u11BC\u1105\u1167\u11AF-\u1106\u1175\u11BE-\u1100\u1161\u1105\u1169\u110E\u1162\u1100\u1175\u1103\u116C\u11AB-\u1100\u1167\u11BC\u1105\u1169" aria-hidden="true">#</a> \uBCD1\uB82C \uBC0F \uAC00\uB85C\uCC44\uAE30\uB41C \uACBD\uB85C</h3><p>| @folder | \uC774\uB984\uC774 \uC9C0\uC815\uB41C \uC2AC\uB86F | | (.)folder | \uB3D9\uC77C \uB808\uBCA8\uC5D0\uC11C \uAC00\uB85C\uCC44\uAE30 | | (..)folder | \uD55C \uB2E8\uACC4 \uC704\uC5D0\uC11C \uAC00\uB85C\uCC44\uAE30 | | (..)(..)folder | \uB450 \uB2E8\uACC4 \uC704\uC5D0\uC11C \uAC00\uB85C\uCC44\uAE30 | | (...)folder | \uB8E8\uD2B8\uC5D0\uC11C\uBD80\uD130 \uAC00\uB85C\uCC44\uAE30 |</p><h3 id="\u1106\u1166\u1110\u1161\u1103\u1166\u110B\u1175\u1110\u1165-\u1111\u1161\u110B\u1175\u11AF-\u1100\u1172\u110E\u1175\u11A8" tabindex="-1"><a class="header-anchor" href="#\u1106\u1166\u1110\u1161\u1103\u1166\u110B\u1175\u1110\u1165-\u1111\u1161\u110B\u1175\u11AF-\u1100\u1172\u110E\u1175\u11A8" aria-hidden="true">#</a> \uBA54\uD0C0\uB370\uC774\uD130 \uD30C\uC77C \uADDC\uCE59</h3><h4 id="\u110B\u1162\u11B8-\u110B\u1161\u110B\u1175\u110F\u1169\u11AB" tabindex="-1"><a class="header-anchor" href="#\u110B\u1162\u11B8-\u110B\u1161\u110B\u1175\u110F\u1169\u11AB" aria-hidden="true">#</a> \uC571 \uC544\uC774\uCF58</h4><table><thead><tr><th>\uD30C\uC77C \uB610\uB294 \uD3F4\uB354</th><th>\uD30C\uC77C \uD655\uC7A5\uC790</th><th>\uC124\uBA85</th></tr></thead><tbody><tr><td>favicon</td><td>.ico</td><td>\uD30C\uBE44\uCF58 \uD30C\uC77C</td></tr><tr><td>icon</td><td>.ico .jpg .jpeg .png .svg</td><td>\uC571 \uC544\uC774\uCF58 \uD30C\uC77C</td></tr><tr><td>icon</td><td>.js .ts .tsx</td><td>\uC0DD\uC131\uB41C \uC571 \uC544\uC774\uCF58</td></tr><tr><td>apple-icon</td><td>.jpg .jpeg .png</td><td>\uC560\uD50C \uC571 \uC544\uC774\uCF58 \uD30C\uC77C</td></tr><tr><td>apple-icon</td><td>.js .ts .tsx</td><td>\uC0DD\uC131\uB41C \uC560\uD50C \uC571 \uC544\uC774\uCF58</td></tr></tbody></table><h4 id="\u110B\u1169\u1111\u1173\u11AB-\u1100\u1173\u1105\u1162\u1111\u1173-\u1106\u1175\u11BE-\u1110\u1173\u110B\u1171\u1110\u1165-\u110B\u1175\u1106\u1175\u110C\u1175" tabindex="-1"><a class="header-anchor" href="#\u110B\u1169\u1111\u1173\u11AB-\u1100\u1173\u1105\u1162\u1111\u1173-\u1106\u1175\u11BE-\u1110\u1173\u110B\u1171\u1110\u1165-\u110B\u1175\u1106\u1175\u110C\u1175" aria-hidden="true">#</a> \uC624\uD508 \uADF8\uB798\uD504 \uBC0F \uD2B8\uC704\uD130 \uC774\uBBF8\uC9C0</h4><table><thead><tr><th>\uD30C\uC77C \uB610\uB294 \uD3F4\uB354</th><th>\uD30C\uC77C \uD655\uC7A5\uC790</th><th>\uC124\uBA85</th></tr></thead><tbody><tr><td>opengraph-image</td><td>.jpg .jpeg .png .gif</td><td>\uC624\uD508 \uADF8\uB798\uD504 \uC774\uBBF8\uC9C0 \uD30C\uC77C</td></tr><tr><td>opengraph-image</td><td>.js .ts .tsx</td><td>\uC0DD\uC131\uB41C \uC624\uD508 \uADF8\uB798\uD504 \uC774\uBBF8\uC9C0</td></tr><tr><td>twitter-image</td><td>.jpg .jpeg .png .gif</td><td>\uD2B8\uC704\uD130 \uC774\uBBF8\uC9C0 \uD30C\uC77C</td></tr><tr><td>twitter-image</td><td>.js .ts .tsx</td><td>\uC0DD\uC131\uB41C \uD2B8\uC704\uD130 \uC774\uBBF8\uC9C0</td></tr></tbody></table><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',10),b=d('<h4 id="seo" tabindex="-1"><a class="header-anchor" href="#seo" aria-hidden="true">#</a> SEO</h4><table><thead><tr><th>\uD30C\uC77C \uB610\uB294 \uD3F4\uB354</th><th>\uD30C\uC77C \uD655\uC7A5\uC790</th><th>\uC124\uBA85</th></tr></thead><tbody><tr><td>sitemap</td><td>.xml</td><td>\uC0AC\uC774\uD2B8\uB9F5 \uD30C\uC77C</td></tr><tr><td>sitemap</td><td>.js .ts</td><td>\uC0DD\uC131\uB41C \uC0AC\uC774\uD2B8\uB9F5</td></tr><tr><td>robots</td><td>.txt</td><td>\uB85C\uBD07 \uD30C\uC77C</td></tr><tr><td>robots</td><td>.js .ts</td><td>\uC0DD\uC131\uB41C \uB85C\uBD07 \uD30C\uC77C</td></tr></tbody></table><h2 id="\u1111\u1166\u110B\u1175\u110C\u1175-\u1105\u1161\u110B\u116E\u1110\u1175\u11BC-\u1100\u1172\u110E\u1175\u11A8" tabindex="-1"><a class="header-anchor" href="#\u1111\u1166\u110B\u1175\u110C\u1175-\u1105\u1161\u110B\u116E\u1110\u1175\u11BC-\u1100\u1172\u110E\u1175\u11A8" aria-hidden="true">#</a> \uD398\uC774\uC9C0 \uB77C\uC6B0\uD305 \uADDC\uCE59</h2><p>\uB2E4\uC74C \uD30C\uC77C \uADDC\uCE59\uC740 \uD398\uC774\uC9C0 \uB77C\uC6B0\uD130\uC5D0\uC11C \uACBD\uB85C\uB97C \uC815\uC758\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.</p><h3 id="\u1110\u1173\u11A8\u1107\u1167\u11AF-\u1111\u1161\u110B\u1175\u11AF" tabindex="-1"><a class="header-anchor" href="#\u1110\u1173\u11A8\u1107\u1167\u11AF-\u1111\u1161\u110B\u1175\u11AF" aria-hidden="true">#</a> \uD2B9\uBCC4 \uD30C\uC77C</h3><table><thead><tr><th>\uD30C\uC77C \uB610\uB294 \uD3F4\uB354</th><th>\uD30C\uC77C \uD655\uC7A5\uC790</th><th>\uC124\uBA85</th></tr></thead><tbody><tr><td>_app</td><td>.js .jsx .tsx</td><td>\uC0AC\uC6A9\uC790 \uC815\uC758 \uC571</td></tr><tr><td>_document</td><td>.js .jsx .tsx</td><td>\uC0AC\uC6A9\uC790 \uC815\uC758 \uBB38\uC11C</td></tr><tr><td>_error</td><td>.js .jsx .tsx</td><td>\uC0AC\uC6A9\uC790 \uC815\uC758 \uC5D0\uB7EC \uD398\uC774\uC9C0</td></tr><tr><td>404</td><td>.js .jsx .tsx</td><td>404 \uC5D0\uB7EC \uD398\uC774\uC9C0</td></tr><tr><td>500</td><td>.js .jsx .tsx</td><td>500 \uC5D0\uB7EC \uD398\uC774\uC9C0</td></tr></tbody></table><h3 id="\u1100\u1167\u11BC\u1105\u1169" tabindex="-1"><a class="header-anchor" href="#\u1100\u1167\u11BC\u1105\u1169" aria-hidden="true">#</a> \uACBD\uB85C</h3><table><thead><tr><th>\uD30C\uC77C \uB610\uB294 \uD3F4\uB354</th><th>\uD30C\uC77C \uD655\uC7A5\uC790</th><th>\uC124\uBA85</th></tr></thead><tbody><tr><td>index</td><td>.js .jsx .tsx</td><td>\uD648 \uD398\uC774\uC9C0</td></tr><tr><td>folder/index</td><td>.js .jsx .tsx</td><td>\uC911\uCCA9\uB41C \uD398\uC774\uC9C0</td></tr><tr><td>index</td><td>.js .jsx .tsx</td><td>\uD648 \uD398\uC774\uC9C0</td></tr><tr><td>file</td><td>.js .jsx .tsx</td><td>\uC911\uCCA9\uB41C \uD398\uC774\uC9C0</td></tr></tbody></table><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',9),j=d('<h3 id="\u1103\u1169\u11BC\u110C\u1165\u11A8-\u1100\u1167\u11BC\u1105\u1169-1" tabindex="-1"><a class="header-anchor" href="#\u1103\u1169\u11BC\u110C\u1165\u11A8-\u1100\u1167\u11BC\u1105\u1169-1" aria-hidden="true">#</a> \uB3D9\uC801 \uACBD\uB85C</h3><table><thead><tr><th>\uD30C\uC77C \uB610\uB294 \uD3F4\uB354</th><th>\uD30C\uC77C \uD655\uC7A5\uC790</th><th>\uC124\uBA85</th></tr></thead><tbody><tr><td>[folder]/index</td><td>.js .jsx .tsx</td><td>\uB3D9\uC801 \uB77C\uC6B0\uD2B8 \uC138\uADF8\uBA3C\uD2B8</td></tr><tr><td>[...folder]/index</td><td>.js .jsx .tsx</td><td>\uBAA8\uB4E0 \uACBD\uC6B0\uB97C \uD3EC\uD568\uD558\uB294 \uB77C\uC6B0\uD2B8 \uC138\uADF8\uBA3C\uD2B8</td></tr><tr><td>[[...folder]]/index</td><td>.js .jsx .tsx</td><td>\uC120\uD0DD\uC801 \uBAA8\uB4E0 \uACBD\uC6B0\uB97C \uD3EC\uD568\uD558\uB294 \uB77C\uC6B0\uD2B8 \uC138\uADF8\uBA3C\uD2B8</td></tr><tr><td>[file]</td><td>.js .jsx .tsx</td><td>\uB3D9\uC801 \uB77C\uC6B0\uD2B8 \uC138\uADF8\uBA3C\uD2B8</td></tr><tr><td>[...file]</td><td>.js .jsx .tsx</td><td>\uBAA8\uB4E0 \uACBD\uC6B0\uB97C \uD3EC\uD568\uD558\uB294 \uB77C\uC6B0\uD2B8 \uC138\uADF8\uBA3C\uD2B8</td></tr><tr><td>[[...file]]</td><td>.js .jsx .tsx</td><td>\uC120\uD0DD\uC801 \uBAA8\uB4E0 \uACBD\uC6B0\uB97C \uD3EC\uD568\uD558\uB294 \uB77C\uC6B0\uD2B8 \uC138\uADF8\uBA3C\uD2B8</td></tr></tbody></table>',2);function u(f,g){return t(),o("div",null,[n,(t(),a(s("script"),null,{default:e(()=>[r(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),c,(t(),a(s("script"),null,{default:e(()=>[r(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),p,(t(),a(s("script"),null,{default:e(()=>[r(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),x,(t(),a(s("script"),null,{default:e(()=>[r(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b,(t(),a(s("script"),null,{default:e(()=>[r(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),j])}var k=h(l,[["render",u],["__file","index.html.vue"]]);export{k as default};
