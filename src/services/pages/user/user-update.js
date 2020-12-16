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
                profile: '',
            },
            image_url:process.env.VUE_APP_IMAGE,
            newProfile:'',
            newProfileLink:'',
            error:"",
        };
    },
    methods: {
        /**
         * 
         * This is to to ref input hidden in this function.
         * @returns void
         */
        uploadProfile() {
            this.$refs.profileInput.click();
        },
        /**
         * 
         * This is to set user profile.
         * @returns void
         */
        onUploadProfile() {
            this.newProfile = this.$refs.profileInput.files[0];
            this.newProfileLink = this.$refs.profileInput.files[0].name;
            this.user.profile= this.newProfile;
        },

        /**
         * 
         * This is to update user.
         * @returns array
         */
        updateUser(){
            // form data
            if(this.user.profile){
            let formData = new FormData();
            console.log(this.user.profile)
            formData.append('profile', this.user.profile || this.$route.params.item.profile);
            formData.append('name', this.user.name || this.$route.params.item.name);
            formData.append('email', this.user.email || this.$route.params.item.email);
            formData.append('type', this.user.type || this.$route.params.item.type);
            formData.append('phone', this.user.phone || this.$route.params.item.phone);
            formData.append('dob', this.user.dob || this.$route.params.item.dob);
            formData.append('address', this.user.address || this.$route.params.item.address);
            formData.append('_method', 'PUT');
            
            // send upload request
            this.$axios.post(`/user/${this.$route.params.item.id}`,
                formData,
                {
                    headers: {
                        'Content-Type': 'x-www-form-urlencoded',
                    }
                })
                .then((response)=> {
                    if(response) {
                        this.$router.push({name:'user-list'})
                    }
                })
                .catch(error=>{
                    this.error=error.response.data.errors;
                })
            }
        },

         /**
         * 
         * This is to reset form data.
         * @returns void
         */
        reset() {
            this.$refs.form.reset();
        }
    },
};
