<template>
  <v-app>
    <div id="app">
      <div
        class="page-container md-layout-column"
        v-if="userName && userName !== ''"
      >
        <md-toolbar :md-elevation="1">
          <md-button class="md-icon-button" @click="showNavigation = true">
            <md-icon>menu</md-icon>
          </md-button>
          <span class="md-title">{{ $route.name }}</span>

          <div class="md-toolbar-section-end">Well Howdy {{ userName }}</div>
        </md-toolbar>

        <md-drawer :md-active.sync="showNavigation" md-swipeable>
          <md-toolbar class="md-transparent md-title-nav" md-elevation="0">
            <img class="vue_logo center" src="./assets/logo.png" />
            <span class="md-title">Bungalo Listings</span>
          </md-toolbar>

          <md-list>
            <router-link to="/">
              <md-list-item @click="hideSidebar()">
                <md-icon>account_circle</md-icon>

                <div class="md-list-item-text">
                  <span>Name page</span>
                </div>
              </md-list-item>
            </router-link>

            <router-link to="/graph">
              <md-list-item @click="hideSidebar()">
                <md-icon>business</md-icon>

                <div class="md-list-item-text">
                  <span>Listings page</span>
                </div>
              </md-list-item>
            </router-link>
          </md-list>
        </md-drawer>
      </div>

      <transition name="slide">
        <router-view style="flex-grow : 1;"></router-view>
      </transition>
    </div>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import store from "@/store";

@Component({
  components: {}
})
export default class App extends Vue {
  showNavigation = false;

  get userName() {
    return this.$store.state.userName;
  }

  constructor() {
    super();
  }

  created() {}

  mounted() {}

  hideSidebar() {
    this.showNavigation = false;
  }
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
.md-content {
  padding: 16px;
}
.md-drawer {
  padding: 20px;
  .md-title-nav {
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      right: 15px;
      height: 1px;
      width: calc(100% - 30px);
      background-color: rgba(180, 180, 180, 0.3);
    }
  }
  .vue_logo {
    height: 40px;
  }
}
</style>
