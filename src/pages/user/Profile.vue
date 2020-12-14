<template>
  <v-card class="mx-auto pl-5">
    <v-row>
      <v-col :cols="2">
        <p class="font-weight-bold">Profile</p>
      </v-col>
      <v-col :cols="1">
        <p>:</p>
      </v-col>
      <v-col :cols="9">
       <img :src="image_url+userProfile" height="250" width="350">
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
        <p class="font-weight-medium">{{userName}}</p>
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
        <p class="font-weight-medium">{{userEmail}}</p>
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
        <p class="font-weight-medium">{{userType}}</p>
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
        <p class="font-weight-medium">{{userPhone}}</p>
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
        <p class="font-weight-medium">{{userDob}}</p>
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
        <p class="font-weight-medium">{{userAddress}}</p>
      </v-col>
    </v-row>
    
    <div class="d-flex justify-end">
      <v-btn type="button" color="success" class="mb-5 mr-5" @click="changePassword()"> Change Password </v-btn>
      <v-btn type="button" color="warning" class="mb-5 mr-5" @click="editProfile()"> Edit </v-btn>
      <v-btn type="button" color="error" class="mb-5 mr-5" @click="close()"> Close </v-btn>
    </div>
    
  </v-card>
</template>

<script src="../../services/pages/user/profile.js">
</script>

<style scoped src="../../assets/css/pages/post/post-list.css">
</style>