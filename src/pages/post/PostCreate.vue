<template>
  <v-card>
    <v-card-title>Post Create</v-card-title>
    <div class="ml-5 mr-5">
      <v-form ref="form">
        <v-text-field v-model="postlist.title" name="title" label="Title" required></v-text-field>
        <v-text-field v-model="postlist.description" name="description" label="Description" required></v-text-field>
        <div class="d-flex justify-end mb-6">
          <router-link :to="{ name: 'post-confirm', params: { title : postlist.title, description: postlist.description }}" class="post-list-btn">create</router-link>
          <v-btn color="error" class="mr-4 mb-5"> Cancel </v-btn>
        </div>
      </v-form>
    </div>
  </v-card>
</template>

<script src="../../services/pages/post/post-list.js">
</script>

<style scoped src="../../assets/css/pages/post/post-list.css">
</style>

