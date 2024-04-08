---
title: "스토리북 RFC(Request for Comment) 프로세스 정리"
description: ""
date: 2024-04-07 04:13
sidebarDepth: 0
tag: Tech
thumbnail: 
originalTitle: "RFC process"
link: "https://storybook.js.org/docs/contribute/RFC"
---


RFC(Request for Comment) 프로세스는 새로운 기능이 프로젝트에 통합되는 일관된 제어 경로를 제공하는 것을 목표로 합니다. 이는 새로운 기능이 잘 설계되고, 잘 구현되며, 충분히 테스트되며, 프로젝트 전반적인 방향과 범위와 충돌하지 않도록 돕는 데 도움이 됩니다.

## 목표

버그 수정 및 문서 개선과 같은 많은 변경 사항은 보통의 GitHub 풀 리퀘스트 워크플로를 통해 구현되고 검토될 수 있습니다. 그러나 일부 변경 사항은 “중요하다”고 간주되며, 이러한 변경 사항은 디자인 프로세스를 거치고 커뮤니티 의견을 수렴하고 Storybook 코어 팀 간에 합의에 도달할 것을 요청합니다.

RFC(Request for Comment) 프로세스의 목적은 다음과 같습니다:



- 새로운 기능 아이디어를 제안할 수 있는 투명한 시스템을 제공합니다.
- 프로젝트에 새로운 기능을 도입하기 위한 신뢰할 수 있고 잘 조절된 프로세스를 수립합니다.
- 커뮤니티가 새로운 기능 개발에 참여할 수 있는 방법을 제공합니다.

### “기능 요청” 대 “RFC”

기능 요청은 Storybook 사용자가 프로젝트에 새로운 기능이나 개선을 제안하는 간단하고 비교적 비공식적인 방식입니다. 기능 요청은 가치 있는 통찰과 아이디어를 제공할 수 있지만, 일반적으로 핵심 팀 간의 합의가 필요하거나 심도 있는 디자인 과정을 요구하지는 않습니다. 기능 요청은 일반적으로 토론이 가능하며, 인기, 실행 가능성 및 프로젝트의 목표와의 일치 여부 등과 같은 요소에 기반하여 구현될 수도 있고 그렇지 않을 수도 있습니다.

반면에 RFC는 프로젝트에 중요한 변경 사항이나 추가사항을 제안하기 위한 더 형식화되고 구조화된 프로세스입니다. 제안된 기능이나 수정 사항이 적절한 고려, 디자인 및 피드백을 받도록 확실한 단계를 따릅니다. RFC는 일반적으로 프로젝트에 중요한 영향을 미치는 변경 사항에 대해 사용되며, 새로운 API 기능 도입, 기존 기능 제거 또는 새로운 사용 규칙 수립과 같은 경우에 적합합니다. RFC 프로세스는 토론을 촉진하고 더 넓은 관객으로부터 피드백을 수집하며, 핵심 팀 간의 합의를 도출하여 제안된 변경 사항을 프로젝트에 통합하기 전에 수립합니다. 수락된 RFC는 일반적인 기능 요청보다 구현될 가능성이 높습니다.



## RFC 라이프사이클

### 1. 상태: 제안됨

"RFC" 카테고리로 새 GitHub 토론을 엽니다. 지시에 따라 양식에 작성합니다.

세부 사항이 중요합니다: 설득력 있는 동기를 제시하지 않거나 디자인 영향을 제대로 이해하지 못하거나 단점이나 대안에 대해 솔직하지 않은 RFC는 일반적으로 부정적으로 받아들여집니다.



### 2. 상태: 검토 중

RFC들은 보통 이 단계에 오래 머무르며 커뮤니티와 코어 팀 멤버들이 찬반 의겢을 내놓을 시간을 가집니다. 이 기간 동안 RFC의 저자는 제안서를 수정하고 피드백을 통합하며 합의를 이루기 위해 준비해야 합니다. 대부분의 지지를 받는 RFC는 의견이 없는 것보다 더 나은 진전을 이루기 쉽습니다.

매주 월요일 미국 동부시간 11시에 Storybook 코어 팀은 회의 일정의 일부로 열린 RFC를 검토하기 위한 주간 회의를 진행합니다. 이 회의는 Storybook Discord의 Watercooler 채널에서 진행됩니다. 우리는 RFC의 저자 및 관심 있는 커뮤니티 구성원들을 초대하여 RFC에 대해 보다 자세한 토론에 참여하고 논의할 것을 권장합니다. 코어 팀 멤버가 필요하다고 판단하면, 그들은 RFC의 "챔피언"으로 지정될 수 있습니다. 챔피언은 RFC 저자와 협력하여 RFC 프로세스 전반에 걸쳐 도와줄 것입니다.

### 3. 상태: 승인/거절



결국 팀에서는 RFC가 Storybook에 포함될 후보인지 여부를 결정할 것입니다. 반면에 공개 토론이 마무리되고 반대 의견이 제시된 후 팀에 의해 RFC가 거부될 수도 있습니다.

## 승인된 RFC 구현

RFC의 작성자는 이를 구현할 의무가 없습니다. 물론, RFC 작성자(다른 개발자와 마찬가지로)는 RFC가 승인된 후 리뷰를 위해 구현을 게시할 수 있습니다. 그러나 "승인" 상태는 우선 순위나 현재 작업 중인지 여부를 나타내지 않음을 주의하세요.

만약 "진행 중" RFC를 구현하고 싶지만 다른 누군가가 이미 그 작업을 하고 있는지 알 수 없다면, 연관된 이슈에 의견을 남겨 질문하십시오.



이 RFC 프로세스는 Rust와 Gatsby의 RFC 프로세스에서 많은 영감을 받았어요.

Storybook에 기여하는 방법에 대해 더 알아보세요

- 기능 요청을 작성하는 RFC 프로세스
- 새로운 기능과 버그 수정을 위한 코드
- 새로운 프레임워크로 시작하는 방법
- 문서 개선, 오타 및 명확화를 위한 문서
- 새로운 스니펫과 예시에 대한 예제