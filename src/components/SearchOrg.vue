<template>

    <div class="row" >
        <div class="col">
           <input class="form-control" type="text" placeholder="Search..." v-model="keyword" />
    </div>
      <div class="col">
        <router-link class="btn btn-secondary" :to="{ name: 'OrgLists', 
          params: { orgLists: searchedOrg }}">Search</router-link>
      </div>
     
    </div>

</template>
<style>
    

    
</style>

<script>
import OrgLists from "./OrgLists";
export default {
  name: "SearchOrg",
  data() {
    return {
      keyword: ""
    };
  },
  props: ["OrgList"],
  computed: {
    searchedOrg: function() {
      return this.OrgList.filter(item => {
        return (
          item.orgType.match(this.keyword) ||
          item.orgName.match(this.keyword) ||
          item.orgState.match(this.keyword)
        );
      });
    }
  },
  components: {
    OrgLists
  }
};
</script>