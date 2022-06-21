<template>
  <div v-if="posts.length>0">
    <h4> Список пользователей </h4>
    <post-item
      v-for="post in posts"
      :key = "post.id"
      :post = "post"
      @remove="$emit('remove', post)"
    />
  </div>
  <h2 v-else style="color:red" > Список пользователей пуст </h2>
</template>

<script>
import PostItem from './PostItem'

export default {
  components: {
    PostItem
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
