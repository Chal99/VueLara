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
            image_url: process.env.VUE_APP_IMAGE,
            newProfile: '',
            newProfileLink: '',
            url: null,
            olduserlist: {
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
        };
    },
    computed: {
        userId(){
            this.olduserlist.id=this.$store.getters.userId;
            return this.$store.getters.userId;
        },
        userType() {
            if (this.$store.getters.userType === "1") {
                this.olduserlist.type=this.$store.getters.userType;
                return "User";
            }
            else{
                this.olduserlist.type=this.$store.getters.userType;
                return "Admin";
            }
        },
        userName(){
            this.olduserlist.name=this.$store.getters.userName;
            return this.$store.getters.userName;
        },
        userEmail(){
            this.olduserlist.email=this.$store.getters.userEmail;
            return this.$store.getters.userEmail;
        },
        userPhone(){
            this.olduserlist.phone=this.$store.getters.userPhone;
            return this.$store.getters.userName;
        },
        userAddress(){
            this.olduserlist.address=this.$store.getters.userAddress;
            return this.$store.getters.userAddress;
        },
        userDob(){
            this.olduserlist.dob=this.$store.getters.userDob;
            return this.$store.getters.userDob;
        },
        userProfile(){
            this.olduserlist.profile=this.$store.getters.userProfile;
            return this.$store.getters.userProfile;
        },
    },
    methods: {
        /**
         * 
         * This is to ref input hidden for upload.
         * @returns array
         */
        uploadProfile() {
            this.$refs.profileInput.click();//to ref input hidden in this function
        },

        /**
         * 
         * This is to get file from input.
         * @returns array
         */
        onFileChange(e) {
            const file = e.target.files[0];
            this.url = URL.createObjectURL(file);

            this.newProfileLink = this.$refs.profileInput.files[0].name;


            this.userlist.profile = file;
            console.log(this.userlist.profile);
        },


        /**
         * 
         * This is to get file from input.
         * @returns array
         */
        // onUploadProfile() {
        //     // this.imagePreview = "Selected File: " + e.target.files[0].name;
        //     this.newProfile = this.$refs.profileInput.files[0];
        //     this.newProfileLink = this.$refs.profileInput.files[0].name;

        //     this.userlist.profile= this.newProfile;
        // },

        /**
         * 
         * This is to update profile-user.
         * @returns array
         */
        updateProfile() {
            // form data
                let formData = new FormData();
                formData.append('profile', this.userlist.profile || this.$store.getters.userProfile);
                formData.append('name', this.userlist.name || this.$store.getters.userName);
                formData.append('email', this.userlist.email ||this.$store.getters.userEmail);
                formData.append('type', this.userlist.type || this.$store.getters.userType);
                formData.append('phone', this.userlist.phone || this.$store.getters.userPhone);
                formData.append('dob', this.userlist.dob || this.$store.getters.userDob);
                formData.append('address', this.userlist.address || this.$store.getters.userAddress);
                formData.append('_method', 'PUT');

                // send upload request
                this.$axios.post(`/user/${this.$store.getters.userId}`,
                    formData,
                    {
                        headers: {
                            'Content-Type': 'x-www-form-urlencoded',
                        }
                    })
                    .then((response) => {
                        if (response) {
                            this.$router.push({ name: 'post-list' })
                        }
                        else {
                            console.log('error');
                        }
                    })
        },
        /**
         * 
         * This is to reset form.
         * @returns array
         */
        reset() {
            this.$refs.form.reset();
        }
    },
};
