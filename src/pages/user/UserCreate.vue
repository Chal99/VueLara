<template>
  <div class="create">
    <v-card>
      <v-card-title>User Create</v-card-title>
      <div class="ml-5 mr-5">
        <v-form ref="form" v-model="valid" lazy-validation enctype="multipart/form-data">
          <v-text-field
            v-model="user.name"
            name="name"
            label="Name"
            :rules="user.nameRules"
            required
          ></v-text-field>
          <v-text-field
            v-model="user.email"
            name="email"
            label="Email"
            :rules="user.emailRules"
            required
          ></v-text-field>
          <v-text-field
            v-model="user.password"
            name="password"
            label="Password"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            :rules="user.passwordRules"
            required
          ></v-text-field>
          <v-text-field
            v-model="user.confirmpassword"
            name="confirmpassword"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            :rules="user.confirmpasswordRules"
            label="ConfirmPassword"
            required
          ></v-text-field>
          <v-select
            v-model="user.type"
            :items="user.items"
            :rules="user.typeRules"
            label="Type"
            required
          ></v-select>
          <v-text-field
            v-model="user.phone"
            name="phone"
            label="Phone"
            :rules="user.phoneRules"
            required
          ></v-text-field>
          <v-text-field
            v-model="user.dob"
            name="dob"
            label="Date Of Birth"
            :rules="user.dobRules"
            required
          ></v-text-field>
          <v-text-field
            v-model="user.address"
            name="address"
            label="Address"
            :rules="user.addressRules"
            required
          ></v-text-field>
          <img v-if="url" :src="url" height="250" width="400">
          <v-btn raised class="primary" @click="uploadProfile">Upload Image</v-btn>
          <input
            type="file"
            name="profile"
            style="display: none"
            ref="profileInput"
            @change="onUploadProfile"
            :rules="user.profileRules"
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
