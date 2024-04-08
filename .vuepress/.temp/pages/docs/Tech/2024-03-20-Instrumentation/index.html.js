export const data = {
  "key": "v-1e2215d6",
  "path": "/docs/Tech/2024-03-20-Instrumentation/",
  "title": "Nextjs 14 instrumentation 정리",
  "lang": "ko",
  "frontmatter": {
    "title": "Nextjs 14 instrumentation 정리",
    "description": "",
    "date": "2024-03-20 14:16",
    "sidebarDepth": 0,
    "tag": "Tech",
    "thumbnail": null
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "규칙",
      "slug": "규칙",
      "children": []
    },
    {
      "level": 2,
      "title": "예시",
      "slug": "예시",
      "children": [
        {
          "level": 3,
          "title": "사이드 이펙트가 있는 파일 가져오기",
          "slug": "사이드-이펙트가-있는-파일-가져오기",
          "children": []
        },
        {
          "level": 3,
          "title": "런타임 특정 코드 가져오기",
          "slug": "런타임-특정-코드-가져오기",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": 1710930996000
  },
  "filePathRelative": "docs/Tech/2024-03-20-Instrumentation/README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
