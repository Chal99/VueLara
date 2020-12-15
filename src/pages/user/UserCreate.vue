<template>
  <div class="create">
    <v-card>
      <v-card-title>User Create</v-card-title>
      <div class="ml-5 mr-5">
        <v-form ref="form" v-model="valid" lazy-validation enctype="multipart/form-data">
          <v-text-field
            v-model="userlist.name"
            name="name"
            label="Name"
            :rules="userlist.nameRules"
            required
          ></v-text-field>
          <v-text-field
            v-model="userlist.email"
            name="email"
            label="Email"
            :rules="userlist.emailRules"
            required
          ></v-text-field>
          <v-text-field
            v-model="userlist.password"
            name="password"
            label="Password"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            :rules="userlist.passwordRules"
            required
          ></v-text-field>
          <v-text-field
            v-model="userlist.confirmpassword"
            name="confirmpassword"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            :rules="userlist.confirmpasswordRules"
            label="ConfirmPassword"
            required
          ></v-text-field>
          <v-select
            v-model="userlist.type"
            :items="userlist.items"
            :rules="userlist.typeRules"
            label="Type"
            required
          ></v-select>
          <v-text-field
            v-model="userlist.phone"
            name="phone"
            label="Phone"
            :rules="userlist.phoneRules"
            required
          ></v-text-field>
          <v-text-field
            v-model="userlist.dob"
            name="dob"
            label="Date Of Birth"
            :rules="userlist.dobRules"
            required
          ></v-text-field>
          <v-text-field
            v-model="userlist.address"
            name="address"
            label="Address"
            :rules="userlist.addressRules"
            required
          ></v-text-field>
          <v-btn raised class="primary" @click="uploadProfile">Upload Image</v-btn>
          <input
            type="file"
            name="profile"
            style="display: none"
            ref="profileInput"
            @change="onUploadProfile"
            :rules="userlist.profileRules"
            required
          />
          <div class="d-flex justify-end mb-6">
            <v-btn
              type="submit"
              color="success"
              class="mr-4 mb-5"
              :disabled="!valid"
              @click="validate()"
            >
              Create
            </v-btn>
            <v-btn color="error" class="mr-4 mb-5" @click="reset()"> Clear </v-btn>
          </div>
        </v-form>
      </div>
    </v-card>
  </div>
</template>

<script src="../../services/pages/user/user-create.js"></script>

<style scoped src="../../assets/css/pages/post/post-list.css"></style>
