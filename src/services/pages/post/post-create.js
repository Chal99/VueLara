export default {
  data: () => ({
    postList: [],
    post: {
      valid: true,
      id: '',
      status: '',
      title: '',
      titleRules: [
        v => !!v || 'Title is required',
      ],
      description: '',
      descriptionRules: [
        v => !!v || 'Description is required',
      ],
    },
  }),
  methods: {
    /**
    * 
    * This is to send profile image to server side storage.
    * @returns void
    */
    validate() {
      this.$refs.form.validate()
      this.$router.push({
        name: 'post-confirm',
        params: { post: this.post }
      });
    },
    
    /**
    * 
    * This is to reset form data.
    * @returns void
    */
    reset() {
      this.$refs.form.reset()
    },
  }
};