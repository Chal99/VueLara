<template>
  <v-card class="mx-auto pl-5">
    <v-row>
      <v-col :cols="2">
        <p class="font-weight-bold">Name</p>
      </v-col>
      <v-col :cols="1">
        <p>:</p>
      </v-col>
      <v-col :cols="9">
       <img :src="image_url+$route.params.userId.profile" height="250" width="350">
      </v-col>
    </v-row>
    <v-row>
      <v-col :cols="2">
        <p class="font-weight-bold">Name</p>
      </v-col>
      <v-col :cols="1">
        <p>:</p>
      </v-col>
      <v-col :cols="9">
        <p class="font-weight-medium">{{ $route.params.userId.profile }}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col :cols="2">
        <p class="font-weight-bold">Email</p>
      </v-col>
      <v-col :cols="1">
        <p>:</p>
      </v-col>
      <v-col :cols="9">
        <p class="font-weight-medium">{{ $route.params.userId.email }}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col :cols="2">
        <p class="font-weight-bold">Type</p>
      </v-col>
      <v-col :cols="1">
        <p>:</p>
      </v-col>
      <v-col :cols="9">
        <p class="font-weight-medium">{{ $route.params.userId.type }}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col :cols="2">
        <p class="font-weight-bold">Phone Number</p>
      </v-col>
      <v-col :cols="1">
        <p>:</p>
      </v-col>
      <v-col :cols="9">
        <p class="font-weight-medium">{{ $route.params.userId.phone }}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col :cols="2">
        <p class="font-weight-bold">Date Of Birth</p>
      </v-col>
      <v-col :cols="1">
        <p>:</p>
      </v-col>
      <v-col :cols="9">
        <p class="font-weight-medium">{{ $route.params.userId.dob }}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col :cols="2">
        <p class="font-weight-bold">Address</p>
      </v-col>
      <v-col :cols="1">
        <p>:</p>
      </v-col>
      <v-col :cols="9">
        <p class="font-weight-medium">{{ $route.params.userId.address }}</p>
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
        <p class="font-weight-medium">{{ $route.params.userId.created_at }}</p>
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
        <p class="font-weight-medium">{{ $route.params.userId.name }}</p>
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
        <p class="font-weight-medium">{{ $route.params.userId.updated_at }}</p>
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
        <p class="font-weight-medium">{{ $route.params.userId.name }}</p>
      </v-col>
    </v-row>
    <div class="d-flex justify-end">
      <v-btn color="success" class="mb-5 mr-5"> Close </v-btn>
    </div>
  </v-card>
</template>

<script src="../../services/pages/user/user-detail.js">
</script>
