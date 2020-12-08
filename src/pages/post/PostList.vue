<template>
<v-card>
    <v-card-title>
        Post list
        <v-spacer></v-spacer>
        <v-form ref="form">
            <v-row class="filter-bar">
                <v-col md="2.5">
                    <v-text-field label="Search keyword" hide-details="auto"></v-text-field>
                </v-col>
                <v-btn class="post-list-btn mr-4" color="primary">Filter</v-btn>
                <v-btn class="post-list-btn mr-4" color="primary" @click="createPost()">Create</v-btn>
                <v-btn class="post-list-btn mr-4" color="primary">Upload</v-btn>
                <v-btn class="post-list-btn mr-4" color="primary">Download</v-btn>
            </v-row>
        </v-form>
    </v-card-title>
    <v-container>
        
       
        <v-data-table :headers="headers" :items="showList">
            <template v-slot:[`item.title`]="{ item }">
                <!-- <a v-if="item.title">{{item.title}}</a> -->
                <router-link :to="{ name: 'post-detail', params: { postId: item }}">{{item.title}}</router-link>
            </template>
            <template v-slot:[`item.operation`]="{ item }">
                <v-row v-if="item.title">
                    <div class="operation-btn">
                        <v-btn color="primary" class="post-list-btn" @click="editPost(item)">Edit</v-btn>
                    </div>
                    <div class="operation-btn">
                        <v-btn color="error" class="post-list-btn">Delete</v-btn>
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
