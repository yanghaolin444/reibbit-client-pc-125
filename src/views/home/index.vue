<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
        <HomeBanner></HomeBanner>
      </div>
    </div>
    <!-- 新鲜好物 -->
    <HomeNew />
    <!-- 人气推荐 -->
    <HomeHot />
  </div>
</template>
  <script>
import HomeCategory from "./components/home-category";
import HomeBanner from "./components/home-banner.vue";
import HomeNew from "./components/home-new";
import HomeHot from './components/home-hot'
export default {
  name: "PageHome",
  components: { HomeCategory, HomeBanner, HomeNew, HomeHot }
};
</script>
  <style scoped lang="less"></style>