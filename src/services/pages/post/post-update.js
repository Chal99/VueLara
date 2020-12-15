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
        updatePost(){
            this.post.title=this.post.title||this.$route.params.item.title;
            this.post.description=this.post.description||this.$route.params.item.description;
            this.$axios.put(`/post/${this.$route.params.item.id}`,this.post)
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
