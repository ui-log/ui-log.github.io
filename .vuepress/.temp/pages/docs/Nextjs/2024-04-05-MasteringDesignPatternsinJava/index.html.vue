<template><div><p><img src="@source/docs/Nextjs/2024-04-05-MasteringDesignPatternsinJava/img/MasteringDesignPatternsinJava_0.png" alt="MasteringDesignPatternsinJava_0.png"></p>
<p>소프트웨어 엔지니어링 세계에서 아이디어를 실제 코드로 전환하는 것은 까다로울 수 있습니다.</p>
<p>여기에는 디자인 패턴이 등장합니다. 반복되는 디자인 문제를 우아하고 효율적으로 해결할 수 있도록 도와주는 검증된 청사진입니다.</p>
<p>핵심적으로 디자인 패턴은 소프트웨어를 디자인할 때 마주치는 일반적인 문제에 대한 준비된 솔루션과 같습니다. 이러한 솔루션은 단축키처럼 작용하여 전문가들이 오랜 시간 동안 개선해 온 검증된 전략을 활용하여 시간과 노력을 절약합니다.</p>
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
<p>이 기사에서는 모든 개발자가 익숙해져야 할 가장 중요한 디자인 패턴 중 일부에 대해 깊이 파헤쳐 보겠습니다. 그들의 원칙을 알아보고, 왜 유용한지, 그리고 실제 프로젝트에서 어떻게 사용할 수 있는지 살펴볼 것입니다. 객체를 생성하는 데 어려움을 겪고 있다면, 클래스 간의 관계를 조직하는 데 어려움을 겪고 있다면, 또는 객체의 동작 방식을 관리하는 데 어려움을 겪고 있다면, 도움이 될 수 있는 디자인 패턴이 있습니다.</p>
<p>자, 시작해봅시다.</p>
<h2 id="_1-싱글톤-패턴" tabindex="-1"><a class="header-anchor" href="#_1-싱글톤-패턴" aria-hidden="true">#</a> 1. 싱글톤 패턴</h2>
<p>싱글톤 패턴은 한 클래스에 하나의 인스턴스만 존재하도록 보장하고 해당 인스턴스에 대한 전역 액세스 지점을 제공하는 생성 패턴입니다. 더 간단히 말하면, 프로그램에서 특정 객체의 유일한 복사본이 하나만 있도록 보장하고 코드의 어디서든 해당 객체에 액세스할 수 있도록 하는 것과 같습니다.</p>
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
<img src="@source/docs/Nextjs/2024-04-05-MasteringDesignPatternsinJava/img/MasteringDesignPatternsinJava_1.png" />
<p>간단한 실세계 예시를 들어보겠습니다: 클립보드입니다. 컴퓨터에서 여러 애플리케이션이나 프로세스가 동시에 클립보드에 접근하려고 하는 상황을 상상해보세요. 각 애플리케이션이 복사 및 붙여넣기 작업을 관리하기 위해 자체 클립보드를 만든다면 데이터 충돌이 발생할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Clipboard</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> String value<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">copy</span><span class="token punctuation">(</span><span class="token parameter">String value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> String <span class="token function">paste</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 예시에서는 값을 복사하고 붙여넣을 수 있는 Clipboard 클래스를 정의했습니다. 그러나 Clipboard의 여러 인스턴스를 만들 경우, 각 인스턴스는 자체 데이터를 가지게 됩니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token parameter">String<span class="token punctuation">[</span><span class="token punctuation">]</span> args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        Clipboard clipboard1 <span class="token operator">=</span> Clipboard<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        Clipboard clipboard2 <span class="token operator">=</span> Clipboard<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        clipboard1<span class="token punctuation">.</span><span class="token function">copy</span><span class="token punctuation">(</span><span class="token string">"Java"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        clipboard2<span class="token punctuation">.</span><span class="token function">copy</span><span class="token punctuation">(</span><span class="token string">"디자인 패턴"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>clipboard1<span class="token punctuation">.</span><span class="token function">paste</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 결과: Java</span>
        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>clipboard2<span class="token punctuation">.</span><span class="token function">paste</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 결과: 디자인 패턴</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>분명히 이것은 이상적이지 않아요. 두 클립보드 인스턴스가 동일한 값을 표시할 것으로 기대합니다. 여기서 싱글톤 패턴이 가치를 증명합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Clipboard</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> String value<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> Clipboard clipboard <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  
    <span class="token comment">// 외부에서의 인스턴스화를 막기 위한 개인 생성자</span>
    <span class="token keyword">private</span> <span class="token function">Clipboard</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token comment">// 싱글톤 인스턴스에 대한 액세스를 제공하는 메소드</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> Clipboard <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>clipboard <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            clipboard <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Clipboard</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> clipboard<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">copy</span><span class="token punctuation">(</span><span class="token parameter">String value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> String <span class="token function">paste</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>싱글톤 패턴을 구현함으로써 프로그램 실행 중에 Clipboard 클래스의 단일 인스턴스만 존재함을 보장합니다.```</p>
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
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
        <span class="token comment">// 싱글톤 인스턴스 가져오기</span>
        <span class="token class-name">Clipboard</span> clipboard1 <span class="token operator">=</span> <span class="token class-name">Clipboard</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Clipboard</span> clipboard2 <span class="token operator">=</span> <span class="token class-name">Clipboard</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        clipboard1<span class="token punctuation">.</span><span class="token function">copy</span><span class="token punctuation">(</span><span class="token string">"Java"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        clipboard2<span class="token punctuation">.</span><span class="token function">copy</span><span class="token punctuation">(</span><span class="token string">"디자인 패턴"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>clipboard1<span class="token punctuation">.</span><span class="token function">paste</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 출력: 디자인 패턴</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>clipboard2<span class="token punctuation">.</span><span class="token function">paste</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 출력: 디자인 패턴</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 clipboard1과 clipboard2는 Clipboard 클래스의 동일한 인스턴스를 참조하며 응용 프로그램 전체에서 일관성을 보장합니다.</p>
<h2 id="_2-팩토리-디자인-패턴" tabindex="-1"><a class="header-anchor" href="#_2-팩토리-디자인-패턴" aria-hidden="true">#</a> 2. 팩토리 디자인 패턴</h2>
<p>팩토리 디자인 패턴은 생성 패턴으로, 슈퍼 클래스에서 객체를 생성하기 위한 인터페이스를 제공하지만 하위 클래스가 어떤 클래스를 인스턴스화할지 결정할 수 있도록 합니다. 다시 말해, 인스턴스화 로직을 자식 클래스에 위임하는 방법을 제공합니다.</p>
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
<p><img src="@source/docs/Nextjs/2024-04-05-MasteringDesignPatternsinJava/img/MasteringDesignPatternsinJava_2.png" alt="MasteringDesignPatternsinJava_2.png"></p>
<p>간단한 콘솔 기반 계산기를 시뮬레이션하는 프로그램을 개발한다고 상상해봅시다. 덧셈, 뺄셈, 곱셈, 나눗셈 등과 같은 다양한 연산 유형이 있습니다. 각 연산에는 고유한 동작이 있습니다. 이제 고객의 선택에 기반하여 프로그램 내에서 이러한 연산 객체를 생성하려고 합니다.</p>
<p>도전 과제는 코드를 너무 복잡하거나 강하게 결합하지 않으면서 이러한 연산 객체를 생성하는 방법이 필요하다는 것입니다. 이는 코드가 특정 연산 클래스에 너무 의존하지 않도록 원합니다. 또한 나중에 새로운 유형의 연산을 추가하기 쉽도록 코드를 많이 수정하지 않고도 할 수 있길 원합니다.</p>
<p>Factory Design Pattern은 정확한 클래스를 지정하지 않고 객체를 생성하는 방법을 제공하여 이 문제를 해결하도록 도와줍니다. 대신, 생성 프로세스를 팩토리 클래스에 위임합니다.</p>
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
<li>제품 인터페이스를 정의하십시오. (Operation).</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Operation</span> <span class="token punctuation">{</span>
    double <span class="token function">calculate</span><span class="token punctuation">(</span>double number1<span class="token punctuation">,</span> double number2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>각 작업에 대한 구체적인 제품을 구현하십시오.</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 덧셈에 대해</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AddOperation</span> <span class="token keyword">implements</span> <span class="token class-name">Operation</span> <span class="token punctuation">{</span>
    @Override
    <span class="token keyword">public</span> double <span class="token function">calculate</span><span class="token punctuation">(</span><span class="token parameter">double number1<span class="token punctuation">,</span> double number2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> number1 <span class="token operator">+</span> number2<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 뺄셈에 대해</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SubOperation</span> <span class="token keyword">implements</span> <span class="token class-name">Operation</span> <span class="token punctuation">{</span>
    @Override
    <span class="token keyword">public</span> double <span class="token function">calculate</span><span class="token punctuation">(</span><span class="token parameter">double number1<span class="token punctuation">,</span> double number2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> number1 <span class="token operator">-</span> number2<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 곱셈에 대해</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MulOperation</span> <span class="token keyword">implements</span> <span class="token class-name">Operation</span> <span class="token punctuation">{</span>
    @Override
    <span class="token keyword">public</span> double <span class="token function">calculate</span><span class="token punctuation">(</span><span class="token parameter">double number1<span class="token punctuation">,</span> double number2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> number1 <span class="token operator">*</span> number2<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 나눗셈에 대해</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DivOperation</span> <span class="token keyword">implements</span> <span class="token class-name">Operation</span> <span class="token punctuation">{</span>
    @Override
    <span class="token keyword">public</span> double <span class="token function">calculate</span><span class="token punctuation">(</span><span class="token parameter">double number1<span class="token punctuation">,</span> double number2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>number2 <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ArithmeticException</span><span class="token punctuation">(</span><span class="token string">"0으로는 나눌 수 없습니다!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> number1 <span class="token operator">/</span> number2<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 사용자가 작업에 대한 잘못된 선택을 입력하면 호출되는 예외 클래스</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InvalidOperationException</span> <span class="token keyword">extends</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">InvalidOperationException</span><span class="token punctuation">(</span><span class="token parameter">String message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
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
<ol start="3">
<li>어떤 매개변수를 기반으로 객체를 만드는 메서드( getInstance)를 가진 팩토리 클래스(OperationFactory)를 생성하세요.</li>
</ol>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">OperationFactory</span> <span class="token punctuation">{</span>
    <span class="token class-name">Operation</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token keyword">int</span> choice<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InvalidOperation</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OperationFactoryImpl</span> <span class="token keyword">implements</span> <span class="token class-name">OperationFactory</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Operation</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token keyword">int</span> choice<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InvalidOperationException</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>choice <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">AddOperation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>choice <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">SubOperation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>choice <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MulOperation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>choice <span class="token operator">==</span> <span class="token number">4</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">DivOperation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">InvalidOperation</span><span class="token punctuation">(</span><span class="token string">"선택한 작업이 올바르지 않습니다!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>특정 클래스를 알지 못해도 팩토리를 사용하여 객체를 만드세요.</li>
</ol>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Scanner</span> scan <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Output</span> output <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConsoleOutput</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"\n1. 덧셈(+)\n2. 뺄셈(-)\n3. 곱셈(*)\n4. 나눗셈(/)"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         
        <span class="token comment">// 사용자로부터 선택 받기</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"\n\n원하는 작업을 선택하세요 (1-4): "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> choice <span class="token operator">=</span> scan<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 사용자로부터 2개의 피연산자 받기</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"첫 번째 피연산자를 입력하세요: "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">double</span> operand1 <span class="token operator">=</span> scan<span class="token punctuation">.</span><span class="token function">nextDouble</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"두 번째 피연산자를 입력하세요: "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">double</span> operand2 <span class="token operator">=</span> scan<span class="token punctuation">.</span><span class="token function">nextDouble</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// 사용자 선택에 기반해 작업 인스턴스 생성</span>
        <span class="token class-name">OperationFactory</span> operationFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OperationFactoryImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Operation</span> operation <span class="token operator">=</span> operationFactory<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span>choice<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// 결과 출력</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"\n이 결과는 "</span> <span class="token operator">+</span> operation<span class="token punctuation">.</span><span class="token function">calculate</span><span class="token punctuation">(</span>operand1<span class="token punctuation">,</span> operand2<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"입니다."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InputMismatchException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        output<span class="token punctuation">.</span><span class="token function">showMessage</span><span class="token punctuation">(</span><span class="token string">"유효하지 않은 입력 유형입니다!\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InvalidOperation</span> <span class="token operator">|</span> <span class="token class-name">ArithmeticException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        output<span class="token punctuation">.</span><span class="token function">showMessage</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    scan<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>여기 Main 클래스는 느슨한 결합을 통해 특정 구현 클래스를 알지 못하면서도 다양한 작업 객체를 만들기 위한 팩토리의 사용법을 보여줍니다. 팩토리 인터페이스와만 상호 작용합니다. 더 나아가, 기존의 클라이언트 코드를 변경하지 않고도 쉽게 새로운 유형의 작업을 추가할 수도 있습니다. 새로운 구상 제품을 만들고 필요한 경우 팩토리를 업데이트하기만 하면 됩니다.</p>
<h1 id="_3-빌더-패턴" tabindex="-1"><a class="header-anchor" href="#_3-빌더-패턴" aria-hidden="true">#</a> 3. 빌더 패턴</h1>
<p>빌더 패턴은 단계적인 방식으로 객체의 여러 속성(또는 특성)을 설정할 수 있도록 하여 객체를 구성하는 방법을 제공합니다.</p>
<p>객체에 대해 일부 매개변수는 선택적일 수 있지만, 모든 매개변수를 보내야 하며 선택적 매개변수는 NULL로 보내야 하는 경우가 있습니다. 필수 매개변수가 포함된 생성자를 제공하고 선택적 매개변수를 설정하는 다른 setter 메서드를 제공함으로써 이 문제를 해결할 수 있습니다.</p>
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
<p>이 패턴은 많은 선택적 매개변수나 구성을 가진 객체를 다룰 때 특히 유용합니다.</p>
<p>사용자 엔티티를 개발 중이라고 상상해보세요. 사용자에는 이름, 이메일, 전화번호, 도시 등과 같은 다양한 속성이 있습니다. 여기서 이름과 이메일은 필수 필드이며, 전화번호와 도시는 선택적입니다. 이제 각 사용자는 이러한 속성들의 다른 조합을 갖게 됩니다. 어떤 사람은 도시를 가지고 있을 수도 있고, 다른 사람은 가지고 있지 않을 수도 있습니다. 빌더 디자인 패턴을 사용하면 이러한 유연한 사용자를 단계적으로 생성할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Main product class</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> String name<span class="token punctuation">;</span> <span class="token comment">// 필수 필드</span>
    <span class="token keyword">private</span> String email<span class="token punctuation">;</span> <span class="token comment">// 필수 필드</span>
    <span class="token keyword">private</span> String phone<span class="token punctuation">;</span> <span class="token comment">// 선택적 필드</span>
    <span class="token keyword">private</span> String city<span class="token punctuation">;</span> <span class="token comment">// 선택적 필드</span>

    <span class="token keyword">public</span> <span class="token function">User</span><span class="token punctuation">(</span><span class="token parameter">UserBuilder userBuilder</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> userBuilder<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>email <span class="token operator">=</span> userBuilder<span class="token punctuation">.</span><span class="token function">getEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>phone <span class="token operator">=</span> userBuilder<span class="token punctuation">.</span><span class="token function">getPhone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>city <span class="token operator">=</span> userBuilder<span class="token punctuation">.</span><span class="token function">getCity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> UserBuilder <span class="token function">builder</span><span class="token punctuation">(</span><span class="token parameter">String name<span class="token punctuation">,</span> String email</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">UserBuilder</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> email<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    @Override
    <span class="token keyword">public</span> String <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"User = "</span> <span class="token operator">+</span>
                <span class="token string">"{ name: '"</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">'\''</span> <span class="token operator">+</span>
                <span class="token string">", email: '"</span> <span class="token operator">+</span> email <span class="token operator">+</span> <span class="token string">'\''</span> <span class="token operator">+</span>
                <span class="token string">", phone: '"</span> <span class="token operator">+</span> phone <span class="token operator">+</span> <span class="token string">'\''</span> <span class="token operator">+</span>
                <span class="token string">", city: '"</span> <span class="token operator">+</span> city <span class="token operator">+</span> <span class="token string">'\''</span> <span class="token operator">+</span>
                <span class="token string">" }"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 빌더 클래스</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">UserBuilder</span> <span class="token punctuation">{</span>
        <span class="token keyword">private</span> String name<span class="token punctuation">;</span> <span class="token comment">// 필수 필드</span>
        <span class="token keyword">private</span> String email<span class="token punctuation">;</span> <span class="token comment">// 필수 필드</span>
        <span class="token keyword">private</span> String phone <span class="token operator">=</span> <span class="token string">"unknown"</span><span class="token punctuation">;</span> <span class="token comment">// 선택적 필드</span>
        <span class="token keyword">private</span> String city <span class="token operator">=</span> <span class="token string">"unknown"</span><span class="token punctuation">;</span> <span class="token comment">// 선택적 필드</span>

        <span class="token keyword">public</span> <span class="token function">UserBuilder</span><span class="token punctuation">(</span><span class="token parameter">String name<span class="token punctuation">,</span> String email</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>email <span class="token operator">=</span> email<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 게터 메서드</span>

        <span class="token keyword">public</span> UserBuilder <span class="token function">name</span><span class="token punctuation">(</span><span class="token parameter">String name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> UserBuilder <span class="token function">email</span><span class="token punctuation">(</span><span class="token parameter">String email</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>email <span class="token operator">=</span> email<span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> UserBuilder <span class="token function">phone</span><span class="token punctuation">(</span><span class="token parameter">String phone</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>phone <span class="token operator">=</span> phone<span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> UserBuilder <span class="token function">city</span><span class="token punctuation">(</span><span class="token parameter">String city</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>city <span class="token operator">=</span> city<span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> User <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>UserBuilder 클래스: User 객체를 구성하는 데 책임이 있는 내부 빌더 클래스입니다. 다양한 속성 (이름, 이메일, 전화번호, 도시)의 존재 여부를 나타내는 필드를 가지고 있습니다. 이 클래스는 각 속성에 대한 setter 메서드를 제공하며, 이 메서드들은 빌더 자체를 반환합니다 (name(), phone(), city(), email()). 이를 통해 메소드 체이닝을 가능하게 합니다.</li>
<li>User 클래스: 빌더 패턴을 사용하여 구성하려는 제품을 나타내는 클래스입니다. 사용자의 속성 (이름, 이메일, 전화번호, 도시)을 나타내는 private 필드를 가지고 있습니다. User의 생성자는 UserBuilder 객체를 사용하여 필드를 초기화하며, 빌더의 설정에 따라 필드를 설정합니다. 새 UserBuilder 인스턴스를 반환하는 static builder() 메서드를 제공하여 새 빌더를 쉽게 만들 수 있습니다.</li>
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
<p>이 코드를 사용하여 선택적 속성이 있는 사용자를 생성하는 방법의 예제를 살펴보겠습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token parameter">String<span class="token punctuation">[</span><span class="token punctuation">]</span> args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        User user1 <span class="token operator">=</span> User
                <span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token string">"John"</span><span class="token punctuation">,</span> <span class="token string">"john@abc@gmail.com"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>user1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// User = { name: 'John', email: 'john@abc@gmail.com', phone: 'unknown', city: 'unknown' }</span>

        User user2 <span class="token operator">=</span> User
                <span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token string">"Mary"</span><span class="token punctuation">,</span> <span class="token string">"mary@abc@gmail.com"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">city</span><span class="token punctuation">(</span><span class="token string">"Colombo"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>user2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// User = { name: 'Mary', email: 'mary@abc@gmail.com', phone: 'unknown', city: 'Colombo' }</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이것이 빌더 패턴입니다. 이 패턴은 선택적 매개변수가 많은 복잡한 객체가 있는 경우 유용합니다. 코드를 깔끔하고 이해하기 쉽게 유지하는 데 도움이 됩니다. 동일한 빌더로 다양한 객체 변형을 만들 수 있으며 필요한대로 매개변수를 조정할 수 있습니다.</p>
<h1 id="_4-어댑터-패턴" tabindex="-1"><a class="header-anchor" href="#_4-어댑터-패턴" aria-hidden="true">#</a> 4. 어댑터 패턴</h1>
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
<p>어댑터 패턴은 서로 호환되지 않는 인터페이스를 가진 객체들이 함께 작동할 수 있도록 해주는 구조적 디자인 패턴입니다. 이는 두 개의 호환되지 않는 인터페이스 사이에 다리 역할을 합니다.</p>
<p>두 클래스 또는 구성 요소가 비슷한 작업을 수행하지만 메소드 이름, 매개변수 유형 또는 구조가 다른 상황을 상상해보세요. 어댑터 패턴은 이러한 호환되지 않는 인터페이스를 클라이언트가 기대하는 인터페이스로 변환하는 래퍼(어댑터)를 제공하여 함께 작동할 수 있도록 합니다.</p>
<ul>
<li>Target은 클라이언트가 기대하는 인터페이스입니다.</li>
<li>Adaptee는 적응되어야 하는 클래스입니다.</li>
<li>Adapter는 Target 인터페이스를 구현하고 Adaptee 클래스를 래핑하는 클래스입니다.</li>
<li>Client 클래스는 어댑터를 사용하여 Target 인터페이스를 통해 Adaptee와 상호 작용하는 클래스입니다.</li>
</ul>
<p><img src="@source/docs/Nextjs/2024-04-05-MasteringDesignPatternsinJava/img/MasteringDesignPatternsinJava_3.png" alt="이미지"></p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 대상 인터페이스</span>
<span class="token keyword">interface</span> <span class="token class-name">CellPhone</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 적응할 대상 클래스</span>
<span class="token keyword">class</span> <span class="token class-name">FriendCellPhone</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">ring</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"벨 울림"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 대상 인터페이스를 구현하는 어댑터 클래스</span>
<span class="token keyword">class</span> <span class="token class-name">CellPhoneAdapter</span> <span class="token keyword">implements</span> <span class="token class-name">CellPhone</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> FriendCellPhone friendCellPhone<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">CellPhoneAdapter</span><span class="token punctuation">(</span><span class="token parameter">FriendCellPhone friendCellPhone</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>friendCellPhone <span class="token operator">=</span> friendCellPhone<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    @Override
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        friendCellPhone<span class="token punctuation">.</span><span class="token function">ring</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 클라이언트 클래스</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AdapterMain</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token parameter">String<span class="token punctuation">[</span><span class="token punctuation">]</span> args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 어댑터를 사용하여 적응할 대상을 대상 인터페이스로 동작시킵니다</span>
        FriendCellPhone adaptee <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FriendCellPhone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        CellPhone adapter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CellPhoneAdapter</span><span class="token punctuation">(</span>adaptee<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">adapter</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예시에서:</p>
<ul>
<li>CellPhone은 클라이언트 코드에서 기대하는 대상 인터페이스이며, 이에 대한 구현이 없습니다.</li>
<li>FriendCellPhone은 적응하고자 하는 클래스(Adaptee)로, CellPhone 인터페이스의 새로운 구현 대신 ring 메서드를 가지고 있습니다.</li>
<li>CellPhoneAdapter는 CellPhone 인터페이스를 구현하는 어댑터 클래스로, FriendCellPhone의 인스턴스를 래핑합니다. 어댑터의 call 메서드는 FriendCellPhone 클래스의 ring 메서드로 호출을 위임합니다.</li>
<li>AdapterMain 클래스는 어댑터 패턴의 사용법을 보여주는 클라이언트 역할을 합니다.</li>
</ul>
<p>어댑터 패턴을 사용하는 이유는 무엇일까요?```</p>
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
<li>Adaptee는 직접 수정할 수 없는 제삼자 라이브러리나 레거시 코드베이스의 클래스일 수 있습니다. 어댑터를 사용하여 클라이언트가 기대하는 인터페이스와 일치하도록 조정할 수 있으며, 원본 코드를 수정하지 않고도 이를 달성할 수 있습니다.</li>
<li>클라이언트는 Adaptee로부터 특정 기능만 필요로 할 수 있습니다. 어댑터를 사용하여 필요한 기능만 노출하는 맞춤형 인터페이스를 제공할 수 있으며, Adaptee의 전체 인터페이스를 노출하는 것보다 더 나은 방법입니다.</li>
<li>Target 인터페이스의 인스턴스를 직접 생성하여 유사한 기능을 달성할 수 있을 것으로 보일 수 있지만, 기존 코드나 제삼자 라이브러리와 작업할 때, 어댑터를 사용하는 것은 코드 재사용성, 유지 보수성 및 유연성 면에서 이점을 제공합니다.</li>
</ul>
<h1 id="_5-데코레이터-패턴" tabindex="-1"><a class="header-anchor" href="#_5-데코레이터-패턴" aria-hidden="true">#</a> 5. 데코레이터 패턴</h1>
<p>데코레이터 패턴은 객체 지향 프로그래밍에서 개별 객체에 정적 또는 동적으로 동작을 추가할 수 있게 하는 디자인 패턴입니다. 이 패턴에서는 공통 기능을 정의하는 기본 클래스(또는 인터페이스)와 추가 동작을 추가하는 하나 이상의 데코레이터 클래스가 있습니다. 이러한 데코레이터 클래스는 원본 객체를 래핑하여 모듈식 및 유연한 방식으로 그 동작을 확장합니다.</p>
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
<img src="@source/docs/Nextjs/2024-04-05-MasteringDesignPatternsinJava/img/MasteringDesignPatternsinJava_4.png" />
<p>상상해보세요. 사용자가 다양한 장식으로 모양을 만들고 사용자 정의하는 그림 애플리케이션을 만들라는 과제를 맡았다고 상상해보세요. 기존 코드를 수정하지 않고도 추가 기능을 위한 새로운 장식을 쉽게 추가할 수 있어야 합니다.</p>
<p>데코레이터 패턴을 사용하여 이를 어떻게 구현할 수 있는지 살펴보겠습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Shape Interface</span>
<span class="token keyword">interface</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    String <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Concrete Shape: Circle</span>
<span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token keyword">implements</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> String name<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">Circle</span><span class="token punctuation">(</span><span class="token parameter">String name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> String <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    @Override
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Drawing circle, "</span> <span class="token operator">+</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
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
<li>모양 인터페이스: 모든 모양이 지원해야 하는 기본 작업을 정의합니다. 이 경우에는 모양을 그리는 draw() 메서드와 모양의 이름을 반환하는 getName()이 포함됩니다.</li>
<li>원 클래스: Shape 인터페이스를 구현하며 구체적인 모양(이 경우에는 원)을 나타냅니다. 이름 속성을 갖고 원을 그리는 draw() 메서드를 구현합니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 추상 데코레이터 클래스</span>
abstract <span class="token keyword">class</span> <span class="token class-name">ShapeDecorator</span> <span class="token keyword">implements</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> Shape decoratedShape<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">ShapeDecorator</span><span class="token punctuation">(</span><span class="token parameter">Shape decoratedShape</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>decoratedShape <span class="token operator">=</span> decoratedShape<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    @Override
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        decoratedShape<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    @Override
    <span class="token keyword">public</span> String <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> decoratedShape<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>ShapeDecorator 추상 클래스: Shape 인터페이스를 구현하는 추상 클래스입니다. Shape 객체(장식된 모양)에 대한 참조를 포함하고 draw() 메서드를 이 객체로 위임합니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 구체적 데코레이터: BorderDecorator</span>
<span class="token keyword">class</span> <span class="token class-name">BorderDecorator</span> <span class="token keyword">extends</span> <span class="token class-name">ShapeDecorator</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> String color<span class="token punctuation">;</span>
    <span class="token keyword">private</span> int widthInPxs<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">BorderDecorator</span><span class="token punctuation">(</span><span class="token parameter">Shape decoratedShape<span class="token punctuation">,</span> String color<span class="token punctuation">,</span> int widthInPxs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>decoratedShape<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>widthInPxs <span class="token operator">=</span> widthInPxs<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    @Override
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Adding "</span> <span class="token operator">+</span> widthInPxs <span class="token operator">+</span> <span class="token string">"px, "</span> <span class="token operator">+</span> color <span class="token operator">+</span> <span class="token string">" color border to "</span> <span class="token operator">+</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 구체적 데코레이터: ColorDecorator</span>
<span class="token keyword">class</span> <span class="token class-name">ColorDecorator</span> <span class="token keyword">extends</span> <span class="token class-name">ShapeDecorator</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> String color<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">ColorDecorator</span><span class="token punctuation">(</span><span class="token parameter">Shape decoratedShape<span class="token punctuation">,</span> String color</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>decoratedShape<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    @Override
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Filling with "</span> <span class="token operator">+</span> color <span class="token operator">+</span> <span class="token string">" color to "</span> <span class="token operator">+</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
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
<ul>
<li>BorderDecorator 및 ColorDecorator 클래스: ShapeDecorator를 확장한 구체적인 데코레이터 클래스입니다. 이들은 경계선과 색상과 같은 추가 기능을 데코레이트된 도형에 추가합니다. 데코레이터된 도형의 draw() 메서드를 오버라이드하여 특정 기능을 추가하고 데코레이트된 도형의 draw() 메서드를 호출합니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Main Class</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DecoratorMain</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token parameter">String<span class="token punctuation">[</span><span class="token punctuation">]</span> args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 원을 생성합니다</span>
        Shape circle1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token string">"circle1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 원에 테두리를 장식합니다</span>
        Shape circle1WithBorder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BorderDecorator</span><span class="token punctuation">(</span>circle1<span class="token punctuation">,</span> <span class="token string">"red"</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 원에 색상을 장식합니다</span>
        Shape circle1WithBorderAndColor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ColorDecorator</span><span class="token punctuation">(</span>circle1WithBorder<span class="token punctuation">,</span> <span class="token string">"blue"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 장식된 원을 그립니다</span>
        circle1WithBorderAndColor<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 출력</span>
        <span class="token comment">// 원을 그립니다, circle1.</span>
        <span class="token comment">// circle1에 2px 빨간색 테두리를 추가합니다.</span>
        <span class="token comment">// circle1에 파란색으로 채웁니다.</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>DecoratorMain 클래스: 데코레이터 패턴이 표시되는 main() 메서드를 포함합니다. 원을 만들고 테두리로 장식한 다음 색상으로 더 장식합니다. 마지막으로 draw() 메서드를 호출하여 장식된 도형을 시각화합니다.</li>
</ul>
<p>이제 Decorator Pattern을 구현함으로써, 그림 그리기 응용 프로그램은 원 뿐만 아니라 사각형, 삼각형 등의 다양한 기하학적 모양을 장식할 수 있는 놀라운 능력을 갖추게 되었습니다. 또한, 이 패턴의 확장성을 통해 투명도, 다양한 테두리 스타일(실선, 점선)과 같은 기능을 제공하는 추가적인 데코레이터를 원할 때마다 원활하게 통합할 수 있습니다. 이 동적인 기능 향상 능력은 도형의 핵심 구조를 변경하지 않고 코드 재사용성, 유연성 및 확장 가능성을 촉진하는 이 패턴의 능력을 강조합니다.</p>
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
<h1 id="_6-observer-패턴" tabindex="-1"><a class="header-anchor" href="#_6-observer-패턴" aria-hidden="true">#</a> 6. Observer 패턴</h1>
<p>옵저버 패턴은 객체지향 프로그래밍에서 자주 사용되는 행동 디자인 패턴으로, 객체 간의 일대다 종속성을 설정하는 데에 사용됩니다. 이 패턴에서는 하나의 객체(주체 또는 observable이라고 함)가 종속 객체(옵저버)의 목록을 유지하고, 상태 변경이 있을 때 그들에게 알리는데, 일반적으로 그들의 메서드 중 하나를 호출하여 알립니다.</p>
<p>다음은 이 작동 방식입니다:</p>
<ul>
<li>주체(Subject): 이는 상태를 보유하고 옵저버 목록을 관리하는 객체입니다. 옵저버를 첨부, 분리, 알릴 수 있는 메서드를 제공합니다.</li>
<li>옵저버(Observer): 상태 변경을 통지하기 위해 주체가 호출하는 메서드를 정의하는 인터페이스입니다. 일반적으로 옵저버가 이 인터페이스를 구현합니다.</li>
<li>구체적인 주체(Concrete Subject): 주체 인터페이스의 구체적인 구현입니다. 상태를 유지하고 상태가 변경될 때 옵저버에게 알림을 보냅니다.</li>
<li>구체적인 옵저버(Concrete Observer): 옵저버 인터페이스의 구체적인 구현입니다. 주체에 자체를 등록하여 알림을 받고, 상태 변경에 대응하기 위해 업데이트 메서드를 구현합니다.</li>
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
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">MasteringDesignPatternsinJava_5.png</span>](<span class="token url">./img/MasteringDesignPatternsinJava_5.png</span>)</span>

유튜브 채널 구독자 시나리오에서 유튜브 채널은 주체이고, 구독자는 관찰자입니다. 유튜브 채널에서 이벤트가 발생하면 모든 구독자에게 새로운 비디오에 대해 알림을 보내어 시청하도록 합니다.

이 예제를 코드로 구현해봅시다.

```js
public enum EventType {
    NEW_VIDEO,
    LIVE_STREAM
}

public class YoutubeEvent {
    private EventType eventType;
    private String topic;

<span class="token code keyword">    public YoutubeEvent(EventType eventType, String topic) {
        this.eventType = eventType;
        this.topic = topic;
    }</span>

<span class="token code keyword">    // getters ans setters</span>

<span class="token code keyword">    @Override
    public String toString() {
        return eventType.name() + " on " +  topic;
    }</span>
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
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
<li>EventType: EventType enum은 발생할 수 있는 이벤트 유형을 정의합니다. NEW_VIDEO, LIVE_STREAM 등이 있습니다.</li>
<li>Event: YoutubeEvent 클래스는 시스템에서 발생하는 이벤트를 나타냅니다. 이벤트의 유형과 주제와 같은 정보를 포함하고 있습니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Subject</span> <span class="token punctuation">{</span>

    <span class="token keyword">void</span> <span class="token function">addSubscriber</span><span class="token punctuation">(</span>Observer observer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">removeSubscriber</span><span class="token punctuation">(</span>Observer observer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">notifyAllSubscribers</span><span class="token punctuation">(</span>YoutubeEvent event<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Observer</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">notifyMe</span><span class="token punctuation">(</span>String youtubeChannelName<span class="token punctuation">,</span> YoutubeEvent event<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Subject: Subject 인터페이스는 구독자를 관리하는 메서드(addSubscriber 및 removeSubscriber)와 이벤트 발생 시 알림(notifyAllSubscribers)을 위해 선언됩니다.</li>
<li>Observer: Observer 인터페이스는 subjects가 상태 변경을 알리기 위해 호출하는 메서드(notifyMe)를 선언합니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">package</span> observer<span class="token punctuation">;</span>

<span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>ArrayList<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>List<span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">YoutubeChannel</span> <span class="token keyword">implements</span> <span class="token class-name">Subject</span><span class="token punctuation">{</span>

    <span class="token keyword">private</span> String name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> List<span class="token operator">&lt;</span>Observer<span class="token operator">></span> subscribers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token operator">&lt;</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">YoutubeChannel</span><span class="token punctuation">(</span><span class="token parameter">String name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> String <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    @Override
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addSubscriber</span><span class="token punctuation">(</span><span class="token parameter">Observer observer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        subscribers<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>observer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    @Override
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">removeSubscriber</span><span class="token punctuation">(</span><span class="token parameter">Observer observer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        subscribers<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>observer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    @Override
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">notifyAllSubscribers</span><span class="token punctuation">(</span><span class="token parameter">YoutubeEvent event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span>Observer observer<span class="token operator">:</span> subscribers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            observer<span class="token punctuation">.</span><span class="token function">notifyMe</span><span class="token punctuation">(</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
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
<li>구체적인 주제: YoutubeChannel 클래스는 Subject 인터페이스를 구현합니다. 구독자 목록을 유지하고 새 이벤트가 발생할 때 알림을 받습니다.</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">observer</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">YoutubeSubscriber</span> <span class="token keyword">implements</span> <span class="token class-name">Observer</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">YoutubeSubscriber</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">notifyMe</span><span class="token punctuation">(</span><span class="token class-name">String</span> youtubeChannelName<span class="token punctuation">,</span> <span class="token class-name">YoutubeEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Dear "</span> <span class="token operator">+</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">", Notification from "</span> <span class="token operator">+</span> youtubeChannelName <span class="token operator">+</span> <span class="token string">": "</span> <span class="token operator">+</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>구체적인 옵저버: YoutubeSubscriber 클래스는 Observer 인터페이스를 구현합니다. 주제로부터 알림을 받았을 때 수행할 동작을 정의합니다.</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ObserverMain</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        <span class="token class-name">YoutubeChannel</span> myChannel <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">YoutubeChannel</span><span class="token punctuation">(</span><span class="token string">"MyChannel"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Observer</span> john <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">YoutubeSubscriber</span><span class="token punctuation">(</span><span class="token string">"John"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Observer</span> bob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">YoutubeSubscriber</span><span class="token punctuation">(</span><span class="token string">"Bob"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Observer</span> tom <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">YoutubeSubscriber</span><span class="token punctuation">(</span><span class="token string">"Tom"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        myChannel<span class="token punctuation">.</span><span class="token function">addSubscriber</span><span class="token punctuation">(</span>john<span class="token punctuation">)</span><span class="token punctuation">;</span>
        myChannel<span class="token punctuation">.</span><span class="token function">addSubscriber</span><span class="token punctuation">(</span>bob<span class="token punctuation">)</span><span class="token punctuation">;</span>
        myChannel<span class="token punctuation">.</span><span class="token function">addSubscriber</span><span class="token punctuation">(</span>tom<span class="token punctuation">)</span><span class="token punctuation">;</span>

        myChannel<span class="token punctuation">.</span><span class="token function">notifyAllSubscribers</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">YoutubeEvent</span><span class="token punctuation">(</span><span class="token class-name">EventType</span><span class="token punctuation">.</span>NEW_VIDEO<span class="token punctuation">,</span> <span class="token string">"Design patterns"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        myChannel<span class="token punctuation">.</span><span class="token function">removeSubscriber</span><span class="token punctuation">(</span>tom<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        myChannel<span class="token punctuation">.</span><span class="token function">notifyAllSubscribers</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">YoutubeEvent</span><span class="token punctuation">(</span><span class="token class-name">EventType</span><span class="token punctuation">.</span>LIVE_STREAM<span class="token punctuation">,</span> <span class="token string">"JAVA for beginners"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
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
<li>Main Class: ObserverMain 클래스에는 구현을 테스트하는 main 메서드가 포함되어 있습니다. 여기서는 YoutubeChannel 인스턴스를 생성하고 구독자를 추가하여 새 비디오 이벤트를 통지하며, 그 중 하나의 구독자를 제거한 후 다시 라이브 스트림 이벤트를 통지합니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// output</span>
친애하는 존<span class="token punctuation">,</span> MyChannel로부터 알림<span class="token operator">:</span> Design patterns에 대한 <span class="token constant">NEW_VIDEO</span>
친애하는 밥<span class="token punctuation">,</span> MyChannel로부터 알림<span class="token operator">:</span> Design patterns에 대한 <span class="token constant">NEW_VIDEO</span>
친애하는 톰<span class="token punctuation">,</span> MyChannel로부터 알림<span class="token operator">:</span> Design patterns에 대한 <span class="token constant">NEW_VIDEO</span>

친애하는 존<span class="token punctuation">,</span> MyChannel로부터 알림<span class="token operator">:</span> 초보자를 위한 <span class="token constant">JAVA</span> <span class="token constant">LIVE_STREAM</span>
친애하는 밥<span class="token punctuation">,</span> MyChannel로부터 알림<span class="token operator">:</span> 초보자를 위한 <span class="token constant">JAVA</span> <span class="token constant">LIVE_STREAM</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Observer 디자인 패턴을 사용하면 YouTube 채널이 비디오를 업로드할 때 모든 구독자에게 쉽게 알릴 수 있습니다. 이는 채널과 구독자를 강하게 결합하지 않고 더 유연하고 유지보수가 용이한 설계를 촉진합니다.</p>
<p>요약하면, 디자인 패턴은 반복적인 설계 문제에 대한 검증된 솔루션을 제공하고 코드의 재사용성, 유지보수성 및 확장성을 촉진하는 Java 개발자에게 필수적인 도구입니다. 이러한 패턴을 효과적으로 이해하고 구현함으로써 개발자는 견고하고 유연하며 쉽게 유지보수 가능한 소프트웨어 솔루션을 만들 수 있습니다. 디자인 패턴을 숙달하는 데는 실습과 경험이 필요하지만, 소프트웨어 개발에 제공하는 혜택은 값진 것입니다. 소규모 프로젝트나 대규모 기업 애플리케이션을 작업 중이더라도, 디자인 패턴을 활용하면 더 깔끔하고 효율적인 코드를 작성하고 궁극적으로 보다 능숙한 Java 개발자가 될 수 있습니다.</p>
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
<p>여러분, 이 기사를 다 읽어주셔서 감사합니다! 이 기사에서 유용한 정보를 찾아보시고 주제에 대한 가치 있는 통찰을 얻었기를 바랍니다. 디자인 패턴이 무엇인지부터 실제 디자인 패턴 예시를 탐색하는 과정까지 많은 주제를 다뤘습니다.</p>
<p>이 곳에서 다룬 디자인 패턴 외에도 다른 유익한 자바 프로그래밍 주제에 대해 써 온 내 다른 기사를 살펴보시기를 권합니다. 코드 성능 최적화에 관심이 있다면 다른 기사들도 확인해보세요.</p>
<ul>
<li>자바로 설명하는 객체 지향 프로그래밍</li>
<li>자바로 설명하는 SOLID 원칙</li>
</ul>
<p>제 기사들이 유용했다면 즐겨 찾아주시고 친구나 동료들과 공유해 주시면 감사하겠습니다.</p>
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
<p>자바로 계속 배우고 탐험하며 멋진 것들을 만들어 보세요!</p>
<p>코딩 즐겁게 하세요!</p>
<p>-다르시 바라수브라마니암-</p>
</div></template>
