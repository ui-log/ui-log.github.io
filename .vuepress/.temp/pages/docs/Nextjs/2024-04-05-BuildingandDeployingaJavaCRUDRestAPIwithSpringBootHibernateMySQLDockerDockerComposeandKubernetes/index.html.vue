<template><div><p>소개</p>
<p>자바 CRUD (Create, Read, Update, Delete) Rest API를 개발하는 포괄적인 안내서에 오신 것을 환영합니다. 이 프로젝트에서는 Spring Boot, Hibernate, MySQL, Docker 및 Docker Compose를 통합하여 RESTful 서비스를 통해 데이터를 효과적으로 관리할 수 있는 견고하고 확장 가능한 솔루션을 만드는 방법에 대해 설명하겠습니다.</p>
<p>다양성으로 유명한 자바와 자바 애플리케이션 개발을 간소화하는 데 유명한 Spring Boot이 우리 API의 백본 역할을 할 것입니다. MySQL 데이터베이스와의 원활한 상호 작용을 용이하게 만들기 위해 널리 사용되는 ORM(객체 관계 매핑) 프레임워크인 Hibernate을 사용할 것입니다.</p>
<p>Docker 및 Docker Compose의 통합을 통해 프로젝트가 더 나아가서 휴대성, 일관성 및 다양한 환경에서의 배포 용이성을 보장할 것입니다. 게다가 Kubernetes를 사용하여 배포 측면을 탐구하여 더 많은 확장 가능성과 유지 관리성을 강화할 것입니다.</p>
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
<p>이 안내서는 최신 기술을 사용하여 견고한 CRUD API를 성공적으로 구현하는 데 도움이 되는 단계별 지침, 모범 사례 및 통찰을 제공합니다.</p>
<p>다음은 우리가 진행할 단계입니다:</p>
<ul>
<li>Spring Boot, Spring Web, Spring Data 및 Hibernate을 사용하여 Java 애플리케이션 만들기</li>
<li>로컬 머신에 MySQL Server 및 MySQL Workbench 설치</li>
<li>Dockerfile과 docker-compose.yml 파일을 작성하여 Java 애플리케이션을 도커화하고 데이터베이스를 실행</li>
<li>Maven을 사용하여 Java 앱 빌드, Docker 이미지 빌드 및 Docker Compose를 사용하여 컨테이너 실행하기. 또한 배포를 위해 minikube 사용</li>
<li>Postman 및 curl로 애플리케이션 테스트하기</li>
</ul>
<p>요구사항:</p>
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
<li>스프링 이니셜라이저: Spring Initializr</li>
<li>자바: Oracle에서 Java 다운로드 | Oracle</li>
<li>메이븐: Apache Maven 설치하기 | Maven</li>
<li>자바 IDE (IntelliJ): IntelliJ IDEA 다운로드 — 주요 Java 및 Kotlin IDE (jetbrains.com)</li>
<li>포스트맨: 무료로 시작하려면 Postman 다운로드하기 | Get Started for Free</li>
<li>MySQL 서버: MySQL :: 다운로드 시작하기 | Begin Your Download</li>
<li>MySQL Workbench: MySQL :: MySQL Workbench</li>
<li>Docker 및 Minikube (https://github.com/midejoe/Install-DevOps-Tools).</li>
</ul>
<p>새로운 Java Spring Boot 애플리케이션을 생성해보세요.</p>
<p>저는 Java IDE를 사용하여 애플리케이션을 빌드했습니다. 먼저 생성될 레이어를 정의해봅시다.</p>
<ul>
<li>컨트롤러 레이어: 이는 클라이언트로부터의 모든 사용자 요청을 처리합니다.</li>
<li>서비스 레이어: 비즈니스 로직을 처리합니다.</li>
<li>레포지토리 레이어: 데이터베이스와 통신하고 클라이언트에게 응답을 보냅니다.</li>
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
<p>알림: 소스 코드는 내 Github 저장소로 이동하세요.</p>
<p>단계 1: 스프링 이니셜라이저를 사용하여 스켈레톤 스프링부트 프로젝트를 생성하세요. 스프링 이니셜라이저 링크로 이동하고 아래 세부 사항로 채우세요:</p>
<p>Maven 프로젝트 선택;
언어: java
Spring Boot: 최신 버전
프로젝트 메타데이터- 그룹 (참고: 선호하는 이름을 제공하세요)
Artifact (참고: 선호하는 이름을 제공하세요. 예: tutorial)
Java 버전: 8
의존성 추가: Spring Web (엔드포인트 노출에 사용됨)
MySQL Driver: (MySQL 데이터베이스를 사용하기 때문에)
Spring Data JPA: 데이터베이스와 통신하기 위해
Lombok: 세터와 게터를 정의하기 위해</p>
<p><img src="@source/docs/Nextjs/2024-04-05-BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes/img/BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes_0.png" alt="이미지"></p>
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
<li>&quot;Generate&quot;을 클릭하여 패키지를 생성하고 원하는 폴더에 저장하세요.</li>
<li>zip 폴더가 생성됩니다. IntelliJ에서 해당 폴더를 가져오려면 IDE에서 가져오기 폴더를 클릭하면 됩니다.</li>
</ul>
<p>단계 2: IntelliJ에서 패키지 만들기:</p>
<ul>
<li>튜토리얼/src/java/com.joesalt 디렉토리로 이동합니다. 오른쪽 클릭하여 새로 만들기를 선택하고 패키지를 검색하여 controller라는 패키지를 만드세요.</li>
<li>이와 같은 방법으로 service, repository 및 model이라는 다른 패키지를 만드세요. 이렇게 하면 총 4개의 패키지가 생성됩니다.</li>
</ul>
<p>Model 패키지에 대해: 모델 패키지를 클릭하고 Product라는 Java 클래스를 선택하여 클래스를 생성하세요. 아래 코드를 입력하세요:</p>
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
<p>위의 코드는 데이터베이스의 엔터티를 나타내는 Product라는 Java 클래스를 정의합니다. 테이블의 열에 해당하는 필드(id, productName, color, price)가 Jakarta Persistence annotations(@Entity, @Table, @Id, @GeneratedValue, @Column)으로 주석이 달려 있으며, Lombok의 @Data 어노테이션을 사용하여 보일러플레이트 코드를 자동 생성합니다. 이 데이터베이스의 관련 테이블의 이름은 &quot;product_inventory&quot;입니다.</p>
<p>컨트롤러 패키지: HealthController, ProductController라는 두 개의 클래스를 만드세요. 아래 코드를 입력하세요 (HealthController.java)</p>
<p>위의 코드는 두 개의 엔드포인트(&quot;/&quot; 및 &quot;/health&quot;)를 갖는 Spring Boot REST 컨트롤러인 HealthController를 정의합니다. 각각은 접근 시 HTTP 200 OK 상태로 응답합니다.</p>
<p>(ProductController.java)</p>
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
<p>위의 코드는 제품을 관리하기 위한 CRUD 작업 (생성, 읽기, 업데이트, 삭제)를 수행하는 Spring Boot REST 컨트롤러인 ProductController를 정의합니다. 이 컨트롤러는 제품을 삽입, 검색, 업데이트, 삭제하는 등 데이터베이스 작업을 수행하기 위해 ProductService와 상호 작용합니다. 엔드포인트에는 제품을 저장하고, ID로 단일 제품을 가져오고, 모든 제품을 나열하고, 제품을 업데이트하고, 제품을 삭제하며, SQL 문을 사용하여 이름으로 제품을 검색하는 기능이 포함되어 있습니다.</p>
<p>그 다음은 서비스 패키지: 비즈니스 로직을 처리하는 ProductService.java 클래스를 만듭니다. 아래 코드를 입력하세요:</p>
<p>위의 코드는 제품 관리를 위한 비즈니스 로직을 캡슐화하는 Spring Boot 서비스 클래스인 ProductService를 정의합니다. 이 클래스는 데이터베이스와 상호 작용하기 위해 ProductRepository를 사용하며, 제품을 저장, 검색, 나열, 업데이트, 삭제하고, 리포지토리의 메소드를 사용하여 이름으로 제품을 검색하는 기능을 제공합니다. 추가적으로, 해당 서비스는 특정 ID의 제품을 찾을 수 없는 경우에 대한 예외 처리를 수행합니다.</p>
<p>다음으로, 리포지토리 패키지를 생성합니다: 리포지토리 패키지에서 인터페이스를 만들고, 해당 패키지에서 인터페이스를 선택한 후 ProductRepository로 이름을 지정하세요. 데이터베이스와 상호 작용하기 위한 기본 코드입니다. 아래 코드를 입력하세요:</p>
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
<p>위의 코드는 ProductRepository라는 Spring Data JPA 리포지토리 인터페이스를 정의합니다. ProductRepository는 JpaRepository를 확장합니다. 이 인터페이스는 Product 엔티티에 대한 기본 CRUD 작업을 제공하며 @Query로 주석이 달린 getProductsByName이라는 사용자 정의 메소드를 포함하고 있습니다. 이를 통해 네이티브 SQL 쿼리를 사용하여 이름별 제품 목록을 검색할 수 있습니다.</p>
<p>단계 3: 로컬 머신에 MySQL 서버와 MySQL Workbench를 설치하세요. 제공된 링크를 사용하여 둘 모두를 설치 및 구성하세요. (사용자 이름과 암호를 생성하세요)</p>
<ul>
<li>Workbench에서 아래의 코드를 입력하여 데이터베이스를 생성하세요:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">CREATE</span> database store_database
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
<ul>
<li>다음으로 'product_inventory' 테이블을 생성하고 아래와 같이 필요한 필드를 정의하세요:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>use store_database<span class="token punctuation">;</span>
<span class="token constant">CREATE</span> <span class="token constant">TABLE</span> <span class="token constant">IF</span> <span class="token constant">NOT</span> <span class="token constant">EXISTS</span> <span class="token function">product_inventory</span>
<span class="token punctuation">(</span>id <span class="token constant">BIGINT</span> <span class="token constant">NOT</span> <span class="token constant">NULL</span> <span class="token constant">PRIMARY</span> <span class="token constant">KEY</span> auto_increment<span class="token punctuation">,</span>
product_name <span class="token constant">VARCHAR</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span> not <span class="token keyword">null</span><span class="token punctuation">,</span>
color <span class="token function">varchar</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
price <span class="token constant">INT</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/Nextjs/2024-04-05-BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes/img/BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes_1.png" />
<p>그 다음으로 자바 코드에서 데이터베이스 이름과 테이블 이름을 지정하세요. 리소스 폴더로 이동하여 'application.properties' 파일을 찾고 아래 코드를 입력하세요. 참고: 데이터베이스 사용자 이름과 암호를 입력하세요.</p>
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
<p><code v-pre>application.properties</code> 파일은 SQL 데이터베이스에 연결되는 Spring Boot 애플리케이션을 위해 데이터 소스와 ORM 프레임워크를 구성하는 데 사용됩니다.</p>
<p>단계 4: 애플리케이션 테스트하기</p>
<ul>
<li>IntelliJ로 돌아가서 <code v-pre>TutorialApplication.java</code> 파일을 선택하고 왼쪽에 있는 재생 버튼(lime 7)을 클릭하세요. 아래 이미지 참조:</li>
</ul>
<p><img src="@source/docs/Nextjs/2024-04-05-BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes/img/BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes_2.png" alt="image"></p>
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
<li>Postman에서 경로를 테스트하세요.</li>
</ul>
<p>건강 경로를 테스트하세요: 아래 내용을 입력하세요</p>
<p><img src="@source/docs/Nextjs/2024-04-05-BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes/img/BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes_3.png" alt="이미지"></p>
<p>200 응답이 반환됩니다.</p>
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
<p>새 제품 추가: 아래와 같은 본문을 요청 본문으로 하는 POST 요청을 통해 localhost:8080/product에 새 제품을 데이터베이스에 추가해보세요:</p>
<p><img src="@source/docs/Nextjs/2024-04-05-BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes/img/BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes_4.png" alt="이미지1"></p>
<p><img src="@source/docs/Nextjs/2024-04-05-BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes/img/BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes_5.png" alt="이미지2"></p>
<p>데이터베이스를 확인해보세요:</p>
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
<p><img src="@source/docs/Nextjs/2024-04-05-BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes/img/BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes_6.png" alt="이미지"></p>
<p>단계 5: 이제 Maven을 사용하여 Java 파일을 패키징해 봅시다.</p>
<ul>
<li>실행 중인 애플리케이션을 중지합니다.</li>
<li>위 링크에서 Maven을 설치합니다.</li>
<li>TutorialApplicationTests.java 파일로 이동하여 아래와 같이 테스트 클래스를 주석 처리합니다:</li>
</ul>
<p><img src="@source/docs/Nextjs/2024-04-05-BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes/img/BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes_7.png" alt="이미지"></p>
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
<li>pom.xml 파일을 검색하고 아래에 표시된대로 빌드 태그 아래에 원하는 이름으로 <code v-pre>finalName</code> 태그를 입력하세요:</li>
</ul>
<p><img src="@source/docs/Nextjs/2024-04-05-BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes/img/BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes_8.png" alt="이미지"></p>
<ul>
<li>이제 터미널을 열어 <code v-pre>mvn clean install</code>을 실행하세요. 아래와 유사한 출력을 받아야 합니다:</li>
</ul>
<p><img src="@source/docs/Nextjs/2024-04-05-BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes/img/BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes_9.png" alt="이미지"></p>
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
<li>다음과 같이 target 디렉토리 아래에서 jar 파일을 찾을 수 있습니다:</li>
</ul>
<p><img src="@source/docs/Nextjs/2024-04-05-BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes/img/BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes_10.png" alt="BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes_10.png"></p>
<p>이제 Docker를 사용하여 데이터베이스를 Spring 앱과 연결해 봅시다. 먼저 앱과 데이터베이스를 Docker화하고, Docker Compose를 사용하여 실행합니다.</p>
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
<p>애플리케이션 루트 수준에서 Dockerfile(대문자 &quot;D&quot;)이라는 파일을 만들고 다음과 같이 채워 넣어 주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">FROM</span> <span class="token literal-property property">openjdk</span><span class="token operator">:</span><span class="token number">17</span><span class="token operator">-</span>jdk<span class="token operator">-</span>alpine

# <span class="token constant">JAR</span> 파일을 컨테이너로 복사합니다
<span class="token constant">COPY</span> target<span class="token operator">/</span>joe<span class="token operator">-</span>v3<span class="token punctuation">.</span>jar app<span class="token operator">-</span>v2<span class="token punctuation">.</span>jar

# 포트 <span class="token number">80</span>을 노출합니다
<span class="token constant">EXPOSE</span> <span class="token number">8080</span>

# 애플리케이션 실행을 위한 엔트리 포인트를 정의합니다
<span class="token constant">ENTRYPOINT</span> <span class="token punctuation">[</span><span class="token string">"java"</span><span class="token punctuation">,</span> <span class="token string">"-jar"</span><span class="token punctuation">,</span> <span class="token string">"app-v2.jar"</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 Dockerfile은 JAR 파일로 패키지된 Java 애플리케이션을 위한 Docker 이미지를 생성하는 데 사용됩니다.</p>
<p>도커 파일로부터 도커 이미지를 빌드해 주세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>도커 빌드 <span class="token operator">-</span>t dev<span class="token operator">-</span>app<span class="token operator">-</span>image <span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이미지를 Dockerhub로 푸시하세요. 먼저 도커에 로그인해야 합니다. docker login 명령을 사용하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>도커 태그 dev<span class="token operator">-</span>app<span class="token operator">-</span>image<span class="token operator">:</span>latest midejoe<span class="token operator">/</span>java<span class="token operator">-</span>api<span class="token operator">:</span><span class="token number">1.0</span>
도커 푸쉬 midejoe<span class="token operator">/</span>java<span class="token operator">-</span>api<span class="token operator">:</span><span class="token number">1.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 MySQL 데이터베이스 도커 파일을 생성해 봅시다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code># 공식 MySQL 도커 이미지 사용
<span class="token constant">FROM</span> <span class="token literal-property property">mysql</span><span class="token operator">:</span>latest

# MySQL 루트 비밀번호 <span class="token function">설정</span> <span class="token punctuation">(</span>원하는 비밀번호로 대체<span class="token punctuation">)</span>
<span class="token constant">ENV</span> <span class="token constant">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>@YourRootPassword

# 비루트 사용자 및 비밀번호 <span class="token function">설정</span> <span class="token punctuation">(</span>원하는 사용자명과 비밀번호로 대체<span class="token punctuation">)</span>
<span class="token constant">ENV</span> <span class="token constant">MYSQL_USER</span><span class="token operator">=</span>dbuser
<span class="token constant">ENV</span> <span class="token constant">MYSQL_PASSWORD</span><span class="token operator">=</span>@YourPassword#

# <span class="token punctuation">(</span>선택사항<span class="token punctuation">)</span> 새로운 데이터베이스 <span class="token function">생성</span> <span class="token punctuation">(</span>원하는 데이터베이스 이름으로 대체<span class="token punctuation">)</span>
<span class="token constant">ENV</span> <span class="token constant">MYSQL_DATABASE</span><span class="token operator">=</span>store_database

# MySQL 포트 노출
<span class="token constant">EXPOSE</span> <span class="token number">3306</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 MySQL 이미지를 빌드해 봅시다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>docker build <span class="token operator">-</span>t my<span class="token operator">-</span>sql<span class="token operator">-</span>image <span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이미지를 Dockerhub에 푸시하세요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>도커 태그 my<span class="token operator">-</span>sql<span class="token operator">-</span>image<span class="token operator">:</span>latest midejoe<span class="token operator">/</span>java<span class="token operator">-</span>api<span class="token operator">:</span>mysql
도커 푸시 midejoe<span class="token operator">/</span>java<span class="token operator">-</span>api<span class="token operator">:</span>mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>MySQL 이미지의 인스턴스를 실행합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>도커 실행 — name my<span class="token operator">-</span>sql<span class="token operator">-</span>server <span class="token operator">-</span>p <span class="token number">3306</span><span class="token operator">:</span><span class="token number">3306</span> <span class="token operator">-</span>d my<span class="token operator">-</span>sql<span class="token operator">-</span>image
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>MySQL 서버에 로그인하여 비밀번호를 입력하세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>도커 exec <span class="token operator">-</span>it my<span class="token operator">-</span>sql<span class="token operator">-</span>server mysql <span class="token operator">-</span>u dbuser <span class="token operator">-</span>p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이제 데이터베이스를 테스트하기 위해 다양한 작업을 수행해 봅시다.</p>
<p>다음 SQL 명령문을 실행하세요:
데이터베이스 생성:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">CREATE</span> <span class="token constant">DATABASE</span> store_database<span class="token punctuation">;</span>
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
<p>데이터베이스를 표시해보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">SHOW</span> <span class="token constant">DATABASES</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>테이블을 생성해보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>use store_database<span class="token punctuation">;</span>
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
<p>우리의 java_api를 위한 테이블을 만들어 보겠습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">CREATE</span> <span class="token constant">TABLE</span> <span class="token constant">IF</span> <span class="token constant">NOT</span> <span class="token constant">EXISTS</span> <span class="token function">product_inventory</span>
<span class="token punctuation">(</span>id <span class="token constant">BIGINT</span> <span class="token constant">NOT</span> <span class="token constant">NULL</span> <span class="token constant">PRIMARY</span> <span class="token constant">KEY</span> auto_increment<span class="token punctuation">,</span>
product_name <span class="token constant">VARCHAR</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span> not <span class="token keyword">null</span><span class="token punctuation">,</span>
color <span class="token function">varchar</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
price <span class="token constant">INT</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>exit 명령어를 사용하여 데이터베이스에서 나가세요 (exit;)</li>
</ul>
<p>이제, java API의 &quot;application.properties&quot; (src/main/resources/application.properties) 파일에서 mysql 컨테이너 URL을 수정해 봅시다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>spring<span class="token punctuation">.</span>datasource<span class="token punctuation">.</span>url<span class="token operator">=</span>$<span class="token punctuation">{</span><span class="token constant">DATABASE_URL</span><span class="token punctuation">}</span>
spring<span class="token punctuation">.</span>datasource<span class="token punctuation">.</span>username<span class="token operator">=</span>$<span class="token punctuation">{</span><span class="token constant">DATABASE_USERNAME</span><span class="token punctuation">}</span>
spring<span class="token punctuation">.</span>datasource<span class="token punctuation">.</span>password<span class="token operator">=</span>$<span class="token punctuation">{</span><span class="token constant">DATABASE_PASSWORD</span><span class="token punctuation">}</span>
spring<span class="token punctuation">.</span>jpa<span class="token punctuation">.</span>hibernate<span class="token punctuation">.</span>ddl<span class="token operator">-</span>auto<span class="token operator">=</span>update
spring<span class="token punctuation">.</span>jpa<span class="token punctuation">.</span>properties<span class="token punctuation">.</span>hibernate<span class="token punctuation">.</span>dialect<span class="token operator">=</span>org<span class="token punctuation">.</span>hibernate<span class="token punctuation">.</span>dialect<span class="token punctuation">.</span>MySQLDialect
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="도커-컴포즈-사용" tabindex="-1"><a class="header-anchor" href="#도커-컴포즈-사용" aria-hidden="true">#</a> 도커 컴포즈 사용</h2>
<p>도커 컴포즈 파일에 mysql 서비스와 java 앱을 추가해 봅시다.</p>
<p>참고: java 앱은 mysql 컨테이너가 시작될 때까지 기다려야 하므로, java 앱 컨테이너는 첫 번째 시도에서 실패할 수 있습니다. mysql 데이터베이스에 연결을 완료하려면 docker compose up 명령을 다시 실행할 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">버전</span><span class="token operator">:</span> ‘<span class="token number">3</span>’
<span class="token literal-property property">서비스</span><span class="token operator">:</span>
 my<span class="token operator">-</span>sql<span class="token operator">-</span>server<span class="token operator">:</span>
  <span class="token literal-property property">container_name</span><span class="token operator">:</span> my<span class="token operator">-</span>sql<span class="token operator">-</span>server
  <span class="token literal-property property">image</span><span class="token operator">:</span> midejoe<span class="token operator">/</span>java<span class="token operator">-</span>api<span class="token operator">:</span>mysql
  <span class="token literal-property property">ports</span><span class="token operator">:</span>
   — <span class="token number">3306</span><span class="token operator">:</span><span class="token number">3306</span>

 java<span class="token operator">-</span>crud<span class="token operator">-</span>app<span class="token operator">:</span>
  <span class="token literal-property property">container_name</span><span class="token operator">:</span> java_api
  <span class="token literal-property property">image</span><span class="token operator">:</span> java<span class="token operator">-</span>api<span class="token operator">:</span>latest
  <span class="token literal-property property">ports</span><span class="token operator">:</span>
   — <span class="token number">8080</span><span class="token operator">:</span><span class="token number">8080</span>
  <span class="token literal-property property">environment</span><span class="token operator">:</span>
   — <span class="token constant">DATABASE_URL</span><span class="token operator">=</span>jdbc<span class="token operator">:</span>mysql<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>my<span class="token operator">-</span>sql<span class="token operator">-</span>server<span class="token operator">:</span><span class="token number">3306</span><span class="token operator">/</span>store_database
   — <span class="token constant">DATABASE_USERNAME</span><span class="token operator">=</span>dbuser
   — <span class="token constant">DATABASE_PASSWORD</span><span class="token operator">=</span>@YourPassword#
  <span class="token literal-property property">depends_on</span><span class="token operator">:</span>
   — my<span class="token operator">-</span>sql<span class="token operator">-</span>server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>도커 컴포즈 파일을 실행하십시오:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>docker<span class="token operator">-</span>compose <span class="token operator">-</span>f docker_compose<span class="token punctuation">.</span>yml up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>아래와 같은 출력이라면 준비된 것입니다:</p>
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
<p><img src="@source/docs/Nextjs/2024-04-05-BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes/img/BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes_11.png" alt="이미지"></p>
<p>이제 다음 명령어로 실행 중인 컨테이너를 확인할 수 있어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>docker ps <span class="token operator">-</span>a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>아래와 같은 결과가 나와야 해요:</p>
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
<img src="@source/docs/Nextjs/2024-04-05-BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes/img/BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes_12.png" />
<h2 id="어플리케이션-테스트하기" tabindex="-1"><a class="header-anchor" href="#어플리케이션-테스트하기" aria-hidden="true">#</a> 어플리케이션 테스트하기</h2>
<p>이제 curl을 사용하여 java api를 다시 테스트해 봅시다:</p>
<p>헬스 체크</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code># <span class="token constant">GET</span> <span class="token literal-property property">방법</span><span class="token operator">:</span> 
curl http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">8080</span><span class="token operator">/</span>health
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>제품 생성: 이제 제품을 생성해 보겠습니다. 아래의 바디를 요청 바디로 사용하여 localhost:8080/product로 POST 요청을 보냅니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code># <span class="token constant">POST</span> <span class="token literal-property property">방법</span><span class="token operator">:</span> 
curl <span class="token operator">-</span><span class="token constant">X</span> <span class="token constant">POST</span> <span class="token operator">-</span><span class="token constant">H</span> “Content<span class="token operator">-</span>Type<span class="token operator">:</span> application<span class="token operator">/</span>json” <span class="token operator">-</span>d ‘<span class="token punctuation">{</span><span class="token literal-property property">“productName”</span><span class="token operator">:</span> “product1”<span class="token punctuation">,</span> <span class="token literal-property property">“color”</span><span class="token operator">:</span> “blue”<span class="token punctuation">,</span> <span class="token literal-property property">“price”</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">}</span>’ http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">8080</span><span class="token operator">/</span>product
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/Nextjs/2024-04-05-BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes/img/BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes_13.png" alt="이미지"></p>
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
<p>또 하나 만들어보겠습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code># <span class="token constant">POST</span> <span class="token literal-property property">방식</span><span class="token operator">:</span> 
curl <span class="token operator">-</span><span class="token constant">X</span> <span class="token constant">POST</span> <span class="token operator">-</span><span class="token constant">H</span> <span class="token string">"Content-Type: application/json"</span> <span class="token operator">-</span>d <span class="token string">'{"productName": "product2", "color": "green", "price": 4000}'</span> <span class="token literal-property property">http</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">8080</span><span class="token operator">/</span>product
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/Nextjs/2024-04-05-BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes/img/BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes_14.png" alt="Building and Deploying a Java CRUD Rest API with Spring Boot Hibernate MySQL Docker Docker Compose and Kubernetes"></p>
<p>아이디로 제품 읽기:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code># <span class="token constant">GET</span> <span class="token literal-property property">방법</span><span class="token operator">:</span>
curl <span class="token operator">-</span><span class="token constant">X</span> <span class="token constant">GET</span> <span class="token literal-property property">‘http</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">8080</span><span class="token operator">/</span>product<span class="token operator">?</span>productId<span class="token operator">=</span><span class="token number">1</span>'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/Nextjs/2024-04-05-BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes/img/BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes_15.png" alt="이미지"></p>
<p>모든 제품 가져오기:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>curl http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">8080</span><span class="token operator">/</span>products
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
<p>아래와 같이 제품 이름으로 제품을 얻으세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>curl “http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">8080</span><span class="token operator">/</span>products<span class="token operator">-</span>by<span class="token operator">-</span>name<span class="token operator">?</span>productName<span class="token operator">=</span>product1"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="@source/docs/Nextjs/2024-04-05-BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes/img/BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes_17.png" alt="img"></p>
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
<p>제품 업데이트: 첫 번째로 만든 제품을 업데이트해 봅시다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code># <span class="token constant">PATCH</span> <span class="token literal-property property">방법</span><span class="token operator">:</span> 
 curl <span class="token operator">-</span><span class="token constant">X</span> <span class="token constant">PATCH</span> <span class="token operator">-</span><span class="token constant">H</span> <span class="token string">"Content-Type: application/json"</span> <span class="token operator">-</span>d <span class="token string">'{"productName": "product3", "color": "cyan", "price": 5000}'</span> <span class="token string">"http://localhost:8080/product?productId=1"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/Nextjs/2024-04-05-BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes/img/BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes_18.png" />
<p>제품 삭제: productId를 사용하여 추가한 두 번째 제품을 삭제합시다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>curl <span class="token operator">-</span><span class="token constant">X</span> <span class="token constant">DELETE</span> <span class="token literal-property property">“http</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">8080</span><span class="token operator">/</span>product<span class="token operator">?</span>productId<span class="token operator">=</span><span class="token number">2</span>"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="@source/docs/Nextjs/2024-04-05-BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes/img/BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes_19.png" alt="image"></p>
<p>우리는 MySQL 데이터베이스에서 모든 활동을 확인할 수도 있어요:</p>
<p>MySQL 서버에 로그인하고 비밀번호를 입력하세요.</p>
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
<p>도커를 실행할 때 다음 명령어를 사용하세요.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it my-sql-server mysql -u dbuser -p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="@source/docs/Nextjs/2024-04-05-BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes/img/BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes_20.png" alt="테이블"></p>
<p>이전에 생성된 product_inventory 테이블을 확인하려면 SHOW TABLES;를 입력하세요.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes/img/BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes_21.png" alt="product_inventory 테이블"></p>
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
<p>마침내 테이블 안의 항목을 확인해 봅시다</p>
<p><img src="@source/docs/Nextjs/2024-04-05-BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes/img/BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes_22.png" alt="이미지"></p>
<p>Kubernetes</p>
<p>제공된 Docker Compose 구성을 Kubernetes에 배포하려면 다음 Kubernetes 매니페스트 파일을 생성해 봅시다:</p>
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
<li>파일을 만들어 mysql-deployment.yaml이라고 이름 짓기</li>
</ul>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token comment"># mysql-deployment.yaml</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> mysql<span class="token punctuation">-</span>deployment
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> mysql
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> mysql
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>sql<span class="token punctuation">-</span>server
          <span class="token key atrule">image</span><span class="token punctuation">:</span> midejoe/java<span class="token punctuation">-</span>api<span class="token punctuation">:</span>mysql
          <span class="token key atrule">ports</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">3306</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>mysql을 위한 서비스 yaml 만들기</li>
</ul>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> mysql<span class="token punctuation">-</span>service
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> mysql
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
      <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">3306</span>
      <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">3306</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>Java CRUD 앱을 위한 배포 YAML 파일을 만들어보세요:</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> java<span class="token punctuation">-</span>crud<span class="token punctuation">-</span>app<span class="token punctuation">-</span>deployment
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> java<span class="token punctuation">-</span>crud<span class="token punctuation">-</span>app
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> java<span class="token punctuation">-</span>crud<span class="token punctuation">-</span>app
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> java<span class="token punctuation">-</span>crud<span class="token punctuation">-</span>app
        <span class="token key atrule">image</span><span class="token punctuation">:</span> midejoe/java<span class="token punctuation">-</span>api<span class="token punctuation">:</span><span class="token number">2.0</span>
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">8080</span>
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> DATABASE_URL
          <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">"jdbc:mysql://mysql-service:3306/store_database"</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> DATABASE_USERNAME
          <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">"dbuser"</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> DATABASE_PASSWORD
          <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">"@YourPassword#"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Java CRUD 앱을 위한 서비스 YAML 파일을 만들어보세요:</li>
</ul>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> java<span class="token punctuation">-</span>crud<span class="token punctuation">-</span>app<span class="token punctuation">-</span>service
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> java<span class="token punctuation">-</span>crud<span class="token punctuation">-</span>app
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span>
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">8080</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>쿠버네티스 클러스터(minikube)에 파일을 적용해주세요</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>kubectl apply <span class="token operator">-</span>f mysql<span class="token operator">-</span>deployment<span class="token punctuation">.</span>yaml
kubectl apply <span class="token operator">-</span>f mysql<span class="token operator">-</span>service<span class="token punctuation">.</span>yaml
kubectl apply <span class="token operator">-</span>f java<span class="token operator">-</span>crud<span class="token operator">-</span>app<span class="token operator">-</span>deployment<span class="token punctuation">.</span>yaml
kubectl apply <span class="token operator">-</span>f java<span class="token operator">-</span>crud<span class="token operator">-</span>app<span class="token operator">-</span>service<span class="token punctuation">.</span>yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>파드와 서비스가 실행 중인지 확인해주세요:</p>
<p><img src="@source/docs/Nextjs/2024-04-05-BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes/img/BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes_23.png" alt="이미지"></p>
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
<img src="@source/docs/Nextjs/2024-04-05-BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes/img/BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes_24.png" />
<p>참고: 운영 환경에서는 인프라 및 요구 사항에 따라 Ingress 컨트롤러 또는 로드 밸런서 서비스 유형을 고려할 수 있습니다.</p>
<p>curl을 사용하여 응용 프로그램을 테스트해보세요:</p>
<p>여기서 명령은 아래와 같이 보일 것입니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>curl http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token operator">&lt;</span>node<span class="token operator">-</span>ip<span class="token operator">></span><span class="token operator">:</span><span class="token operator">&lt;</span>node<span class="token operator">-</span>port<span class="token operator">></span><span class="token operator">/</span>health
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>node-ip은 minikube 클러스터의 IP입니다. IP를 얻으려면 minikube ip 명령을 입력하세요. node-port는 mysql 서비스를 생성할 때 할당된 포트입니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes/img/BuildingandDeployingaJavaCRUDRestAPIwithSpringBootHibernateMySQLDockerDockerComposeandKubernetes_25.png" alt="이미지"></p>
<p>결론</p>
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
<p>우리 해냈어요! 우리는 Java로 CRUD rest API를 구축하고 배포했어요. 사용한 기술은 다음과 같아요:</p>
<ul>
<li>Spring Boot (의존성: Spring Web, Spring Data JPA, MySQL connector)</li>
<li>Hibernate</li>
<li>MySQL</li>
<li>Docker</li>
<li>Docker compose</li>
<li>Kubernetes</li>
</ul>
<p>이것은 단지 예시일 뿐이지만, 여러분께서 여러분만의 애플리케이션을 구축하는 데 출발점으로 활용하실 수 있어요.</p>
<p>만약 이 안내서가 도움이 되셨다면 박수 버튼을 눌러 주시거나 댓글을 남겨 주세요.</p>
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
<p>더 흥미로운 이야기를 보시려면 팔로우 해주세요.</p>
</div></template>
