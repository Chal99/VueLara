import moment from 'moment'
export default {
    data() {
        return {
            post: [],
            image_url: process.env.VUE_APP_IMAGE
        };
    },
    mounted() {
        this.$axios.get(`/post/${this.$route.params.postId}`)
            .then((response) => {
                this.post = response.data;
            })
    },
    filters: {
        moment: function (date) {
            return moment(date).format('MMMM Do YYYY, h:mm:ss a');
        }
    }

};
