<template>
    <div id="main-app" class="container">
        <router-view :orgLists="organLists"></router-view>
        <NavBar></NavBar>
    </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import About from "./components/About"
import OrgLists from "./components/OrgLists"
import Home from "./components/Home"
import SearchByCat from "./components/SearchByCat";
import SearchByParishes from "./components/SearchByParishes";
import SearchOrg from "./components/SearchOrg";

import NavBar from "./components/NavBar";

export default {
  name: "MainApp",
  data: function() {
    return {
      title: "Organizationn List",
     organLists: []
    };
  },
  components: {
    FontAwesomeIcon,
    About,
    OrgLists,
    Home,
    SearchByCat,
    SearchByParishes,
    NavBar
  },
  mounted() {
    fetch("http://icontinu-dev.ap-southeast-2.elasticbeanstalk.com/api/OrgTbls")           
                .then(response => response.json())
                .then(data => {
                    this.organLists = data;
                });
  }
};
</script>

