export default {
    data() {
        return {
            postList: [],
            postlist:{
                id:'',
                status:'',
                title:'',
                description:''
            },

        };
    },
    methods: {

        /**
         * 
         * This is to store post.
         * @returns array
         */
        updatePost(){
            this.$axios.put(`/post/${this.$route.params.item.id}`,this.postlist)
                .then((response)=> {
                    if(response) {
                        this.$router.push({name:'post-list'})
                    }
                    else{
                        console.log('error');
                    }
                })
        },
    },
};
