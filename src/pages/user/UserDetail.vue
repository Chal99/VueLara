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
       <img :src="image_url+user.profile" height="250" width="350">
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
        <p class="font-weight-medium">{{ user.id }}</p>
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
        <p class="font-weight-medium">{{ user.email }}</p>
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
        <p class="font-weight-medium">{{ user.type }}</p>
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
        <p class="font-weight-medium">{{ user.phone }}</p>
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
        <p class="font-weight-medium">{{ user.dob }}</p>
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
        <p class="font-weight-medium">{{ user.address }}</p>
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
        <p class="font-weight-medium">{{ user.created_at | moment }}</p>
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
        <p class="font-weight-medium">{{ user.name }}</p>
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
        <p class="font-weight-medium">{{ user.updated_at | moment }}</p>
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
        <p class="font-weight-medium">{{ user.name }}</p>
      </v-col>
    </v-row>
    <div class="d-flex justify-end">
      <v-btn color="success" class="mb-5 mr-5"> Close </v-btn>
    </div>
  </v-card>
</template>

<script src="../../services/pages/user/user-detail.js">
</script>
