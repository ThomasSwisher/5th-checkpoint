<template>
  <div class="about text-center" v-if="state.activeProfile">
    <!-- Render the active profile picture and name -->
    <div class="col-12 post-header">
      <div class="d-flex">
        <img class="rounded-circle" :src="state.activeProfile.picture" alt="Creator image">
        <div class="ml-3 d-flex flex-column justify-content-center">
          <h3 class="text-secondary">
            {{ state.activeProfile.name }}
          </h3>
          <h3 class="m-0">
            Posts: {{ state.activePosts.length }}
          </h3>
        </div>
      </div>
    </div>
    <!--------------------------TODO Create Post
    <form @submit.prevent="create" v-if="state.user.isAuthenticated && state.activeProfile.id === state.account.id">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text"
               class="form-control"
               name="title"
               id="title"
               aria-describedby="helpId"
               placeholder="Title..."
               v-model="state.newPost.title"
        >
        <label for="imgUrl">Image</label>
        <input type="text"
               class="form-control"
               name="imgUrl"
               id="imgUrl"
               aria-describedby="helpId"
               placeholder="Image Url..."
               v-model="state.newPost.imgUrl"
        >
      </div>
      <button type="submit" class="btn btn-success">
        Create
      </button>
    </form>
    <h2>My Posts</h2>
    <div class="row">
      <PostPhoto v-for="post in state.activePosts" :key="post.id" :post="post" />
    </div>
  </div>------------------------>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { postsService } from '../services/PostsService'
// import { accountService } from '../services/AccountService'
import Notification from '../utils/Notification'
import { logger } from '../utils/Logger'
import { useRoute } from 'vue-router'
export default {
  name: 'Profile',
  setup() {
    const route = useRoute()
    const state = reactive({
      // newPost: {},
      // account: computed(() => AppState.account),
      user: computed(() => AppState.user),
      activePosts: computed(() => AppState.activePosts),
      activeProfile: computed(() => AppState.activeProfile)
    })

    onMounted(async() => {
      await postsService.getByProfileId(route.params.id)
    //  await accountService.getProfile(route.params.id)
    })

    return {
      state,
      async create() {
        try {
          await postsService.create(state.newPost)
          state.newPost = {}
          Notification.toast('Successfully Created Post', 'success')
        } catch (error) {
          logger.log(error)
          Notification.toast('Error: ' + error, 'error')
        }
      }
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
