<template>
    <div>
        <div>
            <b-navbar toggleable="lg" type="dark" variant="secondary" fixed="top">
                <b-navbar-brand href="#">Thanksgiving</b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>

                    <!-- Right aligned nav items -->
                    <NavBar></NavBar>
                </b-collapse>
            </b-navbar>
        </div>
        <div class="main-card">
            <b-card v-bind="mainProps" overlay 
                    img-src="https://picsum.photos/id/413/1400/600"
                    img-alt="Card Image"
                    text-variant="white">
                <b-card-text>
                    <br /><br /><br /><br />Support your organisation with Thanksgiving
                </b-card-text>
            </b-card>
        </div>
        <br />
        <SearchOrg :OrgList="searchOrgLists"></SearchOrg>
        <br />

        <p class="info">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p><br />

        <div class="categories">
            <br /><h3>Categories</h3><br />
            <b-card-group deck>
                <b-card overlay img-src="https://picsum.photos/200/200/?image=508" img-alt="Card Image"
                        text-variant="white" 
                        title="Parishes">
                    <b-card-text>
                       
                    </b-card-text>
                </b-card>

                <b-card overlay img-src="https://picsum.photos/200/200/?image=1" img-alt="Image"
                        text-variant="white" title="Schools"></b-card>

                <b-card overlay img-src="https://picsum.photos/200/200/?image=1041" img-alt="Image" img-top></b-card>
            </b-card-group>
            <br /><br />
        </div>


    </div>

</template>

<style lang="css">
    .main-card {
        font-size: 40px;
        text-align: center;
        padding: 0;
        margin: 0 !important;
        padding-left:0;
    }
    .search-bar{
        
    }
    .categories{
        width: 55%;
        background-color:white;
        margin-bottom:10px;
        text-align:center;
        border-radius:25px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        padding-left:25px;
        padding-right:25px;
    }
    h3{
       color:darkslategray;
    }
    .info{
        width: 80%;
        display: block;
        margin-left: auto;
        margin-right: auto;
        padding: 25px;
        background-color:white;
    }
    
</style>

<script>
import SearchOrg from "./SearchOrg";
import OrgLists from "./OrgLists";
import SearchByCat from "./SearchByCat";
import SearchByParishes from "./SearchByParishes";
import Payment from "./Payment";
import NavBar from "./NavBar";
export default {
  name: "Home",
  data() {
    return {
      keyword: "",
        searchOrgLists: this.orgLists,
        mainProps: { display: block, margin: 0, class: 'm1' }
    };
  },
  components: {
    SearchOrg,
    OrgLists,
    SearchByCat,
    SearchByParishes,
    Payment,
    NavBar
  },
  props: ["orgLists"]
};
</script>