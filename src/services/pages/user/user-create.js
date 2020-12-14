export default {
    data: () => ({
        show:false,
        userList: [],
        userlist: {
            id: '',
            name: '',
            nameRules: [
                v => !!v || 'Name is required',
              ],
            email: '',
            emailRules: [
                v => !!v || 'Email is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
              ],
            password: '',
            passwordRules: [
                v => !!v || 'Password is required',
              ],
            confirmpassword: '',
            confirmpasswordRules: [
                v => !!v || 'Confirm Password is required',
              ],
            type: null,
            items: [
              'User',
              'Admin'
            ],
            typeRules: [
                v => !!v || 'Type is required',
              ],
            phone: '',
            phoneRules: [
                v => !!v || 'Phone is required',
              ],
            dob: '',
            dobRules: [
                v => !!v || 'Date Of Birth is required',
              ],
            address: '',
            addressRules: [
                v => !!v || 'Address is required',
              ],
            profile: '',
            profileRules: [
                v => !!v || 'Profile is required',
              ],
        },
        imagePreview: null,
        showPreview: false,
        profileurl: '/storage/uploads/'
    }),
    methods: {
        uploadProfile() {
            this.$refs.profileInput.click();//to ref input hidden in this function
        },
        onUploadProfile(e) {
            this.imagePreview = "Selected File: " + e.target.files[0].name;
            this.userlist.profile = this.$refs.profileInput.files[0];
            console.log(this.userlist.profile);

        },
        validate() {
            this.$refs.form.validate()
            // form data
            let formData = new FormData();
            formData.append('profile', this.userlist.profile);
            console.log(this.userlist.profile);
            // send upload request
            this.$axios.post('/user/image',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }) ;
            
                this.$router.push({
                    name: 'user-confirm', 
                    params: { userlist: this.userlist }
                });
        },

        reset() {
            this.$refs.form.reset();
        }

    }
};