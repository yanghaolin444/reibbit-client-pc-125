<template>
  <AppTopnav />
  <AppHeaderSticky />
  <AppHeader />
  <Home />
  <AppFooter />
</template>
<script>
import AppTopnav from "@/components/app-topnav.vue";
import AppHeaderSticky from "@/components/app-header-sticky.vue";
import AppHeader from "@/components/app-header";
import AppFooter from "@/components/app-footer";
import Home from "@/views/home/index.vue"
import { useStore } from "vuex";

export default {
  name: "Layout",
  components: { AppHeader, AppFooter, AppHeaderSticky, AppTopnav,Home },
  // 获取下分类数据
  setup() {
    const store = useStore();
    store.dispatch("category/getList");
  },
};
</script>

<style lang="less" scoped>
.app-body {
  min-height: 600px;
}
</style>
