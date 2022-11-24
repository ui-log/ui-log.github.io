import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-3e214e9b","/About/",{"title":"Today I Learned"},["/About/index.html","/About/README.md"]],
  ["v-0b88834e","/docs/Selenium/2022-11-24-Selenium-chrome-version-%EC%9D%B4%EC%8A%88.html",{"title":"Selenium chrome version 이슈 해결방법(This version of ChromeDriver only supports Chrome version)"},["/docs/Selenium/2022-11-24-Selenium-chrome-version-이슈.html","/docs/Selenium/2022-11-24-Selenium-chrome-version-%EC%9D%B4%EC%8A%88","/docs/Selenium/2022-11-24-Selenium-chrome-version-이슈.md","/docs/Selenium/2022-11-24-Selenium-chrome-version-%EC%9D%B4%EC%8A%88.md"]],
  ["v-0fd7d848","/docs/Javascript/optional-chaining/",{"title":"알아두면 유용한 optional chaining(?.) 과 nullish coalescing(??)"},["/docs/Javascript/optional-chaining/index.html","/docs/Javascript/optional-chaining/README.md"]],
  ["v-475c08a1","/docs/CSS/imageset/",{"title":"image-set 속성으로 반응형 background-image 사용하기"},["/docs/CSS/imageset/index.html","/docs/CSS/imageset/README.md"]],
  ["v-43071ee6","/docs/Nextjs/getStaticProps-getServerSideProps/",{"title":"getStaticProps, getServersideProps 적절한 사용 방법"},["/docs/Nextjs/getStaticProps-getServerSideProps/index.html","/docs/Nextjs/getStaticProps-getServerSideProps/README.md"]],
  ["v-0505b5b6","/docs/CSS/border-animation/",{"title":"linear-gradient를 활용한 border 애니메이션 5가지 만들기"},["/docs/CSS/border-animation/index.html","/docs/CSS/border-animation/README.md"]],
  ["v-36b0ea94","/docs/Nextjs/zustand-react-hydration-error/",{"title":"Nextjs + Zustand, \"Text content does not match server-rendered HTML.\" 에러 해결 방법 (React Hydration Error)"},["/docs/Nextjs/zustand-react-hydration-error/index.html","/docs/Nextjs/zustand-react-hydration-error/README.md"]],
  ["v-19ae13b9","/docs/Setting/m1-nvm/",{"title":"M1 mac에 nvm설치하는 방법"},["/docs/Setting/m1-nvm/index.html","/docs/Setting/m1-nvm/README.md"]],
  ["v-64390c90","/docs/Vuepress/hits/",{"title":"hits로 블로그에 조회수 기능 추가하는 방법"},["/docs/Vuepress/hits/index.html","/docs/Vuepress/hits/README.md"]],
  ["v-d8df1a64","/docs/Vuepress/vuepress-hosting/",{"title":"vuepress 로 GitHub pages 에 사이트 호스팅 하는 방법"},["/docs/Vuepress/vuepress-hosting/index.html","/docs/Vuepress/vuepress-hosting/README.md"]],
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
