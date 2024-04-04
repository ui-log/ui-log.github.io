<template><div><h2 id="파이썬" tabindex="-1"><a class="header-anchor" href="#파이썬" aria-hidden="true">#</a> 파이썬</h2>
<img src="@source/docs/Tech/2024-03-29-ForgetpipinstallUseThisInstead/img/ForgetpipinstallUseThisInstead_0.png" />
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
<p><img src="@source/docs/Tech/2024-03-29-ForgetpipinstallUseThisInstead/img/ForgetpipinstallUseThisInstead_1.png" alt="ForgetpipinstallUseThisInstead_1.png"></p>
<p><img src="@source/docs/Tech/2024-03-29-ForgetpipinstallUseThisInstead/img/ForgetpipinstallUseThisInstead_2.png" alt="ForgetpipinstallUseThisInstead_2.png"></p>
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
<h1 id="러프" tabindex="-1"><a class="header-anchor" href="#러프" aria-hidden="true">#</a> 러프</h1>
<p>처음으로 출시된 러프는 Flake8와 블랙과 같은 기존 린터 및 형식 지정 도구에 비해 10~100배 빠른 속도 향상을 제공합니다.</p>
<p>모든 파이썬 프로젝트에 러프로 전환했는데, 반드시 필요한 도구입니다.</p>
<p>럼의 러프에 관한 내 기사를 여기에서 읽어보세요 👇</p>
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
<p>자, 이제 uv로 돌아왔어요.</p>
<h2 id="uv가-뭐죠" tabindex="-1"><a class="header-anchor" href="#uv가-뭐죠" aria-hidden="true">#</a> uv가 뭐죠?</h2>
<p>uv는 Rust로 작성된 초고속 Python 패키지 설치 및 해결 프로그램으로, pip, pip-tools 및 virtualenv를 대체하는 빠른 대체품으로 사용됩니다.</p>
<p>따뜻한 캐시로, uv는 pip 및 pip-tools보다 10~100배 빠르며 거의 즉시 설치가 완료됩니다.</p>
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
<p>몇 가지 더 강조할 점</p>
<ul>
<li>디스크 공간 저장: 중복 종속성을 방지하기 위해 전역 캐시를 사용합니다.</li>
<li>어디서든 동작: macOS, Linux 및 Windows를 지원합니다.</li>
<li>쉬운 설치: Python이나 Rust를 설치할 필요가 없습니다. curl, pip 또는 brew를 사용할 수 있습니다.</li>
<li>고급 기능: 종속성 버전 재정의 및 대체 해결 전략을 지원합니다.</li>
<li>더 나은 오류 메시지: 충돌 추적 리졸버와 함께 최고 수준의 오류 메시지</li>
<li>고급 pip: 편집 가능 설치, git 종속성, 로컬 종속성, 소스 배포</li>
</ul>
<h1 id="빠른-이유" tabindex="-1"><a class="header-anchor" href="#빠른-이유" aria-hidden="true">#</a> 빠른 이유:</h1>
<ul>
<li>Rust: Rust는 속도와 안정성으로 유명합니다.</li>
<li>&quot;resolver&quot;: 패키지가 함께 작동할 수 있는 버전을 찾는 스마트한 방법.</li>
<li>전역 모듈 캐시: 이미 본 파일을 기억하여 종속성을 다시 다운로드하거나 다시 빌드하지 않습니다.</li>
<li>Copy-on-Write 및 하드 링크: 이는 디스크 공간 사용량을 최소화하는 데 도움이 됩니다.</li>
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
<p>uv의 큰 비전은 그 속도와 신뢰성으로 Python 패키지 관리를 변화시키는 것입니다.</p>
<h1 id="다음으로-나올-poetry인가요" tabindex="-1"><a class="header-anchor" href="#다음으로-나올-poetry인가요" aria-hidden="true">#</a> 다음으로 나올 Poetry인가요?</h1>
<p>만약 Python 에코시스템에 충분한 시간 동안 있었다면, Python 환경을 설정하거나 패키지를 만드는 것이 얼마나 고통스러운지 알고 계실 것입니다.</p>
<p><img src="@source/docs/Tech/2024-03-29-ForgetpipinstallUseThisInstead/img/ForgetpipinstallUseThisInstead_3.png" alt="이미지"></p>
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
<p>UV는 매우 빠르고 신뢰할 수 있으며 사용하기 쉬운 통합 Python 패키지 및 프로젝트 관리자 'Python용 Cargo'를 설립할 계획이 있습니다.</p>
<p>UV가 Python 개발 경험을 크게 향상시키는 것을 기대하고 있어요!</p>
<h2 id="성능-평가" tabindex="-1"><a class="header-anchor" href="#성능-평가" aria-hidden="true">#</a> 성능 평가</h2>
<p>그들의 벤치마크에서 몇 가지 숫자를 살펴보겠습니다.</p>
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
<h2 id="콜드-설치-8–10배-빠름" tabindex="-1"><a class="header-anchor" href="#콜드-설치-8–10배-빠름" aria-hidden="true">#</a> 콜드 설치 (8–10배 빠름)</h2>
<p>이는 새로운 기기에서 uv pip sync를 실행하는 것과 동일합니다.</p>
<p>uv는 캐싱 없이 pip 및 pip-tools보다 8–10배 빠릅니다.</p>
<p><img src="@source/docs/Tech/2024-03-29-ForgetpipinstallUseThisInstead/img/ForgetpipinstallUseThisInstead_4.png" alt="이미지"></p>
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
<h2 id="따뜻한-설치-80–115배-빠름" tabindex="-1"><a class="header-anchor" href="#따뜻한-설치-80–115배-빠름" aria-hidden="true">#</a> 따뜻한 설치 (80–115배 빠름)</h2>
<p>웜 캐시를 사용할 때 실행 시 80–115배 빠릅니다 (가상 환경을 다시 만들거나 종속성을 업데이트하는 경우)</p>
<p><img src="@source/docs/Tech/2024-03-29-ForgetpipinstallUseThisInstead/img/ForgetpipinstallUseThisInstead_5.png" alt="이미지"></p>
<h2 id="가상-환경-만들기" tabindex="-1"><a class="header-anchor" href="#가상-환경-만들기" aria-hidden="true">#</a> 가상 환경 만들기</h2>
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
<p>이 표는 Python -m venv보다 약 80배, virtualenv보다 약 7배 빠릅니다.</p>
<p><img src="@source/docs/Tech/2024-03-29-ForgetpipinstallUseThisInstead/img/ForgetpipinstallUseThisInstead_6.png" alt="이미지"></p>
<p>이 벤치마크에서 더 많은 정보 확인하기</p>
<h1 id="트랜스포머-설치하기" tabindex="-1"><a class="header-anchor" href="#트랜스포머-설치하기" aria-hidden="true">#</a> 트랜스포머 설치하기</h1>
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
<p>나는 허깅페이스의 트랜스포머 패키지에 있는 uv를 시험해봤어.</p>
<p>그 속도 차이가 정말 분명하더라고.</p>
<h1 id="어떻게-사용하나요" tabindex="-1"><a class="header-anchor" href="#어떻게-사용하나요" aria-hidden="true">#</a> 어떻게 사용하나요?</h1>
<h2 id="설치" tabindex="-1"><a class="header-anchor" href="#설치" aria-hidden="true">#</a> 설치</h2>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code># macOS 및 Linux에서
curl <span class="token operator">-</span>LsSf https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>astral<span class="token punctuation">.</span>sh<span class="token operator">/</span>uv<span class="token operator">/</span>install<span class="token punctuation">.</span>sh <span class="token operator">|</span> sh
# Homebrew로
brew install uv
# Windows에서
powershell <span class="token operator">-</span>c <span class="token string">"irm https://astral.sh/uv/install.ps1 | iex"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="가상-환경-만들기-1" tabindex="-1"><a class="header-anchor" href="#가상-환경-만들기-1" aria-hidden="true">#</a> 가상 환경 만들기</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>uv venv  # <span class="token punctuation">.</span>venv에 가상 환경을 만듭니다<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="가상-환경-활성화" tabindex="-1"><a class="header-anchor" href="#가상-환경-활성화" aria-hidden="true">#</a> 가상 환경 활성화</h2>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code># macOS 및 Linux에서
source <span class="token punctuation">.</span>venv<span class="token operator">/</span>bin<span class="token operator">/</span>activate

# Windows에서
<span class="token punctuation">.</span>venv\Scripts\activate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="패키지-설치" tabindex="-1"><a class="header-anchor" href="#패키지-설치" aria-hidden="true">#</a> 패키지 설치</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>uv pip install flask                # Flask 설치
uv pip install <span class="token operator">-</span>r requirements<span class="token punctuation">.</span>txt  # requirements<span class="token punctuation">.</span>txt 파일에 있는 패키지 설치
uv pip install <span class="token operator">-</span>e <span class="token punctuation">.</span>                 # 현재 프로젝트를 편집 가능한 모드로 설치
uv pip install <span class="token string">"package @ ."</span>        # 디스크에서 현재 프로젝트 설치
uv pip install <span class="token string">"flask[dotenv]"</span>      # <span class="token string">"dotenv"</span> 추가 기능이 있는 Flask 설치
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="잠금된-종속성-생성하기" tabindex="-1"><a class="header-anchor" href="#잠금된-종속성-생성하기" aria-hidden="true">#</a> 잠금된 종속성 생성하기</h2>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>uv pip compile pyproject<span class="token punctuation">.</span>toml <span class="token operator">-</span>o requirements<span class="token punctuation">.</span>txt   # pyproject<span class="token punctuation">.</span>toml 파일을 읽습니다<span class="token punctuation">.</span>
uv pip compile requirements<span class="token punctuation">.</span>in <span class="token operator">-</span>o requirements<span class="token punctuation">.</span>txt  # requirements<span class="token punctuation">.</span>in 파일을 읽습니다<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="종속성-동기화" tabindex="-1"><a class="header-anchor" href="#종속성-동기화" aria-hidden="true">#</a> 종속성 동기화</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>uv pip sync requirements<span class="token punctuation">.</span>txt  # requirements<span class="token punctuation">.</span>txt 파일에서 설치합니다<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>여기까지가 이 기사의 모든 내용입니다!</p>
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
<h1 id="uv에-대해-더-알아보기" tabindex="-1"><a class="header-anchor" href="#uv에-대해-더-알아보기" aria-hidden="true">#</a> UV에 대해 더 알아보기</h1>
<p>만약 UV에 대해 더 많은 정보를 원하시면, 아래 링크들을 확인해보세요:</p>
<ul>
<li>How to cut your Python Docker build times in half with uv</li>
<li>uv: Python packaging in Rust</li>
<li>astral-sh/uv: An extremely fast Python package installer and resolver, written in Rust.</li>
<li>uv/BENCHMARKS.md</li>
</ul>
<h1 id="읽어주셔서-감사합니다" tabindex="-1"><a class="header-anchor" href="#읽어주셔서-감사합니다" aria-hidden="true">#</a> 읽어주셔서 감사합니다</h1>
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
<p>bitgrit 데이터 과학 게시물을 구독해 보세요!</p>
<p>다른 데이터 과학자들과 최신 데이터 과학 및 AI 개발에 대해 토의하고 싶나요? 저희 디스코드 서버에 가입해보세요!</p>
<p>워크샵 및 다가오는 대회 소식을 받아보려면 아래의 Bitgrit을 팔로우해주세요!</p>
<ul>
<li>Discord</li>
<li>Website</li>
<li>Twitter</li>
<li>LinkedIn</li>
<li>Instagram</li>
<li>Facebook</li>
<li>YouTube</li>
</ul>
</div></template>
