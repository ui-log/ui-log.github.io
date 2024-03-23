<template><div><img src="@source/docs/Tech/2024-03-23-UsingReactJsGraphQLAPINestjsTypeORM/img/Using-ReactJs-GraphQL-API-Nestjs-TypeORM_0.png" />
<p>React &amp; GraphQL을 시작해 보겠습니다. 먼저 @apollo/client를 설치해봅시다.</p>
<p>우리는 React 앱을 apollo graphql client로 감쌀 것입니다. 제 Apollo GraphQL 클라이언트는 아래와 같이 보입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ApolloProvider<span class="token punctuation">,</span> ApolloClient<span class="token punctuation">,</span> InMemoryCache <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@apollo/client"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> apolloGraphQLClient <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ApolloClient</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">uri</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">GRAPHQL_URL</span><span class="token punctuation">,</span> <span class="token comment">// 여러분의 GraphQL API 엔드포인트로 변경해주세요. 저의 경우에는 서버 URL입니다.</span>
  <span class="token literal-property property">cache</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">InMemoryCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> apolloGraphQLClient<span class="token punctuation">;</span>
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
<p>app.js 파일이나 부모 구성 요소를 apollo client로 래핑해보세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ApolloProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@apollo/client"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> apolloGraphQlClient <span class="token keyword">from</span> <span class="token string">"./GraphQL/DataAccessGraphQLClient"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>ApolloProvider client<span class="token operator">=</span><span class="token punctuation">{</span>apolloGraphQlClient<span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Routes<span class="token operator">></span>
          <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/login"</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Login <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/home"</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>AppContent page<span class="token operator">=</span><span class="token string">"workbook"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Routes<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ApolloProvider<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>워크스페이스를 가져오고 워크스페이스를 추가하는 쿼리를 작성해봅시다. 워크스페이스는 우리 앱에 있는 엔티티입니다. Queries.js 파일을 만들어 다음 쿼리를 작성해보세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">FETCH_WORKSPACES</span> <span class="token operator">=</span> gql<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
 query fetchWorkSpaces($user_email: String!){ //쿼리에 필요한 입력 매개변수
   fetchWorkSpaces(   //실제 쿼리와 변수들을 포함
  user_email: $user_email
 ) 
 {
   id  // 반환할 필드들
   name
   user_email
   created_date
   updated_date
 }
 }
</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">CREATE_WORKSPACE</span> <span class="token operator">=</span> gql<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
  query createWorkspace($workspace: WorkspaceDto!) {
    createWorkspace(workspace: $workspace) {
      id
    }
  }
</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>당신의 workspace.js에서는 이 gql에서 데이터를 가져올 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useQuery <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@apollo/client"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">FETCH_WORKSPACES</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../../GraphQL/Queries"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">WorkSpace</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> loading<span class="token punctuation">,</span> error<span class="token punctuation">,</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useQuery</span><span class="token punctuation">(</span><span class="token constant">FETCH_WORKSPACES</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">variables</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">user_email</span><span class="token operator">:</span> props<span class="token punctuation">.</span>userEmail<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span>loading <span class="token operator">?</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>Loading<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span> <span class="token operator">:</span> <span class="token operator">&lt;</span>WorkSpaceTree myWorkspaces<span class="token operator">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>또는 이 쿼리를 함수에서 호출하려면</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">fetchWorkspaces</span><span class="token operator">=</span> <span class="token keyword">async</span><span class="token punctuation">(</span><span class="token parameter">user_email</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> apolloGraphQlClient<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'../../GraphQL/DataAccessGraphQLClient.js'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>default <span class="token comment">//이것은 지연로딩입니다. 파일 상단에서도 가져올 수 있습니다.</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span><span class="token constant">FETCH_WORKSPACES</span><span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"../../GraphQL/Queries"</span><span class="token punctuation">)</span> <span class="token comment">//지연로딩</span>
    <span class="token keyword">let</span> workspacevariables<span class="token operator">=</span><span class="token punctuation">{</span>
        <span class="token literal-property property">user_email</span><span class="token operator">:</span>user_email<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> workspaceResponse <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> apolloGraphQlClient<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token constant">CREATE_FOLDER</span><span class="token punctuation">,</span> <span class="token literal-property property">variables</span><span class="token operator">:</span><span class="token punctuation">{</span>workspacevariables <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">createWorkspace</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> workspace <span class="token operator">=</span> <span class="token punctuation">{</span>
         <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token function">uuidv4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
         <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"New workspace"</span><span class="token punctuation">,</span>
         <span class="token string-property property">"user_email"</span><span class="token operator">:</span> <span class="token string">"jayant@gmail.com"</span><span class="token punctuation">,</span>
         <span class="token string-property property">"isParent"</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
         <span class="token literal-property property">created_date</span><span class="token operator">:</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
         <span class="token literal-property property">updated_date</span><span class="token operator">:</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">const</span> apolloGraphQlClient<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'../../GraphQL/DataAccessGraphQLClient.js'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>default
        <span class="token keyword">const</span> <span class="token punctuation">{</span><span class="token constant">CREATE_WORKSPACE</span><span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"../../GraphQL/Queries"</span><span class="token punctuation">)</span>
        <span class="token keyword">const</span> variables <span class="token operator">=</span> <span class="token punctuation">{</span> workspace <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> apolloGraphQlClient<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token constant">CREATE_WORKSPACE</span><span class="token punctuation">,</span> variables <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"error in creating workspace"</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
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
<p>React 부분 코드는 끝났어요. 이제 nestjs 로 넘어가 볼게요.</p>
<p>Postgres 데이터베이스가 있지만 TypeORM을 통해 데이터를 가져오고 업데이트할 거에요. @nestjs/typeorm, @nestjs/apollo, @nestjs/graphql 을 설치해주세요.</p>
<p>그럼 요청 응답 graphql DTO 및 TypeORM 엔티티를 만들어보는 게 시작이에요.</p>
<p>workspace.dto.ts - 이 파일은 워크스페이스를 만들 때 사용할 거에요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ObjectType<span class="token punctuation">,</span> Field<span class="token punctuation">,</span> InputType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@nestjs/graphql"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> IsBoolean<span class="token punctuation">,</span> IsString<span class="token punctuation">,</span> IsNotEmpty<span class="token punctuation">,</span> IsObject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"class-validator"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> GraphQLJSONObject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"graphql-type-json"</span><span class="token punctuation">;</span>
@<span class="token function">InputType</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">WorkspaceDto</span> <span class="token punctuation">{</span>
  @<span class="token function">Field</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Date<span class="token punctuation">)</span>
  @<span class="token function">IsBoolean</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token literal-property property">created_date</span><span class="token operator">:</span> Date<span class="token punctuation">;</span>
  @<span class="token function">Field</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Date<span class="token punctuation">)</span>
  @<span class="token function">IsBoolean</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token literal-property property">updated_date</span><span class="token operator">:</span> Date<span class="token punctuation">;</span>
  @<span class="token function">Field</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> String<span class="token punctuation">)</span>
  @<span class="token function">IsNotEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  @<span class="token function">IsString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  @<span class="token function">Field</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> String<span class="token punctuation">)</span>
  @<span class="token function">IsNotEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  @<span class="token function">IsString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token literal-property property">user_email</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  @<span class="token function">Field</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> String<span class="token punctuation">)</span>
  @<span class="token function">IsNotEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  @<span class="token function">IsString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  @<span class="token function">Field</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Boolean<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">defaultValue</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  @<span class="token function">IsBoolean</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token literal-property property">isParent</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>workspace.response.dto.ts- 응답 유형을 위한 Response 타입</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ObjectType<span class="token punctuation">,</span> Field<span class="token punctuation">,</span> InputType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@nestjs/graphql"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> IsBoolean<span class="token punctuation">,</span> IsString<span class="token punctuation">,</span> IsNotEmpty<span class="token punctuation">,</span> IsObject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"class-validator"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> GraphQLJSONObject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"graphql-type-json"</span><span class="token punctuation">;</span>

@<span class="token function">ObjectType</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">WorkspaceResponseDto</span> <span class="token punctuation">{</span>
  @<span class="token function">Field</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Date<span class="token punctuation">)</span>
  @<span class="token function">IsBoolean</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token literal-property property">created_date</span><span class="token operator">:</span> Date<span class="token punctuation">;</span>

  @<span class="token function">Field</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Date<span class="token punctuation">)</span>
  @<span class="token function">IsBoolean</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token literal-property property">updated_date</span><span class="token operator">:</span> Date<span class="token punctuation">;</span>

  @<span class="token function">Field</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> String<span class="token punctuation">)</span>
  @<span class="token function">IsNotEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  @<span class="token function">IsString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> string<span class="token punctuation">;</span>

  @<span class="token function">Field</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> String<span class="token punctuation">)</span>
  @<span class="token function">IsNotEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  @<span class="token function">IsString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token literal-property property">user_email</span><span class="token operator">:</span> string<span class="token punctuation">;</span>

  @<span class="token function">Field</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> String<span class="token punctuation">)</span>
  @<span class="token function">IsNotEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  @<span class="token function">IsString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>

  @<span class="token function">Field</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Boolean<span class="token punctuation">)</span>
  @<span class="token function">IsBoolean</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token literal-property property">isParent</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>workspace.entity.ts에 대한 TypeORM 및 postgres DB```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Entity<span class="token punctuation">,</span> PrimaryGeneratedColumn<span class="token punctuation">,</span> Column<span class="token punctuation">,</span> PrimaryColumn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"typeorm"</span><span class="token punctuation">;</span>

@<span class="token function">Entity</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">workspaces</span> <span class="token punctuation">{</span>
  @<span class="token function">PrimaryColumn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  @<span class="token function">Column</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"timestamp"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token literal-property property">created_date</span><span class="token operator">:</span> Date<span class="token punctuation">;</span>
  @<span class="token function">Column</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"timestamp"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token literal-property property">updated_date</span><span class="token operator">:</span> Date<span class="token punctuation">;</span>
  @<span class="token function">Column</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">nullable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token literal-property property">isParent</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  @<span class="token function">Column</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">nullable</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token literal-property property">user_email</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  @<span class="token function">Column</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">nullable</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>NestJS에 워크스페이스를 위한 모듈을 생성해야 하며, 쿼리와 뮤테이션을 해결하는 GraphQL 리졸버가 필요합니다. 마지막으로 비즈니스 로직을 다루는 workspace.service.ts 라는 서비스 파일을 만들어야 합니다.</p>
<p>workspace.service.ts</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Injectable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@nestjs/common'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> InjectRepository <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@nestjs/typeorm'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Repository <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'typeorm'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> workspaces <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./workspace.entity'</span><span class="token punctuation">;</span>

@<span class="token function">Injectable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">WorkspaceService</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> readonly users<span class="token operator">:</span> any<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>
    <span class="token parameter">@<span class="token function">InjectRepository</span><span class="token punctuation">(</span>workspaces<span class="token punctuation">)</span>
    <span class="token keyword">private</span> readonly workspaceRepository<span class="token operator">:</span> Repository<span class="token operator">&lt;</span>workspaces<span class="token operator">></span><span class="token punctuation">,</span></span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token keyword">async</span> <span class="token function">fetchWorkspaces</span><span class="token punctuation">(</span>user_email<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> Promise<span class="token operator">&lt;</span>workspaces<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token comment">// 내 워크스페이스를 불러오는 중</span>
      <span class="token keyword">const</span> savedWorkspaces <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>workspaceRepository<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span> user_email <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> savedWorkspaces<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"연결 에러"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">async</span> <span class="token function">createWorkspace</span><span class="token punctuation">(</span>workspace<span class="token operator">:</span> workspaces<span class="token punctuation">)</span><span class="token operator">:</span> Promise<span class="token operator">&lt;</span>any<span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> savedWorkspace <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>workspaceRepository<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>workspace<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> savedWorkspace<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"연결 에러"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">async</span> <span class="token function">deleteWorkspace</span><span class="token punctuation">(</span>workspace_id<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> Promise<span class="token operator">&lt;</span>any<span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> savedWorkspace <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>workspaceRepository<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>workspace_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> savedWorkspace<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"연결 에러"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>workspace.resolver.ts</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Args<span class="token punctuation">,</span> Mutation<span class="token punctuation">,</span> Query<span class="token punctuation">,</span> Resolver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@nestjs/graphql"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> WorkspaceService <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./workspace.service"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> WorkspaceDto <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./workspace.dto"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> WorkspaceResponseDto <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./dto/workspaceresponse.dto"</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Resolver</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">WorkspaceResolver</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> <span class="token keyword">readonly</span> workspaceService<span class="token operator">:</span> WorkspaceService<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Query</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> WorkspaceResponseDto<span class="token punctuation">)</span>
  <span class="token keyword">async</span> <span class="token function">createWorkspace</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Args</span></span><span class="token punctuation">(</span><span class="token string">"workspace"</span><span class="token punctuation">)</span> workspace<span class="token operator">:</span> WorkspaceDto<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WorkspaceResponseDto<span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> records <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>workspaceService<span class="token punctuation">.</span><span class="token function">createWorkspace</span><span class="token punctuation">(</span>workspace<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> records<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Query</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span>WorkspaceResponseDto<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token keyword">async</span> <span class="token function">fetchWorkSpaces</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Args</span></span><span class="token punctuation">(</span><span class="token string">"user_email"</span><span class="token punctuation">)</span> user_email<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WorkspaceResponseDto<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> records <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>workspaceService<span class="token punctuation">.</span><span class="token function">fetchWorkspaces</span><span class="token punctuation">(</span>user_email<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> records<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>workspace.module.ts</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> WorkspaceService <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./workspace.service"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> WorkspaceResolver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./workspace.resolver"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> GraphQLModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@nestjs/graphql"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ApolloDriver<span class="token punctuation">,</span> ApolloDriverConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@nestjs/apollo"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> WorkspaceDto <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./workspace.dto"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> TypeOrmModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@nestjs/typeorm"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> workspaces <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./workspace.entity"</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Module</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  imports<span class="token operator">:</span> <span class="token punctuation">[</span>
    GraphQLModule<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">forRoot</span><span class="token generic class-name"><span class="token operator">&lt;</span>ApolloDriverConfig<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      driver<span class="token operator">:</span> ApolloDriver<span class="token punctuation">,</span>
      autoSchemaFile<span class="token operator">:</span> <span class="token string">"schema.gql"</span><span class="token punctuation">,</span> <span class="token comment">// The output file for the generated schema</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    TypeOrmModule<span class="token punctuation">.</span><span class="token function">forFeature</span><span class="token punctuation">(</span><span class="token punctuation">[</span>workspaces<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  providers<span class="token operator">:</span> <span class="token punctuation">[</span>WorkspaceService<span class="token punctuation">,</span> WorkspaceResolver<span class="token punctuation">]</span><span class="token punctuation">,</span>
  controllers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">WorkspaceModule</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
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
<p>그리고 마지막으로, TypeORM에서 데이터베이스를 등록하고 NestJS의 메인 모듈인 앱에서 이 워크스페이스 모듈을 가져옵니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> TypeOrmModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@nestjs/typeorm"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> WorkspaceModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./modules/workspace/workspace.module"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> workspaces <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./modules/workspace/workspace.entity"</span><span class="token punctuation">;</span>

@<span class="token function">Module</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">imports</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    TypeOrmModule<span class="token punctuation">.</span><span class="token function">forRoot</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"postgres"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">host</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">POSTGRES_HOST</span><span class="token punctuation">,</span>
      <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">POSTGRES_PORT</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">26257</span><span class="token punctuation">,</span>
      <span class="token literal-property property">username</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">POSTGRES_USER</span><span class="token punctuation">,</span>
      <span class="token literal-property property">password</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">POSTGRES_PASSWORD</span><span class="token punctuation">,</span>
      <span class="token literal-property property">database</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">POSTGRES_DATABASE</span><span class="token punctuation">,</span>
      <span class="token literal-property property">ssl</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">rejectUnauthorized</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// SSL 인증서 확인 무시 (운영에는 권장하지 않음)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">entities</span><span class="token operator">:</span> <span class="token punctuation">[</span>workspaces<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 여기에 엔티티 추가</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    WorkspaceModule<span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">controllers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">providers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">exports</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppModule</span> <span class="token keyword">implements</span> <span class="token class-name">NestModule</span> <span class="token punctuation">{</span>
  <span class="token function">configure</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">consumer</span><span class="token operator">:</span> MiddlewareConsumer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">consumer</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>CacheControlMiddleware<span class="token punctuation">,</span> FrontendMiddleware<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forRoutes</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">"/**"</span><span class="token punctuation">,</span> <span class="token literal-property property">method</span><span class="token operator">:</span> RequestMethod<span class="token punctuation">.</span><span class="token constant">ALL</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
</div></template>
