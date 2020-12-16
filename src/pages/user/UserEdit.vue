<template>
  <div class="create">
    <v-card>
      <v-card-title>User Create</v-card-title>
      <div class="ml-5 mr-5">
        <v-form ref="form"  @submit.prevent="updateUser()">
            <v-card class="mx-auto my-12" max-width="400" >
                <img :src="image_url+$route.params.item.profile" height="250" width="400">
                <v-card-title>Profile Photo</v-card-title>
                <v-btn raised class="primary" @click="uploadProfile">New Profile Upload</v-btn>
                <input type="file" class="mb-5" name="profile" style="display:none" ref="profileInput" @change="onUploadProfile">
            </v-card>
            
            <v-text-field v-model="user.name" name="name" label="Name" :placeholder="$route.params.item.name"></v-text-field>
            <v-text-field v-model="user.email" name="email" label="Email" :placeholder="$route.params.item.email"></v-text-field>
            <v-text-field v-model="user.type" name="type" label="Type" :placeholder="$route.params.item.type"></v-text-field>
            <v-text-field v-model="user.phone" name="phone" label="Phone" :placeholder="$route.params.item.phone"></v-text-field>
            <v-text-field v-model="user.dob" name="dob" label="Date Of Birth" :placeholder="$route.params.item.dob"></v-text-field>
            <v-text-field v-model="user.address" name="address" label="Address" :placeholder="$route.params.item.address"></v-text-field>
            
            <div class="d-flex justify-end mb-6"> 
                <v-btn type="submit" color="success" class="mr-4 mb-5"> Create </v-btn>
                <v-btn color="error" class="mr-4 mb-5" @click="reset()"> Clear </v-btn>
            </div>
        </v-form>
      </div>
    </v-card>
  </div>
</template>

<script src="../../services/pages/user/user-update.js">
</script>

<style scoped src="../../assets/css/pages/post/post-list.css">
</style>
