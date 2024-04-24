<template><div><h2 id="nextjs-14-앱-라우터에서-supabase-auth를-사용하는-단계별-가이드" tabindex="-1"><a class="header-anchor" href="#nextjs-14-앱-라우터에서-supabase-auth를-사용하는-단계별-가이드" aria-hidden="true">#</a> NextJs 14 앱 라우터에서 Supabase Auth를 사용하는 단계별 가이드</h2>
<p>이 게시물에서는 서버 측 렌더링(SSR)을 통해 Next.js 14 앱 라우터에 Supabase Auth를 원활하게 통합하는 방법을 단계별로 안내합니다. 이 프로세스를 통해 Next.js 애플리케이션의 인증 기능을 강화하는 것이 쉬워질 것입니다.</p>
<h1 id="필수-요건" tabindex="-1"><a class="header-anchor" href="#필수-요건" aria-hidden="true">#</a> 필수 요건:</h1>
<ul>
<li>Next 14</li>
<li>TailwindCSS</li>
<li>Supabase Auth</li>
</ul>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="설치" tabindex="-1"><a class="header-anchor" href="#설치" aria-hidden="true">#</a> 설치:</h1>
<p>다음 명령을 실행하여 이 사전 조건을 설치하세요</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// NEXTJS 14</span>
npx create<span class="token operator">-</span>next<span class="token operator">-</span>app@latest

<span class="token comment">// SUPABASE AUTH</span>
npm install @supabase<span class="token operator">/</span>supabase<span class="token operator">-</span>js @supabase<span class="token operator">/</span>ssr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="단계-1-ui-구성" tabindex="-1"><a class="header-anchor" href="#단계-1-ui-구성" aria-hidden="true">#</a> 단계 1: UI 구성</h1>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>설치가 완료되면 로그인, 가입, 오류 및 환영 페이지를 만들어보세요.</p>
<ol>
<li>로그인/가입 페이지 만들기</li>
</ol>
<ul>
<li><code v-pre>/app/login/page.tsx</code> 파일을 생성하세요.</li>
<li>파일 안에 <code v-pre>SupabaseLogo/</code> 컴포넌트가 있어야 합니다. 이 컴포넌트는 Supabase 로고를 포함한 SVG 파일을 가지고 있습니다.</li>
<li>로그인 폼을 위한 <code v-pre>Button/</code>, <code v-pre>Input/</code>, <code v-pre>Separator/</code>, <code v-pre>Label/</code> 등이 있는 스타일링된 tailwind 컴포넌트가 있어야 합니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> SupabaseLogo <span class="token keyword">from</span> <span class="token string">'@/components/logo-supabase'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">LoginPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>main className<span class="token operator">=</span><span class="token string">"flex min-h-screen flex-col items-center justify-between p-24"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"bg-white/10 rounded-md p-6 border border-white/5 w-[300px]"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"flex justify-center mb-6 mt-2"</span><span class="token operator">></span><span class="token operator">&lt;</span>SupabaseLogo<span class="token operator">/</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        
        <span class="token operator">&lt;</span>form className<span class="token operator">=</span><span class="token string">'flex flex-col gap-2'</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>Label htmlFor<span class="token operator">=</span><span class="token string">"email"</span><span class="token operator">></span>이메일<span class="token operator">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>Label<span class="token operator">></span>
          <span class="token operator">&lt;</span>Input id<span class="token operator">=</span><span class="token string">"email"</span> name<span class="token operator">=</span><span class="token string">"email"</span> type<span class="token operator">=</span><span class="token string">"email"</span> required <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>Label htmlFor<span class="token operator">=</span><span class="token string">"password"</span><span class="token operator">></span>비밀번호<span class="token operator">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>Label<span class="token operator">></span>
          <span class="token operator">&lt;</span>Input id<span class="token operator">=</span><span class="token string">"password"</span> name<span class="token operator">=</span><span class="token string">"password"</span> type<span class="token operator">=</span><span class="token string">"password"</span> required<span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>Separator <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>Button<span class="token operator">></span>로그인<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
          <span class="token operator">&lt;</span>Button<span class="token operator">></span>가입하기<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">ButtonProps</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>ButtonHTMLAttributes</span><span class="token operator">&lt;</span>HTMLButtonElement<span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">InputProps</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>InputHTMLAttributes</span><span class="token operator">&lt;</span>HTMLInputElement<span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">LabelProps</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>LabelHTMLAttributes</span><span class="token operator">&lt;</span>HTMLLabelElement<span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token literal-property property">Button</span><span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token operator">&lt;</span>ButtonProps<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>children<span class="token punctuation">,</span> <span class="token operator">...</span>rest<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>button className<span class="token operator">=</span><span class="token string">"rounded hover:bg-white hover:text-black font-semibold px-4 py-2 border border-white/20 transition duration-100 ease-in-out"</span> <span class="token punctuation">{</span><span class="token operator">...</span>rest<span class="token punctuation">}</span><span class="token operator">></span>
    <span class="token punctuation">{</span>children<span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token literal-property property">Input</span><span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token operator">&lt;</span>InputProps<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span><span class="token operator">...</span>rest<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>input className<span class="token operator">=</span><span class="token string">"rounded px-4 py-2 text-white outline-none bg-black/30 border border-white/10 focus:bg-white focus:text-black"</span> <span class="token punctuation">{</span><span class="token operator">...</span>rest<span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token literal-property property">Label</span><span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token operator">&lt;</span>LabelProps<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>children<span class="token punctuation">,</span> <span class="token operator">...</span>rest<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>label <span class="token punctuation">{</span><span class="token operator">...</span>rest<span class="token punctuation">}</span> className<span class="token operator">=</span><span class="token string">"text-sm text-white/30"</span><span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">Separator</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>hr className<span class="token operator">=</span><span class="token string">"border-white/10 my-2"</span><span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<ul>
<li>SupabaseLogo 컴포넌트용 /components/logo-supabase.tsx 파일을 생성하세요.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">SupabaseLogo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>svg width<span class="token operator">=</span><span class="token string">"150"</span> viewBox<span class="token operator">=</span><span class="token string">"0 0 581 113"</span> fill<span class="token operator">=</span><span class="token string">"none"</span> xmlns<span class="token operator">=</span><span class="token string">"http://www.w3.org/2000/svg"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>path d<span class="token operator">=</span><span class="token string">"M151.397 66.7608C151.996 72.3621 157.091 81.9642 171.877 81.9642C184.764 81.9642 190.959 73.7624 190.959 65.7607C190.959 58.559 186.063 52.6577 176.373 50.6571L169.379 49.1569C166.682 48.6568 164.884 47.1565 164.884 44.7559C164.884 41.9552 167.681 39.8549 171.178 39.8549C176.772 39.8549 178.87 43.5556 179.27 46.4564L190.359 43.9558C189.76 38.6546 185.064 29.7527 171.078 29.7527C160.488 29.7527 152.696 37.0543 152.696 45.8561C152.696 52.7576 156.991 58.4591 166.482 60.5594L172.976 62.0598C176.772 62.8599 178.271 64.6605 178.271 66.8609C178.271 69.4615 176.173 71.762 171.777 71.762C165.983 71.762 163.085 68.1611 162.786 64.2602L151.397 66.7608Z"</span> fill<span class="token operator">=</span><span class="token string">"white"</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>path d<span class="token operator">=</span><span class="token string">"M233.421 80.4639H246.109C245.909 78.7635 245.609 75.3628 245.609 71.5618V31.2529H232.321V59.8592C232.321 65.5606 228.925 69.5614 223.031 69.5614C216.837 69.5614 214.039 65.1604 214.039 59.6592V31.2529H200.752V62.3599C200.752 73.0622 207.545 81.7642 219.434 81.7642C224.628 81.7642 230.325 79.7638 233.022 75.1627C233.022 77.1631 233.221 79.4636 233.421 80.4639Z"</span> fill<span class="token operator">=</span><span class="token string">"white"</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>path d<span class="token operator">=</span><span class="token string">"M273.076 99.4682V75.663C275.473 78.9636 280.469 81.6644 287.263 81.6644C301.149 81.6644 310.439 70.6617 310.439 55.7584C310.439 41.1553 302.148 30.1528 287.762 30.1528C280.37 30.1528 274.875 33.4534 272.677 37.2544V31.253H259.79V99.4682H273.076ZM297.352 55.8585C297.352 64.6606 291.958 69.7616 285.164 69.7616C278.372 69.7616 272.877 64.5605 272.877 55.8585C272.877 47.1566 278.372 42.0554 285.164 42.0554C291.958 42.0554 297.352 47.1566 297.352 55.8585Z"</span> fill<span class="token operator">=</span><span class="token string">"white"</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>path d<span class="token operator">=</span><span class="token string">"M317.964 67.0609C317.964 74.7627 324.357 81.8643 334.848 81.8643C342.139 81.8643 346.835 78.4634 349.332 74.5625C349.332 76.463 349.532 79.1635 349.832 80.4639H362.02C361.72 78.7635 361.422 75.2627 361.422 72.6622V48.4567C361.422 38.5545 355.627 29.7527 340.043 29.7527C326.855 29.7527 319.761 38.2544 318.963 45.9562L330.751 48.4567C331.151 44.1558 334.348 40.455 340.141 40.455C345.737 40.455 348.434 43.3556 348.434 46.8564C348.434 48.5568 347.536 49.9572 344.738 50.3572L332.65 52.1576C324.458 53.3579 317.964 58.2589 317.964 67.0609ZM337.644 71.962C333.349 71.962 331.25 69.1614 331.25 66.2608C331.25 62.4599 333.947 60.5594 337.345 60.0594L348.434 58.359V60.5594C348.434 69.2615 343.239 71.962 337.644 71.962Z"</span> fill<span class="token operator">=</span><span class="token string">"white"</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>path d<span class="token operator">=</span><span class="token string">"M387.703 80.4641V74.4627C390.299 78.6637 395.494 81.6644 402.288 81.6644C416.276 81.6644 425.467 70.5618 425.467 55.6585C425.467 41.0552 417.174 29.9528 402.788 29.9528C395.494 29.9528 390.1 33.1535 387.902 36.6541V8.04785H374.815V80.4641H387.703ZM412.178 55.7584C412.178 64.7605 406.784 69.7616 399.99 69.7616C393.297 69.7616 387.703 64.6606 387.703 55.7584C387.703 46.7564 393.297 41.8554 399.99 41.8554C406.784 41.8554 412.178 46.7564 412.178 55.7584Z"</span> fill<span class="token operator">=</span><span class="token string">"white"</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>path d<span class="token operator">=</span><span class="token string">"M432.99 67.0609C432.99 74.7627 439.383 81.8643 449.873 81.8643C457.165 81.8643 461.862 78.4634 464.358 74.5625C464.358 76.463 464.559 79.1635 464.858 80.4639H477.046C476.748 78.7635 476.448 75.2627 476.448 72.6622V48.4567C476.448 38.5545 470.653 29.7527 455.068 29.7527C441.881 29.7527 434.788 38.2544 433.989 45.9562L445.776 48.4567C446.177 44.1558 449.374 40.455 455.167 40.455C460.763 40.455 463.46 43.3556 463.46 46.8564C463.46 48.5568 462.561 49.9572 459.763 50.3572L447.676 52.1576C439.484 53.3579 432.99 58.2589 432.99 67.0609ZM452.671 71.962C448.375 71.962 446.276 69.1614 446.276 66.2608C446.276 62.4599 448.973 60.5594 452.371 60.0594L463.46 58.359V60.5594C463.46 69.2615 458.265 71.962 452.671 71.962Z"</span> fill<span class="token operator">=</span><span class="token string">"white"</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>path d<span class="token operator">=</span>"<span class="token constant">M485</span><span class="token number">.645</span> <span class="token number">66.7608</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">ErrorPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>main className<span class="token operator">=</span><span class="token string">"flex min-h-screen flex-col items-center justify-between p-24"</span><span class="token operator">></span>
      죄송합니다<span class="token punctuation">,</span> 문제가 발생했습니다<span class="token punctuation">.</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>환영 페이지 만들기</li>
</ol>
<p>이 페이지는 사용자를 환영하는 페이지입니다. 사용자가 인증되었다면 사용자의 이메일이 표시될 것입니다. 이 페이지를 만들려면 /app/page.tsx 파일을 업데이트하고 다음 코드를 따라하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">"next/link"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>main className<span class="token operator">=</span><span class="token string">"flex min-h-screen flex-col items-center justify-between p-24"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>환영합니다<span class="token punctuation">,</span> <span class="token operator">&lt;</span>strong<span class="token operator">></span>게스트<span class="token operator">&lt;</span><span class="token operator">/</span>strong<span class="token operator">></span>님<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>

      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"flex gap-2 text-sm mt-1"</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>LinkButton href<span class="token operator">=</span><span class="token string">"/login"</span><span class="token operator">></span>로그인<span class="token operator">&lt;</span><span class="token operator">/</span>LinkButton<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>            
  <span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">LinkButton</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>href<span class="token punctuation">,</span> children<span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">href</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token punctuation">{</span>href<span class="token punctuation">}</span> className<span class="token operator">=</span><span class="token string">"text-white/30 hover:text-white transition duration-100 ease-in-out"</span><span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="단계-2-클라이언트-supabase-생성하기" tabindex="-1"><a class="header-anchor" href="#단계-2-클라이언트-supabase-생성하기" aria-hidden="true">#</a> 단계 2: 클라이언트 Supabase 생성하기</h1>
<p>다음 단계에는 Supabase의 클라이언트를 생성하게 됩니다. Supabase에서 로그인, 가입 등의 기능을 사용할 수 있게 될 것입니다.</p>
<ol>
<li>환경 설정</li>
</ol>
<ul>
<li>새로운 Supabase 계정 생성</li>
<li>새 프로젝트 생성</li>
<li>프로젝트 설정 열기 - API 섹션</li>
<li>루트 폴더에 .env.local 파일 생성</li>
<li>URL 및 Anon/Public Key 값을 .env.local로 복사하세요</li>
</ul>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">NEXT_PUBLIC_SUPABASE_URL</span><span class="token operator">=</span><span class="token operator">&lt;</span>당신의_수파베이스_프로젝트_URL<span class="token operator">></span>
<span class="token constant">NEXT_PUBLIC_SUPABASE_ANON_KEY</span><span class="token operator">=</span><span class="token operator">&lt;</span>당신의_수파베이스_익명_키<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>클라이언트 측 Supabase 클라이언트 생성</li>
</ol>
<ul>
<li>/utils/supabase/client.ts에 새 파일을 만들고 다음 코드를 따르세요</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createBrowserClient <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@supabase/ssr'</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">createBrowserClient</span><span class="token punctuation">(</span>
    process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_SUPABASE_URL</span><span class="token operator">!</span><span class="token punctuation">,</span>
    process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_SUPABASE_ANON_KEY</span><span class="token operator">!</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<ol start="3">
<li>서버 측 Supabase 클라이언트 생성</li>
</ol>
<ul>
<li>/utils/supabase/server.ts에 새 파일을 생성합니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createServerClient<span class="token punctuation">,</span> type CookieOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@supabase/ssr'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> cookies <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/headers'</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> cookieStore <span class="token operator">=</span> <span class="token function">cookies</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token function">createServerClient</span><span class="token punctuation">(</span>
    process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_SUPABASE_URL</span><span class="token operator">!</span><span class="token punctuation">,</span>
    process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_SUPABASE_ANON_KEY</span><span class="token operator">!</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">cookies</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">get</span><span class="token punctuation">(</span>name<span class="token operator">:</span> string<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> cookieStore<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token operator">?.</span>value
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">set</span><span class="token punctuation">(</span>name<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">options</span><span class="token operator">:</span> CookieOptions<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">try</span> <span class="token punctuation">{</span>
            cookieStore<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token operator">...</span>options <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">remove</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">options</span><span class="token operator">:</span> CookieOptions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">try</span> <span class="token punctuation">{</span>
            cookieStore<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token operator">...</span>options <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>미들웨어 생성</li>
</ol>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이 미들웨어는 getUser() 함수를 사용하여 인증 토큰을 새로 고칩니다. 루트 폴더에 middleware.ts 라는 새 파일을 만들고 다음 코드를 따라하거나 복사하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createServerClient<span class="token punctuation">,</span> type CookieOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@supabase/ssr'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse<span class="token punctuation">,</span> type NextRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/server'</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">middleware</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">request</span><span class="token operator">:</span> NextRequest</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> response <span class="token operator">=</span> NextResponse<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">request</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">headers</span><span class="token operator">:</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> supabase <span class="token operator">=</span> <span class="token function">createServerClient</span><span class="token punctuation">(</span>
    process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_SUPABASE_URL</span><span class="token operator">!</span><span class="token punctuation">,</span>
    process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_SUPABASE_ANON_KEY</span><span class="token operator">!</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">cookies</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">get</span><span class="token punctuation">(</span>name<span class="token operator">:</span> string<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> request<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token operator">?.</span>value
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">set</span><span class="token punctuation">(</span>name<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">options</span><span class="token operator">:</span> CookieOptions<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          request<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            name<span class="token punctuation">,</span>
            value<span class="token punctuation">,</span>
            <span class="token operator">...</span>options<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
          response <span class="token operator">=</span> NextResponse<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">request</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">headers</span><span class="token operator">:</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
          response<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            name<span class="token punctuation">,</span>
            value<span class="token punctuation">,</span>
            <span class="token operator">...</span>options<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">remove</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">options</span><span class="token operator">:</span> CookieOptions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          request<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            name<span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
            <span class="token operator">...</span>options<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
          response <span class="token operator">=</span> NextResponse<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">request</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">headers</span><span class="token operator">:</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
          response<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            name<span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
            <span class="token operator">...</span>options<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span>

  <span class="token keyword">await</span> supabase<span class="token punctuation">.</span>auth<span class="token punctuation">.</span><span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> response
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">matcher</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">/*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */</span>
    <span class="token string">'/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="단계-3-supabase-통합" tabindex="-1"><a class="header-anchor" href="#단계-3-supabase-통합" aria-hidden="true">#</a> 단계 3: Supabase 통합</h1>
<p>Supabase를 위한 기능을 생성한 후에는 해당 유틸 함수를 로그인/가입 및 환영 페이지와 통합할 수 있습니다.</p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<ol>
<li>로그인/가입 동작</li>
</ol>
<ul>
<li>/app/login/action.ts에 새 파일을 만들고 다음 코드를 따르세요.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">'use server'</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> revalidatePath <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/cache'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> redirect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/navigation'</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> createClient <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/utils/supabase/server'</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">formData</span><span class="token operator">:</span> FormData</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> supabase <span class="token operator">=</span> <span class="token function">createClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">email</span><span class="token operator">:</span> formData<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'email'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> string<span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> formData<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'password'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> string<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> <span class="token punctuation">{</span> error <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> supabase<span class="token punctuation">.</span>auth<span class="token punctuation">.</span><span class="token function">signInWithPassword</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string">'/error'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">revalidatePath</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token string">'layout'</span><span class="token punctuation">)</span>
  <span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">signup</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">formData</span><span class="token operator">:</span> FormData</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> supabase <span class="token operator">=</span> <span class="token function">createClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">email</span><span class="token operator">:</span> formData<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'email'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> string<span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> formData<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'password'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> string<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> <span class="token punctuation">{</span> error <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> supabase<span class="token punctuation">.</span>auth<span class="token punctuation">.</span><span class="token function">signUp</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string">'/error'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">revalidatePath</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token string">'layout'</span><span class="token punctuation">)</span>
  <span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string">'/auth/notification'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>로그인 페이지와 통합하기</li>
</ol>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<ul>
<li>로그인 페이지의 기능 로그인 및 가입 기능을 /app/login/page.tsx에 가져오세요</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">...</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> login<span class="token punctuation">,</span> signup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./actions'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">LoginPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>main className<span class="token operator">=</span><span class="token string">"..."</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"..."</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"..."</span><span class="token operator">></span><span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        
        <span class="token operator">&lt;</span>form className<span class="token operator">=</span><span class="token string">'...'</span><span class="token operator">></span>
          <span class="token operator">...</span>
          <span class="token operator">&lt;</span>Button formAction<span class="token operator">=</span><span class="token punctuation">{</span>login<span class="token punctuation">}</span><span class="token operator">></span>로그인<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
          <span class="token operator">&lt;</span>Button formAction<span class="token operator">=</span><span class="token punctuation">{</span>signup<span class="token punctuation">}</span><span class="token operator">></span>가입하기<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>알림 페이지</li>
</ol>
<p>Supabase Auth에서 가입한 후 사용자는 사용자를 활성화하는 이메일을 수신합니다. 이 페이지는 사용자에게 이메일을 확인하도록 알림하는 페이지입니다. 이 페이지를 만들려면 /app/auth/notification/page.tsx에 새 파일을 만들고 다음 코드를 따르세요.</p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">NotificationPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>main className<span class="token operator">=</span><span class="token string">"flex min-h-screen flex-col items-center justify-between p-24"</span><span class="token operator">></span>
      이메일을 확인해주세요<span class="token punctuation">.</span> 
    <span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>확인된 가입 이메일 템플릿 업데이트</li>
</ol>
<ul>
<li>Supabase 대시보드로 이동 — Authentication — 이메일 템플릿</li>
<li>가입 확인 이메일을 다음과 같이 업데이트</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>h2<span class="token operator">></span>가입을 확인하세요<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>

<span class="token operator">&lt;</span>p<span class="token operator">></span>사용자를 확인하려면 다음 링크를 따르세요<span class="token operator">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
<span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"{ .SiteURL }/auth/confirm?token_hash={ .TokenHash }&amp;type=signup"</span><span class="token operator">></span>이메일 확인<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<ol start="5">
<li>API 사용자 활성화</li>
</ol>
<p>사용자가 링크 'Confirm your mail'을 클릭하면이 API로 리디렉션됩니다. TokenHash 및 유형을 사용하여 사용자를 확인합니다.</p>
<ul>
<li>/app/auth/confirm/route.ts에 새 파일을 만들고 다음 코드를 따르세요</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> type EmailOtpType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@supabase/supabase-js'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> type NextRequest<span class="token punctuation">,</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/server'</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> createClient <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/utils/supabase/server'</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token constant">GET</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">request</span><span class="token operator">:</span> NextRequest</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> searchParams <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>url<span class="token punctuation">)</span>
  <span class="token keyword">const</span> token_hash <span class="token operator">=</span> searchParams<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'token_hash'</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> type <span class="token operator">=</span> searchParams<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'type'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> EmailOtpType <span class="token operator">|</span> <span class="token keyword">null</span>
  <span class="token keyword">const</span> next <span class="token operator">=</span> searchParams<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'next'</span><span class="token punctuation">)</span> <span class="token operator">??</span> <span class="token string">'/'</span>

  <span class="token keyword">const</span> redirectTo <span class="token operator">=</span> request<span class="token punctuation">.</span>nextUrl<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  redirectTo<span class="token punctuation">.</span>pathname <span class="token operator">=</span> next
  redirectTo<span class="token punctuation">.</span>searchParams<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">'token_hash'</span><span class="token punctuation">)</span>
  redirectTo<span class="token punctuation">.</span>searchParams<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">'type'</span><span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>token_hash <span class="token operator">&amp;&amp;</span> type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> supabase <span class="token operator">=</span> <span class="token function">createClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token punctuation">{</span> error <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> supabase<span class="token punctuation">.</span>auth<span class="token punctuation">.</span><span class="token function">verifyOtp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      type<span class="token punctuation">,</span>
      token_hash<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      redirectTo<span class="token punctuation">.</span>searchParams<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">'next'</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span>redirectTo<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 사용자를 오류 페이지로 리디렉션하고 몇 가지 지침을 표시합니다.</span>
  redirectTo<span class="token punctuation">.</span>pathname <span class="token operator">=</span> <span class="token string">'/error'</span>
  <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span>redirectTo<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<ol start="6">
<li>로그아웃 컴포넌트</li>
</ol>
<ul>
<li>/components/sign-out.tsx에 새 파일 생성</li>
<li>이 파일에는 supabase에서 사용자를 로그아웃하는 버튼과 서버 작업 함수를 포함해야 합니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createClient <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/utils/supabase/server"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> redirect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/navigation"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">SignOut</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
  <span class="token keyword">const</span> <span class="token function-variable function">logout</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token string">"서버 사용"</span>
    <span class="token keyword">const</span> supabase <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">createClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> supabase<span class="token punctuation">.</span>auth<span class="token punctuation">.</span><span class="token function">signOut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string">"/login"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>form<span class="token operator">></span>
      <span class="token operator">&lt;</span>button formAction<span class="token operator">=</span><span class="token punctuation">{</span>logout<span class="token punctuation">}</span> className<span class="token operator">=</span><span class="token string">"text-white/30 hover:text-white transition duration-100 ease-in-out"</span><span class="token operator">></span>
        로그아웃
      <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7">
<li>웰컴 페이지에 Supabase 통합하기</li>
</ol>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<ul>
<li>웰컴 페이지 업데이트 /app/page.tsx</li>
<li>SignOut 가져와 utils에서 createClient 서버 사이드로 임포트</li>
<li>사용자가 인증되었는지 확인하기 위해 getSession 함수 호출</li>
<li>사용자가 인증된 경우 이메일과 SignOut 버튼을 표시</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">...</span>
<span class="token keyword">import</span> SignOut <span class="token keyword">from</span> <span class="token string">"@/components/sign-out"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createClient <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/utils/supabase/server"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> supabase <span class="token operator">=</span> <span class="token function">createClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> session <span class="token operator">=</span> <span class="token keyword">await</span> supabase<span class="token punctuation">.</span>auth<span class="token punctuation">.</span><span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> user <span class="token operator">=</span> session<span class="token punctuation">.</span>data<span class="token operator">?.</span>session<span class="token operator">?.</span>user<span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>main className<span class="token operator">=</span><span class="token string">"..."</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>div<span class="token operator">></span>환영합니다<span class="token punctuation">,</span> <span class="token operator">&lt;</span>strong<span class="token operator">></span><span class="token punctuation">{</span>user<span class="token operator">?.</span>email <span class="token operator">??</span> <span class="token string">"손님"</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>strong<span class="token operator">></span>님<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>

        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"flex gap-2 text-sm mt-1"</span><span class="token operator">></span>
          <span class="token punctuation">{</span>user 
            <span class="token operator">?</span> <span class="token operator">&lt;</span>SignOut<span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">:</span> <span class="token operator">&lt;</span>LinkButton href<span class="token operator">=</span><span class="token string">"/login"</span><span class="token operator">></span>로그인<span class="token operator">&lt;</span><span class="token operator">/</span>LinkButton<span class="token operator">></span>
          <span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>            
    <span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 단계를 완료한 후, 다음 앱에서 테스트할 수 있습니다.</p>
</div></template>
