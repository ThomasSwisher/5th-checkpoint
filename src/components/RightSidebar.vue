<template>
  <div class="right-sidebar">
    <div class="side-bar-container">
      <div>
        {{ state.rightSidebar.tall }}
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive, onMounted } from 'vue'
import { AppState } from '../AppState'
import { postsService } from '../services/PostsService'
export default {
  name: 'RightSidebar',
  setup() {
    const state = reactive({
      rightSidebar: computed(() => AppState.rightSidebar)
    })

    onMounted(async() => {
      await postsService.getAds()
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

.right-sidebar {
  display: flex;
  flex-grow: 1;
  justify-content: center;
}

</style>
