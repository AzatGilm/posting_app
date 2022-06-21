<template>
  <form class="form" @submit.prevent>
    <h4> Создание поста </h4>
    <my-input
      type="text"
      placeholder="Название"
      v-model="post.title"
    />
    <my-input
      type="text"
      placeholder="Описание"
      v-model="post.body"
    />
    <my-button
      @click="createPost"
      style="align-self: flex-end; margin-top: 15px"
    >
        Создать пост
    </my-button>
  </form>
</template>

<script>

export default {
  components: {

  },
  data () {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost () {
      this.post.id = Date.now()
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: ''
      }
    }
  }
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
}
</style>
