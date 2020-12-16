export default {
    data() {
        return {
            postList: [],
            post:{
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
        storePost(){
            this.$axios.post("/post",this.post=this.$route.params.post)
                .then((response)=> { 
                    if(response) {
                        this.$router.push({name:'post-list'})
                    }
                    else{
                        console.log('sds');
                    }
                })
        },
        /**
         * This is to create post.
         * @returns array
         */
        confirmBack(){
            this.$router.push({
                name: 'post-create', 
                params: { post: this.$route.params.post }
            });
        },
        
    },
};
