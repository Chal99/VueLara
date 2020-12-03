<template>
    <p>{{title}}</p>
</template>

<script>
export default {
    data() {
        return {
            title : null,
        };
    },
    methods: {
        getDataFromServer() {
           return this.title="TeatingTitle";
        },
    },
    mounted() {
        this.$axios
            .get("/post/list")
            .then((response) => {
                this.title = response.data;
            })
            .catch((err) => {
                console.log(err);
            });
    },
};
</script>