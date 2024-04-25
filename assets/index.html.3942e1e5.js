import{_ as p}from"./app.3052dcfb.js";import{l as n,m as t,E as e,G as o,p as a,Y as r,C as s,K as l}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var c="/assets/HowToMakeaResponsiveFormusingHTMLCssandJavaScript_0.d00a237b.png";const i={},u=s("img",{src:c},null,-1),k=s("p",null,"HTML, CSS, \uADF8\uB9AC\uACE0 JavaScript\uB97C \uC0AC\uC6A9\uD558\uC5EC \uBC18\uC751\uD615 \uC591\uC2DD\uC744 \uB9CC\uB4DC\uB294 \uC194\uB8E8\uC158 \uB610\uB294 \uCF54\uB4DC\uAC00 \uC5EC\uAE30 \uC788\uC2B5\uB2C8\uB2E4: HTMl, CSS, \uADF8\uB9AC\uACE0 JavaScript\uB97C \uC0AC\uC6A9\uD55C \uCD08\uBCF4\uC790\uC6A9 \uD504\uB85C\uC81D\uD2B8",-1),d=s("p",null,"\uAC04\uB2E8\uD558\uAC8C \uB450 \uCF54\uB4DC\uB97C \uBAA8\uB450 \uBCF5\uC0AC\uD558\uC5EC vs code\uC5D0 \uBD99\uC5EC\uB123\uAE30\uD558\uBA74 \uC790\uC720\uB86D\uAC8C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),v=s("h1",{id:"_1-index-html",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-index-html","aria-hidden":"true"},"#"),a(" 1. index.html")],-1),m=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),b=l(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">&quot;viewport&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;width=device-width, initial-scale=1.0&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>Form <span class="token constant">UI</span> Design<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span>

    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> custom css file linked <span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">&quot;stylesheet&quot;</span> href<span class="token operator">=</span><span class="token string">&quot;./style.css&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;container&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> form <span class="token operator">--</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>form action<span class="token operator">=</span><span class="token string">&quot;#&quot;</span><span class="token operator">&gt;</span>

        <span class="token operator">&lt;</span>h2 <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;form-heading&quot;</span><span class="token operator">&gt;</span>Registration Form<span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> name input fields <span class="token operator">--</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;name-input&quot;</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>input
            type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span>
            <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;name-input-field&quot;</span>
            placeholder<span class="token operator">=</span><span class="token string">&quot;First Name&quot;</span>
            required
          <span class="token operator">/</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;name-input-field&quot;</span> placeholder<span class="token operator">=</span><span class="token string">&quot;Last Name&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> other input fields <span class="token operator">--</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;other-input&quot;</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;email&quot;</span> required placeholder<span class="token operator">=</span><span class="token string">&quot;Email&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> required placeholder<span class="token operator">=</span><span class="token string">&quot;Mobile&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;password&quot;</span> required placeholder<span class="token operator">=</span><span class="token string">&quot;Password&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;password&quot;</span> required placeholder<span class="token operator">=</span><span class="token string">&quot;Confirm Password&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> terms and condition <span class="token operator">--</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;tnc&quot;</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;checkbox&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;chechbox&quot;</span> required <span class="token operator">/</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>Agree to terms <span class="token operator">&amp;</span> conditions<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> submit button <span class="token operator">--</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>button <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;btn&quot;</span><span class="token operator">&gt;</span>Submit<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-style-css" tabindex="-1"><a class="header-anchor" href="#_2-style-css" aria-hidden="true">#</a> 2. style.css</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">*</span> <span class="token punctuation">{</span>
    font<span class="token operator">-</span>family<span class="token operator">:</span> Arial<span class="token punctuation">,</span> Helvetica<span class="token punctuation">,</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>container <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 100vh<span class="token punctuation">;</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
    justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
    align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

form <span class="token punctuation">{</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> #53E0BC<span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> 450px<span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 600px<span class="token punctuation">;</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
    flex<span class="token operator">-</span>direction<span class="token operator">:</span> column<span class="token punctuation">;</span>
    justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
    <span class="token literal-property property">gap</span><span class="token operator">:</span> 15px<span class="token punctuation">;</span>
    padding<span class="token operator">-</span>left<span class="token operator">:</span> 5px<span class="token punctuation">;</span>
    border<span class="token operator">-</span>radius<span class="token operator">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>form<span class="token operator">-</span>heading <span class="token punctuation">{</span>
    text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

input <span class="token punctuation">{</span>
    font<span class="token operator">-</span>size<span class="token operator">:</span> 16px<span class="token punctuation">;</span>
    <span class="token literal-property property">border</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token literal-property property">outline</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> #ffffff<span class="token punctuation">;</span>
    border<span class="token operator">-</span>radius<span class="token operator">:</span> 10px<span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 40px<span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">90</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 3px 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>name<span class="token operator">-</span>input <span class="token punctuation">{</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
    justify<span class="token operator">-</span>content<span class="token operator">:</span> flex<span class="token operator">-</span>start<span class="token punctuation">;</span>
    align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
    <span class="token literal-property property">gap</span><span class="token operator">:</span> 15px<span class="token punctuation">;</span>
    padding<span class="token operator">-</span>left<span class="token operator">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>name<span class="token operator">-</span>input<span class="token operator">-</span>field <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">40</span><span class="token operator">%</span> <span class="token operator">!</span>important<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>other<span class="token operator">-</span>input <span class="token punctuation">{</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
    flex<span class="token operator">-</span>direction<span class="token operator">:</span> column<span class="token punctuation">;</span>
    align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
    <span class="token literal-property property">gap</span><span class="token operator">:</span> 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token punctuation">.</span>tnc <span class="token punctuation">{</span>
    <span class="token literal-property property">cursor</span><span class="token operator">:</span> pointer<span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span>300px <span class="token operator">!</span>important<span class="token punctuation">;</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
    justify<span class="token operator">-</span>content<span class="token operator">:</span> flex<span class="token operator">-</span>start<span class="token punctuation">;</span>
    align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
    <span class="token literal-property property">gap</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span>
    padding<span class="token operator">-</span>left<span class="token operator">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>btn <span class="token punctuation">{</span>
    <span class="token literal-property property">outline</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token literal-property property">border</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    border<span class="token operator">-</span>radius<span class="token operator">:</span> 10px<span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 40px<span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> 100px<span class="token punctuation">;</span>
    font<span class="token operator">-</span>weight<span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">;</span>
    margin<span class="token operator">-</span>left<span class="token operator">:</span> <span class="token number">38</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>btn<span class="token operator">:</span>hover <span class="token punctuation">{</span>
    <span class="token literal-property property">cursor</span><span class="token operator">:</span> pointer<span class="token punctuation">;</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> #<span class="token constant">EAF0F1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function g(y,h){return n(),t("div",null,[u,k,d,v,m,(n(),e(r("script"),null,{default:o(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b])}var C=p(i,[["render",g],["__file","index.html.vue"]]);export{C as default};
