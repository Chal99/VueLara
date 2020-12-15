import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

axios.defaults.baseURL = process.env.VUE_APP_SERVER;

export default new Vuex.Store({
    state: {
        token:null,
        user:[],
        userlist:{
            id:'',
            name:'',
            email:'',
            password:'',
            confirmpassword:'',
            type:'',
            phone:'',
            dob:'',
            address:'',
            profile:'',
        },
        password:'',
    },
    mutations: {
        loginToken(state, {token,user,password}){
            state.token=token;
            state.user=user;
            state.password=password;
        },
        logoutToken(state){
            state.token=null;
        },
    },
    actions: {
        login({ commit }, credentials) {
            // console.log(credentials.email);
                return axios.post("/login",
                {
                    email:credentials.email,
                    password:credentials.password
                })
                .then(function(response){
                    // console.log(response.data);
                    const token=response.data.accessToken;
                    const user=response.data.user;
                    const password=response.data.password;
                    console.log(user);
                    localStorage.setItem('accessToken',token);
                    commit('loginToken',{token,user,password});
                    
                })
                .catch(error=>{
                    console.log('hi');
                    console.log(error);
                });
        },
        logout({ commit }) {
            return axios.post("/logout")
            .then((response) => {
                console.log(response);
                localStorage.removeItem('access_token');
                commit('logoutToken');
            })
            .catch(error=>{
                console.log(error);
                localStorage.removeItem('access_token');
                commit('logoutToken');
            });
        },
    },
    getters: {
        // isLoggedIn: (state) => !!state.user,
        isLoggedIn(state){
            return state.token!=null;
        },
        // userType: (state) => {
        //     if (state.user && state.user.data.user_type) {
        //         return state.user.data.user_type;
        //     }
        //     return -1;
        // },
        // userId: (state) => {
        //     if (state.user && state.user.data.user_id) {
        //         return state.user.data.user_id;
        //     }
        // },
        userId(state){
            return state.user.id;
        },
        userPassword(state){
            return state.password;
        },
        userName(state){
            return state.user.name;
        },
        userEmail(state){
            return state.user.email;
        },
        userType(state){
            return state.user.type;
        },
        userPhone(state){
            return state.user.phone;
        },
        userDob(state){
            return state.user.dob;
        },
        userAddress(state){
            return state.user.address;
        },
        userProfile(state){
            return state.user.profile;
        },
        // userName: (state) => {
        //     if (state.user && state.user.data.user_name) {
        //         return state.user.data.user_name;
        //     }
        // },
    },
    plugins: [createPersistedState()],
});
