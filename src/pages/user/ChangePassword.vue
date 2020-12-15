<template>
  <v-card>
    <v-card-title>Change Password</v-card-title>
    <v-alert v-if="this.confirmerror||this.newpassworderror||this.currentpassworderror"
        border="top"
        color="dark lighten-2"
        dark
      >
         <p v-if="this.confirmerror" class="font-weight-black">{{confirmerror}}</p>
         <p v-if="this.newpassworderror" class="font-weight-black">{{newpassworderror}}</p>
         <p v-if="this.currentpassworderror" class="font-weight-black">{{currentpassworderror}}</p>

      </v-alert>
      
    <div class="ml-5 mr-5">
      <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="changePassword">
        <v-text-field 
        v-model="userlist.currentpassword" 
        name="oldpassword" 
        label="Old Password" 
        :rules="currentpasswordRules"
        required>
        </v-text-field>
        <v-text-field 
        v-model="userlist.newpassword" 
        name="newpassword" 
        label="New Password"
        :rules="newpasswordRules"
        required>
        </v-text-field>
        <v-text-field 
        v-model="userlist.confirmpassword" 
        name="confirmpassword" 
        label="Confirm Password"
        :rules="confirmpasswordRules"
        required>
        </v-text-field>
        <div class="d-flex justify-end">
        <v-btn 
            type="submit" 
            :disabled="!valid"
            class="mr-5 mb-5" 
            color="success"
        >
            Change Password
        </v-btn>
        </div>
      </v-form>
    </div>
  </v-card>
</template>

<script src="../../services/pages/user/change-password.js">
</script>

<style scoped src="../../assets/css/pages/post/post-list.css">
</style>

