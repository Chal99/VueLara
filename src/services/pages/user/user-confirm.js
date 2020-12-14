export default {
    data() {
        return {
            userList: [],
            userlist: {
                id: '',
                name: '',
                email: '',
                password: '',
                type: '',
                phone: '',
                dob: '',
                address: '',
                profile: 'as',
            },
            image_url:process.env.VUE_APP_IMAGE,
            image:{
                id:'',
                name:'',
                path:'',
            }

        };
    },
    mounted() {
        this.$axios
            .get("/user/image/confirm")
            .then((response) => {
                this.image = response.data;
                // this.userlist.profile=this.image.path;
            })
            .catch((err) => {
                console.log(err);
            });
    },
    methods: {
        /**
         * 
         * This is to store user.
         * @returns array
         */
        storeUser(){
            this.userlist=this.$route.params.userlist;
            this.userlist.profile=this.image.path;
            if(this.userlist.type==="Admin"){
                this.userlist.type="0";
            }
            else{
                this.userlist.type="1";
            }
            console.log(this.userlist);
            this.$axios.post("/user",this.userlist=this.$route.params.userlist)
                .then((response)=> { 
                    if(response) {
                        this.$router.push({name:'user-list'})
                    }
                    else{
                        console.log('error');
                    }
                })
        },
    },
};
