import{_ as e,o as n,c,a as s,w as a,b as p,r as t,d as o,e as l}from"./app.e1970118.js";const i={},r=o(`<p>\uC81C\uAC00 Kotlin\uC5D0\uC11C \uBE0C\uB77C\uC6B0\uC800\uC758 \uAE30\uBCF8 JS \uAC1D\uCCB4\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB3C4\uB85D &#39;external&#39;\uC744 \uC0AC\uC6A9\uD558\uC5EC \uB2E4\uC591\uD55C \uB798\uD551\uC744 \uB9CC\uB4E4\uC5C8\uC5B4\uC694.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>external <span class="token keyword">interface</span> <span class="token class-name">JsMap</span><span class="token punctuation">{</span>
    fun <span class="token function">has</span><span class="token punctuation">(</span>key<span class="token operator">:</span>dynamic<span class="token punctuation">)</span><span class="token operator">:</span>Boolean
    fun <span class="token function">get</span><span class="token punctuation">(</span>key<span class="token operator">:</span>dynamic<span class="token punctuation">)</span><span class="token operator">:</span>dynamic
    fun <span class="token function">set</span><span class="token punctuation">(</span>key<span class="token operator">:</span>dynamic<span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span>dynamic<span class="token punctuation">)</span>
    fun <span class="token keyword">delete</span><span class="token punctuation">(</span>key<span class="token operator">:</span>dynamic<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

external <span class="token keyword">interface</span> <span class="token class-name">JsArray</span><span class="token operator">&lt;</span><span class="token constant">V</span><span class="token operator">:</span>Any<span class="token operator">&gt;</span><span class="token punctuation">{</span>
    operator fun <span class="token function">get</span><span class="token punctuation">(</span>i<span class="token operator">:</span>Int<span class="token punctuation">)</span><span class="token operator">:</span><span class="token constant">V</span><span class="token operator">?</span>
    operator fun <span class="token function">set</span><span class="token punctuation">(</span>i<span class="token operator">:</span>Int<span class="token punctuation">,</span> <span class="token literal-property property">v</span><span class="token operator">:</span><span class="token constant">V</span><span class="token punctuation">)</span>
    val length<span class="token operator">:</span>Int
    fun <span class="token function">push</span><span class="token punctuation">(</span>vararg v<span class="token operator">:</span><span class="token constant">V</span><span class="token punctuation">)</span>
    fun <span class="token function">forEach</span><span class="token punctuation">(</span>block<span class="token operator">:</span><span class="token punctuation">(</span><span class="token constant">V</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span>Unit<span class="token punctuation">)</span>
    fun <span class="token operator">&lt;</span><span class="token constant">TO</span><span class="token operator">:</span>Any<span class="token operator">&gt;</span> <span class="token function">map</span><span class="token punctuation">(</span>block<span class="token operator">:</span><span class="token punctuation">(</span><span class="token constant">V</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span><span class="token constant">TO</span><span class="token punctuation">)</span><span class="token operator">:</span>JsArray<span class="token operator">&lt;</span><span class="token constant">TO</span><span class="token operator">&gt;</span>
    fun <span class="token function">any</span><span class="token punctuation">(</span>block<span class="token operator">:</span><span class="token punctuation">(</span><span class="token constant">V</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span>Boolean<span class="token punctuation">)</span><span class="token operator">:</span>Boolean
    fun <span class="token function">all</span><span class="token punctuation">(</span>block<span class="token operator">:</span><span class="token punctuation">(</span><span class="token constant">V</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span>Boolean<span class="token punctuation">)</span><span class="token operator">:</span>Boolean
    fun <span class="token function">indexOf</span><span class="token punctuation">(</span>v<span class="token operator">:</span><span class="token constant">V</span><span class="token punctuation">)</span><span class="token operator">:</span>Int
    fun <span class="token function">filter</span><span class="token punctuation">(</span>block<span class="token operator">:</span><span class="token punctuation">(</span><span class="token constant">V</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span>Boolean<span class="token punctuation">)</span><span class="token operator">:</span>JsArray<span class="token operator">&lt;</span><span class="token constant">V</span><span class="token operator">&gt;</span>
    fun <span class="token function">slice</span><span class="token punctuation">(</span>start<span class="token operator">:</span>Int<span class="token punctuation">,</span> <span class="token literal-property property">end</span><span class="token operator">:</span>Int <span class="token operator">=</span> definedExternally<span class="token punctuation">)</span><span class="token operator">:</span>JsArray<span class="token operator">&lt;</span><span class="token constant">V</span><span class="token operator">&gt;</span>
    fun <span class="token function">splice</span><span class="token punctuation">(</span>start<span class="token operator">:</span>Int<span class="token punctuation">,</span> <span class="token literal-property property">deleteCount</span><span class="token operator">:</span>Int<span class="token punctuation">,</span> vararg items<span class="token operator">:</span><span class="token constant">V</span><span class="token punctuation">)</span><span class="token operator">:</span>JsArray<span class="token operator">&lt;</span><span class="token constant">V</span><span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

external <span class="token keyword">interface</span> <span class="token class-name">JsObject</span><span class="token punctuation">{</span>
    operator fun <span class="token function">get</span><span class="token punctuation">(</span>key<span class="token operator">:</span>String<span class="token punctuation">)</span><span class="token operator">:</span>dynamic
    operator fun <span class="token function">set</span><span class="token punctuation">(</span>key<span class="token operator">:</span>String<span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span>dynamic<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC2E4\uC81C\uB85C \uBE0C\uB77C\uC6B0\uC800\uC5D0 JsArray\uAC00 \uC874\uC7AC\uD558\uC9C0\uB294 \uC54A\uC9C0\uB9CC, Kotlin\uC774 \uC778\uC2DD\uD560 \uC218 \uC788\uB294 \uD0C0\uC785\uC774 \uD544\uC694\uD558\uAE30 \uB54C\uBB38\uC5D0 \uC120\uC5B8\uB418\uC5C8\uC5B4\uC694. \uC2E4\uC9C8\uC801\uC778 \uAC15\uC810\uC740 Kotlin \uAC1D\uCCB4\uB97C JS\uB85C \uC804\uB2EC\uD558\uAC70\uB098 JS\uC5D0\uC11C Kotlin\uC73C\uB85C \uAC1D\uCCB4\uB97C \uBC1B\uC744 \uB54C \uB098\uD0C0\uB0A9\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>inline fun <span class="token operator">&lt;</span><span class="token constant">K</span><span class="token operator">:</span>Any<span class="token punctuation">,</span> <span class="token constant">V</span><span class="token operator">:</span>Any<span class="token operator">&gt;</span> Map<span class="token operator">&lt;</span><span class="token constant">K</span><span class="token punctuation">,</span> <span class="token constant">V</span><span class="token operator">&gt;</span><span class="token punctuation">.</span><span class="token function">toJsMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>JsMap 
<span class="token operator">=</span> <span class="token function">js</span><span class="token punctuation">(</span><span class="token string">&quot;new Map()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>also <span class="token punctuation">{</span>map<span class="token operator">-</span><span class="token operator">&gt;</span>
    forEach <span class="token punctuation">{</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> v<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span> map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> v<span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">as</span> JsMap

inline fun <span class="token operator">&lt;</span><span class="token constant">K</span><span class="token operator">:</span>Any<span class="token punctuation">,</span> <span class="token constant">V</span><span class="token operator">:</span>Any<span class="token operator">&gt;</span> Map<span class="token operator">&lt;</span><span class="token constant">K</span><span class="token punctuation">,</span> <span class="token constant">V</span><span class="token operator">&gt;</span><span class="token punctuation">.</span><span class="token function">toJsObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>JsObject 
<span class="token operator">=</span> <span class="token function">js</span><span class="token punctuation">(</span><span class="token string">&quot;Object.create(null)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>also<span class="token punctuation">{</span>obj<span class="token operator">-</span><span class="token operator">&gt;</span> 
    forEach<span class="token punctuation">{</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> v<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span>obj<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> v<span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">as</span> JsObject

inline fun <span class="token operator">&lt;</span><span class="token constant">V</span><span class="token operator">:</span>Any<span class="token operator">&gt;</span> Iterable<span class="token operator">&lt;</span><span class="token constant">V</span><span class="token operator">&gt;</span><span class="token punctuation">.</span><span class="token function">toJsArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>JsArray<span class="token operator">&lt;</span><span class="token constant">V</span><span class="token operator">&gt;</span> 
<span class="token operator">=</span> <span class="token function">js</span><span class="token punctuation">(</span><span class="token string">&quot;[]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>also <span class="token punctuation">{</span>arr<span class="token operator">-</span><span class="token operator">&gt;</span>
    forEachIndexed <span class="token punctuation">{</span>index<span class="token punctuation">,</span> v<span class="token operator">-</span><span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> v<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),u=o(`<p>\uC2E4\uC81C \uBCC0\uD658 \uC791\uC5C5\uC740 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uC790\uC5F0\uC2A4\uB7FD\uAC8C \uD1B5\uD569\uB418\uB3C4\uB85D js(..) \uD568\uC218\uB97C \uD1B5\uD574 \uC2E4\uC81C JS \uAC1D\uCCB4\uB97C \uC0DD\uC131\uD558\uC5EC \uC218\uD589\uB429\uB2C8\uB2E4.</p><p>JS \uAC1D\uCCB4\uC5D0 \uB300\uD55C \uD655\uC7A5 \uAE30\uB2A5\uC744 \uC815\uC758\uD558\uB294 \uAC83\uB3C4 \uC27D\uC2B5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4, &#39;delete obj[key]&#39;\uB294 &#39;Reflect.deleteProperty(obj, key)&#39;\uB85C \uB300\uCCB4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB97C JsObject\uC758 &#39;delete&#39; \uD655\uC7A5 \uAE30\uB2A5\uC73C\uB85C\uB3C4 \uC815\uC758\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>external <span class="token keyword">class</span> <span class="token class-name">Reflect</span><span class="token punctuation">{</span>
    companion object <span class="token punctuation">{</span>
        fun <span class="token function">deleteProperty</span><span class="token punctuation">(</span>target<span class="token operator">:</span>Any<span class="token punctuation">,</span> <span class="token literal-property property">propertyKey</span><span class="token operator">:</span>String<span class="token punctuation">)</span><span class="token operator">:</span>Boolean
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

inline fun JsObject<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>key<span class="token operator">:</span>String<span class="token punctuation">)</span><span class="token operator">:</span>Boolean 
<span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">deleteProperty</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uB9C8\uC9C0\uB9C9\uC73C\uB85C \uC0B4\uD3B4\uBCFC \uC0AC\uB840\uB294 Kotlin\uC5D0\uC11C \uC778\uB77C\uC778\uC758 reified \uAE30\uB2A5\uC744 \uC0AC\uC6A9\uD558\uC5EC T \uC720\uD615\uC758 ::class\uB97C \uD0A4\uB85C \uC0AC\uC6A9\uD558\uB294 Map\uC744 \uC0DD\uC131\uD558\uB294 \uAC83\uC774 \uC77C\uBC18\uC801\uC774\uB77C\uB294 \uAC83\uC785\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),k=o(`<div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">val</span> map<span class="token operator">:</span> HashMap<span class="token operator">&lt;</span>KClass<span class="token operator">&lt;</span><span class="token operator">*</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> Int<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token function">hashMapOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">inline</span> <span class="token keyword">fun</span> <span class="token operator">&lt;</span><span class="token keyword">reified</span> T <span class="token operator">:</span> Any<span class="token operator">&gt;</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">data</span><span class="token operator">:</span> Int<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    map<span class="token punctuation">[</span>T<span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">data</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uB9CC\uC57D KClass \uB300\uC2E0 \uACE0\uC720 \uC2DD\uBCC4\uC790 \uBB38\uC790\uC5F4\uC744 \uC0AC\uC6A9\uD558\uACE0 \uC2F6\uB2E4\uBA74 qualifiedName\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uC18D\uC131\uC740 \uC77C\uBC18\uC801\uC73C\uB85C \uB3D9\uC77C\uD55C \uC751\uC6A9 \uD504\uB85C\uADF8\uB7A8 \uB3C4\uBA54\uC778 \uB0B4\uC5D0\uC11C\uB9CC \uC720\uD6A8\uD558\uAE30 \uB54C\uBB38\uC5D0 \uCDA9\uBD84\uD55C \uC2DD\uBCC4\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">val</span> map<span class="token operator">:</span> HashMap<span class="token operator">&lt;</span>String<span class="token punctuation">,</span> Int<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token function">hashMapOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">inline</span> <span class="token keyword">fun</span> <span class="token operator">&lt;</span><span class="token keyword">reified</span> T <span class="token operator">:</span> Any<span class="token operator">&gt;</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">data</span><span class="token operator">:</span> Int<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    map<span class="token punctuation">[</span>T<span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">.</span>qualifiedName<span class="token operator">!!</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">data</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uADF8\uB7EC\uB098 \uBB38\uC81C\uB294 kotlinJS\uAC00 simpleName\uB9CC \uC9C0\uC6D0\uD558\uACE0 qualifiedName\uC740 \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294\uB2E4\uB294 \uAC83\uC785\uB2C8\uB2E4. \uD55C\uD3B8, kotlinJS\uAC00 \uB2E8\uC77C \uC2A4\uB808\uB4DC \uD658\uACBD\uC5D0\uC11C \uC791\uB3D9\uD558\uAE30 \uB54C\uBB38\uC5D0 \uB3D9\uAE30\uD654 \uBB38\uC81C\uAC00 \uC5C6\uB2E4\uB294 \uC7A5\uC810\uC744 \uC0B4\uB9B4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),d=o(`<div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">private</span> <span class="token keyword">var</span> kClassId<span class="token operator">:</span>Int <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">private</span> <span class="token keyword">val</span> kClassIdMap<span class="token operator">:</span>HashMap<span class="token operator">&lt;</span>KClass<span class="token operator">&lt;</span><span class="token operator">*</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> String<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token function">hashMapOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">val</span> <span class="token operator">&lt;</span>T<span class="token operator">:</span>Any<span class="token operator">&gt;</span> KClass<span class="token operator">&lt;</span>T<span class="token operator">&gt;</span><span class="token punctuation">.</span>id<span class="token operator">:</span>String 
  <span class="token keyword">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> kClassIdMap<span class="token punctuation">.</span><span class="token function">getOrPut</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token string-literal singleline"><span class="token string">&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">simpleName</span></span><span class="token string">|</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">kClassId<span class="token operator">++</span></span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC704\uC758 \uCF54\uB4DC\uB294 \uAC01 KClass\uB9C8\uB2E4 \uACE0\uC720\uD55C \uC2DD\uBCC4\uC790\uB97C \uB9CC\uB4E4\uC5B4 simpleName\uC5D0 \uACE0\uC720\uD55C \uC22B\uC790 ID\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4. \uC774\uB97C \uC704\uD574 KClass\uC5D0 &#39;id&#39;\uB77C\uB294 \uD655\uC7A5 \uC18D\uC131\uC744 \uC0AC\uC6A9\uD558\uC5EC \uD558\uB098\uC758 KClass\uC5D0 \uB300\uD574 \uD55C \uBC88\uB9CC \uACE0\uC720\uD55C \uC2DD\uBCC4\uC790\uAC00 \uC0DD\uC131\uB418\uB3C4\uB85D \uD569\uB2C8\uB2E4.</p><p>\uC774\uB97C \uD65C\uC6A9\uD558\uC5EC \uC704\uC758 \uC608\uC81C\uB97C \uB2E4\uC74C\uACFC \uAC19\uC774 \uC218\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">val</span> map<span class="token operator">:</span>HashMap<span class="token operator">&lt;</span>String<span class="token punctuation">,</span> Int<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token function">hashMapOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">inline</span> <span class="token keyword">fun</span> <span class="token operator">&lt;</span><span class="token keyword">reified</span> T<span class="token operator">:</span>Any<span class="token operator">&gt;</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">data</span><span class="token operator">:</span>Int<span class="token punctuation">)</span><span class="token punctuation">{</span>
    map<span class="token punctuation">[</span>T<span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">.</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">data</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),v=l("p",null,"\uC624\uB298\uC758 \uAE30\uB85D\uC740 \uC5EC\uAE30\uAE4C\uC9C0\uC5D0\uC694.",-1);function m(b,y){return n(),c("div",null,[r,(n(),s(t("script"),null,{default:a(()=>[p(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),u,(n(),s(t("script"),null,{default:a(()=>[p(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),k,(n(),s(t("script"),null,{default:a(()=>[p(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),d,(n(),s(t("script"),null,{default:a(()=>[p(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),v])}var f=e(i,[["render",m],["__file","index.html.vue"]]);export{f as default};
