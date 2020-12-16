<template>
  <v-card>
    <v-card-title>Post Edit</v-card-title>
    <div class="ml-5 mr-5">
      <v-form @submit.prevent="updatePost()">
        <v-text-field v-model="post.title" name="title" label="Title" :placeholder="$route.params.item.title"></v-text-field>
        <v-text-field v-model="post.description" name="description" label="Description" :placeholder="$route.params.item.description"></v-text-field>
        <input type="checkbox" v-model="post.status" true-value="1" false-value="0">
        <div class="d-flex justify-end">
          <v-btn type="submit" class="mr-5 mb-5" color="success">Update</v-btn>
        </div>
      </v-form>
    </div>
  </v-card>
</template>

<script src="../../services/pages/post/post-update.js">
</script>

<style scoped src="../../assets/css/pages/post/post-list.css">
</style>

