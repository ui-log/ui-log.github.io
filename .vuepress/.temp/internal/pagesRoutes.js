import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-3e214e9b","/About/",{"title":"Today I Learned"},["/About/index.html","/About/README.md"]],
  ["v-0505b5b6","/docs/CSS/border-animation/",{"title":"linear-gradient를 활용한 border 애니메이션 5가지 만들기"},["/docs/CSS/border-animation/index.html","/docs/CSS/border-animation/README.md"]],
  ["v-475c08a1","/docs/CSS/imageset/",{"title":"image-set 속성으로 반응형 background-image 사용하기"},["/docs/CSS/imageset/index.html","/docs/CSS/imageset/README.md"]],
  ["v-32d21ace","/docs/API/2022-11-24-unsplash-API-%EC%82%AC%EC%9A%A9%ED%95%B4%EC%84%9C-%EB%9E%9C%EB%8D%A4-%EC%82%AC%EC%A7%84-%EB%B6%88%EB%9F%AC%EC%98%A4%EA%B8%B0/",{"title":"unsplash API 사용해서 랜덤 사진 불러오는 방법"},["/docs/API/2022-11-24-unsplash-API-사용해서-랜덤-사진-불러오기/","/docs/API/2022-11-24-unsplash-API-%EC%82%AC%EC%9A%A9%ED%95%B4%EC%84%9C-%EB%9E%9C%EB%8D%A4-%EC%82%AC%EC%A7%84-%EB%B6%88%EB%9F%AC%EC%98%A4%EA%B8%B0/index.html","/docs/API/2022-11-24-unsplash-API-사용해서-랜덤-사진-불러오기/README.md","/docs/API/2022-11-24-unsplash-API-%EC%82%AC%EC%9A%A9%ED%95%B4%EC%84%9C-%EB%9E%9C%EB%8D%A4-%EC%82%AC%EC%A7%84-%EB%B6%88%EB%9F%AC%EC%98%A4%EA%B8%B0/README.md"]],
  ["v-0fd7d848","/docs/Javascript/optional-chaining/",{"title":"알아두면 유용한 optional chaining(?.) 과 nullish coalescing(??)"},["/docs/Javascript/optional-chaining/index.html","/docs/Javascript/optional-chaining/README.md"]],
  ["v-39f3c26a","/docs/Git/2022-11-25-github-repository%EC%97%90-remote-origin-%EC%97%B0%EA%B2%B0%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95/",{"title":"github repository에 remote origin 연결하는 방법"},["/docs/Git/2022-11-25-github-repository에-remote-origin-연결하는-방법/","/docs/Git/2022-11-25-github-repository%EC%97%90-remote-origin-%EC%97%B0%EA%B2%B0%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95/index.html","/docs/Git/2022-11-25-github-repository에-remote-origin-연결하는-방법/README.md","/docs/Git/2022-11-25-github-repository%EC%97%90-remote-origin-%EC%97%B0%EA%B2%B0%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95/README.md"]],
  ["v-2e70fa45","/docs/Nextjs/2022-11-24-Nextjs%EC%97%90%EC%84%9C-svg-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95/",{"title":"Nextjs에서 svg파일 사용하는 방법 (2022년 11월 최신)"},["/docs/Nextjs/2022-11-24-Nextjs에서-svg-사용하는-방법/","/docs/Nextjs/2022-11-24-Nextjs%EC%97%90%EC%84%9C-svg-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95/index.html","/docs/Nextjs/2022-11-24-Nextjs에서-svg-사용하는-방법/README.md","/docs/Nextjs/2022-11-24-Nextjs%EC%97%90%EC%84%9C-svg-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95/README.md"]],
  ["v-6b21e1c4","/docs/Nextjs/2022-11-25-Nextjs-Static-HTML-%EC%82%AC%EC%9D%B4%ED%8A%B8-%EB%B0%B0%ED%8F%AC%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95/",{"title":"Nextjs Static HTML 사이트 배포하는 방법 (feat. Netlify)"},["/docs/Nextjs/2022-11-25-Nextjs-Static-HTML-사이트-배포하는-방법/","/docs/Nextjs/2022-11-25-Nextjs-Static-HTML-%EC%82%AC%EC%9D%B4%ED%8A%B8-%EB%B0%B0%ED%8F%AC%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95/index.html","/docs/Nextjs/2022-11-25-Nextjs-Static-HTML-사이트-배포하는-방법/README.md","/docs/Nextjs/2022-11-25-Nextjs-Static-HTML-%EC%82%AC%EC%9D%B4%ED%8A%B8-%EB%B0%B0%ED%8F%AC%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95/README.md"]],
  ["v-591df59c","/docs/Nextjs/2022-11-25-React-Hook-useEffect-has-missing-dependencies-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95/",{"title":"React Hook useEffect has missing dependencies 해결 방법(exhaustive-deps Warning)"},["/docs/Nextjs/2022-11-25-React-Hook-useEffect-has-missing-dependencies-해결-방법/","/docs/Nextjs/2022-11-25-React-Hook-useEffect-has-missing-dependencies-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95/index.html","/docs/Nextjs/2022-11-25-React-Hook-useEffect-has-missing-dependencies-해결-방법/README.md","/docs/Nextjs/2022-11-25-React-Hook-useEffect-has-missing-dependencies-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95/README.md"]],
  ["v-0585c2bb","/docs/Nextjs/2022-11-25-Nextjs-build-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95/",{"title":"Nextjs build 에러 해결 방법 (Only set one of children or props.dangerouslySetInnerHTML react/no-danger-with-children)"},["/docs/Nextjs/2022-11-25-Nextjs-build-에러-해결-방법/","/docs/Nextjs/2022-11-25-Nextjs-build-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95/index.html","/docs/Nextjs/2022-11-25-Nextjs-build-에러-해결-방법/README.md","/docs/Nextjs/2022-11-25-Nextjs-build-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95/README.md"]],
  ["v-43071ee6","/docs/Nextjs/getStaticProps-getServerSideProps/",{"title":"getStaticProps, getServersideProps 적절한 사용 방법"},["/docs/Nextjs/getStaticProps-getServerSideProps/index.html","/docs/Nextjs/getStaticProps-getServerSideProps/README.md"]],
  ["v-36b0ea94","/docs/Nextjs/zustand-react-hydration-error/",{"title":"Nextjs + Zustand, \"Text content does not match server-rendered HTML.\" 에러 해결 방법 (React Hydration Error)"},["/docs/Nextjs/zustand-react-hydration-error/index.html","/docs/Nextjs/zustand-react-hydration-error/README.md"]],
  ["v-e94584a2","/docs/Selenium/2022-11-24-Selenium-chrome-version-%EC%9D%B4%EC%8A%88/",{"title":"Selenium chrome version 이슈 해결방법(This version of ChromeDriver only supports Chrome version)"},["/docs/Selenium/2022-11-24-Selenium-chrome-version-이슈/","/docs/Selenium/2022-11-24-Selenium-chrome-version-%EC%9D%B4%EC%8A%88/index.html","/docs/Selenium/2022-11-24-Selenium-chrome-version-이슈/README.md","/docs/Selenium/2022-11-24-Selenium-chrome-version-%EC%9D%B4%EC%8A%88/README.md"]],
  ["v-19ae13b9","/docs/Setting/m1-nvm/",{"title":"M1 mac에 nvm설치하는 방법"},["/docs/Setting/m1-nvm/index.html","/docs/Setting/m1-nvm/README.md"]],
  ["v-d8df1a64","/docs/Vuepress/vuepress-hosting/",{"title":"vuepress 로 GitHub pages 에 사이트 호스팅 하는 방법"},["/docs/Vuepress/vuepress-hosting/index.html","/docs/Vuepress/vuepress-hosting/README.md"]],
  ["v-64390c90","/docs/Vuepress/hits/",{"title":"hits로 블로그에 조회수 기능 추가하는 방법"},["/docs/Vuepress/hits/index.html","/docs/Vuepress/hits/README.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: '404',
      path: '/:catchAll(.*)',
      component: Vuepress,
    }
  ]
)
