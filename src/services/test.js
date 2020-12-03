export default {
    data() {
        return {
            title :"",
        };
    },
    methods: {
        getDataFromServer() {
           return this.title="TeatingTitle";
        },
    },
    mounted() {
        this.$axios
            .get("/test")
            .then((response) => {
                this.title = response.data;
            })
            .catch((err) => {
                console.log(err);
            });
    },
};