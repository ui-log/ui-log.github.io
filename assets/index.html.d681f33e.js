import{_ as c}from"./app.d68f74da.js";import{l as s,m as l,E as t,G as p,p as a,Y as o,C as n,K as e}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var i="/assets/Step-by-StepGuideConnectingMongoDBwithReactjsforSeamlessFullStackDevelopment_0.9fe524b9.png";const u={},r=n("img",{src:i},null,-1),d=n("p",null,"\uC548\uB155\uD558\uC138\uC694! MongoDB\uC640 React.js \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC5F0\uACB0\uD558\uB294 \uACFC\uC815\uC744 \uD55C \uB2E8\uACC4\uC529 \uC548\uB0B4\uD574 \uB4DC\uB9B4\uAC8C\uC694. \uC774 \uC608\uC81C\uC5D0\uC11C\uB294 React.js\uC640 MongoDB\uC5D0 \uB300\uD574 \uAE30\uBCF8\uC801\uC73C\uB85C \uC774\uD574\uD558\uACE0 \uC788\uB2E4\uACE0 \uAC00\uC815\uD558\uACA0\uC2B5\uB2C8\uB2E4. \uADF8\uB807\uC9C0 \uC54A\uB2E4\uBA74, \uBA3C\uC800 \uD574\uB2F9 \uAE30\uC220\uB4E4\uC5D0 \uB300\uD574 \uC54C\uC544\uBCF4\uC2DC\uB294 \uAC83\uC774 \uC88B\uC544\uC694.",-1),k=n("h2",{id:"step-1-mongodb-\u1103\u1166\u110B\u1175\u1110\u1165\u1107\u1166\u110B\u1175\u1109\u1173-\u1109\u1165\u11AF\u110C\u1165\u11BC\u1112\u1161\u1100\u1175",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#step-1-mongodb-\u1103\u1166\u110B\u1175\u1110\u1165\u1107\u1166\u110B\u1175\u1109\u1173-\u1109\u1165\u11AF\u110C\u1165\u11BC\u1112\u1161\u1100\u1175","aria-hidden":"true"},"#"),a(" Step 1: MongoDB \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC124\uC815\uD558\uAE30")],-1),v=n("ul",null,[n("li",null,"MongoDB \uC124\uCE58: MongoDB \uACF5\uC2DD \uC6F9\uC0AC\uC774\uD2B8(https://www.mongodb.com/try/download/community)\uC5D0\uC11C MongoDB\uB97C \uB2E4\uC6B4\uB85C\uB4DC\uD558\uACE0 \uC124\uCE58\uD574 \uC8FC\uC138\uC694. \uC6B4\uC601 \uCCB4\uC81C\uC5D0 \uB9DE\uB294 \uC124\uCE58 \uC9C0\uCE68\uC744 \uB530\uB974\uC138\uC694."),n("li",null,"MongoDB \uC2DC\uC791: MongoDB \uC11C\uBC84\uB97C \uC2DC\uC791\uD574 \uC8FC\uC138\uC694. \uC77C\uBC18\uC801\uC73C\uB85C \uD130\uBBF8\uB110\uC5D0\uC11C mongod\uC640 \uAC19\uC740 \uBA85\uB839\uC744 \uC2E4\uD589\uD558\uBA74 \uB429\uB2C8\uB2E4."),n("li",null,"\uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC0DD\uC131: MongoDB Compass\uB098 \uBA85\uB839\uD589\uACFC \uAC19\uC740 MongoDB \uAD00\uB9AC \uB3C4\uAD6C\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC0C8 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uB97C \uC0DD\uC131\uD558\uC138\uC694. \uC608\uB97C \uB4E4\uC5B4, \uBA85\uB839\uD589\uC744 \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95:")],-1),m=n("p",null,[n("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),g=e(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>mongo
<span class="token operator">&gt;</span> use your_database_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>\uCEEC\uB809\uC158 \uC0DD\uC131\uD558\uAE30: \uB370\uC774\uD130\uB97C \uC800\uC7A5\uD560 \uCEEC\uB809\uC158\uC744 \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uB0B4\uC5D0 \uC0DD\uC131\uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 \uB2E4\uC74C\uACFC \uAC19\uC774:</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&gt;</span> db<span class="token punctuation">.</span><span class="token function">createCollection</span><span class="token punctuation">(</span><span class="token string">&quot;items&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u1103\u1161\u11AB\u1100\u1168-2-react-js-\u110B\u1162\u1111\u1173\u11AF\u1105\u1175\u110F\u1166\u110B\u1175\u1109\u1167\u11AB-\u1109\u1165\u11AF\u110C\u1165\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u1100\u1168-2-react-js-\u110B\u1162\u1111\u1173\u11AF\u1105\u1175\u110F\u1166\u110B\u1175\u1109\u1167\u11AB-\u1109\u1165\u11AF\u110C\u1165\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uB2E8\uACC4 2: React.js \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC124\uC815\uD558\uAE30</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),b=e(`<ul><li>React App \uB9CC\uB4E4\uAE30: \uC544\uC9C1 \uB9CC\uB4E4\uC9C0 \uC54A\uC558\uB2E4\uBA74, create-react-app\uC774\uB098 \uC6D0\uD558\uB294 \uBC29\uBC95\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC0C8\uB85C\uC6B4 React.js \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uB9CC\uB4ED\uB2C8\uB2E4.</li><li>\uC885\uC18D\uC131 \uC124\uCE58: React.js \uD504\uB85C\uC81D\uD2B8 \uD3F4\uB354 \uC548\uC5D0\uC11C \uD130\uBBF8\uB110\uC744 \uC5F4\uACE0 \uD544\uC694\uD55C \uD328\uD0A4\uC9C0\uB97C \uC124\uCE58\uD569\uB2C8\uB2E4:</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm install axios mongoose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>axios\uB294 HTTP \uC694\uCCAD\uC744 \uB9CC\uB4E4\uAE30 \uC704\uD55C \uC778\uAE30 \uC788\uB294 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC785\uB2C8\uB2E4.</li><li>mongoose\uB294 MongoDB\uC640 Node.js\uB97C \uC704\uD55C Object Data Modeling (ODM) \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC785\uB2C8\uB2E4.</li></ul><h2 id="\u1103\u1161\u11AB\u1100\u1168-3-mongodb\u110B\u1166-\u110B\u1167\u11AB\u1100\u1167\u11AF-\u1109\u1162\u11BC\u1109\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u1100\u1168-3-mongodb\u110B\u1166-\u110B\u1167\u11AB\u1100\u1167\u11AF-\u1109\u1162\u11BC\u1109\u1165\u11BC" aria-hidden="true">#</a> \uB2E8\uACC4 3: MongoDB\uC5D0 \uC5F0\uACB0 \uC0DD\uC131</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),h=e(`<ul><li>\uC11C\uBC84 \uC0AC\uC774\uB4DC \uCEF4\uD3EC\uB10C\uD2B8 \uC0DD\uC131\uD558\uAE30: React \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C MongoDB\uC640\uC758 \uD1B5\uC2E0\uC744 \uCC98\uB9AC\uD560 \uC11C\uBC84 \uC0AC\uC774\uB4DC \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC124\uC815\uD558\uC138\uC694. \uD504\uB85C\uC81D\uD2B8 \uB8E8\uD2B8\uC5D0 server.js \uD30C\uC77C\uC744 \uB9CC\uB4DC\uC2DC\uBA74 \uB429\uB2C8\uB2E4.</li><li>Express \uC124\uCE58\uD558\uAE30: server.js \uB0B4\uC5D0\uC11C Express\uB97C \uC124\uCE58\uD558\uACE0 \uC124\uC815\uD558\uC138\uC694. Express\uB294 \uC6F9 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uBE4C\uB4DC\uD558\uAE30 \uC704\uD55C Node.js \uD504\uB808\uC784\uC6CC\uD06C\uC785\uB2C8\uB2E4:</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;express&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">PORT</span> <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">PORT</span> <span class="token operator">||</span> <span class="token number">5000</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token constant">PORT</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\uC11C\uBC84\uAC00 \uD3EC\uD2B8 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">PORT</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\uC5D0\uC11C \uC2E4\uD589 \uC911\uC785\uB2C8\uB2E4</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>MongoDB\uC5D0 \uC5F0\uACB0\uD558\uAE30: \uB2E4\uC74C \uCF54\uB4DC\uB97C \uCD94\uAC00\uD558\uC5EC Mongoose\uB97C \uC0AC\uC6A9\uD558\uC5EC MongoDB \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC5D0 \uC5F0\uACB0\uD558\uC138\uC694. \uC2E4\uC81C \uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uC774\uB984\uC73C\uB85C your_database_name\uC744 \uAD50\uCCB4\uD574\uC8FC\uC138\uC694:</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> mongoose <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;mongoose&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
mongoose<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token string">&quot;mongodb://localhost/your_database_name&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">useNewUrlParser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">useUnifiedTopology</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),y=e(`<h2 id="\u1103\u1161\u11AB\u1100\u1168-4-api-\u1105\u1161\u110B\u116E\u1110\u1173-\u1109\u1162\u11BC\u1109\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u1100\u1168-4-api-\u1105\u1161\u110B\u116E\u1110\u1173-\u1109\u1162\u11BC\u1109\u1165\u11BC" aria-hidden="true">#</a> \uB2E8\uACC4 4: API \uB77C\uC6B0\uD2B8 \uC0DD\uC131</h2><ul><li>API \uB77C\uC6B0\uD2B8 \uC0DD\uC131: server.js \uD30C\uC77C\uC5D0\uC11C MongoDB\uC640 \uC0C1\uD638 \uC791\uC6A9\uD558\uAE30 \uC704\uD55C API \uB77C\uC6B0\uD2B8\uB97C \uC0DD\uC131\uD558\uC138\uC694. \uC608\uB97C \uB4E4\uC5B4, \uCEEC\uB809\uC158\uC5D0\uC11C \uBAA8\uB4E0 \uD56D\uBAA9\uC744 \uAC00\uC838\uC624\uB294 \uB77C\uC6B0\uD2B8\uB97C \uB9CC\uB4E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4:</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> Item <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./models/Item&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Item \uBAA8\uB378 \uC0DD\uC131</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/api/items&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token keyword">await</span> Item<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>items<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&quot;\uC11C\uBC84 \uC624\uB958&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Item \uBAA8\uB378 \uC0DD\uC131: \uD504\uB85C\uC81D\uD2B8 \uB0B4\uC5D0 models\uB77C\uB294 \uC0C8 \uD3F4\uB354\uB97C \uB9CC\uB4E4\uACE0, \uADF8 \uC548\uC5D0 MongoDB \uCEEC\uB809\uC158\uC5D0 \uB300\uD55C \uC2A4\uD0A4\uB9C8\uB97C \uC815\uC758\uD558\uAE30 \uC704\uD574 Item.js\uB77C\uB294 \uD30C\uC77C\uC744 \uC0DD\uC131\uD558\uC138\uC694.</li></ol><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),f=e(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> mongoose <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;mongoose&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> itemSchema <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mongoose<span class="token punctuation">.</span>Schema</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> mongoose<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token string">&quot;Item&quot;</span><span class="token punctuation">,</span> itemSchema<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1103\u1161\u11AB\u1100\u1168-5-react\u110B\u1166\u1109\u1165-\u1103\u1166\u110B\u1175\u1110\u1165-\u1100\u1161\u110C\u1167\u110B\u1169\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u1100\u1168-5-react\u110B\u1166\u1109\u1165-\u1103\u1166\u110B\u1175\u1110\u1165-\u1100\u1161\u110C\u1167\u110B\u1169\u1100\u1175" aria-hidden="true">#</a> \uB2E8\uACC4 5: React\uC5D0\uC11C \uB370\uC774\uD130 \uAC00\uC838\uC624\uAE30</h2><ul><li>React \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C \uB370\uC774\uD130 \uAC00\uC838\uC624\uAE30: React \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C \uC774\uC804 \uB2E8\uACC4\uC5D0\uC11C \uC124\uC815\uD55C API\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uAC00\uC838 \uC624\uB3C4\uB85D Axios\uB97C \uC0AC\uC6A9\uD558\uC2ED\uC2DC\uC624. useEffect \uD6C5\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uAC00\uC838\uC62C \uC218 \uC788\uC2B5\uB2C8\uB2E4.</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&quot;axios&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>items<span class="token punctuation">,</span> setItems<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/api/items&quot;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token function">setItems</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Items<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>
        <span class="token punctuation">{</span>items<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>_id<span class="token punctuation">}</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>h3<span class="token operator">&gt;</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>description<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),_=n("p",null,"\uADF8\uAC70\uC57C! \uBAA8\uB4E0 \uAC83\uC774 \uC131\uACF5\uC801\uC73C\uB85C \uB9C8\uBB34\uB9AC\uB418\uC5C8\uC5B4\uC694! \uC774\uC81C MongoDB \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uB97C React.js \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uC5F0\uACB0\uD588\uC2B5\uB2C8\uB2E4. \uC774 \uC608\uC2DC\uC5D0\uC11C\uB294 \uC5F0\uACB0 \uC124\uC815, API \uB77C\uC6B0\uD2B8 \uC0DD\uC131, \uB370\uC774\uD130 \uAC00\uC838\uC624\uAE30\uC758 \uAE30\uBCF8 \uB0B4\uC6A9\uC744 \uB2E4\uB918\uC5B4\uC694. \uC2E4\uC81C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C\uB294 \uBCF4\uD1B5 \uCD94\uAC00\uC801\uC778 \uC624\uB958 \uCC98\uB9AC, \uC778\uC99D, \uADF8\uB9AC\uACE0 \uB354 \uACE0\uAE09 \uAE30\uB2A5\uB4E4\uC744 \uAD6C\uD604\uD558\uACE0 \uC2F6\uC744 \uAC70\uC608\uC694.",-1);function w(j,x){return s(),l("div",null,[r,d,k,v,m,(s(),t(o("script"),null,{default:p(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),g,(s(),t(o("script"),null,{default:p(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b,(s(),t(o("script"),null,{default:p(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),h,(s(),t(o("script"),null,{default:p(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),y,(s(),t(o("script"),null,{default:p(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),f,(s(),t(o("script"),null,{default:p(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),_])}var S=c(u,[["render",w],["__file","index.html.vue"]]);export{S as default};
