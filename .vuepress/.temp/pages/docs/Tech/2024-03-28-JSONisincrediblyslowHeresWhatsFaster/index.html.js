export const data = {
  "key": "v-fa4a967c",
  "path": "/docs/Tech/2024-03-28-JSONisincrediblyslowHeresWhatsFaster/",
  "title": "더이상 느려빠진 JSON을 사용하지 않아도 되는 이유",
  "lang": "ko",
  "frontmatter": {
    "title": "더이상 느려빠진 JSON을 사용하지 않아도 되는 이유",
    "description": "",
    "date": "2024-03-28 17:55",
    "sidebarDepth": 0,
    "tag": "Tech",
    "thumbnail": null,
    "originalTitle": "JSON is incredibly slow: Here’s What’s Faster!",
    "link": "https://medium.com/data-science-community-srm/json-is-incredibly-slow-heres-what-s-faster-ca35d5aaf9e8"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "애플리케이션 속도와 반응성의 중요성",
      "slug": "애플리케이션-속도와-반응성의-중요성",
      "children": []
    },
    {
      "level": 2,
      "title": "JSON이 우리 애플리케이션을 느리게 만드는 걸까요?",
      "slug": "json이-우리-애플리케이션을-느리게-만드는-걸까요",
      "children": []
    },
    {
      "level": 2,
      "title": "1. 구문 분석 오버헤드",
      "slug": "_1-구문-분석-오버헤드",
      "children": []
    },
    {
      "level": 2,
      "title": "2. 직렬화와 역직렬화",
      "slug": "_2-직렬화와-역직렬화",
      "children": []
    },
    {
      "level": 2,
      "title": "3. 문자열 조작",
      "slug": "_3-문자열-조작",
      "children": []
    },
    {
      "level": 2,
      "title": "4. 데이터 유형의 부족",
      "slug": "_4-데이터-유형의-부족",
      "children": []
    },
    {
      "level": 2,
      "title": "5. 장황성",
      "slug": "_5-장황성",
      "children": []
    },
    {
      "level": 2,
      "title": "6. 이진 데이터 지원 없음",
      "slug": "_6-이진-데이터-지원-없음",
      "children": []
    },
    {
      "level": 2,
      "title": "7. 깊은 중첩",
      "slug": "_7-깊은-중첩",
      "children": []
    },
    {
      "level": 2,
      "title": "1. Protocol Buffers (protobuf)",
      "slug": "_1-protocol-buffers-protobuf",
      "children": []
    },
    {
      "level": 2,
      "title": "2. MessagePack",
      "slug": "_2-messagepack",
      "children": []
    },
    {
      "level": 2,
      "title": "3. BSON (Binary JSON)",
      "slug": "_3-bson-binary-json",
      "children": []
    },
    {
      "level": 2,
      "title": "4. Apache Avro",
      "slug": "_4-apache-avro",
      "children": []
    },
    {
      "level": 2,
      "title": "시작: JSON 데이터",
      "slug": "시작-json-데이터",
      "children": []
    },
    {
      "level": 2,
      "title": "프로토콜 버퍼 (protobuf):",
      "slug": "프로토콜-버퍼-protobuf",
      "children": []
    },
    {
      "level": 2,
      "title": "MessagePack:",
      "slug": "messagepack",
      "children": []
    },
    {
      "level": 2,
      "title": "BSON (바이너리 JSON):",
      "slug": "bson-바이너리-json",
      "children": []
    },
    {
      "level": 2,
      "title": "Avro:",
      "slug": "avro",
      "children": []
    },
    {
      "level": 2,
      "title": "1. Avro:",
      "slug": "_1-avro",
      "children": []
    },
    {
      "level": 2,
      "title": "2. MessagePack:",
      "slug": "_2-messagepack-1",
      "children": []
    },
    {
      "level": 2,
      "title": "3. BSON:",
      "slug": "_3-bson",
      "children": []
    },
    {
      "level": 2,
      "title": "1. 데이터 크기 최소화:",
      "slug": "_1-데이터-크기-최소화",
      "children": []
    },
    {
      "level": 2,
      "title": "2. 배열을 현명하게 사용하세요:",
      "slug": "_2-배열을-현명하게-사용하세요",
      "children": []
    },
    {
      "level": 2,
      "title": "3. 숫자 표현 최적화:",
      "slug": "_3-숫자-표현-최적화",
      "children": []
    },
    {
      "level": 2,
      "title": "4. 중복 제거:",
      "slug": "_4-중복-제거",
      "children": []
    },
    {
      "level": 2,
      "title": "5. 압축 사용:",
      "slug": "_5-압축-사용",
      "children": []
    },
    {
      "level": 2,
      "title": "6. 서버 측 캐싱 활용하기:",
      "slug": "_6-서버-측-캐싱-활용하기",
      "children": []
    },
    {
      "level": 2,
      "title": "7. 프로필링과 최적화:",
      "slug": "_7-프로필링과-최적화",
      "children": []
    },
    {
      "level": 2,
      "title": "1. LinkedIn의 프로토콜 버퍼 통합:",
      "slug": "_1-linkedin의-프로토콜-버퍼-통합",
      "children": []
    },
    {
      "level": 2,
      "title": "2. Uber의 H3 지오-인덱스:",
      "slug": "_2-uber의-h3-지오-인덱스",
      "children": []
    },
    {
      "level": 2,
      "title": "3. Slack의 메시지 형식 최적화:",
      "slug": "_3-slack의-메시지-형식-최적화",
      "children": []
    },
    {
      "level": 2,
      "title": "4. Auth0의 Protocol Buffers 구현:",
      "slug": "_4-auth0의-protocol-buffers-구현",
      "children": []
    }
  ],
  "git": {
    "updatedTime": null
  },
  "filePathRelative": "docs/Tech/2024-03-28-JSONisincrediblyslowHeresWhatsFaster/README.md"
}
