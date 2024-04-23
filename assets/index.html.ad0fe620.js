import{_ as l}from"./app.d68f74da.js";import{l as s,m as c,E as p,G as t,p as a,Y as o,C as n,K as e}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";const i={},r=n("p",null,[n("img",{src:"https://miro.medium.com/v2/resize:fit:1400/1*8CRNlJ-0OirG-3vxkTs_-g.gif",alt:"\uC774\uBBF8\uC9C0"})],-1),u=n("p",null,"\uCF54\uB529 \uBAA8\uD5D8\uC744 \uB5A0\uB0A0 \uC900\uBE44\uAC00 \uB418\uC168\uB098\uC694? \uC624\uB298\uC740 #100DaysOfCode \uCC4C\uB9B0\uC9C0\uC758 \uC77C\uD658\uC73C\uB85C HTML, CSS \uBC0F JavaScript\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC778\uD130\uB799\uD2F0\uBE0C \uC12C \uD31D\uC5C5\uC744 \uB9CC\uB4DC\uB294 \uD765\uBBF8\uB85C\uC6B4 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uCC29\uC218\uD558\uAC8C \uB420 \uAC70\uC5D0\uC694. \uC774 \uD504\uB85C\uC81D\uD2B8\uB294 \uCF54\uB529 \uAE30\uC220\uC744 \uD5A5\uC0C1\uC2DC\uD0AC \uBFD0\uB9CC \uC544\uB2C8\uB77C \uD3EC\uD2B8\uD3F4\uB9AC\uC624\uC5D0 \uCC3D\uC758\uC131\uC744 \uB354\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uADF8\uB7EC\uB2C8 \uC2DC\uC791\uD574\uBD10\uC694!",-1),k=n("h1",{id:"day-8-\u1100\u1175\u1107\u1161\u11AB-\u1100\u116E\u110E\u116E\u11A8",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#day-8-\u1100\u1175\u1107\u1161\u11AB-\u1100\u116E\u110E\u116E\u11A8","aria-hidden":"true"},"#"),a(" Day 8: \uAE30\uBC18 \uAD6C\uCD95")],-1),d=n("p",null,"\uB2E8\uACC4 1: HTML \uAD6C\uC870 \uC124\uC815\uBA3C\uC800, \uD504\uB85C\uC81D\uD2B8\uC6A9 \uAE30\uBCF8 HTML \uAD6C\uC870\uB97C \uB9CC\uB4E4\uC5B4\uBD05\uC2DC\uB2E4. \uCEE8\uD14C\uC774\uB108 \uC0C1\uC790, \uC12C \uD31D\uC5C5 \uBC0F \uD0D0\uC0C9 \uBC84\uD2BC\uACFC \uAC19\uC740 \uD544\uC694\uD55C \uC694\uC18C\uB97C \uD3EC\uD568\uD560 \uAC70\uC5D0\uC694.",-1),v=n("p",null,[n("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),m=e(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">&quot;viewport&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;width=device-width, initial-scale=1.0&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> \uC678\uBD80 \uC2A4\uD0C0\uC77C\uC2DC\uD2B8 \uB9C1\uD06C <span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">&quot;stylesheet&quot;</span> href<span class="token operator">=</span><span class="token string">&quot;style.css&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>Dynamic Island <span class="token keyword">of</span> iPhone<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> \uCEE8\uD14C\uC774\uB108 \uC0C1\uC790 <span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;box&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;inner&quot;</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> \uC544\uC77C\uB79C\uB4DC \uD31D\uC5C5 <span class="token operator">--</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;island_popup&quot;</span><span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;content&quot;</span><span class="token operator">&gt;</span>
                    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> \uC138\uBD80 \uC815\uBCF4 \uC139\uC158 <span class="token operator">--</span><span class="token operator">&gt;</span>
                    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;details&quot;</span><span class="token operator">&gt;</span>
                        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> \uC774\uBBF8\uC9C0 \uC0C1\uC790 <span class="token operator">--</span><span class="token operator">&gt;</span>
                        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;imgBx&quot;</span><span class="token operator">&gt;</span>
                            <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> \uC774\uBBF8\uC9C0 \uC18C\uC2A4 <span class="token operator">--</span><span class="token operator">&gt;</span>
                            <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">&quot;img.jpg&quot;</span><span class="token operator">&gt;</span>
                        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
                        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> \uC124\uBA85 <span class="token operator">--</span><span class="token operator">&gt;</span>
                        <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>Alexa Calling<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
                    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
                    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> \uB3D9\uC791 \uC139\uC158 <span class="token operator">--</span><span class="token operator">&gt;</span>
                    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;action&quot;</span><span class="token operator">&gt;</span>
                        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> \uC804\uD654 \uC544\uC774\uCF58 <span class="token operator">--</span><span class="token operator">&gt;</span>
                        <span class="token operator">&lt;</span>ion<span class="token operator">-</span>icon name<span class="token operator">=</span><span class="token string">&quot;call&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;red&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>ion<span class="token operator">-</span>icon<span class="token operator">&gt;</span>
                        <span class="token operator">&lt;</span>ion<span class="token operator">-</span>icon name<span class="token operator">=</span><span class="token string">&quot;call&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;green&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>ion<span class="token operator">-</span>icon<span class="token operator">&gt;</span>
                    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> \uB0B4\uBE44\uAC8C\uC774\uC158 \uBC84\uD2BC <span class="token operator">--</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;btn btn1&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;btn btn2&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;btn btn3&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;rightSide&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> Ionicons \uC2A4\uD06C\uB9BD\uD2B8 \uB85C\uB4DC <span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;module&quot;</span> src<span class="token operator">=</span><span class="token string">&quot;https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>script nomodule src<span class="token operator">=</span><span class="token string">&quot;https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> \uC0AC\uC6A9\uC790 \uC9C0\uC815 \uC2A4\uD06C\uB9BD\uD2B8 <span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;script.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uB2E8\uACC4 2: CSS\uB85C \uC2A4\uD0C0\uC77C \uC9C0\uC815\uC744 \uD1B5\uD574 \uD504\uB85C\uC81D\uD2B8\uB97C \uAFB8\uBA70 \uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \uB808\uC774\uC544\uC6C3, \uC0C9\uC0C1 \uBC0F \uC560\uB2C8\uBA54\uC774\uC158\uC744 \uC815\uC758\uD558\uC5EC \uC544\uC77C\uB79C\uB4DC \uD31D\uC5C5\uC744 \uC0DD\uB3D9\uAC10 \uC788\uAC8C \uB9CC\uB4E4\uC5B4 \uBD05\uC2DC\uB2E4.</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@import</span> <span class="token function">url</span><span class="token punctuation">(</span>&#39;<span class="token property">https</span><span class="token punctuation">:</span>//fonts.googleapis.com/css2?family=<span class="token property">Poppins</span><span class="token punctuation">:</span>wght<span class="token atrule"><span class="token rule">@300</span><span class="token punctuation">;</span></span></span>400<span class="token punctuation">;</span>500<span class="token punctuation">;</span>600<span class="token punctuation">;</span>700<span class="token punctuation">;</span>800<span class="token punctuation">;</span>900&amp;display=swap&#39;<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* \uAE30\uBCF8 \uC2A4\uD0C0\uC77C \uC7AC\uC124\uC815 */</span>
<span class="token selector">*</span>
<span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&#39;Poppins&#39;</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* body \uC2A4\uD0C0\uC77C \uC9C0\uC815 */</span>
<span class="token selector">body</span> 
<span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">min-height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \uCEE8\uD14C\uC774\uB108 \uC0C1\uC790 \uC2A4\uD0C0\uC77C \uC9C0\uC815 */</span>
<span class="token selector">.box</span>
<span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #666<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \uC0C1\uC790 \uC55E\uC758 \uAC00\uC0C1 \uC694\uC18C \uC2A4\uD0C0\uC77C \uC9C0\uC815 */</span>
<span class="token selector">.box::before</span> 
<span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">inset</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 48px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \uB0B4\uBD80 \uCEE8\uD14C\uC774\uB108 \uC2A4\uD0C0\uC77C \uC9C0\uC815 */</span>
<span class="token selector">.inner</span> 
<span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">inset</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>bg.jpg<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
    <span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>
    <span class="token property">background-position</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 48px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 10px solid #000<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \uD638\uBC84 \uC2DC \uB0B4\uBD80 \uCEE8\uD14C\uC774\uB108 \uACF5\uAC1C */</span>
<span class="token selector">.box:hover .inner</span> 
<span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \uB0B4\uBE44\uAC8C\uC774\uC158 \uBC84\uD2BC \uC2A4\uD0C0\uC77C \uC9C0\uC815 */</span>
<span class="token selector">.btn</span> 
<span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> -2px<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 110px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 26px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #444<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>#ccc<span class="token punctuation">,</span>#666<span class="token punctuation">,</span>#222<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> 10<span class="token punctuation">;</span>
    <span class="token property">border-top-left-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
    <span class="token property">border-bottom-left-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.btn.btn2</span>
<span class="token punctuation">{</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 160px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.btn.btn3</span>
<span class="token punctuation">{</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 220px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \uC624\uB978\uCABD \uCABD \uC694\uC18C \uC2A4\uD0C0\uC77C \uC9C0\uC815 */</span>
<span class="token selector">.rightSide</span>
<span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> -2px<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 170px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 70px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #444<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>#ccc<span class="token punctuation">,</span>#666<span class="token punctuation">,</span>#222<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> 10<span class="token punctuation">;</span>
    <span class="token property">border-top-right-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
    <span class="token property">border-bottom-right-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \uC544\uC77C\uB79C\uB4DC \uD31D\uC5C5 \uC2A4\uD0C0\uC77C \uC9C0\uC815 */</span>
<span class="token selector">.island_popup</span> 
<span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 90px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> 0.5s ease-in-out<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token comment">/* width: 200px; */</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \uD638\uBC84 \uC2DC \uC544\uC77C\uB79C\uB4DC \uD31D\uC5C5 \uD655\uB300 */</span>
<span class="token selector">.island_popup:hover</span> 
<span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \uD65C\uC131\uD654\uB41C \uC544\uC77C\uB79C\uB4DC \uD31D\uC5C5 \uC2A4\uD0C0\uC77C \uC9C0\uC815 */</span>
<span class="token selector">.island_popup.active</span>
<span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 250px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,4),b=e(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \uC12C \uD31D\uC5C5 \uC694\uC18C \uC120\uD0DD</span>
<span class="token keyword">let</span> popup <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;.island_popup&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \uD074\uB9AD \uC774\uBCA4\uD2B8 \uB9AC\uC2A4\uB108 \uCD94\uAC00\uD574\uC11C \uC12C \uD31D\uC5C5\uC5D0 \uD65C\uC131 \uD074\uB798\uC2A4\uB97C \uC804\uD658\uD569\uB2C8\uB2E4</span>
popup<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  popup<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">toggle</span><span class="token punctuation">(</span><span class="token string">&quot;active&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u1100\u1167\u11AF\u1105\u1169\u11AB" tabindex="-1"><a class="header-anchor" href="#\u1100\u1167\u11AF\u1105\u1169\u11AB" aria-hidden="true">#</a> \uACB0\uB860</h1><p>\uCD95\uD558\uD569\uB2C8\uB2E4! HTML, CSS, \uADF8\uB9AC\uACE0 JavaScript\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC0C1\uD638\uC791\uC6A9\uD558\uB294 \uC12C \uD31D\uC5C5\uC744 \uB9CC\uB4E4\uC5B4 #100DaysOfCode \uB3C4\uC804\uC758 \uC81C 8\uC77C\uC744 \uC131\uACF5\uC801\uC73C\uB85C \uC644\uB8CC\uD588\uC2B5\uB2C8\uB2E4. \uC774 \uD504\uB85C\uC81D\uD2B8\uB97C \uD1B5\uD574 \uC6F9 \uAC1C\uBC1C\uC5D0\uC11C \uC18C\uC911\uD55C \uAE30\uC220\uC744 \uBC30\uC6B0\uACE0 \uCC3D\uC758\uC801\uC778 \uD504\uB85C\uC81D\uD2B8\uB97C \uD3EC\uD2B8\uD3F4\uB9AC\uC624\uC5D0 \uCD94\uAC00\uD588\uC2B5\uB2C8\uB2E4. \uD6CC\uB96D\uD55C \uC791\uC5C5\uC744 \uC774\uC5B4\uAC00\uACE0 \uC55E\uC73C\uB85C \uB354 \uB9CE\uC740 \uCF54\uB529 \uBAA8\uD5D8\uC744 \uAE30\uB300\uD574\uC8FC\uC138\uC694!</p><p>\uC774 \uD504\uB85C\uC81D\uD2B8\uC758 \uC804\uCCB4 \uC18C\uC2A4 \uCF54\uB4DC\uB294 \uC5EC\uAE30\uC11C \uB2E4\uC6B4\uB85C\uB4DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC9C8\uBB38\uC774\uB098 \uC81C\uC548\uC774 \uC788\uC73C\uBA74 Bento\uC5D0\uC11C \uC5B8\uC81C\uB4E0\uC9C0 \uC5F0\uB77D\uD574\uC8FC\uC138\uC694. \uC990\uAC70\uC6B4 \uCF54\uB529\uD558\uC138\uC694! \u{1F680}</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div>`,5);function g(y,h){return s(),c("div",null,[r,u,k,d,v,(s(),p(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),m,(s(),p(o("script"),null,{default:t(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b])}var S=l(i,[["render",g],["__file","index.html.vue"]]);export{S as default};
