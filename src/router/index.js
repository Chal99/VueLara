import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../pages/user/Login";
import PostList from "../pages/post/PostList";
import UserList from "../pages/user/UserList";
import PostCreate from "../pages/post/PostCreate";
import PostEdit from "../pages/post/PostEdit";
import PostConfirm from"../pages/post/PostConfirm";
import PostDetail from "../pages/post/PostDetail";
import UserDetail from "../pages/user/UserDetail";
import UserCreate from "../pages/user/UserCreate";
import UserConfirm from "../pages/user/UserConfirm";
import UserEdit from "../pages/user/UserEdit";
import Profile from "../pages/user/Profile";
import ProfileEdit from "../pages/user/ProfileEdit";
import ChangePassword from "../pages/user/ChangePassword";
import PostUpload from "../pages/post/PostUpload";
import Test from "../pages/Test";

Vue.use(VueRouter);

const routes = [  
    {
        path: "/test",
        component: Test,
    },
    { path: '/a', redirect: '/post/list' },
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/post/list",
        name: "post-list",
        component: PostList,
    },
    {
        path: "/post/create",
        name: "post-create",
        component: PostCreate,
        props: true,
    },
    {
        path: "/post/confirm",
        name: "post-confirm",
        component: PostConfirm,
        props: true,
    },
    {
        path: "/post/edit",
        name: "post-edit",
        component: PostEdit,
    },
    {
        path: "/post/:postId/detail",
        name: "post-detail",
        component: PostDetail,
        props: true,
    },
    {
        path: "/post/upload",
        name: "post-upload",
        component: PostUpload,
        props: true,
    },
    {
        path: "/user/:userId/detail",
        name: "user-detail",
        component: UserDetail,
        props: true,
    },
    {
        path: "/user/list",
        name: "user-list",
        component: UserList,
    },
    {
        path: "/user/create",
        name: "user-create",
        component: UserCreate,
    },
    {
        path: "/user/confirm",
        name: "user-confirm",
        component: UserConfirm,
    },
    {
        path: "/user/edit",
        name: "user-edit",
        component: UserEdit,
    },
    {
        path: "/user/profile",
        name: "profile",
        component: Profile,
    },
    {
        path: "/user/profile/edit",
        name: "profile-edit",
        component: ProfileEdit,
    },
    {
        path: "/user/changepassword",
        name: "change-password",
        component: ChangePassword,
    },
    {
        path: "/*",
        redirect: "/post/list",
    },
    
];

const router = new VueRouter({
    mode: "history",
    routes,
});

/**
 * This is to handle and check authentication for routing.
 */
// router.beforeEach((to, from, next) => {
//     const loggedIn = $store.getters.isLoggedIn;
//     if (!loggedIn && to.name != "login") {
//         return next("/login");
//     }
//     next();
// });

export default router;
