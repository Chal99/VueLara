<template>
<v-card>
    <v-card-title>
        Post list
        <v-spacer></v-spacer>
            <v-row class="filter-bar">
                <v-form @submit.prevent="searchPost">
                <v-col md="2.5">
                    <v-text-field v-model="search" label="Search keyword" hide-details="auto"></v-text-field>
                </v-col>
                <v-btn class="post-list-btn mr-4" type="submit" color="primary">Filter</v-btn>
                </v-form>
                <v-btn class="post-list-btn mr-4" color="primary" @click="createPost()">Create</v-btn>
                <v-btn class="post-list-btn mr-4" color="primary" @click="uploadPost()">Upload</v-btn>
                <v-btn class="post-list-btn mr-4" color="primary">Download</v-btn>
            </v-row>
    </v-card-title>
    <v-container>
        
       
        <v-data-table :headers="headers" :items="showList">
            <template v-slot:[`item.title`]="{ item }">
                <!-- <a v-if="item.title">{{item.title}}</a> -->
                <router-link :to="{ name: 'post-detail', params: { postId: item.id }}">{{item.title}}</router-link>
            </template>
            <template v-slot:[`item.created_at`]="{ item }">
               <p>{{ item.created_at | moment }}</p>
            </template>
            <template v-if="loginType==='0'" v-slot:[`item.operation`]="{ item }">
                <v-row v-if="item.title">
                    <div class="operation-btn">
                        <v-btn color="primary" class="post-list-btn" @click="editPost(item)">Edit</v-btn>
                    </div>
                    <div class="operation-btn">
                        <v-btn color="error" class="post-list-btn"  @click="deletePost(item.id)">Delete</v-btn>
                    </div>
                </v-row>
            </template>
        </v-data-table>
    </v-container>
</v-card>
</template>

<script src="../../services/pages/post/post-list.js">
</script>

<style scoped src="../../assets/css/pages/post/post-list.css">
</style>
