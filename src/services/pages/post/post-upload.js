export default {
    data: () => ({
        show:false,
        file:"",
    }),
    methods: {
        upload() {
            this.$refs.ExcelInput.click();//to ref input hidden in this function
        },
        onUpload() {
            this.file = this.$refs.ExcelInput.files[0];
        },
        uploadPost() {
            // form data
            let formData = new FormData();
            console.log(this.file);
            formData.append('file', this.file);
            this.$axios.post('/post/import',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then(response=>{
                    console.log(response);
                    this.$router.push({
                        name: 'post-list'
                    });
                })
                
        },

        cancel() {
            this.$router.push({
                name: 'post-list'
            });
        }

    }
};