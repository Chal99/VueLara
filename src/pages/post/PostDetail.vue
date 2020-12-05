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
        <p class="font-weight-medium">{{ $route.params.postId.title }}</p>
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
        <p class="font-weight-medium">{{ $route.params.postId.description }}</p>
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
        <p class="font-weight-medium">{{ $route.params.postId.status }}</p>
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
        <p class="font-weight-medium">{{ $route.params.postId.created_at }}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col :cols="2">
        <p class="font-weight-bold">Created User</p>
      </v-col>
      <v-col :cols="1">
        <p>:</p>
      </v-col>
      <v-col :cols="9">
        <p class="font-weight-medium">
          {{ $route.params.postId.creat_user_id }}
        </p>
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
        <p class="font-weight-medium">{{ $route.params.postId.updated_at }}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col :cols="2">
        <p class="font-weight-bold">Updated User</p>
      </v-col>
      <v-col :cols="1">
        <p>:</p>
      </v-col>
      <v-col :cols="9">
        <p class="font-weight-medium">{{ $route.params.postId.creat_user_id }}</p>
      </v-col>
    </v-row>
    

    <div class="d-flex justify-end">
        <v-btn color="primary" class="post-list-btn mb-5 mr-5">Close</v-btn>
    </div>
  </v-card>
</template>

