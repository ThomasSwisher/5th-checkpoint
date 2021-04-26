<template>
  <header>
    <Navbar />
  </header>
  <main>
    <div class="row flex-grow-1">
      <div class="col-3">
        <LeftSidebar />
      </div>
      <div class="col-6">
        <router-view />
      </div>
      <div class="col-3">
        <RightSidebar />
      </div>
    </div>
  </main>
  <footer>
    <div class="bg-dark text-light text-center p-4">
      Made with Bullets
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

</style>
