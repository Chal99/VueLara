import { mapGetters } from "vuex";
export default {
  data() {
    return {
      image_url: process.env.VUE_APP_IMAGE
    }
  },
  computed: {
    ...mapGetters([
      "userName",
      "userEmail",
      "userPhone",
      "userDob",
      "userAddress",
      "userProfile"
    ]),
    userType() {
      if (this.$store.getters.userType === "1") {
        return "User";
      }
      return "Admin"
    }
  },
  methods: {
    /**
       * This is to back.
       */
    close() {
      this.$router.push({ name: 'post-list' })
    },
    /**
       * This is to edit page
       */
    editProfile() {
      this.$router.push({ name: 'profile-edit' })
    },
    /**
       * This is to RESET password
       */
    changePassword() {
      this.$router.push({ name: 'change-password' })
    },

  }
};
