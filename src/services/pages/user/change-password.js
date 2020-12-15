export default {
    data() {
        return {
            user: {
                currentpassword: '',
                newpassword: '',
                confirmpassword: '',
            },
            userId: this.$store.getters.userId,
            userPassword: this.$store.getters.userPassword,
            confirmerror: "",
            currentpassworderror: "",
            newpassworderror: "",
            statusText: null,
            currentpasswordRules: [
                value => !!value || "The field is required.",
            ],
            newpasswordRules: [
                value => !!value || "The field is required.",
            ],
            confirmpasswordRules: [
                value => !!value || "The field is required.",
            ],
        };
    },
    methods: {
        /**
         * 
         * This is to change user password.
         */
        changePassword() {
            this.$refs.form.validate();
            this.$axios.post(`/user/changepassword/${this.userId}`, this.user)
                .then((response)=> {
                    if(response){
                        this.$router.push({ name: 'user-list' })
                    }
                })
                .catch((error) => {
                    this.confirmerror = error.response.data.errors.confirmpassword;
                    this.currentpassworderror = error.response.data.errors.currentpassword;
                    this.newpassworderror = error.response.data.errors.newpassword;
                });
        },
    },
};
