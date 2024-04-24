export const data = {
  "key": "v-68fe8323",
  "path": "/docs/Tech/2024-03-22-ReactRe-renderingExploringWhatWhyandHow/",
  "title": "React 리렌더링은 언제 발생할까? rerendering 이유 정리",
  "lang": "ko",
  "frontmatter": {
    "title": "React 리렌더링은 언제 발생할까? rerendering 이유 정리",
    "description": "",
    "date": "2024-03-22 23:27",
    "sidebarDepth": 0,
    "tag": "Tech",
    "thumbnail": null,
    "originalTitle": "React Re-rendering Exploring What, Why, and How",
    "link": "https://medium.com/simform-engineering/react-re-rendering-exploring-what-why-and-how-d180d5305892"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "1. 상태(state) 및/또는 속성(props)이 변경될 때 컴포넌트를 다시 렌더링",
      "slug": "_1-상태-state-및-또는-속성-props-이-변경될-때-컴포넌트를-다시-렌더링",
      "children": []
    },
    {
      "level": 2,
      "title": "2. 컨텍스트 스토어 값 변경",
      "slug": "_2-컨텍스트-스토어-값-변경",
      "children": []
    },
    {
      "level": 2,
      "title": "3. key 속성 변경 시 다시 렌더링",
      "slug": "_3-key-속성-변경-시-다시-렌더링",
      "children": []
    },
    {
      "level": 2,
      "title": "useMemo()",
      "slug": "usememo",
      "children": []
    },
    {
      "level": 2,
      "title": "useCallback()",
      "slug": "usecallback",
      "children": []
    },
    {
      "level": 2,
      "title": "React.memo",
      "slug": "react-memo",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1711171735000
  },
  "filePathRelative": "docs/Tech/2024-03-22-ReactRe-renderingExploringWhatWhyandHow/README.md"
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
