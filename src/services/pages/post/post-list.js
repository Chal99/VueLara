import { mapGetters } from "vuex";
export default {
    data() {
        return {
            postInfo: null,
            dialogTitle: "",
            dialog: false,
            isDeleteDialog: false,
            id:'',
            title:'',
            description:'',
            headerList: [
                {
                    text: "ID",
                    align: "start",
                    value: "id",
                },
                {
                    text: "Post Title",
                    value: "title",
                },
                {
                    text: "Post Desciption",
                    value: "description",
                },
                {
                    text: "Posted User",
                    value: "user.name",
                },
                {
                    text: "Posted Date",
                    value: "created_at",
                },
                {
                    text: "Operation",
                    value: "operation",
                },
            ],
            postList: [],
            postlist:{
                id:'',
                status:'',
                title:'',
                description:''
            },
            showList: [],

        };
    },
    computed: {
        ...mapGetters(["isLoggedIn"]),
        headers() {
            if (!this.isLoggedIn) {
                // return this.headerList.slice(0, this.headerList.length - 1); for isnot login
                return this.headerList;
            } else {
                return this.headerList;
            }
        },
    },
    mounted() {
        this.$axios
            .get("/post")
            .then((response) => {
                this.postList = response.data;
                this.showList = this.postList;
            })
            .catch((err) => {
                console.log(err);
            });
    },
    methods: {
        /**
         * This is to filter posts of datatable.
         * @returns void
         */
        filterPosts() {
            this.showList = this.postList.filter((post) => {
                return (
                    post.title.includes(this.keyword) ||
                    post.description.includes(this.keyword) ||
                    post.create_user_id.includes(this.keyword) ||
                    post.created_at.includes(this.keyword)
                );
            });
        },

        /**
         * This is to create post.
         * @returns array
         */
        createPost(){
            this.$router.push({name:'post-create'})
        },
        /**
         * This is to create post.
         * @returns array
         */
        editPost(item){
            this.$router.push({
                name: 'post-edit', 
                params: { item: item }
            });
        },
    },
};
