<template><div><h1 id="_2024년-가장-인기있는-css-프레임워크-5가지" tabindex="-1"><a class="header-anchor" href="#_2024년-가장-인기있는-css-프레임워크-5가지" aria-hidden="true">#</a> 2024년 가장 인기있는 CSS 프레임워크 5가지</h1>
<img src="@source/docs/Library/2024-03-06-2024년-가장-인기있는-css-프레임워크-5가지/img/0.png" width="500" />
<p>프로젝트에 적합한 CSS 프레임워크를 선택하는 것은 매우 중요합니다.
새로운 UI 컴포넌트를 만드는데 전체적인 작업 속도를 좌우합니다.
빠르게 서비스를 내는 것이 중요한 요즘 CSS프레임워크를 어떻게 선정하느냐는 굉장히 중요해졌습니다.</p>
<p>따라서 사용하기 쉬운 UI 요소를 제공할 수 있는 CSS 프레임워크가 필요합니다.</p>
<p>그래서 이 글에서는 2024년에 프론트엔드 개발자들에게 가장 인기 많은 CSS 프레임워크를 살펴보겠습니다.</p>
<img src="@source/docs/Library/2024-03-06-2024년-가장-인기있는-css-프레임워크-5가지/img/1.png" width="500" />
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
<h2 id="bootstrap" tabindex="-1"><a class="header-anchor" href="#bootstrap" aria-hidden="true">#</a> Bootstrap</h2>
<img src="@source/docs/Library/2024-03-06-2024년-가장-인기있는-css-프레임워크-5가지/img/2.png" width="500" />
<p>Bootstrap은 모바일을 먼저 고려한 CSS 프레임워크로, 멋진 디자인과 반응형 웹 인터페이스를 구축할 수 있게 합니다.</p>
<ul>
<li>반응형 그리드 시스템</li>
<li>내장된 컴포넌트 (내비게이션 바, 카드, 모달)</li>
<li>빠른 스타일링을 위한 유틸리티 클래스</li>
<li>향상된 기능을 위한 JavaScript 플러그인</li>
<li>활발한 커뮤니티와 방대한 문서화</li>
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
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> ButtonGroup <span class="token keyword">from</span> <span class="token string">"react-bootstrap/ButtonGroup"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Dropdown <span class="token keyword">from</span> <span class="token string">"react-bootstrap/Dropdown"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> DropdownButton <span class="token keyword">from</span> <span class="token string">"react-bootstrap/DropdownButton"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"./bootstrap.css"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Bootstrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">"Primary"</span><span class="token punctuation">,</span> <span class="token string">"success"</span><span class="token punctuation">,</span> <span class="token string">"danger"</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">variant</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DropdownButton</span></span> <span class="token attr-name">as</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>ButtonGroup<span class="token punctuation">}</span></span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>variant<span class="token punctuation">}</span></span> <span class="token attr-name">id</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">dropdown-variants-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>variant<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span></span> <span class="token attr-name">variant</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>variant<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token attr-name">title</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>variant<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown.Item</span></span> <span class="token attr-name">eventKey</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Action</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown.Item</span></span> <span class="token attr-name">eventKey</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Another action</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown.Item</span></span> <span class="token attr-name">eventKey</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token attr-name">active</span><span class="token punctuation">></span></span><span class="token plain-text">
            Active Item
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown.Divider</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown.Item</span></span> <span class="token attr-name">eventKey</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Separated link</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">DropdownButton</span></span><span class="token punctuation">></span></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown.Toggle</span></span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dropdown-basic<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          Dropdown Button
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown.Toggle</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown.Menu</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown.Item</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#/action-1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Action</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown.Item</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#/action-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Another action</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown.Item</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#/action-3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Something else</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown.Menu</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tailwind-css" tabindex="-1"><a class="header-anchor" href="#tailwind-css" aria-hidden="true">#</a> Tailwind CSS</h2>
<img src="@source/docs/Library/2024-03-06-2024년-가장-인기있는-css-프레임워크-5가지/img/3.png" width="500" />
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
<p>Tailwind CSS는 유틸리티 우선 CSS 프레임워크로, 사용자 정의 디자인을 구축하기 위해서 모든 스타일들을 클래스로 지원하고 있습니다.
클래스명이 너무 길어져서 가독성이 떨어지긴 하지만 가장 빠르게 UI를 만들 수 있다는 장점은 있습니다.</p>
<ul>
<li>스타일링을 위한 유틸리티 우선 접근 방식</li>
<li>구성 파일을 통한 높은 사용자 정의 가능성</li>
<li>미리 구축된 컴포넌트 없이 유틸리티 클래스로 스타일 생성</li>
<li>미디어 쿼리를 통한 반응형 디자인</li>
<li>제품 빌드를 최적화하기 위한 PurgеCSS 통합</li>
<li>JIT (Just-In-Time) 모드를 통한 빠른 개발</li>
</ul>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Tailwind</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>relative z-10 overflow-hidden bg-white py-20 dark:bg-dark lg:py-[120px]<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token comment">/* Your Tailwind styled components */</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4877378276818686"
     data-ad-slot="9743150776"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="foundation" tabindex="-1"><a class="header-anchor" href="#foundation" aria-hidden="true">#</a> Foundation</h2>
<img src="@source/docs/Library/2024-03-06-2024년-가장-인기있는-css-프레임워크-5가지/img/4.png" width="500" />
<p>Foundation은 오픈 소스 반응형 프론트엔드 프레임워크로, 어떤 기기에서도 작동하는 멋진 반응형 웹사이트, 앱 및 이메일을 간단하게 만듭니다.</p>
<ul>
<li>유연한 반응형 그리드 시스템</li>
<li>사용자 정의가 용이한 모듈화 아키텍처</li>
<li>스타일링을 위한 Sass 전처리기</li>
<li>내장된 컴포넌트 및 반응형 내비게이션</li>
<li>플렉스박스 및 블록 그리드 지원</li>
<li>접근성 기능</li>
</ul>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Menu<span class="token punctuation">,</span> MenuItem <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-foundation"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Foundation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">marginLeft</span><span class="token operator">:</span> <span class="token string">"34px"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token comment">/* Foundation styled menu */</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Menu</span></span><span class="token punctuation">></span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
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
<h2 id="bulma" tabindex="-1"><a class="header-anchor" href="#bulma" aria-hidden="true">#</a> Bulma</h2>
<img src="@source/docs/Library/2024-03-06-2024년-가장-인기있는-css-프레임워크-5가지/img/5.png" width="500" />
<p>Bulma는 간결함, 반응 형 및 사용자가 쉽게 커스텀할 수 있는 가벼운 CSS 프레임워크입니다.</p>
<ul>
<li>플렉스박스를 기반으로 한 현대적인 CSS 프레임워크</li>
<li>사용하기 쉽고 직관적인 구문</li>
<li>JavaScript 의존성 없음</li>
<li>내장된 수정자로 반응 형 디자인</li>
<li>내비게이션 바, 모달 및 탭과 같은 컴포넌트</li>
<li>Sass를 통한 확장성</li>
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
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Bulma</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token comment">/* Bulma styled pagination */</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="uikit" tabindex="-1"><a class="header-anchor" href="#uikit" aria-hidden="true">#</a> UIKit</h2>
<img src="@source/docs/Library/2024-03-06-2024년-가장-인기있는-css-프레임워크-5가지/img/6.png" width="500" />
<p>UIKit은 웹 애플리케이션의 사용자 인터페이스를 구축하기 위한 오픈 소스 프레임워크입니다.</p>
<ul>
<li>모듈식 및 가벼운 프레임워크</li>
<li>반응형 그리드 시스템</li>
<li>사전 설계된 컴포넌트 (내비게이션 바, 슬라이더, 모달)</li>
<li>플렉스박스 기반 레이아웃</li>
<li>애니메이션 및 전환 효과</li>
<li>사용자 정의 및 테마 지원</li>
</ul>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Uikit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>uk-flex uk-flex-center uk-margin-top<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token comment">/* UIKit styled button */</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4877378276818686"
     data-ad-slot="9743150776"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="마무리" tabindex="-1"><a class="header-anchor" href="#마무리" aria-hidden="true">#</a> 마무리</h1>
<p>이외에도 다양한 CSS 프레임워크가 있지만, 프로젝트에 적합한 것을 선택하는 것이 중요합니다.</p>
<p>이를 통해 프로젝트에 적합한 CSS 프레임워크를 선택하세요!</p>
</div></template>
