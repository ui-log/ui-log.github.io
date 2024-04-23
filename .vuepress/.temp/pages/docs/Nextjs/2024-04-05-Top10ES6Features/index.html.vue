<template><div><h2 id="javascript-개발-향상" tabindex="-1"><a class="header-anchor" href="#javascript-개발-향상" aria-hidden="true">#</a> JavaScript 개발 향상</h2>
<p>ES6, 즉 ECMAScript 2015의 등장은 JavaScript의 진화에서 중요한 이정표를 찍었습니다. 이로써 개발자들에게 더 강력하고 효율적이며 표현력 있는 도구로 변모된 많은 기능이 소개되었습니다. 이러한 발전은 단순히 구문적인 요소를 추가하는 데 그치지 않았습니다. 오히려 JavaScript 코딩에 접근하는 방법을 근본적으로 개선하여 직관적이고 유지보수가 용이하며 견고한 코드를 작성할 수 있게 만들었습니다. 이러한 특징을 흥미로운 예시와 실제 사례를 통해 살펴보며 그 잠재력을 탐구해봅시다.</p>
<h1 id="목차" tabindex="-1"><a class="header-anchor" href="#목차" aria-hidden="true">#</a> 목차</h1>
<ul>
<li>화살표 함수
<ul>
<li>화살표 함수에서 “this”이해하기</li>
</ul>
</li>
<li>구조 분해 할당
<ul>
<li>배열 구조 분해</li>
<li>객체 구조 분해</li>
</ul>
</li>
<li>템플릿 리터럴</li>
<li>향상된 객체 리터럴</li>
<li>클래스</li>
<li>프로미스</li>
<li>비동기/동기 조합 (Async/Await)</li>
<li>모듈</li>
<li>전개 및 나머지 연산자</li>
<li>향상된 객체 속성
<ul>
<li>계산된 속성명</li>
<li>메소드 속성 단축 구문</li>
<li>속성 값 단축 구문</li>
</ul>
</li>
<li>결론</li>
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
<h1 id="_1-화살표-함수-간결함과-명확성으로-나아가기" tabindex="-1"><a class="header-anchor" href="#_1-화살표-함수-간결함과-명확성으로-나아가기" aria-hidden="true">#</a> 1. 화살표 함수: 간결함과 명확성으로 나아가기</h1>
<p>화살표 함수는 JavaScript에서 함수 표현식을 간결하게 작성하는 방법입니다. 특히, 다른 함수에 인수로 전달되는 작은 함수를 작성해야 할 때 유용합니다. 화살표 함수의 구문은 <code v-pre>() =</code> {}로, 인수는 괄호 안에, 함수의 본문은 중괄호 안에 작성됩니다.</p>
<h2 id="_1-1-화살표-함수에서의-this-이해하기" tabindex="-1"><a class="header-anchor" href="#_1-1-화살표-함수에서의-this-이해하기" aria-hidden="true">#</a> 1.1 화살표 함수에서의 &quot;this&quot; 이해하기:</h2>
<p>화살표 함수는 자체적인 this 컨텍스트를 갖지 않고 주변 코드의 this를 상속합니다. 이는 콜백 함수 내에서 포함 범위의 this 컨텍스트에 접근하고 싶을 때 특히 유용합니다.</p>
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
<p>예시: 어떤 상태에 따라 제품을 필터링하고 싶은 전자상거래 사이트를 고려해 보세요. 화살표 함수를 사용하면 코드가 짧아지는 것뿐만 아니라 더 읽기 쉬워집니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> products <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'노트북'</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'스마트폰'</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> affordable <span class="token operator">=</span> products<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">product</span> <span class="token operator">=></span> product<span class="token punctuation">.</span>price <span class="token operator">&lt;</span> <span class="token number">800</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>affordable<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token comment">// [{name: '스마트폰', price: 500}]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예시는 일상적인 코딩 작업에서 화살표 함수의 우아함과 유용성을 강조합니다.</p>
<h1 id="_2-구조-분해-할당-우아하게-풀어보기" tabindex="-1"><a class="header-anchor" href="#_2-구조-분해-할당-우아하게-풀어보기" aria-hidden="true">#</a> 2. 구조 분해 할당: 우아하게 풀어보기</h1>
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
<p>테이블 태그를 마크다운 형식으로 변경하세요.</p>
<p>Destructuring은 배열에서 값들을 분리하거나 객체에서 속성들을 개별 변수로 풀어낼 수 있게 해주는 기능입니다. 이를 통해 데이터에 접근하는 과정을 간소화하고 코드를 더 깔끔하고 가독성 있게 만들 수 있습니다.</p>
<h2 id="_2-1-배열-구조-분해" tabindex="-1"><a class="header-anchor" href="#_2-1-배열-구조-분해" aria-hidden="true">#</a> 2.1 배열 구조 분해:</h2>
<p>배열에서 요소를 검색할 때 유용합니다. 예를 들어, [이름, 성, 나이]와 같은 사용자 데이터 배열이 있다면, 이를 한 줄로 각각의 변수로 추출할 수 있습니다.</p>
<h2 id="_2-2-객체-구조-분해" tabindex="-1"><a class="header-anchor" href="#_2-2-객체-구조-분해" aria-hidden="true">#</a> 2.2 객체 구조 분해:</h2>
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
<p>객체에서 속성을 추출할 수 있습니다. 함수 매개변수나 복잡한 객체를 다룰 때 매우 편리합니다.</p>
<p>예시: 로깅 라이브러리 구성을 설정한다고 상상해보세요. 각 속성에 수동으로 액세스하는 대신, 구조 분해는 더 선언적인 접근 방식을 제공합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token string">'debug'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'logs.txt'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">maxSize</span><span class="token operator">:</span> <span class="token string">'10MB'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">setupLogger</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> level<span class="token punctuation">,</span> filename<span class="token punctuation">,</span> maxSize <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">로거 설정 중: 레벨 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>level<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, 파일 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>filename<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, 최대 크기 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>maxSize<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">setupLogger</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 방식은 보일러플레이트 boilerplate를 줄이는데 도움을 줄 뿐만 아니라 코드의 가독성도 향상시킵니다.</p>
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
<h1 id="_3-템플릿-리터럴-문자열-연결-이상의-기능" tabindex="-1"><a class="header-anchor" href="#_3-템플릿-리터럴-문자열-연결-이상의-기능" aria-hidden="true">#</a> 3. 템플릿 리터럴: 문자열 연결 이상의 기능</h1>
<p>템플릿 리터럴은 표현식이 내장된 문자열을 만드는 쉬운 방법을 제공하여 동적인 문자열 생성을 가능케 합니다. 역따옴표(`)로 둘러싸여 있으며, ${expression} 형식으로 변수나 표현식에 대한 자리 표시자를 포함할 수 있습니다. 이 기능은 변수를 포함한 문자열 생성, 내용을 조건부로 추가하는 것, 또는 연결없이 여러 줄에 걸친 문자열을 만드는 데 특히 유용합니다.</p>
<p>실제 시나리오: 새로 가입한 사용자에게 개인화된 환영 이메일을 보내어 해당 사용자의 이름과 가입 날짜를 이메일 텍스트에 직접 편입하는 경우</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> emailContent <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">안녕하세요 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>userName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">님,

저희 서비스에 오신 것을 환영합니다! </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>signUpDate<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">에 가입해주셨군요.

감사합니다,
팀</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이 방법을 사용하면 동적 문자열 작성이 간단하고 가독성이 좋아집니다.</p>
<h2 id="_4-강화된-객체-리터럴-직관적인-객체" tabindex="-1"><a class="header-anchor" href="#_4-강화된-객체-리터럴-직관적인-객체" aria-hidden="true">#</a> 4. 강화된 객체 리터럴: 직관적인 객체</h2>
<p>ES6의 강화된 객체 리터럴은 객체 생성을 더 직관적으로, 덜 장황하게 만들었습니다. 주요 향상 사항에는 shorthand 속성이 포함됩니다. 속성 이름과 변수 이름이 동일한 경우 값은 생략할 수 있으며 메서드 속성을 포함하여 객체 내에서 함수를 보다 간결하게 정의할 수 있습니다.</p>
<p>실제 시나리오: 사용자 인터페이스 구성 요소의 구성 옵션 설정, 객체 리터럴을 사용하여 이제 더 간결하고 가독성이 좋아질 수 있습니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> animationDuration <span class="token operator">=</span> <span class="token number">300</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> uiConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  animationDuration<span class="token punctuation">,</span> <span class="token comment">// Shorthand property</span>
  <span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// Method property</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'UI 컴포넌트 숨기기'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_5-클래스-구조화되고-가독성이-좋은-객체-지향-프로그래밍" tabindex="-1"><a class="header-anchor" href="#_5-클래스-구조화되고-가독성이-좋은-객체-지향-프로그래밍" aria-hidden="true">#</a> 5. 클래스: 구조화되고 가독성이 좋은 객체 지향 프로그래밍</h1>
<p>JavaScript 클래스는 객체를 생성하고 상속을 관리하기 쉽게하는 구문을 제공합니다. 이는 다른 언어에서 익숙한 객체 지향 프로그래밍(OOP) 모델을 반영하여 개발자들에게 더 익숙한 방식으로 기능과 데이터를 캡슐화합니다. 클래스는 데이터와 기능을 캡슐화하고 다른 클래스를 확장할 수 있어서 코드 재사용과 유지 보수성을 증가시킵니다.</p>
<p>실제 시나리오: 특정 능력을 가진 서로 다른 유형의 캐릭터를 가지고 있는 간단한 게임을 만들고자 합니다. 클래스를 사용하면 공통 속성 및 메서드를 갖는 기본 캐릭터를 정의하고, 이 기본 클래스를 확장하여 다양한 캐릭터 유형을 만들 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Character</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> health</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>health <span class="token operator">=</span> health<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">attack</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> attacks </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>target<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Wizard</span> <span class="token keyword">extends</span> <span class="token class-name">Character</span> <span class="token punctuation">{</span>
  <span class="token function">castSpell</span><span class="token punctuation">(</span><span class="token parameter">spell<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> casts </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>spell<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> on </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>target<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>클래스를 사용하면 객체의 구조를 명확하고 간결하게 만들 수 있으며, 상속을 사용하면 코드를 이해하고 유지보수하기 쉬운 방식으로 작성할 수 있습니다.</p>
<h1 id="_6-promises-비동기-작업-관리" tabindex="-1"><a class="header-anchor" href="#_6-promises-비동기-작업-관리" aria-hidden="true">#</a> 6. Promises: 비동기 작업 관리</h1>
<p>Promise는 비동기 작업의 최종 완료(또는 실패)를 나타내는 객체입니다. Promise는 비동기 논리를 처리하는 강력한 방법을 제공하여, 전통적인 콜백 기반 접근 방식에 비해 더 깔끔하고 관리하기 쉬운 코드를 작성할 수 있습니다.```</p>
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
<p>작동 방식: Promise는 세 가지 상태를 가지고 있습니다: 대기 중, 이행됨 또는 거부됨. 성공적으로 약속이 완료되거나 실패한 경우 콜백을 첨부할 수 있습니다. 성공한 경우에는 .then()을 사용하고, 에러가 발생한 경우에는 .catch()을 사용합니다.</p>
<p>실제 시나리오: API에서 데이터를 요청하는 앱을 작성 중이라고 상상해 보세요. 중첩된 콜백을 사용하는 대신, 약속을 사용하여 HTTP 요청의 비동기 특성을 처리할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://api.example.com/data'</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'데이터 검색 실패:'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 구조는 코드를 읽고 디버그하기 쉽게 만들어줍니다. 특히 복잡한 비동기 작업 시퀀스에 대해 매우 효과적입니다.</p>
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
<h1 id="_7-async-await-promises를-위한-구문적-설탕" tabindex="-1"><a class="header-anchor" href="#_7-async-await-promises를-위한-구문적-설탕" aria-hidden="true">#</a> 7. Async/Await: Promises를 위한 구문적 설탕</h1>
<p>Async/await은 promise를 다루는 것을 단순화하는 기능으로, 동기 코드처럼 보이고 동작하는 비동기 코드를 작성할 수 있게 해줍니다. 함수를 async로 표시하면 해당 함수가 promise를 반환함을 선언하고, await은 promise가 해결될 때까지 실행을 일시 중지할 수 있습니다.</p>
<p>주요 장점: 이 접근 방식은 비동기 코드의 복잡성을 크게 줄여 이해하고 유지하는 것을 쉽게 만듭니다.</p>
<p>실제 시나리오: API에서 사용자 데이터를 가져오고 해당 사용자를 기반으로 관련 데이터를 가져 오기 위한 함수를 작성 중이라고 가정해 보겠습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>비동기 함수인 <span class="token function">getUserAndData</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span>는 userId를 인자로 받아와서<span class="token punctuation">,</span> 해당 userId에 해당하는 사용자 정보를 가져와서 그 사용자의 데이터를 가져오는 기능을 합니다<span class="token punctuation">.</span> 이 함수는 프로미스를 연쇄적으로 사용하거나 콜백 함수를 사용하는 것보다 읽기 쉽고 이해하기 쉽습니다<span class="token punctuation">.</span>

## <span class="token number">8.</span> <span class="token literal-property property">모듈</span><span class="token operator">:</span> 대규모 코드베이스 구조화하기

JavaScript의 모듈은 코드를 재사용 가능한 조각으로 분할할 수 있게 해주며<span class="token punctuation">,</span> 각각의 기능을 캡슐화합니다<span class="token punctuation">.</span> <span class="token constant">ES6</span>에서는 표준화된 모듈 시스템을 도입하여 <span class="token keyword">export</span>를 사용하여 모듈의 일부를 다른 파일에서 사용할 수 있게 하고<span class="token punctuation">,</span> <span class="token keyword">import</span>를 사용하여 해당 모듈을 불러올 수 있게 합니다<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>혜택: 모듈은 코드 구조화, 의존성 관리, 코드 공유 및 재사용 개선에 도움이 됩니다.</p>
<p>현실 세계 시나리오: 응용 프로그램 전반에 걸쳐 사용되는 공통 함수를 포함하는 유틸리티 모듈이 있습니다. 이러한 함수들을 내보내면 필요한 곳이면 어디서든 쉽게 재사용할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// mathUtils.js</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// app.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> add <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./mathUtils.js'</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 모듈화 접근 방식은 특히 대규모 응용 프로그램에서 유지보수성과 확장성을 향상시킵니다.</p>
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
<h1 id="_9-펼침-및-나머지-연산자-작업-다양성" tabindex="-1"><a class="header-anchor" href="#_9-펼침-및-나머지-연산자-작업-다양성" aria-hidden="true">#</a> 9. 펼침 및 나머지 연산자: 작업 다양성</h1>
<p>펼침 (...) 연산자를 사용하면 반복 가능한 항목을 개별 요소로 확장할 수 있고, 나머지 연산자를 사용하면 여러 요소를 하나의 배열로 압축할 수 있습니다. 이러한 연산자들은 배열과 객체를 다루는 과정을 간단하게 만들어주어 함수를 더 유연하게 만들어줍니다.</p>
<p>펼침 연산자 사용 사례: 배열 병합 또는 객체 속성 결합이 간단해집니다</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> mergedArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arr1<span class="token punctuation">,</span> <span class="token operator">...</span>arr2<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'John'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> combinedObj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>obj1<span class="token punctuation">,</span> <span class="token operator">...</span>obj2 <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>나머지 연산자 사용 사례: 함수 인수의 무한한 수를 처리하는 것이 훨씬 깔끔합니다</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>numbers</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> numbers<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">total<span class="token punctuation">,</span> num</span><span class="token punctuation">)</span> <span class="token operator">=></span> total <span class="token operator">+</span> num<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이러한 연산자들은 컬렉션과 함수를 다루는 강력한 메커니즘을 제공하여 언어의 유연성과 표현력을 향상시킵니다.</p>
<h1 id="_10-향상된-객체-속성" tabindex="-1"><a class="header-anchor" href="#_10-향상된-객체-속성" aria-hidden="true">#</a> 10. 향상된 객체 속성:</h1>
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
<p>자바스크립트의 발전으로 ES6는 개체의 생성과 조작을 간소화하는 기능을 도입하여 코드를 좀 더 간결하고 표현력 있게 만들었습니다. 이러한 기능들은 연산된 속성 이름, 메서드 속성 단축 구문, 속성 값 단축 구문 등이 있습니다. 이러한 기능은 객체를 처리하는 더 효율적인 방법을 제공하며, 자바스크립트 개발의 동적이고 유연한 성격을 반영합니다.</p>
<h2 id="_10-1-연산된-속성-이름" tabindex="-1"><a class="header-anchor" href="#_10-1-연산된-속성-이름" aria-hidden="true">#</a> 10.1 연산된 속성 이름:</h2>
<p>여러분은 대괄호 표기법을 사용하여 객체 내에서 속성 이름을 동적으로 정의할 수 있습니다. 이는 변수 값에 기반한 키를 가진 객체를 생성하거나 유효한 식별자가 아닌 속성 이름을 다룰 때 특히 유용합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> propertyName <span class="token operator">=</span> <span class="token string">"username"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token string">"johnDoe123"</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>propertyName<span class="token punctuation">]</span><span class="token operator">:</span> value
<span class="token punctuation">}</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>username<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "johnDoe123"</span>
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
<h2 id="_10-2-메서드-속성-단축형" tabindex="-1"><a class="header-anchor" href="#_10-2-메서드-속성-단축형" aria-hidden="true">#</a> 10.2 메서드 속성 단축형:</h2>
<p>함수 키워드 없이 객체의 메서드를 정의할 수 있어서 객체 메서드의 구문을 더 간결하고 깔끔하게 만들어줍니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> calculator <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">subtract</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">-</span> y<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>calculator<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-3-속성-값-단축형" tabindex="-1"><a class="header-anchor" href="#_10-3-속성-값-단축형" aria-hidden="true">#</a> 10.3 속성 값 단축형:</h2>
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
<p>객체 속성에 변수를 할당할 때 구문을 간단화하여 변수 이름과 속성 이름이 동일한 경우의 코드를 줄이고 가독성을 향상시킵니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">"John Doe"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> age <span class="token punctuation">}</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { name: "John Doe", age: 30 }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>실제 시나리오: 사용자 입력 또는 외부 데이터에 따라 구성 요소 속성이 결정되는 동적 UI를 구축한다고 상상해보세요. 계산된 속성 이름을 사용하면 객체 키를 실시간으로 조정할 수 있으며 메서드 및 속성의 축약형을 사용하여 컴포넌트 객체를 간결하고 가독성있게 유지할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">createComponent</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> action<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    type<span class="token punctuation">,</span>
    <span class="token punctuation">[</span>action<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Action </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>action<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> with value </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> button <span class="token operator">=</span> <span class="token function">createComponent</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">,</span> <span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token string">"Submit"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
button<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "Action click with value Submit"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
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
<p>ES6 이상에서 도입된 이러한 기능들은 JavaScript에서 개발자 경험을 크게 향상시켰습니다. 언어를 더 강력하고 표현력이 풍부하며 작업하기 쉽게 만들었습니다. 이러한 기능을 이해하고 활용함으로써 개발자는 더 효율적이고 깨끗하며 유지보수가 쉬운 코드를 작성할 수 있으며, 보다 견고하고 확장 가능한 응용 프로그램을 개발할 수 있게 됩니다. 비동기 작업을 처리하거나 코드베이스를 모듈로 구성하거나 컬렉션 및 매개변수를 다루는 경우, ES6+에는 일반적인 프로그래밍 과제를 해결하기 위해 고안된 다양한 기능이 제공되어 JavaScript 여행을 더 즐겁고 성공적으로 만들어 줍니다.</p>
<p>좋은 코딩 하세요! 💻</p>
</div></template>
