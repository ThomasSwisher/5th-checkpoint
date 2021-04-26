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
  max-width: 8vh;
  margin-top: 2vh;
}

.side-bar-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  margin-top: 25px;
  min-height: 45vh;
  margin: 20px;
  -webkit-box-shadow: 5px 5px 15px 5px #878787;
  box-shadow: 5px 5px 15px 5px #878787;
  padding: 20px;
  min-width: 17vh;
}

.left-sidebar {
  display: flex;
  flex-grow: 1;
  justify-content: center;
}

</style>
