<template>
  <div class="create">
    <v-card>
      <v-card-title>User Edit</v-card-title>
      <div class="ml-5 mr-5">
        <v-form ref="form" @submit.prevent="updateProfile()">
            <v-card class="mx-auto my-12" max-width="400" >
                <img v-if="url" :src="url" height="250" width="400">
                <img :src="image_url+userProfile" height="250" width="400" v-if="!url">
                <v-card-title>Profile Photo</v-card-title>
                <v-btn raised class="primary" @click="uploadProfile">New Profile Upload</v-btn>
                <input type="file" class="mb-5" name="profile" style="display:none" ref="profileInput" @change="onFileChange">
            </v-card>
            
            <v-text-field v-model="userlist.name" name="name" label="Name" :placeholder="userName"></v-text-field>
            <v-text-field v-model="userlist.email" name="email" label="Email" :placeholder="userEmail"></v-text-field>
            <v-text-field v-model="userlist.type" name="type" label="Type" :placeholder="userType"></v-text-field>
            <v-text-field v-model="userlist.phone" name="phone" label="Phone" :placeholder="userPhone"></v-text-field>
            <v-text-field v-model="userlist.dob" name="dob" label="Date Of Birth" :placeholder="userDob"></v-text-field>
            <v-text-field v-model="userlist.address" name="address" label="Address" :placeholder="userAddress"></v-text-field>
            
            <div class="d-flex justify-end mb-6"> 
                <v-btn type="submit" color="success" class="mr-4 mb-5"> Edit </v-btn>
                <v-btn color="error" class="mr-4 mb-5" @click="reset()"> Clear </v-btn>
            </div>
        </v-form>
      </div>
    </v-card>
  </div>
</template>

<script src="../../services/pages/user/profile-update.js">
</script>

<style scoped src="../../assets/css/pages/post/post-list.css">
</style>
