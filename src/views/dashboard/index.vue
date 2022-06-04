<template>
  <div>
    <TopCard />
    <Sale />
  </div>
</template>

<script>
import TopCard from "./TopCard";
import Sale from "./Sale";
export default {
  name: "Dashboard",
  components: {
    TopCard,
    Sale,
  },
};
</script>

<style>
</style>
