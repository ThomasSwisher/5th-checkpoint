<template>
  <div class="left-sidebar">
    <div class="side-bar-container">
      <img class="rounded-circle" :src="state.user.picture" alt="Creator image">
      <p>{{ state.user.name }}</p>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'LeftSidebar',
  setup() {
    //    const route = useRoute()
    const state = reactive({
      account: computed(() => AppState.account),
      user: computed(() => AppState.user)
    })
    return { state }
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 20vh;
  margin-top: 2vh;
}

.side-bar-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 200px;
  margin-top: 25px;
  min-height: 80vh;
}

.left-sidebar {
  display: flex;
  flex-grow: 1;
  justify-content: center;
}

</style>
