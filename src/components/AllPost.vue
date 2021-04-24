<template>
  <div class="row post-styling">
    <div class="col">
      <!-- <div class=" position-relative"> -->
      <!-- <router-link :to="{name: 'ProjectDetails', params: {id: project.id}}"> -->
      <p>{{ post.creator.name }}</p>
      <img class="rounded-circle small-img position-absolute" :src="post.creator.picture" alt="Creator Photo">
      <div class="text-left">
      </div>
      <!-- </router-link> -->
    </div>
    <div class="col">
      <p>{{ post.body }}</p>
    </div>
    <div>
      <button>
        <img alt="Likes" src="../assets/img/heart.png" height="15" />
      </button>
      <div>
        LikesHere {{}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllPost',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
 .post-styling {
   background-color: white;
    margin: 20px;
    -webkit-box-shadow: 5px 5px 15px 5px #878787;
    box-shadow: 5px 5px 15px 5px #878787;
    padding: 20px;
    flex-direction: column;
 }

 .small-img{
   width: 3em;
   left: 0;
   top: 5px
 }
</style>
