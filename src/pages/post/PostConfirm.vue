<template>
  <v-card>
    <v-card-title>Post Confirm</v-card-title>
    <div class="ml-5 mr-5">
      <v-form ref="form" @submit.prevent="storePost">
        <v-text-field v-model="postlist.title" name="title" label="Title" required>{{ $route.params.title }}</v-text-field>
        <v-text-field v-model="postlist.description" name="description" label="Description" required>{{ $route.params.description }}</v-text-field>
        <div class="d-flex justify-end">
          <v-btn type="submit" class="mr-5 mb-5" color="success">Save</v-btn>
          <v-btn class="mr-5 mb-5" color="error">Cancel</v-btn>
        </div>
      </v-form>
    </div>
  </v-card>
</template>

<script src="../../services/pages/post/post-list.js">
</script>

<style scoped src="../../assets/css/pages/post/post-list.css">
</style>

