import moment from 'moment'
export default {
    data() {
        return {
            user:[],
            image_url:process.env.VUE_APP_IMAGE
        };
    },
    mounted() {
        this.$axios.get(`/user/${this.$route.params.userId}`)
        .then((response) => {
            this.user = response.data;
        })
    },
    filters: {
        moment: function (date) {
            return moment(date).format('MMMM Do YYYY, h:mm:ss a');
        }
    }


};
