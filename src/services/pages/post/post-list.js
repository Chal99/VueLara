import { mapGetters } from "vuex";
import moment from 'moment'

export default {
    data() {
        return {
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
            post: {
                id: '',
                status: '',
                title: '',
                description: ''
            },
            showList: [],
            search: '',
            error:'',
            loginType:this.$store.getters.userType,

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
        this.listPost();
    },
    filters: {
        moment: function (date) {
            return moment(date).format('MMMM Do YYYY, h:mm:ss a');
        }
    },
    methods: {
        /**
         * This is for search by title.
         * @returns void
         */
        searchPost() {
            this.$axios.get('/post?search=' + this.search)
                .then((response) => {
                    if (response) {
                        this.showList = response.data;
                    }
                    else {
                        console.log('error');
                    }
                });
        },
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
         * This is to show list of post.
         * @returns array
         */
        listPost() {
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
        /**
        * This is to create post.
        * @returns array
        */
        createPost() {
            this.$router.push({ name: 'post-create' })
        },

        /**
        * This is to upload post.
        * @returns array
        */
        uploadPost() {
            this.$router.push({ name: 'post-upload' })
        },

        /**
         * This is to edit post.
         * @returns array
         */
        editPost(item) {
            this.$router.push({
                name: 'post-edit',
                params: { item: item }
            });
        },

        /**
         * This is to delete post.
         * @returns array
         */
        deletePost(id) {

            if (!confirm('Are You sure to delete?')) {
                return;
            }
            this.$axios.delete(`/post/${id}`)
                .then((response) => {
                    if (response) {
                        this.listPost();
                    }
                })
                .catch(error=>{
                    this.error=error.response.data.errors;
                })
        },
    },
};
