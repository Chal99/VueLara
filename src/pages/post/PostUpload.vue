<template>
  <v-card>
    <v-card-title>Post Confirm</v-card-title>
    <div class="ml-5 mr-5">
      <v-form @submit.prevent="uploadPost()">
         <v-btn raised class="primary" @click="upload">Upload Excel</v-btn>
          <input
            type="file"
            name="profile"
            style="display: none"
            ref="ExcelInput"
            @change="onUpload"
          />
        <div class="d-flex justify-end">
          <v-btn type="submit" class="mr-5 mb-5" color="success">Upload</v-btn>
          <v-btn class="mr-5 mb-5" color="error" @click="cancel()">Cancel</v-btn>
        </div>
      </v-form>
    </div>
  </v-card>
</template>

<script src="../../services/pages/post/post-upload.js">
</script>

<style scoped src="../../assets/css/pages/post/post-list.css">
</style>

