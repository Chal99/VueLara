export default {
    data() {
        return {
            userList: [],
            user: {
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
            },
            error:"",

        };
    },
    mounted() {
        this.$axios
            .get("/user/image/confirm")
            .then((response) => {
                this.image = response.data;
            })
            .catch((err) => {
                this.error=err.response.data.errors;
            });
    },
    methods: {
        /**
         * 
         * This is to store user.
         * @returns array
         */
        storeUser(){
            this.user=this.$route.params.user;
            this.user.profile=this.image.path;
            if(this.user.type==="Admin"){
                this.user.type="0";
            }
            else{
                this.user.type="1";
            }
            this.$axios.post("/user",this.user=this.$route.params.user)
                .then((response)=> { 
                    if(response) {
                        this.$router.push({name:'user-list'})
                    }
                })
                .catch((err) => {
                    this.error=err.response.data.errors;
                });
        },
    },
};
