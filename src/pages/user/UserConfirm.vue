<template>
  <div class="create">
    <v-card>
      <v-card-title>User Create</v-card-title>
      <div class="ml-5 mr-5">
        <v-form @submit.prevent="storeUser()">
          {{image.path}}
            <v-card class="mx-auto my-12" max-width="400">
                <img :src="image_url+image.path" height="250" width="400">
                <v-card-title>Profile Photo</v-card-title>
            </v-card>
            <v-row class="mx-auto my-12" max-width="400">
                <v-text-field v-model="userlist.name" :placeholder="$route.params.userlist.name" name="name" label="Name" readonly></v-text-field>
                <v-text-field v-model="userlist.email" :placeholder="$route.params.userlist.email"  name="email" label="Email" readonly></v-text-field>
                <v-text-field v-model="userlist.password" :placeholder="$route.params.userlist.password" name="password" label="Passwored" readonly></v-text-field>
                <v-text-field v-model="userlist.type" :placeholder="$route.params.userlist.type" name="type" label="Type" readonly></v-text-field>
                <v-text-field v-model="userlist.phone" :placeholder="$route.params.userlist.phone" name="phone" label="Phone" readonly></v-text-field>
                <v-text-field v-model="userlist.dob" :placeholder="$route.params.userlist.dob" name="dob" label="Date Of Birth" readonly></v-text-field>
                <v-text-field v-model="userlist.address" :placeholder="$route.params.userlist.address" name="address" label="Address" readonly></v-text-field>
            </v-row>
            <div class="d-flex justify-end mb-6"> 
                <v-btn type="submit" color="success" class="mr-4 mb-5"> Create </v-btn>
                <v-btn color="error" class="mr-4 mb-5"> Clear </v-btn>
            </div>
        </v-form>
      </div>
    </v-card>
  </div>
</template>

<script src="../../services/pages/user/user-confirm.js">
</script>

<style scoped src="../../assets/css/pages/post/post-list.css">
</style>
