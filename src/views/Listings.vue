<template>
  <div>
    <div class="content" v-if="!userName || userName === ''">
      You must log in first.
      <router-link to="/">
        <button class="paginationButton bColorRegular">Go Login Page</button>
      </router-link>
    </div>
    <div class="content" v-if="userName && userName !== ''">
      Hello there {{ userName }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import store from "@/store";

@Component({
  components: {
    
  }
})
export default class Graph extends Vue {
  get userName() {
    return this.$store.state.userName;
  }

  constructor() {
    super();
  }

  created() {}

  mounted() {}
}
</script>

<style lang="less" scoped>
</style>
