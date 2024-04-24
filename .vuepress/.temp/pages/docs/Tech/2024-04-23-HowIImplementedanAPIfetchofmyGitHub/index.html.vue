<template><div><p>알트스쿨 프론트엔드 엔지니어링 학교에서 두 번째 학기 시험 프로젝트로 GitHub 포트폴리오 앱을 만들었습니다. 이 이야기는 제 과정과 필요한 기능들을 구현하는 방법에 관한 것입니다. 제 과정을 따라가면 비슷한 프로젝트를 만들어 포트폴리오에 추가할 수 있을 거에요.</p>
<p><img src="@source/docs/Tech/2024-04-23-HowIImplementedanAPIfetchofmyGitHub/img/HowIImplementedanAPIfetchofmyGitHub_0.png" alt="프로젝트 이미지"></p>
<h1 id="프로젝트-질문" tabindex="-1"><a class="header-anchor" href="#프로젝트-질문" aria-hidden="true">#</a> 프로젝트 질문</h1>
<p>GitHub 포트폴리오의 API를 가져와서 GitHub의 모든 레포지토리 목록이 있는 페이지를 표시하고(페이지는 레포지토리 목록에 대한 페이지네이션을 구현해야 함), 레포 목록에서 클릭한 단일 레포지토리에 대한 데이터를 보여주는 다른 페이지를 만들어야 합니다. 중첩된 루트를 사용하면서 모든 필수 도구를 리액트에서 사용하세요. 적절한 SEO, 에러 바운더리(에러 바운더리를 테스트하기 위한 페이지 보여주기) 및 404 페이지를 구현하세요. 좋은 UI와 디자인이 중요합니다.</p>
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
<h1 id="사용된-기술-패키지" tabindex="-1"><a class="header-anchor" href="#사용된-기술-패키지" aria-hidden="true">#</a> 사용된 기술/패키지</h1>
<ul>
<li>Vite + React</li>
<li>React icons</li>
<li>React router</li>
</ul>
<h1 id="설정" tabindex="-1"><a class="header-anchor" href="#설정" aria-hidden="true">#</a> 설정</h1>
<p>저는 Vite와 React를 사용하여 프로젝트를 설정했습니다. 필요없는 파일을 삭제하고 앱을 구축하기 위해 필요한 새 파일과 폴더를 만들었습니다. 사이트의 네비게이션 바를 포함하는 컴포넌트 폴더를 만들고, 다양한 페이지를 포함하는 Pages 폴더를 생성했습니다.</p>
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
<p>먼저 Navbar 컴포넌트를 만들고 App 컴포넌트에서 렌더링했어요. 코드 작성이 쉽고 모든 페이지에서 공통으로 사용될 컴포넌트여서 App 컴포넌트에 추가했어요.</p>
<p>Navbar 컴포넌트:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> FaGithub <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-icons/fa"</span>

<span class="token keyword">function</span> <span class="token function">Navbar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"navbar"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>FaGithub className<span class="token operator">=</span><span class="token string">"github-icon"</span><span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>h1<span class="token operator">></span>Maame의 GitHub<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Navbar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>App 컴포넌트:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">"./css/index.css"</span>
<span class="token keyword">import</span> Navbar <span class="token keyword">from</span> <span class="token string">"./components/Navbar"</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>   
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Navbar <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>CSS를 적용하고 생각한 디자인을 구현하기 위해 Home 컴포넌트에 각 레포지토리에 대한 placeholder 데이터를 넣었습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">"../css/index.css"</span>

<span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>   
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"repo-card"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>h2 className<span class="token operator">=</span><span class="token string">"repo-name"</span><span class="token operator">></span>리포지토리 이름<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
      <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">"language"</span><span class="token operator">></span>언어<span class="token operator">:</span> JavaScript<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">"date"</span><span class="token operator">></span>시작 날짜 및 시간<span class="token operator">:</span> <span class="token number">2022</span>년 <span class="token number">5</span>월 <span class="token number">4</span>일 <span class="token number">09</span><span class="token operator">:</span><span class="token number">34</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">"visibility"</span><span class="token operator">></span>공개 여부<span class="token operator">:</span> 공개<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Home
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="api-호출" tabindex="-1"><a class="header-anchor" href="#api-호출" aria-hidden="true">#</a> API 호출</h1>
<p>React에서 API를 호출하려면 fetchData라는 함수와 의존성 배열을 가지는 useEffect 훅을 사용할 수 있습니다. 이와 함께 API에서 가져온 데이터를 담을 컨테이너로 useState 훅을 사용할 수 있는데, 이를 위해 fetchRepos라는 함수를 작성하여 GitHub 레포지토리 API에서 데이터를 가져와 초기값이 빈 배열인 user라는 상태에 저장했습니다. 본인의 GitHub 레포지토리 데이터를 찾으려면 다음 URL을 사용하고 &quot;yourusername&quot;을 본인의 GitHub 사용자 이름으로 바꿔주세요: https://api.github.com/users/yourusername/repos</p>
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
<p>의존성 배열은 페이지네이션을 구현할 때까지 처음에는 비어 있었습니다. useEffect를 React에서 사용할 때 항상 필요한 의존성 배열은 효과(이 경우 API 호출)가 언제 실행되어야 하는지를 제어하고 컴포넌트 렌더링의 무한 루프를 방지하는 역할을 합니다.</p>
<p>그런 다음 검색한 데이터를 매핑하여 사용자에 저장하여 개별 저장소를 렌더링할 수 있게 했습니다.</p>
<p>지금 Home 컴포넌트의 코드는 다음과 같습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">"../css/index.css"</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span>

<span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
  
  <span class="token keyword">const</span> <span class="token punctuation">[</span>user<span class="token punctuation">,</span> setUser<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">fetchRepos</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://api.github.com/users/mbonamensa/repos</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">setUser</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>  
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">fetchRepos</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> 

  <span class="token keyword">const</span> userElements <span class="token operator">=</span> user<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">userElement</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"repo-card"</span> key<span class="token operator">=</span><span class="token punctuation">{</span>userElement<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>h2 className<span class="token operator">=</span><span class="token string">"repo-name"</span><span class="token operator">></span><span class="token punctuation">{</span>userElement<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
                <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">"language"</span><span class="token operator">></span>Langauge<span class="token operator">:</span> <span class="token punctuation">{</span>userElement<span class="token punctuation">.</span>language <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token string">"none"</span> <span class="token operator">:</span> userElement<span class="token punctuation">.</span>language<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
                <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">"date"</span><span class="token operator">></span>Start date <span class="token operator">&amp;</span> time<span class="token operator">:</span> <span class="token punctuation">{</span>userElement<span class="token punctuation">.</span>created_at<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
                <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">"visibility"</span><span class="token operator">></span>Visibility<span class="token operator">:</span> <span class="token punctuation">{</span>userElement<span class="token punctuation">.</span>visibility<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>section className<span class="token operator">=</span><span class="token string">"repo-container"</span><span class="token operator">></span>
            <span class="token punctuation">{</span>userElements<span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>section<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Home
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="페이지네이션" tabindex="-1"><a class="header-anchor" href="#페이지네이션" aria-hidden="true">#</a> 페이지네이션</h1>
<p>페이지네이션을 구현하려면 fetchRepos 함수와 useEffect를 업데이트해야 합니다. fetchRepos 함수에서는 GitHub에서 데이터를 가져오는 URL에 렌더링 당 페이지 수를 가져오는 매개변수가 포함되어야 합니다. 렌더링할 페이지 수를 추적하기 위해 새로운 상태를 만들어야 합니다. 저는 이 새로운 상태를 currentPage로 지정했습니다. 또한 클릭 시 후속 페이지를 렌더링하는 showViewMore라는 다른 상태를 생성했습니다. API에서 가져온 데이터에 따라 &quot;View More&quot;와 &quot;End of Repos&quot;라는 단어가 포함된 문자열로 초기화했습니다. showViewMore 값을 가진 <code v-pre>p</code> 요소에서 호출할 viewMore라는 함수를 만들었습니다. 이 함수는 currentPage 상태를 1 증가시키는 역할을 합니다. 이제 useEffect도 변경되어 currentPage가 종속성 배열에 포함되어 있어야 하므로 currentPage 상태가 변경될 때마다 애플리케이션이 다시 렌더링됩니다.</p>
<p>홈 컴포넌트는 이제 다음과 같이 보일 것입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">"../css/index.css"</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span>

<span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token keyword">const</span> <span class="token punctuation">[</span>user<span class="token punctuation">,</span> setUser<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>currentPage<span class="token punctuation">,</span> setCurrentPage<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>showViewMore<span class="token punctuation">,</span> setShowViewMore<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">fetchRepos</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://api.github.com/users/mbonamensa/repos?per_page=6&amp;page=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>currentPage<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setShowViewMore</span><span class="token punctuation">(</span><span class="token string">"End of Repos"</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">setUser</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>user<span class="token punctuation">,</span> <span class="token operator">...</span>data<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token function">setShowViewMore</span><span class="token punctuation">(</span><span class="token string">"View More"</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">fetchRepos</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>currentPage<span class="token punctuation">]</span><span class="token punctuation">)</span> 

  <span class="token keyword">const</span> <span class="token function-variable function">viewMore</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setCurrentPage</span><span class="token punctuation">(</span>currentPage <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> userElements <span class="token operator">=</span> user<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">userElement</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"repo-card"</span> key<span class="token operator">=</span><span class="token punctuation">{</span>userElement<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>h2 className<span class="token operator">=</span><span class="token string">"repo-name"</span><span class="token operator">></span><span class="token punctuation">{</span>userElement<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
        <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">"language"</span><span class="token operator">></span>언어<span class="token operator">:</span> <span class="token punctuation">{</span>userElement<span class="token punctuation">.</span>language <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token string">"없음"</span> <span class="token operator">:</span> userElement<span class="token punctuation">.</span>language<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
        <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">"date"</span><span class="token operator">></span>시작 날짜 및 시간<span class="token operator">:</span> <span class="token punctuation">{</span>userElement<span class="token punctuation">.</span>created_at<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
        <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">"visibility"</span><span class="token operator">></span>가시성<span class="token operator">:</span> <span class="token punctuation">{</span>userElement<span class="token punctuation">.</span>visibility<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>section className<span class="token operator">=</span><span class="token string">"repo-container"</span><span class="token operator">></span>
        <span class="token punctuation">{</span>userElements<span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>section<span class="token operator">></span>
      <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">"view-more"</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span>viewMore<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>showViewMore<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Home
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="라우팅-및-에러-페이지" tabindex="-1"><a class="header-anchor" href="#라우팅-및-에러-페이지" aria-hidden="true">#</a> 라우팅 및 에러 페이지</h1>
<p>더 많은 세부 정보가 포함된 단일 레포지토리를 표시하는 다른 페이지를 만들려면 react-router-dom을 사용해야 합니다. React 라우터 웹 프로젝트에는 공식 문서에서 해당 프로젝트에 대해 권장하는 createBrowserRouter를 사용했습니다. 앱을 렌더링하는 코드를 포함하는 main.jsx 파일에서 라우트 및 다양한 페이지 및 에러 페이지의 경로를 포함할 router 변수를 만들었습니다.</p>
<p>react-router-dom의 useRouteError를 사용하여 에러 페이지를 구현했습니다. errorPage라는 컴포넌트를 만들었습니다. 프로젝트 문제에서 요구된대로 중첩된 라우트를 구현하려면, Outlet 컴포넌트를 reac-router-dom에서 렌더링하도록 하여 id에 따라 개별 레포지토리 페이지에 세부 정보를 렌더링할 수 있도록했습니다(나중에 설명하겠습니다).</p>
<p>한 컴포넌트에서 다른 페이지로 이동하려면, 일반 HTML의 앵커 태그 <code v-pre>a href=&quot;&quot;</code>처럼 작동하는 <code v-pre>Link to=&quot;&quot;</code> 요소를 사용했습니다.</p>
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
<p>메인.jsx 파일이었습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">'react-dom/client'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> RouterProvider<span class="token punctuation">,</span> createBrowserRouter<span class="token punctuation">,</span> createRoutesFromElements<span class="token punctuation">,</span> Route <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App'</span>
<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">'./pages/Home'</span>
<span class="token keyword">import</span> RepoDetails <span class="token keyword">from</span> <span class="token string">'./pages/Repodetails'</span>
<span class="token keyword">import</span> ErrorPage <span class="token keyword">from</span> <span class="token string">'./pages/ErrorPage'</span>
<span class="token keyword">import</span> AppOutlet <span class="token keyword">from</span> <span class="token string">'./pages/AppOutlet'</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createBrowserRouter</span><span class="token punctuation">(</span>
  <span class="token function">createRoutesFromElements</span><span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/"</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Home <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> errorElement<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>ErrorPage <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/repodetails"</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>AppOutlet <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">":id"</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>RepoDetails <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Route<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>React<span class="token punctuation">.</span>StrictMode<span class="token operator">></span>
    <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>RouterProvider router<span class="token operator">=</span><span class="token punctuation">{</span>router<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>React<span class="token punctuation">.</span>StrictMode<span class="token operator">></span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>다음은 ErrorPage 컴포넌트에 작성한 오류 페이지를 구현하는 코드입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Link<span class="token punctuation">,</span> useRouteError <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-router-dom"</span>

<span class="token keyword">function</span> <span class="token function">ErrorPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> error <span class="token operator">=</span> <span class="token function">useRouteError</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"error-page"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>h1<span class="token operator">></span>Oops<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
            <span class="token operator">&lt;</span>p<span class="token operator">></span>죄송합니다<span class="token punctuation">,</span> 예기치 못한 오류가 발생했습니다<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
            <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">"error-status"</span><span class="token operator">></span><span class="token punctuation">{</span>error<span class="token punctuation">.</span>status<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
            <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">"error-status-text"</span><span class="token operator">></span><span class="token operator">&lt;</span>i<span class="token operator">></span><span class="token punctuation">{</span>error<span class="token punctuation">.</span>statusText<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
            <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">"/"</span><span class="token operator">></span><span class="token operator">&lt;</span>b<span class="token operator">></span>홈페이지<span class="token operator">&lt;</span><span class="token operator">/</span>b<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>로 이동해보세요<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> ErrorPage
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>The AppOutlet component:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Outlet <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-router-dom"</span>

<span class="token keyword">function</span> <span class="token function">AppOutlet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span>Outlet <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> AppOutlet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="하나의-저장소-보기" tabindex="-1"><a class="header-anchor" href="#하나의-저장소-보기" aria-hidden="true">#</a> 하나의 저장소 보기</h1>
<p>저장소 목록에서 한 것과 같이, 렌더링할 때 하나의 저장소가 어떻게 보일지 스타일을 도와주기 위해 가짜 데이터를 만들었습니다. 그리고 react-router-dom에서 useParams를 사용하여 id를 구조분해하여 API 호출 URL에서 사용했습니다. useParams 훅은 부모 URL의 각 자식의 id를 포함한 객체를 반환합니다.</p>
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
<p>main.jsx 파일에서 기억해요, :id가 Repodetails 컴포넌트로의 경로로 전달되었어요. 이는 각 id가 고유한 값(이 경우 repo 이름)을 가지고 있음을 뜻하죠. 이 값은 단일 레포지토리의 API를 호출하는 URL에 추가될 거예요. 저는 단일 레포지토리에서의 데이터를 state에 저장했고, details라고 이름을 지었어요.</p>
<p>디자인에서, 가능한 경우 각 레포의 라이브 사이트를 보여주고 레포가 갖고 있는 브랜치 수도 보여주고 싶어서, 배포 및 브랜치 정보를 반환하는 다른 API 호출을 만들었어요. 해당 정보들을 각각 deployment 및 branch로 state에 저장했죠. 이들 API 호출은 모두 개별의 useEffect 훅에서 이루어졌어요.</p>
<p>또한, 저는 디자인에서 React 아이콘을 사용했어요. react-icons에서 Font Awesome, Bootstrap 등의 아이콘들을 포함하고 있어요.</p>
<p>다음은 단일 레포지토리를 보는 코드에요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> FaRegStar<span class="token punctuation">,</span> FaRegEye<span class="token punctuation">,</span> FaCodeBranch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-icons/fa'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> TbGitFork <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-icons/tb'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useParams <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">RepoDetails</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token keyword">const</span> <span class="token punctuation">{</span> id <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>details<span class="token punctuation">,</span> setDetails<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>branch<span class="token punctuation">,</span> setBranch<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>deployment<span class="token punctuation">,</span> setDeployment<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
 
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://api.github.com/repos/mbonamensa/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">setDetails</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> 

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://api.github.com/repos/mbonamensa/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/branches</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">setBranch</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> 

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://api.github.com/repos/mbonamensa/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/deployments</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">setDeployment</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> 

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"repodetail"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"repodetail-card"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>h2 className<span class="token operator">=</span><span class="token string">"repo-name"</span><span class="token operator">></span><span class="token punctuation">{</span>details<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
            <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"repo-mini-details"</span><span class="token operator">></span>
              <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token operator">&lt;</span>FaRegStar className<span class="token operator">=</span><span class="token string">"icons"</span> <span class="token operator">/</span><span class="token operator">></span> Stars<span class="token operator">:</span> <span class="token punctuation">{</span>details<span class="token punctuation">.</span>stargazers_count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
              <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token operator">&lt;</span>FaRegEye className<span class="token operator">=</span><span class="token string">"icons"</span> <span class="token operator">/</span><span class="token operator">></span> Watch<span class="token operator">:</span> <span class="token punctuation">{</span>details<span class="token punctuation">.</span>watchers<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
              <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token operator">&lt;</span>TbGitFork className<span class="token operator">=</span><span class="token string">"icons"</span> <span class="token operator">/</span><span class="token operator">></span> Forks<span class="token operator">:</span> <span class="token punctuation">{</span>details<span class="token punctuation">.</span>forks<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
              <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token operator">&lt;</span>FaCodeBranch className<span class="token operator">=</span><span class="token string">"icons"</span> <span class="token operator">/</span><span class="token operator">></span> Branches<span class="token operator">:</span> <span class="token punctuation">{</span>branch<span class="token punctuation">.</span>length<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span>p<span class="token operator">></span>Main Language<span class="token operator">:</span> <span class="token punctuation">{</span>details<span class="token punctuation">.</span>language <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token string">"none"</span><span class="token operator">:</span> details<span class="token punctuation">.</span>language<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
            <span class="token operator">&lt;</span>p<span class="token operator">></span>Live site<span class="token operator">:</span> <span class="token punctuation">{</span>deployment<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">none</span><span class="token template-punctuation string">`</span></span> <span class="token operator">:</span> <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://mbonamensa.github.io/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>details<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token operator">></span>mbonamensa<span class="token punctuation">.</span>github<span class="token punctuation">.</span>io<span class="token operator">/</span><span class="token punctuation">{</span>details<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
            <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://github.com/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>details<span class="token punctuation">.</span>full_name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token operator">></span>View on Github<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> RepoDetails
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Home 컴포넌트 내에서 렌더링된 각 저장소 이름을 Repodetails 컴포넌트에 링크하는 부분만 남았습니다. 이를 수행하기 위해 <code v-pre>Link</code> 요소가 사용됩니다.</p>
<p>최종적으로 Home 컴포넌트는 다음과 같이 보일 것입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">"../css/index.css"</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Link <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-router-dom"</span>

<span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>   
  <span class="token keyword">const</span> <span class="token punctuation">[</span>user<span class="token punctuation">,</span> setUser<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>currentPage<span class="token punctuation">,</span> setCurrentPage<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>showViewMore<span class="token punctuation">,</span> setShowViewMore<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">fetchRepos</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://api.github.com/users/mbonamensa/repos?per_page=6&amp;page=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>currentPage<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setShowViewMore</span><span class="token punctuation">(</span><span class="token string">"End of Repos"</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">setUser</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>user<span class="token punctuation">,</span> <span class="token operator">...</span>data<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token function">setShowViewMore</span><span class="token punctuation">(</span><span class="token string">"View More"</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">fetchRepos</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>currentPage<span class="token punctuation">]</span><span class="token punctuation">)</span> 

  <span class="token keyword">const</span> <span class="token function-variable function">viewMore</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setCurrentPage</span><span class="token punctuation">(</span>currentPage <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> userElements <span class="token operator">=</span> user<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">userElement</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"repo-card"</span> key<span class="token operator">=</span><span class="token punctuation">{</span>userElement<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">></span>
              <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/repodetails/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>userElement<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token operator">></span><span class="token operator">&lt;</span>h2 className<span class="token operator">=</span><span class="token string">"repo-name"</span><span class="token operator">></span><span class="token punctuation">{</span>userElement<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
              <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">"language"</span><span class="token operator">></span>Langauge<span class="token operator">:</span> <span class="token punctuation">{</span>userElement<span class="token punctuation">.</span>language <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token string">"none"</span> <span class="token operator">:</span> userElement<span class="token punctuation">.</span>language<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
              <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">"date"</span><span class="token operator">></span>Start date <span class="token operator">&amp;</span> time<span class="token operator">:</span> <span class="token punctuation">{</span>userElement<span class="token punctuation">.</span>created_at<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
              <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">"visibility"</span><span class="token operator">></span>Visibility<span class="token operator">:</span> <span class="token punctuation">{</span>userElement<span class="token punctuation">.</span>visibility<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>section className<span class="token operator">=</span><span class="token string">"repo-container"</span><span class="token operator">></span>
          <span class="token punctuation">{</span>userElements<span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>section<span class="token operator">></span>
      <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">"view-more"</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span>viewMore<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>showViewMore<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Home
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>SEO를 구현하는 과정에서 index.html 파일의 meta 태그의 이름과 content 속성을 사용하여 앱에 대한 간단한 설명을 작성했습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"description"</span> content<span class="token operator">=</span><span class="token string">"GitHub 포트폴리오의 API를 가져와 하나의 저장소에 대한 데이터를 표시하는 리액트 앱입니다. 주니어 프런트엔드 엔지니어가 만든 저장소 목록에서 클릭하면 해당 저장소의 데이터를 볼 수 있습니다."</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이 프로젝트는 API, useEffect 및 React Router를 활용한 첫 번째 작업이었어요. 이를 통해 경험을 쌓고 기술을 향상시킬 수 있는 기회를 가졌다는 것에 기쁩니다.</p>
<p>질문이나 제안이 있으시면 자유롭게 댓글을 달아주세요.</p>
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
<p>감사합니다!</p>
</div></template>
