<template>
  <v-card class="mx-auto pl-5">
      <v-row>
      <v-col :cols="2">
        <p class="font-weight-bold">Title</p>
      </v-col>
      <v-col :cols="1">
        <p>:</p>
      </v-col>
      <v-col :cols="9">
        <p class="font-weight-medium">{{ post.title }}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col :cols="2">
        <p class="font-weight-bold">Description</p>
      </v-col>
      <v-col :cols="1">
        <p>:</p>
      </v-col>
      <v-col :cols="9">
        <p class="font-weight-medium">{{ post.description }}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col :cols="2">
        <p class="font-weight-bold">Status</p>
      </v-col>
      <v-col :cols="1">
        <p>:</p>
      </v-col>
      <v-col :cols="9">
        <p class="font-weight-medium">{{ post.status }}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col :cols="2">
        <p class="font-weight-bold">Created Date</p>
      </v-col>
      <v-col :cols="1">
        <p>:</p>
      </v-col>
      <v-col :cols="9">
        <p class="font-weight-medium">{{ post.created_at | moment }}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col :cols="2">
        <p class="font-weight-bold">Updated Date</p>
      </v-col>
      <v-col :cols="1">
        <p>:</p>
      </v-col>
      <v-col :cols="9">
        <p class="font-weight-medium">{{ post.updated_at | moment }}</p>
      </v-col>
    </v-row>
    <div class="d-flex justify-end">
        <v-btn color="primary" class="post-list-btn mb-5 mr-5">Close</v-btn>
    </div>
  </v-card>
</template>

<script src="../../services/pages/post/post-detail.js">
</script>

