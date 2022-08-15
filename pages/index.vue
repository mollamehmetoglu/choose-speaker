<template>
  <div class="container">
    <User />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import User from "@/components/User.vue";

export default Vue.extend({
  name: "IndexPage",
  components: {
    User,
  },
});
</script>
