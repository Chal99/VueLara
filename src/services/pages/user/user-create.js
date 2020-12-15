export default {
    data: () => ({
        show:false,
        userList: [],
        user: {
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
        profileurl: '/storage/uploads/',
        url:null,
    }),
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
        onUploadProfile(e) {
            const file = e.target.files[0];
            this.url = URL.createObjectURL(file);
            this.user.profile = this.$refs.profileInput.files[0];
        },
        /**
         * 
         * This is to send profile image to server side storage.
         * @returns void
         */
        validate() {
            this.$refs.form.validate()
            // form data
            let formData = new FormData();
            formData.append('profile', this.user.profile);
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
                    params: { user: this.user }
                });
        },
         /**
         * 
         * This is to reset form data.
         * @returns void
         */
        reset() {
            this.$refs.form.reset();
        }

    }
};