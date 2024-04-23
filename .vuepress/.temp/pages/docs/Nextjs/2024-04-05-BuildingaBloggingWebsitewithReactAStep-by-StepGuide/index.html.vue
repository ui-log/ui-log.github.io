<template><div><h1 id="소개" tabindex="-1"><a class="header-anchor" href="#소개" aria-hidden="true">#</a> 소개</h1>
<p>React는 상호 작용형 웹사이트와 사용자 인터페이스를 만드는 데 사용되는 JavaScript 라이브러리로, 단일 페이지 애플리케이션(SPAs)을 개발하기 쉽게 만들어줍니다.</p>
<p>SPA에서는 서버가 브라우저로 단일 HTML 페이지를 보내고, React가 브라우저에서 전체 웹사이트를 관리합니다.</p>
<p>전통적인 웹사이트에서는 각 링크 클릭이 새로운 HTML 페이지에 대한 서버 요청을 트리거합니다. 그러나 React를 사용하면 브라우저가 서버로부터 새로운 페이지를 가져올 필요가 없습니다.</p>
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
<p>React는 URL 경로에 따라 브라우저에서 콘텐츠를 동적으로 업데이트합니다. 결과적으로 페이지 로드가 빨라지고 사용자 경험이 원활해집니다.</p>
<p>현대적인 React 개발에서는 상태 관리와 사이드 이펙트 처리를 위해 useState와 useEffect와 같은 내장 훅을 사용합니다.</p>
<p>클래스 컴포넌트 대신 함수형 컴포넌트가 선호되며, 상태와 사이드 이펙트 관리에서 간단하고 효율적입니다. 이러한 관행은 더 깨끗하고 유지보수가 쉬운 React 코드로 이어집니다.</p>
<h1 id="프로젝트-개요" tabindex="-1"><a class="header-anchor" href="#프로젝트-개요" aria-hidden="true">#</a> 프로젝트 개요</h1>
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
<p><strong>BlogFever Website</strong>는 React를 사용하여 개발된 반응형 웹 애플리케이션입니다.</p>
<p>주요 기능으로는 글 목록, 상세보기 및 원활한 글 관리가 포함되어 있습니다. 기능: 사용자들이 사용하기 편리한 인터페이스로 글을 나열, 삭제 및 추가할 수 있습니다.</p>
<p>상호작용적이고 동적인 사용자 경험을 위해 React 라우터, 데이터 가져오기 및 후크 (useState, useEffect, 사용자 정의 후크)와 같은 React 개념이 구현되어 있습니다.</p>
<p>이 웹사이트는 오류 처리, 로딩 상태 및 효율적인 라우팅을 포함하여 모든 기기에 반응하도록 설계되었습니다. 이 프로젝트는 React 개발 및 현대적인 웹 애플리케이션 관행에 대한 능력을 증명합니다.</p>
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
<p>블로그열열 프로젝트를 여기에서 살펴보고 React의 세계로 함께 들어가 봐요!</p>
<p><img src="@source/docs/Nextjs/2024-04-05-BuildingaBloggingWebsitewithReactAStep-by-StepGuide/img/BuildingaBloggingWebsitewithReactAStep-by-StepGuide_0.png" alt="이미지"></p>
<h2 id="기술-스택" tabindex="-1"><a class="header-anchor" href="#기술-스택" aria-hidden="true">#</a> 기술 스택</h2>
<ul>
<li>사용된 기술: React, React Router, CSS, JSON Server(가짜 REST API용)</li>
<li>프로그래밍 언어: JavaScript, JSX</li>
<li>프레임워크와 라이브러리: Create React App (CRA), react-router-dom, Firebase</li>
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
<h1 id="구현-세부-정보" tabindex="-1"><a class="header-anchor" href="#구현-세부-정보" aria-hidden="true">#</a> 구현 세부 정보</h1>
<h1 id="_1-react로-시작하기" tabindex="-1"><a class="header-anchor" href="#_1-react로-시작하기" aria-hidden="true">#</a> 1. React로 시작하기</h1>
<p>React로 시작하려면, 내 의견으로는 Create React App이라는 도구를 사용하는 것이 가장 쉬운 방법 중 하나입니다. 이 도구는 Babel과 Webpack을 포함한 모든 필수 설정 및 구성이 완료된 React 프로젝트를 생성하는 명령줄 도구입니다.</p>
<p>이 도구들은 React 코드와 JSX를 프로덕션에 준비된 JavaScript로 컴파일하는 데 필수적입니다.</p>
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
<p>Create React App을 사용하지 않고 수동으로 모든 구성을 설정하는 것은 더 복잡한 작업일 것입니다.</p>
<p>Create React App을 사용하면 우리가 직접 구성의 복잡성을 다루지 않고 빠르게 스타터 프로젝트를 만들 수 있습니다.</p>
<h1 id="_2-우리-앱의-구성-요소" tabindex="-1"><a class="header-anchor" href="#_2-우리-앱의-구성-요소" aria-hidden="true">#</a> 2. 우리 앱의 구성 요소</h1>
<p>React에서 컴포넌트는 사용자 인터페이스의 구성 요소입니다. 각 컴포넌트는 자체 로직과 표현을 캡슐화하여 모듈식이고 효율적인 개발 프로세스를 촉진합니다.</p>
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
<p>React의 이 구성 요소 기반 아키텍처는 개발자들이 재사용 가능한 구성 요소를 조합하여 동적이고 상호작용하는 사용자 인터페이스를 생성할 수 있도록 해주는 React의 주요 기능입니다.</p>
<p>React 애플리케이션은 구성 요소 트리를 형성하는 구성 요소의 계층 구조로 구성됩니다.</p>
<ul>
<li>app.js는 루트 구성 요소로 작용하여 구성 요소 트리를 시작합니다.</li>
<li>새로운 구성 요소 navbar.js는 내비게이션 바의 구조와 동작을 처리하기 위해 소개됩니다. 이 구성 요소는 app.js에 가져와서 앱 구성 요소의 JSX 내에 통합됩니다.</li>
<li>비슷하게, home.js 구성 요소는 홈 페이지의 내용과 구조를 나타냅니다. 이것은 app.js에 가져와서 앱 구성 요소의 JSX 내에 중첩됩니다.</li>
</ul>
<h1 id="_3-react-state-및-usestate-hook-이해하기" tabindex="-1"><a class="header-anchor" href="#_3-react-state-및-usestate-hook-이해하기" aria-hidden="true">#</a> 3. React State 및 useState Hook 이해하기</h1>
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
<p>상태는 특정 시점에 구성 요소에서 사용되는 데이터를 의미합니다.</p>
<p>useState 훅은 함수형 구성 요소에서 상태를 관리하고 업데이트하는 데 사용됩니다. React에서 제공하는 함수로 반응적인 상태 변수를 생성하고 값을 변경하는 방법입니다.</p>
<p>사용 예시:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> setName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">"마리오"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>위의 코드는 초기 값으로 &quot;Mario&quot;를 가진 반응성 상태 변수인 name을 생성합니다.</p>
<ul>
<li>이 훅은 두 가지를 반환합니다. 초기 값(배열, 불리언, 객체, 숫자 중 하나)과 해당 값을 변경하는 함수이며, 우리는 이 두 가지 값을 추출하기 위해 배열 구조 분해를 사용합니다.</li>
<li>이 경우 초기 값은 문자열(name)이고 해당 값을 업데이트하는 함수(setName)입니다. 예를 들어 setName(&quot;Luigi&quot;)를 사용하면 name 상태를 &quot;Luigi&quot;로 변경할 수 있습니다.</li>
<li>상태 변수(name)는 JSX 템플릿에서 사용되며, 상태의 변경은 컴포넌트의 다시 렌더링을 유발하여 템플릿을 업데이트합니다.</li>
</ul>
<h1 id="_4-블로그를-위한-상태-생성-및-props-사용" tabindex="-1"><a class="header-anchor" href="#_4-블로그를-위한-상태-생성-및-props-사용" aria-hidden="true">#</a> 4. 블로그를 위한 상태 생성 및 Props 사용</h1>
<p>간단한 블로그를 구축하기 위해 useState 훅을 사용하여 블로그의 배열을 나타내는 상태를 생성합니다.</p>
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
<p>블로그 상태는 제목, 내용, 작성자 및 ID와 같은 속성을 포함하는 블로그 객체들의 배열로 초기화됩니다.</p>
<p>템플릿에서 블로그 목록 출력:</p>
<ul>
<li>JSX 템플릿 내부에서 map 메서드를 사용하여 블로그 배열을 반복합니다.</li>
<li>각 블로그 항목마다 JSX 템플릿이 반환되며, 이 템플릿에는 제목을 위한 h2와 작성자를 위한 p가 포함됩니다.</li>
<li>각 루트 요소에 key 속성이 추가되어 React가 DOM에서 각 항목을 추적할 수 있도록 합니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"blog-list"</span><span class="token operator">></span>
<span class="token punctuation">{</span>blogs<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">blog</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
<span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"blog-preview"</span> key<span class="token operator">=</span><span class="token punctuation">{</span>blog<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">></span>
<span class="token operator">&lt;</span>h2<span class="token operator">></span><span class="token punctuation">{</span>blog<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
<span class="token operator">&lt;</span>p<span class="token operator">></span>작성자<span class="token operator">:</span> <span class="token punctuation">{</span>blog<span class="token punctuation">.</span>author<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
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
<p><img src="@source/docs/Nextjs/2024-04-05-BuildingaBloggingWebsitewithReactAStep-by-StepGuide/img/BuildingaBloggingWebsitewithReactAStep-by-StepGuide_1.png" alt="블로그 웹 사이트 구축하기 - React로 단계별 가이드"></p>
<p>실제 블로그 웹 사이트에서는 블로그 목록이 유사한 로직으로 표시되어야 하는 여러 위치가 있을 수 있습니다.</p>
<p>따라서 서로 다른 컴포넌트 전체에서 코드를 중복하는 대신 재사용 가능한 컴포넌트를 만드는 것이 목표입니다.</p>
<p>우리는 재사용 가능한 컴포넌트를 보관할 BlogList 컴포넌트를 만들었습니다.</p>
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
<p>BlogList 컴포넌트에서 데이터를 처리하는 방법은 다음과 같습니다: 새로운 컴포넌트에서 데이터를 다시 선언하거나 props를 통해 데이터를 전달할 수 있습니다.</p>
<ul>
<li>Props는 한 컴포넌트에서 다른 컴포넌트로 데이터를 전달하는 방법을 제공합니다.</li>
<li>Props를 사용하는 것이 재사용성을 높이고 부모 컴포넌트에서 데이터를 계속 사용할 수 있는 더 좋은 방법입니다.</li>
</ul>
<h2 id="useeffect-소개" tabindex="-1"><a class="header-anchor" href="#useeffect-소개" aria-hidden="true">#</a> useEffect 소개:</h2>
<p>useEffect는 React에서 컴포넌트가 렌더링될 때마다 코드를 실행하는 데 사용되는 훅입니다.</p>
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
<p>컴포넌트가 로드될 때 최초로 실행되고, 상태 변경에 따라 다시 렌더링이 발생할 때마다 다시 실행됩니다.</p>
<p>useEffect는 주로 데이터를 가져오거나 인증 서비스와 상호 작용하는 등 부수 효과를 처리할 때 사용됩니다. 매 렌더링마다 실행할 함수를 인수로 취합니다.</p>
<p>useEffect 훅을 사용하여 데이터를 가져오는 이유는 초기 렌더링 후에 함수를 실행하고, 컴포넌트가 처음로드될 때 데이터를 가져와야 하는 경우가 많기 때문입니다.</p>
<p>의존성이 비어있는 배열 덕분에 한 번만 실행됩니다.</p>
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
<p>의존성:</p>
<ul>
<li>특정 상태 변화를 기반으로 useEffect 함수를 실행하려면 해당 상태를 의존성 배열에 포함할 수 있습니다.</li>
<li>예를 들어, 새로운 상태 변수 이름이 소개되었고, useEffect는 이름 상태가 변경될 때 실행되도록 설정되었습니다.</li>
<li>의존성이 감시되며, 그중 어떤 것이라도 변경되면 useEffect 함수가 실행됩니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 첫 번째 렌더링 및 'name'이 변경될 때 실행할 코드</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_6-로컬-데이터베이스-설정" tabindex="-1"><a class="header-anchor" href="#_6-로컬-데이터베이스-설정" aria-hidden="true">#</a> 6. 로컬 데이터베이스 설정</h1>
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
<p>로컬 데이터베이스는 JSON 파일을 사용하여 생성됩니다. JSON Server는 JSON 파일을 이용해 가짜 REST API를 만들 수 있는 패키지입니다.</p>
<p>이를 통해 데이터베이스와 REST API를 처음부터 설정할 필요가 없어집니다.</p>
<p>JSON 데이터베이스 생성 방법:</p>
<ul>
<li>프로젝트의 루트 디렉토리에 있는 data 폴더 내에 db.json이라는 JSON 파일을 생성합니다.</li>
<li>JSON 파일에는 &quot;blogs&quot;라는 리소스가 포함되어 있으며, 이는 블로그 객체의 배열로 구성되어 있습니다.</li>
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
<p>JSON Server를 실행하는 방법:</p>
<ul>
<li>JSON Server는 db.json 파일을 감시하고 API 엔드포인트를 생성하는 데 사용됩니다.</li>
<li>강사는 npx json-server --watch data/db.json --port 8000 명령어를 사용하여 JSON Server를 실행합니다.</li>
<li>먼저 로컬 시스템에서 포트 8000에 데이터베이스를 생성합니다.</li>
</ul>
<p>JSON Server는 JSON 파일의 리소스를 기반으로 자동으로 엔드포인트를 생성합니다.</p>
<h1 id="_7-로컬-데이터베이스에서-데이터를-가져오는-방법" tabindex="-1"><a class="header-anchor" href="#_7-로컬-데이터베이스에서-데이터를-가져오는-방법" aria-hidden="true">#</a> 7. 로컬 데이터베이스에서 데이터를 가져오는 방법</h1>
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
<p>JSON 서버가 작동 중이며 localhost:8000/blogs에서 다양한 엔드포인트에 접근할 수 있습니다.</p>
<p>기존 상태가 지워지고, 블로그 상태가 null로 초기화됩니다.</p>
<p>데이터를 가져오기 위해 fetch API 요청이 localhost:8000/blogs로 전송되어 약속을 반환합니다. 그리고 then 메서드는 약속의 해결을 처리하여 응답 객체를 수신합니다.</p>
<p>데이터를 추출하기 위해 response.json()이 사용됩니다. 이 단계는 JSON 데이터를 JavaScript 객체로 변환합니다. 획득한 데이터는 콘솔에 로그를 남기고 setBlog를 사용하여 블로그 상태를 업데이트하는 데 사용됩니다.</p>
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
<h1 id="_8-오류-처리" tabindex="-1"><a class="header-anchor" href="#_8-오류-처리" aria-hidden="true">#</a> 8. 오류 처리</h1>
<p>Home 컴포넌트에서 fetch 요청을 할 때 발생하는 오류 처리에 중점을 두고 있습니다. 오류는 서버 응답이나 연결 문제로 발생할 수 있습니다.</p>
<p>fetch 요청에서 then 블록 뒤에 catch 블록이 추가됩니다. 이는 네트워크 오류를 잡아 콘솔에 로그를 남깁니다.</p>
<p>예시:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>javascript복사 코드
<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>현재 catch 블록은 네트워크 오류만 캐치합니다. 다른 종류의 오류를 처리하기 위해 추가적인 체크를 도입했습니다.</p>
<p>응답 객체의 ok 속성을 확인합니다. ok가 false인 경우 사용자 정의 오류를 throw합니다.</p>
<p>예시:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>javascriptCopy code
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>response<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"해당 리소스의 데이터를 가져올 수 없습니다"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_9-사용자-지정-훅이-생성되었습니다" tabindex="-1"><a class="header-anchor" href="#_9-사용자-지정-훅이-생성되었습니다" aria-hidden="true">#</a> 9. 사용자 지정 훅이 생성되었습니다</h1>
<p>useFetch라는 사용자 지정 훅은 데이터 가져오기 로직을 처리하는 데 설계되었습니다. 코드를 더 모듈식으로 만들어서 다양한 구성 요소에서 재사용할 수 있도록 하는 것이 목표입니다.</p>
<p>src 폴더 안에 useFetch.js라는 새 파일이 있습니다. 이 파일에는 사용자 지정 훅의 로직이 포함될 것입니다.</p>
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
<p>React에서 사용자 정의 훅은 일반적으로 &quot;use&quot;로 시작합니다.</p>
<ul>
<li>URL(엔드포인트)은 이제 useFetch 함수에 매개변수로 전달됩니다. 이로써 훅이 유연해지며 다양한 엔드포인트에서 다양한 유형의 데이터를 가져올 수 있습니다.</li>
<li>useFetch 함수는 데이터, 로딩 상태, 그리고 잠재적인 오류를 나타내는 세 가지 속성을 포함한 객체를 반환합니다.</li>
<li>데이터를 가져와야 하는 구성 요소에서 useFetch 훅을 가져와 해당 반환 값(data, isPending, error)을 분해합니다.</li>
</ul>
<h1 id="_10-react-router를-사용한-동적-라우팅" tabindex="-1"><a class="header-anchor" href="#_10-react-router를-사용한-동적-라우팅" aria-hidden="true">#</a> 10. React Router를 사용한 동적 라우팅</h1>
<p>현재 응용 프로그램은 하나의 페이지만 가지고 있습니다. 대부분의 웹 사이트는 여러 페이지를 가지고 있기 때문에 새로 고치지 않고 페이지 간 이동을 처리하기 위해 라우팅이 필요합니다.</p>
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
<p>React Router는 인기있는 라이브러리로, React 앱에서 경로를 원활하게 관리합니다.</p>
<p>서버에서 새 페이지를 가져오는 전통적인 사이트와는 달리, React 앱은 내부적으로 라우팅을 처리합니다.</p>
<p>React를 사용하면 초기 HTML 페이지가 비어 있으며, URL 변경에 따라 내용이 동적으로 주입됩니다.</p>
<p>React Router 설정하기:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install react<span class="token operator">-</span>router<span class="token operator">-</span>dom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>react-router-dom에서 BrowserRouter, Route, Switch와 같은 필수 컴포넌트를 import하세요.</li>
<li>React Router 버전 5를 사용 중입니다 (버전 6 베타판 언급).</li>
</ul>
<p>라우팅 구현하기:</p>
<ul>
<li>라우팅을 가능하게 하기 위해 앱을 BrowserRouter로 감싸세요.</li>
<li>페이지 콘텐츠를 넣을 위치를 결정하세요. 종종 content와 같은 클래스를 가진 div 안에 넣습니다.</li>
<li>Switch를 사용하여 한 번에 한 경로만 표시되도록 하세요.```</li>
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
<p>라우트 생성하기:</p>
<ul>
<li>Route 컴포넌트를 사용하여 라우트를 정의합니다.</li>
<li>각 라우트는 표시할 경로(path)와 해당 컴포넌트를 갖습니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/"</span> component<span class="token operator">=</span><span class="token punctuation">{</span>Home<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>여기서는 홈페이지를 위한 라우트를 지정하여 URL이 &quot;/&quot;와 일치할 때 Home 컴포넌트를 표시합니다.</li>
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
<p>콘텐츠를 동적으로 렌더링하기:</p>
<ul>
<li>라우트 매개변수를 사용하여 리액트 애플리케이션에서 동적 라우팅 구현.</li>
<li>라우트 매개변수를 사용하면 URL의 일부를 변경할 수 있어 동적 경로의 일부에 따라 동일한 구성요소를 렌더링하면서 다른 데이터를 표시할 수 있습니다.</li>
</ul>
<p>예시: 블로그 세부 사항 페이지를 생각해보세요. 여기서 경로는 /blogs/123과 같이 표시됩니다. 여기서 123은 블로그의 ID입니다. ID가 123, 456 또는 다른 어떤 숫자든 관계없이 동일한 구성요소가 렌더링되어 지정된 블로그의 세부 정보가 표시되어야 합니다.</p>
<p>구현 단계:</p>
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
<li>개별 블로그 세부 정보를 표시하기 위해 동적 라우팅을 구현하려면 먼저 BlogDetails.js라는 새 컴포넌트를 만들어야 합니다.</li>
<li>이 컴포넌트는 하나의 블로그 게시물 세부 정보를 렌더링하고 react-router-dom에서 제공하는 useParams 훅을 활용하여 라우트 매개변수(예: 블로그 게시물의 ID)를 추출할 것입니다.</li>
<li>그러고나서 주요 라우팅 파일인 App.js와 같은 파일에서 블로그 세부 정보를 위한 경로를 정의하고, 매개변수 이름 앞에 콜론을 붙여 동적 매개변수를 포함시킵니다(예: /:id). 이는 해당 경로가 ID 매개변수를 기대한다는 것을 나타냅니다.</li>
<li>블로그 목록을 표시하는 컴포넌트(e.g., BlogList) 내에서 react-router-dom의 Link 컴포넌트를 사용하여 개별 블로그 세부 정보로의 링크를 만들어 URL 경로에 블로그 게시물의 ID와 같은 동적 부분을 포함시킵니다.</li>
<li>BlogDetails.js 컴포넌트 내에서 useParams 훅을 활용하여 라우트에서 제공된 동적 매개변수에 액세스합니다. 일반적으로 블로그 게시물의 ID인 이 매개변수를 사용하여 데이터 소스에서 특정 블로그 데이터를 가져오거나 해당 특정 블로그 게시물에 고유한 작업을 수행할 수 있습니다.</li>
</ul>
<p>이러한 단계를 따라서 React 애플리케이션에서 동적 라우팅을 구현할 수 있으며 사용자가 개별 블로그 게시물로 이동하고 세부 정보를 원활하게 확인할 수 있습니다.</p>
<h1 id="_11-새-블로그-만들기" tabindex="-1"><a class="header-anchor" href="#_11-새-블로그-만들기" aria-hidden="true">#</a> 11. 새 블로그 만들기</h1>
<p>새 블로그를 만들기 위해 React 애플리케이션에서 양식을 구현하여 사용자가 새 블로그에 대한 데이터를 입력할 수 있도록 합니다.</p>
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
<p>Create 컴포넌트에서 블로그 세부 정보를 수집하기 위한 폼이 생성되었습니다. 폼에는 블로그 제목, 본문 내용 (textarea를 사용), 그리고 작성자 (선택 필드 사용)를 위한 입력 필드가 포함되어 있습니다.</p>
<p>React 상태를 사용하여 폼 요소의 값들을 관리하기 위해 제어된 입력이 사용되었습니다. 각 입력 필드마다 해당하는 상태가 생성되었습니다.</p>
<p>초기 상태 값이 설정되었습니다 (예: 텍스트 입력 필드에는 빈 문자열, 작성자 값에는 초기 값).</p>
<p>각 입력의 값 속성은 해당 상태 변수로 동적으로 설정되었습니다. 이렇게 함으로써 입력 필드가 항상 현재 상태를 반영하도록 보장됩니다. 입력 값의 변경 사항을 처리하기 위해 onChange 이벤트가 사용되었습니다.</p>
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
<p>폼 안에 버튼을 누르면 폼 자체에서 제출 이벤트가 트리거됩니다. submit 이벤트를 처리하기 위해 handleSubmit이라는 함수가 생성됩니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-BuildingaBloggingWebsitewithReactAStep-by-StepGuide/img/BuildingaBloggingWebsitewithReactAStep-by-StepGuide_2.png" alt="이미지"></p>
<p>handleSubmit 함수 내에서 블로그 객체가 생성되며, 사용자가 입력한 값을 포함합니다. 블로그 객체에는 제목, 본문, 작성자 등의 속성이 포함됩니다.</p>
<p>이전 폼 제출 기능을 확장하여 JSON Server에 POST 요청을 보내도록 기능을 추가합니다. useFetch 후크 대신, 이 튜토리얼에서는 handleSubmit 함수 내부에서 POST 요청을 직접 만드는 방식을 선택했습니다.</p>
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
<table>
<thead>
<tr>
<th>순번</th>
<th>이름</th>
<th>나이</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>제인</td>
<td>25</td>
</tr>
<tr>
<td>2</td>
<td>마크</td>
<td>30</td>
</tr>
<tr>
<td>3</td>
<td>리사</td>
<td>28</td>
</tr>
</tbody>
</table>
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
<p>블로그 등록 양식을 사용하여 새 블로그를 성공적으로 추가한 사용자는 홈페이지로 리디렉션됩니다.</p>
<p>이 기능은 React Router의 useHistory 훅을 사용하여 구현됩니다. 이를 통해 애플리케이션은 프로그래밍 방식으로 히스토리를 통해 탐색할 수 있습니다.</p>
<p>react-router-dom 패키지에서 useHistory 훅을 가져와야 합니다. 이 훅은 go, goBack, goForward 및 push와 같이 애플리케이션 히스토리를 통해 탐색할 수 있는 메서드를 제공합니다.</p>
<p>useHistory 훅을 호출하여 히스토리 객체를 생성한 후, 리디렉션을 위해 push를 사용할 것입니다: 원하는 경로(이 경우 홈페이지 경로인 '/')를 push 메서드에 전달하세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> history <span class="token operator">=</span> <span class="token function">useHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
history<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_13-삭제-기능-추가하기" tabindex="-1"><a class="header-anchor" href="#_13-삭제-기능-추가하기" aria-hidden="true">#</a> 13. 삭제 기능 추가하기</h1>
<p>블로그를 삭제하는 &quot;삭제&quot; 버튼을 추가하는 것은 서버에 DELETE 요청을 보내는 것을 포함합니다. 성공적으로 삭제되면 사용자가 홈 페이지로 리디렉트됩니다.</p>
<p>예시:</p>
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
<p>이 함수 내부에서 적절한 엔드포인트(홈 컴포넌트에서 얻음)로 DELETE 메서드를 사용하여 fetch 요청을 만드세요.</p>
<p>엔드포인트에서 블로그를 삭제할 때 blog.id를 사용하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span><span class="token operator">></span>삭제<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">http://localhost:8000/blogs/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>blog<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'DELETE'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">// 삭제가 성공하면 사용자를 홈 페이지로 리디렉션합니다.</span>
        history<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="_14-404-페이지-처리" tabindex="-1"><a class="header-anchor" href="#_14-404-페이지-처리" aria-hidden="true">#</a> 14. 404 페이지 처리</h1>
<p>존재하지 않는 경로를 처리하기 위해 404 페이지가 구현되어야 합니다. 이는 NotFound 컴포넌트를 생성하고 경로 구성의 끝에 catch-all route를 설정하는 것을 포함합니다. 예시:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"*"</span> component<span class="token operator">=</span><span class="token punctuation">{</span>NotFound<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_15-실시간-firebase-데이터베이스-통합" tabindex="-1"><a class="header-anchor" href="#_15-실시간-firebase-데이터베이스-통합" aria-hidden="true">#</a> 15. 실시간 Firebase 데이터베이스 통합</h1>
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
<p>저희는 확장성과 효율성을 위해 실시간 Firebase 데이터베이스를 만들었어요.</p>
<p>먼저 React 프로젝트에 Firebase를 설치해야 해요. 터미널에서 다음 명령어를 실행하여 간단히 npm을 사용해서 할 수 있어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install firebase
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이 명령은 Firebase JavaScript SDK를 설치하는데요, 이 SDK를 사용해서 프로젝트에서 Firebase 서비스와 상호 작용할 거예요.</p>
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
<p>다음으로 Firebase 프로젝트를 만들어야 합니다. Firebase 콘솔로 이동하여 &quot;프로젝트 추가&quot; 버튼을 클릭하여 새 프로젝트를 만드세요. 화면 안내에 따라 프로젝트를 설정하세요.</p>
<p>프로젝트를 생성하면 Firebase 콘솔에서 &quot;실시간 데이터베이스&quot; 섹션으로 이동하세요. &quot;데이터베이스 만들기&quot; 버튼을 클릭하고 데이터베이스의 위치를 선택하세요.</p>
<p>데이터베이스를 설정한 후, Firebase는 React 앱을 Firebase 프로젝트에 연결하기 위해 필요한 구성을 제공할 것입니다. 이 구성에는 API 키, 인증 토큰 및 기타 세부 정보가 포함됩니다.</p>
<p>React 프로젝트에서 src 디렉토리에 firebase.js라는 새 파일을 만드세요. 이 파일에는 Firebase 구성 및 초기화 코드가 포함됩니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// firebase.js</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> firebase <span class="token keyword">from</span> <span class="token string">'firebase/app'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'firebase/database'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> firebaseConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">apiKey</span><span class="token operator">:</span> <span class="token string">"파이어베이스에서 제공하는 실제 API 키"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">authDomain</span><span class="token operator">:</span> <span class="token string">"파이어베이스에서 제공하는 실제 인증 도메인"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">databaseURL</span><span class="token operator">:</span> <span class="token string">"파이어베이스에서 제공하는 실제 데이터베이스 URL"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">projectId</span><span class="token operator">:</span> <span class="token string">"파이어베이스에서 제공하는 실제 프로젝트 ID"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">storageBucket</span><span class="token operator">:</span> <span class="token string">"파이어베이스에서 제공하는 실제 스토리지 버킷"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">messagingSenderId</span><span class="token operator">:</span> <span class="token string">"파이어베이스에서 제공하는 실제 메시징 발신자 ID"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">appId</span><span class="token operator">:</span> <span class="token string">"파이어베이스에서 제공하는 실제 앱 ID"</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
firebase<span class="token punctuation">.</span><span class="token function">initializeApp</span><span class="token punctuation">(</span>firebaseConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> firebase<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>파이어베이스에서 제공하는 실제 구성으로 firebaseConfig 안의 플레이스홀더 값을 변경해주세요.</p>
<h1 id="_16-environment-variables-사용하기" tabindex="-1"><a class="header-anchor" href="#_16-environment-variables-사용하기" aria-hidden="true">#</a> 16. Environment Variables 사용하기</h1>
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
<p>보안상의 이유로 API 키 및 데이터베이스 URL과 같은 민감한 정보는 환경 변수에 저장하는 것이 가장 좋습니다.</p>
<p>프로젝트의 루트 디렉토리에 .env 파일을 생성하고 Firebase 구성을 환경 변수로 추가하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">REACT_APP_FIREBASE_API_KEY</span><span class="token operator">=</span><span class="token constant">YOUR_API_KEY</span>
<span class="token constant">REACT_APP_FIREBASE_AUTH_DOMAIN</span><span class="token operator">=</span><span class="token constant">YOUR_AUTH_DOMAIN</span>
<span class="token constant">REACT_APP_FIREBASE_DATABASE_URL</span><span class="token operator">=</span><span class="token constant">YOUR_DATABASE_URL</span>
<span class="token constant">REACT_APP_FIREBASE_PROJECT_ID</span><span class="token operator">=</span><span class="token constant">YOUR_PROJECT_ID</span>
<span class="token constant">REACT_APP_FIREBASE_STORAGE_BUCKET</span><span class="token operator">=</span><span class="token constant">YOUR_STORAGE_BUCKET</span>
<span class="token constant">REACT_APP_FIREBASE_MESSAGING_SENDER_ID</span><span class="token operator">=</span><span class="token constant">YOUR_MESSAGING_SENDER_ID</span>
<span class="token constant">REACT_APP_FIREBASE_APP_ID</span><span class="token operator">=</span><span class="token constant">YOUR_APP_ID</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Firebase.js 파일에서는 이러한 환경 변수에 process.env를 사용하여 액세스할 수 있습니다. 구성을 직접 하드코딩하는 대신 환경 변수를 사용하도록 파일을 수정하세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// firebase.js</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> firebase <span class="token keyword">from</span> <span class="token string">'firebase/app'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'firebase/database'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> firebaseConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">apiKey</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">REACT_APP_FIREBASE_API_KEY</span><span class="token punctuation">,</span>
  <span class="token literal-property property">authDomain</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">REACT_APP_FIREBASE_AUTH_DOMAIN</span><span class="token punctuation">,</span>
  <span class="token literal-property property">databaseURL</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">REACT_APP_FIREBASE_DATABASE_URL</span><span class="token punctuation">,</span>
  <span class="token literal-property property">projectId</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">REACT_APP_FIREBASE_PROJECT_ID</span><span class="token punctuation">,</span>
  <span class="token literal-property property">storageBucket</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">REACT_APP_FIREBASE_STORAGE_BUCKET</span><span class="token punctuation">,</span>
  <span class="token literal-property property">messagingSenderId</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">REACT_APP_FIREBASE_MESSAGING_SENDER_ID</span><span class="token punctuation">,</span>
  <span class="token literal-property property">appId</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">REACT_APP_FIREBASE_APP_ID</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
firebase<span class="token punctuation">.</span><span class="token function">initializeApp</span><span class="token punctuation">(</span>firebaseConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> firebase<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 React 프로젝트에서 Firebase를 설정하고 환경 변수를 구성했으므로 어플리케이션에서 실시간 데이터베이스를 사용할 수 있습니다. 구성 요소에서 데이터베이스에서 읽고 쓰기위해 Firebase SDK 메서드를 사용할 수 있습니다.</p>
<p>이러한 단계를 따라서 Firebase 실시간 데이터베이스를 React 프로젝트에 성공적으로 통합하여 사용성과 효율성을 향상시켰습니다.</p>
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
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>React를 사용하여 블로그를 구축하는 것은 주요 개념, 도구 및 최선의 실행 방법을 결합한 작업입니다.</p>
<p>훅을 사용하여 상태를 관리하고 동적 라우팅을 구현하며 양식 제출을 처리하는 것 등, React는 현대적인 웹 애플리케이션을 만들기 위한 강력한 프레임워크를 제공합니다.</p>
<p>본 단계별 가이드를 따라가면, 개발자들은 React의 능력에 대한 깊은 이해를 얻고 매력적이고 반응형 사용자 인터페이스를 만들 수 있습니다.</p>
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
<p>이 글에서 논의된 개념을 탐색하고 BlogFever에서 실제 경험을 해보기 위해 이 프로젝트를 확인해 보세요.</p>
<p>코딩해보세요!</p>
</div></template>
