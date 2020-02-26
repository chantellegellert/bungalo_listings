<template>
  <div id="app">
    <transition name="slide">
      <router-view style="flex-grow : 1;"></router-view>
    </transition>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import store from "@/store";

@Component({
  components: {}
})
export default class App extends Vue {


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

<!-- not scoped to give default across form -->
<style lang="less">
body {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #717173;
  display: flex;
  flex-flow: column;
  height: 100%;
}
</style>

<style lang="less" scoped>

</style>
