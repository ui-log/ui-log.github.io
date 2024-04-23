<template><div><p><img src="@source/docs/Tech/2024-04-19-FetchingtheoriginalPokemonusingthePokeAPI/img/FetchingtheoriginalPokemonusingthePokeAPI_0.png" alt="이미지"></p>
<p>Flatiron에 합류한 후 배우고 싶었던 주요한 것 중 하나는 API를 조작하고 해당 데이터를 사용하여 웹 애플리케이션을 만드는 방법이었습니다. 사용하려고 했던 주요 API 중 하나가 포켓몬 API였습니다. 놀랍게도, 포켓몬 API와 관련해 대화를 나눈 모두가 그것을 작업하기가 번거롭다고 말했습니다. 중첩 API이므로 여러 번의 호출을 수행해야 한다고 합니다.</p>
<p>먼저 Poke API 문서(https://pokeapi.co/docs/v2.html)를 읽어 API 호출 방법을 이해하고 필요한 데이터를 가져오는 방법에 대해 파악합니다. 다른 API와 마찬가지로 Poke API에는 사용하지 않을 많은 데이터가 있습니다.</p>
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
<p>I will be making a small application that shows the original 151 Pokemon on a single page. Every Pokemon will have a card-like styling. Every Pokemon card will include the name, picture, number, and type. I will use Semantic to create the card stylings.</p>
<p>The setup for this application will include one HTML file, a JavaScript file, and a CSS file. I will fetch the data from the API and use DOM manipulation to create the individual cards.</p>
<h2 id="starting-to-code-out-the-application" tabindex="-1"><a class="header-anchor" href="#starting-to-code-out-the-application" aria-hidden="true">#</a> Starting to code out the Application</h2>
<p>The first fetch will be to <code v-pre>https://pokeapi.co/api/v2/pokemon?limit=151</code>. Luckily, the Poke API allows us to use a query parameter, 'limit', which limits the Pokemon to 151, just as we need.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fetchKantoPokemon</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://pokeapi.co/api/v2/pokemon?limit=151'</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">allpokemon</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>allpokemon<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>일단 받은 API 데이터를 확인하기 위해 console.log를 사용하는 것이 좋습니다. 위의 예제에서 콘솔에 모든 151마리의 포켓몬이 로깅된 것을 볼 수 있습니다. 불행히도, 이 첫 번째 호출은 각 포켓몬 데이터 세트마다 포켓몬의 이름과 다른 URL을 제공했을 뿐입니다. 각 포켓몬의 URL로 가서 데이터(타입, 번호 등)를 가져오기 위해 추가로 fetch를 해야합니다. 예를 들어, Bulbasaur의 정보를 얻고 싶다면 다음 URL로 추가 fetch 호출을 해야합니다: https://pokeapi.co/api/v2/pokemon/1/. 정보가 해시 배열에 있기 때문에 배열을 훑고 해당 URL로 fetch 호출을 하는 메서드를 만들 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fetchKantoPokemon</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://pokeapi.co/api/v2/pokemon?limit=151'</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">allpokemon</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  allpokemon<span class="token punctuation">.</span>results<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">pokemon</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">fetchPokemonData</span><span class="token punctuation">(</span>pokemon<span class="token punctuation">)</span><span class="token punctuation">;</span> 
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 코드 예제에서는 forEach 메서드를 사용하여 결과 배열의 모든 포켓몬을 반복하며 해시({name: &quot;bulbasaur&quot;, url: &quot;https://pokeapi.co/api/v2/pokemon/1/&quot;})를 fetchPokemonData 함수로 보냅니다. 여기서 두 번째 fetch 호출을 통해 각 포켓몬의 세부 정보를 가져올 것입니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fetchPokemonData</span><span class="token punctuation">(</span><span class="token parameter">pokemon</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token keyword">let</span> url <span class="token operator">=</span> pokemon<span class="token punctuation">.</span>url <span class="token comment">// &lt;--- fetch에 사용할 포켓몬 URL을 변수에 저장합니다. (예: https://pokeapi.co/api/v2/pokemon/1/)</span>
  <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">pokeData</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>pokeData<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 코드 예제에서 fetchPokemonData 메서드는 파라미터로 Pokemon 해시를 받습니다. fetch 호출에 사용되는 pokemon.url을 변수에 저장했습니다. 다시 한 번 console.log를 사용하여 정확한 데이터를 수신하는지 확인했습니다. 이 경우 스크린샷에 표시된 데이터입니다.</p>
<img src="@source/docs/Tech/2024-04-19-FetchingtheoriginalPokemonusingthePokeAPI/img/FetchingtheoriginalPokemonusingthePokeAPI_1.png" />
<p>이제 데이터가 올바른 방식으로 수신되는 것을 알았으므로 해시에서 데이터를 추출하고 HTML에 출력하는 작업을 시작할 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">renderPokemon</span><span class="token punctuation">(</span><span class="token parameter">pokeData</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token keyword">let</span> allPokemonContainer <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'poke-container'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> pokeContainer <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"div"</span><span class="token punctuation">)</span> <span class="token comment">//div는 개별 포켓몬의 데이터/세부 정보를 보유하는 데 사용될 것입니다.{}</span>
<span class="token keyword">let</span> pokeName <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'h4'</span><span class="token punctuation">)</span>
pokeName<span class="token punctuation">.</span>innerText <span class="token operator">=</span> pokeData<span class="token punctuation">.</span>name
<span class="token keyword">let</span> pokeNumber <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'p'</span><span class="token punctuation">)</span>
pokeNumber<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">#</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>pokeData<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
<span class="token keyword">let</span> pokeTypes <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'ul'</span><span class="token punctuation">)</span> 
<span class="token comment">//ul 목록은 포켓몬 유형을 보유할 것입니다.</span>
<span class="token function">createTypes</span><span class="token punctuation">(</span>pokeData<span class="token punctuation">.</span>types<span class="token punctuation">,</span> pokeTypes<span class="token punctuation">)</span> 
<span class="token comment">// 각 유형에 대한 li 태그를 생성하는 유틸리티 함수</span>
pokeContainer<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>pokeName<span class="token punctuation">,</span> pokeNumber<span class="token punctuation">,</span> pokeTypes<span class="token punctuation">)</span><span class="token punctuation">;</span>   
<span class="token comment">// 모든 세부 정보를 pokeContainer div에 추가합니다.</span>
allPokemonContainer<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>pokeContainer<span class="token punctuation">)</span><span class="token punctuation">;</span>       
<span class="token comment">// 모든 포켓몬 카드를 보유할 기본 div에 해당 pokeContainer div를 추가합니다.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 코드 예제에서 HTML 요소를 모두 만들었고 각각의 inner text를 파라미터로 전달된 포켓몬 데이터에 할당했습니다. 함수의 끝에서 모든 요소를 컨테이너 DIV에 추가하여 DOM에 표시합니다. 또한, 각 포켓몬의 유형을 위해 createTypes라는 도우미 메서드를 사용했습니다. 여러 유형을 가진 포켓몬을 위해 유형이 배열로 제공됩니다. 해당 함수에서는 배열의 각 유형을 forEach를 사용하여 반복하고 새로운 Li(list item) 요소를 만든 후 해당 Li의 inner text를 유형 이름으로 만들고 해당 Li를 Ul(비정렬 목록)에 추가합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">createTypes</span><span class="token punctuation">(</span><span class="token parameter">types<span class="token punctuation">,</span> ul</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  types<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">let</span> typeLi <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'li'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  typeLi<span class="token punctuation">.</span>innerText <span class="token operator">=</span> type<span class="token punctuation">[</span><span class="token string">'type'</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">'name'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  ul<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>typeLi<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>마침내 HTML에 일부 정보가 표시됩니다! 위에 표시된 스크린샷에서 봤을 때. 그러나 포켓몬의 이미지가 누락된 것처럼 보입니다. Poke API에는 렌더링할 수 있는 스프라이트가 있지만 다소 작게 보이며, 스프라이트는 오래된 느낌이 있습니다. 이미지는 https://pokeres.bastionbot.org 포켓몬 (Pokeres) API를 사용할 것입니다. 그들의 API를 사용하려면 일반적으로 일부 헤더를 요구하지만, 이미지만 가져 오기 때문에 헤더를 추가하거나 fetch 호출을 만들 필요가 없습니다.</p>
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
<p>각 포켓몬에 대해 새 이미지 태그를 생성하여 소스를 포켓의 URL로 설정하고 해당 이미지 태그를 컨테이너 DIV에 추가합니다. 예를 들어, 이미지 소스를 https://pokeres.bastionbot.org/images/pokemon/1.png 로 설정하면 Bulbasaur의 이미지가 생성됩니다. 아래 코드를 살펴보세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">createPokeImage</span><span class="token punctuation">(</span><span class="token parameter">pokeID<span class="token punctuation">,</span> containerDiv</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">let</span> pokeImage <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'img'</span><span class="token punctuation">)</span>
  pokeImage<span class="token punctuation">.</span>srcset <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://pokeres.bastionbot.org/images/pokemon/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>pokeID<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.png</span><span class="token template-punctuation string">`</span></span>
  containerDiv<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>pokeImage<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 각 포켓몬에 대한 이미지가 로드되었습니다.</p>
<img src="@source/docs/Tech/2024-04-19-FetchingtheoriginalPokemonusingthePokeAPI/img/FetchingtheoriginalPokemonusingthePokeAPI_2.png" />
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
<p>그게 다입니다! HTML 페이지는 이제 포켓몬 이름, 번호, 유형 및 그림을 보여줍니다. 이제 일부 시맨틱 클래스를 사용하여 시각적으로 매력적인 페이지로 만들어 보겠습니다. 디자인 프로세스를 자세히 다루지는 않겠지만 참고가 필요하다면 하단 게시물의 링크된 GitHub를 확인해주세요. 시맨틱을 사용하지 않고 다른 CSS 프레임워크로 원하는 대로 스타일링할 수도 있습니다.</p>
<p>Github 저장소: https://github.com/Nihaprezz/kanto-pokemon</p>
<p>시맨틱 UI의 미니멀한 스타일링으로 제 페이지가 어떻게 보이게 되었는지 예시를 보여드릴게요.</p>
</div></template>
