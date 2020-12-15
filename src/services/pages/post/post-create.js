export default {
    data: () => ({
            postList: [],
            postlist:{
                valid: true,
                id:'',
                status:'',
                title:'',
                titleRules: [
                    v => !!v || 'Title is required',
                  ],
                description:'',
                descriptionRules: [
                    v => !!v || 'Description is required',
                  ],
            },
    }),
    methods: {
        validate () {
          this.$refs.form.validate()
          this.$router.push({
            name: 'post-confirm', 
            params: { postlist: this.postlist }
        });
        },
        reset() {
            this.$refs.form.reset()
        },
    }
};