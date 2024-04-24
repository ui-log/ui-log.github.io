<template><div><p><img src="https://miro.medium.com/v2/resize:fit:1400/1*oPL9_9aI2Fj9z6_jMT3BeA.gif" alt="이미지"></p>
<h1 id="소개" tabindex="-1"><a class="header-anchor" href="#소개" aria-hidden="true">#</a> 소개:</h1>
<p>이 튜토리얼은 Django, React, Langchain 및 OpenAI의 강력한 언어 모델을 활용하는 애플리케이션을 만드는 가이드를 제공합니다. 제 주요 관심사는 대규모 언어 모델 (LLM)의 출력을 스트리밍하는 솔루션을 만드는 것입니다.</p>
<p>먼저 프로젝트 환경을 설정하고 Django 및 React, 각각 간결성과 견고함으로 유명한 고수준 Python 웹 프레임워크 및 반응성 및 사용자 경험을 향상시키는 뛰어난 성능으로 사용자 인터페이스를 구축하는 JavaScript 라이브러리 등 핵심 기술을 살펴보겠습니다. 또한, 언어 모델을 애플리케이션에 통합하는 것을 간소화하는 도구인 Langchain 및 인공지능 기반 텍스트 생성의 선두에 서 있는 OpenAI의 GPT 모델도 살펴보겠습니다.</p>
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
<p>이 튜토리얼을 통해 우리의 애플리케이션 아키텍처에 대해 자세히 살펴볼 것이며, 실시간 메시징을 위한 WebSocket 연결을 수립하고 LLM의 출력을 실시간으로 스트리밍하여 사용자들에게 반응성을 느끼게 하는 방법을 보여줄 것입니다. 이 안내서를 마치면 완전히 작동하는 채팅 애플리케이션이 준비될 것입니다.</p>
<h2 id="🚀-django를-사용한-백엔드-설정" tabindex="-1"><a class="header-anchor" href="#🚀-django를-사용한-백엔드-설정" aria-hidden="true">#</a> 🚀 Django를 사용한 백엔드 설정</h2>
<h1 id="django-설치" tabindex="-1"><a class="header-anchor" href="#django-설치" aria-hidden="true">#</a> Django 설치</h1>
<p>터미널이나 명령 프롬프트를 열고 다음을 실행하세요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pip install django
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="django-프로젝트-생성하기" tabindex="-1"><a class="header-anchor" href="#django-프로젝트-생성하기" aria-hidden="true">#</a> Django 프로젝트 생성하기</h2>
<p>원하는 프로젝트 디렉토리로 이동하고 다음을 실행하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>django<span class="token operator">-</span>admin startproject Django_React_Langchain_Stream
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
<p>프로젝트 디렉토리로 이동하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>cd Django_React_Langchain_Stream
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="가상-환경-설정" tabindex="-1"><a class="header-anchor" href="#가상-환경-설정" aria-hidden="true">#</a> 가상 환경 설정</h1>
<p>virtualenv를 설치하세요 (이미 설치하지 않았다면):</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pip install virtualenv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>프로젝트 디렉토리에서 가상 환경을 만들고 활성화하세요.</p>
<p>생성:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>virtualenv venv
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
<p>활성화하려면:</p>
<p>Mac/Linux에서:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>source venv<span class="token operator">/</span>bin<span class="token operator">/</span>activate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Windows에서:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>venv\Scripts\activate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>당신의 장고 앱 만들기</p>
<p>가상환경에 Django 설치하기:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pip install Django<span class="token operator">==</span><span class="token number">5.0</span><span class="token number">.3</span>
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
<p>Django 앱을 langchain_stream으로 만들어주세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>python manage<span class="token punctuation">.</span>py startapp langchain_stream
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>설정이 잘 되었는지 테스트해보세요.</p>
<p>Django 개발 서버를 시작하세요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>python manage<span class="token punctuation">.</span>py runserver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>웹 브라우저에서 http://127.0.0.1:8000/ 를 방문하여 Django 환영 페이지를 확인하세요.</p>
<img src="@source/docs/Tech/2024-04-23-StreamingLLMOutputwithDjangoReactandLangChain/img/StreamingLLMOutputwithDjangoReactandLangChain_1.png" />
<p>서버를 중지하려면 CONTROL-C를 누르세요.</p>
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
<h1 id="🔧-리액트를-이용한-프론트엔드-설정" tabindex="-1"><a class="header-anchor" href="#🔧-리액트를-이용한-프론트엔드-설정" aria-hidden="true">#</a> 🔧 리액트를 이용한 프론트엔드 설정</h1>
<p>Node.js와 npm이 설치되었는지 확인해주세요</p>
<p>다음과 같은 명령어를 실행해보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>node <span class="token operator">-</span>v
npm <span class="token operator">-</span>v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>설치된 경우에는 버전 번호를 볼 수 있습니다. 예를 들면:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>v20<span class="token punctuation">.</span><span class="token number">8.0</span>
<span class="token number">10.1</span><span class="token number">.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>설치되지 않았다면, 공식 Node.js 웹사이트에서 다운로드하세요.</p>
<h2 id="리액트-애플리케이션-만들기" tabindex="-1"><a class="header-anchor" href="#리액트-애플리케이션-만들기" aria-hidden="true">#</a> 리액트 애플리케이션 만들기</h2>
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
<p>React 프로젝트를 생성해보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm create vite@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>프로젝트의 이름을 frontend으로 지정하고, 프레임워크로 <code v-pre>React</code>를 선택하고, 변형으로 <code v-pre>JavaScript</code>를 선택해주세요. 그 후, 새 frontend 디렉토리로 이동해주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>cd frontend
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
<p>필요한 React 패키지를 설치해주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="프론트엔드-테스트" tabindex="-1"><a class="header-anchor" href="#프론트엔드-테스트" aria-hidden="true">#</a> 프론트엔드 테스트</h2>
<p>React 개발 서버를 시작하세요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>터미널에 표시된 URL(보통 http://localhost:5173/)을 방문하여 React 앱의 환영 페이지를 확인할 수 있습니다.</p>
<img src="@source/docs/Tech/2024-04-23-StreamingLLMOutputwithDjangoReactandLangChain/img/StreamingLLMOutputwithDjangoReactandLangChain_2.png" />
<p>서버를 중지하려면 CONTROL-C를 사용하세요.</p>
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
<p>설치 및 설정을 완료한 후에는 프로젝트 디렉토리가 다음과 같이 보여야 합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Django_React_Langchain_Stream<span class="token operator">/</span>
├── Django_React_Langchain_Stream<span class="token operator">/</span>
├── frontend<span class="token operator">/</span>
├── langchain_stream<span class="token operator">/</span>
├── venv<span class="token operator">/</span>
├── db<span class="token punctuation">.</span>sqlite3
└── manage<span class="token punctuation">.</span>py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="웹소켓을-이용하여-django와-react-연결하기" tabindex="-1"><a class="header-anchor" href="#웹소켓을-이용하여-django와-react-연결하기" aria-hidden="true">#</a> 웹소켓을 이용하여 Django와 React 연결하기</h1>
<p>이제 IDE에서 프로젝트 Django_React_Langchain_Stream을 열 수 있습니다.</p>
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
<h2 id="api-키-설정" tabindex="-1"><a class="header-anchor" href="#api-키-설정" aria-hidden="true">#</a> API 키 설정</h2>
<p>먼저 Django 프로젝트의 루트에 .env 파일을 만들어 Openai API 키를 안전하게 저장하세요.</p>
<p>다음과 같은 줄을 .env 파일에 추가하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">OPENAI_API_KEY</span><span class="token operator">=</span><span class="token keyword">this</span><span class="token operator">-</span>is<span class="token operator">-</span>a<span class="token operator">-</span>fake<span class="token operator">-</span>api<span class="token operator">-</span>key<span class="token operator">-</span>replace<span class="token operator">-</span>it
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
<h1 id="🔧-웹소켓을-위한-django-settings-py-구성" tabindex="-1"><a class="header-anchor" href="#🔧-웹소켓을-위한-django-settings-py-구성" aria-hidden="true">#</a> 🔧 웹소켓을 위한 Django settings.py 구성</h1>
<p>settings.py 파일에서 langchain_stream 및 daphne를 INSTALLED_APPS에 추가하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">'daphne'</span><span class="token punctuation">,</span>
# <span class="token operator">...</span><span class="token punctuation">,</span>
<span class="token string">'langchain_stream'</span><span class="token punctuation">,</span>
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
<p>경고: <code v-pre>daphne</code>는 INSTALLED_APPS에서 django.contrib.staticfiles보다 먼저 나열되어야 합니다.</p>
<p><img src="@source/docs/Tech/2024-04-23-StreamingLLMOutputwithDjangoReactandLangChain/img/StreamingLLMOutputwithDjangoReactandLangChain_3.png" alt="이미지"></p>
<p>WSGI 애플리케이션 라인을 ASGI 구성으로 교체하여 비동기 통신을 활성화하세요.</p>
<p>해당 라인을 제거하거나 주석 처리하세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code># <span class="token constant">WSGI_APPLICATION</span> <span class="token operator">=</span> <span class="token string">' Django_React_Langchain_Stream.wsgi.application'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>다음 ASGI 구성 라인을 추가해주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">ASGI_APPLICATION</span> <span class="token operator">=</span> <span class="token string">"Django_React_Langchain_Stream.asgi.application"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="views-py-파일을-생성해주세요" tabindex="-1"><a class="header-anchor" href="#views-py-파일을-생성해주세요" aria-hidden="true">#</a> views.py 파일을 생성해주세요</h1>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
&lt;!-- ui-log 수평형 -->
&lt;ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true">&lt;/ins>
&lt;component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
&lt;/component>

LangChain 및 관련 패키지를 LLM 통합과 웹소켓 지원을 위해 설치해보세요:

터미널에서 다음을 실행해주세요:

```js
pip install langchain==0.1.11 langchain-community==0.0.26 langchain-openai==0.0.8 channels==4.0.0 daphne==4.1.0 python-dotenv==1.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>langchain_stream/views.py 파일에서 다음 코드로 대체해주세요:</p>
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
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from channels.generic.websocket import AsyncWebsocketConsumer
import json
from dotenv import load_dotenv

load_dotenv('.env')

prompt = ChatPromptTemplate.from_messages(<span class="token punctuation">[</span>
    (<span class="token string">"system"</span><span class="token punctuation">,</span> <span class="token string">"You are a helpful assistant."</span>)<span class="token punctuation">,</span>
    (<span class="token string">"user"</span><span class="token punctuation">,</span> <span class="token string">"{input}"</span>)
<span class="token punctuation">]</span>)

llm = ChatOpenAI(model=<span class="token string">"gpt-3.5-turbo-0125"</span>)

output_parser = StrOutputParser()
# Chain
chain = prompt | llm.with_config(<span class="token punctuation">{</span><span class="token property">"run_name"</span><span class="token operator">:</span> <span class="token string">"model"</span><span class="token punctuation">}</span>) | output_parser.with_config(<span class="token punctuation">{</span><span class="token property">"run_name"</span><span class="token operator">:</span> <span class="token string">"Assistant"</span><span class="token punctuation">}</span>)


class ChatConsumer(AsyncWebsocketConsumer)<span class="token operator">:</span>

    async def connect(self)<span class="token operator">:</span>
        await self.accept()

    async def disconnect(self<span class="token punctuation">,</span> close_code)<span class="token operator">:</span>
        pass

    async def receive(self<span class="token punctuation">,</span> text_data)<span class="token operator">:</span>
        text_data_json = json.loads(text_data)
        message = text_data_json<span class="token punctuation">[</span><span class="token string">"message"</span><span class="token punctuation">]</span>

        try<span class="token operator">:</span>
            # Stream the response
            async for chunk in chain.astream_events(<span class="token punctuation">{</span>'input'<span class="token operator">:</span> message<span class="token punctuation">}</span><span class="token punctuation">,</span> version=<span class="token string">"v1"</span><span class="token punctuation">,</span> include_names=<span class="token punctuation">[</span><span class="token string">"Assistant"</span><span class="token punctuation">]</span>)<span class="token operator">:</span>
                if chunk<span class="token punctuation">[</span><span class="token string">"event"</span><span class="token punctuation">]</span> in <span class="token punctuation">[</span><span class="token string">"on_parser_start"</span><span class="token punctuation">,</span> <span class="token string">"on_parser_stream"</span><span class="token punctuation">]</span><span class="token operator">:</span>
                    await self.send(text_data=json.dumps(chunk))

        except Exception as e<span class="token operator">:</span>
            print(e)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 자습서는 LangChain을 사용하여 LLM 출력을 스트리밍하는 방법을 포함하고 있지만, 제 주요 초점은 프론트엔드와 백엔드를 웹소켓을 통해 통합하여 응용 프로그램에서 실시간 통신을 활성화하는 방법을 보여주는 데 있습니다. LangChain의 복잡성과 포괄적인 능력은이 안내서의 범위를 벗어납니다. 그러나 LangChain은 응용 프로그램에 언어 모델을 통합하는 강력한 도구이며, 더 심층적으로 파고들고 싶은 분들은 LangChain 문서의 'LangChain과 함께 스트리밍'을 방문할 것을 권장합니다.</p>
<h1 id="웹소켓-라우팅-설정" tabindex="-1"><a class="header-anchor" href="#웹소켓-라우팅-설정" aria-hidden="true">#</a> 웹소켓 라우팅 설정</h1>
<p>WebSocket 연결을 처리하는 방법을 정의하려면 langchain_stream 앱에서 routing.py와 urls.py를 생성하십시오.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
&lt;!-- ui-log 수평형 -->
&lt;ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true">&lt;/ins>
&lt;component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
&lt;/component>

위의 텍스트를 친근한 어조로 한국어로 번역해 드리겠습니다.

langchain_stream/routing.py 파일을 만들어서 다음 코드를 추가해주세요.

```js
from django.urls import re_path  
from . import views  
  
websocket_urlpatterns = [  
    re_path(r'ws/chat/$', views.ChatConsumer.as_asgi()),  
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>langchain_stream/urls.py 파일을 만들어서 다음 코드를 추가해주세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>from django<span class="token punctuation">.</span>urls <span class="token keyword">import</span> path  
from <span class="token punctuation">.</span> <span class="token keyword">import</span> views  
  
urlpatterns <span class="token operator">=</span> <span class="token punctuation">[</span>  
    <span class="token function">path</span><span class="token punctuation">(</span><span class="token string">'ws/chat/'</span><span class="token punctuation">,</span> views<span class="token punctuation">.</span>ChatConsumer<span class="token punctuation">.</span><span class="token function">as_asgi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  
<span class="token punctuation">]</span>
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
<p>다음 코드로 Django_React_Langchain_Stream/asgi.py 파일의 코드를 교체해주세요.</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token keyword">from</span> django<span class="token punctuation">.</span>core<span class="token punctuation">.</span>asgi <span class="token keyword">import</span> get_asgi_application
<span class="token keyword">from</span> channels<span class="token punctuation">.</span>routing <span class="token keyword">import</span> ProtocolTypeRouter<span class="token punctuation">,</span> URLRouter
<span class="token keyword">from</span> channels<span class="token punctuation">.</span>auth <span class="token keyword">import</span> AuthMiddlewareStack
<span class="token keyword">import</span> langchain_stream<span class="token punctuation">.</span>routing

os<span class="token punctuation">.</span>environ<span class="token punctuation">.</span>setdefault<span class="token punctuation">(</span><span class="token string">'DJANGO_SETTINGS_MODULE'</span><span class="token punctuation">,</span> <span class="token string">'Django_React_Langchain_Stream.settings'</span><span class="token punctuation">)</span>

application <span class="token operator">=</span> ProtocolTypeRouter<span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token string">"http"</span><span class="token punctuation">:</span> get_asgi_application<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token string">"websocket"</span><span class="token punctuation">:</span> AuthMiddlewareStack<span class="token punctuation">(</span>
        URLRouter<span class="token punctuation">(</span>
            langchain_stream<span class="token punctuation">.</span>routing<span class="token punctuation">.</span>websocket_urlpatterns
        <span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="react-통합" tabindex="-1"><a class="header-anchor" href="#react-통합" aria-hidden="true">#</a> React 통합</h1>
<p>다음 코드로 frontend/src/App.js 파일의 코드를 교체해주세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect<span class="token punctuation">,</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'./App.css'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">StreamLangchain</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 사용자로부터 입력을 저장하는 상태</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>input<span class="token punctuation">,</span> setInput<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 응답/메시지를 저장하는 상태</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>responses<span class="token punctuation">,</span> setResponses<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// WebSocket 연결 관리를 위한 참조</span>
    <span class="token keyword">const</span> ws <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 최신 메시지로 스크롤하기 위한 참조</span>
    <span class="token keyword">const</span> messagesEndRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 재연결 시도 횟수와 최대 재연결 시도 횟수 설정</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>reconnectAttempts<span class="token punctuation">,</span> setReconnectAttempts<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> maxReconnectAttempts <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>

    <span class="token comment">// WebSocket 연결 설정 및 이벤트 핸들러 정의하는 함수</span>
    <span class="token keyword">const</span> <span class="token function-variable function">setupWebSocket</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        ws<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebSocket</span><span class="token punctuation">(</span><span class="token string">'ws://127.0.0.1:8000/ws/chat/'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> ongoingStream <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 현재 스트림 ID 추적</span>

        ws<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function-variable function">onopen</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"WebSocket 연결됨!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">setReconnectAttempts</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 연결 성공 시 재연결 시도 횟수 초기화</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>

        ws<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> sender <span class="token operator">=</span> data<span class="token punctuation">.</span>name<span class="token punctuation">;</span>

            <span class="token comment">// WebSocket에서 다른 종류의 이벤트 처리</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>event <span class="token operator">===</span> <span class="token string">'on_parser_start'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 새로운 스트림이 시작되었을 때</span>
                ongoingStream <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> data<span class="token punctuation">.</span>run_id<span class="token punctuation">,</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">''</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
                <span class="token function">setResponses</span><span class="token punctuation">(</span><span class="token parameter">prevResponses</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token operator">...</span>prevResponses<span class="token punctuation">,</span> <span class="token punctuation">{</span> sender<span class="token punctuation">,</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token literal-property property">id</span><span class="token operator">:</span> data<span class="token punctuation">.</span>run_id <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>event <span class="token operator">===</span> <span class="token string">'on_parser_stream'</span> <span class="token operator">&amp;&amp;</span> ongoingStream <span class="token operator">&amp;&amp;</span> data<span class="token punctuation">.</span>run_id <span class="token operator">===</span> ongoingStream<span class="token punctuation">.</span>id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 스트림 중에 새로운 데이터 청크를 추가하는 경우</span>
                <span class="token function">setResponses</span><span class="token punctuation">(</span><span class="token parameter">prevResponses</span> <span class="token operator">=></span> prevResponses<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">msg</span> <span class="token operator">=></span>
                    msg<span class="token punctuation">.</span>id <span class="token operator">===</span> data<span class="token punctuation">.</span>run_id <span class="token operator">?</span> <span class="token punctuation">{</span> <span class="token operator">...</span>msg<span class="token punctuation">,</span> <span class="token literal-property property">message</span><span class="token operator">:</span> msg<span class="token punctuation">.</span>message <span class="token operator">+</span> data<span class="token punctuation">.</span>data<span class="token punctuation">.</span>chunk <span class="token punctuation">}</span> <span class="token operator">:</span> msg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>

        ws<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"WebSocket 오류 발생:"</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>

        ws<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function-variable function">onclose</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">WebSocket이 닫혔습니다. 코드: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>event<span class="token punctuation">.</span>code<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, 이유: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>event<span class="token punctuation">.</span>reason<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">handleReconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// 지수 백오프를 이용한 재연결 시도 관리하는 함수</span>
    <span class="token keyword">const</span> <span class="token function-variable function">handleReconnect</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>reconnectAttempts <span class="token operator">&lt;</span> maxReconnectAttempts<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> timeout <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> reconnectAttempts<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">;</span> <span class="token comment">// 지수 백오프</span>
            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                <span class="token function">setupWebSocket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 재연결 시도</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"최대 재연결 시도 횟수에 도달하여 더 이상 재연결 시도하지 않음."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// WebSocket 연결 설정 및 정리하는 효과 훅</span>
    <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">setupWebSocket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 컴포넌트 마운트 시 WebSocket 설정</span>

        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>ws<span class="token punctuation">.</span>current<span class="token punctuation">.</span>readyState <span class="token operator">===</span> WebSocket<span class="token punctuation">.</span><span class="token constant">OPEN</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                ws<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 컴포넌트 언마운트 시 WebSocket 닫기</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 최신 메시지로 자동 스크롤하는 효과 훅</span>
    <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        messagesEndRef<span class="token punctuation">.</span>current<span class="token operator">?.</span><span class="token function">scrollIntoView</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">behavior</span><span class="token operator">:</span> <span class="token string">'smooth'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>responses<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 각 메시지를 렌더링하는 함수</span>
    <span class="token keyword">const</span> <span class="token function-variable function">renderMessage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">response<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div key<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span> className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">message </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>response<span class="token punctuation">.</span>sender<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>strong<span class="token operator">></span><span class="token punctuation">{</span>response<span class="token punctuation">.</span>sender<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>strong<span class="token operator">></span> <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span>response<span class="token punctuation">.</span>message<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 입력 변경 핸들러</span>
    <span class="token keyword">const</span> <span class="token function-variable function">handleInputChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">setInput</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// 폼 제출 핸들러</span>
    <span class="token keyword">const</span> <span class="token function-variable function">handleSubmit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> userMessage <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">sender</span><span class="token operator">:</span> <span class="token string">"You"</span><span class="token punctuation">,</span> <span class="token literal-property property">message</span><span class="token operator">:</span> input <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token function">setResponses</span><span class="token punctuation">(</span><span class="token parameter">prevResponses</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token operator">...</span>prevResponses<span class="token punctuation">,</span> userMessage<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ws<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> input <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// WebSocket을 통해 메시지 전송</span>
        <span class="token function">setInput</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 입력 필드 지우기</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"chat-container"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"messages-container"</span><span class="token operator">></span>
                <span class="token punctuation">{</span>responses<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">renderMessage</span><span class="token punctuation">(</span>response<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
                <span class="token operator">&lt;</span>div ref<span class="token operator">=</span><span class="token punctuation">{</span>messagesEndRef<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token comment">/* 화면에 보이지 않는 요소로 최신 메시지로 스크롤하기 도와줌 */</span><span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span>form onSubmit<span class="token operator">=</span><span class="token punctuation">{</span>handleSubmit<span class="token punctuation">}</span> className<span class="token operator">=</span><span class="token string">"input-form"</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>input
                    type<span class="token operator">=</span><span class="token string">"text"</span>
                    value<span class="token operator">=</span><span class="token punctuation">{</span>input<span class="token punctuation">}</span>
                    onChange<span class="token operator">=</span><span class="token punctuation">{</span>handleInputChange<span class="token punctuation">}</span>
                    placeholder<span class="token operator">=</span><span class="token string">"여기에 메시지를 입력하세요..."</span>
                <span class="token operator">/</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"submit"</span><span class="token operator">></span>보내기<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> StreamLangchain<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="css-스타일-추가" tabindex="-1"><a class="header-anchor" href="#css-스타일-추가" aria-hidden="true">#</a> CSS 스타일 추가</h1>
<p>frontend/src/App.css에 다음 코드를 복사하여 붙여넣기하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">:</span>root <span class="token punctuation">{</span>
    <span class="token operator">--</span>text<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span><span class="token number">236</span><span class="token punctuation">,</span> <span class="token number">236</span><span class="token punctuation">,</span> <span class="token number">236</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token operator">--</span>background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span><span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token operator">--</span>input<span class="token operator">-</span>padding<span class="token operator">:</span> 10px<span class="token punctuation">;</span>
    <span class="token operator">--</span>button<span class="token operator">-</span>padding<span class="token operator">:</span> 10px 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

body <span class="token punctuation">{</span>
    <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    font<span class="token operator">-</span>family<span class="token operator">:</span> <span class="token string">"Source Sans Pro"</span><span class="token punctuation">,</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
    font<span class="token operator">-</span>weight<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">;</span>
    line<span class="token operator">-</span>height<span class="token operator">:</span> <span class="token number">1.6</span><span class="token punctuation">;</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>text<span class="token operator">-</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>background<span class="token operator">-</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
    text<span class="token operator">-</span>size<span class="token operator">-</span>adjust<span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token operator">-</span>webkit<span class="token operator">-</span>tap<span class="token operator">-</span>highlight<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token operator">-</span>webkit<span class="token operator">-</span>font<span class="token operator">-</span>smoothing<span class="token operator">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>input<span class="token operator">-</span>form <span class="token punctuation">{</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> fixed<span class="token punctuation">;</span>
    <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 10px <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
    justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
    align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
    box<span class="token operator">-</span>shadow<span class="token operator">:</span> <span class="token number">0</span> <span class="token operator">-</span>2px 5px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

input<span class="token punctuation">[</span>type<span class="token operator">=</span><span class="token string">"text"</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">70</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>input<span class="token operator">-</span>padding<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

button <span class="token punctuation">{</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>button<span class="token operator">-</span>padding<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>chat<span class="token operator">-</span>container <span class="token punctuation">{</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
    flex<span class="token operator">-</span>direction<span class="token operator">:</span> column<span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 100vh<span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 6rem 5rem 10rem<span class="token punctuation">;</span>
    box<span class="token operator">-</span>sizing<span class="token operator">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>messages<span class="token operator">-</span>container <span class="token punctuation">{</span>
    overflow<span class="token operator">-</span>y<span class="token operator">:</span> auto<span class="token punctuation">;</span>
    max<span class="token operator">-</span>height<span class="token operator">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100vh <span class="token operator">-</span> <span class="token number">3</span><span class="token operator">%</span> <span class="token operator">-</span> 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
    flex<span class="token operator">-</span>direction<span class="token operator">:</span> column<span class="token punctuation">;</span>
    align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
    <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token literal-property property">bottom</span><span class="token operator">:</span> 100px<span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span> 5rem<span class="token punctuation">;</span>
    box<span class="token operator">-</span>sizing<span class="token operator">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>message <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">60</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
    flex<span class="token operator">-</span>direction<span class="token operator">:</span> column<span class="token punctuation">;</span>
    <span class="token literal-property property">gap</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>5rem<span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 1rem<span class="token punctuation">;</span>
    border<span class="token operator">-</span>radius<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>5rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>message strong <span class="token punctuation">{</span>
    margin<span class="token operator">-</span>bottom<span class="token operator">:</span> 4px<span class="token punctuation">;</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>text<span class="token operator">-</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>message p <span class="token punctuation">{</span>
    <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="모두-완료되었습니다-애플리케이션을-실행하려면-django-서버와-react-개발-서버를-시작하세요" tabindex="-1"><a class="header-anchor" href="#모두-완료되었습니다-애플리케이션을-실행하려면-django-서버와-react-개발-서버를-시작하세요" aria-hidden="true">#</a> 모두 완료되었습니다! 애플리케이션을 실행하려면 Django 서버와 React 개발 서버를 시작하세요:</h2>
<p>2개의 별도 터미널에서 루트 디렉토리에 들어가서 Django 프로젝트를 실행하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>python manage<span class="token punctuation">.</span>py runserver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>그리고</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>cd frontend
npm run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>터미널에 표시된 URL(보통 http://localhost:5173/)을 방문하여 앱을 확인해보세요.</p>
</div></template>
