<template>
  <div>
    <h4> Список пользователей </h4>
    <post-item
      v-for="(post,i) in posts"
      :key = "i"
      :post = "post"
    />
  </div>
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
  }
}
</script>

<style scoped>

</style>
