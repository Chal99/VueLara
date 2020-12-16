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
import store from "../store/index.js";
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
        meta:{
            authorize:[0,1
            ]
        }
    },
    {
        path: "/post/confirm",
        name: "post-confirm",
        component: PostConfirm,
        props: true,
        meta:{
            authorize:[0,1
               
            ]
        }
    },
    {
        path: "/post/edit",
        name: "post-edit",
        component: PostEdit,
        meta:{
            authorize:[
                0,1
            ]
        }
    },
    {
        path: "/post/:postId/detail",
        name: "post-detail",
        component: PostDetail,
        props: true,
        meta:{
            authorize:[
                0,1
            ]
        }
    },
    {
        path: "/post/upload",
        name: "post-upload",
        component: PostUpload,
        props: true, 
        meta:{
            authorize:[
                0,1
            ]
        }
    },
    {
        path: "/user/:userId/detail",
        name: "user-detail",
        component: UserDetail,
        props: true,
        meta:{
            authorize:[
                0
            ]
        }
    },
    {
        path: "/user/list",
        name: "user-list",
        component: UserList,
        meta:{
            authorize:[
                0
            ]
        }
    },
    {
        path: "/user/create",
        name: "user-create",
        component: UserCreate,
        meta:{
            authorize:[
                0
            ]
        }
    },
    {
        path: "/user/confirm",
        name: "user-confirm",
        component: UserConfirm,
        meta:{
            authorize:[
                0
            ]
        }
    },
    {
        path: "/user/edit",
        name: "user-edit",
        component: UserEdit,
        meta:{
            authorize:[
                0
            ]
        }
    },
    {
        path: "/user/profile",
        name: "profile",
        component: Profile,
        meta:{
            authorize:[
                0,1
            ]
        }
    },
    {
        path: "/user/profile/edit",
        name: "profile-edit",
        component: ProfileEdit,
        meta:{
            authorize:[
                0,1
            ]
        }
    },
    {
        path: "/user/changepassword",
        name: "change-password",
        component: ChangePassword,
        meta:{
            authorize:[
                0,1
            ]
        }
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
router.beforeEach((to, from, next) => {
    const { authorize } = to.meta;
    const loggedIn = store.getters.isLoggedIn;
    const userType = store.getters.userType;
   
    if(authorize && authorize.length){
        if(authorize.includes(+userType)){
            return next();
        } else {
            return next("/post/list");
        }
    }
    else if (loggedIn && to.name == "login") {
        return next("/post/list");
    }
    
    next();
});

export default router;
