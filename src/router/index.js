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
//     const loggedIn = store.getters.isLoggedIn;
//     if (!loggedIn && to.name != "login") {
//         return next("/login");
//     }
//     next();
// });

export default router;
