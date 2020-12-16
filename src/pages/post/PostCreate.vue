<template>
  <div class="create">
    <v-card>
      <v-card-title>Post Create</v-card-title>
      <div class="ml-5 mr-5">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field v-model="post.title" name="title" label="Title" v-if="$route.params.post" :placeholder="$route.params.post.title" :rules="post.titleRules" required></v-text-field>
          <v-text-field v-model="post.title" name="title" label="Title" v-else :rules="post.titleRules" required></v-text-field>
          <v-text-field v-model="post.description" name="description" label="Description" v-if="$route.params.post" :placeholder="$route.params.post.description" :rules="post.descriptionRules" required></v-text-field>
          <v-text-field v-model="post.description" name="description" label="Description" v-else :rules="post.descriptionRules" required></v-text-field>

          <div class="d-flex justify-end mb-6"> 
            <v-btn color="success" class="mr-4 mb-5" :disabled="!valid" @click="validate()"> Create </v-btn>
            <v-btn color="error" class="mr-4 mb-5" @click="reset()"> Clear </v-btn>
          </div>
        </v-form>
      </div>
    </v-card>
  </div>
</template>

<script src="../../services/pages/post/post-create.js">
</script>

<style scoped src="../../assets/css/pages/post/post-list.css">
</style>

