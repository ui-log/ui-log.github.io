<template><div><p>안녕하세요! ES7 React snippets 확장 프로그램을 사용해 보셨나요? 제공되는 막대한 양의 스니펫에 압도되었다고 느낀 적이 있나요? 그렇지 않다면, 여기 제가 추천하는 가장 필수적인 스니펫 목록이 있어요. 필수 사항에만 초점을 맞추면서 Visual Studio Code 설정을 간소화하고 코딩 경험을 효율적으로 만들어볼 수 있어요.</p>
<h1 id="react-snippets" tabindex="-1"><a class="header-anchor" href="#react-snippets" aria-hidden="true">#</a> React Snippets</h1>
<h2 id="react-usestate-→-us" tabindex="-1"><a class="header-anchor" href="#react-usestate-→-us" aria-hidden="true">#</a> React useState → us</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">"React useState"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"prefix"</span><span class="token operator">:</span> <span class="token string">"us"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"body"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"const [$1, set$2] = useState($3);"</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
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
<h2 id="react-useeffect-→-ue" tabindex="-1"><a class="header-anchor" href="#react-useeffect-→-ue" aria-hidden="true">#</a> React useEffect → ue</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">"React useEffect"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"prefix"</span><span class="token operator">:</span> <span class="token string">"ue"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"body"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"useEffect(() => {"</span><span class="token punctuation">,</span>
      <span class="token string">"  $1"</span><span class="token punctuation">,</span>
      <span class="token string">"}, [$2]);"</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="react-usecallback-→-ucb" tabindex="-1"><a class="header-anchor" href="#react-usecallback-→-ucb" aria-hidden="true">#</a> React useCallback → ucb</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">"React useCallback"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"prefix"</span><span class="token operator">:</span> <span class="token string">"ucb"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"body"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"useCallback(() => {"</span><span class="token punctuation">,</span>
      <span class="token string">"  $1"</span><span class="token punctuation">,</span>
      <span class="token string">"}, [$2]);"</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
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
<h2 id="react-usememo-→-음" tabindex="-1"><a class="header-anchor" href="#react-usememo-→-음" aria-hidden="true">#</a> React useMemo → 음</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">"React useMemo"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"prefix"</span><span class="token operator">:</span> <span class="token string">"umm"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"body"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"useMemo(() => {"</span><span class="token punctuation">,</span>
      <span class="token string">"  $1"</span><span class="token punctuation">,</span>
      <span class="token string">"}, [$2]);"</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="react-functional-components-→-rafce" tabindex="-1"><a class="header-anchor" href="#react-functional-components-→-rafce" aria-hidden="true">#</a> React Functional components → rafce</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">"React Function Component"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"key"</span><span class="token operator">:</span> <span class="token string">"reactArrowFunctionExportComponent"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"prefix"</span><span class="token operator">:</span> <span class="token string">"rafce"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"body"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"const ${1:${TM_FILENAME_BASE} = () => {"</span><span class="token punctuation">,</span>
      <span class="token string">"  return ("</span><span class="token punctuation">,</span>
      <span class="token string">"    &lt;div>"</span><span class="token punctuation">,</span>
      <span class="token string">"      &lt;h1>${1:first}&lt;/h1>"</span><span class="token punctuation">,</span>
      <span class="token string">"    &lt;/div>"</span><span class="token punctuation">,</span>
      <span class="token string">"  )"</span><span class="token punctuation">,</span>
      <span class="token string">"}"</span><span class="token punctuation">,</span>
      <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token string">"export default ${1:${TM_FILENAME_BASE}"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">"description"</span><span class="token operator">:</span> <span class="token string">"Creates a React Arrow Function Component with ES7 module system"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"scope"</span><span class="token operator">:</span> <span class="token string">"typescript,typescriptreact,javascript,javascriptreact"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
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
<h2 id="프롭스를-사용한-react-함수형-컴포넌트-→-rafcep" tabindex="-1"><a class="header-anchor" href="#프롭스를-사용한-react-함수형-컴포넌트-→-rafcep" aria-hidden="true">#</a> 프롭스를 사용한 React 함수형 컴포넌트 → rafcep</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">"React 함수형 컴포넌트와 프롭스"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"key"</span><span class="token operator">:</span> <span class="token string">"react화살표함수내보냄컴포넌트"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"prefix"</span><span class="token operator">:</span> <span class="token string">"rafcep"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"body"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"interface $1Props {}"</span><span class="token punctuation">,</span>
      <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token string">"const ${1:${TM_FILENAME_BASE} = ({}: $1Props) => {"</span><span class="token punctuation">,</span>
      <span class="token string">"  return ("</span><span class="token punctuation">,</span>
      <span class="token string">"    &lt;div>"</span><span class="token punctuation">,</span>
      <span class="token string">"      &lt;h1>${1:first}&lt;/h1>"</span><span class="token punctuation">,</span>
      <span class="token string">"    &lt;/div>"</span><span class="token punctuation">,</span>
      <span class="token string">"  )"</span><span class="token punctuation">,</span>
      <span class="token string">"}"</span><span class="token punctuation">,</span>
      <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token string">"export default ${1:${TM_FILENAME_BASE}"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">"description"</span><span class="token operator">:</span> <span class="token string">"ES7 모듈 시스템을 사용하여 React 화살표 함수 컴포넌트를 생성합니다."</span><span class="token punctuation">,</span>
    <span class="token string-property property">"scope"</span><span class="token operator">:</span> <span class="token string">"typescript,typescriptreact,javascript,javascriptreact"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="next-js-단축키" tabindex="-1"><a class="header-anchor" href="#next-js-단축키" aria-hidden="true">#</a> Next.js 단축키</h1>
<h2 id="비동기-react-함수형-컴포넌트-→-arafce" tabindex="-1"><a class="header-anchor" href="#비동기-react-함수형-컴포넌트-→-arafce" aria-hidden="true">#</a> 비동기 React 함수형 컴포넌트 → arafce</h2>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">"비동기 리액트 함수 컴포넌트"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"prefix"</span><span class="token operator">:</span> <span class="token string">"arafce"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"body"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"const ${1:${TM_FILENAME_BASE} = async () => {"</span><span class="token punctuation">,</span>
      <span class="token string">"  return ("</span><span class="token punctuation">,</span>
      <span class="token string">"    &lt;div>"</span><span class="token punctuation">,</span>
      <span class="token string">"      &lt;h1>${1:first}&lt;/h1>"</span><span class="token punctuation">,</span>
      <span class="token string">"    &lt;/div>"</span><span class="token punctuation">,</span>
      <span class="token string">"  )"</span><span class="token punctuation">,</span>
      <span class="token string">"}"</span><span class="token punctuation">,</span>
      <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token string">"export default ${1:${TM_FILENAME_BASE}"</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="비동기-리액트-함수-컴포넌트-with-props-→-arafcep" tabindex="-1"><a class="header-anchor" href="#비동기-리액트-함수-컴포넌트-with-props-→-arafcep" aria-hidden="true">#</a> 비동기 리액트 함수 컴포넌트 with props → arafcep</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">"비동기 리액트 함수 컴포넌트 with Props"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"prefix"</span><span class="token operator">:</span> <span class="token string">"arafcep"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"body"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"interface $1Props {}"</span><span class="token punctuation">,</span>
      <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token string">"const ${1:${TM_FILENAME_BASE} = async ({}: $1Props) => {"</span><span class="token punctuation">,</span>
      <span class="token string">"  return ("</span><span class="token punctuation">,</span>
      <span class="token string">"    &lt;div>"</span><span class="token punctuation">,</span>
      <span class="token string">"      &lt;h1>${1:first}&lt;/h1>"</span><span class="token punctuation">,</span>
      <span class="token string">"    &lt;/div>"</span><span class="token punctuation">,</span>
      <span class="token string">"  )"</span><span class="token punctuation">,</span>
      <span class="token string">"}"</span><span class="token punctuation">,</span>
      <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token string">"export default ${1:${TM_FILENAME_BASE}"</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="imports-alias-→-imp-imd" tabindex="-1"><a class="header-anchor" href="#imports-alias-→-imp-imd" aria-hidden="true">#</a> Imports alias → imp &amp; imd</h1>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">"import"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"key"</span><span class="token operator">:</span> <span class="token string">"import"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"prefix"</span><span class="token operator">:</span> <span class="token string">"imp"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"body"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"import ${2:second} from '${1:first}'"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">"scope"</span><span class="token operator">:</span> <span class="token string">"typescript, typescriptreact, javascript, javascriptreact"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">"importDestructing"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"key"</span><span class="token operator">:</span> <span class="token string">"importDestructing"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"prefix"</span><span class="token operator">:</span> <span class="token string">"imd"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"body"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"import { ${2:second} } from '${1:first}'"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">"scope"</span><span class="token operator">:</span> <span class="token string">"typescript, typescriptreact, javascript, javascriptreact"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="redux-toolkit-→-rxslice" tabindex="-1"><a class="header-anchor" href="#redux-toolkit-→-rxslice" aria-hidden="true">#</a> Redux Toolkit → rxslice</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">"reduxSlice"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"key"</span><span class="token operator">:</span> <span class="token string">"reduxSlice"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"prefix"</span><span class="token operator">:</span> <span class="token string">"rxslice"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"body"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"import { createSlice } from '@reduxjs/toolkit'"</span><span class="token punctuation">,</span>
      <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token string">"const initialState = {"</span><span class="token punctuation">,</span>
      <span class="token string">"  ${3}"</span><span class="token punctuation">,</span>
      <span class="token string">"}"</span><span class="token punctuation">,</span>
      <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token string">"const ${1:${TM_FILENAME_BASE} = createSlice({"</span><span class="token punctuation">,</span>
      <span class="token string">"  name: '${2:second}',"</span><span class="token punctuation">,</span>
      <span class="token string">"  initialState,"</span><span class="token punctuation">,</span>
      <span class="token string">"  reducers: {}"</span><span class="token punctuation">,</span>
      <span class="token string">"});"</span><span class="token punctuation">,</span>
      <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token string">"export const {} = ${1:${TM_FILENAME_BASE}.actions"</span><span class="token punctuation">,</span>
      <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token string">"export default ${1:${TM_FILENAME_BASE}.reducer"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">"scope"</span><span class="token operator">:</span> <span class="token string">"typescript, typescriptreact, javascript, javascriptreact"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
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
<p>상단의 코드 스니펫을 TypeScriptReact.json 파일에 추가하거나 VSCode에서 제 제공해드리는 스니펫 파일을 사용해보세요. GitHub에서 확인하실 수 있습니다.</p>
</div></template>
