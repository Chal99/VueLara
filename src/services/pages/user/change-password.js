export default {
    data() {
        return {
            userlist: {
                currentpassword: '',
                newpassword: '',
                confirmpassword: '',
            },
            userId: this.$store.getters.userId,
            userPassword: this.$store.getters.userPassword,
            confirmerror:"",
            currentpassworderror:"",
            newpassworderror:"",
            statusText:null,
            currentpasswordRules:[
                value=>!!value || "The field is required.",
            ],
            newpasswordRules:[
                value=>!!value || "The field is required.",
            ],
            confirmpasswordRules:[
                value=>!!value|| "The field is required.",
            ],

        };
    },
    methods: {
        /**
         * 
         * This is to store user.
         * @returns array
         */
        changePassword() {

            console.log(this.userlist)
            this.$refs.form.validate()
            this.$axios.post(`/user/validatepassword/${this.userId}`, this.userlist)
            .then(function(response){
                console.log(response.statusText);
                // this.$axios.put(`/user/changepassword/${this.userId}`, {newpassword:this.userlist.newpassword})
            })
            .catch((error) => {
                     this.confirmerror = error.response.data.errors.confirmpassword;
                     this.currentpassworderror=error.response.data.errors.currentpassword;
                     this.newpassworderror=error.response.data.errors.newpassword;
                });

            
                
        },
    },
};
