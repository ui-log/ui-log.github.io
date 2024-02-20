<script lang="ts" setup>
import ParentLayout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";
import { usePageData } from "@vuepress/client";
import { computed } from "vue";

import { Comment, Footer, Posts, RelationPosts } from "../components";
import { usePosts } from "../hooks";

const posts = usePosts();
const pageData = usePageData();

const baseURL = `https://ui-log.github.io`;

const hitUrl = computed(
  () =>
    `https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=${baseURL}${pageData.value.path}&count_bg=%230099FF&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=%EC%A1%B0%ED%9A%8C%EC%88%98&edge_flat=true`
);

const relationPosts = computed(() => {
  const { tag } = pageData.value.frontmatter;
  if (!tag) return [];
  const lists = posts.value.filter((v) => v.tag.includes(tag as string));
  const current = lists.find((v) => v.path === pageData.value.path);
  const index = lists.indexOf(current);
  return lists.slice(Math.max(index - 5, 0), index + 5).filter((v) => v !== current);
});
</script>

<template>
  <ParentLayout>
    <template #page-content-top>
      <div class="hit">
        <img :src="hitUrl" alt="Hits bn" />
      </div>
      <!-- <component is="script" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4877378276818686" crossorigin="anonymous" async></component> -->

      <!-- ui-log 수평형 -->

      <!-- <ins class="adsbygoogle" style="display: block" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins>
      <component is="script"> (adsbygoogle = window.adsbygoogle || []).push({}); </component> -->
    </template>
    <template #page-bottom>
      <Comment />

      <section class="relations" v-if="relationPosts.length > 0">
        <h2>관련글</h2>
        <div class="ad">
          <component is="script" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4877378276818686" crossorigin="anonymous" async></component>
          <!-- ui-log 일치 광고 -->
          <ins class="adsbygoogle" style="display: block" data-ad-format="autorelaxed" data-ad-client="ca-pub-4877378276818686" data-ad-slot="2985948964"></ins>
          <component is="script"> (adsbygoogle = window.adsbygoogle || []).push({}); </component>
        </div>
        <RelationPosts :items="relationPosts" />
        <!-- <Posts :items="relationPosts" /> -->
      </section>
    </template>
  </ParentLayout>

  <Footer />
</template>

<style lang="scss">
@import "../../styles/mixins";

.hit {
  img {
    margin: 0 0 10px auto !important;
  }
}

.relations {
  @include only-pc {
    width: 800px;
    margin: 50px auto;
  }

  margin: 50px 0;

  h2 {
    margin: 0 10px;
    border: none;
    font-size: 19px;
  }

  .ad {
    padding-top: 20px;
  }
}
</style>
