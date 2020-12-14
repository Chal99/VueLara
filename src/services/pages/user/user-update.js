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
                profile: '',
            },
            image_url:process.env.VUE_APP_IMAGE,
            newProfile:'',
            newProfileLink:'',
            _method: 'PUT',
        };
    },
    methods: {
        uploadProfile() {
            this.$refs.profileInput.click();//to ref input hidden in this function
        },
        onUploadProfile() {
            // this.imagePreview = "Selected File: " + e.target.files[0].name;
            this.newProfile = this.$refs.profileInput.files[0];
            this.newProfileLink = this.$refs.profileInput.files[0].name;
            this.userlist.profile= this.newProfile;
        },

        /**
         * 
         * This is to store post.
         * @returns array
         */
        updateUser(){
            // form data
            if(this.userlist.profile){
            let formData = new FormData();
            console.log(this.userlist.profile)
            formData.append('profile', this.userlist.profile || this.$route.params.item.profile);
            formData.append('name', this.userlist.name || this.$route.params.item.name);
            formData.append('email', this.userlist.email || this.$route.params.item.email);
            formData.append('type', this.userlist.type || this.$route.params.item.type);
            formData.append('phone', this.userlist.phone || this.$route.params.item.phone);
            formData.append('dob', this.userlist.dob || this.$route.params.item.dob);
            formData.append('address', this.userlist.address || this.$route.params.item.address);
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
                    else{
                        console.log('error');
                    }
                })
            }
        },
    },
};
