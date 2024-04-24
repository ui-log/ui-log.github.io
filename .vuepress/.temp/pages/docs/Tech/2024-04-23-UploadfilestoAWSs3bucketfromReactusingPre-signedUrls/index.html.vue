<template><div><p><img src="@source/docs/Tech/2024-04-23-UploadfilestoAWSs3bucketfromReactusingPre-signedUrls/img/UploadfilestoAWSs3bucketfromReactusingPre-signedUrls_0.png" alt="image"></p>
<h1 id="소개" tabindex="-1"><a class="header-anchor" href="#소개" aria-hidden="true">#</a> 소개</h1>
<p>AWS S3 버킷으로 파일을 업로드할 때는 항상 보안을 고려해야 합니다. AWS SDK를 사용하여 버킷에 직접 업로드하는 것이 일반적인 방법이지만 때로는 보안 위험을 가져올 수 있으며 코드에서 AWS 자격 증명을 노출시킬 수도 있습니다. 이 가이드에서는 React 애플리케이션에서 사전 서명된 URL을 사용하여 S3 버킷으로 파일을 업로드하는 더 안전한 방법을 살펴보겠습니다.</p>
<p>React 애플리케이션에서 AWS S3 버킷으로 파일을 업로드하기 위해 사전 서명된 URL을 사용하는 것은 보안, 확장성 및 성능을 향상시킵니다. 서버 부하와 비용을 줄이는 제한된 액세스 권한 및 특정 만료 시간으로 직접 업로드할 수 있게 해주며, 사용자 경험을 개선하고 애플리케이션 내에서 파일 업로드를 유연하게 처리할 수 있습니다.</p>
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
<h1 id="단계-1-s3-버킷-생성하기" tabindex="-1"><a class="header-anchor" href="#단계-1-s3-버킷-생성하기" aria-hidden="true">#</a> 단계 1: S3 버킷 생성하기</h1>
<p>먼저 AWS 계정에서 S3 버킷을 만들어 보세요. 버킷에 고유한 이름을 선택하도록 해주세요.</p>
<p><img src="@source/docs/Tech/2024-04-23-UploadfilestoAWSs3bucketfromReactusingPre-signedUrls/img/UploadfilestoAWSs3bucketfromReactusingPre-signedUrls_1.png" alt="이미지"></p>
<h1 id="단계-2-s3-버킷에-cors-정책-추가하기" tabindex="-1"><a class="header-anchor" href="#단계-2-s3-버킷에-cors-정책-추가하기" aria-hidden="true">#</a> 단계 2: S3 버킷에 CORS 정책 추가하기</h1>
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
<p>React 프런트엔드에서 S3 버킷으로 객체를 업로드하려면 버킷에 CORS(Cross-Origin Resource Sharing) 정책을 추가해야 합니다. 이 정책은 어떤 출처가 버킷에 액세스할 수 있는지와 허용된 HTTP 메서드를 정의합니다.</p>
<p><img src="@source/docs/Tech/2024-04-23-UploadfilestoAWSs3bucketfromReactusingPre-signedUrls/img/UploadfilestoAWSs3bucketfromReactusingPre-signedUrls_2.png" alt="이미지"></p>
<h1 id="단계-3-람다-함수-생성" tabindex="-1"><a class="header-anchor" href="#단계-3-람다-함수-생성" aria-hidden="true">#</a> 단계 3: 람다 함수 생성</h1>
<p>이제 S3 버킷에 객체를 업로드하기 위한 사전 서명된 URL을 생성하는 람다 함수를 만들어야 합니다. 이 예에서는 .png 파일을 업로드하지만 원하는 파일 유형을 사용할 수 있습니다. 이 함수는 React 애플리케이션에 의해 호출되어 사전 서명된 URL을 제공받아 S3 버킷에 파일을 업로드할 수 있는 임시 액세스를 부여합니다.</p>
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
<p><img src="@source/docs/Tech/2024-04-23-UploadfilestoAWSs3bucketfromReactusingPre-signedUrls/img/UploadfilestoAWSs3bucketfromReactusingPre-signedUrls_3.png" alt="이미지"></p>
<p>버킷을 업로드할 위치를 정의하고 객체에 대한 고유한 키를 생성하는 함수 코드를 추가하세요. 그런 다음 PUT 방법, 1시간의 만료 시간을 사용하여 s3.generate_presigned_url() 함수를 사용합니다. 원하는대로 설정을 구성할 수 있습니다. 여기에 제 함수 코드가 어떻게 보이는지 확인해보세요.</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> json
<span class="token keyword">import</span> boto3
<span class="token keyword">import</span> uuid

<span class="token comment"># S3 클라이언트 구성</span>
s3 <span class="token operator">=</span> boto3<span class="token punctuation">.</span>client<span class="token punctuation">(</span><span class="token string">'s3'</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">lambda_handler</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 환경 변수에서 버킷 이름 가져오기</span>
    bucket_name <span class="token operator">=</span> <span class="token string">'helela-presigned-url-upload'</span>
    key <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f'</span><span class="token interpolation"><span class="token punctuation">{</span>uuid<span class="token punctuation">.</span>uuid4<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">.png'</span></span>      <span class="token comment"># 객체에 대한 고유한 키 생성</span>

    <span class="token comment"># 사전 서명된 URL 생성</span>
    presigned_url <span class="token operator">=</span> s3<span class="token punctuation">.</span>generate_presigned_url<span class="token punctuation">(</span>
        ClientMethod<span class="token operator">=</span><span class="token string">'put_object'</span><span class="token punctuation">,</span>
        Params<span class="token operator">=</span><span class="token punctuation">{</span>
            <span class="token string">'Bucket'</span><span class="token punctuation">:</span> bucket_name<span class="token punctuation">,</span> 
            <span class="token string">'Key'</span><span class="token punctuation">:</span> key<span class="token punctuation">,</span>
            <span class="token string">'ContentType'</span><span class="token punctuation">:</span> <span class="token string">'application/png'</span><span class="token punctuation">,</span>  <span class="token comment"># .png용 Content-Type 설정</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        ExpiresIn<span class="token operator">=</span><span class="token number">3600</span><span class="token punctuation">,</span>    <span class="token comment"># URL의 만료 시간(초)을 지정합니다. 여기서는 1시간으로 설정됨</span>
        HttpMethod<span class="token operator">=</span><span class="token string">'PUT'</span>   <span class="token comment"># URL에서 PUT 요청만 허용</span>
    <span class="token punctuation">)</span>

    <span class="token comment"># 응답 작성</span>
    response <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">'statusCode'</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
        <span class="token string">'headers'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token string">'Access-Control-Allow-Origin'</span><span class="token punctuation">:</span> <span class="token string">'http://localhost:3000'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string">'body'</span><span class="token punctuation">:</span> json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token string">'presignedUrl'</span><span class="token punctuation">:</span> presigned_url<span class="token punctuation">,</span>
            <span class="token string">'key'</span><span class="token punctuation">:</span> key
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> response
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="단계-4-lambda-함수의-iam-역할에-putobject-정책-추가" tabindex="-1"><a class="header-anchor" href="#단계-4-lambda-함수의-iam-역할에-putobject-정책-추가" aria-hidden="true">#</a> 단계 4: Lambda 함수의 IAM 역할에 PutObject 정책 추가</h2>
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
<p>Lambda 함수가 클라이언트를 대신하여 S3 버킷에 객체를 업로드할 수 있도록하려면 Lambda 함수의 IAM 역할에 PutObject 정책을 추가해야합니다. 이 정책은 사전 서명 된 URL이 S3 버킷에 객체를 쓸 수있는 필요한 권한을 부여합니다.</p>
<p>Lambda 함수의 Configuration/Permissions로 이동하고 실행 역할 이름을 클릭하면 IAM 역할 콘솔로 이동합니다.</p>
<p><img src="@source/docs/Tech/2024-04-23-UploadfilestoAWSs3bucketfromReactusingPre-signedUrls/img/UploadfilestoAWSs3bucketfromReactusingPre-signedUrls_4.png" alt="이미지"></p>
<p>Add permissions을 클릭한 후 인라인 정책을 생성하세요.</p>
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
<img src="@source/docs/Tech/2024-04-23-UploadfilestoAWSs3bucketfromReactusingPre-signedUrls/img/UploadfilestoAWSs3bucketfromReactusingPre-signedUrls_5.png" />
<p>JSON을 선택하고, 당신만의 S3 버킷 ARN과 함께 정책을 붙여넣으세요.</p>
<img src="@source/docs/Tech/2024-04-23-UploadfilestoAWSs3bucketfromReactusingPre-signedUrls/img/UploadfilestoAWSs3bucketfromReactusingPre-signedUrls_6.png" />
<p>고유한 정책명을 추가하고 정책을 생성하세요.</p>
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
<img src="@source/docs/Tech/2024-04-23-UploadfilestoAWSs3bucketfromReactusingPre-signedUrls/img/UploadfilestoAWSs3bucketfromReactusingPre-signedUrls_7.png" />
<h1 id="단계-5-api-gateway-트리거-추가" tabindex="-1"><a class="header-anchor" href="#단계-5-api-gateway-트리거-추가" aria-hidden="true">#</a> 단계 5: API Gateway 트리거 추가</h1>
<p>API Gateway를 사용하여 사전 서명된 URL을 생성하는 Lambda 함수를 호출하는 트리거로 사용하는 것은 보안 강화, 확장성, 맞춤화, 속도 제한 그리고 시효적인 Lambda 통합과 같은 이점을 제공합니다.</p>
<p>Lambda 함수에 트리거로 API Gateway를 구성하세요. 이를 통해 React 애플리케이션이 Lambda 함수를 HTTP를 통해 호출하고 파일 업로드를 위한 사전 서명된 URL을 얻을 수 있습니다.</p>
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
<p>API Gateway로 이동해서 HTTP API를 만들어보세요.</p>
<p><img src="@source/docs/Tech/2024-04-23-UploadfilestoAWSs3bucketfromReactusingPre-signedUrls/img/UploadfilestoAWSs3bucketfromReactusingPre-signedUrls_8.png" alt="image"></p>
<p>이 API를 람다 함수의 트리거로 설정하려면 람다 함수의 ARN을 붙여넣으세요.</p>
<p><img src="@source/docs/Tech/2024-04-23-UploadfilestoAWSs3bucketfromReactusingPre-signedUrls/img/UploadfilestoAWSs3bucketfromReactusingPre-signedUrls_9.png" alt="image"></p>
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
<p>테이블 태그를 Markdown 형식으로 변경해주세요.</p>
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
<p>API가 생성된 후, CORS 정책을 설정하여 http://localhost:3000 (또는 애플리케이션 호스트)에서의 요청만 허용하도록 구성하세요.</p>
<p><img src="@source/docs/Tech/2024-04-23-UploadfilestoAWSs3bucketfromReactusingPre-signedUrls/img/UploadfilestoAWSs3bucketfromReactusingPre-signedUrls_12.png" alt="이미지"></p>
<p>Lambda 기능 페이지에서 API Gateway Lambda 트리거의 생성을 확인하세요.</p>
<p><img src="@source/docs/Tech/2024-04-23-UploadfilestoAWSs3bucketfromReactusingPre-signedUrls/img/UploadfilestoAWSs3bucketfromReactusingPre-signedUrls_13.png" alt="이미지"></p>
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
<h1 id="단계-6-react-프론트엔드에서-업로드-테스트하기" tabindex="-1"><a class="header-anchor" href="#단계-6-react-프론트엔드에서-업로드-테스트하기" aria-hidden="true">#</a> 단계 6: React 프론트엔드에서 업로드 테스트하기:</h1>
<p>마지막으로 선택한 파일 업로드 기능을 React 애플리케이션에 통합하세요. HTTP 요청을 하기 위해 Axios 라이브러리를 사용하여 API Gateway 엔드포인트에 요청을 보내 Lambda 함수를 호출하고 사전 서명된 URL을 반환합니다. 그런 다음 이 URL을 사용하여 클라이언트 측에서 직접 S3 버킷에 선택한 파일을 업로드합니다.</p>
<p>우리는 axios 라이브러리를 사용하여 사전 서명된 URL을 받아오고 이를 사용하여 파일을 업로드할 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install axios    
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
<p>App.js를 편집하고 다음 코드를 붙여넣으세요. API_ENDPOINT를 본인의 API 엔드포인트로 바꿔주세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"./App.css"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">"axios"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>selectedFile<span class="token punctuation">,</span> setSelectedFile<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>uploadProgress<span class="token punctuation">,</span> setUploadProgress<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleFileChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setSelectedFile</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// API Gateway url to invoke function to generate presigned url</span>
  <span class="token keyword">const</span> <span class="token constant">API_ENDPOINT</span> <span class="token operator">=</span> <span class="token string">"https://your-api-endpoint-here/route"</span><span class="token punctuation">;</span>

  <span class="token comment">// Function to generate the presigned url</span>
  <span class="token keyword">const</span> <span class="token function-variable function">getPresignedUrl</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// GET request: presigned URL</span>
    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">"GET"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token constant">API_ENDPOINT</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> presignedUrl <span class="token operator">=</span> response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>presignedUrl<span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>presignedUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> presignedUrl<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// Function to upload the selected file using the generated presigned url</span>
  <span class="token keyword">const</span> <span class="token function-variable function">uploadToPresignedUrl</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">presignedUrl</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// Upload file to pre-signed URL</span>
    <span class="token keyword">const</span> uploadResponse <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>presignedUrl<span class="token punctuation">,</span> selectedFile<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">"Content-Type"</span><span class="token operator">:</span> <span class="token string">"application/png"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function-variable function">onUploadProgress</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">progressEvent</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> percentCompleted <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>
          <span class="token punctuation">(</span>progressEvent<span class="token punctuation">.</span>loaded <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token operator">/</span> progressEvent<span class="token punctuation">.</span>total
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setUploadProgress</span><span class="token punctuation">(</span>percentCompleted<span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Upload Progress: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>percentCompleted<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">%</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>uploadResponse<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// Function to orchestrate the upload process</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleUpload</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token comment">// Ensure a file is selected</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>selectedFile<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"No file selected."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">const</span> presignedUrl <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getPresignedUrl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">uploadToPresignedUrl</span><span class="token punctuation">(</span>presignedUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Handle error</span>
      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"Error uploading file:"</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"App"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>파일 선택 컴포넌트<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"file"</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span>handleFileChange<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleUpload<span class="token punctuation">}</span><span class="token operator">></span>업로드<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>애플리케이션을 실행하고 테스트하세요.</p>
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
<img src="@source/docs/Tech/2024-04-23-UploadfilestoAWSs3bucketfromReactusingPre-signedUrls/img/UploadfilestoAWSs3bucketfromReactusingPre-signedUrls_14.png" />
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>위 단계를 따르면 사전 서명된 URL을 사용하여 React 애플리케이션에서 안전하게 파일을 AWS S3 버킷에 업로드할 수 있습니다. 이 접근 방식은 S3로의 직접 업로드와 관련된 보안 위험을 완화하며 애플리케이션에서 파일 업로드를 효율적으로 처리할 수 있는 확장 가능한 솔루션을 제공합니다.</p>
</div></template>
