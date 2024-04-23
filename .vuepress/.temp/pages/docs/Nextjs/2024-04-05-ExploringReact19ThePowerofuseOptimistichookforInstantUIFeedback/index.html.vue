<template><div><p>React 19에서는 많은 훌륭한 기능과 기능이 소개되었는데 그 중 useOptimistic 후크가 눈에 띕니다.</p>
<p>useOptimistic 후크는 비동기 작업 중 UI 상태를 관리하는 원활한 방법을 제공하여 원하는 상태가 UI에 즉시 반영되도록 하여 실제 작업이 완료되기 전에도 UI에서 상태를 즉시 확인할 수 있게 합니다.</p>
<p>저는 작은 채팅 애플리케이션을 구현하여 이 기능을 탐험해보았습니다. 여기에는 useOptimistic가 실제로 어떻게 작동하는지에 대한 요지가 포함되어 있습니다:</p>
<ul>
<li>현재 상태와 동작 입력을 가져와서 &quot;낙관적&quot; 상태 버전을 반환하며 해당 동작의 실제 결과가 확정될 때까지 계속 유지됩니다.</li>
<li>이 &quot;낙관적&quot; 상태는 동작의 결과를 사용자에게 즉시 제공하여 실제 프로세스가 더 오래 걸리더라도 즉각적인 피드백의 환상을 제공합니다.</li>
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
<p>내 구현에서:</p>
<ul>
<li>우리는 useOptimistic을 사용하여 메시지에 대한 낙관적인 상태를 관리합니다 (optimisticMessages).</li>
<li>메시지를 제출하면 addOptimisticMessage를 사용하여 &quot;전송 중...&quot; 상태로 추가하여 UI를 낙관적으로 업데이트합니다.</li>
<li>sendMessage 함수를 호출하여 실제 메시지를 보냅니다.</li>
<li>메시지가 성공적으로 전송되면 실제 내용과 &quot;전송 완료!&quot; 상태를 포함하여 메시지 상태를 업데이트하여 낙관적인 상태를 대체합니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 예제 시연을 위한 코드</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useRef<span class="token punctuation">,</span> useOptimistic <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Thread</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> messages<span class="token punctuation">,</span> sendMessage <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> formRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>optimisticMessages<span class="token punctuation">,</span> addOptimisticMessage<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useOptimistic</span><span class="token punctuation">(</span>
    <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> newMessage</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token operator">...</span>state<span class="token punctuation">,</span> newMessage<span class="token punctuation">]</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleSubmit</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 일부 폼 제출 로직</span>

    <span class="token keyword">const</span> messageId <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> optimisticMessage <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> messageText<span class="token punctuation">,</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> messageId<span class="token punctuation">,</span>
      <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">"전송 중..."</span><span class="token punctuation">,</span>
      <span class="token literal-property property">sentByUser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token function">addOptimisticMessage</span><span class="token punctuation">(</span>optimisticMessage<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> sentMessage <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">deliverMessage</span><span class="token punctuation">(</span>messageText<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> sentMessage<span class="token punctuation">,</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> messageId<span class="token punctuation">,</span>
      <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">"전송 완료!"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">sentByUser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    formRef<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// ... 구성 요소의 나머지 부분</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token punctuation">{</span><span class="token comment">/* ... 메시지 렌더링 로직 */</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>어때요?</p>
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
<p>리액트 프로젝트에서 useOptimistic를 사용해보셨나요? 아래 댓글란에 사용해본 경험과 생각을 공유해주세요!</p>
<p>참고:
📌 <a href="https://react.dev/reference/react/useOptimistic" target="_blank" rel="noopener noreferrer">React 공식 레퍼런스 - useOptimistic<ExternalLinkIcon/></a></p>
<h1 id="요약" tabindex="-1"><a class="header-anchor" href="#요약" aria-hidden="true">#</a> 요약</h1>
<p>간단한 예시이지만, React 폼을 개선하기 위해 다양한 시나리오에 useOptimistic를 사용할 수 있습니다. 🚀</p>
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
<p>In Plain English 커뮤니티에 참여해 주셔서 감사합니다! 떠나시기 전에:</p>
<ul>
<li>작가를 클랩하고 팔로우해 주세요! ️👏️️</li>
<li>팔로우하기: X | LinkedIn | YouTube | Discord | Newsletter</li>
<li>다른 플랫폼 방문: Stackademic | CoFeed | Venture | Cubed</li>
<li>PlainEnglish.io에서 더 많은 콘텐츠를 만나보세요.</li>
</ul>
</div></template>
