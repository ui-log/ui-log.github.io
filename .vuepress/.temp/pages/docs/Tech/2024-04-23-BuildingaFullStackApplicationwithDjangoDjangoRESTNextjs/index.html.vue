<template><div><p><img src="@source/docs/Tech/2024-04-23-BuildingaFullStackApplicationwithDjangoDjangoRESTNextjs/img/BuildingaFullStackApplicationwithDjangoDjangoREST-Nextjs_0.png" alt="FullStackApplication"></p>
<p>안녕하세요! Django와 Nextjs는 백엔드와 프론트엔드 개발을 위한 가장 많이 사용되는 웹 프레임워크 중 하나입니다. Django는 강력한 기능, 보안, 그리고 유연성을 갖추고 있어 어떤 개발자든 간단하면서도 복잡한 애플리케이션을 빠르게 구축할 수 있습니다. 반면에 Nextjs는 React를 사용하여 반응형 프론트엔드를 개발할 때 선호되는 프레임워크입니다.</p>
<p>Python 기반의 Django는 &quot;배터리 포함&quot; 접근법으로 유명합니다. 이를 통해 백엔드 개발을 간소화하여 개발자들이 휠을 재창조할 필요 없이 애플리케이션 작성에 더 많은 초점을 맞출 수 있습니다. 한편, Next.js는 빠른 로드 시간과 SEO를 위한 서버사이드 렌더링과 같은 기능을 제공하여 React 기반 프론트엔드를 향상시킵니다. 두 프레임워크는 풀스택 개발을 위한 강력한 이중체를 형성합니다.</p>
<p>이 기사에서는 Django를 백엔드로 사용하여 REST API를 구축하고, 그 데이터를 사용하여 Nextjs를 통해 멋지고 간단한 프론트엔드를 만드는 방법을 배우겠습니다.</p>
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
<p>이 어플리케이션은 레스토랑 메뉴를 관리하는 간단한 CRUD 앱입니다. 프론트엔드에서 사용자는 다음을 할 수 있어야 합니다:</p>
<ul>
<li>모든 메뉴 나열</li>
<li>메뉴 조회</li>
<li>메뉴 생성</li>
<li>메뉴 업데이트</li>
<li>메뉴 삭제</li>
</ul>
<p>이 글의 끝에, 장고 애플리케이션과 Nextjs로 구축된 프론트엔드 애플리케이션을 연결하는 방법을 이해하게 될 것입니다.</p>
<h2 id="설정" tabindex="-1"><a class="header-anchor" href="#설정" aria-hidden="true">#</a> 설정</h2>
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
<p>시작하기 전에 필요한 도구와 기술로 프로젝트를 설정해 봅시다. 백엔드에서는 Python 3.11과 Django 4.2를 사용할 예정입니다. 최신 버전을 사용함으로써 백엔드가 원할하게 운영되고 안전하게 유지될 수 있습니다.</p>
<p>프론트엔드에서는 Next.js 13과 Node 19를 사용할 것입니다.</p>
<p>스타일링에는 Tailwind CSS를 사용할 것입니다.</p>
<h2 id="django-api-구축하기" tabindex="-1"><a class="header-anchor" href="#django-api-구축하기" aria-hidden="true">#</a> Django API 구축하기</h2>
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
<p>장고만을 사용해서 안정적인 API를 만드는 것은 상당히 어렵습니다. 애플리케이션의 뷰 함수나 클래스에서 JSON 데이터를 반환할 수는 있지만 권한, 인증, 파싱, 쓰로틀링, 데이터 직렬화 등을 어떻게 처리해야 할지는 고민이 됩니다.</p>
<p>이때 Django REST framework가 나타납니다. Django의 아키텍처를 기반으로 개발된 이 프레임워크는 개발자들이 강력하고 안정적인 REST API를 구축하는 데 도움을 줍니다.</p>
<p>망설이지 말고, Django 애플리케이션을 만들어 봅시다.</p>
<h2 id="애플리케이션-만들기" tabindex="-1"><a class="header-anchor" href="#애플리케이션-만들기" aria-hidden="true">#</a> 애플리케이션 만들기</h2>
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
<p>Python 3.11이 설치되어 있는지 확인해주세요. 기계의 터미널에서 다음 명령어를 실행하여 작업 디렉토리, 가상 환경, 그리고 프로젝트를 생성해보세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>mkdir menu<span class="token operator">-</span>api <span class="token operator">&amp;&amp;</span> cd menu<span class="token operator">-</span>api
python3<span class="token punctuation">.</span><span class="token number">11</span> <span class="token operator">-</span>m venv venv

source venv<span class="token operator">/</span>bin<span class="token operator">/</span>activate

pip install django djangorestframework

django<span class="token operator">-</span>admin startproject RestaurantCore <span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위 코드를 통해 새로운 Django 프로젝트인 RestaurantCore가 생성되었습니다. 현재 작업 디렉토리에 새 디렉토리와 파일이 생긴 것을 확인할 수 있을 거에요.</p>
<p>RestaurantCore에는 다음과 같은 파일이 포함되어 있습니다:</p>
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
<li>Django 프로젝트의 모든 설정을 포함하는 settings.py입니다. 여기에는 Django rest-framework 패키지 및 기타 패키지에 대한 구성을 추가할 것입니다.</li>
<li>프로젝트의 모든 URL을 포함하는 urls.py입니다.</li>
<li>Django 애플리케이션을 개발 모드로 실행하고 배포하는 데 유용한 wsgi입니다.</li>
</ul>
<p>관리자가 메뉴 객체에서 CRUD 작업을 수행할 수 있도록 하려면, 요청을 처리하고 데이터를 직렬화 또는 역직렬화하며 마지막으로 데이터베이스에 저장하기 위한 필요한 로직이 모두 포함된 애플리케이션을 추가해야 합니다.</p>
<p>우리는 MVT 아키텍처(모델 - 뷰 - 템플릿)를 재사용하고 있지만, 뷰 및 템플릿 레이어를 시리얼라이저 및 뷰셋으로 대체하고 있습니다.</p>
<p>그러니 애플리케이션 추가부터 시작해봅시다.</p>
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
<h2 id="메뉴-애플리케이션-추가하기" tabindex="-1"><a class="header-anchor" href="#메뉴-애플리케이션-추가하기" aria-hidden="true">#</a> 메뉴 애플리케이션 추가하기</h2>
<p>현재 작업 디렉토리에서 다음 명령어를 입력하여 새 Django 애플리케이션을 만듭니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>django<span class="token operator">-</span>admin startapp menu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이 명령어를 실행한 후에 다음 이미지와 같은 디렉토리 구조를 가지고 있는지 확인하세요 :</p>
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
<img src="@source/docs/Tech/2024-04-23-BuildingaFullStackApplicationwithDjangoDjangoRESTNextjs/img/BuildingaFullStackApplicationwithDjangoDjangoREST-Nextjs_1.png" />
<p>Django 애플리케이션을 생성한 후, Django 프로젝트의 settings.py 파일에서 INSTALLED_APPS에 새로 생성된 애플리케이션을 등록해야 합니다. 또한 rest-framework 패키지에서 실제로 작동하도록 rest_framework 애플리케이션을 등록해야 합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code># RestaurantCore<span class="token operator">/</span>settings<span class="token punctuation">.</span>py
<span class="token operator">...</span>
<span class="token constant">INSTALLED_APPS</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">"django.contrib.admin"</span><span class="token punctuation">,</span>
    <span class="token string">"django.contrib.auth"</span><span class="token punctuation">,</span>
    <span class="token string">"django.contrib.contenttypes"</span><span class="token punctuation">,</span>
    <span class="token string">"django.contrib.sessions"</span><span class="token punctuation">,</span>
    <span class="token string">"django.contrib.messages"</span><span class="token punctuation">,</span>
    <span class="token string">"django.contrib.staticfiles"</span><span class="token punctuation">,</span>

    #third apps
    <span class="token string">"rest_framework"</span><span class="token punctuation">,</span>

    # installed apps

    <span class="token string">"menu"</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>INSTALLED_APPS 목록에 애플리케이션이 추가되었으므로 이제 menu Django 애플리케이션 로직 작성을 시작할 수 있습니다.</p>
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
<p>models.py 파일부터 시작해보겠습니다. 대부분의 경우, 이 파일에는 데이터베이스 테이블을 나타내는 모델이 포함되어 있습니다. Django ORM을 사용하면 SQL을 한 줄도 작성할 필요가 없이 테이블을 생성하고 필드를 추가할 수 있습니다.</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token comment"># menu/models.py</span>

<span class="token keyword">from</span> django<span class="token punctuation">.</span>db <span class="token keyword">import</span> models

<span class="token keyword">class</span> <span class="token class-name">Menu</span><span class="token punctuation">(</span>models<span class="token punctuation">.</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    name <span class="token operator">=</span> models<span class="token punctuation">.</span>CharField<span class="token punctuation">(</span>max_length<span class="token operator">=</span><span class="token number">255</span><span class="token punctuation">)</span>
    price <span class="token operator">=</span> models<span class="token punctuation">.</span>FloatField<span class="token punctuation">(</span><span class="token punctuation">)</span>
    created <span class="token operator">=</span> models<span class="token punctuation">.</span>DateTimeField<span class="token punctuation">(</span>auto_now_add<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    updated <span class="token operator">=</span> models<span class="token punctuation">.</span>DateTimeField<span class="token punctuation">(</span>auto_now<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Menu 모델은 다음과 같은 필드를 가지고 있습니다:</p>
<ul>
<li>메뉴 이름을 나타내는 name</li>
<li>가격을 나타내는 price</li>
<li>객체 생성 날짜를 나타내는 created. auto_now_add가 True로 설정되어 있으면 데이터가 자동으로 추가됩니다.</li>
<li>마지막으로 객체의 수정 또는 업데이트 날짜를 나타내는 updated. 객체를 저장할 때마다 auto_now를 사용하면 날짜가 업데이트됩니다.</li>
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
<p>다음 단계는 직렬화기(serializer)를 추가하는 것입니다. 이 것은 Django가 JSON 데이터를 Python 네이티브 객체로 매끄럽게 변환하여 더 쉽게 처리할 수 있도록 도와줍니다.</p>
<p>메뉴 애플리케이션의 serializers.py 파일에 다음 내용을 추가하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>from rest_framework <span class="token keyword">import</span> serializers

from menu<span class="token punctuation">.</span>models <span class="token keyword">import</span> Menu


<span class="token keyword">class</span> <span class="token class-name">MenuSerializer</span><span class="token punctuation">(</span>serializers<span class="token punctuation">.</span>ModelSerializer<span class="token punctuation">)</span><span class="token operator">:</span>

    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token operator">:</span>
        model <span class="token operator">=</span> Menu
        fields <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token string">'price'</span><span class="token punctuation">,</span> <span class="token string">'created'</span><span class="token punctuation">,</span> <span class="token string">'updated'</span><span class="token punctuation">,</span> <span class="token string">'id'</span><span class="token punctuation">]</span>
        read_only_fields <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'created'</span><span class="token punctuation">,</span> <span class="token string">'updated'</span><span class="token punctuation">,</span> <span class="token string">'id'</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위 줄들에서 우리는 ModelSerializer 클래스를 사용하여 직렬화기를 만드는 중입니다. ModelSerializer 클래스는 쿼리셋과 필드 유효성 검사를 다루기 위해 모델에 대한 직렬화기를 추가하는 바로 가기 역할을 합니다. 따라서 우리의 유효성 검증 로직과 오류 처리를 추가할 필요가 없습니다.</p>
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
<p>이 시리얼라이저에서는 Meta 클래스를 정의하고 모델과 필드, 읽기 전용 필드를 설정합니다. 이러한 필드는 변경 요청을 통해 수정되지 않아야 합니다.</p>
<p>좋아요! 이제 모델 시리얼라이저가 있는데, 그럼 뷰셋을 추가해 인터페이스(컨트롤러)를 정의하겠습니다. 메뉴 응용 프로그램 폴더에 viewsets라는 파일을 만들고 다음을 추가하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>from rest_framework <span class="token keyword">import</span> viewsets
from rest_framework<span class="token punctuation">.</span>permissions <span class="token keyword">import</span> AllowAny
from menu<span class="token punctuation">.</span>models <span class="token keyword">import</span> Menu

from menu<span class="token punctuation">.</span>serializers <span class="token keyword">import</span> MenuSerializer

<span class="token keyword">class</span> <span class="token class-name">MenuViewSet</span><span class="token punctuation">(</span>viewsets<span class="token punctuation">.</span>ModelViewSet<span class="token punctuation">)</span><span class="token operator">:</span>
    queryset <span class="token operator">=</span> Menu<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    serializer_class <span class="token operator">=</span> MenuSerializer
    permission_classes <span class="token operator">=</span> <span class="token punctuation">[</span>AllowAny<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 코드에서 ModelViewSet 클래스를 사용하여 새 뷰셋 클래스를 만듭니다. 왜 뷰셋을 사용하고 API 뷰를 사용하지 않는 걸까요? 뷰셋은 이미 목록, 검색, 업데이트, 생성, 삭제와 같은 모든 CRUD 작업에 필요한 논리가 포함되어 있습니다. 이를 통해 개발 프로세스를 더 빠르고 깔끔하게 만들 수 있습니다.</p>
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
<p>이 엔드포인트에 대해 우리는 모든 사용자가 이러한 CRUD 작업을 수행할 수 있도록 허용하고자 합니다. (인증 및 권한에 대해 다음 기사에서 다룰 예정입니다 😁)</p>
<p>CRUD 작업을 돕는 viewset을 갖고 있으며, 이를 등록하고 메뉴를 관리하는 API 엔드포인트를 노출해야 합니다.</p>
<h2 id="메뉴-엔드포인트-추가하기" tabindex="-1"><a class="header-anchor" href="#메뉴-엔드포인트-추가하기" aria-hidden="true">#</a> 메뉴 엔드포인트 추가하기</h2>
<p>Django 프로젝트의 루트 디렉토리에 routers.py라는 파일을 생성하세요. 이 파일에는 모든 API의 엔드포인트가 포함될 것이며, 이 경우 /menu/ 엔드포인트가 포함됩니다. 그런 다음 Django 애플리케이션의 urls.py 파일에 이러한 엔드포인트를 등록합니다.</p>
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
<p>우선 routers.py 파일에 코드를 작성해 봅시다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code># <span class="token punctuation">.</span><span class="token operator">/</span>routers<span class="token punctuation">.</span>py

from rest_framework <span class="token keyword">import</span> routers

from menu<span class="token punctuation">.</span>viewsets <span class="token keyword">import</span> MenuViewSet

router <span class="token operator">=</span> routers<span class="token punctuation">.</span><span class="token function">SimpleRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

router<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span>r<span class="token string">'menu'</span><span class="token punctuation">,</span> MenuViewSet<span class="token punctuation">,</span> basename<span class="token operator">=</span><span class="token string">"menu"</span><span class="token punctuation">)</span>

urlpatterns <span class="token operator">=</span> router<span class="token punctuation">.</span>urls
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 코드에서 다음이 일어나고 있습니다:</p>
<ul>
<li>routers.SimpleRouter()는 DRF ViewSet을 위한 URL을 자동으로 생성하는 간단한 기본 라우터를 생성하는 데 사용됩니다.</li>
<li>menu.viewsets의 MenuViewSet가 라우터에 등록됩니다.</li>
<li>router.register의 basename 매개변수는 &quot;menu&quot;로 설정됩니다. 이 basename은 MenuViewSet의 URL 이름을 구성하는 데 사용됩니다.</li>
<li>마지막으로 urlpatterns = router.urls는 이 애플리케이션 부분의 urlpatterns를 MenuViewSet에 대해 라우터가 생성한 것으로 설정합니다.</li>
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
<p>다음은 Django 프로젝트의 urls.py 파일에 정의된 라우터 URL을 등록할 수 있습니다.</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token comment"># RestaurantCore/urls.py</span>

<span class="token keyword">from</span> django<span class="token punctuation">.</span>contrib <span class="token keyword">import</span> admin
<span class="token keyword">from</span> django<span class="token punctuation">.</span>urls <span class="token keyword">import</span> path<span class="token punctuation">,</span> include

<span class="token keyword">from</span> routers <span class="token keyword">import</span> router

urlpatterns <span class="token operator">=</span> <span class="token punctuation">[</span>
    path<span class="token punctuation">(</span><span class="token string">"admin/"</span><span class="token punctuation">,</span> admin<span class="token punctuation">.</span>site<span class="token punctuation">.</span>urls<span class="token punctuation">)</span><span class="token punctuation">,</span>

    path<span class="token punctuation">(</span><span class="token string">'api/'</span><span class="token punctuation">,</span> include<span class="token punctuation">(</span><span class="token punctuation">(</span>router<span class="token punctuation">.</span>urls<span class="token punctuation">,</span> <span class="token string">'core_api'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> namespace<span class="token operator">=</span><span class="token string">'core_api'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 코드에서는 Django 애플리케이션에 새로운 URL을 등록하고 있습니다. <code v-pre>path('api/', include((router.urls, 'core_api'), namespace='core_api'))</code>라는 줄은 <code v-pre>api/</code>로 시작하는 모든 URL을 포함하는 경로를 정의하고 있습니다. 이는 <code v-pre>core_api</code>라는 네임스페이스 내에 중첩되어 있습니다.</p>
<p>URL과 엔드포인트를 정의했으니, 프런트엔드를 생성하고 API에서 데이터를 소비하기 시작할 수 있어야 할 것입니다 😍. 하지만 기다려봐요, 설정해야 할 것이 아직 있는데요, 바로 웹 개발자의 큰 고민인 CORS에요.</p>
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
<h2 id="중요한-구성-cors" tabindex="-1"><a class="header-anchor" href="#중요한-구성-cors" aria-hidden="true">#</a> 중요한 구성: CORS</h2>
<p>API를 프런트엔드 POV에서 사용할 수 있도록 하려면 CORS를 구성해야 합니다. 그런데 CORS가 무엇일까요? Cross-Origin Resource Sharing (CORS)은 웹 브라우저에 구현된 보안 기능으로, 한 도메인의 웹 페이지가 다른 도메인에서 리소스를 요청하는 방식을 제어합니다. 다른 원산지 간에 리소스를 공유하는 방법을 제한함으로써, CORS는 악의적인 공격인 교차 사이트 스크립팅 (XSS) 및 데이터 도난과 같은 공격을 예방하는 데 중요한 역할을 합니다.</p>
<p>우리의 경우, 브라우저에서 API URL로 요청을 보내면 프런트엔드 오류가 발생할 수 있습니다. 이는 매우 추해보이고 때로는 짜증을 유발할 수 있습니다.</p>
<p><img src="@source/docs/Tech/2024-04-23-BuildingaFullStackApplicationwithDjangoDjangoRESTNextjs/img/BuildingaFullStackApplicationwithDjangoDjangoREST-Nextjs_2.png" alt="image"></p>
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
<p>API에서 CORS를 구성하여이 오류를 해결해 보겠습니다. 먼저 생성 된 API에 CORS를 구성하려면 django-cors-headers 패키지를 설치해야 합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>python <span class="token operator">-</span>m pip install django<span class="token operator">-</span>cors<span class="token operator">-</span>headers
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>설치가 완료되면 settings.py 파일을 열고 다음 구성을 추가해야 합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">INSTALLED_APPS</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token operator">...</span><span class="token punctuation">,</span>
    <span class="token string">"corsheaders"</span><span class="token punctuation">,</span>
    <span class="token operator">...</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token constant">MIDDLEWARE</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token operator">...</span><span class="token punctuation">,</span>
    <span class="token string">"corsheaders.middleware.CorsMiddleware"</span><span class="token punctuation">,</span>
    <span class="token string">"django.middleware.common.CommonMiddleware"</span><span class="token punctuation">,</span>
    <span class="token operator">...</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token constant">CORS_ALLOWED_ORIGINS</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">"http://localhost:3000"</span><span class="token punctuation">,</span>
    <span class="token string">"http://127.0.0.1:3000"</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>위의 코드에서 CORS_ALLOWED_ORIGINS는 Django에게 수락할 도메인 원본을 알려주는 데 도움이 됩니다. 우리는 프론트엔드에 Next.js를 사용할 계획이므로, 이러한 앱들은 기본적으로 3000 포트에서 실행됩니다. Django가 허용할 수 있는 두 개의 주소를 추가하여 Django가 수락할 수 있는 요청을 나타냅니다.</p>
<p>좋아요! 우리는 성공적으로 데이터를 제공할 준비가 된 Django REST API를 구축했습니다. api/menu 엔드포인트를 사용하여 메뉴를 나열할 수 있고, 메뉴를 생성할 수 있습니다. 또한 detail 엔드포인트인 api/menu/<code v-pre>menu_id</code>를 사용하면 메뉴를 업데이트하거나 삭제할 수 있습니다.</p>
<p>다음 섹션에서는 만든 Django 백엔드로부터 데이터를 소비할 App 라우터 아키텍처를 사용하는 Next.js 프론트엔드를 구축할 것입니다.</p>
<h2 id="next-js를-사용하여-프론트엔드-구축하기" tabindex="-1"><a class="header-anchor" href="#next-js를-사용하여-프론트엔드-구축하기" aria-hidden="true">#</a> Next.js를 사용하여 프론트엔드 구축하기</h2>
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
<p>이전 섹션에서 이 기사의 프리설트에서는 Django를 사용하여 풀스택 응용 프로그램의 백엔드를 구축했습니다. 이번 섹션에서는 React 애플리케이션의 개발 및 배포가 라이브러리를 직접 사용하는 것보다 훨씬 쉬운 React 프레임워크 인 Next.js를 사용하여 프론트 엔드를 구축할 것입니다.</p>
<p>우리는 CSS만을 사용하여 프론트 엔드 응용 프로그램의 UI를 구축할 것입니다. 우리는 목록 작성을 위한 페이지 및 기사 편집을 위한 페이지로 시작할 것입니다. 더 이상 기다릴 필요 없이 Next.js 프로젝트를 만들기 시작합시다.</p>
<h2 id="next-js-프로젝트-설정" tabindex="-1"><a class="header-anchor" href="#next-js-프로젝트-설정" aria-hidden="true">#</a> Next.js 프로젝트 설정</h2>
<p>Next.js 팀은 Next.js 프로젝트를 만드는 것을 매우 쉽게 만들었습니다. 새 프로젝트를 만들려면 다음 명령을 실행하십시오.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx create<span class="token operator">-</span>next<span class="token operator">-</span>app@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>프로젝트 구성을 선택할 수 있는 옵션이 표시됩니다. 이 기사를 따라 프로젝트를 구성하려면 다음 옵션을 따라주십시오.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>프로젝트 이름은 무엇인가요<span class="token operator">?</span> next<span class="token operator">-</span>js<span class="token operator">-</span>front
TypeScript를 사용하시겠습니까<span class="token operator">?</span> No
ESLint를 사용하시겠습니까<span class="token operator">?</span> Yes
Tailwind <span class="token constant">CSS</span>를 사용하시겠습니까<span class="token operator">?</span> No
<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">src/</span><span class="token template-punctuation string">`</span></span> 디렉토리를 사용하시겠습니까<span class="token operator">?</span> Yes
App Router를 사용하시겠습니까<span class="token operator">?</span> <span class="token punctuation">(</span>권장<span class="token punctuation">)</span> Yes
기본 <span class="token keyword">import</span> alias를 사용자 정의하시겠습니까<span class="token operator">?</span> <span class="token punctuation">(</span>@<span class="token comment">/*) No
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>제가 가장 흥미로운 옵션이라고 생각하는 것은 선택의</p>
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
<p>프로젝트를 생성하는 옵션을 선택한 후에는, 개발, 시작 및 Next.js 프로젝트 빌드에 필요한 모든 리소스가 포함 된 새로운 디렉토리 인 next-js-front이 만들어집니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>cd next<span class="token operator">-</span>js<span class="token operator">-</span>front <span class="token operator">&amp;&amp;</span> npm run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이렇게 하면 프로젝트가 http://localhost:3000에서 시작됩니다.</p>
<img src="@source/docs/Tech/2024-04-23-BuildingaFullStackApplicationwithDjangoDjangoRESTNextjs/img/BuildingaFullStackApplicationwithDjangoDjangoREST-Nextjs_3.png" />
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
<p>프로젝트를 설치했으니, 이제 애플리케이션의 첫 번째 블록을 구축할 차례입니다.</p>
<h2 id="기사-목록-페이지-만들기" tabindex="-1"><a class="header-anchor" href="#기사-목록-페이지-만들기" aria-hidden="true">#</a> 기사 목록 페이지 만들기</h2>
<p>이 섹션에서는 기사 목록 페이지를 만들 것입니다. 페이지에서 사용자는 기사 목록을 볼 수 있어야 하며, 새 메뉴를 추가하는 버튼도 있어야 합니다. 목록에 표시되는 각 항목(메뉴)마다 편집 및 삭제 작업을 할 수 있어야 합니다.</p>
<p>기사의 끝 부분은 아래 이미지와 같아야 합니다.👇</p>
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
<p><img src="@source/docs/Tech/2024-04-23-BuildingaFullStackApplicationwithDjangoDjangoRESTNextjs/img/BuildingaFullStackApplicationwithDjangoDjangoREST-Nextjs_4.png" alt="Next.js"></p>
<p>이제 인터페이스가 어떻게 보일지에 대한 감이 생겼으니 코딩을 시작해봅시다.</p>
<p>Next.js 프로젝트에서는Next.js 프로젝트의 src/app 내용을 찾을 수 있습니다. app 폴더에는 page.js, layout.js 및 style.css와 같은 파일이 포함되어 있어야 합니다. 각 파일 및 목표에 대한 간단한 설명은 다음과 같습니다.</p>
<ul>
<li>page.js: Next.js 버전 13에서 AppRouter 아키텍처 패턴을 소개하여 이전 버전의 파일 구조화 방법에서 페이지 디렉토리에 파일을 구성하는 접근 방식을 변경했습니다. 이 새로운 패턴은 파일 및 디렉토리 구성에 따라 프론트엔드 페이지 렌더링의 구조를 결정함으로써 라우팅 가시성과 간결성을 향상시킵니다.</li>
<li>AppRouter는 주목할 만한 개선 사항을 제공합니다. 더 빨라뿐만 아니라 서버 쪽 렌더링을 기본으로 제공하여 서버 구성 요소의 사용을 용이하게합니다. 또한 layout.js와 같은 기능을 확장하며 이에 대해 나중에 설명할 것입니다. 또한 오류 처리를위한 error.js 및 기본 로딩 동작을 위한 loading.js와 같은 특정 파일을 포함합니다.</li>
<li>이 프레임워크에서 Next.js 애플리케이션의 클라이언트 측에 메뉴/supplements와 같은 경로를 만드는 경우 해당 메뉴/supplements 디렉토리에 page.js 파일을 배치하면 됩니다. 이러한 page.js 파일에 중점을 둠으로써 다른 파일들이 라우팅에 관여하지 않게 되어 구조를 간단화시킵니다. 이러한 접근 방식은 개발자들에게 응용 프로그램 아키텍처를 더 유연하게 구성하고 페이지 선언 옆에 특정 페이지에서 사용되는 구성 요소를 배치할 수 있도록 허용함으로써 더 많은 유연성을 제공합니다.</li>
<li>layout.js: 특히 AppRouter가 포함된 Next.js에서 layout.js 파일은 응용 프로그램의 전반적인 레이아웃 및 스타일을 정의하는 데 중요합니다. 이 파일을 사용하여 요소를 설정하고 해더, 풋터 및 내비게이션 바와 같은 요소를 포함하는 응용 프로그램 전체적인 구조를 구축할 수 있습니다. layout.js는 계층 구조적인 레이아웃을 지원하여 응용 프로그램의 다른 섹션에는 각각의 layout.js 파일이 있어 고유한 레이아웃을 가질 수 있습니다. 또한 다른 페이지나 응용 프로그램 상태에 맞게 동적 레이아웃을 가질 수도 있습니다.</li>
<li>이 파일은 전역 상태 관리 및 테마 제공자와 같은 구성 요소를 통합하여 모든 페이지에서 일관된 환경을 보장합니다. 또한 layout.js는 메타데이터 관리를 중앙 집중화하고 공통 요소의 재렌더링 필요성을 줄여 SEO 및 성능 최적화에 유리합니다.</li>
<li>style.css: 프로젝트의 CSS 코드를 포함하고 있습니다. 이것은 layout.js 파일에 삽입할 것입니다.</li>
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
<p>지금부터 코딩을 시작해봅시다. 먼저 필요한 CSS 클래스 정의를 추가하여 Next.js 코드에 집중해보겠습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/app/style.css</span>

<span class="token punctuation">.</span>menu<span class="token operator">-</span>container <span class="token punctuation">{</span>
    max<span class="token operator">-</span>width<span class="token operator">:</span> <span class="token number">70</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 90vh<span class="token punctuation">;</span>
    <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span> auto<span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> #f9f9f9<span class="token punctuation">;</span>
    border<span class="token operator">-</span>radius<span class="token operator">:</span> 8px<span class="token punctuation">;</span>
    box<span class="token operator">-</span>shadow<span class="token operator">:</span> <span class="token number">0</span> 2px 4px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>menu<span class="token operator">-</span>item <span class="token punctuation">{</span>
    <span class="token literal-property property">border</span><span class="token operator">:</span> 1px solid #ddd<span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span>
    <span class="token literal-property property">margin</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span>
    border<span class="token operator">-</span>radius<span class="token operator">:</span> 4px<span class="token punctuation">;</span>
    box<span class="token operator">-</span>shadow<span class="token operator">:</span> <span class="token number">0</span> 2px 4px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
    justify<span class="token operator">-</span>content<span class="token operator">:</span> space<span class="token operator">-</span>between<span class="token punctuation">;</span>
    align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>menu<span class="token operator">-</span>item<span class="token operator">-</span>info <span class="token punctuation">{</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
    flex<span class="token operator">-</span>direction<span class="token operator">:</span> column<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>menu<span class="token operator">-</span>item<span class="token operator">-</span>name <span class="token punctuation">{</span>
    font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">.</span>2rem<span class="token punctuation">;</span>
    font<span class="token operator">-</span>weight<span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>menu<span class="token operator">-</span>item<span class="token operator">-</span>price <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">555</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>menu<span class="token operator">-</span>item<span class="token operator">-</span>actions <span class="token punctuation">{</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
    <span class="token literal-property property">gap</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

button <span class="token punctuation">{</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 5px 10px<span class="token punctuation">;</span>
    <span class="token literal-property property">border</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
    border<span class="token operator">-</span>radius<span class="token operator">:</span> 4px<span class="token punctuation">;</span>
    <span class="token literal-property property">cursor</span><span class="token operator">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>edit<span class="token operator">-</span>button <span class="token punctuation">{</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> #ffca28<span class="token punctuation">;</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">333</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>add<span class="token operator">-</span>button <span class="token punctuation">{</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> #<span class="token number">008000</span><span class="token punctuation">;</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span>
    <span class="token literal-property property">margin</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>delete<span class="token operator">-</span>button <span class="token punctuation">{</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> #f44336<span class="token punctuation">;</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

form <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">60</span><span class="token operator">%</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>form<span class="token operator">-</span>item <span class="token punctuation">{</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
    flex<span class="token operator">-</span>direction<span class="token operator">:</span> column<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

input <span class="token punctuation">{</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 22px<span class="token punctuation">;</span>
    border<span class="token operator">-</span>radius<span class="token operator">:</span> 4px<span class="token punctuation">;</span>
    <span class="token literal-property property">border</span><span class="token operator">:</span> solid black <span class="token number">0</span><span class="token punctuation">.</span>5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>success<span class="token operator">-</span>message <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">008000</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>error<span class="token operator">-</span>message <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> #f44336<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>다음으로 src/app/layout.js 파일에 CSS 코드를 가져오고 컨테이너 className을 menu-container로 수정합시다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/app/layout.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Inter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/font/google"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string">"./style.css"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> inter <span class="token operator">=</span> <span class="token function">Inter</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">subsets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"latin"</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> metadata <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"음식점 메뉴"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">"메뉴를 관리하기 위한 간단한 UI"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">RootLayout</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>body className<span class="token operator">=</span><span class="token punctuation">{</span>inter<span class="token punctuation">.</span>className<span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>main className<span class="token operator">=</span><span class="token string">"menu-container"</span><span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>위의 코드에서는 주로 자산인 글꼴 및 CSS 파일을 가져오고 있습니다. 타이틀과 설명이 포함된 메타데이터 객체를 선언한 다음 menu-container className으로 RootLayout 컴포넌트를 정의하고 몸체 태그에 우리의 글꼴을 가져오고 있습니다.</p>
<p>이제 complete layout.js 파일이 있다고 말할 수 있으며, 페이지.js 코드를 작성하는 단계로 넘어갈 수 있습니다. 이 코드에는 메뉴 목록을 나열하는 코드가 포함될 것입니다. 따라서 /를 탐색하면 모든 메뉴의 목록으로 이동합니다.</p>
<h2 id="목록-페이지-구축" tabindex="-1"><a class="header-anchor" href="#목록-페이지-구축" aria-hidden="true">#</a> 목록 페이지 구축</h2>
<p>이전 섹션에서 CSS에 대한 필요한 코드와 layout.js 파일을 정의했음을 보장했습니다. 이제 목록 페이지의 인터페이스를 구축할 수 있습니다.</p>
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
<p>/src/app/page.js에서 파일을 시작하기 위해 다음 import가 있는지 확인하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/app/page.js</span>

<span class="token string">"use client"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter<span class="token punctuation">,</span> useSearchParams <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/navigation"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>use client 지시문을 사용했음을 알 수 있을 것입니다. 이는 Next.js에게 이 페이지를 클라이언트 측에서 렌더링하도록 지시하는 것이므로, 우리가 구축 중인 페이지에는 클라이언트 측 코드가 포함되어야 합니다.</p>
<p>이 페이지에 서버 측 코드를 사용하려면 use server 대신에 사용하세요.</p>
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
<p>그 외에도, useState와 useEffect 훅을 사용하여 애플리케이션 내에서 상태와 효과를 관리합니다. useRouter와 useSearchParams를 사용하여 편집 페이지로 이동하거나 추가 페이지로 이동하는 버튼이 있을 때 유용합니다.</p>
<p>다음으로, API에서 메뉴 목록을 가져오는 함수와 메뉴를 삭제하는 함수를 선언할 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/app/page.js</span>

<span class="token operator">...</span>
<span class="token doc-comment comment">/**
 * ID로 메뉴 항목을 가져옵니다.
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">id</span> 가져올 메뉴 항목의 ID
 */</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">deleteMenu</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">http://127.0.0.1:8000/api/menu/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">"DELETE"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>res<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"메뉴를 가져오지 못했습니다"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 서버에서 메뉴 데이터를 가져옵니다.
 */</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"http://127.0.0.1:8000/api/menu/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>res<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"데이터를 불러오지 못했습니다"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위 코드에서는 두 함수를 선언하고 있습니다.</p>
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
<li>deleteMenu: 하나의 매개변수, 즉 기사의 id를 가져와 삭제 요청을 보내는 함수입니다. 요청을 보내기 위해 fetch API를 사용합니다.</li>
<li>getData: API에서 모든 메뉴를 검색하기 위해 요청을 보내는 함수입니다. 응답의 json을 반환합니다.</li>
</ul>
<p>이제 기사 목록에 사용할 메서드들이 준비되었습니다. 이제 메뉴 목록에서 메뉴 정보를 표시하는 데 사용될 항목 컴포넌트를 작성해야 합니다.</p>
<p>동일한 page.js 파일에 다음 MenuItem 컴포넌트를 추가하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">...</span>
<span class="token doc-comment comment">/**
 * 단일 메뉴 항목을 나타냅니다.
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">MenuItem</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> id<span class="token punctuation">,</span> name<span class="token punctuation">,</span> price<span class="token punctuation">,</span> onEdit<span class="token punctuation">,</span> onDelete <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"menu-item"</span> data<span class="token operator">-</span>id<span class="token operator">=</span><span class="token punctuation">{</span>id<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"menu-item-info"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"menu-item-name"</span><span class="token operator">></span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"menu-item-price"</span><span class="token operator">></span>$<span class="token punctuation">{</span>price<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"menu-item-actions"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>button className<span class="token operator">=</span><span class="token string">"edit-button"</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span>onEdit<span class="token punctuation">}</span><span class="token operator">></span>
          편집
        <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
        <span class="token operator">&lt;</span>button
          className<span class="token operator">=</span><span class="token string">"delete-button"</span>
          onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token function">deleteMenu</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">onDelete</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token operator">></span>
          삭제
        <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>위의 코드에서는 메뉴 항목 컴포넌트를 정의하며, 메뉴의 id, 이름, 가격, 편집 버튼을 클릭했을 때의 동작 방법 및 삭제 버튼이 만들어졌을 때 트리거되는 onDelete 메소드와 같은 프롭을 전달합니다. 이제 페이지의 코드를 작성하고 MenuItem 컴포넌트를 사용할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">...</span>
<span class="token doc-comment comment">/**
 * 메인 페이지 컴포넌트.
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>menuItems<span class="token punctuation">,</span> setMenuItems<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token function">useSearchParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 성공 메시지를 표시하는 상태</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>displaySuccessMessage<span class="token punctuation">,</span> setDisplaySuccessMessage<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token comment">// 'add' 또는 'update'</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 컴포넌트 마운트시 메뉴 항목 가져오기</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">fetchData</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">setMenuItems</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// URL 매개변수의 변경 사항 감지하여 성공 메시지 처리</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token operator">!</span>params<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"action"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setDisplaySuccessMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> params<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"action"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      router<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>params<span class="token punctuation">,</span> router<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 3초 후 자동으로 성공 메시지 숨기기</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>displaySuccessMessage<span class="token punctuation">.</span>show<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setDisplaySuccessMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">""</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>displaySuccessMessage<span class="token punctuation">.</span>show<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 메뉴 항목 삭제 처리</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleDelete</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setMenuItems</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">items</span><span class="token punctuation">)</span> <span class="token operator">=></span> items<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>id <span class="token operator">!==</span> id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>button className<span class="token operator">=</span><span class="token string">"add-button"</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">"/add"</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>
        추가
      <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token punctuation">{</span>displaySuccessMessage<span class="token punctuation">.</span>show <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">"success-message"</span><span class="token operator">></span>
          <span class="token punctuation">{</span>displaySuccessMessage<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">"add"</span> <span class="token operator">?</span> <span class="token string">"추가됨"</span> <span class="token operator">:</span> <span class="token string">"수정됨"</span><span class="token punctuation">}</span> 메뉴 항목<span class="token punctuation">.</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token punctuation">{</span>menuItems <span class="token operator">?</span> <span class="token punctuation">(</span>
        menuItems<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>MenuItem
            key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">}</span>
            id<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">}</span>
            name<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>name<span class="token punctuation">}</span>
            price<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>price<span class="token punctuation">}</span>
            onEdit<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/update/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">}</span>
            onDelete<span class="token operator">=</span><span class="token punctuation">{</span>handleDelete<span class="token punctuation">}</span>
          <span class="token operator">/</span><span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>p<span class="token operator">></span>로딩 중<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 코드 블록은 다소 길지만, 빠르게 무슨 일이 일어나고 있는지 설명해보겠습니다.</p>
<ul>
<li>Page는 컴포넌트의 이름입니다. Next.js는 이 컴포넌트에서 가져온 코드를 브라우저에 표시합니다.</li>
<li>다음으로, getData로부터 받는 응답을 저장할 menuItems 및 생성/삭제가 성공했음을 알리는 데 사용될 displaySuccessMessage와 같은 중요한 상태를 정의합니다. 또한 라우터와 params와 같은 객체를 가져옵니다. 삭제 로직을 구현하거나 메뉴를 만들거나 편집하기 위한 라우팅에 유용할 것입니다.</li>
<li>다음 줄에서는 getData 메소드를 호출하여 API에서 데이터를 가져오는 데 도움이 되는 세 useEffect 훅을 정의하고 있습니다. 두 번째 useEffect는 만들기 또는 업데이트가 성공한 경우 메시지를 표시하고 세 번째 useEffect는 메시지 표시 시간을 관리하는 데 사용됩니다. setTimeout 메소드를 사용하여 메시지를 3초 동안만 표시합니다.</li>
<li>마지막으로, JSX 코드를 작성하고 추가 버튼을 추가했습니다. 또한 페이지.js 파일에서 선언된 MenuItem 컴포넌트를 사용하여 메뉴 정보를 표시합니다.</li>
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
<p>GitHub 리포지토리에서 전체 파일의 코드를 찾을 수 있어요.</p>
<p>이제 작동하는 목록 페이지가 있어요. 우리는 또한 게시물을 삭제할 수 있어요. 이제 만들기 페이지를 작성해보겠어요.</p>
<h2 id="메뉴-생성-페이지-만들기" tabindex="-1"><a class="header-anchor" href="#메뉴-생성-페이지-만들기" aria-hidden="true">#</a> 메뉴 생성 페이지 만들기</h2>
<p>지난 섹션에서 모든 메뉴를 나열하는 페이지를 만들었어요. 이번 섹션에서는 메뉴를 만드는 페이지를 만들어보겠어요.</p>
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
<p>이것은 이름과 가격 필드가 있는 양식일 뿐입니다. 시작해 봅시다.</p>
<p>src/app 디렉토리에서 add라는 새 디렉토리를 생성하세요. 이 새로 생성된 디렉토리 내부에 page.js라는 파일을 만드세요. 이 파일을 사용하면 /add 경로로 이동할 때 src/app/add/page.js에 있는 코드가 표시됩니다.</p>
<p>이제 코드 작성을 시작해 봅시다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/app/add/page.js</span>

<span class="token string">"use client"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/navigation"</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Sends a POST request to create a new menu item.
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">data</span> The menu item data to be sent.
 */</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">createMenu</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"http://127.0.0.1:8000/api/menu/"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">"POST"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"Content-Type"</span><span class="token operator">:</span> <span class="token string">"application/json"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>res<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"Failed to create data"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>위의 코드에서는 부수 효과, 상태 및 라우팅을 관리하기 위해 필요한 후크를 가져옵니다. 다음 코드 블록이 더 흥미로운데, 메뉴를 생성하기 위한 POST 요청을 보내는 createMenu 메서드를 작성하고 있습니다. 이 메서드는 메뉴 객체를 생성하기 위해 필요한 데이터가 포함된 JSON 객체인 data를 매개변수로 받습니다.</p>
<p>이제 이 페이지를 위한 Page 컴포넌트 로직 작성으로 넘어갈 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/app/add/page.js</span>
<span class="token operator">...</span>
<span class="token keyword">const</span> <span class="token function-variable function">Page</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>formData<span class="token punctuation">,</span> setFormData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token string">""</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>isLoading<span class="token punctuation">,</span> setIsLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>error<span class="token punctuation">,</span> setError<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 폼 제출을 처리합니다.
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Event<span class="token punctuation">}</span></span> <span class="token parameter">event</span> 폼 제출 이벤트
   */</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onFinish</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setIsLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">createMenu</span><span class="token punctuation">(</span>formData<span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">// 성공을 나타내는 쿼리 매개변수와 함께 메인 페이지로 이동</span>
        router<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">"/?action=add"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">setError</span><span class="token punctuation">(</span><span class="token string">"오류가 발생했습니다."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setIsLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 로딩 상태를 재설정하는 정리 효과</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setIsLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>form onSubmit<span class="token operator">=</span><span class="token punctuation">{</span>onFinish<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"form-item"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>label htmlFor<span class="token operator">=</span><span class="token string">"name"</span><span class="token operator">></span>이름<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
        <span class="token operator">&lt;</span>input
          required
          name<span class="token operator">=</span><span class="token string">"name"</span>
          value<span class="token operator">=</span><span class="token punctuation">{</span>formData<span class="token punctuation">.</span>name<span class="token punctuation">}</span>
          onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span>
            <span class="token function">setFormData</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>formData<span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"form-item"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>label htmlFor<span class="token operator">=</span><span class="token string">"price"</span><span class="token operator">></span>가격<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
        <span class="token operator">&lt;</span>input
          required
          type<span class="token operator">=</span><span class="token string">"number"</span>
          name<span class="token operator">=</span><span class="token string">"price"</span>
          value<span class="token operator">=</span><span class="token punctuation">{</span>formData<span class="token punctuation">.</span>price<span class="token punctuation">}</span>
          onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span>
            <span class="token function">setFormData</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>formData<span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token punctuation">{</span>error <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">"error-message"</span><span class="token operator">></span><span class="token punctuation">{</span>error<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>button disabled<span class="token operator">=</span><span class="token punctuation">{</span>isLoading<span class="token punctuation">}</span> className<span class="token operator">=</span><span class="token string">"add-button"</span> type<span class="token operator">=</span><span class="token string">"submit"</span><span class="token operator">></span>
          제출
        <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Page<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 코드도 꽤 길지만, 거기에서 무엇이 이루어지는지 알아보겠습니다.</p>
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
<li>우리는 폼 데이터 formData를 관리하는 세 가지 상태를 정의합니다. 요청이 보류 중인 경우 로딩, 백엔드에서 받은 오류를 저장하고 프론트엔드에 표시하는 상태도 있습니다 error.</li>
<li>다음으로 사용자가 폼을 제출할 때 실행되는 onFinish 메서드가 있습니다. 이 메서드는 먼저 event.preventDefault();를 호출하여 사용자가 폼의 제출 버튼을 클릭할 때 브라우저의 기본 동작을 방지합니다. 기본 동작은 페이지를 다시로드합니다.</li>
<li>그 후에 생성 요청을 시작하므로 로딩 상태를 true로 설정합니다. 비동기 요청이기 때문에 요청이 성공하는 경우 사용자를 URL 매개변수 action=add로 리다이렉트하여 성공 메시지를 표시합니다. 오류인 경우 프론트엔드에 표시될 오류 메시지를 설정합니다.</li>
<li>그 다음으로 페이지를 떠날 때 효과를 정리하거나 컴포넌트가 언마운트될 때 효과를 해소하는 데 사용되는 useEffect가 있습니다.</li>
<li>마지막으로 JSX 코드가 있습니다. 여기서는 전통적인 HTML 태그를 사용하여 폼을 만들고 입력에 필요한 props 값을 전달하고 오류 메시지를 표시합니다.</li>
</ul>
<p><img src="@source/docs/Tech/2024-04-23-BuildingaFullStackApplicationwithDjangoDjangoRESTNextjs/img/BuildingaFullStackApplicationwithDjangoDjangoREST-Nextjs_5.png" alt="Building a Full Stack Application with Django Django REST - Next.js"></p>
<p>생성 페이지를 작성한 후 편집 페이지를 만들어 볼 수 있습니다. 생성 페이지에서 많이 변경될 것은 없지만 다음과 같은 사항을 고려해야 합니다:</p>
<ul>
<li>편집 페이지에서 id로 메뉴를 검색하여 기존 값을 사용하여 폼을 채우어 사용자가 수정할 수 있도록 합니다.</li>
<li>대부분 이게 전부입니다.</li>
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
<p>에디션 페이지를 만들어 봅시다.</p>
<h2 id="에디션-페이지-만들기" tabindex="-1"><a class="header-anchor" href="#에디션-페이지-만들기" aria-hidden="true">#</a> 에디션 페이지 만들기</h2>
<p>이전 섹션에서는 Next.js를 사용하여 간단한 양식을 만드는 방법과 fetch API를 사용하여 API에 요청을 보내는 방법을 배웠습니다. 이제 새로운 메뉴를 추가하는 작업 생성 페이지가 작동 중입니다.</p>
<p>이 섹션에서는 메뉴의 이름과 가격을 수정하기 위한 에디션 페이지를 만들겠습니다. 생성 페이지와 달라진 점은 경로 및 수정하려는 메뉴에 대한 정보가 필요하다는 점 뿐입니다.</p>
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
<p>src/app/ 디렉토리 안에 update 라는 디렉토리를 생성하세요. 이 디렉토리 안에 [menuId]라는 새 디렉토리를 만들어주세요. 이렇게 하면 Next.js에게 menuId가 선택된 아이템에 따라 변경될 수 있다는 것을 나타냅니다.</p>
<p>예를 들어, 사용자는 menuId가 1 또는 2일 때 /update/1 또는 /update/2로 리디렉션될 수 있습니다. URL에서 menuId를 검색하여 백엔드에서 메뉴에 대한 데이터를 요청하고, 우리는 폼을 가격과 이름에 대한 값으로 채울 수 있습니다.</p>
<p>src/app/update/[menuId]/ 디렉토리 안에 page.js 파일을 생성하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/app/update/[menuId]/page.js</span>

<span class="token string">"use client"</span> 

<span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/navigation"</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * ID로 메뉴 항목을 가져옵니다.
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">id</span> 가져올 메뉴 항목의 ID입니다.
 */</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getMenu</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">http://127.0.0.1:8000/api/menu/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>res<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"메뉴를 가져오는 데 실패했습니다"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * ID로 메뉴 항목을 업데이트합니다.
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">id</span> 업데이트할 메뉴 항목의 ID입니다.
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">data</span> 메뉴 항목을 위한 업데이트된 데이터입니다.
 */</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">updateMenu</span><span class="token punctuation">(</span><span class="token parameter">id<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">http://127.0.0.1:8000/api/menu/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">"PUT"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"Content-Type"</span><span class="token operator">:</span> <span class="token string">"application/json"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>res<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"메뉴 업데이트에 실패했습니다"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>위의 코드에서는 부수 효과, 상태 및 라우팅을 관리하기 위해 필요한 후크를 가져오고 있습니다. 다음 코드 블록에서는 두 가지 메서드를 정의하고 있습니다 :</p>
<ul>
<li>detail API 엔드포인트를 사용하여 API에서 특정 메뉴를 검색하는 getMenu.</li>
<li>특정 메뉴에 대한 정보를 업데이트하기 위해 PUT 요청을 보내는 updateMenu.</li>
</ul>
<p>이제 Page 컴포넌트의 코드로 넘어가 봅시다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/app/update/[menuId]/page.js</span>

<span class="token operator">...</span> 

<span class="token keyword">const</span> <span class="token function-variable function">Page</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> params <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>formData<span class="token punctuation">,</span> setFormData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token string">""</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>isLoading<span class="token punctuation">,</span> setIsLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>error<span class="token punctuation">,</span> setError<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 폼 제출을 처리합니다.
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Event<span class="token punctuation">}</span></span> <span class="token parameter">event</span> 폼 제출 이벤트.
   */</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onFinish</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setIsLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">updateMenu</span><span class="token punctuation">(</span>params<span class="token punctuation">.</span>menuId<span class="token punctuation">,</span> formData<span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        router<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">"/?action=update"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">setError</span><span class="token punctuation">(</span><span class="token string">"오류가 발생했습니다"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setIsLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 로딩 상태를 재설정하기 위한 정리 효과</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setIsLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 컴포넌트가 마운트될 때 메뉴 항목 데이터를 가져옵니다.</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">fetchData</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getMenu</span><span class="token punctuation">(</span>params<span class="token punctuation">.</span>menuId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setFormData</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> data<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> data<span class="token punctuation">.</span>price <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setError</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>params<span class="token punctuation">.</span>menuId<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>form onSubmit<span class="token operator">=</span><span class="token punctuation">{</span>onFinish<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"form-item"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>label htmlFor<span class="token operator">=</span><span class="token string">"name"</span><span class="token operator">></span>이름<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
        <span class="token operator">&lt;</span>input
          required
          name<span class="token operator">=</span><span class="token string">"name"</span>
          value<span class="token operator">=</span><span class="token punctuation">{</span>formData<span class="token punctuation">.</span>name<span class="token punctuation">}</span>
          onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setFormData</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>formData<span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"form-item"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>label htmlFor<span class="token operator">=</span><span class="token string">"price"</span><span class="token operator">></span>가격<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
        <span class="token operator">&lt;</span>input
          required
          type<span class="token operator">=</span><span class="token string">"number"</span>
          name<span class="token operator">=</span><span class="token string">"price"</span>
          value<span class="token operator">=</span><span class="token punctuation">{</span>formData<span class="token punctuation">.</span>price<span class="token punctuation">}</span>
          onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setFormData</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>formData<span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token punctuation">{</span>error <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">"error-message"</span><span class="token operator">></span><span class="token punctuation">{</span>error<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>button disabled<span class="token operator">=</span><span class="token punctuation">{</span>isLoading<span class="token punctuation">}</span> className<span class="token operator">=</span><span class="token string">"add-button"</span> type<span class="token operator">=</span><span class="token string">"submit"</span><span class="token operator">></span>
          제출
        <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Page<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>위의 코드는 메뉴를 생성하기 위한 양식과 거의 동일하지만, Page 컴포넌트에 전달되는 prop이 다릅니다.</p>
<p>Next.js 13에서 params 객체는 동적 세그먼트 값을 포함하는 prop입니다 (우리의 경우 menuId). menuId의 값으로 getMenu 메서드를 쉽게 트리거하고 params.menuId 값을 전달하여 메뉴를 업데이트하는 메서드도 params.menuId 값과 양식에서 검색한 데이터를 전달하여 업데이트 요청을 보낼 수 있습니다.</p>
<p>대단해요! Django와 통합된 완벽하게 작동하는 Next.js 13 애플리케이션이 생성되었습니다. 이 애플리케이션은 메뉴를 나열하고 메뉴 정보를 생성하고 편집하는 페이지를 표시할 수 있을 뿐만 아니라 삭제도 처리할 수 있습니다. 아래는 이 애플리케이션의 기능이 어떻게 보이는지 도식화한 데모입니다.</p>
<p><img src="@source/docs/Tech/2024-04-23-BuildingaFullStackApplicationwithDjangoDjangoRESTNextjs/img/BuildingaFullStackApplicationwithDjangoDjangoREST-Nextjs_6.png" alt="Demo"></p>
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
<h2 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h2>
<p>여기에 있습니다 — Django와 Next.js를 사용하여 풀 스택 애플리케이션을 구축하는 단계별 안내서입니다. 이 조합은 Django의 안전하고 효율적인 백엔드 능력과 Next.js의 반응형이면서 현대적인 프론트엔드 능력을 결합하여 웹 개발에 견고하고 확장 가능한 솔루션을 제공합니다.</p>
<p>이 가이드를 따라가면 Django REST API를 설정하고 Next.js에서 프론트엔드 애플리케이션을 생성하는 방법을 배웠습니다. 레스토랑 메뉴를 관리하기 위한 CRUD 애플리케이션은 이 두 기술이 매끄럽게 통합될 수 있는 실용적인 예입니다.</p>
<p>기억하세요, 여기서 여정이 끝나는 것은 아닙니다. Django와 Next.js는 다양한 기능과 가능성으로 가득 차 있습니다. 더 심층적으로 파고들고, 더 고급 기능을 실험하고, 풀 스택 개발자로서 기술을 계속 연마하길 권장합니다.</p>
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
<p>여기는이 기사에서 구축 된 애플리케이션의 코드베이스 링크입니다.</p>
<h1 id="stackademic" tabindex="-1"><a class="header-anchor" href="#stackademic" aria-hidden="true">#</a> Stackademic</h1>
<p>끝까지 읽어 주셔서 감사합니다. 떠나시기 전에:</p>
<ul>
<li>치얼 소리내고 작가를 팔로우 해주세요! 👏</li>
<li>저희의 다른 플랫폼 방문: In Plain English | CoFeed | Venture</li>
<li>우리를 팔로우하세요 X | LinkedIn | YouTube | Discord</li>
</ul>
</div></template>
