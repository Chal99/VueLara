import { mapGetters } from "vuex";
export default {
    data() {
        return {
            typeCheck: 0,
            postInfo: null,
            dialogTitle: "",
            dialog: false,
            isDeleteDialog: false,
            headerList: [
                {
                    text: "ID",
                    align: "start",
                    value: "id",
                },
                {
                    text: "Name",
                    value: "name",
                },
                {
                    text: "Email",
                    value: "email",
                },
                {
                    text: "Created User",
                    value: "create_user_id",
                },
                {
                    text: "Type",
                    value: "type",
                },
                {
                    text: "Phone",
                    value: "phone",
                },
                {
                    text: "Date Of Birth",
                    value: "dob",
                },
                {
                    text: "Address",
                    value: "address",
                },
                {
                    text: "Created_Date",
                    value: "created_at",
                },
                {
                    text: "Updated_Date",
                    value: "updated_at",
                },
                {
                    text: "Operation",
                    value: "operation",
                },
            ],
            userList: [],
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
            .get("/user/list")
            .then((response) => {
                this.userList = response.data;
                this.showList = this.userList;
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
            this.showList = this.userList.filter((user) => {
                return (
                    user.name.includes(this.keyword) ||
                    user.email.includes(this.keyword) ||
                    user.create_user_id.includes(this.keyword) ||
                    user.type.includes(this.keyword) ||
                    user.phone.includes(this.keyword) ||
                    user.dob.includes(this.keyword) ||
                    user.address.includes(this.keyword) ||
                    user.created_at.includes(this.keyword) ||
                    user.updated_at.includes(this.keyword)
                );
            });
        },
        
    },
};
