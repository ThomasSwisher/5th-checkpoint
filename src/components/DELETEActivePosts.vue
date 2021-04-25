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
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { postsService } from '../services/PostsService'
import { useRoute } from 'vue-router'
export default {
  name: 'ActivePosts',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  setup() {
    const route = useRoute()
    const state = reactive({
      activePosts: computed(() => AppState.activePosts)
    })

    onMounted(async() => {
      await postsService.getByProfileId(route.params.id)
    })

    return {
      state
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
