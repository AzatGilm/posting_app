<template>
  <div>
    <h1> Страница с постами </h1>
    <my-input
      v-focus
      v-model="searchQuery"
      placeholder="Поиск..."
    />
    <div class="app__btns">
      <my-button
      >
      Создать пост
      </my-button
      >
      <my-select
        v-model="selectedSort"
        :options="sortOptions"
      >
      </my-select>
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form
      />
    </my-dialog>
    <post-list
      :posts="sortedAndSearchedPosts"
      v-if="!isPostLoading"
    />
      <div v-else> Идет загрузка... </div>
  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
import { usePosts } from '@/hooks/usePosts'
import { useSortedPosts } from '@/hooks/useSortedPosts'
import { useSortedAndSearchedPosts } from '@/hooks/useSortedAndSearchedPosts'

export default {
  components: {
    PostForm,
    PostList
  },
  data () {
    return {
      dialogVisible: false,
      sortOptions: [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По содержимому' }
      ]
    }
  },
  setup () {
    const { posts, isPostLoading, totalPages } = usePosts(10)
    const { selectedSort, sortedPosts } = useSortedPosts(posts)
    const { searchQuery, sortedAndSearchedPosts } = useSortedAndSearchedPosts(sortedPosts)
    return {
      posts,
      isPostLoading,
      totalPages,
      selectedSort,
      sortedPosts,
      searchQuery,
      sortedAndSearchedPosts
    }
  }
}
</script>

<style>

.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
.page__wrapper {
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid black;
  padding: 10px;
}
.current-page {
  border: 2px solid teal;
}
.observer {
  height: 30px;
}
</style>
