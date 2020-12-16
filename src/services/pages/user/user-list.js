import { mapGetters } from "vuex";
import moment from 'moment'

export default {
    data() {
        return {
            typeCheck: 0,
            postInfo: null,
            dialogTitle: "",
            dialog: false,
            isDeleteDialog: false,
            headerList: [
                {
                    text: "ID",
                    align: "start",
                    value: "id",
                },
                {
                    text: "Name",
                    value: "name",
                },
                {
                    text: "Email",
                    value: "email",
                },
                {
                    text: "Created User",
                    value: "user.name",
                },
                {
                    text: "Type",
                    value: "type",
                },
                {
                    text: "Phone",
                    value: "phone",
                },
                {
                    text: "Date Of Birth",
                    value: "dob",
                },
                {
                    text: "Address",
                    value: "address",
                },
                {
                    text: "Created_Date",
                    value: "created_at",
                },
                {
                    text: "Updated_Date",
                    value: "updated_at",
                },
                {
                    text: "Operation",
                    value: "operation",
                },
            ],
            userList: [],
            userlist:{
                id:'',
                name:'',
                email:'',
                password:'',
                confirmpassword:'',
                type:'',
                phone:'',
                dob:'',
                address:'',
                profile:'',
            },
            showList: [],
        };
    },
    computed: {
        ...mapGetters(["isLoggedIn"]),
        headers() {
            if (!this.isLoggedIn) {
                // return this.headerList.slice(0, this.headerList.length - 1); for isnot login
                return this.headerList;
            } else {
                return this.headerList;
            }
        },
    },
    mounted() {
        this.listUser();
    },
    filters: {
        moment: function (date) {
            return moment(date).format('MMMM Do YYYY, h:mm:ss a');
        }
    },
    methods: {

        /**
         * This is to filter posts of datatable.
         * @returns void
         */
        filterPosts() {
            this.showList = this.userList.filter((user) => {
                return (
                    user.name.includes(this.keyword) ||
                    user.email.includes(this.keyword) ||
                    user.create_user_id.includes(this.keyword) ||
                    user.type.includes(this.keyword) ||
                    user.phone.includes(this.keyword) ||
                    user.dob.includes(this.keyword) ||
                    user.address.includes(this.keyword) ||
                    user.created_at.includes(this.keyword) ||
                    user.updated_at.includes(this.keyword)
                );
            });
        },

        /**
         * This is to show list of user.
         * @returns array
         */
        listUser(){
            this.$axios
            .get("/user")
            .then((response) => {
                this.userList = response.data;
                this.showList = this.userList;
            })
            .catch((err) => {
                console.log(err);
            });
        },

        /**
         * This is to edit user.
         * @returns array
         */
        editUser(item){
            this.$router.push({
                name: 'user-edit', 
                params: { item: item }
            });
        },

        /**
         * This is to delete user.
         * @returns array
         */
        deleteUser(id){

            if(! confirm('Are You sure to delete?')){
                return;
            }
            this.$axios.delete(`/user/${id}`)
                    .then((response)=> {
                        if(response) {
                           this.listUser();
                        }
                        else{
                            console.log('error');
                        }
                    });
        },


        
    },
};
