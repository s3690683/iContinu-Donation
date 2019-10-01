<template>
    <div id="navigation">
        <b-navbar toggleable="lg" type="dark" class="nav-background" fixed="top">
            <b-navbar-brand href="#">Thanks</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item><router-link id="nav-item" class="btn btn-outline text-light" to="/Home">Home</router-link></b-nav-item>
                    <b-nav-item><router-link id="nav-item" class="btn btn-outline text-light" to="/OrgLists">Organisations</router-link></b-nav-item>
                    <b-nav-item><router-link id="nav-item" class="btn btn-outline text-light" to="/About">About</router-link></b-nav-item>
                    <b-nav-item v-if="isAdmin" to="/AdminReport">Report</b-nav-item>
                    <b-nav-item v-if="isCustomer" to="/DonorReport">Report</b-nav-item>
                    <b-nav-item v-if="isOrganisation" to="/OrganisationReport">Report</b-nav-item>
                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template v-slot:button-content>
                            <b-button class="btn-sm">My Account</b-button>
                        </template>
                        <b-dropdown-item><router-link to="/LoginUser">Login</router-link></b-dropdown-item>
                        <b-dropdown-item><router-link to="/RegisterUser">Register</router-link></b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <auth-modal :show="showAuthModal" />
    </div>
</template>
<style scoped>
    .nav-background{
        background:#004e94;
    }
    .btn-sm{
        background-color:#ffd900;
        color:#004e94;
    }
    #nav-item{
        font-size:17px;
    }
</style>
<script>
import AuthModal from "./AuthModal"
import AuthNavItem from "./AuthNavItem"

export default {
  name: "NavBar",
  components: {
    AuthNavItem,
    AuthModal
  },
  computed: {
    showAuthModal() {
      return this.$store.state.showAuthModal;
    },
    isAdmin() {
      return this.$store.getters.isInRole("Admin");
    },
    isOrganisation() {
      return this.$store.getters.isInRole("Organisation");
    },
    isCustomer() {
      return (
        this.$store.getters.isInRole("Donor") ||
        !this.$store.getters.isAuthenticated
      );
    }
  }
};
</script>