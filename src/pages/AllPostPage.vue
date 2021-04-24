<template>
  <div class="home container flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="row">
      <div class="col">
        <AllPost v-for="post in state.posts.posts" :key="post.id" :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, computed } from 'vue'
import Notification from '../utils/Notification'
import { postsService } from '../services/PostsService'
import { AppState } from '../AppState'
export default {
  name: 'Posts',
  setup() {
    const state = reactive({
      posts: computed(() => AppState.posts)
    })
    onMounted(async() => {
      try {
        await postsService.getAll()
      } catch (error) {
        Notification.toast('Error: ' + error, 'error')
      }
    })
    return {
      state
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
