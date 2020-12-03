<template>
<v-card>
    <v-card-title>
        User list
        <v-spacer></v-spacer>
        <v-form ref="form">
            <v-row class="filter-bar">
                <v-col md="2.5">
                    <v-text-field label="Search Name" hide-details="auto"></v-text-field>
                </v-col>
                 <v-col md="2.5">
                    <v-text-field label="Search Email" hide-details="auto"></v-text-field>
                </v-col>
                 <v-col md="2.5">
                    <v-text-field label="Search From" hide-details="auto"></v-text-field>
                </v-col>
                 <v-col md="2.5">
                    <v-text-field label="Search To" hide-details="auto"></v-text-field>
                </v-col>
                <v-btn class="user-list-btn mr-4" color="primary">Search</v-btn>
            </v-row>
        </v-form>
    </v-card-title>
    <v-container>
        <v-data-table :headers="headers" :items="showList">
            <template v-slot:[`item.type`]="{ item }">
                <a v-if="item.type">{{ item.type==0 ? "Admin":"User" }}</a>
            </template>
            <template v-slot:[`item.operation`]="{ item }">
                <v-row v-if="item.title">
                    <div class="operation-btn">
                        <v-btn color="primary" class="user-list-btn">Edit</v-btn>
                    </div>
                    <div class="operation-btn">
                        <v-btn color="error" class="user-list-btn">Delete</v-btn>
                    </div>
                </v-row>
            </template>
        </v-data-table>
    </v-container>
</v-card>
</template>

<script src="../../services/user/user-list.js">
</script>

