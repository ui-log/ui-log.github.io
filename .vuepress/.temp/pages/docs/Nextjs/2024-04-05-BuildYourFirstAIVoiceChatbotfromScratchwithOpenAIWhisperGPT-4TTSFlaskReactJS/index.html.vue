<template><div><p><img src="@source/docs/Nextjs/2024-04-05-BuildYourFirstAIVoiceChatbotfromScratchwithOpenAIWhisperGPT-4TTSFlaskReactJS/img/BuildYourFirstAIVoiceChatbotfromScratchwithOpenAIWhisperGPT-4TTSFlask-ReactJS_0.png" alt="AI Voice Chatbots"></p>
<p>나는 AI 음성 챗봇 붐을 이용하려고 해.</p>
<p>이유는 많아:</p>
<ul>
<li>말하기가 타이핑보다 쉬워.</li>
<li>듣기가 읽기보다 쉬워.</li>
<li>사람들이 타이핑 대신 말하기로 전환 중.</li>
<li>모바일 기기에서 타이핑하는 것은 시간이 많이 걸려.</li>
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
<p>스마트폰의 경우, 음성 비서가 기본 선택 사항이 될 것입니다!</p>
<p>그래서 나는 나의 첫 번째 풀 스택 애플리케이션을 순전히 음성으로 사용하기로 결정했어요 (리포 및 데모 확인하세요). 이를 구축하기 위해 OpenAI 모델 패키지를 선택했어요:</p>
<ul>
<li>Whisper (음성에서 텍스트로). 내 음성을 텍스트로 전사하는 데 사용됩니다.</li>
<li>GPT-4 또는 GPT-3.5 (대형 언어 모델). Whisper의 텍스트에 대한 응답을 생성합니다.</li>
<li>TTS (텍스트에서 음성으로). GPT-4의 응답을 mp3와 같은 오디오로 합성합니다.</li>
</ul>
<p>그리고 내 앱이 현재 작동 중인데, 지금 당신에게 같은 작업을 어떻게 할 수 있는지 가르치러 여기 있어요. 우리는 다음 기술을 사용할 거에요:</p>
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
<li>백엔드 부분에는 Flask를 사용합니다.</li>
<li>프론트엔드 부분에는 ReactJS를 사용합니다.</li>
<li>양방향 통신을 위해 WebSocket을 사용합니다.</li>
</ul>
<p>그래서 ReactJS와 Flask를 사용하여 견고한 풀 스택 애플리케이션을 구축하는 방법을 배우게 될 거에요 (Streamlit 이나 Gradio만이 아니라)!</p>
<p>참고: 이 기술들에 익숙하지 않다면 걱정하지 마세요. 앱을 만들기 위해 필요한 모든 것을 제공해 드릴 거에요.</p>
<p>준비됐나요?</p>
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
<p>코드로 빠져들어볼까요!</p>
<h1 id="요구-사항" tabindex="-1"><a class="header-anchor" href="#요구-사항" aria-hidden="true">#</a> 요구 사항.</h1>
<p>OpenAI API를 사용하려면 두 가지가 필요해요: OpenAI API 키와 openai를 설치해야 해요. 아래에 설명할게요.</p>
<h2 id="openai-api-키-생성-및-env-파일에-저장하기" tabindex="-1"><a class="header-anchor" href="#openai-api-키-생성-및-env-파일에-저장하기" aria-hidden="true">#</a> OpenAI API 키 생성 및 .env 파일에 저장하기.</h2>
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
<p>오픈에이아이의 API 키 페이지로 이동하여 새 API 키를 생성하세요.</p>
<p>먼저, &quot;+ 새 비밀 키 생성&quot;을 클릭하세요.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-BuildYourFirstAIVoiceChatbotfromScratchwithOpenAIWhisperGPT-4TTSFlaskReactJS/img/BuildYourFirstAIVoiceChatbotfromScratchwithOpenAIWhisperGPT-4TTSFlask-ReactJS_1.png" alt="이미지"></p>
<p>그런 다음, 이름을 지정하고 &quot;비밀 키 생성&quot;을 누르세요.</p>
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
<p><img src="@source/docs/Nextjs/2024-04-05-BuildYourFirstAIVoiceChatbotfromScratchwithOpenAIWhisperGPT-4TTSFlaskReactJS/img/BuildYourFirstAIVoiceChatbotfromScratchwithOpenAIWhisperGPT-4TTSFlask-ReactJS_2.png" alt="BuildYourFirstAIVoiceChatbotfromScratchwithOpenAIWhisperGPT-4TTSFlask-ReactJS_2.png"></p>
<p>그런 다음 생성된 키를 복사하여 곧 만들 .env 파일에 붙여넣으세요.</p>
<p>.env 파일은 환경 변수를 관리하는 간단하고 효과적인 방법입니다.</p>
<p>프로젝트 디렉토리에 .env 파일을 생성하고 API 키를 넣으세요. 다음과 같이 보이게 됩니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">OPENAI_API_KEY</span><span class="token operator">=</span>sk<span class="token operator">-</span><span class="token number">11111111111111111111111</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>우리는 이 키를 사용하여 OpenAI의 API에 인증합니다.</p>
<h2 id="python-라이브러리-설치하기" tabindex="-1"><a class="header-anchor" href="#python-라이브러리-설치하기" aria-hidden="true">#</a> Python 라이브러리 설치하기.</h2>
<p>백엔드 애플리케이션을 실행하려면 여러 Python 라이브러리가 필요합니다. 콘솔에서 다음 스크립트를 실행하여 설치할 수 있습니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pip install Flask flask<span class="token operator">-</span>cors flask<span class="token operator">-</span>socketio python<span class="token operator">-</span>dotenv openai
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="플라스크-flask-로-백엔드-back-end-개발하기" tabindex="-1"><a class="header-anchor" href="#플라스크-flask-로-백엔드-back-end-개발하기" aria-hidden="true">#</a> <strong>플라스크(Flask)로 백엔드(back-end) 개발하기</strong></h1>
<h2 id="단계-1-플라스크-flask-앱-설정하기" tabindex="-1"><a class="header-anchor" href="#단계-1-플라스크-flask-앱-설정하기" aria-hidden="true">#</a> <strong>단계 1: 플라스크(Flask) 앱 설정하기</strong></h2>
<p>먼저 플라스크(Flask) 애플리케이션을 설정해 보세요.</p>
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
<p>앱을 초기화하고 세션용 비밀 키를 설정하고 Cross-Origin Resource Sharing (CORS)를 활성화하여 프론트 엔드가 백 엔드와 통신할 수 있도록합니다.</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask
<span class="token keyword">from</span> flask_cors <span class="token keyword">import</span> CORS
<span class="token keyword">from</span> flask_socketio <span class="token keyword">import</span> SocketIO

app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>
CORS<span class="token punctuation">(</span>app<span class="token punctuation">)</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">[</span><span class="token string">"SECRET_KEY"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"secret!"</span>
socketio <span class="token operator">=</span> SocketIO<span class="token punctuation">(</span>app<span class="token punctuation">,</span> cors_allowed_origins<span class="token operator">=</span><span class="token string">"*"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>다음은 단계별 설명입니다:</p>
<ul>
<li>앱 = Flask(<strong>name</strong>)은 앱을 초기화합니다.</li>
<li>app.config[&quot;SECRET_KEY”]은 세션용 비밀 키를 설정합니다.</li>
<li>CORS(app)은 Cross-Origin Resource Sharing (CORS)를 활성화합니다. 이를 통해 프론트 엔드가 백 엔드와 통신할 수 있습니다.</li>
<li>socketio = SocketIO(app, cors_allowed_origins=&quot;*&quot;)은 지속적이고 양방향 통신을 위한 WebSocket을 사용합니다.</li>
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
<p>자, 이제 OpenAI 모델을 사용할 시간입니다.</p>
<h2 id="단계-2-openai-api-통합하기" tabindex="-1"><a class="header-anchor" href="#단계-2-openai-api-통합하기" aria-hidden="true">#</a> 단계 2: OpenAI API 통합하기</h2>
<p>이미 openai를 설치했으므로 OpenAI API를 사용할 준비가 되었습니다.</p>
<p>OpenAI 클라이언트를 초기화해 봅시다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>openai 모델을 사용하기 시작할 준비가 끝났어요<span class="token punctuation">.</span>
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
<p>이전에 말씀드렸던 대로, 3가지 모델을 사용할 것입니다:</p>
<ul>
<li>속삭임.</li>
<li>GPT-4.</li>
<li>TTS.</li>
</ul>
<p>첫 번째 모델로 이동해 봅시다.</p>
<h2 id="단계-3-오디오-데이터-및-전사-처리" tabindex="-1"><a class="header-anchor" href="#단계-3-오디오-데이터-및-전사-처리" aria-hidden="true">#</a> 단계 3: 오디오 데이터 및 전사 처리.</h2>
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
<p>우리는 수신된 오디오 데이터를 처리하는 엔드포인트가 필요합니다.</p>
<p>다음은 해당 코드 스니펫입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>from flask_socketio <span class="token keyword">import</span> emit
from io <span class="token keyword">import</span> BytesIO

@socketio<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"audio_data"</span><span class="token punctuation">)</span>
def <span class="token function">handle_audio</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token operator">:</span>
    <span class="token keyword">try</span><span class="token operator">:</span>
        audio_bytes_io <span class="token operator">=</span> <span class="token function">BytesIO</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
        file_tuple <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">"audio.webm"</span><span class="token punctuation">,</span> audio_bytes_io<span class="token punctuation">,</span> <span class="token string">"audio/webm"</span><span class="token punctuation">)</span>
        transcription <span class="token operator">=</span> client<span class="token punctuation">.</span>audio<span class="token punctuation">.</span>transcriptions<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>model<span class="token operator">=</span><span class="token string">"whisper-1"</span><span class="token punctuation">,</span> file<span class="token operator">=</span>file_tuple<span class="token punctuation">)</span>
        <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">"transcription"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string-property property">"text"</span><span class="token operator">:</span> transcription<span class="token punctuation">.</span>text<span class="token punctuation">}</span><span class="token punctuation">)</span>
        # <span class="token function">전사</span><span class="token punctuation">(</span>transcription<span class="token punctuation">)</span>를 처리하여 응답을 생성하고 응답을 합성합니다
    except Exception <span class="token keyword">as</span> <span class="token literal-property property">e</span><span class="token operator">:</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"An error occurred: "</span><span class="token punctuation">,</span> <span class="token function">str</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위 코드에 관한 내용:</p>
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
<li>오디오 블롭을 받아옵니다 (React 부분에서 생성할 것입니다),</li>
<li>OpenAI API가 처리할 수 있는 형식으로 변환합니다,</li>
<li>그리고 전사를 위해 Whisper 모델을 사용합니다.</li>
</ul>
<h2 id="단계-4-텍스트-응답-생성-및-발신" tabindex="-1"><a class="header-anchor" href="#단계-4-텍스트-응답-생성-및-발신" aria-hidden="true">#</a> 단계 4: 텍스트 응답 생성 및 발신</h2>
<p>이 시점에서, 우리는 prompt 변수에 전사된 텍스트가 있습니다. 이를 다음과 같이 우리의 GPT-4 모델에 전달하고 싶습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>def <span class="token function">get_response</span><span class="token punctuation">(</span>prompt<span class="token punctuation">)</span><span class="token operator">:</span>
    completion <span class="token operator">=</span> client<span class="token punctuation">.</span>chat<span class="token punctuation">.</span>completions<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>
        model<span class="token operator">=</span><span class="token string">"gpt-4-turbo"</span><span class="token punctuation">,</span>
        messages<span class="token operator">=</span><span class="token punctuation">[</span>
            <span class="token punctuation">{</span><span class="token string-property property">"role"</span><span class="token operator">:</span> <span class="token string">"system"</span><span class="token punctuation">,</span> <span class="token string-property property">"content"</span><span class="token operator">:</span> <span class="token string">"당신은 도움이 되는 어시스턴트입니다. 매우 간결하게 해주세요."</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span><span class="token string-property property">"role"</span><span class="token operator">:</span> <span class="token string">"user"</span><span class="token punctuation">,</span> <span class="token string-property property">"content"</span><span class="token operator">:</span> prompt<span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    response <span class="token operator">=</span> completion<span class="token punctuation">.</span>choices<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>message<span class="token punctuation">.</span>content
    <span class="token keyword">return</span> response
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
<p>오픈에이아이 API를 사용할 때 표준적인 호출 방법입니다.</p>
<ul>
<li>저희는 Large Language Model을 호출하기 위해 client.chat.completions.create()를 사용합니다.</li>
<li>model=&quot;gpt-4-turbo&quot;으로 모델을 지정합니다. 비용 절감과 더 빠른 응답을 위해 &quot;gpt-3.5-turbo&quot;로 변경해도 됩니다.</li>
<li>&quot;role&quot;: &quot;system&quot;, &quot;content&quot;: &quot;도움이 되는 어시스턴트이다. 간결하게 해주세요&quot;로 시스템 역할을 초기화합니다.</li>
<li>&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: prompt를 통해 모델에 쿼리를 전달합니다.</li>
<li>completion.choices[0].message.content에서 응답을 받습니다.</li>
</ul>
<h2 id="step-5-음성-합성-및-서비스" tabindex="-1"><a class="header-anchor" href="#step-5-음성-합성-및-서비스" aria-hidden="true">#</a> Step 5: 음성 합성 및 서비스</h2>
<p>다음 단계는 텍스트 응답에서 음성을 합성하고 음성 파일로 서비스하는 것입니다. 이를 위해 audio.speech.create 메서드를 사용하고 출력을 파일로 저장하여 프론트 엔드에서 액세스할 수 있도록 합니다.</p>
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
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">"/audio/&lt;filename>"</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">serve_audio</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> send_from_directory<span class="token punctuation">(</span><span class="token string">"static/audio"</span><span class="token punctuation">,</span> filename<span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">synthesize_audio</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> audio_filename<span class="token punctuation">)</span><span class="token punctuation">:</span>
    audio <span class="token operator">=</span> client<span class="token punctuation">.</span>audio<span class="token punctuation">.</span>speech<span class="token punctuation">.</span>create<span class="token punctuation">(</span>
        model<span class="token operator">=</span><span class="token string">"tts-1"</span><span class="token punctuation">,</span>
        voice<span class="token operator">=</span><span class="token string">"alloy"</span><span class="token punctuation">,</span>
        <span class="token builtin">input</span><span class="token operator">=</span>text<span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    audio_url <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token string">"static"</span><span class="token punctuation">,</span> <span class="token string">"audio"</span><span class="token punctuation">,</span> audio_filename<span class="token punctuation">)</span>
    audio<span class="token punctuation">.</span>stream_to_file<span class="token punctuation">(</span>audio_url<span class="token punctuation">)</span>
    <span class="token keyword">return</span> audio_url
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="reactjs로-프론트엔드-개발" tabindex="-1"><a class="header-anchor" href="#reactjs로-프론트엔드-개발" aria-hidden="true">#</a> ReactJS로 프론트엔드 개발.</h1>
<p>중요 노트: React가 어떻게 작동하는지에 대해 자세히 다루지 않겠습니다. 그렇지 않으면 이 기사는 4배 더 길어질 것입니다. 그러나 ReactJS에 대해 더 알고 싶다면 댓글에서 알려주세요!</p>
<h2 id="단계-0-react-앱-초기화하기" tabindex="-1"><a class="header-anchor" href="#단계-0-react-앱-초기화하기" aria-hidden="true">#</a> 단계 0: React 앱 초기화하기.</h2>
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
<p>이 글을 조금 짧게 유지하려면, 첫 번째 React 앱을 실행하는 필수 단계를 안내해 드리겠습니다.</p>
<p>그런 다음 다음과 같이 몇 가지 패키지를 설치해야 합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install @emotion<span class="token operator">/</span>react @emotion<span class="token operator">/</span>styled @mui<span class="token operator">/</span>icons<span class="token operator">-</span>material @mui<span class="token operator">/</span>material react<span class="token operator">-</span>audio<span class="token operator">-</span>voice<span class="token operator">-</span>recorder socket<span class="token punctuation">.</span>io socket<span class="token punctuation">.</span>io<span class="token operator">-</span>client
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="단계-1-react-앱-설정하기" tabindex="-1"><a class="header-anchor" href="#단계-1-react-앱-설정하기" aria-hidden="true">#</a> 단계 1: React 앱 설정하기</h2>
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
<p>MaterialUI에서 필요한 React 컴포넌트를 가져와 시작하겠습니다. MaterialUI는 수백 가지의 미리 만들어진 그래픽 요소를 제공합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useAudioRecorder <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-audio-voice-recorder'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> IconButton <span class="token keyword">from</span> <span class="token string">'@mui/material/IconButton'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> MicIcon <span class="token keyword">from</span> <span class="token string">'@mui/icons-material/Mic'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> StopIcon <span class="token keyword">from</span> <span class="token string">'@mui/icons-material/Stop'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>우리는 이러한 요소들을 사용하여:</p>
<ul>
<li>오디오 녹음을 위한 UI를 처리합니다.</li>
<li>시작/중지 녹음 버튼을 표시합니다.</li>
<li>합성된 응답을 재생합니다.</li>
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
<h2 id="단계-2-오디오-녹음-및-상태-처리" tabindex="-1"><a class="header-anchor" href="#단계-2-오디오-녹음-및-상태-처리" aria-hidden="true">#</a> 단계 2: 오디오 녹음 및 상태 처리</h2>
<p>녹음 시작 및 중지 기능을 구현하고, 녹음 상태를 관리하기 위해 useAudioRecorder 훅을 사용하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> startRecording<span class="token punctuation">,</span> stopRecording<span class="token punctuation">,</span> recordingBlob<span class="token punctuation">,</span> isRecording <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useAudioRecorder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>audioUrl<span class="token punctuation">,</span> setAudioUrl<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 여기에 추가 기능과 효과를 추가하세요</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>또한, 합성된 GPT-4 응답의 오디오가 있는 URL을 저장하는 변수를 생성합니다.</p>
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
<h2 id="단계-3-오디오-데이터-송수신하기" tabindex="-1"><a class="header-anchor" href="#단계-3-오디오-데이터-송수신하기" aria-hidden="true">#</a> 단계 3: 오디오 데이터 송수신하기.</h2>
<p>오디오 녹음을 완료한 후에, 오디오 블롭을 백엔드로 전송합니다.</p>
<p>통신 채널을 항상 열어두기 위해 HTTP 요청 대신 WebSocket을 사용할 것입니다.</p>
<p>준비할 것들이 많이 필요합니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> io <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"socket.io-client"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> host <span class="token operator">=</span> <span class="token string">'http://localhost:5000/'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> socket <span class="token operator">=</span> <span class="token function">io</span><span class="token punctuation">(</span>host<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 이전 단계에서 상태를 사용합니다.</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    socket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'connect'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'WebSocket 서버에 연결되었습니다.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    socket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'transcription'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'전사:'</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 선택적으로 전사를 보여주는 UI를 업데이트합니다.</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    socket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'response'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'응답 텍스트:'</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 선택적으로 응답 텍스트를 보여주는 UI를 업데이트합니다.</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    socket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'audio_url'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">setAudioUrl</span><span class="token punctuation">(</span>host <span class="token operator">+</span> data<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">setAudioKey</span><span class="token punctuation">(</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 오디오 플레이어를 강제로 새로고침하기 위해 키를 업데이트합니다.</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'받은 오디오 URL:'</span><span class="token punctuation">,</span> host <span class="token operator">+</span> data<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// 컴포넌트가 해제될 때 소켓 연결을 정리합니다.</span>
      socket<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">'connect'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      socket<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">'transcription'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      socket<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">'response'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      socket<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">'audio_url'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 새 녹음을 시작할 때 audioUrl을 재설정합니다.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isRecording<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setAudioUrl</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>isRecording<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 새로운 recordingBlob이 사용 가능할 때 서버로 전송합니다.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>recordingBlob<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'오디오 blob을 서버로 전송 중'</span><span class="token punctuation">,</span> recordingBlob<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      reader<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> arrayBuffer <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>result<span class="token punctuation">;</span>
        socket<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'audio_data'</span><span class="token punctuation">,</span> arrayBuffer<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      reader<span class="token punctuation">.</span><span class="token function">readAsArrayBuffer</span><span class="token punctuation">(</span>recordingBlob<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>recordingBlob<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 WebSocket 리스너들을 설정하여 다음을 받을 수 있도록했습니다:</p>
<ul>
<li>전사,</li>
<li>텍스트 응답,</li>
<li>합성된 오디오의 URL.</li>
</ul>
<h2 id="단계-4-ui-표시하기" tabindex="-1"><a class="header-anchor" href="#단계-4-ui-표시하기" aria-hidden="true">#</a> 단계 4: UI 표시하기</h2>
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
<p>마지막으로, 애플리케이션의 UI를 만들어보겠습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">return</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>div
    style<span class="token operator">=</span><span class="token punctuation">{</span>
      <span class="token literal-property property">display</span><span class="token operator">:</span> <span class="token string">'flex'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">justifyContent</span><span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">alignItems</span><span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">'100vh'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token operator">></span>
    <span class="token operator">&lt;</span>IconButton
      sx<span class="token operator">=</span><span class="token punctuation">{</span> <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token string">'20px'</span><span class="token punctuation">,</span> <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">'40px'</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">'auto'</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'auto'</span> <span class="token punctuation">}</span>
      color<span class="token operator">=</span><span class="token string">"primary"</span>
      onClick<span class="token operator">=</span><span class="token punctuation">{</span>isRecording <span class="token operator">?</span> handleStopRecording <span class="token operator">:</span> startRecording<span class="token punctuation">}</span>
      aria<span class="token operator">-</span>label<span class="token operator">=</span><span class="token punctuation">{</span>isRecording <span class="token operator">?</span> <span class="token string">"녹음 중지"</span> <span class="token operator">:</span> <span class="token string">"녹음 시작"</span><span class="token punctuation">}</span>
    <span class="token operator">></span>
      <span class="token punctuation">{</span>isRecording <span class="token operator">?</span> <span class="token operator">&lt;</span>StopIcon sx<span class="token operator">=</span><span class="token punctuation">{</span> <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">'15rem'</span> <span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span> <span class="token operator">:</span> <span class="token operator">&lt;</span>MicIcon sx<span class="token operator">=</span><span class="token punctuation">{</span> <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">'15rem'</span> <span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>IconButton<span class="token operator">></span>
    <span class="token punctuation">{</span>audioUrl <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>audio key<span class="token operator">=</span><span class="token punctuation">{</span>audioKey<span class="token punctuation">}</span> src<span class="token operator">=</span><span class="token punctuation">{</span>audioUrl<span class="token punctuation">}</span> controls autoPlay <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>UI를 가능한 간단하게 구성했어요. 그래서 이 UI에는 다음과 같은 요소만 있어요:</p>
<ul>
<li>녹음을 시작하고 중지하는 버튼</li>
<li>합성된 응답을 재생하는 오디오 플레이어</li>
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
<p>그게 다야.</p>
<p>준비 끝났어!</p>
<h2 id="앱-실행하기" tabindex="-1"><a class="header-anchor" href="#앱-실행하기" aria-hidden="true">#</a> 앱 실행하기.</h2>
<p>Flask 백엔드 시작하기:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>python app<span class="token punctuation">.</span>py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이 명령을 실행하면 http://localhost:5000에서 애플리케이션이 실행됩니다.</p>
<p>React 프런트엔드를 시작합니다 (프런트엔드 디렉토리에 있는지 확인하세요):</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm start
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
<p>http://localhost:3000에 접속하면 가장 간단한 앱이 표시됩니다:</p>
<p><img src="@source/docs/Nextjs/2024-04-05-BuildYourFirstAIVoiceChatbotfromScratchwithOpenAIWhisperGPT-4TTSFlaskReactJS/img/BuildYourFirstAIVoiceChatbotfromScratchwithOpenAIWhisperGPT-4TTSFlask-ReactJS_3.png" alt="앱 이미지"></p>
<p>그러나 쿼리를 녹음한 후에는 음성으로 답변이 표시됩니다:</p>
<p><img src="@source/docs/Nextjs/2024-04-05-BuildYourFirstAIVoiceChatbotfromScratchwithOpenAIWhisperGPT-4TTSFlaskReactJS/img/BuildYourFirstAIVoiceChatbotfromScratchwithOpenAIWhisperGPT-4TTSFlask-ReactJS_4.png" alt="답변 이미지"></p>
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
<h1 id="다음은-무엇인가요" tabindex="-1"><a class="header-anchor" href="#다음은-무엇인가요" aria-hidden="true">#</a> 다음은 무엇인가요?</h1>
<p>이 앱은 완전 기능을 갖추고 있지만 아직은 그다지 실용적이지는 않아요!</p>
<p>하지만 다른 AI 솔루션들과 통합할 거예요:</p>
<ul>
<li>맞춤형 AI 챗봇</li>
<li>AI 기술을 활용한 웹 앱</li>
<li>다양한 RAG 애플리케이션들!</li>
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
<p>그것을 스마트폰에서 사용할 때 매우 강력해질 거예요!</p>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>축하해요!</p>
<p>탄탄한 AI 풀스택 애플리케이션을 만드는 방법을 배웠어요!</p>
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
<p>리액트 부분이 조금 복잡할 수 있어요 (특히 자바스크립트를 배운 적이 없다면).</p>
<p>내 이름은 Kris이고, AI 엔지니어 &amp; 컨설턴트입니다. 저는 중소기업이 AI를 활용하는 것을 도와드려요.</p>
<p>그래서 비즈니스에 AI를 통합하고 싶다면 (하지만 시작하는 방법을 모른다면), LinkedIn에서 DM 보내주세요.</p>
<p>유용한 자료:</p>
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
<li>어플리케이션을 포함한 GitHub 리포지토리.</li>
</ul>
</div></template>
