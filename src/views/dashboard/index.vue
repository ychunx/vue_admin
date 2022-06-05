<template>
  <div>
    <TopCard :list="list" />
    <Sale :list="list" />
    <FooterCard :list="list" />
  </div>
</template>

<script>
import TopCard from "./TopCard";
import Sale from "./Sale";
import FooterCard from "./FooterCard";

import { mapState } from "vuex";

export default {
  name: "Dashboard",
  components: {
    TopCard,
    Sale,
    FooterCard,
  },
  mounted() {
    this.$store.dispatch("getHomeData");
  },
  computed: {
    ...mapState({
      list: (state) => state.home.homeList,
    }),
  },
};
</script>

<style>
</style>
